<template><div><h1 id="简单-diff-算法" tabindex="-1"><a class="header-anchor" href="#简单-diff-算法" aria-hidden="true">#</a> 简单 Diff 算法</h1>
<p>当新旧 vnode 的子节点都是一组节点时，为了以最小的性能开销完成更新操作，需要比较两组子节点，用于比较的算法就叫做 Diff 算法。</p>
<p>操作 DOM 的性能开销通常比较大，而渲染器的核心 Diff 算法就是为了解决这个问题而诞生的。</p>
<h2 id="减少-dom-操作的性能开销" tabindex="-1"><a class="header-anchor" href="#减少-dom-操作的性能开销" aria-hidden="true">#</a> 减少 DOM 操作的性能开销</h2>
<p>🚀 核心 Diff 算法只关心新旧虚拟节点都存在<strong>一组子节点</strong>的情况。目前是暴力地卸载全部旧子节点，再挂载全部新子节点。这么做的确可以完成更新，但由于没有复用任何 DOM 元素，<strong>所以会产生极大的性能开销</strong>。</p>
<div class="custom-container tip"><p class="custom-container-title">子节点更新的分析</p>
<ul>
<li>
<p>新旧子节点数量相同：调用 patch 进行节点更新</p>
</li>
<li>
<p>新节点数量更多：有新节点需要挂载</p>
</li>
<li>
<p>旧节点数量更多：有旧节点需要卸载</p>
</li>
</ul>
<p>在更新时，应该遍历其中长度较短的那一组，这样才能够尽可能多地调用 patch 函数进行更新。然后再处理节点的挂载与卸载。</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      n1<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">setElementText</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children
    <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children
    <span class="token keyword">const</span> oldLen <span class="token operator">=</span> oldChildren<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> newLen <span class="token operator">=</span> newChildren<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> commonLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>oldLen<span class="token punctuation">,</span> newLen<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> commonLength<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">patch</span><span class="token punctuation">(</span>oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果 nextLen > prevLen，将多出来的元素添加</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newLen <span class="token operator">></span> oldLen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> commonLength<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> container<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldLen <span class="token operator">></span> newLen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果 prevLen > nextLen，将多出来的元素移除</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> commonLength<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> oldLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">unmount</span><span class="token punctuation">(</span>oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      n1<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n1<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setElementText</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dom-复用与-key-的作用" tabindex="-1"><a class="header-anchor" href="#dom-复用与-key-的作用" aria-hidden="true">#</a> DOM 复用与 Key 的作用</h2>
<CodeGroup>
<CodeGroupItem title="思考">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// oldChildren</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'span'</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token comment">// newChildren</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'span'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设有新旧两组节点如上，因为节点数量相同，会执行三次的 patch 函数。</p>
<p>但是因为在遍历过程中，相同索引下节点 vnode.type 都不同，所以会执行 3 次卸载 3 次挂载，也就是 6 次 DOM 操作。</p>
<p>因为二者只是顺序不同，理想情况是通过移动来完成子节点的更新。前提是：<strong>新旧两组子节点中的确存在可复用的节点</strong></p>
</CodeGroupItem>
<CodeGroupItem title="可复用判断">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// oldChildren</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'3'</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token comment">// newChildren</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'3'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'2'</span>  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现这个案例可以通过移动完成更新。如果使用 vnode.type 判断可复用，由于 type 都相同，导致我们无法确定新旧两组子节点中节点的对应关系，也就无法得知应该怎样进行 DOM 移动才能完成更新。</p>
<p>因此，我们不能直接通过 vnode.type 来判断一个节点是否可复用。</p>
</CodeGroupItem>
<CodeGroupItem title="key">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// oldChildren</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token comment">// newChildren</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以我们需要引入额外的 key 来作为 vnode 的标识。这就好像虚拟节点的”身份证“号，只需要<strong>两个虚拟节点的 type 属性值和 key 属性值都是相同</strong>，那么我们就认为它们是相同的，即可以进行 DOM 的复用。</p>
</CodeGroupItem>
</CodeGroup>
<hr>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/Vuejs3/key.png" alt=""></p>
<p>🔥 如果没有 key，我们无法知道新子节点与旧子节点间的映射关系，也就无法知道应该如何移动节点。有 key 的话情况不同，我们根据子节点的 key 属性，能够明确知道新子节点在旧子节点中的位置，这样就可以进行相应的 DOM 移动操作了。</p>
<p>📝 DOM 可复用只是 vnode 的 type 和 key 相同，但是仍旧需要对两个虚拟节点进行<strong>打补丁</strong>操作，因为内容是会变的。</p>
<CodeGroup>
<CodeGroupItem title="patchChildren">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children
    <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children

    <span class="token comment">// 遍历新的 children</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token comment">// 遍历旧的 children</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>j<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> oldChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token comment">// 如果找到了具有相同 key 值的两个节点，则调用 `patch` 函数更新之</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
          <span class="token keyword">break</span> <span class="token comment">// 这里需要 break</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="render vnode">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> oldVnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> newVnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'world'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'update'</span><span class="token punctuation">)</span>
  renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>newVnode<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">上面代码片段 render vnode 在执行更新是具体操作如下：</p>
<ol>
<li>找到 key 为 3 的可复用节点，patch 函数将 DOM 文本内容由字符串 'hello' 更新为字符串 'world'</li>
<li>找到 key 为 1 的可复用节点，patch 函数无需任何操作</li>
<li>找到 key 为 2 的可复用节点，patch 函数无需任何操作</li>
</ol>
</div>
<p>目前，所有节点对应的真实 DOM 元素都已经更新完毕，但 DOM 元素的顺序不变，还需要移动节点来完成真实 DOM 顺序的更新</p>
<h2 id="找到需要移动的节点" tabindex="-1"><a class="header-anchor" href="#找到需要移动的节点" aria-hidden="true">#</a> 找到需要移动的节点</h2>
<p>目前已经实现可复用节点的匹配和打补丁，接下来就是找到需要移动的节点。</p>
<p>✅ 不需要移动节点：当两组子节点的节点顺序不变时，就不需要移动操作了。</p>
<ol>
<li>
<p>取新的一组子节点中的第一个节点 p-3，它的 key 为 3。尝试在旧的一组子节点中找到具有相同 key 值的可复用节点，发现能够找到，并且该节点在旧的一组子节点中的索引为 2。</p>
</li>
<li>
<p>取新的一组子节点中的第一个节点 p-1，它的 key 为 1。尝试在旧的一组子节点中找到具有相同 key 值的可复用节点，发现能够找到，并且该节点在旧的一组子节点中的索引为 0。</p>
<p><strong>节点 p-1 在旧 children 中的索引是 0，它小于节点 p-3 在旧 children 中的索引 2。这说明节点 p-1 在旧 children 中排在节点 p-3 的前面</strong>，但在新的 children 中，它排在节点 p-3 后面。因此，<strong>节点 p-1 对应的真实节点需要移动</strong>。</p>
</li>
<li>
<p>取新的一组子节点中的第一个节点 p-2，它的 key 为 2。尝试在旧的一组子节点中找到具有相同 key 值的可复用节点，发现能够找到，并且该节点在旧的一组子节点中的索引为 1。</p>
<p><strong>节点 p-2 在旧 children 中的索引是 0，它小于节点 p-3 在旧 children 中的索引 2。这说明节点 p-2 在旧 children 中排在节点 p-3 的前面</strong>，但在新的 children 中，它排在节点 p-3 后面。因此，<strong>节点 p-2 对应的真实节点需要移动</strong>。</p>
</li>
</ol>
<p>🔥 p-3 在旧 children 中的索引：<strong>在旧 children 中寻找具有相同 key 值节点的过程，遇到的最大索引值</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children
        <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children

        <span class="token comment">// 遍历新的 children</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token comment">// 遍历旧的 children</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span>j<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> oldChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                <span class="token comment">// 如果找到了具有相同 key 值的两个节点，则调用 `patch` 函数更新之</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> lastIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 需要移动</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 更新 lastIndex</span>
                        lastIndex <span class="token operator">=</span> j
                    <span class="token punctuation">}</span>
                    <span class="token keyword">break</span> <span class="token comment">// 这里需要 break</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在寻找到的可复用节点中，如果该节点在旧节点的索引比 lastIndex 小，那么这个节点对应的真实 DOM 节点就是需要移动的。同时，要保证 lastIndex 始终存储着当前遇到的最大索引值。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/Vuejs3/move.png" alt=""></p>
<h2 id="如何移动节点" tabindex="-1"><a class="header-anchor" href="#如何移动节点" aria-hidden="true">#</a> 如何移动节点</h2>
<p>参考上图，我们外层遍历的是新节点，新节点的顺序就是我们需要的 DOM 顺序。找到对应的可复用旧节点，将需要移动的节点到对应的新节点顺序即可。</p>
<ol>
<li>
<p>节点 p-3，不用移动， lastIndex 更新为当前节点在旧节点中的索引 2。目前 DOM 为 [p-1, p-2, p-3]</p>
</li>
<li>
<p>节点 p-1，旧索引 0 小于 lastIndex，要移动，把对应的旧节点 p-1 移到 p-3后面，DOM 更新为 [p-2, p-3, p-1]</p>
</li>
<li>
<p>节点 p-2，旧索引 1 小于 lastIndex，要移动，把对应的旧节点 p-1 移到 p-3后面，DOM 更新为 [p-3, p-1, p-2]</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children
        <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children

        <span class="token keyword">let</span> lastIndex <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token comment">// 遍历新的 children</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token comment">// 遍历旧的 children</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span>j<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> oldChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                <span class="token comment">// 如果找到了具有相同 key 值的两个节点，则调用 `patch` 函数更新之</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> lastIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 需要移动</span>
                        <span class="token keyword">const</span> prevVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>prevVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">const</span> anchor <span class="token operator">=</span> prevVNode<span class="token punctuation">.</span>el<span class="token punctuation">.</span>nextSibling
                            <span class="token function">insert</span><span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 更新 lastIndex</span>
                        lastIndex <span class="token operator">=</span> j
                    <span class="token punctuation">}</span>
                    <span class="token keyword">break</span> <span class="token comment">// 这里需要 break</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在移动过程中，我们需要获取当前 newVNode 节点的前一个虚拟节点，即 newChildren[i - 1]，然后使用 insert 函数完成节点的移动：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> anchor <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    parent<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加新元素" tabindex="-1"><a class="header-anchor" href="#添加新元素" aria-hidden="true">#</a> 添加新元素</h2>
<p>当无法在旧节点中找到可复用节点时，也就是这个为新节点。那么要把这个节点插入到对应新节点的顺序位置当中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children
<span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children

<span class="token keyword">let</span> lastIndex <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment">// 遍历新的 children</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> find <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token comment">// 遍历旧的 children</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>j<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> oldChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token comment">// 如果找到了具有相同 key 值的两个节点，则调用 `patch` 函数更新之</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            find <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> lastIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 需要移动</span>
                <span class="token keyword">const</span> prevVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>prevVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">const</span> anchor <span class="token operator">=</span> prevVNode<span class="token punctuation">.</span>el<span class="token punctuation">.</span>nextSibling
                    <span class="token function">insert</span><span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 更新 lastIndex</span>
                lastIndex <span class="token operator">=</span> j
            <span class="token punctuation">}</span>
            <span class="token keyword">break</span> <span class="token comment">// 这里需要 break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>find<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果代码运行到这里，find 仍然为 false</span>
        <span class="token comment">// 说明当前 newVNode 没有在旧的一组子节点中找到可复用的节点</span>
        <span class="token comment">// 也就是说，当前 newVNode 是新增节点，需要挂载</span>
        <span class="token keyword">const</span> prevVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> anchor <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>prevVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果有前一个 vnode 节点，则使用它的下一个兄弟节点作为锚点元素</span>
            anchor <span class="token operator">=</span> prevVNode<span class="token punctuation">.</span>el<span class="token punctuation">.</span>nextSibling
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果没有前一个 vnode 节点，说明即将挂载的新子节点是第一个节点</span>
            <span class="token comment">// 这是我们使用容器元素的 firstChild 作为锚点</span>
            anchor <span class="token operator">=</span> container<span class="token punctuation">.</span>firstChild
        <span class="token punctuation">}</span>
        <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移除不存在在的元素" tabindex="-1"><a class="header-anchor" href="#移除不存在在的元素" aria-hidden="true">#</a> 移除不存在在的元素</h2>
<p>遍历一次旧节点，如果无法在新节点列表中找到可复用的新节点，那么这些节点就是需要删除的节点。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 遍历旧的节点</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> oldChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token comment">// 拿着旧 VNode 去新 children 中寻找相同的节点</span>
    <span class="token keyword">const</span> has <span class="token operator">=</span> newChildren<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
        <span class="token parameter">vnode</span> <span class="token operator">=></span> vnode<span class="token punctuation">.</span>key <span class="token operator">===</span> oldVNode<span class="token punctuation">.</span>key
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>has<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果没有找到相同的节点，则移除</span>
        <span class="token function">unmount</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>🔥 虚拟节点中 <strong>key</strong> 属性的作用：它就像虚拟节点的“身份证号”。在更新时，渲染器通过 key 属性找到可复用的节点，然后尽可能地通过 DOM 移动操作来完成更新，避免过多地对 DOM 元素进行销毁和重建。</p>
<p>简单 diff 算法寻找需要移动的节点：简单 diff 算法的核心逻辑是，拿新的一组子节点中的节点去旧的一组子节点中寻找可复用的节点。如果找到了，则记录该节点的位置索引。我们把这个位置索引成为做大索引。在整个更新过程中，<strong>如果一个节点的旧索引值小于最大索引，则说明该节点对应的真是 DOM 元素需要移动</strong>。</p>
</div></template>
