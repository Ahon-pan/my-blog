<template><div><h1 id="剑指offer" tabindex="-1"><a class="header-anchor" href="#剑指offer" aria-hidden="true">#</a> 剑指offer</h1>
<h3 id="_1-为什么-json-parse-json-stringify-obj-能实现深拷贝" tabindex="-1"><a class="header-anchor" href="#_1-为什么-json-parse-json-stringify-obj-能实现深拷贝" aria-hidden="true">#</a> 1. 为什么 JSON.parse(JSON.stringify(obj))能实现深拷贝</h3>
<p><code v-pre>拷贝一个字符串，会新开辟一个存储地址，切断了对象的指针联系 </code></p>
<h3 id="_2-json-parse-json-stringify-obj-深拷贝的弊端" tabindex="-1"><a class="header-anchor" href="#_2-json-parse-json-stringify-obj-深拷贝的弊端" aria-hidden="true">#</a> 2. JSON.parse(JSON.stringify(obj))深拷贝的弊端</h3>
<p>（1）当对象里有函数时或undefined，函数或undefined会丢失</p>
<p>（2）当对象里有NaN,Infinity时，序列化会转为null</p>
<p>（3）当对象里有时间对象new Date()时，序列化会得到时间字符串，而非时间对象</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>当遇到上面这种情况，可以使用下面方法或者lodash的cloneDeep方法</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">judgeType</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">'array'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    obj <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      obj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deepClone</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deepClone</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> data
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> obj
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">judgeType</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// tostring会返回对应不同的标签的构造函数</span>
  <span class="token keyword">const</span> toString <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'[object Boolean]'</span><span class="token operator">:</span> <span class="token string">'boolean'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'[object Number]'</span><span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'[object String]'</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'[object Function]'</span><span class="token operator">:</span> <span class="token string">'function'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'[object Array]'</span><span class="token operator">:</span> <span class="token string">'array'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'[object Date]'</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'[object RegExp]'</span><span class="token operator">:</span> <span class="token string">'regExp'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'[object Undefined]'</span><span class="token operator">:</span> <span class="token string">'undefined'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'[object Null]'</span><span class="token operator">:</span> <span class="token string">'null'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'[object Object]'</span><span class="token operator">:</span> <span class="token string">'object'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'element'</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> map<span class="token punctuation">[</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-手写递归-求和-1-到-100" tabindex="-1"><a class="header-anchor" href="#_3-手写递归-求和-1-到-100" aria-hidden="true">#</a> 3. 手写递归 求和 1 到 100</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">add</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> num
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 5050</span>
<span class="token keyword">function</span> <span class="token function">add2</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">add2</span><span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> num
<span class="token punctuation">}</span>
<span class="token function">add2</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// 5050</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-vue-父子组件生命周期顺序" tabindex="-1"><a class="header-anchor" href="#_4-vue-父子组件生命周期顺序" aria-hidden="true">#</a> 4. vue 父子组件生命周期顺序</h3>
<ol>
<li>
<p>加载渲染过程</p>
<p><code v-pre>父组件beforeCreate-&gt;父组件created-&gt;父组件beforeMount-&gt;子组件beforeCreate-&gt;子组件created-&gt;子组件beforeMount-&gt;子组件mounted-&gt;父组件mounted</code></p>
</li>
<li>
<p>子组件更新过程</p>
<p><code v-pre>父组件beforeUpdate-&gt;子组件beforeUpdate-&gt;子组件updated-&gt;父组件updated</code></p>
</li>
<li>
<p>父组件更新过程</p>
<p><code v-pre>父组件beforeUpdate-&gt;父组件update</code></p>
</li>
<li>
<p>销毁过程</p>
<p><code v-pre>父组件beforeDestroy-&gt;子组件beforeDestroy-&gt;子组件destroyed-&gt;父组件destroyed</code></p>
</li>
</ol>
<h3 id="_5-px-转-rem" tabindex="-1"><a class="header-anchor" href="#_5-px-转-rem" aria-hidden="true">#</a> 5. px 转 rem</h3>
<p>浏览器默认字号16px，1rem=16px,为了方便计算设置html，font-size: 62.5%; 1rem = 10px
19.2设计图为1920
document.documentElement.style.fontSize = document.documentElement.clientWidth / 19.2 + 'px';
设计图10px;css：0.1rem
pxtorem插件</p>
<h3 id="_6-computed-和-watch-的区别" tabindex="-1"><a class="header-anchor" href="#_6-computed-和-watch-的区别" aria-hidden="true">#</a> 6. computed 和 watch 的区别</h3>
<p>computed<code v-pre>可缓存</code>，<code v-pre>可依赖多个属性</code>,当他的属性值发生变化时，下一次获取computed值时，
才会计算computed的值，computed是模板表达式的声明式描述，会创建新的响应式数据。
watch，是监听响应式数据的变化，watch 则更适用于<code v-pre>异步或开销大</code>的操作。</p>
<h3 id="_7-vue-权限控制" tabindex="-1"><a class="header-anchor" href="#_7-vue-权限控制" aria-hidden="true">#</a> 7. vue 权限控制</h3>
<p>导航守卫里先拿到当前登录人的角色，然后根据角色匹配路由表，这里需要递归过滤路由表，得到对应路由表后，
在导航守卫里通过router.addRoutes动态添加符合条件的路由</p>
<h3 id="_8-promise-相关" tabindex="-1"><a class="header-anchor" href="#_8-promise-相关" aria-hidden="true">#</a> 8. Promise 相关</h3>
<ol>
<li>
<p>为什么要用 promise？</p>
<p><code v-pre>支持链式调用，可以解决回调地狱问题，promise指定回调函数的方式更加灵活</code></p>
</li>
<li>
<p>什么是回调地狱？</p>
<p><code v-pre>回调函数嵌套调用，外部回调函数异步执行结果是嵌套的回调函数的执行条件</code></p>
</li>
<li>
<p>回调地狱的缺点</p>
<p><code v-pre>不便于阅读，不便于异常处理</code></p>
</li>
<li>
<p>Promise.all方法
<code v-pre>Promise.all()方法接收一个数组作为参数，当数组的所有的Promise都为resolve状态， Promise.all()才会成功，若有一个失败，都会被认为是失败的</code></p>
</li>
</ol>
<h3 id="_9-call、apply、bind-三种方法的用法和区别" tabindex="-1"><a class="header-anchor" href="#_9-call、apply、bind-三种方法的用法和区别" aria-hidden="true">#</a> 9. call、apply、bind 三种方法的用法和区别</h3>
<ol>
<li><code v-pre>call、apply、bind都是改变this指向的方法，第一个参数都是指定函数内部中this的指向</code></li>
<li><code v-pre>call和apply都是立即执行函数，apply第二个参数用数组接受，call，后面可以接收多个参数</code></li>
<li><code v-pre>bind方法没有立即执行，因为bind返回的是一个函数</code></li>
</ol>
<h3 id="_10-vue-双向绑定原理" tabindex="-1"><a class="header-anchor" href="#_10-vue-双向绑定原理" aria-hidden="true">#</a> 10. vue 双向绑定原理</h3>
<ol>
<li><code v-pre>通过数据劫持结合发布订阅模式来实现，具体数据劫持通过Object.defineProperty()来实现数据劫持</code></li>
<li><code v-pre> 实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。</code></li>
<li><code v-pre>实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。</code></li>
<li><code v-pre>实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。</code></li>
</ol>
<h3 id="_11-vuex-如何做持久化存储" tabindex="-1"><a class="header-anchor" href="#_11-vuex-如何做持久化存储" aria-hidden="true">#</a> 11. Vuex 如何做持久化存储</h3>
<p><code v-pre>存到缓存里，或者使用vuex-persist插件</code></p>
<h3 id="_12-props-和-data-优先级谁高" tabindex="-1"><a class="header-anchor" href="#_12-props-和-data-优先级谁高" aria-hidden="true">#</a> 12. props 和 data 优先级谁高？</h3>
<p><code v-pre>props ===&gt; methods ===&gt; data ===&gt; computed ===&gt;watch</code></p>
<h3 id="_13-js-的数据类型有哪些-如何检测数据类型-如何判断引用类型" tabindex="-1"><a class="header-anchor" href="#_13-js-的数据类型有哪些-如何检测数据类型-如何判断引用类型" aria-hidden="true">#</a> 13. js 的数据类型有哪些？如何检测数据类型？如何判断引用类型？</h3>
<ol>
<li>基本数据类型：<code v-pre>Number、String、Boolean、Null、Undefined</code></li>
<li>引用类型：<code v-pre> Object、Array、Function</code></li>
<li><code v-pre>typeof</code> 常用于检测基本类型(Number、String、Boolean、Undefined)，<code v-pre>===</code>可以判断 null,undefined,<code v-pre>instanceof</code> 常用于检测复杂类型(引用类型)</li>
<li>扩展：<code v-pre>instanceof</code>是如何判断的？ 表达式 A instanceof B
如果 B 的显示原型对象在 A 的原型链上，则返回 true, 否则返回 false</li>
</ol>
<h3 id="_14-let-const-与-var-的区别" tabindex="-1"><a class="header-anchor" href="#_14-let-const-与-var-的区别" aria-hidden="true">#</a> 14. let &amp; const 与 var 的区别？</h3>
<ol>
<li><code v-pre>var存在变量提升，可重复声明同一变量，声明的变量均可改</code></li>
<li><code v-pre>let没有变量提升，不可重复声明同一变量，声明的变量均可改</code></li>
<li><code v-pre>const没有变量提升，不可重复声明同一变量，声明的基本数据类型不可改，引用类型可改属性，不可只声明变量而不赋值</code></li>
</ol>
<h3 id="_15-includes-比-indexof-好在哪" tabindex="-1"><a class="header-anchor" href="#_15-includes-比-indexof-好在哪" aria-hidden="true">#</a> 15. includes 比 indexOf 好在哪？</h3>
<p><code v-pre>includes可以检测NaN，indexOf不能检测NaN，includes内部使用了Number.isNaN对NaN进行了匹配</code></p>
<h3 id="_16-什么是-async-await-解决了什么问题" tabindex="-1"><a class="header-anchor" href="#_16-什么是-async-await-解决了什么问题" aria-hidden="true">#</a> 16. 什么是 async/await？解决了什么问题？</h3>
<p><code v-pre>是generator + Promise的语法糖，主要的作用是用同步方式执行异步操作，await只能在async函数中使用，async函数执行会返回一个Promise，值由函数的return值所决定</code></p>
<h3 id="_17-new-操作符为什么能创建一个实例对象" tabindex="-1"><a class="header-anchor" href="#_17-new-操作符为什么能创建一个实例对象" aria-hidden="true">#</a> 17. new 操作符为什么能创建一个实例对象？</h3>
<p>分析一下new的整个过程：</p>
<p>1、创建一个空对象</p>
<p>2、继承构造函数的原型</p>
<p>3、this指向obj，并调用构造函数</p>
<p>4、返回对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 简单实现下new：</span>
<span class="token keyword">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 第一步：创建一个空对象</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 第二步：继承构造函数的原型</span>
  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> fn<span class="token punctuation">.</span>prototype

  <span class="token comment">// 第三步：this指向obj，并调用构造函数</span>
  <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>

  <span class="token comment">// 第四步：返回对象</span>
  <span class="token keyword">return</span> obj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-什么是函数柯里化-简单实现一个" tabindex="-1"><a class="header-anchor" href="#_18-什么是函数柯里化-简单实现一个" aria-hidden="true">#</a> 18. 什么是函数柯里化？简单实现一个？</h3>
<p><code v-pre>是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 普通的add函数</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token comment">// Currying后</span>
<span class="token keyword">function</span> <span class="token function">curryingAdd</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token function">curryingAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="好处" tabindex="-1"><a class="header-anchor" href="#好处" aria-hidden="true">#</a> 好处</h5>
<p>1、参数复用</p>
<p>2、延迟执行 其实 Function.prototype.bind 就是科里化的实现例子</p>
<h3 id="_19-箭头函数与普通函数的区别" tabindex="-1"><a class="header-anchor" href="#_19-箭头函数与普通函数的区别" aria-hidden="true">#</a> 19. 箭头函数与普通函数的区别？</h3>
<ol>
<li>箭头函数不能作为构造函数，不能 new</li>
<li>箭头函数没有自己的 this</li>
<li>箭头函数没有 arguments 对象</li>
<li>箭头函数没有原型对象</li>
</ol>
<h3 id="_20-foreach-如何跳出循环" tabindex="-1"><a class="header-anchor" href="#_20-foreach-如何跳出循环" aria-hidden="true">#</a> 20. forEach 如何跳出循环？</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getItemById</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> item <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">curItem<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>curItem<span class="token punctuation">.</span>id <span class="token operator">==</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        item <span class="token operator">=</span> curItem
        <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> item
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_21-了解-bfc-吗" tabindex="-1"><a class="header-anchor" href="#_21-了解-bfc-吗" aria-hidden="true">#</a> 21. 了解 BFC 吗？</h3>
<ol>
<li>块级格式化上下文。</li>
<li>BFC 的原则：如果一个元素具有 BFC，那么内部元素再怎么弄，都不会影响到外面的元素。</li>
<li>如何触发 BFC：
float 的值非 none
overflow 的值非 visible
display 的值为：inline-block、table-cell...
position 的值为:absoute、fixed</li>
</ol>
<h3 id="_22-什么是虚拟-dom" tabindex="-1"><a class="header-anchor" href="#_22-什么是虚拟-dom" aria-hidden="true">#</a> 22. 什么是虚拟 DOM？</h3>
<p>其实就是数据，把 dom 变成数据结构,用一个 JS 对象来描述一个 DOM 节点,大大节省了浏览器损耗。</p>
<h3 id="_23-diff-算法" tabindex="-1"><a class="header-anchor" href="#_23-diff-算法" aria-hidden="true">#</a> 23. diff 算法</h3>
<p>利用 diff 算法可以更多提升 dom 之间对比的性能（采用虚拟 dom 数据进行对比）。</p>
<h3 id="_24-前端路由模式" tabindex="-1"><a class="header-anchor" href="#_24-前端路由模式" aria-hidden="true">#</a> 24. 前端路由模式？</h3>
<p><strong>1. Hash 模式</strong>
通过监听 <code v-pre>hashchange</code> 事件来监听页面 hash 的变化，通过解析 hash 的值来切换页面。
<strong>优点：</strong> 兼容性最佳，无需服务端配置。
<strong>缺点：</strong> 服务端无法获取 hash 部分内容, 可能和锚点冲突，SEO 不友好</p>
<p><strong>2. History 模式</strong>
History 路由核心主要依赖 History API 里的两个方法和一个事件，其中两个方法用于操作浏览器的历史记录，事件用于监听历史记录的切换
<strong>方法：</strong>
<code v-pre>history.pushState</code>：将给定的 Data 添加到当前标签页的历史记录栈中。
<code v-pre>history.replaceState</code>：将给定的 Data 更新到历史记录栈中最新的一条记录中。
<strong>事件：</strong>
<code v-pre>popstate</code>：监听历史记录的变化。
<strong>优点：</strong> 服务端可获取完整的链接和参数。前端监控友好,SEO 相对 Hash 路由友好。
<strong>缺点：</strong> 兼容性稍弱,需要服务端额外配置（各 path 均指向同一个 HTML）。</p>
<h3 id="_25-显式原型和隐式原型-原型链" tabindex="-1"><a class="header-anchor" href="#_25-显式原型和隐式原型-原型链" aria-hidden="true">#</a> 25. 显式原型和隐式原型，原型链</h3>
<ol>
<li>每个函数 function 都有一个 <code v-pre>prototype</code> 属性，即显示原型(属性)，定义函数时自动添加</li>
<li>每个实例对象都有一个<code v-pre>__proto__</code>，即隐式原型(属性)，创建对象时自动添加</li>
<li>对象的隐式原型的值 对应其构造函数的显示原型的值</li>
<li>那条被 <code v-pre>__proto__</code> 链接起来的链式关系，就称为<code v-pre>原型链</code></li>
</ol>
<p><strong>原型链继承</strong>：
<code v-pre>让子类的原型指向父类的实例</code></p>
<p><strong>构造函数继承</strong>：
<code v-pre>在子类的构造函数中执行父类的构造函数，改变this的指向</code></p>
<p><strong>组合式继承</strong>：
<code v-pre>把原型链继承和构造函数继承结合起来就形成了组合式继承</code></p>
<p><strong>ES6 Class的继承</strong>
<code v-pre>Class 可以通过extends关键字实现继承，让子类继承父类的属性和方法。子类必须在constructor()方法中调用super()得到与父类同样的实例属性和方法</code></p>
<h3 id="_26-浏览器从输入网址到页面展示的过程" tabindex="-1"><a class="header-anchor" href="#_26-浏览器从输入网址到页面展示的过程" aria-hidden="true">#</a> 26. 浏览器从输入网址到页面展示的过程</h3>
<ol>
<li>
<p>URL 输入</p>
</li>
<li>
<p>DNS 解析</p>
</li>
<li>
<p>建立 TCP 连接 (三次握手)</p>
</li>
<li>
<p>发送 HTTP / HTTPS 请求（建立 TLS 连接）</p>
</li>
<li>
<p>服务器响应请求</p>
</li>
<li>
<p>浏览器解析渲染页面</p>
<p>6.1 处理 HTML 标记并构建 DOM 树。</p>
<p>6.2 处理 css 标记并标记 cssom 树。</p>
<p>6.3 将 DOM 树和 cssom 树合成一个渲染树。</p>
<p>6.4 根据渲染树来布局。</p>
<p>6.5 将各个节点绘制到屏幕上</p>
</li>
<li>
<p>HTTP 请求结束，断开 TCP 连接 （4 次挥手）</p>
</li>
</ol>
<h3 id="_27-宏任务和微任务和事件循环机制" tabindex="-1"><a class="header-anchor" href="#_27-宏任务和微任务和事件循环机制" aria-hidden="true">#</a> 27. 宏任务和微任务和事件循环机制</h3>
<p><strong>异步任务</strong>：分为宏任务和微任务</p>
<p><strong>宏任务</strong>：settimeout, setinterval，script</p>
<ol>
<li>宏任务所处的队列就是宏任务队列。</li>
<li>第一个宏任务队列只有一个任务：执行主线程的 js 代码（<code v-pre>先宏后微</code>）</li>
<li>宏任务队列可以有多个</li>
<li>当宏任务队列中的任务都执行完以后会查看是否有微任务队列，如果有，执行微任务队列中的所有任务，如果没有查看是否有宏任务队列如果有执行下一个宏任务</li>
</ol>
<p><strong>微任务</strong>：new Promise().then(), nodejs 的 process.nextTick，await</p>
<ol>
<li>微任务所处的队列就是微任务对列。</li>
<li>只有一个微任务队列</li>
<li>在上一个宏任务队列执行完毕后如果有微任务队列就会执行微任务队列中的所有任务</li>
</ol>
<p><strong>事件循环</strong>：主线程从任务队列中读取事件，这个过程是循环不断的，这种运行机制被称为事件循环。</p>
<p><strong>运行机制</strong>：先执行同步任务，遇到<code v-pre>异步宏任务</code>放到<code v-pre>宏任务队列</code>，遇到<code v-pre>异步微任务</code>放到<code v-pre>微任务队列</code>,当同步代码执行完后，再将异步微任务调入主线程执行，微任务执行完成后，将异步宏任务调入主线程执行，一直循环至所有任务都执行完成。</p>
<h3 id="_28-闭包的作用和原理" tabindex="-1"><a class="header-anchor" href="#_28-闭包的作用和原理" aria-hidden="true">#</a> 28. 闭包的作用和原理</h3>
<ol>
<li>作用：能够在函数作用域外，使用函数定义的作用域内的变量，并且不会污染全局，(函数嵌套)。</li>
<li>原理：基于词法作用域链和垃圾回收机制，通过维持函数作用域的引用，让函数作用域可以在当前作用域外被访问到。</li>
<li>优点：延长外部函数局部变量的生命周期</li>
<li>缺点：容易造成内存泄漏</li>
<li>注意点: 1. 合理使用闭包 2. 用完闭包也要及时清除，销毁</li>
</ol>
<h3 id="_29-手写节流防抖-bind" tabindex="-1"><a class="header-anchor" href="#_29-手写节流防抖-bind" aria-hidden="true">#</a> 29. 手写节流防抖，bind</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 防抖</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 节流</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 自定义的 bind 绑定</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">binder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">getNm</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
getNm<span class="token punctuation">.</span><span class="token function">binder</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">'myBind'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'myBind'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_30-性能优化" tabindex="-1"><a class="header-anchor" href="#_30-性能优化" aria-hidden="true">#</a> 30. 性能优化</h3>
<ol>
<li>减少 http 请求，雪碧图等</li>
<li>减小文件大小，Gzip 服务端打包压缩</li>
<li>大图，大文件放到 CDN 库，链接引入</li>
<li>减少 dom 操作</li>
<li>懒加载，减少首屏加载量</li>
</ol>
<h3 id="_31-js-垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#_31-js-垃圾回收机制" aria-hidden="true">#</a> 31. js 垃圾回收机制</h3>
<ol>
<li>创建一个变量时，会自动分配内存空间，当变量不再被使用时，垃圾回收机制会自动释放相应的内存</li>
</ol>
<h3 id="_32-数组去重" tabindex="-1"><a class="header-anchor" href="#_32-数组去重" aria-hidden="true">#</a> 32. 数组去重</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>arr2<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🎉 💯 💯 💯</p>
</div></template>
