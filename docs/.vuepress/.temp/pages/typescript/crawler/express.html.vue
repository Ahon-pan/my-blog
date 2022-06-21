<template><div><h1 id="express-爬虫" tabindex="-1"><a class="header-anchor" href="#express-爬虫" aria-hidden="true">#</a> Express &amp;&amp; 爬虫</h1>
<h2 id="express基础项目结构搭建" tabindex="-1"><a class="header-anchor" href="#express基础项目结构搭建" aria-hidden="true">#</a> Express基础项目结构搭建</h2>
<h3 id="改良" tabindex="-1"><a class="header-anchor" href="#改良" aria-hidden="true">#</a> 改良</h3>
<p>使用Express开启一个服务器，让浏览器能够访问服务器上的接口</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev:build"</span><span class="token operator">:</span> <span class="token string">"tsc -w"</span><span class="token punctuation">,</span>
    <span class="token property">"dev:start"</span><span class="token operator">:</span> <span class="token string">"nodemon node ./build/index.js"</span><span class="token punctuation">,</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"concurrently npm:dev:*"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一次运行<code v-pre>npm run dev</code>时，由于build和start是并行运行的，当index.js还未生成，会报错找不到index.js</p>
<p>解决：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev:build"</span><span class="token operator">:</span> <span class="token string">"tsc -w"</span><span class="token punctuation">,</span>
    <span class="token property">"dev:start"</span><span class="token operator">:</span> <span class="token string">"nodemon node ./build/index.js"</span><span class="token punctuation">,</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"tsc &amp;&amp; concurrently npm:dev:*"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在node执行js的时候先tsc编译一次TS代码</p>
<h3 id="express搭建服务器" tabindex="-1"><a class="header-anchor" href="#express搭建服务器" aria-hidden="true">#</a> Express搭建服务器</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> express --save
<span class="token function">npm</span> <span class="token function">install</span> @types/express --D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">|</span>-- build
<span class="token operator">|</span>-- data
<span class="token operator">|</span>-- node_modules
<span class="token operator">|</span>-- src
<span class="token operator">|</span>   <span class="token operator">|</span>-- crowller.ts
<span class="token operator">|</span>   <span class="token operator">|</span>-- dellAnalyzer.ts
<span class="token operator">|</span>   <span class="token operator">|</span>-- index.ts
<span class="token operator">|</span>   <span class="token operator">|</span>-- router.ts
<span class="token operator">|</span>-- package-lock.json
<span class="token operator">|</span>-- package.json
<span class="token operator">|</span>-- tsconfig.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> express<span class="token punctuation">,</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">7001</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'server is running'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// router.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Router<span class="token punctuation">,</span> Request<span class="token punctuation">,</span> Response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Crowller <span class="token keyword">from</span> <span class="token string">'./crowller'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DellAnalyzer <span class="token keyword">from</span> <span class="token string">'./dellAnalyzer'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'hello world !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/getData'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> secret <span class="token operator">=</span> <span class="token string">'secretKey'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://www.dell-lee.com/typescript/demo.html?secret=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> analyzer <span class="token operator">=</span> DellAnalyzer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">new</span> <span class="token class-name">Crowller</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> analyzer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'getData Success!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ts编写express代码" tabindex="-1"><a class="header-anchor" href="#ts编写express代码" aria-hidden="true">#</a> TS编写express代码</h3>
<p>现在每次访问getData接口，就会生成新数据，为了防止过多的访问刷新，增加权限</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/getData'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>password <span class="token operator">===</span> <span class="token string">'123'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> secret <span class="token operator">=</span> <span class="token string">'secretKey'</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://www.dell-lee.com/typescript/demo.html?secret=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> analyzer <span class="token operator">=</span> DellAnalyzer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Crowller</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> analyzer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'getData Success!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'password Error!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>req.body返回值是undefined,然而编辑器中虽然引入了.d.ts文件，却没有报错。需要有body-parse这个express中间件<code v-pre>npm install body-parse --save</code>，中间件使用app.use(),必须在app.use(router之前)</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// index.ts</span>
<span class="token keyword">import</span> express<span class="token punctuation">,</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> bodyParse <span class="token keyword">from</span> <span class="token string">'body-parser'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParse<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> extended<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">7001</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'server is running'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>express库的类型定义文件 .d.ts 文件描述不准确（老框架）</li>
<li>当使用中间件的时候，对req res进行了修改，实际上类型并不能改变（例如当对req增加了新属性，但是使用的时候类型没有更新，会报错）</li>
</ul>
<h3 id="express类型定义文件" tabindex="-1"><a class="header-anchor" href="#express类型定义文件" aria-hidden="true">#</a> Express类型定义文件</h3>
<ul>
<li>.d.ts 文件类型定义不准确</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body           <span class="token comment">// const password: any</span>

<span class="token comment">// 修改对应.d.ts</span>
ReqBody <span class="token operator">=</span> <span class="token punctuation">{</span> password<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span>        <span class="token comment">// 随着node module的重新安装就失效了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RequestWithBody</span> <span class="token keyword">extends</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
  	<span class="token comment">// password: string | undefined;</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>中间件对req res进行了修改，但是类型不能修改（类型融合）</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// index.ts</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> extended<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunction<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  req<span class="token punctuation">.</span>teacherName <span class="token operator">=</span> <span class="token string">'dell'</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// custom.d.ts</span>
<span class="token keyword">declare</span> <span class="token keyword">namespace</span> Express <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
    teacherName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    
<span class="token comment">// touter.ts 编辑器提醒</span>
res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>teacherName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="登录功能的开发" tabindex="-1"><a class="header-anchor" href="#登录功能的开发" aria-hidden="true">#</a> 登录功能的开发</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> cookie-session --save
<span class="token function">npm</span> <span class="token function">install</span> @types/cookie-session -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// router.ts   用户进行登录并且 爬取/展示 数据</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Router<span class="token punctuation">,</span> Request<span class="token punctuation">,</span> Response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Crowller <span class="token keyword">from</span> <span class="token string">'./crowller'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DellAnalyzer <span class="token keyword">from</span> <span class="token string">'./dellAnalyzer'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">'fs'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> json <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'body-parser'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">RequestWithBody</span> <span class="token keyword">extends</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;html>
      &lt;body>
        &lt;a href="/getData">爬取内容&lt;/a>
        &lt;a href="/showData">展示内容&lt;/a>
        &lt;a href="/logout">退出&lt;/a>
      &lt;/body>
    &lt;/html>
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;html>
      &lt;body>
        &lt;form method="post" action="/login">
          &lt;input type="password" name="password" />
          &lt;button>登录&lt;/button>
        &lt;/form>
      &lt;/body>
    &lt;/html>
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> RequestWithBody<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
  <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'已经登录过'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>password <span class="token operator">===</span> <span class="token string">'123'</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'登录成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'登录失败'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/logout'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> RequestWithBody<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/getData'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> RequestWithBody<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> secret <span class="token operator">=</span> <span class="token string">'secretKey'</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://www.dell-lee.com/typescript/demo.html?secret=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> analyzer <span class="token operator">=</span> DellAnalyzer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Crowller</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> analyzer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'getData Success!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'请登录后爬取内容'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/showData'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> RequestWithBody<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> position <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'../data/course.json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'尚未爬取到内容'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'请登录后查看内容'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// index.ts</span>
<span class="token keyword">import</span> express<span class="token punctuation">,</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response<span class="token punctuation">,</span> NextFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> bodyParser <span class="token keyword">from</span> <span class="token string">'body-parser'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> cookieSession <span class="token keyword">from</span> <span class="token string">'cookie-session'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span><span class="token punctuation">;</span>

<span class="token comment">// 问题1: express 库的类型定义文件 .d.ts 文件类型描述不准确</span>
<span class="token comment">// 问题2: 当我使用中间件的时候，对 req 或者 res 做了修改之后呢，实际上类型并不能改变。</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> extended<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">cookieSession</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'session'</span><span class="token punctuation">,</span>
    keys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'caffrey go'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    maxAge<span class="token operator">:</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token comment">// 24 hours</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">7001</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'server is running'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<h3 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h3>
</li>
</ul>
<p>编写和使用自己的业务中间件</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// router.ts</span>
<span class="token keyword">const</span> <span class="token function-variable function">checkLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunction<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'请先登录'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//  router.get('/getData', checkLogin, (req: BodyRequest, res: Response) => {...}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口统一</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// util.ts</span>
<span class="token keyword">interface</span> <span class="token class-name">Result</span> <span class="token punctuation">{</span>
  success<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  errMsg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getResponseData <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> errMsg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Result <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>errMsg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      success<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      errMsg<span class="token punctuation">,</span>
      data
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    success<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// res.json(getResponseData(false, '数据不存在'));</span>
<span class="token comment">// res.json(getResponseData(true));</span>
<span class="token comment">// res.json(getResponseData(JSON.parse(result)));</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
