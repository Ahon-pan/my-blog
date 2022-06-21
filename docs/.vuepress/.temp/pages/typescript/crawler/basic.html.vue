<template><div><h1 id="typescript-编写爬虫工具" tabindex="-1"><a class="header-anchor" href="#typescript-编写爬虫工具" aria-hidden="true">#</a> TypeScript 编写爬虫工具</h1>
<h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>// 生成package.json
<span class="token function">npm</span> init -y
// tsconfig.json
tsc --init
// 卸载全局ts-node
<span class="token function">npm</span> uninstall ts-node -g
// 安装ts-node typescript在dev环境
<span class="token function">npm</span> <span class="token function">install</span> -D ts-node
<span class="token function">npm</span> <span class="token function">install</span> typescript -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>新建 src 下的 crawler.ts</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>更改 package.json 中的执行语句</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"ts-node ./src/crawler.ts"</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>测试</li>
</ul>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code><span class="token function">PS</span> E:\typescript\crawler> npm run dev

> crawler@1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0 dev E:\typescript\crawler
> ts-node <span class="token punctuation">.</span><span class="token operator">/</span>src/crawler<span class="token punctuation">.</span>ts

hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Crawler</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> secret <span class="token operator">=</span> <span class="token string">'secretKey'</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    http://www.dell-lee.com/typescript/demo.html?secret?=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'constructor'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// secret是类里面的一个属性，需要通过this获取</span>
<span class="token keyword">const</span> crawler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Crawler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="superagent" tabindex="-1"><a class="header-anchor" href="#superagent" aria-hidden="true">#</a> SuperAgent</h2>
<p>superagent 可以获取到远程网址上的 html</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> superagent --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>--save：dependencies 生产环境用到的模块</li>
<li>--–save-dev： devDependencies 开发环境模块（-D）</li>
</ul>
<h3 id="类型定义文件-types" tabindex="-1"><a class="header-anchor" href="#类型定义文件-types" aria-hidden="true">#</a> 类型定义文件@types</h3>
<p>TypeScript 引用 JavaScript 会报错，且无法提供只能提醒</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Superagent <span class="token keyword">from</span> <span class="token string">'superagent'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要提供 <strong>.d.ts</strong> 的翻译文件,将 <strong>js</strong> 文件里面的类型文件进行补全</p>
<p><strong>ts =&gt; .d.ts 翻译文件 @types/ =&gt; js</strong></p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>无法找到模块“superagent”的声明文件。“e:<span class="token operator">/</span>typescript/crawler/node_modules/superagent/lib/node/index<span class="token punctuation">.</span>js”隐式拥有 <span class="token string">"any"</span> 类型。
  <span class="token keyword">Try</span> `npm install @types/superagent` <span class="token keyword">if</span> it exists or add a new declaration <span class="token punctuation">(</span><span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts<span class="token punctuation">)</span> file containing `declare module <span class="token string">'superagent'</span><span class="token punctuation">;</span>`ts<span class="token punctuation">(</span>7016<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解决：在开发环境下引入翻译文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @types/superagent -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="htmt-获取的实现" tabindex="-1"><a class="header-anchor" href="#htmt-获取的实现" aria-hidden="true">#</a> Htmt 获取的实现</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Superagent <span class="token keyword">from</span> <span class="token string">'superagent'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Crawler</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> secret <span class="token operator">=</span> <span class="token string">'secretKey'</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://www.dell-lee.com/typescript/demo.html?secret?=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> rawHtml <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

  <span class="token keyword">async</span> <span class="token function">getRawHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Superagent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rawHtml <span class="token operator">=</span> result<span class="token punctuation">.</span>text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRawHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> crawler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Crawler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cheerio-数据获取" tabindex="-1"><a class="header-anchor" href="#cheerio-数据获取" aria-hidden="true">#</a> cheerio 数据获取</h2>
<h3 id="cheerio-库引入" tabindex="-1"><a class="header-anchor" href="#cheerio-库引入" aria-hidden="true">#</a> cheerio 库引入</h3>
<p>cheerio 可以读取 html 字符串，让我们能够以 jQuery 的方式操作获取数据</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> cheerio --save
<span class="token function">npm</span> <span class="token function">install</span> @types/cheerio -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h3>
<p>cheerio 中的 map((index,element)=&gt;{})方法的参数和 JS 的 map((element,index)=&gt;{})方法参数相反</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// https://cheerio.js.org/ 文档实例</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this === el</span>
    <span class="token keyword">return</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//=> "apple orange pear"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> superagent <span class="token keyword">from</span> <span class="token string">'superagent'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> cheerio <span class="token keyword">from</span> <span class="token string">'cheerio'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Crowller</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> secret <span class="token operator">=</span> <span class="token string">'secretKey'</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://www.dell-lee.com/typescript/demo.html?secret=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

  <span class="token function">getCourseInfo</span><span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> $ <span class="token operator">=</span> cheerio<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> courseItems <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.course-item'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> courseInfo<span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    courseItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> ele<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> descs <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">'.course-desc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> title <span class="token operator">=</span> descs<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>
        descs
          <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'：'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">10</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      courseInfo<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        title<span class="token operator">:</span> title<span class="token punctuation">,</span>
        count<span class="token operator">:</span> count<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
      time<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> courseInfo<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">getRawHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> superagent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCourseInfo</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRawHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> crowller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Crowller</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h3>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>> ts-node <span class="token punctuation">.</span><span class="token operator">/</span>src/crawler<span class="token punctuation">.</span>ts

<span class="token punctuation">{</span>
  time: 1582818112855<span class="token punctuation">,</span>
  <span class="token keyword">data</span>: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> title: <span class="token string">'Vue2.5开发去哪儿网App'</span><span class="token punctuation">,</span> count: 18 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> title: <span class="token string">'React 16.4 开发简书项目'</span><span class="token punctuation">,</span> count: 74 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> title: <span class="token string">'React服务器渲染原理解析与实践'</span><span class="token punctuation">,</span> count: 10 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> title: <span class="token string">'手把手带你掌握新版Webpack4.0'</span><span class="token punctuation">,</span> count: 41 <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合设计模式优化" tabindex="-1"><a class="header-anchor" href="#组合设计模式优化" aria-hidden="true">#</a> 组合设计模式优化</h2>
<h3 id="crawler" tabindex="-1"><a class="header-anchor" href="#crawler" aria-hidden="true">#</a> crawler</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">'fs'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> superagent <span class="token keyword">from</span> <span class="token string">'superagent'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CaffreyAnalyzer <span class="token keyword">from</span> <span class="token string">'./specialAnalyzer'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Analyzer</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">analyze</span><span class="token operator">:</span> <span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> filePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Crowller</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'../data/course.json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">async</span> <span class="token function">getRawHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> superagent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">.</span>text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function">writeFile</span><span class="token punctuation">(</span>content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>filePath<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">initSpiderProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRawHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> fileContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>analyzer<span class="token punctuation">.</span><span class="token function">analyze</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>fileContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">private</span> analyzer<span class="token operator">:</span> Analyzer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initSpiderProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> secret <span class="token operator">=</span> <span class="token string">'secretKey'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://www.dell-lee.com/typescript/demo.html?secret=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> analyzer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CaffreyAnalyzer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Crowller</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> analyzer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="analyzer-js" tabindex="-1"><a class="header-anchor" href="#analyzer-js" aria-hidden="true">#</a> analyzer.js</h3>
<ul>
<li>class implements interface</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">'fs'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> cheerio <span class="token keyword">from</span> <span class="token string">'cheerio'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Analyzer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./crowller'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CourseResult</span> <span class="token punctuation">{</span>
  time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  data<span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Content</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">CaffreyAnalyzer</span> <span class="token keyword">implements</span> <span class="token class-name">Analyzer</span> <span class="token punctuation">{</span>
  <span class="token function">getCourseInfo</span><span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> $ <span class="token operator">=</span> cheerio<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> courseItems <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.course-item'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> courseInfos<span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    courseItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> element<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> descs <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">'.course-desc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> title <span class="token operator">=</span> descs<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>
        descs
          <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'：'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">10</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      courseInfos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token punctuation">,</span> count <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      time<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> courseInfos<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">generateJsonContent</span><span class="token punctuation">(</span>courseInfo<span class="token operator">:</span> CourseResult<span class="token punctuation">,</span> filePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> fileContent<span class="token operator">:</span> Content <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fileContent <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    fileContent<span class="token punctuation">[</span>courseInfo<span class="token punctuation">.</span>time<span class="token punctuation">]</span> <span class="token operator">=</span> courseInfo<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">return</span> fileContent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">analyze</span><span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> filePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> courseInfo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCourseInfo</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> fileContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">generateJsonContent</span><span class="token punctuation">(</span>courseInfo<span class="token punctuation">,</span> filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>fileContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单例模式实战" tabindex="-1"><a class="header-anchor" href="#单例模式实战" aria-hidden="true">#</a> 单例模式实战</h2>
<h3 id="specialanalyzer-ts" tabindex="-1"><a class="header-anchor" href="#specialanalyzer-ts" aria-hidden="true">#</a> specialAnalyzer.ts</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">'fs'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> cheerio <span class="token keyword">from</span> <span class="token string">'cheerio'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Analyzer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./crowller'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CourseResult</span> <span class="token punctuation">{</span>
  time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  data<span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Content</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">CaffreyAnalyzer</span> <span class="token keyword">implements</span> <span class="token class-name">Analyzer</span> <span class="token punctuation">{</span>
  <span class="token comment">// static静态属性，将方法直接挂载在类上面，而不是类的实例上面</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> instance<span class="token operator">:</span> CaffreyAnalyzer<span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只生成一次</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>CaffreyAnalyzer<span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      CaffreyAnalyzer<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CaffreyAnalyzer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> CaffreyAnalyzer<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">private</span> <span class="token function">getCourseInfo</span><span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> $ <span class="token operator">=</span> cheerio<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> courseItems <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.course-item'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> courseInfos<span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    courseItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> element<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> descs <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">'.course-desc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> title <span class="token operator">=</span> descs<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>
        descs
          <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'：'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">10</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      courseInfos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token punctuation">,</span> count <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      time<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> courseInfos<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function">generateJsonContent</span><span class="token punctuation">(</span>courseInfo<span class="token operator">:</span> CourseResult<span class="token punctuation">,</span> filePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> fileContent<span class="token operator">:</span> Content <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fileContent <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    fileContent<span class="token punctuation">[</span>courseInfo<span class="token punctuation">.</span>time<span class="token punctuation">]</span> <span class="token operator">=</span> courseInfo<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">return</span> fileContent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">analyze</span><span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> filePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> courseInfo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCourseInfo</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> fileContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">generateJsonContent</span><span class="token punctuation">(</span>courseInfo<span class="token punctuation">,</span> filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>fileContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// private私有限制符,只允许内部调用  禁止new 实例</span>
  <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> analyzer <span class="token operator">=</span> CaffreyAnalyzer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Crowller</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> analyzer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译过程" tabindex="-1"><a class="header-anchor" href="#编译过程" aria-hidden="true">#</a> 编译过程</h2>
<h3 id="初始配置" tabindex="-1"><a class="header-anchor" href="#初始配置" aria-hidden="true">#</a> 初始配置</h3>
<p>将 ts 文件编译为 js 文件，然后运行该文件</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"ts-node ./src/crawler.ts"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开 <strong>tsconfig.json</strong> 修改编译路径</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"outDir"</span><span class="token operator">:</span> <span class="token string">"./build"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>typescript 文件是不能直接运行的</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>node <span class="token punctuation">.</span><span class="token operator">/</span>build/crawler<span class="token punctuation">.</span>js
<span class="token operator">/</span><span class="token operator">/</span>报错
node src/crawler<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动编译-ts-文件" tabindex="-1"><a class="header-anchor" href="#自动编译-ts-文件" aria-hidden="true">#</a> 自动编译 ts 文件</h3>
<p>通过 npm run build 后，如果后续 ts 文件有修改，会自动编译更新 js 文件</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"tsc -w"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动执行-js-文件" tabindex="-1"><a class="header-anchor" href="#自动执行-js-文件" aria-hidden="true">#</a> 自动执行 js 文件</h3>
<p>监控整个项目文件变化后执行动作，安装 nodemon(npm install nodemon -D)</p>
<ul>
<li>nodemon 默认不会监测 TypeScript 的文件变化（可配置修改）</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"tsc -w"</span><span class="token punctuation">,</span>
    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"nodemon node ./build/crawler.js"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tips: 第一次运行的 npm run start 的时候会先执行一次，导致生成了 data 文件夹下面的 course.json; 而当前的文件变化又导致了 nodemon 的监测重新执行，如此反复循环运行 craw.js，需要在 package.json 增加 json 配置</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"nodemonConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ignore"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"data/*"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并命令" tabindex="-1"><a class="header-anchor" href="#合并命令" aria-hidden="true">#</a> 合并命令</h3>
<p><strong>concurrently</strong>并行执行命令(npm install concurrently -D)</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev:build"</span><span class="token operator">:</span> <span class="token string">"tsc -w"</span><span class="token punctuation">,</span>
    <span class="token property">"dev:start"</span><span class="token operator">:</span> <span class="token string">"nodemon node ./build/crawler.js"</span><span class="token punctuation">,</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"concurrently npm run dev:build &amp; npm run dev:start"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm:dev:*相当于 npm run dev: 下的所有命令</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev:build"</span><span class="token operator">:</span> <span class="token string">"tsc -w"</span><span class="token punctuation">,</span>
    <span class="token property">"dev: start"</span><span class="token operator">:</span> <span class="token string">"nodemon node ./build/crawler.js"</span><span class="token punctuation">,</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"concurrently npm:dev:*"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
