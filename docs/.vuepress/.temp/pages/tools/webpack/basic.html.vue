<template><div><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p><code v-pre>webpack</code> 是一个现代 JavaScript 应用程序的<em>静态模块打包器(module bundler)</em>。当 webpack 处理应用程序时，它会递归地构建一个<em>依赖关系图(dependency graph)</em>，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 <em>bundle</em>。</p>
<h3 id="面向过程开发" tabindex="-1"><a class="header-anchor" href="#面向过程开发" aria-hidden="true">#</a> 面向过程开发</h3>
<p><strong>特征：</strong> 一锅乱炖
在早期 <code v-pre>js</code> 能力还非常有限的时候，我们通过面向过程的方式把代码写在同一个<code v-pre>.js</code>文件中，一个面向过程的开发模式可能如下所示。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- index.html代码 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这里是我们网页的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
// index.js代码
var root = document.getElementById('root');

// header模块
var header = document.createElement('div');
header.innerText = 'header';
root.appendChild(header);

// sidebar模块
var sidebar = document.createElement('div');
sidebar.innerText = 'sidebar';
root.appendChild(sidebar);

// content模块
var content = document.createElement('div');
content.innerText = 'content';
root.appendChild(content);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面向对象开发" tabindex="-1"><a class="header-anchor" href="#面向对象开发" aria-hidden="true">#</a> 面向对象开发</h3>
<p><strong>特征：</strong> 面向对象开发模式便于代码维护，深入人心。
随着 <code v-pre>js</code> 的不断发展，它所能解决的问题也越来越多，如果再像<strong>面向过程</strong>那样把所有代码写在同一个<code v-pre>.js</code>文件中，那么代码将变得非常难以理解和维护，此时<strong>面向对象</strong>开发模式便出现了，一个面向对象开发模式可能如下所示。</p>
<p>在<code v-pre>index.html</code>中引入不同的模块：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- index.html代码 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这里是我们网页的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./src/header.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./src/sidebar.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./src/content.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>header.js</code>代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// header.js代码</span>
<span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> header <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  header<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'header'</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>sidebar.js</code>代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// sidebar.js代码</span>
<span class="token keyword">function</span> <span class="token function">Sidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> sidebar <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  sidebar<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'sidebar'</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>sidebar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>content.js</code>代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// content.js代码</span>
<span class="token keyword">function</span> <span class="token function">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> content <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  content<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'content'</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>index.js</code>代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Sidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不足：</strong> 以上的代码示例中，虽然使用<strong>面向对象</strong>开发模式解决了<strong>面向过程</strong>开发模式中的一些问题，但似乎又引入了一些新的问题。</p>
<ol>
<li>每一个模块都需要引入一个<code v-pre>.js</code>文件，随着模块的增多，这会影响页面性能</li>
<li>在<code v-pre>index.js</code>文件中，并不能直接看出模块的逻辑关系，必须去页面才能找到</li>
<li>在<code v-pre>index.html</code>页面中，文件的引入顺序必须严格按顺序来引入，例如：<code v-pre>index.js</code>必须放在最后引入，如果把<code v-pre>header.js</code>文件放在<code v-pre>index.js</code>文件后引入，那么代码会报错</li>
</ol>
<h3 id="现代开发模式" tabindex="-1"><a class="header-anchor" href="#现代开发模式" aria-hidden="true">#</a> 现代开发模式</h3>
<p><strong>特征：</strong> 模块化加载方案让前端开发进一步工程化
根据<strong>面向对象</strong>开发模式中的一系列问题，随后各种<strong>模块化</strong>加载的方案如雨后春笋，例如：<code v-pre>ES Module</code>、<code v-pre>AMD</code>、<code v-pre>CMD</code>以及<code v-pre>CommonJS</code>等，一个<code v-pre>ES Module</code>模块化加载方案可能如下所示。</p>
<p><code v-pre>index.html</code>代码：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- index.html代码 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这里是我们网页的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>header.js</code>代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// header.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> header <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  header<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'header'</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>sidebar.js</code>代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// sidebar.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Sidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> sidebar <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  sidebar<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'sidebar'</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>sidebar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>content.js</code>代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// content.js代码</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> content <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  content<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'content'</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>index.js</code>代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// index.js代码</span>
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">'./src/header.js'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Sidebar <span class="token keyword">from</span> <span class="token string">'./src/sidebar.js'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Content <span class="token keyword">from</span> <span class="token string">'./src/content.js'</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Sidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> 以上代码并不能直接在浏览器上执行，因为浏览器并不能直接识别<code v-pre>ES Module</code>代码，需要借助其他工具来进行翻译，此时 Webpack 就粉墨登场了。</p>
<h3 id="webpack打包" tabindex="-1"><a class="header-anchor" href="#webpack打包" aria-hidden="true">#</a> webpack打包</h3>
<p>不建议跟随此小结一起安装，此次示例仅仅作为一个例子，详细学习步骤请直接阅读下一章节<a href="https://wangtunan.github.io/blog/webpack/#%E5%AE%89%E8%A3%85" target="_blank" rel="noopener noreferrer">安装<ExternalLinkIcon/></a></p>
<h4 id="生成package-json文件" tabindex="-1"><a class="header-anchor" href="#生成package-json文件" aria-hidden="true">#</a> 生成package.json文件</h4>
<p>参数说明</p>
<p><code v-pre>-y</code>参数表示直接生成默认配置项的<code v-pre>package.json</code>文件，不加此参数需要一步步按需进行配置。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成的<code v-pre>package.json</code>文件：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"webpack-vuepress"</span><span class="token punctuation">,</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装webpack" tabindex="-1"><a class="header-anchor" href="#安装webpack" aria-hidden="true">#</a> 安装Webpack</h4>
<p>参数说明</p>
<p><code v-pre>-D</code>参数代表在本项目下安装 Webpack ，它是<code v-pre>--save-dev</code>的简写</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="修改代码" tabindex="-1"><a class="header-anchor" href="#修改代码" aria-hidden="true">#</a> 修改代码</h4>
<p>配置说明</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>webpack`默认打包路径到`dist`文件夹，打包后的`.js`文件名字叫`main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其他代码不动，将<code v-pre>index.html</code>中的<code v-pre>.js</code>文件改成如下引用方式(引用打包后的文件)：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- index.html代码 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这里是我们网页的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./dist/main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="webpack打包-1" tabindex="-1"><a class="header-anchor" href="#webpack打包-1" aria-hidden="true">#</a> Webpack打包</h4>
<p>参数说明</p>
<ol>
<li><code v-pre>npx webpack</code>代表在本项目下寻找 Webpack 打包命令，它区别于<code v-pre>npm</code>命令</li>
<li><code v-pre>index.js</code>参数代表本次打包的入口是<code v-pre>index.js</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ npx webpack index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打包结果： <img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/img2.png" alt="效果"></p>
<p>正如上面你所看到的那样，网页正确显示了我们期待的结果，这也是 Webpack 能为我们解决问题的一小部分能力，下面将正式开始介绍 Webpack 。</p>
<h2 id="loader的编写" tabindex="-1"><a class="header-anchor" href="#loader的编写" aria-hidden="true">#</a> loader的编写</h2>
<div class="custom-container tip"><p class="custom-container-title">Loader</p>
<p>​	loader实际上是一个函数，实现对模块代码的出</p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init
<span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli loader-utils -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">|</span>-- loaders
<span class="token operator">|</span>   <span class="token operator">|</span>-- replaceLoader.js
<span class="token operator">|</span>   <span class="token operator">|</span>-- replaceLoaderAsync.js
<span class="token operator">|</span>-- src
<span class="token operator">|</span>   <span class="token operator">|</span>-- index.js
<span class="token operator">|</span>-- package.json
<span class="token operator">|</span>-- webpack.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>webpack.config.js （resolveLoader：loader引用时查找位置配置）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"development"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// path.resolve(__dirname, "loaders/replaceLoaderAsync.js")</span>
  <span class="token literal-property property">resolveLoader</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"node_modules"</span><span class="token punctuation">,</span> <span class="token string">"./loaders"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// loader执行顺序从右到左</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"replaceLoader"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"replaceLoaderAsync"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Sumi"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>replaceLoader.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"Sumi"</span><span class="token punctuation">,</span> <span class="token string">"Enjoy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>replaceLoaderAsync.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// loader-utils更方便获取到this   （options.name === this.query.name）</span>
<span class="token keyword">const</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"loader-utils"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// this.async返回异步callback</span>
  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"Jerry"</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// callback返回更多数据</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>index.js：   <code v-pre>console.log(&quot;hello Jerry&quot;);</code></p>
</li>
<li>
<p>package.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack"</span>
  <span class="token punctuation">}</span>
  ......
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="plugin的编写" tabindex="-1"><a class="header-anchor" href="#plugin的编写" aria-hidden="true">#</a> plugin的编写</h2>
<div class="custom-container tip"><p class="custom-container-title">Plugin</p>
<p>​	plugin是一个类，在打包的hook时间点触发</p>
<p>​	基于发布订阅模式设计，是事件驱动的插件机制</p>
</div>
<h3 id="copyrightwebpackplugin" tabindex="-1"><a class="header-anchor" href="#copyrightwebpackplugin" aria-hidden="true">#</a> CopyrightWebpackPlugin</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CopyrightWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// compiler: webpack的实例对象, 存放了配置和打包的所有内容(https://webpack.js.org/api/compiler-hooks/)</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 同步hook由tap触发，函数没有callback参数</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>compile<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">"CopyrightWebpackPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"compile tab"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// compilation： 只存放这次打包的内容</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span>
      <span class="token string">"CopyrightWebpackPlugin"</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span><span class="token string">"copyright.txt"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">source</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">"copyright by caffrey"</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">20</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> CopyrightWebpackPlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> CopyrightWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./plugins/copyright-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"development"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CopyrightWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Sumi"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node调试" tabindex="-1"><a class="header-anchor" href="#node调试" aria-hidden="true">#</a> node调试</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack"</span><span class="token punctuation">,</span>
    <span class="token property">"debug"</span><span class="token operator">:</span> <span class="token string">"node --inspect --inspect-brk node_modules/webpack/bin/webpack.js"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>​		此时<code v-pre>npm run debug</code>和<code v-pre>npm run build</code>达到的效果是一样的，显示用node执行webpack.js可以允许外面传一些参数进去，例如<code v-pre>--inspect</code>、<code v-pre>--inspect-brk</code>分别表示<strong>要开启调试</strong>和<strong>在webpack第一行打一个断点</strong></p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PS E:<span class="token punctuation">\</span>webpack<span class="token punctuation">\</span>plugin<span class="token operator">></span> <span class="token function">npm</span> run debug

<span class="token operator">></span> plugin@1.0.0 debug E:<span class="token punctuation">\</span>webpack<span class="token punctuation">\</span>plugin
<span class="token operator">></span> <span class="token function">node</span> --inspect --inspect-brk node_modules/webpack/bin/webpack.js

Debugger listening on ws://127.0.0.1:9229/cb8dee01-7e07-4eb5-823a-603ef027795c
For help, see: https://nodejs.org/en/docs/inspector
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>npm run debug</code>后打开chrome<strong>浏览器控制台</strong>的node绿色按钮就可以看到调试过程</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CopyrightWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span>
      <span class="token string">"CopyrightWebpackPlugin"</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 断点调试</span>
        <span class="token keyword">debugger</span><span class="token punctuation">;</span>
        compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span><span class="token string">"copyright.txt"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">source</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">"copyright by caffrey"</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">20</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> CopyrightWebpackPlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/debug.png" alt=""></p>
<h2 id="bundler源码的编写" tabindex="-1"><a class="header-anchor" href="#bundler源码的编写" aria-hidden="true">#</a> bundler源码的编写</h2>
<h3 id="单个模块分析" tabindex="-1"><a class="header-anchor" href="#单个模块分析" aria-hidden="true">#</a> 单个模块分析</h3>
<h4 id="babel-parser-分析源代码-生成ast" tabindex="-1"><a class="header-anchor" href="#babel-parser-分析源代码-生成ast" aria-hidden="true">#</a> @babel/parser 分析源代码, 生成AST</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ast <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ast.program.body分析出抽象语法树</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>
  Node <span class="token punctuation">{</span>
    type: <span class="token string">'ImportDeclaration'</span>,
    start: <span class="token number">0</span>,
    end: <span class="token number">35</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    specifiers: <span class="token punctuation">[</span> <span class="token punctuation">[</span>Node<span class="token punctuation">]</span> <span class="token punctuation">]</span>,
    source: Node <span class="token punctuation">{</span>
      type: <span class="token string">'StringLiteral'</span>,
      start: <span class="token number">20</span>,
      end: <span class="token number">34</span>,
      loc: <span class="token punctuation">[</span>SourceLocation<span class="token punctuation">]</span>,
      extra: <span class="token punctuation">[</span>Object<span class="token punctuation">]</span>,
      value: <span class="token string">'./message.js'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  Node <span class="token punctuation">{</span>
    type: <span class="token string">'ExpressionStatement'</span>,
    start: <span class="token number">39</span>,
    end: <span class="token number">60</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    expression: Node <span class="token punctuation">{</span>
      type: <span class="token string">'CallExpression'</span>,
      start: <span class="token number">39</span>,
      end: <span class="token number">59</span>,
      loc: <span class="token punctuation">[</span>SourceLocation<span class="token punctuation">]</span>,
      callee: <span class="token punctuation">[</span>Node<span class="token punctuation">]</span>,
      arguments: <span class="token punctuation">[</span>Array<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="babel-traverse-分析抽象语法树的节点" tabindex="-1"><a class="header-anchor" href="#babel-traverse-分析抽象语法树的节点" aria-hidden="true">#</a> @babel/traverse 分析抽象语法树的节点</h4>
<p>dependencies为依赖的<strong>路径数组</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> dependencies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">ImportDeclaration</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> node <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        dependencies<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Node <span class="token punctuation">{</span>
  type: <span class="token string">'ImportDeclaration'</span>,
  start: <span class="token number">0</span>,
  end: <span class="token number">35</span>,
  loc: SourceLocation <span class="token punctuation">{</span>
    start: Position <span class="token punctuation">{</span> line: <span class="token number">1</span>, column: <span class="token number">0</span> <span class="token punctuation">}</span>,
    end: Position <span class="token punctuation">{</span> line: <span class="token number">1</span>, column: <span class="token number">35</span> <span class="token punctuation">}</span>  
  <span class="token punctuation">}</span>,
  specifiers: <span class="token punctuation">[</span>
    Node <span class="token punctuation">{</span>
      type: <span class="token string">'ImportDefaultSpecifier'</span>,      
      start: <span class="token number">7</span>,
      end: <span class="token number">14</span>,
      loc: <span class="token punctuation">[</span>SourceLocation<span class="token punctuation">]</span>,
      local: <span class="token punctuation">[</span>Node<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>,
  source: Node <span class="token punctuation">{</span>
    type: <span class="token string">'StringLiteral'</span>,
    start: <span class="token number">20</span>,
    end: <span class="token number">34</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    extra: <span class="token punctuation">{</span> rawValue: <span class="token string">'./message.js'</span>, raw: <span class="token string">'"./message.js"'</span> <span class="token punctuation">}</span>,
    value: <span class="token string">'./message.js'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路径转化" tabindex="-1"><a class="header-anchor" href="#路径转化" aria-hidden="true">#</a> 路径转化</h4>
<p>相对路径转化为绝对路径(或者是<strong>相对于根路径的相对路径</strong>)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> dirname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> newFile <span class="token operator">=</span> <span class="token string">"./"</span> <span class="token operator">+</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>path.join(dirname, node.source.value)</code>获取到绝对路径，加上<code v-pre>./</code>变成相对于bundler的相对路径</p>
<h4 id="babel-core-ast转可执行代码" tabindex="-1"><a class="header-anchor" href="#babel-core-ast转可执行代码" aria-hidden="true">#</a> @babel/core ast转可执行代码</h4>
<p>核心模块其中<strong>transformFromAst</strong>将ast转化为浏览器可以执行的代码，<strong>presets</strong>将ES6转化为ES5</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> babel<span class="token punctuation">.</span><span class="token function">transformFromAst</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use strict"</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> _message <span class="token operator">=</span> <span class="token function">_interopRequireDefault</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./message.js"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">_interopRequireDefault</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> obj <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">.</span>__esModule <span class="token operator">?</span> obj <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">"default"</span><span class="token operator">:</span> obj <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_message<span class="token punctuation">[</span><span class="token string">"default"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全部模块分析" tabindex="-1"><a class="header-anchor" href="#全部模块分析" aria-hidden="true">#</a> 全部模块分析</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">makeDependenciesGraph</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> entryModule <span class="token operator">=</span> <span class="token function">moduleAnalyser</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> graphArray <span class="token operator">=</span> <span class="token punctuation">[</span>entryModule<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> graphArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> item <span class="token operator">=</span> graphArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> dependencies <span class="token punctuation">}</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token keyword">in</span> dependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                graphArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">moduleAnalyser</span><span class="token punctuation">(</span>dependencies<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    graphArray<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        graph<span class="token punctuation">[</span>item<span class="token punctuation">.</span>filename<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">dependencies</span><span class="token operator">:</span> item<span class="token punctuation">.</span>dependencies<span class="token punctuation">,</span>
            <span class="token literal-property property">code</span><span class="token operator">:</span> item<span class="token punctuation">.</span>code<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> graph
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">'./src/index.js'</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    dependencies: <span class="token punctuation">{</span> <span class="token string">'./message.js'</span><span class="token builtin class-name">:</span> <span class="token string">'./src\\message.js'</span> <span class="token punctuation">}</span>,
    code: <span class="token string">'"use strict";\n'</span> +
      <span class="token string">'\n'</span> +
      <span class="token string">'var _message = _interopRequireDefault(require("./message.js"));\n'</span> +
      <span class="token string">'\n'</span> +
      <span class="token string">'function _interopRequireDefault(obj) { return obj &amp;&amp; obj.__esModule ? obj : { "default": obj }; }\n'</span> +
      <span class="token string">'\n'</span> +
      <span class="token string">'console.log(_message["default"]);'</span>
  <span class="token punctuation">}</span>,
  <span class="token string">'./src\\message.js'</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    dependencies: <span class="token punctuation">{</span> <span class="token string">'./word.js'</span><span class="token builtin class-name">:</span> <span class="token string">'./src\\word.js'</span> <span class="token punctuation">}</span>,
    code: <span class="token string">'"use strict";\n'</span> +
      <span class="token string">'\n'</span> +
      <span class="token string">'Object.defineProperty(exports, "__esModule", {\n'</span> +
      <span class="token string">'  value: true\n'</span> +
      <span class="token string">'});\n'</span> +
      <span class="token string">'exports["default"] = void 0;\n'</span> +
      <span class="token string">'\n'</span> +
      <span class="token string">'var _word = require("./word.js");\n'</span> +
      <span class="token string">'\n'</span> +
      <span class="token string">'var message = "say ".concat(_word.word);\n'</span> +
      <span class="token string">'var _default = message;\n'</span> +
      <span class="token string">'exports["default"] = _default;'</span>
  <span class="token punctuation">}</span>,
  <span class="token string">'./src\\word.js'</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    dependencies: <span class="token punctuation">{</span><span class="token punctuation">}</span>,
    code: <span class="token string">'"use strict";\n'</span> +
      <span class="token string">'\n'</span> +
      <span class="token string">'Object.defineProperty(exports, "__esModule", {\n'</span> +
      <span class="token string">'  value: true\n'</span> +
      <span class="token string">'});\n'</span> +
      <span class="token string">'exports.word = void 0;\n'</span> +
      <span class="token string">'var word = "hello";\n'</span> +
      <span class="token string">'exports.word = word;'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成代码" tabindex="-1"><a class="header-anchor" href="#生成代码" aria-hidden="true">#</a> 生成代码</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code v-pre>JSON.stringify(makeDependenciesGraph(entry))</code>生成的依赖图谱里需要构造<strong>require</strong>方法和<strong>exports</strong>对象</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">generateCode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">makeDependenciesGraph</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
		(function(graph){
			function require(module) { 
				function localRequire(relativePath) {
					return require(graph[module].dependencies[relativePath]);
				}
				var exports = {};
				(function(require, exports, code){
					eval(code)
				})(localRequire, exports, graph[module].code);
				return exports;
			};
			require('</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>entry<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">')
		})(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>graph<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">);
	</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@babel/parser"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@babel/traverse"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>
<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@babel/core"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">moduleAnalyser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">"utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> ast <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dependencies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">ImportDeclaration</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> node <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> dirname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> newFile <span class="token operator">=</span> <span class="token string">"./"</span> <span class="token operator">+</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      dependencies<span class="token punctuation">[</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> newFile<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> babel<span class="token punctuation">.</span><span class="token function">transformFromAst</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    filename<span class="token punctuation">,</span>
    dependencies<span class="token punctuation">,</span>
    code<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">makeDependenciesGraph</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> entryModule <span class="token operator">=</span> <span class="token function">moduleAnalyser</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> graphArray <span class="token operator">=</span> <span class="token punctuation">[</span>entryModule<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> graphArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> graphArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> dependencies <span class="token punctuation">}</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token keyword">in</span> dependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        graphArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">moduleAnalyser</span><span class="token punctuation">(</span>dependencies<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  graphArray<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    graph<span class="token punctuation">[</span>item<span class="token punctuation">.</span>filename<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">dependencies</span><span class="token operator">:</span> item<span class="token punctuation">.</span>dependencies<span class="token punctuation">,</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> item<span class="token punctuation">.</span>code<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> graph<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateCode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">makeDependenciesGraph</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
		(function(graph){
			function require(module) { 
				function localRequire(relativePath) {
					return require(graph[module].dependencies[relativePath]);
				}
				var exports = {};
				(function(require, exports, code){
					eval(code)
				})(localRequire, exports, graph[module].code);
				return exports;
			};
			require('</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>entry<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">')
		})(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>graph<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">);
	</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">generateCode</span><span class="token punctuation">(</span><span class="token string">"./src/index.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块打包工具" tabindex="-1"><a class="header-anchor" href="#模块打包工具" aria-hidden="true">#</a> 模块打包工具？</h2>
<p>webpack最早是一个js的模块打包工具，但是现在，webpack实际上已经是一个<strong>模块打包工具</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// commonjs</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token operator">~</span>
<span class="token keyword">const</span> <span class="token operator">~</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'src'</span><span class="token punctuation">)</span>

<span class="token comment">// ESModule</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token operator">~</span>
<span class="token keyword">import</span> <span class="token operator">~</span> <span class="token keyword">from</span> <span class="token string">"src"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.webpackjs.com/concepts/modules/" target="_blank" rel="noopener noreferrer">webpack module<ExternalLinkIcon/></a></p>
<p><a href="https://www.webpackjs.com/api/module-methods/" target="_blank" rel="noopener noreferrer">module methods<ExternalLinkIcon/></a></p>
<p><a href="https://www.webpackjs.com/api/module-variables/" target="_blank" rel="noopener noreferrer">module variables<ExternalLinkIcon/></a></p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<h3 id="全局安装" tabindex="-1"><a class="header-anchor" href="#全局安装" aria-hidden="true">#</a> 全局安装</h3>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>如果你只是想做一个 Webpack 的 Demo 案例，那么全局安装方法可能会比较适合你。如果你是在实际生产开发中使用，那么推荐你使用本地安装方法。</p>
<p><code v-pre>webpack4.0+</code>的版本，必须安装<code v-pre>webpack-cli</code>，<code v-pre>-g</code>命令代表全局安装的意思</p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3>
<p>参数说明</p>
<p>通过<code v-pre>npm install</code>安装的模块，对应的可通过<code v-pre>npm uninstall</code>进行卸载</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> uninstall webpack webpack-cli -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="本地安装-推荐" tabindex="-1"><a class="header-anchor" href="#本地安装-推荐" aria-hidden="true">#</a> 本地安装(推荐)</h3>
<p>参数说明</p>
<p>本地安装的<code v-pre>Webpack</code>意思是，只在你当前项目下有效。而通过全局安装的<code v-pre>Webpack</code>，如果两个项目的<code v-pre>Webpack</code>主版本不一致，则可能会造成其中一个项目无法正常打包。本地安装方式也是实际开发中推荐的一种<code v-pre>Webpack</code>安装方式。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli -D 或者 <span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="版本号安装" tabindex="-1"><a class="header-anchor" href="#版本号安装" aria-hidden="true">#</a> 版本号安装</h3>
<p>参数说明</p>
<p>如果你对<code v-pre>Webpack</code>的具体版本有严格要求，那么可以先去github的<code v-pre>Webpack</code>仓库查看历史版本记录或者使用<code v-pre>npm view webpack versions</code>查看<code v-pre>Webpack</code>的<code v-pre>npm</code>历史版本记录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>// 查看webpack的历史版本记录
$ <span class="token function">npm</span> view webpack versions

// 按版本号安装
$ <span class="token function">npm</span> <span class="token function">install</span> webpack@4.25.0 -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
