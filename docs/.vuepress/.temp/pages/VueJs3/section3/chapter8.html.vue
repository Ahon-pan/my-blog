<template><div><h1 id="挂载与更新" tabindex="-1"><a class="header-anchor" href="#挂载与更新" aria-hidden="true">#</a> 挂载与更新</h1>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/Vuejs3/patch.png" alt=""></p>
<h2 id="挂载子节点和元素的属性" tabindex="-1"><a class="header-anchor" href="#挂载子节点和元素的属性" aria-hidden="true">#</a> 挂载子节点和元素的属性</h2>
<ul>
<li>
<p>子节点：vnode 的子节点有可能是文本字符串，当然也会是标签，并且子节点可以是很多个。为了描述元素的子节点，可以使用<strong>数组</strong>来表示</p>
</li>
<li>
<p>属性：为了描述一个元素的属性，我们可以为虚拟 DOM 添加一个 vnode.props 字段</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'foo'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'hello'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了渲染子节点和属性，同时也需要修改对应的 mountElement 函数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountElement</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">createElement</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setElementText</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果 children 是一个数组，则遍历每个子节点，并调用 patch 函数挂载它们</span>
        vnode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> child<span class="token punctuation">,</span> el<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果 vnode.props 存在才处理它</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 遍历 vnode.props</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 或 el[key] = vnode.props[key]</span>
            el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">insert</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在处理属性时，为元素设置属性无论是使用 setAttribute 函数，还是直接操作 DOM 对象，都存在缺陷。</p>
<h2 id="html-attributes-与-dom-properties" tabindex="-1"><a class="header-anchor" href="#html-attributes-与-dom-properties" aria-hidden="true">#</a> HTML Attributes 与 DOM Properties</h2>
<p>从最基本的 HTML 为例：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-input<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>HTML Attributes 指的就是定义在 HTML 标签上的属性，这里指的就是 id=“my-input”、type=“text” 和 value=“foo”。当浏览器解析这段 HTML 代码之后，可以得到该 DOM 对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#my-input"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个 DOM 对象会包含很多<strong>属性</strong>（properties），这些属性就是所谓的 DOM Properties。</p>
<details class="custom-container details"><summary>HTML Attributes 与 DOM Properties 的关联</summary>
<ul>
<li>
<p>很多 HTML Attributes 在 DOM 对象上有与之同名的 DOM Properties，如 id=“my-input” 与 el.id，type=&quot;text&quot; 与 el.type...</p>
</li>
<li>
<p>但两者名字并不总是一模一样：class=&quot;foo&quot; 与 el.className</p>
</li>
<li>
<p>并不是所有的 HTML Attributes 都有与之对应的 DOM Properties：aria-* 类的 HTML Attributes</p>
</li>
<li>
<p>也并不是所有的 DOM Properties 都有与之对应的 HTML Attributes：el.textContent 可以设置文本内容，但没有对应的 HTML Attributes</p>
</li>
<li>
<p>直接映射：HTML Attributes 与 DOM Properties 具有相同名称的属性，例如 id=&quot;foo&quot; 与 el.id</p>
</li>
</ul>
</details>
<h3 id="两者关系" tabindex="-1"><a class="header-anchor" href="#两者关系" aria-hidden="true">#</a> 两者关系</h3>
<p>🚀  <strong>HTML Attributes 的作用是设置与之对应的 DOM Properties 的初始值</strong>。</p>
<p>一旦值改变，那么 DOM Properties 始终存储着当前值，而通过 getAttribute 函数得到的仍然是初始值。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#foo"</span><span class="token punctuation">)</span>
  <span class="token comment">// 用户在输入框修改内容为 bar 后</span>
  <span class="token comment">// 文本框内容的修改并不会影响 el.getAttribute('value') 的返回值。</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>value<span class="token punctuation">)</span>  <span class="token comment">// 'bar'</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'value'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 'foo'</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>defaultValue<span class="token punctuation">)</span>  <span class="token comment">// 'foo'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里也说明，一个  HTML Attributes 可能关联多个 DOM Properties。</p>
<h3 id="默认值校验" tabindex="-1"><a class="header-anchor" href="#默认值校验" aria-hidden="true">#</a> 默认值校验</h3>
<p>虽然我们可以认为 HTML Attributes 是用来设置与之对应的 DOM Properties 的初始值的，但有些值是受限制的，就好像浏览器内部做了默认值校验。如果你通过 HTML Attributes 提供的默认值不合法，那么浏览器会使用内建的合法值作为对应 DOM Properties 的默认值：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-input<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#my-input"</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>type<span class="token punctuation">)</span>  <span class="token comment">// 'text'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正确地设置元素属性" tabindex="-1"><a class="header-anchor" href="#正确地设置元素属性" aria-hidden="true">#</a> 正确地设置元素属性</h2>
<h3 id="浏览器解析" tabindex="-1"><a class="header-anchor" href="#浏览器解析" aria-hidden="true">#</a> 浏览器解析</h3>
<p>浏览器本身会解析 HTML 代码，自动分析 HTML Attributes 并设置合适的 DOM Properties。但是 Vue.js 的单文件组件中的模板就需要自行编译。</p>
<p>以禁用的按钮为例：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于浏览器来说，当解析到这样一段 HTML，它会发现这个按钮存在 disabled 的 HTML Attributes，于是浏览器会把这个按钮设置为禁用状态，并把它的 el.disabled 这个 DOM Properties 的值设置为 true。</p>
<h3 id="vue-js-的解析" tabindex="-1"><a class="header-anchor" href="#vue-js-的解析" aria-hidden="true">#</a> Vue.js 的解析</h3>
<p>相同的模板，它会先被编译成 vnode，它等价于：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>
	<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token string">''</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里 disabled 的值为空字符串，如果在渲染器中调用 setAttribute 函数设置属性，相当于：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'disabled'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这么做是没有问题的，浏览器将会将按钮禁用。但是对于 Vue.js 来说，要考虑如下模板：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它对应的 vnode 为：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>
	<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的本意是“不禁用”按钮，但是由于 setAttribute 函数设置的值总是会被字符串化，等价于</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// el.setAttribute('disabled', false)</span>
el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'disabled'</span><span class="token punctuation">,</span> <span class="token string">'false'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>🔥 对于按钮来说，它的 el.disabled 属性值是布尔类型的，并且它不关心具体的 HTML Attributes 的值是什么，只要 disabled 属性存在，按钮就会被禁用。所以渲染器不能用 setAttribute 函数将 vnode.props 对象中的属性设置到元素上。</p>
<h3 id="通用的属性设置" tabindex="-1"><a class="header-anchor" href="#通用的属性设置" aria-hidden="true">#</a> 通用的属性设置</h3>
<p>🚀 我们可以优先设置 DOM Properties</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ✅ &lt;button :disabled="true">Button&lt;/button></span>
el<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// ✅ &lt;button :disabled="false">Button&lt;/button></span>
el<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">// 🙈 &lt;button disabled>Button&lt;/button></span>
el<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token string">''</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 但是对于 HTML Properties 是布尔值，prop 是空字符串需要特殊处理，要手动将值矫正为true。</p>
<hr>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">form</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，我们为 input 标签设置了 form 属性（HTML Properties），但是这个属性 el.form 是只读的，只能使用 setAttribute 函数设置，因此对于这些情况我们也需要特殊处理，类似的表单元素都是如此。</p>
<p>🚀 处理思路：可以提取一个 shouldSetAsProps 函数判断属性是否应该作为 DOM Properties 处理。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">shouldSetAsProps</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 特殊处理</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">'form'</span> <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">'INPUT'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token comment">// 兜底</span>
  <span class="token keyword">return</span> key <span class="token keyword">in</span> el
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">mountElement</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">createElement</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
  <span class="token comment">// 省略 children 的处理</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldSetAsProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> el<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'boolean'</span> <span class="token operator">&amp;&amp;</span> nextValue <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> nextValue
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">insert</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>最后，我们需要把属性设置的也变成与平台无关，因此需要把属性设置的相关操作也提取到渲染选项中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setElementText</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> anchor <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    parent<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 将属性设置相关操作封装到 pathProps 函数中，并作为渲染器选项传递</span>
  <span class="token function">patchProps</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> preValue<span class="token punctuation">,</span> nextValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldSetAsProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> el<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'boolean'</span> <span class="token operator">&amp;&amp;</span> nextValue <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> nextValue
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而在 mountElement 函数中，只需要调用 patchProps 函数，并传递相关参数即可：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountElement</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">createElement</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
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

  <span class="token function">insert</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class-的处理" tabindex="-1"><a class="header-anchor" href="#class-的处理" aria-hidden="true">#</a> class 的处理</h2>
<h3 id="class-值处理" tabindex="-1"><a class="header-anchor" href="#class-值处理" aria-hidden="true">#</a> class 值处理</h3>
<p>Vue.js 允许通过多种方式设置元素类名：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo bar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ foo: true, bar:false}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">'foo bar'</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三个 p 标签对应的 vnode 如下，我们可以封装一个 normalizeClass 函数将其处理为正常的字符串：</p>
<CodeGroup>
<CodeGroupItem title="原始 vnode">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'bar foo'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="normalizeClass">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token function">normalizeClass</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">'bar foo'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="结果">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 序列化后的结果</span>
    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">'foo bar baz'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="元素设置-class" tabindex="-1"><a class="header-anchor" href="#元素设置-class" aria-hidden="true">#</a> 元素设置 class</h3>
<p>在将 vnode 的 class 值正常化之后，还要通过高效的方式把 class 设置到元素上：</p>
<table>
<thead>
<tr>
<th>Text name</th>
<th>Execution per second</th>
</tr>
</thead>
<tbody>
<tr>
<td>el.className</td>
<td>9637.7 Ops/sec</td>
</tr>
<tr>
<td>el.classList</td>
<td>5969.5 Ops/sec</td>
</tr>
<tr>
<td>setAttribute</td>
<td>4761.1 Ops/sec</td>
</tr>
</tbody>
</table>
<p>🔥 可以发现，className 每秒设置的做多次，性能最优。因此我们需要调整 patchProps 函数的实现：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 省略其他平台操作 API</span>
  
  <span class="token function">patchProps</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> preValue<span class="token punctuation">,</span> nextValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">'class'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">.</span>className <span class="token operator">=</span> nextValue <span class="token operator">||</span> <span class="token string">''</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldSetAsProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> el<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'boolean'</span> <span class="token operator">&amp;&amp;</span> nextValue <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> nextValue
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📝 可见， vnode.props 对象中定义的属性值类型并不总是与 DOM 元素属性的数据结构保持一致，这取决于上层设计。Vue.js 允许对象类型的值作为 class 是为了方便开发者，在底层实现上，必然需要对值进行正常化后再使用。另外，正常化值的过程是有代价的，如果需要大量的正常化操作，则会消耗更多的性能。</p>
<h2 id="卸载操作" tabindex="-1"><a class="header-anchor" href="#卸载操作" aria-hidden="true">#</a> 卸载操作</h2>
<div class="custom-container warning"><p class="custom-container-title">操作表示判断 newVNode 为空，需要把之前渲染的内容卸载，目前 render 函数直接把 innerHTML 清空。这么做是不严谨的：</p>
<ul>
<li>容器的内容可能是由某个或多个组件渲染的，当卸载操作发生时，应该正确地调用这些组件的 beforeUnmount、unmounted 等声明周期函数</li>
<li>即使内容不是由组件渲染的，有的元素存在自定义指令，我们应该在卸载操作发生时正确执行对应的值令钩子函数</li>
<li>使用 innerHTML 清空容器元素内容的另外一个缺陷是，它不会移除绑定在 DOM 元素上的事件处理函数</li>
</ul>
</div>
<p>正确的卸载方式是，根据 vnode 对象获取与其相关的真实 DOM 元素，然后使用原生 DOM 操作方法将该 DOM 元素移除。为此，我们需要在 vnode 与真实 DOM 元素之间建立联系，修改 mountElement 函数：</p>
<CodeGroup>
<CodeGroupItem title="mountElement 处理">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountElement</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 让 vnode.el 引用真实 DOM 元素</span>
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

  <span class="token function">insert</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="unmount 封装">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> parent <span class="token operator">=</span> vnode<span class="token punctuation">.</span>el<span class="token punctuation">.</span>parentNode
  <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="render 调用">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 新 vnode 存在，将其与旧 vnode 一起传递给 patch 函数进行打补丁</span>
    <span class="token function">patch</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 调用 unmount 函数卸载 </span>
      <span class="token function">unmount</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 把 vnode 存储到 container._vnode</span>
  container<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> vnode
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">将卸载操作封装到 unmount 中，还能够带来两点额外的好处：</p>
<ul>
<li>在 unmount 函数内，我们有机会调用绑定在 DOM 元素上的指令钩子函数，例如 beforeUnmount、unmounted 等</li>
<li>当 unmount 函数执行时，我们有机会检测虚拟节点 vnode 的类型。如果该虚拟节点描述的是组件，则我们有机会调用组件相关的生命周期函数</li>
</ul>
</div>
<h2 id="区分-vode-的类型" tabindex="-1"><a class="header-anchor" href="#区分-vode-的类型" aria-hidden="true">#</a> 区分 vode 的类型</h2>
<p>目前，patch 函数在判断到旧 vnode 不存在时，会走 mountElement 进行挂载，否则就执行 DOM 更新逻辑。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">mountElement</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 更新</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">vnode 的区分处理</p>
<ol>
<li>
<p>首先要判断新旧 vnode 所描述的内容相同，因为就不同元素来说，每个元素都有特有的属性，</p>
<p>否则这就是一个单纯的卸载再挂载的操作，是不需要走 patch的。</p>
</li>
<li>
<p>另外，vnode 可以描述普通标签、组件、Fragment等等，</p>
<p>所以不同类型的 vnode 我们要使用不同的挂载或者打补丁的处理方式；</p>
</li>
</ol>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在真正执行更新操作之前，我们优先检查新旧 vnode 所描述的内容是否相同</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&amp;&amp;</span> n1<span class="token punctuation">.</span>type <span class="token operator">!==</span> n2<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// p\input\div...</span>
    <span class="token function">unmount</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
    n1 <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> n2

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">mountElement</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">patchElement</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件的处理" tabindex="-1"><a class="header-anchor" href="#事件的处理" aria-hidden="true">#</a> 事件的处理</h2>
<div class="custom-container tip"><p class="custom-container-title">事件的处理与优化</p>
<ul>
<li>
<p>事件可以视作一种特殊的属性，我们可以约定，在 vnode.props 对象中，凡是以字符 on 开头的属性都视作事件。</p>
</li>
<li>
<p>事件的添加可以调用 addEventListener 函数来绑定。</p>
<p>一个元素可以绑定多种类型的事件，对于同一类型事件而言，还可以绑定多个事件处理函数。</p>
</li>
<li>
<p>事件的更新按一般的思路就是先移除之前添加的事件处理函数，再绑定新的到 DOM 元素上。</p>
<p>这么做代码能够按照预期工作，但是有<strong>性能更优的处理</strong>办法。我们可以伪装一个事件处理函数 invoker，把真正的事件处理函数设置为 invoker.value 的值。这样在更新事件的时候，我们将不再需要调用 removeEventListener 函数来移除上一次绑定的事件，只需要更新 invoker.value 的值即可。</p>
</li>
</ul>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">patchProps</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> prevValue<span class="token punctuation">,</span> nextValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^on</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// invokers 对象保存着各种事件的处理函数</span>
    <span class="token comment">// invoker 的属性 value 属性，保存着一个或多个事件处理函数</span>
    <span class="token keyword">const</span> invokers <span class="token operator">=</span> el<span class="token punctuation">.</span>_vei <span class="token operator">||</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>_vei <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> invoker <span class="token operator">=</span> invokers<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 事件函数初始声明与绑定</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>invoker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// invoker 声明为一个函数，触发其 value 属性保存的事件</span>
        invoker <span class="token operator">=</span> el<span class="token punctuation">.</span>_vei<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>invoker<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            invoker<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=></span> <span class="token function">fn</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            invoker<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        invoker<span class="token punctuation">.</span>value <span class="token operator">=</span> nextValue
        el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> invoker<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      	<span class="token comment">// 绑定事件后续的更新，避免了一次 removeEventListener 的调用</span>
        invoker<span class="token punctuation">.</span>value <span class="token operator">=</span> nextValue
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>invoker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> invoker<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">'class'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>className <span class="token operator">=</span> nextValue <span class="token operator">||</span> <span class="token string">''</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldSetAsProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> el<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'boolean'</span> <span class="token operator">&amp;&amp;</span> nextValue <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> nextValue
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时间冒泡与更新时机" tabindex="-1"><a class="header-anchor" href="#时间冒泡与更新时机" aria-hidden="true">#</a> 时间冒泡与更新时机</h2>
<p>目前的基本事件处理代码，在事件冒泡与更新时机相结合会导致的问题。</p>
<h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> effect<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token operator">=</span> VueReactivity

<span class="token keyword">const</span> bol <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建 vnode</span>
    <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> bol<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'父元素 clicked'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        bol<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'text'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 渲染 vnode</span>
    renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>div 元素：它的 props 对象的值是由一个三元表达式决定的。在首次渲染时，由于 bol.value 的值为 false，所以它的 props 值是一个空对象</li>
<li>p 元素：它具有 click 点击事件，并且点击它时，事件处理函数会将 bol.value 的值设置为 true</li>
</ul>
<p>🧐 那么，当首此渲染之后，鼠标点击 p 标签， 会触发父元素div 标签的 click 事件处理函数执行吗？</p>
<p>⬆️ 预期是，当 p 点击时，此时的 div 标签没有绑定事件处理函数，应该什么都不会发生；但是，它竟然执行了！</p>
<p>⬇️ 实际上：当 p 点击时，更改了响应式数据 bol 的值，然后当前<strong>副作用函数立即重新执行</strong>，也就是更新渲染会执行，这时候由于 bol.value 的值已经是 true，会给 div 元素绑定对应的事件处理函数。当更新动作完成之后，点击事件才从 p 元素冒泡到父级 div 元素，此时的 div 在更新后已经绑定了事件处理函数，触发执行。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/Vuejs3/eventBinding.png" alt=""></p>
<p>所以：<strong>div 元素绑定事件处理函数发生在事件冒泡之前</strong>。</p>
<h3 id="处理" tabindex="-1"><a class="header-anchor" href="#处理" aria-hidden="true">#</a> 处理</h3>
<p>🐛 我们可以考虑把事件的绑定动作挪到事件冒泡之后，但是这个想法是不可靠的，因为我们无法判断事件冒泡是否完成，已经完成到什么程度。</p>
<p>🐛 另外，虽然 Vue.js 的更新是在一个异步任务队列当中进行的，但是微任务会<strong>穿插</strong>在由事件冒泡触发的多个事件处理函数之间被执行。因此，即使把绑定事件的动作放到微任务中，也无法避免这个问题。</p>
<p>📝 事件触发的时间是早于事件处理函数被绑定的时间的。也就是说，这个事件触发的时候，目标元素（div）上还没有绑定相关的事件处理函数。</p>
<p>🚀 因此，我们可以：<strong>屏蔽所以绑定时间晚于事件触发时间的事件处理函数的执行</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">patchProps</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> prevValue<span class="token punctuation">,</span> nextValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^on</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> invokers <span class="token operator">=</span> el<span class="token punctuation">.</span>_vei <span class="token operator">||</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>_vei <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> invoker <span class="token operator">=</span> invokers<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>invoker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        invoker <span class="token operator">=</span> el<span class="token punctuation">.</span>_vei<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token comment">// 如果事件触发的时间早于事件绑定的时间，return</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>timeStamp <span class="token operator">&lt;</span> invoker<span class="token punctuation">.</span>attached<span class="token punctuation">)</span> <span class="token keyword">return</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>invoker<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            invoker<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=></span> <span class="token function">fn</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            invoker<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        invoker<span class="token punctuation">.</span>value <span class="token operator">=</span> nextValue
        <span class="token comment">// 添加 invoker.attached 属性，存储事件处理函数被绑定的时间</span>
        invoker<span class="token punctuation">.</span>attached <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> invoker<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        invoker<span class="token punctuation">.</span>value <span class="token operator">=</span> nextValue
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>invoker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> invoker<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">'class'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>className <span class="token operator">=</span> nextValue <span class="token operator">||</span> <span class="token string">''</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldSetAsProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> el<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'boolean'</span> <span class="token operator">&amp;&amp;</span> nextValue <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> nextValue
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们只需要为伪造的事件处理函数添加一个 attached 属性，用来存储当前事件处理函数被绑定的时间。因为 event 对象的 timestamp 可以获取到事件发生的时间，那么就可以拦截到早于事件绑定时间触发的事件。</p>
<p><em>根据浏览器的不同，e.timestamp 可能是 performance.now（高精时间），也可能不是。这里应该要做兼容处理。在 Chrome 49、Firefox 54、Opera 36 之后的版本中，e.timestamp 都是高精时间。</em></p>
<h2 id="更新子节点" tabindex="-1"><a class="header-anchor" href="#更新子节点" aria-hidden="true">#</a> 更新子节点</h2>
<div class="custom-container tip"><p class="custom-container-title">子节点类型</p>
<ol>
<li>没有子节点，此时 vnode.children 的值为 null</li>
<li>具有文本子节点，此时 vnode.children 的值为字符串，代表文本内容</li>
<li>其他情况，无论是单个子节点，还是多个子节点（可能是文本和元素的混合），都可以用数组表示</li>
</ol>
</div>
<CodeGroup>
<CodeGroupItem title="Null">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="String">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'William'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Array">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'p'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">'Hello World'</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>当渲染器执行更新时，就会出现九种可能：</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/Vuejs3/patchChildren.png" alt=""></p>
<CodeGroup>
<CodeGroupItem title="patchElement">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchElement</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> el <span class="token operator">=</span> n2<span class="token punctuation">.</span>el <span class="token operator">=</span> n1<span class="token punctuation">.</span>el
  <span class="token keyword">const</span> oldProps <span class="token operator">=</span> n1<span class="token punctuation">.</span>props
  <span class="token keyword">const</span> newProps <span class="token operator">=</span> n2<span class="token punctuation">.</span>props
  <span class="token comment">// 第一步：更新 props，属性打补丁+属性卸载</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> newProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> oldProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">patchProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> oldProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> newProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> oldProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> newProps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">patchProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> oldProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 第二步：更新 children</span>
  <span class="token function">patchChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> el<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="patchChildren">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      n1<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">setElementText</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      n1<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
      n2<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">setElementText</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
      n2<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      n1<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n1<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setElementText</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="文本节点和注释节点" tabindex="-1"><a class="header-anchor" href="#文本节点和注释节点" aria-hidden="true">#</a> 文本节点和注释节点</h2>
<p>虚拟 DOM 可以描述更多的真实 DOM，以下是文本节点的表示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Text <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> newVnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> Text<span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'Some Text'</span>
<span class="token punctuation">}</span>
renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>newVnode<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么在 patch 函数中，我们就可以增加一个判断分支来处理 vnode.type 为文本的情况：</p>
<CodeGroup>
<CodeGroupItem title="patch">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&amp;&amp;</span> n1<span class="token punctuation">.</span>type <span class="token operator">!==</span> n2<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">unmount</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
    n1 <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> n2

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">mountElement</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">patchElement</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> Text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果没有旧节点，则进行挂载</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 文本创建与插入</span>
      <span class="token keyword">const</span> el <span class="token operator">=</span> n2<span class="token punctuation">.</span>el <span class="token operator">=</span> <span class="token function">createText</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果旧 vnode 存在，直接更新其文本内容即可</span>
      <span class="token keyword">const</span> el <span class="token operator">=</span> n2<span class="token punctuation">.</span>el <span class="token operator">=</span> n1<span class="token punctuation">.</span>el
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children <span class="token operator">!==</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setText</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="API 抽象">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setElementText</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> anchor <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    parent<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 创建一个文本节点并返回</span>
  <span class="token function">createText</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 更新 DOM 文本内容</span>
  <span class="token function">setText</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>nodeValue <span class="token operator">=</span> text
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">patchProps</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> prevValue<span class="token punctuation">,</span> nextValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/*...*/</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h2>
<p>Fragment（片段）是Vue.js 3 中新增的一个 vnode 类型，可以通过它描述多根节点模板。对于Fragment 类型的 vnode 来说，它的 children 存储的内容就是模板中所有根节点：</p>
<CodeGroup>
<CodeGroupItem title="多根节点模板">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="vnode 表示">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Fragment <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> Fragment<span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'li'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'li'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'li'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'3'</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="patch 函数处理">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&amp;&amp;</span> n1<span class="token punctuation">.</span>type <span class="token operator">!==</span> n2<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">unmount</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
    n1 <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> n2

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">mountElement</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
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
      <span class="token comment">// 旧 vnode 不存在，将 Fragment 的 children 逐个挂载</span>
      n2<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 旧 vnode 存在，更新 Fragment 的 children</span>
      <span class="token function">patchChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="unmount 支持">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Fragment 的处理</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>type <span class="token operator">===</span> Fragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> parent <span class="token operator">=</span> vnode<span class="token punctuation">.</span>el<span class="token punctuation">.</span>parentNode
  <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当卸载 Fragment 类型的虚拟节点时，由于 Fragment 本身并不会渲染任何真实 DOM，所以只需要遍历它的 children 数组逐一卸载即可</p>
</CodeGroupItem>
</CodeGroup>
</div></template>
