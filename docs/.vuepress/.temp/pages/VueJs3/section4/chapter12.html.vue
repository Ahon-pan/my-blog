<template><div><h1 id="组件的实现原理" tabindex="-1"><a class="header-anchor" href="#组件的实现原理" aria-hidden="true">#</a> 组件的实现原理</h1>
<p>渲染器主要负责将虚拟 DOM 渲染为真实 DOM，我们只需要使用虚拟 DOM 来描述最终要呈现的真实 DOM 即可。</p>
<p>但当我们编写比较复杂的页面时，用来描述页面结构的虚拟 DOM 的代码量会越来越多，或者说页面模板会变得越来越大。这时，我们就需要组件化的能力。</p>
<p>有了组件，我们就可以将一个大的页面拆分为多个部分，每个部分都可以作为单独的组件，这些组件共同组成完整的页面。组件化的实现同样需要渲染器的支持。</p>
<h2 id="渲染组件" tabindex="-1"><a class="header-anchor" href="#渲染组件" aria-hidden="true">#</a> 渲染组件</h2>
<blockquote>
<ul>
<li>使用虚拟节点的 <code v-pre>vnode.type</code> 属性来存储组件对象，渲染器根据虚拟节点的该属性的类型来判断它是否是组件。</li>
<li>如果是组件，则渲染器会调用 <code v-pre>mountComponent</code> 和 <code v-pre>patchComponent</code> 来完成组件的挂载和更新。</li>
</ul>
</blockquote>
<h3 id="组件类型节点" tabindex="-1"><a class="header-anchor" href="#组件类型节点" aria-hidden="true">#</a> 组件类型节点</h3>
<p>从<strong>用户角度</strong>来看，一个<strong>有状态组件</strong>就是一个<strong>选项对象</strong>，如下面的代码所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// MyComponent 是一个组件，它的值是一个选项对象</span>
<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'MyComponent'</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从<strong>渲染器角度</strong>来看，一个组件则是一个特殊类型的虚拟 DOM 节点：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 'div' | Fragemnt | Text...</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="渲染器处理组件" tabindex="-1"><a class="header-anchor" href="#渲染器处理组件" aria-hidden="true">#</a> 渲染器处理组件</h3>
<p><strong>渲染器</strong>会使用虚拟节点的 type 属性来区分其类型。对于不同的节点，就需要采用不同的处理方法来完成挂载和更新。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&amp;&amp;</span> n1<span class="token punctuation">.</span>type <span class="token operator">!==</span> n2<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">unmount</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
        n1 <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> n2
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 作为普通元素处理</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> Text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 作为文本节点处理</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> Fragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 作为片段处理</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// component</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">mountComponent</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">patchComponent</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过在 patch 函数中对组件类型逻辑分支的补充，渲染器因此有了处理组件的能力。</p>
<h3 id="组件接口设计" tabindex="-1"><a class="header-anchor" href="#组件接口设计" aria-hidden="true">#</a> 组件接口设计</h3>
<div class="custom-container tip"><p class="custom-container-title">接下来，要设计组件在用户层面的接口</p>
<ol>
<li>用户应该如何编写组件？</li>
<li>组件的选项对象必须包含哪些内容？</li>
<li>组件拥有哪些能力？</li>
</ol>
</div>
<p>🚀 组件本身是对页面内容的封装，它用来描述页面内容的一部分。因此，一个组件<strong>必须包含一个渲染函数</strong>，即 render 函数，并且渲染函数的返回值应该是虚拟 DOM。</p>
<p>换句话说，<strong>组件的渲染函数就是用来描述组件所渲染内容的接口</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// vnode.type</span>
<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'MyComponent'</span><span class="token punctuation">,</span>
    <span class="token comment">// 组件的渲染函数，其返回值必须为虚拟 DOM</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'我是文本'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个简单的组件实例。有了基本的组件结构之后，渲染器就可以完成组件的渲染：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 组件类型的 VNode</span>
<span class="token keyword">const</span> CompVNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>  <span class="token comment">// 上面声明的组件对象</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调用渲染器来渲染组件</span>
renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>CompVNode<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染器中真正完成组件渲染的是 mountComponent 函数，其具体实现如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 通过 vnode 获取组件的选项对象，即 vnode.type</span>
    <span class="token keyword">const</span> componentOptions <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type
    <span class="token comment">// 获取组件的 render 函数</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token operator">=</span> componentOptions
    <span class="token comment">// 执行 render函数，得到组件要渲染内容的虚拟 DOM</span>
    <span class="token keyword">const</span> subTree <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 挂载组件内容到父节点</span>
    <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，我们就实现了最基本的组件化方案。</p>
<h2 id="组件状态与自更新" tabindex="-1"><a class="header-anchor" href="#组件状态与自更新" aria-hidden="true">#</a> 组件状态与自更新</h2>
<blockquote>
<ul>
<li>在组件的挂载阶段，会为组件创建一个用于渲染其内容的副作用函数。该副作用函数会与组件自身的响应式数据建立响应联系。当组件自身的响应式数据发生变化时，会触发渲染副作用函数重新执行，即重新渲染。</li>
<li>默认情况下重新渲染是重新执行的，这导致无法去重，因此我们在创建渲染副作用函数时，制定了一个自定义的调用器。该调度器的作用是：当组件自身的响应式数据发生变化时，将渲染副作用函数缓冲到微任务队列中。</li>
<li>有了缓冲队列，我们即可实现对渲染任务的去重，从而避免无用的重新渲染所导致的额外性能开销。</li>
</ul>
</blockquote>
<h3 id="组件状态设计" tabindex="-1"><a class="header-anchor" href="#组件状态设计" aria-hidden="true">#</a> 组件状态设计</h3>
<p>为组件设计自身的状态：为组件对象补充一个 data 函数，将其返回值作为组件的状态</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'MyComponent'</span><span class="token punctuation">,</span>
    <span class="token comment">// 用 data 函数来定义组件自身的状态</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'hello world'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">foo 的值是： </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>foo<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>  <span class="token comment">// 在render函数中使用组件状态</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📝 以上代码约定用户必须使用 data 函数来定义组件自身的状态，同时可以在渲染函数中通过 this 访问由 data 函数返回的状态数据。</p>
<p>下面代码实现了组件自身<strong>状态的初始化</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> componentOptions <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type
    <span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> componentOptions
    
    <span class="token comment">// 调用 data 函数获得组件状态，并将其包装为响应式数据</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 将 render 函数的 this 设置为组将状态对象</span>
	<span class="token keyword">const</span> subTree <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
    <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>实现组件自身状态的初始化</summary>
<ol>
<li>通过组件的选项对象取得 data 函数并执行，然后调用 reactive 函数将 data 函数返回的状态包装为响应式数据；</li>
<li>在调用 render 函数时，将其 this 的指向设置为响应式数据 state，同时将 state  作为 render 函数调用的第一个参数传递。</li>
</ol>
</details>
<p>✅ 经过这两个步骤之后，我们就实现了对组件自身<strong>状态</strong>的支持，以及在渲染函数内<strong>访问</strong>组件自身状态的能力。</p>
<h3 id="组件的自更新" tabindex="-1"><a class="header-anchor" href="#组件的自更新" aria-hidden="true">#</a> 组件的自更新</h3>
<p>当组件状态发生变化的时候，我们还需要有能力触发组件更新，即组件的自更新。为此，我们需要把整个渲染任务包装到一个 effect 中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> componentOptions <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type
    <span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> componentOptions

    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> subTree <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
        <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，数据一旦变化，那么渲染任务便会自动执行。但是，如果多次改变响应式数据的值，会导致渲染函数执行多次，这实际上是没有必要的。</p>
<p>我们需要一个机制是的无论响应式数据进行多少次修改，副作用函数都只会执行一次。这个借助之前的<strong>调度器</strong>即可实现：</p>
<p>🌐 <a href="https://www.ijerrychen.com/VueJs3/section2/chapter4.html#%E8%B0%83%E5%BA%A6%E6%89%A7%E8%A1%8C" target="_blank" rel="noopener noreferrer">调度器 (opens new window)<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 任务缓存队列，Set 可自动去重</span>
<span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 一个标志，代表是否正在刷新任务队列</span>
<span class="token keyword">let</span> isFlushing <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token comment">// 创建一个立即 resolve 的 Promise 实例</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 调度器的主要函数，用来将一个任务添加到缓冲队列中，并开始刷新队列</span>
<span class="token keyword">function</span> <span class="token function">queueJob</span><span class="token punctuation">(</span><span class="token parameter">job</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 job 添加到任务队列 queue 中</span>
    queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>job<span class="token punctuation">)</span>
    <span class="token comment">// 如果还没有开始刷新队列，则刷新之</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>isFlushing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将该标志设置为 true 以避免重复刷新</span>
       isFlushing <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token comment">// 在该任务队列中刷新任务</span>
        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">// 执行任务队列中的任务</span>
                queue<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">job</span> <span class="token operator">=></span> <span class="token function">job</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                <span class="token comment">// 重置任务</span>
                isFlushing <span class="token operator">=</span> <span class="token boolean">false</span>
                queue<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面为调度器的最小实现，本质上利用了<strong>微任务的异步执行机制</strong>，实现对副作用函数的缓冲。有了调度器函数，我们可以在创建渲染副作用时使用它：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> componentOptions <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type
    <span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> componentOptions

    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> subTree <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
        <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token comment">// 指定该副作用函数的调度器</span>
        <span class="token literal-property property">scheduler</span><span class="token operator">:</span> queueJob
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✅ 这样，当响应式数据发生变化时，副作用函数不会立即执行，而是会被 queueJob 函数调度，最后在一个微任务中执行。</p>
<p>目前，patch 的第一个参数总是 null，也就是说我们每次渲染都是全新的挂载，而不会打补丁。我们需要对此进行处理，更新时可以进行打补丁。为此，我们需要实现组件实例，用它来维护组件整个生命周期的状态，这样渲染器才能够在正确的时机执行合适的操作。</p>
<h2 id="组件的实例与生命周期" tabindex="-1"><a class="header-anchor" href="#组件的实例与生命周期" aria-hidden="true">#</a> 组件的实例与生命周期</h2>
<blockquote>
<ul>
<li>组件实例本质上是一个对象，包含了组件运行过程中的状态（组件是否挂载、组件自身的响应式数据，以及组件所渲染的内容 <code v-pre>subTree</code> 等等）。</li>
<li>渲染副作用函数可以根据组件实例的状态标识来决定是否应该进行权限的挂载，还是应该打补丁。</li>
</ul>
</blockquote>
<h3 id="组件实例" tabindex="-1"><a class="header-anchor" href="#组件实例" aria-hidden="true">#</a> 组件实例</h3>
<p>组件实例本质上就是一个状态集合（或一个对象），它维护着组件运行过程中的所有信息，例如注册到组件的生命周期函数、组件渲染的子树（subTree）、组件是否已经挂载、组件自身的状态（data）等等。为了解决目前组件更新的问题，我们需要引入组件实例的概念，以及与之相关的状态信息：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> componentOptions <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type
    <span class="token keyword">let</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> componentOptions

    <span class="token keyword">const</span> state <span class="token operator">=</span> data <span class="token operator">?</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 定义组件实例，一个包含着组件状态信息的对象</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">,</span>  <span class="token comment">// 组件自身状态数据，即 data</span>
        <span class="token literal-property property">isMounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>  <span class="token comment">// 组件是否已经挂载</span>
        <span class="token literal-property property">subTree</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>  <span class="token comment">// 组件所渲染的内容，即子树（subTree）</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 将组件实例设置到 vnode 上，用于后续更新</span>
    vnode<span class="token punctuation">.</span>component <span class="token operator">=</span> instance

    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用组件的渲染函数，获得要渲染的内容</span>
        <span class="token keyword">const</span> subTree <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">.</span>isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 初次挂载</span>
            <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span> 
            instance<span class="token punctuation">.</span>isMounted <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  <span class="token comment">// 更新 => 打补丁</span>
            <span class="token function">patch</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>subTree<span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 更新组件实例的子树，方便后续打补丁的比较</span>
        instance<span class="token punctuation">.</span>subTree <span class="token operator">=</span> subTree
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scheduler</span><span class="token operator">:</span> queueJob
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>组件实例对象</summary>
<ul>
<li>state：组件自身的状态数据，即 data</li>
<li>isMounted：一个布尔值，用来表示组件是否已经被挂载</li>
<li>subTree：存储组件的渲染函数所返回的虚拟 DOM，即组件的子树（subTree）</li>
</ul>
<p>✅ 这样，我们可以根据需要，任意得在组件实例 instance 上添加需要的属性。但需要注意的是，我们应该尽可能保持组件实例轻量，以减少内存占用</p>
</details>
<h3 id="声明周期函数" tabindex="-1"><a class="header-anchor" href="#声明周期函数" aria-hidden="true">#</a> 声明周期函数</h3>
<p>目前组件实例的 isMounted 属性可以用来区分组件的挂载和更新。因此，我们可以在合适的时机<strong>调用</strong>组件的<strong>声明周期钩子</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> componentOptions <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type
    <span class="token keyword">let</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> data<span class="token punctuation">,</span> beforeCreate<span class="token punctuation">,</span> created<span class="token punctuation">,</span> beforeMount<span class="token punctuation">,</span> mounted<span class="token punctuation">,</span> beforeUpdate<span class="token punctuation">,</span> updated <span class="token punctuation">}</span> <span class="token operator">=</span> componentOptions

    beforeCreate <span class="token operator">&amp;&amp;</span> <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> state <span class="token operator">=</span> data <span class="token operator">?</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">,</span>
        <span class="token literal-property property">isMounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subTree</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    vnode<span class="token punctuation">.</span>component <span class="token operator">=</span> instance

    created <span class="token operator">&amp;&amp;</span> <span class="token function">created</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> subTree <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">.</span>isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            beforeMount <span class="token operator">&amp;&amp;</span> <span class="token function">beforeMount</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
            <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
            instance<span class="token punctuation">.</span>isMounted <span class="token operator">=</span> <span class="token boolean">true</span>
            mounted <span class="token operator">&amp;&amp;</span> <span class="token function">mounted</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            beforeUpdate <span class="token operator">&amp;&amp;</span> <span class="token function">beforeUpdate</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
            <span class="token function">patch</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>subTree<span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
            updated <span class="token operator">&amp;&amp;</span> <span class="token function">updated</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        instance<span class="token punctuation">.</span>subTree <span class="token operator">=</span> subTree
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scheduler</span><span class="token operator">:</span> queueJob
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✅ 在上面这段代码中，我们首先从组件的选项对象中取得注册到组件上的声明周期函数，然后在合适的时机调用它们，这其实就是组件生命周期的实现原理。</p>
<blockquote>
<p>实际上，一个组件可以存在多个同样的生命周期钩子，例如 mixins。因此我们通常需要将组件的声明周期钩子序列化为一个数组，但核心原理不变。</p>
</blockquote>
<h2 id="props-与组件的被动更新" tabindex="-1"><a class="header-anchor" href="#props-与组件的被动更新" aria-hidden="true">#</a> props 与组件的被动更新</h2>
<blockquote>
<ul>
<li>副作用子更新所引起的子组件更新叫做子组件的被动更新。</li>
<li>渲染上下文<code v-pre>renderContext</code> 实际上是组件实例的代理对象。在渲染函数内访问组件所暴露的数据都是通过该代理对象实现的。</li>
</ul>
</blockquote>
<h3 id="props-与-attrs" tabindex="-1"><a class="header-anchor" href="#props-与-attrs" aria-hidden="true">#</a> props 与 attrs</h3>
<p>在虚拟 DOM 层面，组件的 props 与普通 HTML 标签的属性差别不大。假设我们有模板如下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A Big Title<span class="token punctuation">"</span></span> <span class="token attr-name">:other</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>val<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这段模板对应的虚拟 DOM 是：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'A Big Title'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>val
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，模板与虚拟 DOM 几乎是“同构”的。同时，在编写组件时，我们需要显示地指定组件要接收哪些数据：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'MyComponent'</span><span class="token punctuation">,</span>
    <span class="token comment">// 组件接收一个 String 类型的 title 属性</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">foo 的值是： </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">所以对于一个组件来说，有两部分关于 props 的内容我们需要关心：</p>
<ul>
<li>为组件传递的 props 数据，即组件的 vnode.props 对象。（组件都接收到了什么）</li>
<li>组件选项对象中定义的 props 选项，即 MyComponent.props 对象。（组件要什么）</li>
</ul>
</div>
<p>我们需要结合这两个选项解析出组件在渲染时需要用到的 props 数据：</p>
<CodeGroup>
<CodeGroupItem title="resolveProps">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">options：组件props声明要接收的属性</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">propsData：vnode节点接收到的全部属性</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">[</span>Props<span class="token punctuation">,</span> Attrs<span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
<span class="token keyword">function</span> <span class="token function">resolveProps</span><span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> propsData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> propsData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果属性被组件声明在 props 对象中，则为 props</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> key <span class="token keyword">in</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            props<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> propsData<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 否则就是 attrs</span>
            attrs<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> propsData<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">[</span> props<span class="token punctuation">,</span> attrs <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="props 与 attrs 解析">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> componentOptions <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type
    <span class="token keyword">let</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span> propsOption <span class="token comment">/* 其它省略 */</span> <span class="token punctuation">}</span> <span class="token operator">=</span> componentOptions

    beforeCreate <span class="token operator">&amp;&amp;</span> <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> state <span class="token operator">=</span> data <span class="token operator">?</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                  
    <span class="token comment">// 调用 resolveProps 函数解析出最终的 props 数据与 attrs 数据</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>props<span class="token punctuation">,</span> attrs<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">resolveProps</span><span class="token punctuation">(</span>propsOption<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span>

    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">,</span>
        <span class="token comment">// 将解析出的 props 数据保包装为 shallowReactive 并定义到组件实例上</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isMounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subTree</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    vnode<span class="token punctuation">.</span>component <span class="token operator">=</span> instance

    created <span class="token operator">&amp;&amp;</span> <span class="token function">created</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> subTree <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">.</span>isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            beforeMount <span class="token operator">&amp;&amp;</span> <span class="token function">beforeMount</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
            <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
            instance<span class="token punctuation">.</span>isMounted <span class="token operator">=</span> <span class="token boolean">true</span>
            mounted <span class="token operator">&amp;&amp;</span> <span class="token function">mounted</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            beforeUpdate <span class="token operator">&amp;&amp;</span> <span class="token function">beforeUpdate</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
            <span class="token function">patch</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>subTree<span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
            updated <span class="token operator">&amp;&amp;</span> <span class="token function">updated</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        instance<span class="token punctuation">.</span>subTree <span class="token operator">=</span> subTree
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scheduler</span><span class="token operator">:</span> queueJob
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<blockquote>
<p>在 Vue.js3 中，没有定义在 MyComponent.props 选项中的 props 数据将存储到 attrs 对象中。</p>
<p>上述实现没有包含默认值、类型校验等内容的处理。实际上，这些内容也都是围绕 MyComponent.props 和 vnode.props 这两个对象展开的。</p>
</blockquote>
<h3 id="被动更新" tabindex="-1"><a class="header-anchor" href="#被动更新" aria-hidden="true">#</a> 被动更新</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-component</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>假设父组件内使用了子组件，并且传递了一个响应式数据 title。当 title 发生变化时，父组件的渲染函数会重新执行，也就是<strong>自更新</strong>。在更新过程中，渲染器发现父组件的 <code v-pre>subTree</code> 包含组件类型的虚拟节点，所以会调用 <code v-pre>patchComponent</code> 函数完成子组件的更新。</p>
<div class="custom-container tip"><p class="custom-container-title">被动更新: 由父组件自更新所引起的子组件更新</p>
<ul>
<li>检测子组件是否真的需要更新，因为子组件的 props 可能是不变的；</li>
<li>如果需要更新，则更新子组件的 props、slots 等内容。</li>
</ul>
</div>
<CodeGroup>
<CodeGroupItem title="patchComponent">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchComponent</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取组件实例，即 n1 旧 vnode 的component，同时让新的组件虚拟节点 n2.component 也指向组件实例</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>component <span class="token operator">=</span> n1<span class="token punctuation">.</span>component<span class="token punctuation">)</span>
    <span class="token comment">// 获取当前的 props 数据</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> props <span class="token punctuation">}</span> <span class="token operator">=</span> instance
    <span class="token comment">// 检测传递给子组件的 props 是否发生变化，有变化才更新</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasPropsChanged</span><span class="token punctuation">(</span>n1<span class="token punctuation">.</span>props<span class="token punctuation">,</span> n2<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用 resolveProps 重新获取 props 数据</span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span> nextProps<span class="token punctuation">,</span> nextAttrs <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">resolveProps</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>type<span class="token punctuation">.</span>props<span class="token punctuation">,</span> n2<span class="token punctuation">.</span>props<span class="token punctuation">)</span>
        <span class="token comment">// props 更新与删除</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> k <span class="token keyword">in</span> nextProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            props<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> nextProps<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> k <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>k <span class="token keyword">in</span> nextProps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">delete</span> props<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="hasPropsChanged">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hasPropsChanged</span><span class="token punctuation">(</span><span class="token parameter">prevProps<span class="token punctuation">,</span> nextProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> nextKeys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextKeys<span class="token punctuation">.</span>length <span class="token operator">!==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nextKeys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> key <span class="token operator">=</span> nextKeys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">return</span> nextProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> prevProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>需要把组件实例添加到新的组件 vnode 对象上，即 <code v-pre>n2.component = n1.component</code>，否则下次更新时将无法取得组件实例；</li>
<li><code v-pre>instance.props</code> 对象本身是浅响应的（shallowReactive）。因此，在更新组件 props 时，只需要设置 <code v-pre>instance.props</code> 对象下的属性值即可触发组件重新渲染。</li>
</ul>
<h3 id="渲染上下文对象" tabindex="-1"><a class="header-anchor" href="#渲染上下文对象" aria-hidden="true">#</a> 渲染上下文对象</h3>
<p>由于 props 数据与组件自身的状态数据都需要暴露到渲染函数中，并使得渲染函数能够通过 this 访问它们，因此我们需要封装一个渲染上下文对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isMounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subTree</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    vnode<span class="token punctuation">.</span>component <span class="token operator">=</span> instance
    <span class="token comment">// 创建渲染上下文对象，本质是组件实例的代理</span>
    <span class="token keyword">const</span> renderContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> k<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> props<span class="token punctuation">,</span> slots <span class="token punctuation">}</span> <span class="token operator">=</span> t

            <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> <span class="token string">'$slots'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> slots

            <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">&amp;&amp;</span> k <span class="token keyword">in</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> state<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> props<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>setupState <span class="token operator">&amp;&amp;</span> k <span class="token keyword">in</span> setupState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> setupState<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'不存在'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span> <span class="token punctuation">(</span>t<span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> props <span class="token punctuation">}</span> <span class="token operator">=</span> t
            <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">&amp;&amp;</span> k <span class="token keyword">in</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                state<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                props<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>setupState <span class="token operator">&amp;&amp;</span> k <span class="token keyword">in</span> setupState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                setupState<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'不存在'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 声明周期函数调用时要绑定渲染上下文对象</span>
    created <span class="token operator">&amp;&amp;</span> <span class="token function">created</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✅  通过创建一个组件实例的<strong>代理对象</strong>，这个对象就是渲染上下文对象。每当渲染函数或者声明周期函数钩子中通过 this 来访问数据时，都会优先从组件自身状态中读取，如果组件本身没有对应的数据，则再从 props 数据中读取。然后我们将这个渲染上下文对象作为渲染函数和声明周期钩子函数的 this 即可。</p>
<blockquote>
<p>除了组件自身的数据和 props 数据之外，完整的组件还包含 methods、computed 等组件选项中定义的方法，这些内容都应该在渲染上下文对象中处理。</p>
</blockquote>
<h2 id="setup-函数的作用与实现" tabindex="-1"><a class="header-anchor" href="#setup-函数的作用与实现" aria-hidden="true">#</a> setup 函数的作用与实现</h2>
<h3 id="setup-函数" tabindex="-1"><a class="header-anchor" href="#setup-函数" aria-hidden="true">#</a> setup 函数</h3>
<div class="custom-container tip"><p class="custom-container-title">setup 函数是 Vue.js 3 新增的组件选项，它主要是用于配合组件式 API，为用户提供一个地方，用于建立组合逻辑、创建响应式数据、创建通用函数、注册生命周期钩子等能力。</p>
<ol>
<li>在组件整个生命周期中，setup 函数只会执行一次，它的<strong>返回值</strong>可以是一个 render 函数，也可以是一个对象；</li>
<li>setup 函接接收两个<strong>参数</strong>，分别是 props 数据对象和一个 setupContext 对象。</li>
</ol>
</div>
<details class="custom-container details"><summary>setupContext</summary>
<ul>
<li>slots：组件接收到的插槽。</li>
<li>emit：一个函数，用来发射自定义事件。</li>
<li>attrs：当为组件传递 props 时，那些没有显示地声明为 props 属性会存储到 attrs 中。</li>
<li>expose：一个函数，用来显示定义组件对外暴露的数据。</li>
</ul>
</details>
<CodeGroup>
<CodeGroupItem title="返回 render 函数">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> comp <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// setup 函数可以返回一个函数，该函数将作为组件的渲染函数</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'hello'</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="返回对象">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> comp <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// setup 函数对象，对象中的数据会暴露到渲染函数中</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">count is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="参数">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> comp <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">prosp</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> setupContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        props<span class="token punctuation">.</span>foo  <span class="token comment">// 访问传入的 props 数据</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> slots<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> expose <span class="token punctuation">}</span> <span class="token operator">=</span> setupContext
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="setup-实现" tabindex="-1"><a class="header-anchor" href="#setup-实现" aria-hidden="true">#</a> setup 实现</h3>
<p>✅  通过检测 setup 函数的返回值来判断如何处理它。如果返回一个函数，那么组件的 render 选项将被忽略；如果返回一个对象，那么对象将作为组件的状态数据 <code v-pre>setupState</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> componentOptions <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type
    <span class="token keyword">let</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> data<span class="token punctuation">,</span> setup <span class="token punctuation">}</span> <span class="token operator">=</span> componentOptions

    beforeCreate <span class="token operator">&amp;&amp;</span> <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> state <span class="token operator">=</span> data <span class="token operator">?</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>props<span class="token punctuation">,</span> attrs<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">resolveProps</span><span class="token punctuation">(</span>propsOption<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span>

    <span class="token keyword">const</span> slots <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isMounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subTree</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> setupContext <span class="token operator">=</span> <span class="token punctuation">{</span> attrs <span class="token punctuation">}</span>  <span class="token comment">// emit,slots,expose...</span>
    <span class="token comment">// 调用 setup 函数，将只读版本的 props 传给 setup 作为第一个参数</span>
    <span class="token comment">// setupContext 为第二个参数</span>
    <span class="token keyword">const</span> setupResult <span class="token operator">=</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token function">shallowReadonly</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span> setupContext<span class="token punctuation">)</span>
    <span class="token keyword">let</span> setupState <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> setupResult <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>render<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'setup 函数返回渲染函数，render 选项将被忽略'</span><span class="token punctuation">)</span>
        render <span class="token operator">=</span> setupResult
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果 setup 返回一个对象，则作为数据状态赋值给 setupState</span>
        setupState <span class="token operator">=</span> setupContext
    <span class="token punctuation">}</span>

    vnode<span class="token punctuation">.</span>component <span class="token operator">=</span> instance

    <span class="token keyword">const</span> renderContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> k<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> props <span class="token punctuation">}</span> <span class="token operator">=</span> t
            <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">&amp;&amp;</span> k <span class="token keyword">in</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> state<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> props<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>setupState <span class="token operator">&amp;&amp;</span> k <span class="token keyword">in</span> setupState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 渲染上下文需要增加对 setupState 的支持</span>
                <span class="token keyword">return</span> setupState<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'不存在'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span> <span class="token punctuation">(</span>t<span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> props <span class="token punctuation">}</span> <span class="token operator">=</span> t
            <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">&amp;&amp;</span> k <span class="token keyword">in</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                state<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                props<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>setupState <span class="token operator">&amp;&amp;</span> k <span class="token keyword">in</span> setupState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                setupState<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'不存在'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// ... created</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件事件与-emit-实现" tabindex="-1"><a class="header-anchor" href="#组件事件与-emit-实现" aria-hidden="true">#</a> 组件事件与 emit 实现</h2>
<ul>
<li>组件内通过 emit 方法发射事件，组件可以监听由 emit 函数发射的自定义事件；</li>
<li>emit 实际上就是根据名称 去 props 对象中寻找对应的事件处理函数并执行；</li>
<li>只需要实现 emit 函数并添加到 setupContext 对象中；</li>
<li>我们约定 on 开头的 props 属性要作为事件处理，所以这些属性要都放到 props 当中。</li>
</ul>
<CodeGroup>
<CodeGroupItem title="emit">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyComponen <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'MyComponent'</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 发射 change 事件，并传递必要参数</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token comment">// ...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="onchange">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponen</span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handler<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="虚拟 DOM">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> CompVNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">onChange</span><span class="token operator">:</span> handler
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="实现 emit">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> <span class="token operator">...</span>payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> eventName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">on</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> event<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token keyword">const</span> handler <span class="token operator">=</span> instance<span class="token punctuation">.</span>props<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handler</span><span class="token punctuation">(</span><span class="token operator">...</span>payload<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'事件不存在'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="resolveProps 调整">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">resolveProps</span><span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> propsData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> propsData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 以字符串 on 开头的 props, 无论是否显示地声明使用，都添加到 props 而不是 attrs</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> key <span class="token keyword">in</span> options<span class="token punctuation">)</span> <span class="token operator">||</span> key<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'on'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            props<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> propsData<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            attrs<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> propsData<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span> props<span class="token punctuation">,</span> attrs <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<blockquote>
<p>Vue.js 3 需要在 emits 属性中声明组件会 emit 的事件，那么 <code v-pre>resolveProps</code> 可以通过这个 emits 来判断属性是不是需要放到 props 里</p>
</blockquote>
<h2 id="插槽的工作原理及实现" tabindex="-1"><a class="header-anchor" href="#插槽的工作原理及实现" aria-hidden="true">#</a> 插槽的工作原理及实现</h2>
<blockquote>
<ul>
<li>组件的插槽借鉴了 Web Component 中 <code v-pre>&lt;slot&gt;</code> 标签的概念。插槽内容会被编译成插槽函数，插槽函数的返回值就是向插槽中填充的内容。</li>
<li><code v-pre>&lt;slot&gt;</code>  标签则会被编译为插槽函数的调用，通过执行对应的插槽函数，得到外部向槽位填充的内容（即虚拟 DOM），最后将该内容渲染到槽位中。</li>
</ul>
</blockquote>
<CodeGroup>
<CodeGroupItem title="组件模板">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>顾名思义，组件的插槽指组件会预留一个槽位，该槽位具体要渲染的内容由用户插入</p>
</CodeGroupItem>
<CodeGroupItem title="父组件">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>我是标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#body</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>我是内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我是脚注<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MyComponent</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当父组件使用<code v-pre>&lt;MyComponen&gt;</code> 组件时，可以根据插槽的名字来插入自定义的内容</p>
</CodeGroupItem>
<CodeGroupItem title="父组件 render 函数">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父组件的渲染函数</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
        <span class="token comment">// 组件的 children 会被编译成一个对象</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'我是标题'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'section'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'我是内容'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'我是猪脚'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✅ 组件模板中的插槽内容会被编译为<strong>插槽函数</strong>，而插槽函数的返回值就是具体的插槽内容。</p>
</CodeGroupItem>
<CodeGroupItem title="MyComponent render 函数">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//  MyComponent 组件的渲染函数</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'header'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'body'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'footer'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span><span class="token function">footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✅ 渲染插槽的过程，就是调用插槽函数并渲染有其返回的内容的过程</p>
</CodeGroupItem>
<CodeGroupItem title="slots 处理">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>

    <span class="token comment">// 直接使用编译好的 vnode.children 对象作为 slots 对象即可</span>
    <span class="token keyword">const</span> slots <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    
    <span class="token comment">// 将 slots 对象添加到 setupContext 对象中</span>
    <span class="token keyword">const</span> setupContext <span class="token operator">=</span>  <span class="token punctuation">{</span> attrs<span class="token punctuation">,</span> emit<span class="token punctuation">.</span> slots <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在运行时的实现上，插槽则依赖于 setupContext 中的 slots 对象</p>
</CodeGroupItem>
<CodeGroupItem title="最小实现">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">const</span> slots <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isMounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subTree</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        slots<span class="token punctuation">,</span>  <span class="token comment">// 将插槽添加到组件实例上</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>

    <span class="token keyword">const</span> renderContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> k<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> props<span class="token punctuation">,</span> slots <span class="token punctuation">}</span> <span class="token operator">=</span> t
            <span class="token comment">// 当 k 的值为 $slots 时，直接返回组件实例上的 slots</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> <span class="token string">'$slots'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> slots
            
            <span class="token comment">// ...</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span> <span class="token punctuation">(</span>t<span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// ...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们对 渲染上下文 <code v-pre>renderContext</code> 代理对象的 get 拦截函数做了特殊处理，当读取的键是 $slots 时，直接返回组件实例上的 slots 对象，这样用户就可以通过 this.$slots 来访问插槽内容了。</p>
</CodeGroupItem>
</CodeGroup>
<blockquote>
<p>组件插槽函数的调用是一定的，外部是否传入插槽函数是不确定的。</p>
</blockquote>
<h2 id="注册生命周期" tabindex="-1"><a class="header-anchor" href="#注册生命周期" aria-hidden="true">#</a> 注册生命周期</h2>
<p>在 Vue.js 3中，一部分组合式 API 是用来注册生命周期钩子函数（onMounted、onUpdated等等）。它们可以被<strong>多次</strong>调用注册。</p>
<p>✅  在不同的组件中调用生命周期钩子注册函数会将其注册到当前组件上，这个可以由一个变量<code v-pre>currentInstance</code> 存储当前组件实例实现。这个思路和<code v-pre>activeEffect</code>一致。通过它获取当前正在被初始化的组件实例，从而将那些通过 <code v-pre>onMounted</code> 函数注册的钩子函数与组件实例进行关联。</p>
<CodeGroup>
<CodeGroupItem title="currentInstance">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 全局变量，存储当前正在被初始化的组件实例</span>
<span class="token keyword">let</span> currentInstance <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">function</span> <span class="token function">setCurrentInstance</span><span class="token punctuation">(</span><span class="token parameter">instance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentInstance <span class="token operator">=</span> instance
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="mountComponent">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isMounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subTree</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        slots<span class="token punctuation">,</span>
        <span class="token comment">// 存储 onMounted 注册的生命周期钩子函数</span>
        <span class="token literal-property property">mounted</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> setupContext <span class="token operator">=</span> <span class="token punctuation">{</span> attrs<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> slots <span class="token punctuation">}</span>

    <span class="token comment">// 在调用 setup 之前，设置当前组件实例</span>
    <span class="token function">setCurrentInstance</span><span class="token punctuation">(</span>prevInstance<span class="token punctuation">)</span>
    <span class="token comment">// 执行 setup 函数</span>
    <span class="token keyword">const</span> setupResult <span class="token operator">=</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token function">shallowReadonly</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span> setupContext<span class="token punctuation">)</span>
    <span class="token comment">// 在 setup 函数执行完毕之后，重置当前组件实例</span>
    <span class="token function">setCurrentInstance</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码以 onMounted 函数为例。在 instance.mounted 数组存储注册的生命周期钩子。</p>
</CodeGroupItem>
<CodeGroupItem title="onMounted">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentInstance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentInstance<span class="token punctuation">.</span>mounted<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'onMounted 函数只能在 setup中调用'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见整体的实现非常直观。只需要通过 currentInstance 获取当前组件实例的生命周期钩子数组，然后添加即可。</p>
</CodeGroupItem>
<CodeGroupItem title="执行生命周期钩子">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    
    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> subTree <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">,</span> renderContext<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">.</span>isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            beforeMount <span class="token operator">&amp;&amp;</span> <span class="token function">beforeMount</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span>
            <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
            instance<span class="token punctuation">.</span>isMounted <span class="token operator">=</span> <span class="token boolean">true</span>
            mounted <span class="token operator">&amp;&amp;</span> <span class="token function">mounted</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span>
            <span class="token comment">// 遍历 instance.mounted 数组并逐个执行即可</span>
            instance<span class="token punctuation">.</span>mounted <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span>mounted<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">hook</span> <span class="token operator">=></span> <span class="token function">hook</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            beforeUpdate <span class="token operator">&amp;&amp;</span> <span class="token function">beforeUpdate</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span>
            <span class="token function">patch</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>subTree<span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
            updated <span class="token operator">&amp;&amp;</span> <span class="token function">updated</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        instance<span class="token punctuation">.</span>subTree <span class="token operator">=</span> subTree
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scheduler</span><span class="token operator">:</span> queueJob
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<blockquote>
<p>对于除 mounted 以外的生命周期钩子函数，其原理同上。</p>
</blockquote>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<CodeGroup>
<CodeGroupItem title="mountComponent">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isFunctional <span class="token operator">=</span> <span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'function'</span>
  <span class="token keyword">let</span> componentOptions <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isFunctional<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    componentOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">render</span><span class="token operator">:</span> vnode<span class="token punctuation">.</span>type<span class="token punctuation">,</span>
      <span class="token literal-property property">props</span><span class="token operator">:</span> vnode<span class="token punctuation">.</span>type<span class="token punctuation">.</span>props
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> data<span class="token punctuation">,</span> setup<span class="token punctuation">,</span> beforeCreate<span class="token punctuation">,</span> created<span class="token punctuation">,</span> beforeMount<span class="token punctuation">,</span> mounted<span class="token punctuation">,</span> beforeUpdate<span class="token punctuation">,</span> updated<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span> propsOption <span class="token punctuation">}</span> <span class="token operator">=</span> componentOptions

  beforeCreate <span class="token operator">&amp;&amp;</span> <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> state <span class="token operator">=</span> data <span class="token operator">?</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>props<span class="token punctuation">,</span> attrs<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">resolveProps</span><span class="token punctuation">(</span>propsOption<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span>

  <span class="token keyword">const</span> slots <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isMounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">subTree</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    slots<span class="token punctuation">,</span>
    <span class="token literal-property property">mounted</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> <span class="token operator">...</span>payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> eventName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">on</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> event<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token keyword">const</span> handler <span class="token operator">=</span> instance<span class="token punctuation">.</span>props<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">handler</span><span class="token punctuation">(</span><span class="token operator">...</span>payload<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'事件不存在'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// setup</span>
  <span class="token keyword">let</span> setupState <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>setup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> setupContext <span class="token operator">=</span> <span class="token punctuation">{</span> attrs<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> slots <span class="token punctuation">}</span>
    <span class="token keyword">const</span> prevInstance <span class="token operator">=</span> <span class="token function">setCurrentInstance</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
    <span class="token keyword">const</span> setupResult <span class="token operator">=</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token function">shallowReadonly</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span> setupContext<span class="token punctuation">)</span>
    <span class="token function">setCurrentInstance</span><span class="token punctuation">(</span>prevInstance<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> setupResult <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>render<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'setup 函数返回渲染函数，render 选项将被忽略'</span><span class="token punctuation">)</span>
      render <span class="token operator">=</span> setupResult
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      setupState <span class="token operator">=</span> setupContext
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  vnode<span class="token punctuation">.</span>component <span class="token operator">=</span> instance

  <span class="token keyword">const</span> renderContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> k<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> props<span class="token punctuation">,</span> slots <span class="token punctuation">}</span> <span class="token operator">=</span> t

      <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> <span class="token string">'$slots'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> slots

      <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">&amp;&amp;</span> k <span class="token keyword">in</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> props<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>setupState <span class="token operator">&amp;&amp;</span> k <span class="token keyword">in</span> setupState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> setupState<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'不存在'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span> <span class="token punctuation">(</span>t<span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> props <span class="token punctuation">}</span> <span class="token operator">=</span> t
      <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">&amp;&amp;</span> k <span class="token keyword">in</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        props<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>setupState <span class="token operator">&amp;&amp;</span> k <span class="token keyword">in</span> setupState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        setupState<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'不存在'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// created</span>
  created <span class="token operator">&amp;&amp;</span> <span class="token function">created</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span>


  <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> subTree <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">,</span> renderContext<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">.</span>isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      beforeMount <span class="token operator">&amp;&amp;</span> <span class="token function">beforeMount</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span>
      <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
      instance<span class="token punctuation">.</span>isMounted <span class="token operator">=</span> <span class="token boolean">true</span>
      mounted <span class="token operator">&amp;&amp;</span> <span class="token function">mounted</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span>
      instance<span class="token punctuation">.</span>mounted <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span>mounted<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">hook</span> <span class="token operator">=></span> <span class="token function">hook</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      beforeUpdate <span class="token operator">&amp;&amp;</span> <span class="token function">beforeUpdate</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span>
      <span class="token function">patch</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>subTree<span class="token punctuation">,</span> subTree<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
      updated <span class="token operator">&amp;&amp;</span> <span class="token function">updated</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    instance<span class="token punctuation">.</span>subTree <span class="token operator">=</span> subTree
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">scheduler</span><span class="token operator">:</span> queueJob
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="resolveProps">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">resolveProps</span><span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> propsData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> propsData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> key <span class="token keyword">in</span> options<span class="token punctuation">)</span> <span class="token operator">||</span> key<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'on'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      props<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> propsData<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      attrs<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> propsData<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span> props<span class="token punctuation">,</span> attrs <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="setCurrentInstance">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> currentInstance <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">function</span> <span class="token function">setCurrentInstance</span><span class="token punctuation">(</span><span class="token parameter">instance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> prev <span class="token operator">=</span> currentInstance
  currentInstance <span class="token operator">=</span> instance
  <span class="token keyword">return</span> prev
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="onMounted">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentInstance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentInstance<span class="token punctuation">.</span>mounted<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
</div></template>
