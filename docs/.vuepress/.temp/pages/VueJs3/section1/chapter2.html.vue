<template><div><h1 id="框架设计的核心要素" tabindex="-1"><a class="header-anchor" href="#框架设计的核心要素" aria-hidden="true">#</a> 框架设计的核心要素</h1>
<h2 id="提升用户开发体验" tabindex="-1"><a class="header-anchor" href="#提升用户开发体验" aria-hidden="true">#</a> 提升用户开发体验</h2>
<p>对于开发者来说，精准的错误警告和 DevTools 可以节省很多问题定位时间</p>
<h2 id="控制框架代码的体积" tabindex="-1"><a class="header-anchor" href="#控制框架代码的体积" aria-hidden="true">#</a> 控制框架代码的体积</h2>
<p>Vue.js 在源码通过区分 dev 开发与 prod 生产环境，从而将比如错误提示这类代码移除，从而降低代码体积</p>
<h2 id="良好的tree-shaking" tabindex="-1"><a class="header-anchor" href="#良好的tree-shaking" aria-hidden="true">#</a> 良好的Tree-Shaking</h2>
<p>🔥 基于ESM的静态代码分析实现了dead code的移除，对于明确没有副作用的代码，可以使用<code v-pre>/*#__PURE__/ </code>这种 webpack 、rollup 都支持的语法告诉构建工具可以放心地进行 Tree-Shaking</p>
<blockquote>
<p>Vue.js源码从大量使用了该注释，实现对顶级调用函数的Tree-Shaking</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 顶级调用</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 函数内调用</span>
<span class="token punctuation">}</span>

<span class="token comment">// eg.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isHTMLTag <span class="token operator">=</span> <span class="token comment">/*#__PURE__/ makeMap(HTML_TAGS)
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持输出多种构建产物" tabindex="-1"><a class="header-anchor" href="#支持输出多种构建产物" aria-hidden="true">#</a> 支持输出多种构建产物</h2>
<ol>
<li>
<p>如果是浏览器直接脚本引入，可以打包为 iife 直接引用；</p>
</li>
<li>
<p>如果是esm，浏览器通过设置 script 标签的 type 为 module 即可引入使用<code v-pre>vue.esm-browser.js</code>；</p>
<p>同时考虑到打包工具使用的情况，提供了<code v-pre>vue.esm-bunder.js</code>，将<code v-pre>__DEV__</code>替换成了<code v-pre>process.env.NODE_ENV !== 'production'</code>，由 webpack 配置来决定构建资源的目标环境（最终效果都是一样的，这些代码都只会出现在开发环境）；</p>
</li>
<li>
<p>如果是 CommonJS 的 Node.js 环境，针对于 SSR 的情况，则需要打包出 cjs 的模块形式；</p>
</li>
</ol>
<blockquote>
<p>无论是 webpack 还是 rollup，在寻找资源时，如果 package.json 中存在 module 字段，会优先使用 module 字段指向的资源来代替 main 字段指向的资源：</p>
</blockquote>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// Vue.js 源码中的package/vue/package.json文件</span>
<span class="token punctuation">{</span>
  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>
  <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"dist/vue.esm-bunder.js"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特性开关" tabindex="-1"><a class="header-anchor" href="#特性开关" aria-hidden="true">#</a> 特性开关</h2>
<ol>
<li>
<p>对于用户关闭的特性，利用 Tree-Shaking 排除这些代码在最终资源之外</p>
</li>
<li>
<p>提升框架设计的灵活性，用户可以选择是否需要使用历史遗留的 API</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// webpack.DefinePlugin 配置</span>
<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">__VUE_OPTIONS_API__</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>  <span class="token comment">// 开启特性</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>🔥 通过特性开关，最终作用到源码的<code v-pre>__VUE_OPTIONS_API__</code>，如果我们明确只需要composition API，不需要 option API，可以减少最终的代码构建体积</p>
<h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// utils</span>
<span class="token keyword">let</span> handleError <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callWithErrorHandler</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">registerErrorHandler</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    handlerError <span class="token operator">=</span> fn
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">callWithErrorHandler</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
    fn <span class="token operator">&amp;&amp;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将捕获到的错误传递给用户的错误处理程序</span>
    <span class="token function">handeError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个函数调用，不仅对错误进行了处理，同时开放了错误处理程序的注册给用户</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> utils <span class="token keyword">from</span> <span class="token string">'utils.js'</span>

utils<span class="token punctuation">.</span><span class="token function">registerErrorHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

utils<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🔥 这便是 Vue.js 错误处理的原理，用户可以选择忽略错误，也可以注册错误上报程序收集给监控系统</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="良好的ts类型支持" tabindex="-1"><a class="header-anchor" href="#良好的ts类型支持" aria-hidden="true">#</a> 良好的TS类型支持</h2>
<p>使用 TS 编写代码与TS类型支持友好是两回事，需要花大力气做类型推导，还需要考虑 TSX 的支持。</p>
</div></template>
