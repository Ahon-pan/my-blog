<template><div><h1 id="原始值的响应式方案" tabindex="-1"><a class="header-anchor" href="#原始值的响应式方案" aria-hidden="true">#</a> 原始值的响应式方案</h1>
<p>🔖 原始值指的是 Boolean、Number、BigInt、String、Symbol、undefined 和 null 等类型的值。</p>
<ol>
<li>在 JavaScript 中，原始值是按值传递的，而非按引用传递。这意味着，如果一个函数接收原始值作为参数，那么形参与实参之间没有引用关系，它们是两个完全独立的值，对形参的修改不会影响实参。</li>
<li>另外 JavaScript 中的 Proxy 无法提供对原始值的代理，因此想要将原始值变成响应式数据，就必须对其做一层包裹。</li>
</ol>
<h2 id="引入-ref-的概念" tabindex="-1"><a class="header-anchor" href="#引入-ref-的概念" aria-hidden="true">#</a> 引入 ref 的概念</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'vue'</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">)</span>
<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>vlaue<span class="token punctuation">)</span><span class="token punctuation">)</span>
name<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'vue3'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">如果使用非原始值去“包裹”原始值，会导致一些问题：</p>
<ul>
<li>用户为了创建一个响应式的原始值，不得不顺带创建一个包裹对象；</li>
<li>包裹对象由用户自定义，而这意味着不规范。用户可以随意命名，例如 wrapper.value， wrapper.val 都是可以的。</li>
</ul>
</div>
<p>🚀  为了解决以上这两个问题，我们可以封装一个函数来处理。同时，为了区分 refVal 到底是原始值的包裹对象，还是一个非原始值的响应式数据，我们为其补充了一个属性：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 封装 ref 函数专门处理原始值的响应式处理1</span>
<span class="token keyword">function</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> val
  <span class="token punctuation">}</span>
	<span class="token comment">// 使用 Object.defineProperty 在 wrapper 对象上定义一个不可枚举的属性 __v_isRef，并且值为 true</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">,</span> <span class="token string">'__v_isRef'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 通过 value 属性访问原始值</span>
  <span class="token keyword">return</span> <span class="token function">reactive</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isRef</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> val<span class="token punctuation">.</span>__v_isRef <span class="token operator">===</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token comment">// 原始值的包裹对象</span>
<span class="token keyword">const</span> refVal1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 非原始值的响应式数据</span>
<span class="token keyword">const</span> refVal2 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>refVal1<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>refVal2<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// false</span>

<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>refVal1<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

refVal1<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应丢失问题" tabindex="-1"><a class="header-anchor" href="#响应丢失问题" aria-hidden="true">#</a> 响应丢失问题</h2>
<p>🐛 展开运算符（...）会导致数据的响应丢失，而这个操作我们在 setup 返回时是经常使用的，返回的新对象如果变成了普通对象，就失去了响应能力。</p>
<p>我们要实现：在副作用函数内，即使通过普通对象 newObj 来访问属性值，也能过建立响应式联系：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// obj 是响应式数据</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// newObj 对象下具有与 obj 对象同名的属性，并且每个属性值都是一个对象</span>
<span class="token comment">// 该对象具有一个访问器属性 value，当读取 value 的值时，其实读取的是 obj 对象相应属性的值</span>
<span class="token keyword">const</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> obj<span class="token punctuation">.</span>foo
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> obj<span class="token punctuation">.</span>bar
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 在副作用函数内使用新对象 newObj 读取 foo 属性值</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObj<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 这时能够触发响应</span>
obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在副作用函数内读取 newObj.foo 时，等价于间接读取了 obj.foo 的值，这样响应式数据自然能够与副作用函数建立响应联系。</p>
<h3 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef</h3>
<p>toRef 函数接收两个参数，第一个参数 obj 是一个响应式数据，第二个参数是 obj 对象的一个键。该函数会返回一个 wrapper 对象；</p>
<p>🚀 为了概念上的统一，我们会将通过 toRef 或 toRefs 转换后得到的结果视为真正的 ref 数据，因此我们通过为其增加了 __v_isRef 属性的定义。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">toRef</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 每个属性都是一个对象，通过属性访问器获取，从而触发代理对象的 get 拦截</span>
  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 允许设置值</span>
    <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">,</span> <span class="token string">'__v_isRef'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> wrapper
<span class="token punctuation">}</span>

<span class="token comment">// const obj = reactive({ foo: 1, bar: 2 })</span>
<span class="token comment">// const refFoo = toRef(obj, 'foo')</span>
<span class="token comment">// console.log(refFoo.value)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">toRef</p>
<ul>
<li>实现原始值的响应式方案</li>
<li>解决响应式丢失问题</li>
</ul>
</div>
<h3 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">toRefs</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ret<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// const obj = reactive({ foo: 1, bar: 2 })</span>
<span class="token comment">// const newObj = { ...toRefs(obj) }</span>
<span class="token comment">// console.log(newObj.foo.value)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动脱-ref" tabindex="-1"><a class="header-anchor" href="#自动脱-ref" aria-hidden="true">#</a> 自动脱 ref</h2>
<p>🔖 目前的 ref 数据需要通过 value 属性访问，增加了用户的心智负担。</p>
<p>所谓自动脱 ref ，指的是属性的访问行为，即如果读取的属性是一个 ref，则直接将该 ref 对应的 value 属性值返回。同样的，设置属性的值也应该有自动为 ref 设置值的能力。</p>
<p>🚀 要实现这个功能，需要使用 Proxy 为 newObj 创建一个代理对象，通过代理来实现最终目标：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">proxyRefs</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
      <span class="token comment">// 自动脱 ref 的实现：如果读取的值是 ref，则返回它的 value 属性值</span>
      <span class="token keyword">return</span> value<span class="token punctuation">.</span>__v_isRef <span class="token operator">?</span> value<span class="token punctuation">.</span>value <span class="token operator">:</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 通过 target 读取真实值</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token comment">// 如果值是 Ref，则设置对应的 value 属性值</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>__v_isRef<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value<span class="token punctuation">.</span>value <span class="token operator">=</span> newValue
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> newObj <span class="token operator">=</span> <span class="token function">proxyRefs</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Vue.js 中，reactive 也同样实现了 脱 ref 的能力：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>count <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
