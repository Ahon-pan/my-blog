<template><div><h1 id="日常笔记" tabindex="-1"><a class="header-anchor" href="#日常笔记" aria-hidden="true">#</a> 日常笔记</h1>
<h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2>
<p>浏览器将输入内容解析后，拼接成完整的URL，其中的参数使用的是UTF-8编码，也就是我们开发时会常用的encodeURI和encodeURIComponent两个函数</p>
<ul>
<li><code v-pre>encodeURI</code>是对完整URL编码；</li>
<li><code v-pre>encodeURIComponent</code>是对URL参数部分编码，要求会更严格；</li>
</ul>
<hr>
<p>浏览器缓存的disk cache和memory cache分别是从磁盘读取和从内存中读取，通常刷新页面会直接从内存读，而关闭tab后重新打开是从磁盘读；</p>
<hr>
<p>prefetch与preload</p>
<ul>
<li>预加载prefetch是在空闲时间，以低优先级加载后续页面用到的资源；</li>
<li>preload是以高优先级提前加载当前页面需要的资源；</li>
</ul>
<hr>
<p>async与defer</p>
<ul>
<li>脚本的async是指异步加载，完成加载<strong>立刻执行</strong></li>
<li>defer是异步加载，完成HTML解析后再执行；</li>
</ul>
<hr>
<p>TCP握手需要三次的三次是为了保证客户端的存活，防止服务端资源的浪费，挥手要四次是因为TCP是双工通信，每一个方向的连接释放、应答各需要一次；</p>
<hr>
<p>HTTPS的握手是为了协商出一个对称密钥，双方一共发送三个随机数，利用这三个随机数计算出只有双方知道的密钥，正式通信的内容都是用这个密钥进行加密的；</p>
<h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h3>
<p>📗 sort是按照字符串ASCII码的顺序进行排序的，所以首先应该把数组元素都转化成字符串（如有必要），以便进行比较。</p>
<p>https://www.asciitable.com/</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// (6) [1, 11, 12, 2, 4, 9]  转化成字符串比较，1开始在前</span>

<span class="token punctuation">[</span><span class="token string">'Ana'</span><span class="token punctuation">,</span> <span class="token string">'ana'</span><span class="token punctuation">,</span> <span class="token string">'john'</span><span class="token punctuation">,</span> <span class="token string">'John'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// (4) ['Ana', 'John', 'ana', 'john']  大写字母的ASCII值较小，排前面</span>

<span class="token punctuation">[</span><span class="token string">'Ana'</span><span class="token punctuation">,</span> <span class="token string">'ana'</span><span class="token punctuation">,</span> <span class="token string">'john'</span><span class="token punctuation">,</span> <span class="token string">'John'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> b<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> b<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// (4) ['Ana', 'ana', 'john', 'John']  忽略大小写之后当前sort函数则无作用: a &lt; b </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望小写字母排前面（或带有重音符号的字符），可以使用<code v-pre>localeCompare</code>方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">'Ana'</span><span class="token punctuation">,</span> <span class="token string">'ana'</span><span class="token punctuation">,</span> <span class="token string">'john'</span><span class="token punctuation">,</span> <span class="token string">'John'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=></span> a<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// (4) ['ana', 'Ana', 'john', 'John']</span>

<span class="token keyword">const</span> names2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Maève'</span><span class="token punctuation">,</span> <span class="token string">'Maeve'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
names2<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// (2) ['Maève', 'Maeve']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组迭代器" tabindex="-1"><a class="header-anchor" href="#数组迭代器" aria-hidden="true">#</a> 数组迭代器</h3>
<p>📗 ES2015为Array类增加了一个<code v-pre>@@iterator</code>属性，需要通过<code v-pre>Symbol.iterator</code>来访问:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> iterator <span class="token operator">=</span> numbers<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取数组迭代器</span>
iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 1</span>
iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 2</span>
iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 3</span>
iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 4</span>
iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES2015还增加了三种从数组中得到迭代器的方法: entries、keys和values</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> aEntries <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 得到键值对的迭代器</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aEntries<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0, 1] - 位置0 的值为1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aEntries<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2] - 位置1 的值为2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aEntries<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [2, 3] - 位置2 的值为3</span>

<span class="token keyword">const</span> aValues <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aValues<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aValues<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 2, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aValues<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 3, done: false }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用<code v-pre>for...of</code>遍历迭代器</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>aEntries <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> n <span class="token keyword">of</span> aEntries<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6-module" tabindex="-1"><a class="header-anchor" href="#es6-module" aria-hidden="true">#</a> ES6 module</h3>
<ol>
<li>
<p>使用ES6语法的导出export时，html页面引入该文件需要设置script标签的<code v-pre>type=“module”</code></p>
<p>然后才能import:  <code v-pre>import App from &quot;./App.js&quot;</code></p>
</li>
<li>
<p><code v-pre>import &quot;file.js&quot;</code>会这种方式引入会<strong>立即执行</strong>该js文件</p>
<p><code v-pre>import App friom &quot;file.js&quot;</code>在<strong>引入而未调用</strong>的情况下则不会</p>
</li>
</ol>
<h3 id="对象结构赋值" tabindex="-1"><a class="header-anchor" href="#对象结构赋值" aria-hidden="true">#</a> 对象结构赋值</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> jc <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">article</span><span class="token operator">:</span> <span class="token string">"hello"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">article</span><span class="token operator">:</span> hello <span class="token punctuation">}</span> <span class="token operator">=</span> jc<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// "hello"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakmap与map" tabindex="-1"><a class="header-anchor" href="#weakmap与map" aria-hidden="true">#</a> weakMap与Map</h3>
<div class="custom-container tip"><p class="custom-container-title">基本上，Map和Set与其弱化版本之间仅有的区别是：</p>
<p>❑ WeakSet或WeakMap类没有entries、keys和values等方法；
❑ 只能用对象作为键。</p>
</div>
<ul>
<li>创建和使用这两个类主要是为了性能。WeakSet和WeakMap是弱化的（用对象作为键），没有强引用的键。这使得JavaScript的垃圾回收器可以从中清除整个入口。</li>
<li>另一个优点是，必须用键才可以取出值。这些类没有entries、keys和values等迭代器方法，因此，除非你知道键，否则没有办法取出值。使用WeakMap类封装ES2015类的私有属性。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        items<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> s <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> s <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> r <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> r<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="零散" tabindex="-1"><a class="header-anchor" href="#零散" aria-hidden="true">#</a> 零散</h2>
<h3 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h3>
<ul>
<li>驼峰：CamelCase</li>
<li>大驼峰命名法：UpperCamelCase  （pascak case）</li>
<li>小驼峰命名法：lowerCamelCase</li>
<li>蛇形命名法：snake_case</li>
<li>驼峰蛇形：Python_Case、user_Name</li>
<li>串式命名：kebab-case （train case、spinal case脊柱命名法）</li>
</ul>
<h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2>
<h3 id="对象所有键" tabindex="-1"><a class="header-anchor" href="#对象所有键" aria-hidden="true">#</a> 对象所有键</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ObjKey</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h2>
<h3 id="父子组件方法传递" tabindex="-1"><a class="header-anchor" href="#父子组件方法传递" aria-hidden="true">#</a> 父子组件方法传递</h3>
<div class="custom-container tip"><p class="custom-container-title">理解</p>
<ul>
<li>
<p>子组件想要调用父组件的方法，可以直接传递Function类型</p>
</li>
<li>
<p>或直接父组件<code v-pre>@click=“event”</code>，默认子组件为<code v-pre>inheritAttrs: true</code>会默认添加到子组件最外层标签</p>
<p>📗 事件<code v-pre>@event=“handler“</code>和属性一样都会被添加到子组件的最外层标签，这会将父组件的方法和属性传递给子组件。属性通过props接收，事件通过emits触发</p>
</li>
<li>
<p>如果<code v-pre>inheritAttrs: false</code>，可以绑定<code v-pre>v-bind=“$attrs”</code>给目标标签（这种情况相当于把所有事件和属性都绑定给了对应的标签，局限性比较大）</p>
</li>
<li>
<p>最好的方式就是子组件<code v-pre>emit</code>出自定义事件由父组件接收处理</p>
</li>
</ul>
</div>
<h3 id="简易传送门组件" tabindex="-1"><a class="header-anchor" href="#简易传送门组件" aria-hidden="true">#</a> 简易传送门组件</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-component</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outside<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../../dist/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/x-template<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-component<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>p<span class="token operator">></span>This is the content <span class="token keyword">of</span> component<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
          <span class="token operator">&lt;</span>p<span class="token operator">></span>Hello Vue<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'my-component'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'#my-component'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'hello world'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#outside"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">;</span>
        node<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/daily/teleport.png" alt=""></p>
<h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> $event</h3>
<p>事件指令不写处理方法，也可以直接写代码，模板内可以直接使用<code v-pre>$event</code>参数得到<strong>原生事件对象</strong>或者<strong>自定义事件参数</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model<span class="token punctuation">"</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model = $event.target.value<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>console.log($event.target)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>单击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JcInput</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">@update:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(newVal)=> title = newValue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JcInput</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">@update:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title = $event<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JcInput</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📗 如果子组件props的名字是<strong>modelValue</strong>，即对应<code v-pre>v-model:modelValue</code>和事件<code v-pre>@update:modelValue</code>，可以简写成<code v-pre>v-model</code></p>
<h3 id="provide-inject" tabindex="-1"><a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a> provide/inject</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">webName</span><span class="token operator">:</span> <span class="token string">"helloWorld"</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>provide提供数据时如果希望使用<code v-pre>this</code>的引用，需要将provide转化为一个函数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">webName</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>webName<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>provide注入的数据是<strong>非响应式</strong>的，为了解决这个问题可以：</p>
<ul>
<li>
<p>提供一个js引用类型数据（对象）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">webName</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>webName<span class="token punctuation">}</span>
<span class="token punctuation">}</span>，
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">webName</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"helloWorld"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子组件使用： webName.label</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>如果还是希望使用基本数据类型，可以用computed将它包装成计算属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">webName</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>webName<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>📗 在组合式api中，如果希望数据时响应式的，因为ref已经包装成了引用类型数据：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'updateData'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newData</span><span class="token punctuation">)</span><span class="token operator">=></span> data<span class="token punctuation">.</span>value <span class="token operator">=</span> newData<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slot插槽" tabindex="-1"><a class="header-anchor" href="#slot插槽" aria-hidden="true">#</a> slot插槽</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slotData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>default content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slotData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show(slotData)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    hello world    
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>
<p>在默认只有default一个插槽的情况下，可以直接在组件<code v-pre>v-slot=&quot;slotProps&quot;</code>或者<code v-pre>#default=&quot;slotProps&quot;</code>，且不需要套template标签</p>
</li>
<li>
<p>通过props向子组件传递数据，子组件的插槽再通过<code v-pre>&lt;slot :id=&quot;props.id&quot; /&gt;</code>给父组件插槽的组件传递数据，父组件的插槽位置组件便可以使用该数据</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{lesson.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lesson.id<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Lesson"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"lesson"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lesson</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lesson of lessons<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lesson.id<span class="token punctuation">"</span></span> <span class="token attr-name">:lesson</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lesson<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{id}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>del(id)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lesson</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3>
<ul>
<li>beforeCreate： 组件创建之前，this为undefined</li>
<li>created：实例已经创建，但未渲染，this可以访问，但模板数据还未真正的挂载。所以还不能操作模板，this.$refs.el为undefined</li>
<li>beforeMount：DOM被挂载之前，依然不能读取DOM元素</li>
<li>mounted：DOM挂载完毕，可以访问模板</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>父组件 beforeCreate
父组件 created
父组件 beforeMount

子组件 beforeCreate
子组件 created
子组件 beforeMount
子组件 mounted

父组件 mounted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>beforeUpdate：更新之前，此时模板还未更新</li>
<li>updated：视图更新完毕</li>
<li>beforeUnmount：组件卸载之前</li>
<li>unmounted：组件卸载完毕，适用于比如播放器/定时器的销毁</li>
</ul>
<h3 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect" aria-hidden="true">#</a> watchEffect</h3>
<div class="custom-container tip"><p class="custom-container-title">watchEffect</p>
<ul>
<li>启动的时候就会被执行</li>
<li>函数声明内使用的响应式数据发生变化时会自动执行</li>
<li>返回值时一个可以停止监听的函数</li>
</ul>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watch</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>v <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> num<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> num<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 让监听失效：stop()  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setup中的ref" tabindex="-1"><a class="header-anchor" href="#setup中的ref" aria-hidden="true">#</a> setup中的ref</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>childRef<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span> <span class="token attr-name">:init</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  {{ handleChange() }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">"./components/child.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Child <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> childRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=></span> childRef<span class="token punctuation">.</span>value<span class="token operator">?.</span>num<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> childRef<span class="token punctuation">,</span> handleChange <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sub<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>sub<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  	{{ num }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watchEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">init</span><span class="token operator">:</span> Number<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'change'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> emit<span class="token punctuation">,</span> expose <span class="token punctuation">}</span> <span class="token operator">=</span> context<span class="token punctuation">;</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>init<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
      num<span class="token punctuation">.</span>value<span class="token operator">++</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> num<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> <span class="token function-variable function">sub</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
      num<span class="token punctuation">.</span>value<span class="token operator">--</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> num<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> num<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> num<span class="token punctuation">.</span>vaue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 让child组件只暴露num属性</span>
    <span class="token function">expose</span><span class="token punctuation">(</span><span class="token punctuation">{</span> num <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> num<span class="token punctuation">,</span> add<span class="token punctuation">,</span> sub <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setup中的context" tabindex="-1"><a class="header-anchor" href="#setup中的context" aria-hidden="true">#</a> setup中的context</h3>
<div class="custom-container tip"><p class="custom-container-title">setup函数中的context包含了emit、expose、attrs和slots</p>
<ol>
<li>emit即<code v-pre>this.$emits</code></li>
<li>expose可以只将需要暴露的属性或方法声明给外部</li>
<li>attrs即<code v-pre>this.$attrs</code>，当使用该方法需要声明<code v-pre>inheritAttrs: false</code></li>
<li>slots获取插槽： <code v-pre>const defaults = slots.default()</code>返回一个组件数组</li>
</ol>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 显示父组件默认插槽内的第二个标签 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaults[1]<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="suspense" tabindex="-1"><a class="header-anchor" href="#suspense" aria-hidden="true">#</a> suspense</h3>
<p>suspense组件可以处理全局异步问题，setup中使用await移步方法的时候不需要写async，当setup函数执行完后才会渲染组件。suspsense组件有两个插槽：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>suspense</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#fallback</span><span class="token punctuation">></span></span>
    loading
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>suspense</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span>
<span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// setup中可以使用await</span>
todos<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://127.0.0.1:3003/news</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h3>
<p>使用Transition组件，在未显示定义name属性的情况下，name默认为v，class如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span>name<span class="token punctuation">}</span>-enter-from
<span class="token punctuation">{</span>name<span class="token punctuation">}</span>-enter-active
<span class="token punctuation">{</span>name<span class="token punctuation">}</span>-enter-to

<span class="token punctuation">{</span>name<span class="token punctuation">}</span>-leave-from
<span class="token punctuation">{</span>name<span class="token punctuation">}</span>-leave-active
<span class="token punctuation">{</span>name<span class="token punctuation">}</span>-leave-to
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了直接定义class，组件自身也允许我们传入<strong>自定义动画类名</strong>，因此可借助animate.css（https://animate.style/）</p>
<p><code v-pre>appear</code>允许初始加载的时候也有动画</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transition</span>
            <span class="token attr-name">appear</span>
            <span class="token attr-name">enter-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>animate__animated animate__flip<span class="token punctuation">"</span></span>
            <span class="token attr-name">enter-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>animate__animated animate__rotateOut<span class="token punctuation">"</span></span>
            <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hello-world</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hello-world</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transition</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="动画钩子函数" tabindex="-1"><a class="header-anchor" href="#动画钩子函数" aria-hidden="true">#</a> 动画钩子函数</h4>
<p>组件还提供了动画钩子函数动画钩子函数，可借助gsap帮助我们操作元素</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">'./components/HelloWorld.vue'</span>
<span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">beforeEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  gsap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">enter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">onComplete</span><span class="token operator">:</span> done
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">leave</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">onComplete</span><span class="token operator">:</span> done
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- beforeEnter enter afterEnter beforeLeave leave afterLeave --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">@before-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>beforeEnter<span class="token punctuation">"</span></span> <span class="token attr-name">@enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enter<span class="token punctuation">"</span></span> <span class="token attr-name">@leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leave<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hello-world</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hello-world</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show = !show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>切换<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多标签的动画过渡" tabindex="-1"><a class="header-anchor" href="#多标签的动画过渡" aria-hidden="true">#</a> 多标签的动画过渡</h4>
<p>对于多标签切换时位置抖动的问题：</p>
<ol>
<li>将元素设置为绝对定位，外层套一个相对定位的父组件，切换时则是在原位置上切换</li>
<li>使用<strong>mode为</strong><code v-pre>out-in</code>，即当前元素先消失之后，另一个元素才出来</li>
</ol>
<p>使用额外的class可以达到重写animate的duration的效果</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token string">'animate.css'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'on'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span>
      <span class="token attr-name">enter-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>animate__animated animate__zoomIn jc<span class="token punctuation">"</span></span>
      <span class="token attr-name">leave-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>animate__animated animate__zoomOut jc<span class="token punctuation">"</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>out-in<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>action == <span class="token punctuation">'</span>on<span class="token punctuation">'</span><span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>action = <span class="token punctuation">'</span>off<span class="token punctuation">'</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>on<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>开启<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-else</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>action = <span class="token punctuation">'</span>on<span class="token punctuation">'</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>off<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关闭<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">// section</span> <span class="token punctuation">{</span>
//   <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token selector">//   button</span> <span class="token punctuation">{</span>
//     <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
//   <span class="token punctuation">}</span>
// <span class="token punctuation">}</span>
<span class="token selector">.jc</span> <span class="token punctuation">{</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 5s <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">button</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token selector">&amp;.on</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #16a085<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;.off</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #d35400<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="transitiongroup" tabindex="-1"><a class="header-anchor" href="#transitiongroup" aria-hidden="true">#</a> TransitionGroup</h4>
<div class="custom-container tip"><p class="custom-container-title">动画组</p>
<p>可以一次性控制所有子元素的动画效果，同时还有<code v-pre>v-move</code>允许我们配置其余元素位置移动时的动画效果</p>
<ul>
<li><code v-pre>enter</code> 时为不同index元素设置不同的动画延迟时间，达到按序动画的效果</li>
<li><code v-pre>appear</code> 允许初始化就出现该动画</li>
<li><code v-pre>todo-move </code>定义了其他元素移动的平滑过渡动画</li>
<li><code v-pre>todo-leave-active</code> 设置元素消失时为绝对定位，不占空间（外层使用当前组件要套一个相对定位元素），让后面元素平滑上移</li>
</ul>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> gsap <span class="token keyword">from</span> <span class="token string">'gsap'</span>

<span class="token keyword">const</span> prop <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0.6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0.2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">beforeEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	gsap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">enter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token literal-property property">duration</span><span class="token operator">:</span> prop<span class="token punctuation">.</span>duration<span class="token punctuation">,</span>
		<span class="token literal-property property">delay</span><span class="token operator">:</span> el<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>index <span class="token operator">*</span> prop<span class="token punctuation">.</span>delay<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition-group</span> <span class="token attr-name">:tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tag<span class="token punctuation">"</span></span> <span class="token attr-name">appear</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo<span class="token punctuation">"</span></span> <span class="token attr-name">@before-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>beforeEnter<span class="token punctuation">"</span></span> <span class="token attr-name">@enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition-group</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.todo-leave-to</span> <span class="token punctuation">{</span>
	<span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.todo-leave-active</span> <span class="token punctuation">{</span>
	<span class="token property">transition</span><span class="token punctuation">:</span> 1s ease<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.todo-move</span> <span class="token punctuation">{</span>
	<span class="token property">transition</span><span class="token punctuation">:</span> all 1s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> vue-router</h2>
<ul>
<li>
<p>页面兜底</p>
<p><code v-pre>:any(.*)</code>这边括号内的正则即匹配除了换行外的一个或多个字符，any表示任意参数，可随意</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/:any(.*)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>RouterView组件</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{route, Component}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>route.meta?.class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Component<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="命名视图" tabindex="-1"><a class="header-anchor" href="#命名视图" aria-hidden="true">#</a> 命名视图</h3>
<p>同一个页面当中可以使用多个<code v-pre>RouterView</code>组件，不同的视图设置不同的name，默认上default。对应的路由的定义当中components属性：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> route <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"home"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span><span class="token operator">:</span> CustomNavigation<span class="token punctuation">,</span>  <span class="token comment">// 默认试图渲染的组件</span>
		<span class="token literal-property property">navigation</span><span class="token operator">:</span> HomeView  <span class="token comment">// navigation视图组件，如果有，在渲染时代替DefaultNavigation</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigation<span class="token punctuation">"</span></span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ Component }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Component ?? DefaultNavigation<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由别名" tabindex="-1"><a class="header-anchor" href="#路由别名" aria-hidden="true">#</a> 路由别名</h3>
<p>route配置中有<code v-pre>alias</code>属性，它可以是string或array，为当前页面设置其它的路径</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>alias： <span class="token string">"/:id(\\d+).html"</span>     <span class="token comment">// ‘/123.html’</span>
<span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"/hello"</span><span class="token punctuation">,</span> <span class="token string">"/world"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h3>
<p>路由的守卫包括<strong>全局守卫</strong>，<strong>路由中定义的守卫</strong>和<strong>组件路由守卫</strong></p>
<div class="custom-container tip"><p class="custom-container-title">当页面跳转时</p>
<ol>
<li>beforeRouteLeave  离开组件</li>
<li>beforeEach  全局前置守卫</li>
<li>beforeEnter  路由前置守卫</li>
<li>beforeRouteEnter  组件前置守卫</li>
<li>beforeResolve  全局解析守卫</li>
<li>afterEach 全局后置守卫</li>
</ol>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// return true/false</span>
  
  <span class="token comment">// return new Promise((resolve, reject)=> {</span>
  <span class="token comment">//   setTimeout(()=> resolve(true), 2000)</span>
  <span class="token comment">// })</span>
  
  <span class="token comment">// return await new Promise((resolve)=> {</span>
  <span class="token comment">//   resolve(false)</span>
  <span class="token comment">// })</span>
  
  <span class="token comment">// if(to.name === "about") next('/login')</span>
  <span class="token comment">// else next()</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">"about"</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">'/login'</span>   <span class="token comment">// return from</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">当路由更新时</p>
<ol>
<li>beforeEach 全局前置守卫</li>
<li>beforeRouteUpdate  组件更新守卫</li>
<li>beforeResolve  全局解析守卫</li>
<li>afterEach  全局后置守卫</li>
</ol>
</div>
<p>组件路由守卫的使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">loadData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token operator">=></span> <span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ro<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scrollbehavior" tabindex="-1"><a class="header-anchor" href="#scrollbehavior" aria-hidden="true">#</a> scrollBehavior</h3>
<p>路由创建时允许传入<code v-pre>scrollBehavior</code>属性来调整路由跳转后到滚动效果</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> savedPosition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// savedPosition 页面返回时定位到之前浏览到位置</span>
  <span class="token comment">// el 指定要滚动到的元素位置</span>
  <span class="token comment">// 这个函数也可以返回Promise，来处理异步情况</span>
  <span class="token keyword">return</span> savedPosition <span class="token operator">??</span> <span class="token punctuation">{</span> <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'.page'</span><span class="token punctuation">,</span> <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">'smooth'</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面懒加载" tabindex="-1"><a class="header-anchor" href="#页面懒加载" aria-hidden="true">#</a> 页面懒加载</h3>
<p>ES6动态加载模块，将页面组件打包成独立的js文件，使用时再加载</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/home.vue'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vite分包加载" tabindex="-1"><a class="header-anchor" href="#vite分包加载" aria-hidden="true">#</a> Vite分包加载</h3>
<p>也可以将某一类文件打包成单独文件，在vite中的配置如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineCOnfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">manualChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 将这三个页面组件打包成'hello.hash[8].js'文件</span>
          <span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">'./src/views/home.vue'</span><span class="token punctuation">,</span>
            <span class="token string">'./src/views/about.vue'</span><span class="token punctuation">,</span>
            <span class="token string">'./src/views/article.vue'</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
