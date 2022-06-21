<template><div><h1 id="内建组件和模块" tabindex="-1"><a class="header-anchor" href="#内建组件和模块" aria-hidden="true">#</a> 内建组件和模块</h1>
<h2 id="keepalive-组件的实现原理" tabindex="-1"><a class="header-anchor" href="#keepalive-组件的实现原理" aria-hidden="true">#</a> KeepAlive 组件的实现原理</h2>
<h3 id="组件的激活与失活" tabindex="-1"><a class="header-anchor" href="#组件的激活与失活" aria-hidden="true">#</a> 组件的激活与失活</h3>
<div class="custom-container tip"><p class="custom-container-title">KeepAlive</p>
<p>KeepAlive 一词借鉴于 HTTP 协议。在 HTTP 协议中，KeepAlive 又称 HTTP 持久连接（HTTP persistent connection），其作用是允许多个请求或响应共用一个 TCP 连接。在没有 KeepAlive 的情况下，一个 HTTP 连接会在每次请求/响应结束后关闭，当下一次请求发生时，会建立一个新的 HTTP 连接。频繁地销毁、创建 HTTP 连接会带来额外的性能开销，KeepAlive 就是为了解决这个问题而生的。</p>
</div>
<p>✅ HTTP 中的 KeepAlive 可以避免连接频繁地销毁/创建，与 HTTP 中的 KeepAlive 相似，Vue.js 内建的 KeepAlive 组件可以<strong>避免一个组件被频繁地销毁/重建</strong>。</p>
<CodeGroup>
<CodeGroupItem title="Tab 组件">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tab</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentTab === 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tab</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tab</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentTab === 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tab</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tab</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentTab === 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tab</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板内根据 <code v-pre>currentTab</code> 的值不同，会渲染不同的 <code v-pre>&lt;Tab&gt;</code> 组件。当用户频繁地切换 Tab 时，会导致不停地卸载并重建对应的 <code v-pre>&lt;Tab&gt;</code>  组件。为了避免因此产生的性能开销，可以使用 KeepAlive 组件来解决这个问题。</p>
</CodeGroupItem>
<CodeGroupItem title="Transition">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>KeepAlive</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tab</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentTab === 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tab</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tab</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentTab === 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tab</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tab</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentTab === 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tab</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>KeepAlive</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>KeepAlive 能够避免频繁的创建和销毁，因而会极大地优化对用户的操作响应，有其是大组件场景下。</p>
</CodeGroupItem>
</CodeGroup>
<details class="custom-container details"><summary>假卸载</summary>
<p>KeepAlive 组件的实现需要<strong>渲染器</strong>层面的支持，它在卸载时，我们不能真的将其卸载，否则就无法维持组件当前的状态。而是将被 KeepAlive 的组件从原容器搬运到另外一个<strong>隐藏容器</strong>中。当被搬运到隐藏容器的组件再次被“挂载”时，我们也不能执行真正的挂载逻辑，而应该把该组件从隐藏容器中再搬运到原容器。这个过程对应的生命周期就是 <code v-pre>activated</code> 和 <code v-pre>deactivated</code></p>
<blockquote>
<p>KeepAlive 的本质是缓存管理，再加上特殊的挂载/卸载逻辑</p>
</blockquote>
</details>
<CodeGroup>
<CodeGroupItem title="基本实现">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> KeepAlive <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// KeepAlive 组件独有的属性标识</span>
    <span class="token literal-property property">__isKeepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> slots <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 缓存对象 Record&lt;vnode.type, vnode></span>
        <span class="token keyword">const</span> cahche <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 当前 KeepAlive 的组件实例</span>
        <span class="token keyword">const</span> instance <span class="token operator">=</span> currentInstance
        <span class="token comment">// 对于 KeepAlive 组件来说，它的实例上存在特殊的 KeepAliveCtx 对象，该对象由渲染器注入</span>
        <span class="token comment">// 该对象暴露了一些内部方法，move 实现 DOM 的移动到容器</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> move<span class="token punctuation">,</span> createElement <span class="token punctuation">}</span> <span class="token operator">=</span> instance<span class="token punctuation">.</span>keepAliveCtx

        <span class="token comment">// 创建隐藏容器</span>
        <span class="token keyword">const</span> storageContainer <span class="token operator">=</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>

        <span class="token comment">// KeepAlive 组件的实例会被添加两个内部函数，在渲染器中被调用</span>
        instance<span class="token punctuation">.</span><span class="token function-variable function">_deActivate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">move</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> storageContainer<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        instance<span class="token punctuation">.</span><span class="token function-variable function">_activate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">move</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// KeepAlive 的默认插槽内容就是要被 KeepAlive 的组件</span>
            <span class="token keyword">let</span> rawVNode <span class="token operator">=</span> slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">// KeepAlive 只处理组件</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> rawVNode<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> rawVNode
            <span class="token punctuation">}</span>

            <span class="token comment">// 缓存处理</span>
            <span class="token keyword">const</span> cachedVNode <span class="token operator">=</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>rawVNode<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 有缓存组件，不是挂载，走激活逻辑</span>
                rawVNode<span class="token punctuation">.</span>component <span class="token operator">=</span> cachedVNode<span class="token punctuation">.</span>component
                rawVNode<span class="token punctuation">.</span>keptAlive <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>rawVNode<span class="token punctuation">.</span>type<span class="token punctuation">,</span> rawVNode<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 属性标记，避免渲染器将组件卸载</span>
            rawVNode<span class="token punctuation">.</span>shouldKeepAlive <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token comment">// 添加 KeepAlive 组件的实例到 vnode，方便渲染器的访问</span>
            rawVNode<span class="token punctuation">.</span>keepAliveInstance <span class="token operator">=</span> instance
            <span class="token comment">// 返回被 KeepAlive 的组件本身</span>
            <span class="token keyword">return</span> rawVNode
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>KeepAlive 组件的实现与渲染器的结合较深。首先，KeepAlive 组件本身并不会渲染额外的内容，它的渲染函数最终只返回需要被 KeepAlive 的组件，这个需要被 KeepAlive 的组件称为“<strong>内部组件</strong>”。KeepAlive 组件会对“内部组件”进行操作，主要是在“内部组件”的 vnode 对象上添加一些<strong>属性标记</strong>，以便渲染器据此执行特定的逻辑。</p>
<blockquote>
<p><code v-pre>mountComponent</code>在调用 <code v-pre>setup</code> 函数之前会 <code v-pre>setCurrentInstance</code></p>
<p>组件的 <code v-pre>setup</code> 函数里通过 <code v-pre>currentInstance</code> 就能拿到当前组件的实例</p>
<p>它包括了当前组件的 state、props、subTree、slots、mounted等等信息</p>
</blockquote>
</CodeGroupItem>
<CodeGroupItem title="unmount 假卸载">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>type <span class="token operator">===</span> Fragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vnode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 对于需要被 KeepAlive 的组件，我们不能真的卸载它，而是调用其父组件</span>
        <span class="token comment">// 即 KeepAlive 组件的 _deActivate 函数使其失活</span>
        <span class="token comment">// keepAliveInstance 即 KeepAlive 组件实例</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>shouldKeepAlive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            vnode<span class="token punctuation">.</span>keepAliveInstance<span class="token punctuation">.</span><span class="token function">_deActivate</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">unmount</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>component<span class="token punctuation">.</span>subTree<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> parent <span class="token operator">=</span> vnode<span class="token punctuation">.</span>el<span class="token punctuation">.</span>parentNode
    <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="unmount 组件激活">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&amp;&amp;</span> n1<span class="token punctuation">.</span>type <span class="token operator">!==</span> n2<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">unmount</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
        n1 <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> n2

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">mountElement</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">patchElement</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> Text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> el <span class="token operator">=</span> n2<span class="token punctuation">.</span>el <span class="token operator">=</span> <span class="token function">createText</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
            <span class="token function">insert</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> el <span class="token operator">=</span> n2<span class="token punctuation">.</span>el <span class="token operator">=</span> n1<span class="token punctuation">.</span>el
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children <span class="token operator">!==</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">setText</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> Fragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            n2<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">patchChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果该组件以及被 KeepAlive,则不会重新挂载，而是调用 _activate 来激活它</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>keptAlive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                n2<span class="token punctuation">.</span>keepAliveInstance<span class="token punctuation">.</span><span class="token function">_activate</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">mountComponent</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">patchComponent</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="渲染器注入移动函数">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>

    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isMounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subTree</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        slots<span class="token punctuation">,</span>
        <span class="token literal-property property">mounted</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">keepAliveCtx</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> isKeepAlive <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type<span class="token punctuation">.</span>__isKeepAlive
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isKeepAlive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        instance<span class="token punctuation">.</span>keepAliveCtx <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token function">move</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">insert</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>component<span class="token punctuation">.</span>subTree<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            createElement
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">总结</p>
<ul>
<li><code v-pre>shouldKeepAlive</code>: 该属性被添加到“内部组件”的 vnode 对象上，这样当渲染器卸载“内部组件”时，可以通过检查该属性得知“内部组件”需要被 KeepAlive。于是，渲染器就不会真的卸载“内部组件”，而是会调用 <code v-pre>_deActivate</code> 函数完成搬运工作。</li>
<li><code v-pre>keepAliveInstance</code>：“内部组件”的 vnode 对象会持有 <strong>KeepAlive 组件实例</strong>，在 <code v-pre>unmount</code> 函数中会通过 keepAliveInstance 来访问 <code v-pre>_deActivate</code> 函数。</li>
<li><code v-pre>KeptAlive</code>：“内部组件”如果已经被缓存，则还会为其添加一个 <code v-pre>KeptAlive</code>标记。这样当“内部组件”需要重新渲染时，渲染器并不会重新挂载它，而会将其激活。</li>
</ul>
</div>
<h3 id="include-和-exclude" tabindex="-1"><a class="header-anchor" href="#include-和-exclude" aria-hidden="true">#</a> include 和 exclude</h3>
<p>默认情况下，KeepAlive 组件会对所有“内部组件”进行缓存。但有时候用户期望只缓存特定组件，因此其支持了两个 props，分别是 <code v-pre>include</code> 和 <code v-pre>exclude</code>。</p>
<blockquote>
<p><code v-pre>include</code>：显式配置应该被缓存的组件</p>
<p><code v-pre>exclude</code>：显式配置不应该被缓存的组件</p>
</blockquote>
<CodeGroup>
<CodeGroupItem title="props 定义">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> KeepAlive <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">__isKeepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> RegExp<span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> RegExp
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> slots <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里为了简化问题，只允许为 <code v-pre>include</code> 和 <code v-pre>exclude</code> 设置正则类型的值。在 KeepAlive 组件被挂载时，它会根据“内部组件”的名称（即 name 选项）进行匹配。</p>
</CodeGroupItem>
<CodeGroupItem title="正则匹配">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> KeepAlive <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">__isKeepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> RegExp<span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> RegExp
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> slots <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> rawVNode <span class="token operator">=</span> slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> rawVNode<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> rawVNode
            <span class="token punctuation">}</span>
            <span class="token comment">// 获取内部组件的 name</span>
            <span class="token keyword">const</span> name <span class="token operator">=</span> rawVNode<span class="token punctuation">.</span>type<span class="token punctuation">.</span>name
            <span class="token comment">// 对 name 进行匹配</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>
                name <span class="token operator">&amp;&amp;</span>
                <span class="token punctuation">(</span>
                    <span class="token comment">// 如果 name 无法被 include 匹配</span>
                    <span class="token punctuation">(</span>props<span class="token punctuation">.</span>include <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>props<span class="token punctuation">.</span>include<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                    <span class="token comment">// 或者被 exclude 匹配</span>
                    <span class="token punctuation">(</span>props<span class="token punctuation">.</span>exclude <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>exclude<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 则直接渲染“内部组件”，不对其进行后续的缓存操作</span>
                <span class="token keyword">return</span> rawVNode
            <span class="token punctuation">}</span>

            <span class="token comment">// ,,,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>✅ 目前通过正则匹配结果判断是否要对“内部组件”进行缓存。在此基础上，我们可以任意扩充匹配能力。例如，将 include 和 exclude 设计成多种类型值，允许用户指定字符串或函数，从而提供更加灵活的匹配机制。另外，在做匹配时，也可以不限于“内部组件”的名称，我们甚至可以让用户自行指定匹配要素。</p>
<p>但是无论如何，其原理都是不变的。</p>
<h3 id="缓存管理" tabindex="-1"><a class="header-anchor" href="#缓存管理" aria-hidden="true">#</a> 缓存管理</h3>
<p>目前的缓存处理：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> KeepAlive <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">__isKeepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> slots <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> cahche <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> cachedVNode <span class="token operator">=</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>rawVNode<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 有缓存组件，不是挂载，走激活逻辑</span>
                rawVNode<span class="token punctuation">.</span>component <span class="token operator">=</span> cachedVNode<span class="token punctuation">.</span>component
                rawVNode<span class="token punctuation">.</span>keptAlive <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>rawVNode<span class="token punctuation">.</span>type<span class="token punctuation">,</span> rawVNode<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
			<span class="token comment">// ...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">缓存管理</p>
<ul>
<li>
<p>这里的问题在于，当缓存不在时，总是会设置新的缓存。我们需要一个<strong>阈值</strong>防止缓存无限增加，当缓存数量超过指定阈值时对缓存进行修剪。</p>
</li>
<li>
<p>Vue.js 当前所采用的修剪策略叫做“<strong>最新一次访问</strong>”，把当前访问（或渲染）的组件作为最新一次渲染的组价，并且该组件在缓存修剪过程中始终是安全的，即不会被修剪的。</p>
<p>Tips: 可以维护一个缓存队列，访问或渲染时把组件位置放到队尾，超过阈值移除队首缓存</p>
</li>
<li>
<p>我们的关注点是缓存策略能否改变？甚至运行用户自定义缓存策略？为此，Vue.js 在用户接口层面新增了 <code v-pre>cache</code> 接口，运行用户<strong>指定缓存策略</strong>。</p>
</li>
</ul>
</div>
<CodeGroup>
<CodeGroupItem title="缓存阈值接口">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>KeepAlive</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicComp<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>KeepAlive</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="自定义缓存策略接口">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>KeepAlive</span> <span class="token attr-name">:cache</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cache<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Comp</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>KeepAlive</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="缓存实例">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> _cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token literal-property property">cache</span><span class="token operator">:</span> KeepAliveCache <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _cache<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _cache<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>在 KeepAlive 组件的内部实现中，如果用户提供了自定义的缓存实例，则直接使用该缓存实例来管理缓存。从本质上来说，这等价于将缓存的管理权限从 KeepAlive 组件转交给用户了。</p>
<h2 id="teleport-组件的实现原理" tabindex="-1"><a class="header-anchor" href="#teleport-组件的实现原理" aria-hidden="true">#</a> Teleport 组件的实现原理</h2>
<h3 id="teleport-组件要解决的问题" tabindex="-1"><a class="header-anchor" href="#teleport-组件要解决的问题" aria-hidden="true">#</a> Teleport 组件要解决的问题</h3>
<p>通常情况下，在将虚拟 DOM 渲染为真实 DOM 时，最终渲染出来的真是 DOM 的层级结构与虚拟 DOM 的层级结构一致。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">z-index</span><span class="token punctuation">:</span> -1</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Overlay</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在目前情况下，假设<code v-pre>&lt;Overlay&gt;</code>是个“蒙层”组件，它会被渲染到 id 为 box 的 div 标签下。但是由于 div 的 z-index 设置，这导致即使我们将 <code v-pre>&lt;Overlay&gt;</code>组件所渲染的内容的 z-inde 值设置为无穷大，也无法实现遮挡功能。</p>
<blockquote>
<p>🌐 <a href="http://localhost:3000/note/daily.html#%E7%AE%80%E6%98%93%E4%BC%A0%E9%80%81%E9%97%A8%E7%BB%84%E4%BB%B6" target="_blank" rel="noopener noreferrer">Vue.js 2 实现简易传送门组件 (opens new window)<ExternalLinkIcon/></a></p>
<p>通常，我们在上述场景下，会选择直接在 body 标签下渲染“蒙层”内容。</p>
<p>在Vue.js 2 中我们只能通过原生 DOM API 来手动搬运 DOM 元素实现需求。这么做的缺点在于，手动操作 DOM 元素会使得元素的徐渲染与 Vue.js 的渲染机制脱节，并导致各种可预见或不可预见的问题。</p>
</blockquote>
<p>✅ Teleport 组件可以将指定内容渲染到特定容器中，而不受 DOM 层级的限制。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>overlay<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Teleport</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.overlay</span> <span class="token punctuation">{</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> 999
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，Teleport 组件要渲染的内容都包含在 Teleport 组件内，即作为 Teleport 组件的插槽。通过为 Teleport 组件指定渲染目标 body，即 to 属性的值，该组件就会直接把它的插槽内容渲染到 body 下，而不会按照模板的 DOM 层级来渲染，于是就<strong>实现了跨 DOM 层级的渲染</strong>。</p>
<h3 id="实现-teleport-组件" tabindex="-1"><a class="header-anchor" href="#实现-teleport-组件" aria-hidden="true">#</a> 实现 Teleport 组件</h3>
<p>Teleport 组件的实现也需要渲染器的底层支持。</p>
<CodeGroup>
<CodeGroupItem title="patch 函数修改">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&amp;&amp;</span> n1<span class="token punctuation">.</span>type <span class="token operator">!==</span> n2<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">unmount</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
        n1 <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> n2
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> Text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> Fragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">&amp;&amp;</span> type<span class="token punctuation">.</span>__isTeleport<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 组件选项中如果存在 __isTeleport 标识，则它是 Teleport 组件</span>
        <span class="token comment">// 调用 Teleport 组件选项中的 process 函数将控制器交出去</span>
        <span class="token comment">// 传递给 process 函数的第五个参数是渲染器的一些内部方法</span>
        type<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            patch<span class="token punctuation">,</span>
            patchChildren<span class="token punctuation">,</span>
            <span class="token function">move</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">insert</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>component <span class="token operator">?</span> vnode<span class="token punctuation">.</span>component<span class="token punctuation">.</span>subTree<span class="token punctuation">.</span>el <span class="token operator">:</span> vnode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// component ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 首先要把 Teleport 组件的渲染逻辑从渲染器中分离出来：</p>
<ul>
<li>可以避免渲染器逻辑代码“膨胀”；</li>
<li>当用户没有使用 Teleport 组件时，由于 Teleport 的渲染逻辑被分离，因此可以利用 Tree-Shaking 机制在最终的 bundle 中删除 Teleport 相关的代码，使得最终构建包的体积变小。</li>
</ul>
<p>🌐 <a href="http://localhost:3000/VueJs3/section1/chapter2.html#%E8%89%AF%E5%A5%BD%E7%9A%84tree-shaking" target="_blank" rel="noopener noreferrer">良好的tree-shaking (opens new window)<ExternalLinkIcon/></a></p>
<blockquote>
<p>通过<code v-pre>__isTeleport</code>标识判断是否是 Teleport 组件，然后调用组件选项中的 process 函数将渲染控制权完全交接出去，这样就实现了渲染逻辑的分离。</p>
</blockquote>
</CodeGroupItem>
<CodeGroupItem title="Teleport 组件定义">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Teleport <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">__isTeleport</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token function">process</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> internals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在这里处理渲染逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Teleport 和普通组件不同，它有特殊的选项<code v-pre>__isTeleport</code>和<code v-pre>process</code>。</p>
</CodeGroupItem>
<CodeGroupItem title="用户模板">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Teleport</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设用户编写的一个模板如上</p>
</CodeGroupItem>
<CodeGroupItem title="编译结果设计">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Teleport<span class="token punctuation">,</span>
        <span class="token comment">// 以普通 children 的形式代表被 Teleport 的内容</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'title'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'content'</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常一个组件的子节点会被编译为插槽内容，不过对于 Teleport 组件来说，直接将其子节点编译为一个数组即可。</p>
</CodeGroupItem>
<CodeGroupItem title="Teleport 组件实现">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Teleport <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">__isTeleport</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function">process</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> internals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过 internals 参数取得渲染器的内部方法</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> patch<span class="token punctuation">,</span> patchChildren<span class="token punctuation">,</span> move <span class="token punctuation">}</span> <span class="token operator">=</span> internals
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 挂载，获取容器，即挂载点</span>
            <span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>props<span class="token punctuation">.</span>to <span class="token operator">===</span> <span class="token string">'string'</span>
            <span class="token operator">?</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>props<span class="token punctuation">.</span>to<span class="token punctuation">)</span>
            <span class="token operator">:</span> n2<span class="token punctuation">.</span>props<span class="token punctuation">.</span>to
            n2<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> target<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 更新</span>
            <span class="token function">patchChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>props<span class="token punctuation">.</span>to <span class="token operator">!==</span> n1<span class="token punctuation">.</span>props<span class="token punctuation">.</span>to<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> newTarget <span class="token operator">=</span> <span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>props<span class="token punctuation">.</span>to <span class="token operator">===</span> <span class="token string">'string'</span>
                <span class="token operator">?</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>props<span class="token punctuation">.</span>to<span class="token punctuation">)</span>
                <span class="token operator">:</span> n2<span class="token punctuation">.</span>props<span class="token punctuation">.</span>to
                n2<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">move</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> newTarget<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="move 函数">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">&amp;&amp;</span> type<span class="token punctuation">.</span>__isTeleport<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    type<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        patch<span class="token punctuation">,</span>
        patchChildren<span class="token punctuation">,</span>
        <span class="token function">move</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">insert</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>component <span class="token operator">?</span> vnode<span class="token punctuation">.</span>component<span class="token punctuation">.</span>subTree<span class="token punctuation">.</span>el <span class="token operator">:</span> vnode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💡 目前代码只考虑了移动组件和普通元素。虚拟节点实际上有很多种，例如文本、片段类型等。一个完善的实现应该考虑所有这些虚拟节点的类型。</p>
</CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">Teleport 组件实现</p>
<p>✅ 可见，即使 Teleport 的渲染逻辑被单独分离出来，它的渲染思路仍然和渲染器本身的渲染思路保持一致。</p>
<p>通过判断旧的虚拟节点（n1） 是否存在，来决定是执行挂载还是执行更新。如果是挂载 <code v-pre>patch</code>，遍历 Teleport 组件的 children 属性执行固定父节点为 props.to 的挂载。更新则调用 <code v-pre>patchChildren</code> 函数。同时，考虑到 Teleport 组件的更新可能是 to 参数的不同引起的，补充了获取新容器进行移动的逻辑。</p>
</div>
<h2 id="transition-组件的实现原理" tabindex="-1"><a class="header-anchor" href="#transition-组件的实现原理" aria-hidden="true">#</a> Transition 组件的实现原理</h2>
<div class="custom-container tip"><p class="custom-container-title">Transition 组件的核心原理</p>
<ul>
<li>当 DOM 元素被挂载时，将动效附加到该 DOM 元素上；</li>
<li>当 DOM 元素被卸载时，不要立即卸载 DOM 元素，而是等到附加到该 DOM 元素上的动效执行完成后再卸载它。</li>
</ul>
</div>
<h3 id="原生-dom-的过渡" tabindex="-1"><a class="header-anchor" href="#原生-dom-的过渡" aria-hidden="true">#</a> 原生 DOM 的过渡</h3>
<p>过渡效果的本质是一个 DOM 元素再两种状态间的切换，浏览器会根据过渡效果自行完成 DOM 元素的过渡。这里的过渡效果指的是持续时长、运动曲线、要过渡的属性等。</p>
<CodeGroup>
<CodeGroupItem title="样式">
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.enter-active, .leave-active</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> transform 1s ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.enter-from, .leave-to</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.enter-to, .leave-from</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="模板和脚本">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 元素创建</span>
        <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
        el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span>

        <span class="token comment">// before enter 在元素被添加到页面之前，把初始状态和运动过程定义到元素上</span>
        el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'enter-from'</span><span class="token punctuation">)</span>
        el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'enter-active'</span><span class="token punctuation">)</span>
        <span class="token comment">// 添加元素</span>
        container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
        
        <span class="token comment">// enter 在下一帧切换元素状态</span>
        <span class="token function">nextFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'enter-from'</span><span class="token punctuation">)</span>
            el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'enter-to'</span><span class="token punctuation">)</span>
			<span class="token comment">// 监听 transitionend 事件完成收尾工作</span>
            el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'transitionend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'enter-to'</span><span class="token punctuation">)</span>
                el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'enter-active'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// requesetAnimationFrame 浏览器 bug</span>
        <span class="token comment">// 其注册的函数回调会在当前帧执行，除非其他代码以及调用了一次该函数</span>
        <span class="token comment">// requesetAnimationFrame(() => { requesetAnimationFrame(() => { /*...*/ }) })</span>
        <span class="token keyword">function</span> <span class="token function">nextFrame</span><span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 将卸载动作封装到 performRemove 函数中</span>
            <span class="token keyword">const</span> <span class="token function-variable function">performRemove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
            <span class="token comment">// remove 动作的初始状态</span>
            el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'leave-from'</span><span class="token punctuation">)</span>
            el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'leave-active'</span><span class="token punctuation">)</span>

            <span class="token comment">// 强制 reflow，使初始状态生效</span>
            <span class="token comment">// document.body.offsetHeight </span>

            <span class="token comment">// 在初始状态的下一帧切换状态</span>
            <span class="token function">nextFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token comment">// 切换到结束状态</span>
                el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'leave-from'</span><span class="token punctuation">)</span>
                el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'leave-to'</span><span class="token punctuation">)</span>
                <span class="token comment">// 监听 transitionend 事件完成收尾工作</span>
                el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'transitionend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'leave-to'</span><span class="token punctuation">)</span>
                    el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'leave-active'</span><span class="token punctuation">)</span>
                    <span class="token comment">// 过渡完成之后移除 DOM 元素</span>
                    <span class="token function">performRemove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/Vuejs3/transition.gif" alt=""></p>
<div class="custom-container tip"><p class="custom-container-title">过渡状态过程</p>
<ol>
<li>初始状态 from + active</li>
<li>下一帧切换到 active + to</li>
<li>监听动画结束后收尾 &quot;&quot;</li>
</ol>
</div>
<h3 id="实现-transition-组件" tabindex="-1"><a class="header-anchor" href="#实现-transition-组件" aria-hidden="true">#</a> 实现 Transition 组件</h3>
<p>Transition 组件的实现原理与原生是一致的，只不过它是基于虚拟 DOM 实现。</p>
<p>✅ 整个过渡过程可以抽象为几个阶段，这些阶段可以抽象为特定的回调函数：<code v-pre>beforeEnter</code>、<code v-pre>enter</code>、<code v-pre>leave</code>等。基于虚拟 DOM 的实现也需要将 DOM 元素的生命周期分割为这样几个阶段，并在特定阶段执行对应的回调函数。</p>
<CodeGroup>
<CodeGroupItem title="组件模板">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transition</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>我是需要过渡的元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transition</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="编译后的虚拟 DOM">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Transition<span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'我是需要过渡的元素'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Transition 组件的子节点被编译为<strong>默认插槽</strong>，与普通组件的行为一致。</p>
</CodeGroupItem>
<CodeGroupItem title="Transition 组件">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Transition <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Transition'</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> slots <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 通过默认插槽取得需要过渡的元素</span>
            <span class="token keyword">const</span> innerVNode <span class="token operator">=</span> slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token comment">// 在过渡元素的 VNode 对象上添加 transtion 响应的钩子函数</span>
            innerVNode<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token function">beforeEnter</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// ...</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">enter</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// ...</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">leave</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> performRemove</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// ...</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
			<span class="token comment">// 渲染需要过渡的元素</span>
            <span class="token keyword">return</span> innerVNode
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过 Transition 组件的包装之后，内部需要过渡的虚拟节点对象会被添加一个 vnode.transition 对象。其下存在一些与 DOM 元素过渡相关的钩子函数。</p>
<p>✅  渲染器在渲染需要过渡的虚拟节点时，会在合适的时机调用附加到该虚拟节点上的过渡相关的生命周期钩子函数，具体体现在 <code v-pre>mountElement</code> 函数以及 <code v-pre>unmount</code> 函数中</p>
</CodeGroupItem>
<CodeGroupItem title="mountElement">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountElement</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> vnode<span class="token punctuation">.</span>el <span class="token operator">=</span> <span class="token function">createElement</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>type<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setElementText</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vnode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> child<span class="token punctuation">,</span> el<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">patchProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 判断一个 VNode 是否需要过渡</span>
    <span class="token keyword">const</span> needTransition <span class="token operator">=</span> vnode<span class="token punctuation">.</span>transition
    <span class="token keyword">if</span> <span class="token punctuation">(</span>needTransition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vnode<span class="token punctuation">.</span>transition<span class="token punctuation">.</span><span class="token function">beforeEnter</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">insert</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>needTransition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用 transition.enter 钩子，并将 DOM 元素作为参数传递</span>
        vnode<span class="token punctuation">.</span>transition<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>在挂载元素之前，会调用 <code v-pre>transition.beforeEnter</code> 钩子</li>
<li>在挂载元素之后，会调用<code v-pre>transition.enter</code>钩子</li>
</ol>
</CodeGroupItem>
<CodeGroupItem title="unmount">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断 VNode 是否需要过渡</span>
    <span class="token keyword">const</span> needTransition <span class="token operator">=</span> vnode<span class="token punctuation">.</span>transition
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>type <span class="token operator">===</span> Fragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vnode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>shouldKeepAlive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            vnode<span class="token punctuation">.</span>keepAliveInstance<span class="token punctuation">.</span><span class="token function">_deActivate</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">unmount</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>component<span class="token punctuation">.</span>subTree<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> parent <span class="token operator">=</span> vnode<span class="token punctuation">.</span>el<span class="token punctuation">.</span>parentNode
    <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将卸载动作封装到 performRemove 函数中</span>
        <span class="token keyword">const</span> <span class="token function-variable function">performRemove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>needTransition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果需要过渡处理，则调用 transition.leave 钩子</span>
            <span class="token comment">// 同时将 DOM 元素和 performRemove 函数作为参数传递</span>
            vnode<span class="token punctuation">.</span>transition<span class="token punctuation">.</span><span class="token function">leave</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> performRemove<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果不需要过渡，则直接卸载元素</span>
            <span class="token function">performRemove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在卸载元素时，如果是需要过渡的元素，则调用<code v-pre>transition.leave</code>，并且把元素 <code v-pre>el</code> 和 <code v-pre>performRemove</code> 函数作为参数传递。</p>
</CodeGroupItem>
<CodeGroupItem title="Transition 组件实现">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Transition <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Transition'</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> slots <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> innerVNode <span class="token operator">=</span> slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            innerVNode<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token comment">// 设置初始状态：enter-from + enter-active</span>
                <span class="token function">beforeEnter</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'enter-from'</span><span class="token punctuation">)</span>
                    el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'enter-active'</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">enter</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 在下一帧切换到结束状态 enter-active + enter-to</span>
                    <span class="token function">nextFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'enter-from'</span><span class="token punctuation">)</span>
                        el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'enter-to'</span><span class="token punctuation">)</span>
                        <span class="token comment">// 监听 transitionend 事件完成收尾工作</span>
                        el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'transitionend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                            el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'enter-to'</span><span class="token punctuation">)</span>
                            el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'enter-active'</span><span class="token punctuation">)</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">leave</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> performRemove</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 设置初始状态：leave-from + leave-active</span>
                    el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'leave-from'</span><span class="token punctuation">)</span>
                    el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'leave-active'</span><span class="token punctuation">)</span>

                    <span class="token comment">// document.body.offsetHeight</span>

                    <span class="token function">nextFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        <span class="token comment">// 在下一帧切换到结束状态 leave-active + leave-to</span>
                        el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'leave-from'</span><span class="token punctuation">)</span>
                        el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'leave-to'</span><span class="token punctuation">)</span>
                        <span class="token comment">// 监听 transitionend 事件完成收尾工作</span>
                        el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'transitionend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                            el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'leave-to'</span><span class="token punctuation">)</span>
                            el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'leave-active'</span><span class="token punctuation">)</span>
                            <span class="token comment">// </span>
                            <span class="token function">performRemove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
			<span class="token comment">// 渲染需要过渡的元素</span>
            <span class="token keyword">return</span> innerVNode
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">Transition 组件</p>
<ul>
<li>Transition 组件本身不会渲染任何额外的内容，它只是通过默认插槽读取过渡元素，并渲染需要过渡的元素；</li>
<li>Transition 组件的作用，就是在过渡元素的虚拟节点上添加 transition 相关的钩子函数。</li>
</ul>
</div>
<p>目前，代码硬编码了过渡状态的类名，例如<code v-pre>enter-from</code>、<code v-pre>enter-active</code>、<code v-pre>enter-to</code>等。实际上，我们可以轻松通过 props 来实现允许用户自定义类名的能力，从而实现一个更加灵活的 Transition 组件。</p>
<p>另外，我们没有实现“模式”的概念，即先进后出（in-out）和后进先出（out-in）。模式的概念实际上只是增加了对节点过渡时机的控制，原理上与将卸载动作封装到 <code v-pre>performRemove</code> 函数中一样，只需要在具体的时机以回调的形式将控制权交接出去即可。</p>
</div></template>
