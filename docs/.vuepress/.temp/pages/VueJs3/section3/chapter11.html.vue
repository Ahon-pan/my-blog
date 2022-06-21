<template><div><h1 id="快速-diff-算法" tabindex="-1"><a class="header-anchor" href="#快速-diff-算法" aria-hidden="true">#</a> 快速 Diff 算法</h1>
<p>快速 Diff 算法最早应用于 ivi 和 inferno 这两个框架，在 DOM 操作的各个方面，这个算法性能都要稍优于 Vue.js 2 所采用的双端 Diff 算法。</p>
<h2 id="相同的前置元素和后置元素" tabindex="-1"><a class="header-anchor" href="#相同的前置元素和后置元素" aria-hidden="true">#</a> 相同的前置元素和后置元素</h2>
<h3 id="纯文本-diff-算法" tabindex="-1"><a class="header-anchor" href="#纯文本-diff-算法" aria-hidden="true">#</a> 纯文本 Diff 算法</h3>
<p>不同于简单 Diff 算法和双端 Diff 算法，快速 Diff 算法包含预处理步骤，这借鉴了纯文本 Diff 算法的思路。在纯文本 Diff 算法中，存在对两段文本进行预处理的过程。</p>
<p>例如，在两段文本进行 Diff 之前，可以对它们进行全等比较：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>text1 <span class="token operator">===</span> text2<span class="token punctuation">)</span> <span class="token keyword">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这也成为<strong>快捷路径</strong>。如果两端文本内容相等，就无需进入核心 Diff 算法的步骤了。除此之外，Diff 算法还会处理两段文本的前缀和后缀：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>TEXT1： I use vue <span class="token keyword">for</span> app development
TEXT2： I use react <span class="token keyword">for</span> app development

TEXT1：vue
TEXT2：react
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
TEXT1： I like you
TEXT2： I like you too

TEXT1：
TEXT2：too
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
TEXT1： I like you too
TEXT2： I like you

TEXT1：too
TEXT2：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这么做的好处是，在特定情况下我们能够轻松判断文本的插入和删除。</p>
<h3 id="快速-diff-算法-1" tabindex="-1"><a class="header-anchor" href="#快速-diff-算法-1" aria-hidden="true">#</a> 快速 Diff 算法</h3>
<p>快速 Diff 算法借鉴了纯文本 Diff 算法中的<strong>预处理</strong>的步骤。它会先处理一下新旧子节点里相同的前置节点和后置节点。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/Vuejs3/11.2.1.png" alt=""></p>
<p>处理完前置和后置节点之后，新子节点未处理的部分 <strong>[ j, newEnd ]</strong> 区间内的节点，作为新元素挂载。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/Vuejs3/11.2.2.png" alt=""></p>
<p>处理完前置和后置节点之后，旧子节点未处理的部分 <strong>[ j, oldEnd ]</strong> 区间内的节点要卸载。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children
    <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children
    <span class="token comment">// 更新相同的前缀节点</span>
    <span class="token comment">// 索引 j 指向新旧两组子节点的开头</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    <span class="token keyword">let</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    <span class="token comment">// while 循环向后遍历，直到遇到拥有不同 key 值的节点为止</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>oldVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用 patch 函数更新</span>
        <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
        j<span class="token operator">++</span>
        oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 更新相同的后缀节点</span>
    <span class="token comment">// 索引 oldEnd 指向旧的一组子节点的最后一个节点</span>
    <span class="token keyword">let</span> oldEnd <span class="token operator">=</span> oldChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token comment">// 索引 newEnd 指向新的一组子节点的最后一个节点</span>
    <span class="token keyword">let</span> newEnd <span class="token operator">=</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

    oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>oldEnd<span class="token punctuation">]</span>
    newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>newEnd<span class="token punctuation">]</span>

    <span class="token comment">// while 循环向前遍历，直到遇到拥有不同 key 值的节点为止</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>oldVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用 patch 函数更新</span>
        <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
        oldEnd<span class="token operator">--</span>
        newEnd<span class="token operator">--</span>
        oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>oldEnd<span class="token punctuation">]</span>
        newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>newEnd<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 满足条件，则说明从 j -> newEnd 之间的节点应作为新节点插入</span>
    <span class="token comment">// j > oldEnd：旧节点全部被处理完毕</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> oldEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 锚点的索引</span>
        <span class="token keyword">const</span> anchorIndex <span class="token operator">=</span> newEnd <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token comment">// 锚点元素</span>
        <span class="token keyword">const</span> anchor <span class="token operator">=</span> anchorIndex <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>anchorIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>el <span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token comment">// 采用 while 循环，调用 patch 函数逐个挂载新增的节点</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newChildren<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> newEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// j -> oldEnd 之间的节点应该被卸载</span>
        <span class="token comment">// j > newnd：新节点全部被处理完毕</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">unmount</span><span class="token punctuation">(</span>oldChildren<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移动操作判断" tabindex="-1"><a class="header-anchor" href="#移动操作判断" aria-hidden="true">#</a> 移动操作判断</h2>
<p>之前介绍了快速 Diff 算法的预处理过程，即处理相同的前置节点和后置节点。</p>
<p>但是，之前的例子比较理想化，总是假定新旧子节点有一组会被全部处理完毕。在这种情况下，只需要简单地挂载、卸载节点即可。</p>
<p>我们使用不同的一组新旧子节点来进行说明：</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/Vuejs3/quick.2.1.png" alt=""></p>
<p>经过预处理之后，无论是新的一组子节点还是旧的一组子节点都有节点未处理。我们需要对此进一步处理：</p>
<ul>
<li>判断是否有节点需要移动，以及应该如何移动</li>
<li>找出那些需要被添加或移除的节点</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> oldEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只有需要新增的节点</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> newEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只有需要卸载的节点</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理非理想情况</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="souce-数组" tabindex="-1"><a class="header-anchor" href="#souce-数组" aria-hidden="true">#</a> souce 数组</h3>
<p>首先，我们需要构建一个 source 数组，它的长度为新的一组子节点中剩余未处理节点的数量，source 数组用来存储新的一组子节点中的节点在旧的一组子节点中的位置索引，后面将会使用它计算出一个最长递增子序列，并用于辅助完成 DOM 的移动操作。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/Vuejs3/quick.2.2.png" alt=""></p>
<blockquote>
<p>当遍历剩余的新子节点时，如果这个节点在 source 中对应的值为 -1，表示这个节点无法在旧子节点数组中找到可复用的节点，这就是一个需要新增的节点。</p>
</blockquote>
<p><strong>构建 souce 数组</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> oldEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只有需要新增的节点</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> newEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只有需要卸载的节点</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> newEnd <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">1</span>  <span class="token comment">// 新的一组子节点中剩余未处理节点的数量</span>
    <span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
    source<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    
    <span class="token comment">// oldStart 和 newStart 分别未起始索引，即 j</span>
    <span class="token keyword">const</span> oldStart <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token keyword">const</span> newStart <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token comment">// 遍历旧的一组子节点</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> oldStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token comment">// 遍历新的一组子节点</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> newStart<span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token comment">// 找到拥有相同 key 的可复用节点</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 调用 patch 进行更新</span>
                <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
                <span class="token comment">// 最后填充 source 数组</span>
                source<span class="token punctuation">[</span>k <span class="token operator">-</span> newStart<span class="token punctuation">]</span> <span class="token operator">=</span> i
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>source 记录的是<strong>剩余未处理</strong>的新子节点在旧子节点当中的可复用节点，索引记录的下标要减去 newStart</p>
</blockquote>
<h3 id="索引表降低时间复杂度" tabindex="-1"><a class="header-anchor" href="#索引表降低时间复杂度" aria-hidden="true">#</a> 索引表降低时间复杂度</h3>
<p>🚀 当前的双层 for 循环的时间复杂度未 O(n^2)，我们可以利用<strong>索引表</strong>来把时间复杂度降低到 O(n)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> oldEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只有需要新增的节点</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> newEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只有需要卸载的节点</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> newEnd <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">1</span>  <span class="token comment">// 新的一组子节点中剩余未处理节点的数量</span>
    <span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
    source<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment">// oldStart 和 newStart 分别未起始索引，即 j</span>
    <span class="token keyword">const</span> oldStart <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token keyword">const</span> newStart <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token comment">// 🔥 构建索引表</span>
    <span class="token keyword">const</span> keyIndex <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> newStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        keyIndex<span class="token punctuation">[</span>newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> i
    <span class="token punctuation">}</span>
    <span class="token comment">// 遍历旧的一组子节点中剩余未处理的节点</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> oldStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token comment">// 通过索引表快速找到新的一组子节点中可复用节点的位置</span>
        <span class="token keyword">const</span> k <span class="token operator">=</span> keyIndex<span class="token punctuation">[</span>oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">]</span>
        
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> k <span class="token operator">!==</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
            <span class="token comment">// 调用 patch 函数完成更新</span>
            <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
            <span class="token comment">// 🚀 填充 source 数组</span>
            source<span class="token punctuation">[</span>k <span class="token operator">-</span> newStart<span class="token punctuation">]</span> <span class="token operator">=</span> i
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 没找到，卸载</span>
            <span class="token function">unmount</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span> 
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">构建 source 数组</p>
<ul>
<li>
<p>索引表存着剩余未处理子节点，键值分别为节点 key 和新子节点数组当中的索引：</p>
<p><strong>keyIndex: Record&lt;key, newIdx&gt;</strong></p>
</li>
<li>
<p>在遍历旧子节点数组的过程中，如果无法在新子节点列表中找到可复用节点，则卸载该节点</p>
</li>
<li>
<p>如果找到了可复用节点，则把新子节点对应的旧子节点的索引记录在 source 数组当中</p>
</li>
</ul>
</div>
<h3 id="节点移动判断" tabindex="-1"><a class="header-anchor" href="#节点移动判断" aria-hidden="true">#</a> 节点移动判断</h3>
<p>在遍历旧节点的过程中，如果找到了可复用节点，需要判断这个节点要不要移动。</p>
<ul>
<li>
<p>如果在遍历过程中遇到的索引值呈现递增趋势，则说明不需要移动节点，反之则需要。</p>
</li>
<li>
<p>同时我们还需要一个数量标识，代表已经更新过的节点，<strong>更新过的节点数量应该小于新的一组子节点中需要更新的节点数量</strong></p>
<p><code v-pre>count = newEnd - newStart + 1</code></p>
<p>一旦前者超过了后者，则说明这些节点都是多余的旧节点，应该将它们卸载。</p>
</li>
</ul>
<CodeGroup>
<CodeGroupItem title="节点移动判断">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> oldStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token keyword">const</span> k <span class="token operator">=</span> keyIndex<span class="token punctuation">[</span>oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">]</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> k <span class="token operator">!==</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
    <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
    source<span class="token punctuation">[</span>k <span class="token operator">-</span> newStart<span class="token punctuation">]</span> <span class="token operator">=</span> i
    <span class="token comment">// 判断是否需要移动</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> pos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      moved <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      pos <span class="token operator">=</span> k
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 旧节点没有对应的可复用新节点，卸载其</span>
    <span class="token function">unmount</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="多余旧节点卸载">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> count <span class="token operator">=</span> newEnd <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">1</span>  <span class="token comment">// 新的一组子节点中剩余未处理节点的数量</span>
<span class="token comment">// ...</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> oldStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token comment">// 如果更新过的节点数量小于需要更新的节点数量，则执行更新</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>patched <span class="token operator">&lt;</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> k <span class="token operator">=</span> keyIndex<span class="token punctuation">[</span>oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">]</span>
    <span class="token comment">// 有可复用新节点，执行更新</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> k <span class="token operator">!==</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
      <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
      patched<span class="token operator">++</span>
      source<span class="token punctuation">[</span>k <span class="token operator">-</span> newStart<span class="token punctuation">]</span> <span class="token operator">=</span> i
      <span class="token comment">// 判断是否需要移动</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> pos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 标记 moved 为 true，表示需要移动</span>
        moved <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        pos <span class="token operator">=</span> k
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 没有对应的可复用新节点，卸载</span>
      <span class="token function">unmount</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果更新过的旧节点数量超过了需要更新的节点数量，则卸载它们</span>
    <span class="token function">unmount</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="如何移动元素" tabindex="-1"><a class="header-anchor" href="#如何移动元素" aria-hidden="true">#</a> 如何移动元素</h2>
<p>在上一节中，我们实现了两个目标：</p>
<ul>
<li>判断是否需要进行 DOM 移动操作。我们创建了遍历 moved 作为标识，当它的值为 true 时，说明需要进行 DOM 移动操作。</li>
<li>构建 source 数组。该数组的长度等于新的一组子节点<strong>去掉</strong>相同的前置/后置节点后，剩余未处理节点的数量。source 数组中存储着新的一组子节点中在旧的一组子节点中的位置，后面我们会根据 source 数组计算出一个<strong>最长递增子序列</strong>，用于 DOM 移动操作。</li>
</ul>
<h3 id="最长递增子序列" tabindex="-1"><a class="header-anchor" href="#最长递增子序列" aria-hidden="true">#</a> 最长递增子序列</h3>
<p>目前的 source 数组为：[2, 3, 1, -1]。它表示新子节点在旧子节点中的位置，通过最长递增子序列的计算，我们可以发现 [2, 3] 也就是前面两个新子节点可以保持不移动，这样我们就得到一个最大的不需要移动的新节点的索引数组 <strong>[0, 1]</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>moved<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 计算 [2, 3, 1, -1] 最长递增子序列</span>
  <span class="token keyword">const</span> seq <span class="token operator">=</span> <span class="token function">lis</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token comment">// [0, 1]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 <strong>在新的一组子节点中，重新编号后的索引值为 0 和 1 的这两个节点在更新前后顺序没有变化</strong>。换句话说，重新编号之后，索引值为 0 和 1 的节点不需要移动。</p>
<h3 id="移动与挂载" tabindex="-1"><a class="header-anchor" href="#移动与挂载" aria-hidden="true">#</a> 移动与挂载</h3>
<div class="custom-container tip"><p class="custom-container-title">从后往前遍历新的子节点数组：</p>
<ol>
<li>如果该节点没有可复用的旧节点，也就是说，source 数组里对应下标的值为 -1，那么这个节点就是需要挂载的新节点。</li>
<li>seq 是递增的，遍历新子节点是从后往前的，那么如果新节点下标和 seq 未遍历的最后这个值不等，也就是说这个新节点的下标不存在于 seq 当中。则需要移动该节点。</li>
<li>如果该节点的新下标存在于 seq 中，则该节点不需要移动。</li>
</ol>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>moved<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> seq <span class="token operator">=</span> <span class="token function">lis</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
  <span class="token comment">// s 指向最长递增子序列的最后一个值</span>
  <span class="token keyword">let</span> s <span class="token operator">=</span> seq<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> count <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>source<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 说明索引为 i 的节点是全新的节点，应该将其挂载</span>
      <span class="token comment">// 该节点在新 children 中的真实位置索引</span>
      <span class="token keyword">const</span> pos <span class="token operator">=</span> i <span class="token operator">+</span> newStart
      <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>pos<span class="token punctuation">]</span>
      <span class="token comment">// 该节点下一个节点的位置索引</span>
      <span class="token keyword">const</span> nextPos <span class="token operator">=</span> pos <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token comment">// 锚点</span>
      <span class="token keyword">const</span> anchor <span class="token operator">=</span> nextPos <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length
      <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>nextPos<span class="token punctuation">]</span><span class="token punctuation">.</span>el
      <span class="token operator">:</span> <span class="token keyword">null</span>
      <span class="token comment">// 挂载 patch</span>
      <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!==</span> seq<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 说明该节点需要移动</span>
      <span class="token comment">// 该节点在新的一组子节点中的真实位置索引</span>
      <span class="token keyword">const</span> pos <span class="token operator">=</span> i <span class="token operator">+</span> newStart
      <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>pos<span class="token punctuation">]</span>
      <span class="token comment">// 该节点下一个节点的位置索引</span>
      <span class="token keyword">const</span> nextPos <span class="token operator">=</span> pos <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token comment">// 锚点</span>
      <span class="token keyword">const</span> anchor <span class="token operator">=</span> nextPos <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length
      <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>nextPos<span class="token punctuation">]</span><span class="token punctuation">.</span>el
      <span class="token operator">:</span> <span class="token keyword">null</span>
      <span class="token comment">// 移动 insert</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 当 i === seq[j] 时，说明该位置的节点不需要移动</span>
      <span class="token comment">// 并让 s 指向下一个位置</span>
      s<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/Vuejs3/quickDiff.png" alt=""></p>
<details class="custom-container details"><summary>旧 [1, 2, 3, 4, 6, 5] => 新 [1, 3, 4, 2, 7, 5]</summary>
<ol>
<li>
<p>预处理，去除相同的前置和后置节点。</p>
<p>[1, 2, 3, 4, 6, 5]  &lt;==&gt; [2, 3, 4, 6]</p>
</li>
<li>
<p>遍历旧节点，构建 source 数组，没有找到可复用的 p-6，<strong>卸载</strong>该节点。</p>
<p>[1, 2, 3, 4, 5] &lt;==&gt; [2, 3, 4]</p>
</li>
<li>
<p>moved 为 true，开始移动操作。</p>
</li>
<li>
<p>p-7 在 source 数组当中的下标为 -1，没有可复用旧节点，<strong>挂载</strong> p-7 节点到 p-5 前面。</p>
<p>[1, 2, 3, 4, 7, 5] &lt;==&gt; [2, 3, 4, 7]</p>
</li>
<li>
<p>p-2 在 source 数组当中的下标为 1。p-2 的新索引 i 为 2，与 seq[1] 即 1 不等，要<strong>移动</strong>到 p-7 前面。</p>
<p>[1, 3, 4, 2, 7, 5] &lt;==&gt; [3, 4, 2, 7]</p>
</li>
<li>
<p>p-4 在 source 数组当中的下标为 3。p-4 的新索引 i 为 1，与 seq[1] 即 1 相等，不用移动。</p>
<p>[1, 3, 4, 2, 7, 5] &lt;==&gt; [3, 4, 2, 7]</p>
</li>
<li>
<p>p-3 在 source 数组当中的下标为 2。p-4 的新索引 i 为 0，与 seq[0] 即 0 相等，不用移动。</p>
<p>[1, 3, 4, 2, 7, 5] &lt;==&gt; [3, 4, 2, 7]</p>
</li>
<li>
<p>处理完毕：[1, 3, 4, 2, 7, 5]</p>
<p>整个快速 Diff 过程中一共有三次 DOM 操作，分别是卸载 p-6、挂载 p-7 和移动 p-2。</p>
</li>
</ol>
</details>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>🔥 快速 Diff 算法在实测中<strong>性能最优</strong>。</p>
<p>它借鉴了文本 Diff 中的<strong>预处理</strong>思路，先处理新旧两组节点中相同的前置节点和相同的后置节点。</p>
<p>当前置节点和后置节点全部处理完毕，如果无法简单地通过挂载新节点或者卸载已经不存在的旧节点来完成更新，则需要根据节点的索引关系，构造出一个<strong>最长递增子序列</strong>。最长递增子序列所指向的节点即为不需要移动的节点。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      n1<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">setElementText</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      n1<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n1<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setElementText</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children
  <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children
  <span class="token comment">// 更新相同的前缀节点</span>
  <span class="token comment">// 索引 j 指向新旧两组子节点的开头</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
  <span class="token keyword">let</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
  <span class="token comment">// while 循环向后遍历，直到遇到拥有不同 key 值的节点为止</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用 patch 函数更新</span>
    <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
    j<span class="token operator">++</span>
    oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 更新相同的后缀节点</span>
  <span class="token comment">// 索引 oldEnd 指向旧的一组子节点的最后一个节点</span>
  <span class="token keyword">let</span> oldEnd <span class="token operator">=</span> oldChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token comment">// 索引 newEnd 指向新的一组子节点的最后一个节点</span>
  <span class="token keyword">let</span> newEnd <span class="token operator">=</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>oldEnd<span class="token punctuation">]</span>
  newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>newEnd<span class="token punctuation">]</span>

  <span class="token comment">// while 循环向前遍历，直到遇到拥有不同 key 值的节点为止</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用 patch 函数更新</span>
    <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
    oldEnd<span class="token operator">--</span>
    newEnd<span class="token operator">--</span>
    oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>oldEnd<span class="token punctuation">]</span>
    newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>newEnd<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 满足条件，则说明从 j -> newEnd 之间的节点应作为新节点插入</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> oldEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 锚点的索引</span>
    <span class="token keyword">const</span> anchorIndex <span class="token operator">=</span> newEnd <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token comment">// 锚点元素</span>
    <span class="token keyword">const</span> anchor <span class="token operator">=</span> anchorIndex <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>anchorIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>el <span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token comment">// 采用 while 循环，调用 patch 函数逐个挂载新增的节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newChildren<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> newEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// j -> oldEnd 之间的节点应该被卸载</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">unmount</span><span class="token punctuation">(</span>oldChildren<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 构造 source 数组</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> newEnd <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">1</span>  <span class="token comment">// 新的一组子节点中剩余未处理节点的数量</span>
    <span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
    source<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> oldStart <span class="token operator">=</span> j
    <span class="token keyword">const</span> newStart <span class="token operator">=</span> j
    <span class="token keyword">let</span> moved <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">const</span> keyIndex <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> newStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      keyIndex<span class="token punctuation">[</span>newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> i
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> patched <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> oldStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>patched <span class="token operator">&lt;</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> k <span class="token operator">=</span> keyIndex<span class="token punctuation">[</span>oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> k <span class="token operator">!==</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
          <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
          patched<span class="token operator">++</span>
          source<span class="token punctuation">[</span>k <span class="token operator">-</span> newStart<span class="token punctuation">]</span> <span class="token operator">=</span> i
          <span class="token comment">// 判断是否需要移动</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> pos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            moved <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pos <span class="token operator">=</span> k
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 没找到</span>
          <span class="token function">unmount</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">unmount</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>moved<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> seq <span class="token operator">=</span> <span class="token function">lis</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
      <span class="token comment">// s 指向最长递增子序列的最后一个值</span>
      <span class="token keyword">let</span> s <span class="token operator">=</span> seq<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token keyword">let</span> i <span class="token operator">=</span> count <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>source<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 说明索引为 i 的节点是全新的节点，应该将其挂载</span>
          <span class="token comment">// 该节点在新 children 中的真实位置索引</span>
          <span class="token keyword">const</span> pos <span class="token operator">=</span> i <span class="token operator">+</span> newStart
          <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>pos<span class="token punctuation">]</span>
          <span class="token comment">// 该节点下一个节点的位置索引</span>
          <span class="token keyword">const</span> nextPos <span class="token operator">=</span> pos <span class="token operator">+</span> <span class="token number">1</span>
          <span class="token comment">// 锚点</span>
          <span class="token keyword">const</span> anchor <span class="token operator">=</span> nextPos <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length
          <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>nextPos<span class="token punctuation">]</span><span class="token punctuation">.</span>el
          <span class="token operator">:</span> <span class="token keyword">null</span>
          <span class="token comment">// 挂载</span>
          <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!==</span> seq<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 说明该节点需要移动</span>
          <span class="token comment">// 该节点在新的一组子节点中的真实位置索引</span>
          <span class="token keyword">const</span> pos <span class="token operator">=</span> i <span class="token operator">+</span> newStart
          <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>pos<span class="token punctuation">]</span>
          <span class="token comment">// 该节点下一个节点的位置索引</span>
          <span class="token keyword">const</span> nextPos <span class="token operator">=</span> pos <span class="token operator">+</span> <span class="token number">1</span>
          <span class="token comment">// 锚点</span>
          <span class="token keyword">const</span> anchor <span class="token operator">=</span> nextPos <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length
          <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>nextPos<span class="token punctuation">]</span><span class="token punctuation">.</span>el
          <span class="token operator">:</span> <span class="token keyword">null</span>
          <span class="token comment">// 移动</span>
          <span class="token function">insert</span><span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 当 i === seq[j] 时，说明该位置的节点不需要移动</span>
          <span class="token comment">// 并让 s 指向下一个位置</span>
          s<span class="token operator">--</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
