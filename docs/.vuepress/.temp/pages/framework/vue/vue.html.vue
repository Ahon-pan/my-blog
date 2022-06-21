<template><div><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1>
<h2 id="数据驱动" tabindex="-1"><a class="header-anchor" href="#数据驱动" aria-hidden="true">#</a> 数据驱动</h2>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/new-vue.png" alt=""></p>
<ol>
<li>
<p>Vue构造函数，在原型和实例中添加全局API，初始化各部分功能</p>
</li>
<li>
<p>new Vue之后通过init方法处理各类数据，$options</p>
</li>
<li>
<p>实例挂载，通过 <code v-pre>$mount</code> 实例方法挂载 <code v-pre>vm</code></p>
<p><code v-pre>mountComponent</code> 核心就是先实例化一个渲染<code v-pre>Watcher</code>，在它的回调函数中会调用 <code v-pre>updateComponent</code> 方法，在此方法中调用 <code v-pre>vm._render</code> 方法先生成虚拟 Node</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>如果使用了模板template或者SFC，需要通过compiler编译成render函数</p>
</li>
<li>
<p>render函数，内部使用createElement方法返回vnode</p>
</li>
<li>
<p>更新 DOM</p>
<p><code v-pre>_update</code> 是实例的一个私有方法，它被调用的时机有 2 个，一个是首次渲染，一个是数据更新的时候。该方法内部最终调用了patch方法进行节点的更新：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>prevVnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// initial render</span>
  vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> vm<span class="token punctuation">.</span><span class="token function">__patch__</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> hydrating<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* removeOnly */</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// updates  diff...</span>
  vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> vm<span class="token punctuation">.</span><span class="token function">__patch__</span><span class="token punctuation">(</span>prevVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="组件化" tabindex="-1"><a class="header-anchor" href="#组件化" aria-hidden="true">#</a> 组件化</h2>
<h3 id="createcomponent" tabindex="-1"><a class="header-anchor" href="#createcomponent" aria-hidden="true">#</a> createComponent</h3>
<p>render函数的createElement的，碰到组件会走<code v-pre>createComponent</code>，这个函数的作用:</p>
<ol>
<li>构造子类构造函数：Ctor,通过Vue.extend(组件配置对象)，中间会做一些配置的合并，最终生成一个构造函数即Vue的子类</li>
<li>安装组件钩子函数：将钩子函数进行处理合并，放到vnodeData参数中</li>
<li>实例化：vnode = new VNode(name, vnodeData, …, { Ctro, propsData, listeners, tag, children }, …)
最终生成的组件<strong>vnode</strong>的children是空的，同时vnodeData携带着钩子函数，还有组件构造函数，组件信息等等</li>
</ol>
<h2 id="响应式数据原理" tabindex="-1"><a class="header-anchor" href="#响应式数据原理" aria-hidden="true">#</a> 响应式数据原理</h2>
<h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h3>
<p>传入的参数就是一个对象: <strong>options</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">"#app"</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>挂载init方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./init.js"</span><span class="token punctuation">;</span>

<span class="token comment">// Vue就是一个构造函数 通过new关键字进行实例化</span>
<span class="token keyword">function</span> <span class="token function">Vue</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里开始进行Vue初始化工作</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// _init方法是挂载在Vue原型的方法 通过引入文件的方式进行原型挂载需要传入Vue</span>
<span class="token comment">// 此做法有利于代码分割</span>
<span class="token function">initMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>initMixin实现：在Vue构造函数的原型对象上声明**_init**方法，供 Vue 实例调用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/init.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./state"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initMixin</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token comment">// 这里的this代表调用_init方法的对象(实例对象)</span>
    <span class="token comment">// this.$options就是用户new Vue的时候传入的属性</span>
    vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> options<span class="token punctuation">;</span>
    <span class="token comment">// 初始化状态</span>
    <span class="token function">initState</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="initstate初始化状态" tabindex="-1"><a class="header-anchor" href="#initstate初始化状态" aria-hidden="true">#</a> initState初始化状态</h3>
<p>顺序：<strong>prop &gt; methods &gt; data &gt; computed &gt; watch</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取传入的数据对象</span>
  <span class="token keyword">const</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initProps</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initMethod</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化data</span>
    <span class="token function">initData</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>computed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initComputed</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>watch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initWatch</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="observer-数据劫持" tabindex="-1"><a class="header-anchor" href="#observer-数据劫持" aria-hidden="true">#</a> Observer 数据劫持</h3>
<p>模板使用数据等同于组件使用数据，所以当数据发生变化时，会将通知发送到组件，然后组件内部再通过虚拟DOM重新渲染</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/obserber/index.js</span>
<span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token comment">// 观测值</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">walk</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对象上的所有属性依次进行观测</span>
    <span class="token keyword">let</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> key <span class="token operator">=</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> value <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token function">defineReactive</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Object.defineProperty数据劫持核心 兼容性在ie9以及以上</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">observe</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归关键</span>
  <span class="token comment">// --如果value还是一个对象会继续走一遍odefineReactive 层层遍历一直到value不是对象才停止</span>
  <span class="token comment">//   思考？如果Vue数据嵌套层级过深 >>性能会受影响</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"获取值"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">===</span> value<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"设置值"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 此处可以进行对应的视图更新通知</span>
      value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果传过来的是对象或者数组 进行属性劫持</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"[object Object]"</span> <span class="token operator">||</span>
    Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4>
<p><code v-pre>Object.defineProperty</code></p>
<ul>
<li>对象新增或者删除的属性无法被 set 监听到</li>
<li>只有对象本身存在的属性修改才会被劫持</li>
</ul>
<h4 id="数组数据劫持" tabindex="-1"><a class="header-anchor" href="#数组数据劫持" aria-hidden="true">#</a> 数组数据劫持</h4>
<ol>
<li>这样递归的方式其实无论是对象还是数组都进行了观测</li>
<li>但是我们想一下此时如果 data 包含数组比如 a:[1,2,3,4,5] 那么我们根据下标可以直接修改数据也能触发 set</li>
<li>但是如果一个数组里面有上千上万个元素 每一个元素下标都添加 get 和 set 方法 这样对于<strong>性能</strong>来说是承担不起的</li>
<li>所以此方法只用来劫持对象</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/obserber/index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> arrayMethods <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./array"</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这里对数组做了额外判断</span>
      <span class="token comment">// 通过重写数组原型方法来对数组的七种方法进行拦截   value.__proto__ === Array.prototype</span>
      value<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> arrayMethods<span class="token punctuation">;</span> 
      <span class="token comment">// 如果数组里面还包含数组 需要递归判断</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">observeArray</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">observe</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为对数组下标的拦截太<strong>浪费性能</strong> 对 Observer 构造函数传入的数据参数增加了数组的判断</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/obserber/index.js</span>
<span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token comment">// 观测值</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">"__ob__"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token comment">//  值指代的就是Observer的实例</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
      <span class="token comment">//  不可枚举</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对数组原型重写之前咱们先要理解这段代码：</p>
<ol>
<li>这段代码的意思就是给每个响应式数据增加了一个不可枚举的__ob__属性</li>
<li>并且指向了 Observer 实例 （指向自身value）</li>
<li>那么我们首先可以根据这个属性来防止已经被响应式观察的数据反复被观测 (响应式标记)</li>
<li>其次 响应式数据可以使用__ob__来获取 Observer 实例的相关方法 这对数组很关键</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/obserber/array.js</span>
<span class="token comment">// 先保留数组原型</span>
<span class="token keyword">const</span> arrayProto <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// 然后将arrayMethods继承自数组原型</span>
<span class="token comment">// 这里是面向切片编程思想（AOP）--不破坏封装的前提下，动态的扩展功能</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> arrayMethods <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>arrayProto<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> methodsToPatch <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">"push"</span><span class="token punctuation">,</span>
  <span class="token string">"pop"</span><span class="token punctuation">,</span>
  <span class="token string">"shift"</span><span class="token punctuation">,</span>
  <span class="token string">"unshift"</span><span class="token punctuation">,</span>
  <span class="token string">"splice"</span><span class="token punctuation">,</span>
  <span class="token string">"reverse"</span><span class="token punctuation">,</span>
  <span class="token string">"sort"</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
methodsToPatch<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  arrayMethods<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//   这里保留原型方法的执行结果</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> arrayProto<span class="token punctuation">[</span>method<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 这句话是关键</span>
    <span class="token comment">// this代表的就是数据本身 比如数据是{a:[1,2,3]} 那么我们使用a.push(4)  this就是a  ob就是a.__ob__ 这个属性就是上段代码增加的 代表的是该数据已经被响应式观察过了指向Observer实例</span>
    <span class="token keyword">const</span> ob <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__ob__<span class="token punctuation">;</span>

    <span class="token comment">// 这里的标志就是代表数组有新增操作</span>
    <span class="token keyword">let</span> inserted<span class="token punctuation">;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">"push"</span><span class="token operator">:</span>
      <span class="token keyword">case</span> <span class="token string">"unshift"</span><span class="token operator">:</span>
        inserted <span class="token operator">=</span> args<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">"splice"</span><span class="token operator">:</span>
        inserted <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果有新增的元素 inserted是一个数组 调用Observer实例的observeArray对数组每一项进行观测</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>inserted<span class="token punctuation">)</span> ob<span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>inserted<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 之后咱们还可以在这里检测到数组改变了之后从而触发视图更新的操作--后续源码会揭晓</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/initData.png" alt=""></p>
<h2 id="props处理" tabindex="-1"><a class="header-anchor" href="#props处理" aria-hidden="true">#</a> props处理</h2>
<h3 id="props规范化" tabindex="-1"><a class="header-anchor" href="#props规范化" aria-hidden="true">#</a> props规范化</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>props规范化：把各种不是规范格式的形式，规范化为规范格式，方便<code v-pre>Vue.js</code>在后续的过程中处理<code v-pre>props</code></li>
<li><code v-pre>props</code>规范化的过程发生在<code v-pre>this._init()</code>方法中的<code v-pre>mergeOptions</code>合并配置中，调用normalizeProps，针对数组和对象进行不同的处理</li>
</ul>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">normalizeProps</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> <span class="token operator">?</span>Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> options<span class="token punctuation">.</span>props
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">let</span> i<span class="token punctuation">,</span> val<span class="token punctuation">,</span> name
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i <span class="token operator">=</span> props<span class="token punctuation">.</span>length
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      val <span class="token operator">=</span> props<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        name <span class="token operator">=</span> <span class="token function">camelize</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        res<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果prop不是字符串表示的键名，报错</span>
        <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'props must be strings when using array syntax.'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      val <span class="token operator">=</span> props<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      name <span class="token operator">=</span> <span class="token function">camelize</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
      res<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token operator">?</span> val
        <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> val <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Invalid value for option "props": expected an Array or an Object, </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">but got </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">toRawType</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      vm
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  options<span class="token punctuation">.</span>props <span class="token operator">=</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>数组：类型检测、驼峰处理、生成固定键值对的对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 规范化前</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token string">'nick-name'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 规范化后</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>对象：遍历驼峰处理、直接使用普通对象值或者创建<code v-pre>{ type: Type }</code>格式的对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 规范化前</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> Number
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 规范化后</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="props初始化" tabindex="-1"><a class="header-anchor" href="#props初始化" aria-hidden="true">#</a> props初始化</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/initProps.png" alt=""></p>
<div class="custom-container tip"><p class="custom-container-title">props响应式</p>
<p>​		在开发环境下，props的响应式劫持了setter方法
​		这样做是为了保证props为**单项数据流：**既我们不能在子组件中直接修改父组件传递的props值</p>
</div>
<h4 id="props校验" tabindex="-1"><a class="header-anchor" href="#props校验" aria-hidden="true">#</a> props校验</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">validateProp</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">propOptions</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
  <span class="token literal-property property">propsData</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
  vm<span class="token operator">?</span><span class="token operator">:</span> Component</span>
<span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
  <span class="token keyword">const</span> prop <span class="token operator">=</span> propOptions<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token keyword">const</span> absent <span class="token operator">=</span> <span class="token operator">!</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>propsData<span class="token punctuation">,</span> key<span class="token punctuation">)</span>  <span class="token comment">// 父组件没有传入prop</span>
  <span class="token keyword">let</span> value <span class="token operator">=</span> propsData<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token comment">// boolean处理</span>
  <span class="token keyword">const</span> booleanIndex <span class="token operator">=</span> <span class="token function">getTypeIndex</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">,</span> prop<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>booleanIndex <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>absent <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>prop<span class="token punctuation">,</span> <span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Boolean没有传入并且没有默认值 => false</span>
      value <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">''</span> <span class="token operator">||</span> value <span class="token operator">===</span> <span class="token function">hyphenate</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 传入为空字符串或者为fixed="fixed"的情况</span>
      <span class="token comment">// 根据Type类型和优先级确定是否要设置为true</span>
      <span class="token keyword">const</span> stringIndex <span class="token operator">=</span> <span class="token function">getTypeIndex</span><span class="token punctuation">(</span>String<span class="token punctuation">,</span> prop<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>stringIndex <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> booleanIndex <span class="token operator">&lt;</span> stringIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 默认值赋值，响应式</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    value <span class="token operator">=</span> <span class="token function">getPropDefaultValue</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token comment">// since the default value is a fresh copy,</span>
    <span class="token comment">// make sure to observe it.</span>
    <span class="token keyword">const</span> prevShouldObserve <span class="token operator">=</span> shouldObserve
    <span class="token function">toggleObserving</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token function">observe</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token function">toggleObserving</span><span class="token punctuation">(</span>prevShouldObserve<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span> <span class="token operator">&amp;&amp;</span>
    <span class="token comment">// skip validation for weex recycle-list child component props</span>
    <span class="token operator">!</span><span class="token punctuation">(</span>__WEEX__ <span class="token operator">&amp;&amp;</span> <span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token string">'@binding'</span> <span class="token keyword">in</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 断言，校验</span>
    <span class="token function">assertProp</span><span class="token punctuation">(</span>prop<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> absent<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props更新" tabindex="-1"><a class="header-anchor" href="#props更新" aria-hidden="true">#</a> props更新</h3>
<p>当父组件值更新时，子组件的值也会发生改变，同时触发子组件的<strong>重新渲染</strong>。</p>
<p>我们先跳过父组件的具体编译逻辑，直接看父组件的值更新，改变子组件<code v-pre>props</code>值的步骤：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateChildComponent</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
  <span class="token literal-property property">propsData</span><span class="token operator">:</span> <span class="token operator">?</span>Object<span class="token punctuation">,</span>
  <span class="token literal-property property">listeners</span><span class="token operator">:</span> <span class="token operator">?</span>Object<span class="token punctuation">,</span>
  <span class="token literal-property property">parentVnode</span><span class="token operator">:</span> MountedComponentVNode<span class="token punctuation">,</span>
  <span class="token literal-property property">renderChildren</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>VNode<span class="token operator">></span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 省略代码</span>
  <span class="token comment">// update props</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>propsData <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">toggleObserving</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> vm<span class="token punctuation">.</span>_props
    <span class="token keyword">const</span> propKeys <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_propKeys <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment">// 遍历`propsKey`来重新对子组件`props`进行校验求值，最后赋值</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> propKeys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> key <span class="token operator">=</span> propKeys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">const</span> <span class="token literal-property property">propOptions</span><span class="token operator">:</span> any <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>props
      <span class="token comment">// 检验最终会返回value，该赋值操作触发setter，触发子组件的重新渲染</span>
      props<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">validateProp</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> propOptions<span class="token punctuation">,</span> propsData<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">toggleObserving</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token comment">// keep a copy of raw propsData</span>
    vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>propsData <span class="token operator">=</span> propsData
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码分析：</p>
<ol>
<li>以上<code v-pre>vm</code>实例为子组件，<code v-pre>propsData</code>为父组件中传递的<code v-pre>props</code>的值，而<code v-pre>_propKeys</code>是之前<code v-pre>props</code>初始化过程中缓存起来的所有的<code v-pre>props</code>的key。</li>
<li>在父组件值更新后，会通过遍历<code v-pre>propsKey</code>来重新对子组件<code v-pre>props</code>进行<strong>校验求值</strong>，最后赋值。</li>
</ol>
<p>以上代码就是子组件<code v-pre>props</code>更新的过程，在<code v-pre>props</code>更新后会进行子组件的重新渲染，这个重新渲染的过程分两种情况：</p>
<ul>
<li>普通<code v-pre>props</code>值被修改：当<code v-pre>props</code>值被修改后，其中有段代码<code v-pre>props[key] = validateProp(key, propOptions, propsData, vm)</code>根据响应式原理，会触发属性的<code v-pre>setter</code>，进而子组件可以重新渲染。</li>
<li>对象<code v-pre>props</code>内部属性变化：当这种情况发生时，并没有触发子组件<code v-pre>prop</code>的更新，但是在子组件渲染的时候读取到了<code v-pre>props</code>，因此会收集到这个<code v-pre>props</code>的<code v-pre>render watcher</code>，当对象<code v-pre>props</code>内部属性变化的时候，根据响应式原理依然会触发<code v-pre>setter</code>，进而子组件可以重新进行渲染</li>
</ul>
<h3 id="toggleobserving作用" tabindex="-1"><a class="header-anchor" href="#toggleobserving作用" aria-hidden="true">#</a> toggleObserving作用</h3>
<p><code v-pre>toggleObserving</code>是定义在<code v-pre>src/core/observer/index.js</code>文件中的一个函数，其代码很简单：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token literal-property property">shouldObserve</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">toggleObserving</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  shouldObserve <span class="token operator">=</span> value
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的作用就是修改当前模块的<code v-pre>shouldObserve</code>变量，用来控制在<code v-pre>observe</code>的过程中是否需要把当前值变成一个<code v-pre>observer</code>对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">observe</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">asRootData</span><span class="token operator">:</span> <span class="token operator">?</span>boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> Observer <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> value <span class="token keyword">instanceof</span> <span class="token class-name">VNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> <span class="token literal-property property">ob</span><span class="token operator">:</span> Observer <span class="token operator">|</span> <span class="token keyword">void</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">'__ob__'</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>__ob__ <span class="token keyword">instanceof</span> <span class="token class-name">Observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ob <span class="token operator">=</span> value<span class="token punctuation">.</span>__ob__
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
    shouldObserve <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token function">isServerRendering</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    Object<span class="token punctuation">.</span><span class="token function">isExtensible</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span>value<span class="token punctuation">.</span>_isVue
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>asRootData <span class="token operator">&amp;&amp;</span> ob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ob<span class="token punctuation">.</span>vmCount<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ob
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们来分析，在处理<code v-pre>props</code>的过程中，什么时候<code v-pre>toggleObserving(true)</code>，什么时候<code v-pre>toggleObserving(false)</code>以及为什么需要这样处理？</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">initProps</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component<span class="token punctuation">,</span> <span class="token literal-property property">propsOptions</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">toggleObserving</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 省略defineReactive的过程</span>
  <span class="token function">toggleObserving</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>props</code>初始化的时候：
我们可以看到在最开始判断了当为<strong>非根实例</strong>(子组件)的时候，进行了<code v-pre>toggleObserving(false)</code>的操作，这样做的目的是因为：当非根实例的时候，组件的<code v-pre>props</code>来自于父组件。当<code v-pre>props</code>为对象或者数组时，根据响应式原理，我们会递归遍历子属性然后进行<code v-pre>observe(val)</code>，而正是因为<code v-pre>props</code>来源于父组件，这个过程其实已经在父组件执行过了，如果不做任何限制，那么会在子组件中又重复一次这样的过程，因此这里需要<code v-pre>toggleObserving(false)</code>，用来避免递归<code v-pre>props</code>子属性的情况，这属于响应式优化的一种手段。在代码最后，又调用了<code v-pre>toggleObserving(true)</code>，把<code v-pre>shouldObserve</code>的值还原。</p>
<p><code v-pre>props</code>校验的时候：
我们先来看<code v-pre>props</code>提供了<code v-pre>default</code>默认值，且默认值返回了对象或者数组。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
      <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
      <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于以上<code v-pre>point</code>和<code v-pre>list</code><strong>取默认值</strong>的情况，这个时候的<code v-pre>props</code>值与父组件没有关系，那么这个时候我们<strong>需要</strong><code v-pre>toggleObserving(true)</code>，在<code v-pre>observe</code>后再把<code v-pre>shouldObserve</code>变量设置为原来的值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">validateProp</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 省略代码</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    value <span class="token operator">=</span> <span class="token function">getPropDefaultValue</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token keyword">const</span> prevShouldObserve <span class="token operator">=</span> shouldObserve 
    <span class="token function">toggleObserving</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token function">observe</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token function">toggleObserving</span><span class="token punctuation">(</span>prevShouldObserve<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>props</code>更新的时候：
当父组件更新的时候，会调用<code v-pre>updateChildComponent()</code>方法，用来更新子组件的<code v-pre>props</code>值，这个时候其实和<code v-pre>props</code>初始化的逻辑一样，我们同样不需要对指向父组件的对象或数组<code v-pre>props</code>进行递归子属性<code v-pre>observe</code>的过程，因此这里需要执行<code v-pre>toggleObserving(false)</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateChildComponent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// update props</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>propsData <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">toggleObserving</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> vm<span class="token punctuation">.</span>_props
    <span class="token keyword">const</span> propKeys <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_propKeys <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> propKeys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> key <span class="token operator">=</span> propKeys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">const</span> <span class="token literal-property property">propOptions</span><span class="token operator">:</span> any <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>props <span class="token comment">// wtf flow?</span>
      props<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">validateProp</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> propOptions<span class="token punctuation">,</span> propsData<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">toggleObserving</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>propsData <span class="token operator">=</span> propsData
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整体处理流程" tabindex="-1"><a class="header-anchor" href="#整体处理流程" aria-hidden="true">#</a> 整体处理流程</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/props.png" alt=""></p>
<h2 id="methods处理" tabindex="-1"><a class="header-anchor" href="#methods处理" aria-hidden="true">#</a> methods处理</h2>
<p>对于method的处理处在props之后</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initState</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 省略代码</span>
  <span class="token keyword">const</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>methods<span class="token punctuation">)</span> <span class="token function">initMethods</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>methods<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">initMethods</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component<span class="token punctuation">,</span> <span class="token literal-property property">methods</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>props
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 开发环境下的一些判断</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// method不是函数类型</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> methods<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Method "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" has type "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">typeof</span> methods<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" in the component definition. </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Did you reference the function correctly?</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 相同名字已经在props声明使用到</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>props <span class="token operator">&amp;&amp;</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Method "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" has already been defined as a prop.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 命名和已有的实例方法冲突</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> vm<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isReserved</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Method "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" conflicts with an existing Vue instance method. </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Avoid defining component methods that start with _ or $.</span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    vm<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> methods<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">'function'</span> <span class="token operator">?</span> noop <span class="token operator">:</span> <span class="token function">bind</span><span class="token punctuation">(</span>methods<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>initMethods在进行一些检查后核心代码是将方法的this绑定到vm组件实例上，这样在method函数内部可以很方便访问当前实例的其他属性。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// function noop() {}  空函数</span>

vm<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> methods<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">'function'</span> <span class="token operator">?</span> noop <span class="token operator">:</span> <span class="token function">bind</span><span class="token punctuation">(</span>methods<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data处理" tabindex="-1"><a class="header-anchor" href="#data处理" aria-hidden="true">#</a> data处理</h2>
<p>data的前置处理，区分是根实例还是子组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initState</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initData</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">observe</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* asRootData */</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">initData</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>data
  <span class="token comment">// data为函数，则调用返回对象</span>
  data <span class="token operator">=</span> vm<span class="token punctuation">.</span>_data <span class="token operator">=</span> <span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">'function'</span>
    <span class="token operator">?</span> <span class="token function">getData</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
    <span class="token operator">:</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token string">'data functions should return an object:\n'</span> <span class="token operator">+</span>
      <span class="token string">'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function'</span><span class="token punctuation">,</span>
      vm
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// proxy data on instance</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>props
  <span class="token keyword">const</span> methods <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>methods
  <span class="token keyword">let</span> i <span class="token operator">=</span> keys<span class="token punctuation">.</span>length
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token comment">// 命名不能和method冲突</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>methods <span class="token operator">&amp;&amp;</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>methods<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Method "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" has already been defined as a data property.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 命名不能和props冲突</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>props <span class="token operator">&amp;&amp;</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">The data property "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" is already declared as a prop. </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Use prop default value instead.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        vm
      <span class="token punctuation">)</span>
    <span class="token comment">// 不能以$和_开头</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isReserved</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// _data访问代理</span>
      <span class="token function">proxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">_data</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 数据响应式</span>
  <span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* asRootData */</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>initData的步骤主要如下</p>
<ul>
<li>类型判断取值 <code v-pre>Function.call(vm,vm)</code></li>
<li>命名冲突判断</li>
<li>proxy访问代理</li>
<li>数据响应式</li>
</ul>
<h2 id="computed处理" tabindex="-1"><a class="header-anchor" href="#computed处理" aria-hidden="true">#</a> computed处理</h2>
<h3 id="computed初始化" tabindex="-1"><a class="header-anchor" href="#computed初始化" aria-hidden="true">#</a> computed初始化</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// _computedWatchers缓存当前实例的所有computed对应的watcher</span>
  <span class="token keyword">const</span> watchers <span class="token operator">=</span> vm<span class="token punctuation">.</span>_computedWatchers <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token comment">// computed properties are just getters during SSR</span>
  <span class="token keyword">const</span> isSSR <span class="token operator">=</span> <span class="token function">isServerRendering</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> computed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> userDef <span class="token operator">=</span> computed<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token comment">// 函数直接取，否则取对象的get函数</span>
    <span class="token keyword">const</span> getter <span class="token operator">=</span> <span class="token keyword">typeof</span> userDef <span class="token operator">===</span> <span class="token string">'function'</span> <span class="token operator">?</span> userDef <span class="token operator">:</span> userDef<span class="token punctuation">.</span>get
   	<span class="token comment">// 开发环境下的null判断和报错</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span> <span class="token operator">&amp;&amp;</span> getter <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Getter is missing for computed property "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">".</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        vm
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isSSR<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 创建对应的Watcher实例</span>
      watchers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>
        vm<span class="token punctuation">,</span>
        getter <span class="token operator">||</span> noop<span class="token punctuation">,</span>
        noop<span class="token punctuation">,</span>
        computedWatcherOptions
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// component-defined computed properties are already defined on the</span>
    <span class="token comment">// component prototype. We only need to define computed properties defined</span>
    <span class="token comment">// at instantiation here.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> vm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果命名不存在vm上则声明computed</span>
      <span class="token function">defineComputed</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> userDef<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果已经存在于实例上，判断是否和data/props冲突</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> vm<span class="token punctuation">.</span>$data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">The computed property "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" is already defined in data.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>props <span class="token operator">&amp;&amp;</span> key <span class="token keyword">in</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">The computed property "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" is already defined as a prop.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
