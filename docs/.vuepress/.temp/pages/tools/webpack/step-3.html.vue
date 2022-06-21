<template><div><h1 id="webpack打包配置" tabindex="-1"><a class="header-anchor" href="#webpack打包配置" aria-hidden="true">#</a> webpack打包配置</h1>
<h2 id="什么是loader" tabindex="-1"><a class="header-anchor" href="#什么是loader" aria-hidden="true">#</a> 什么是loader？</h2>
<div class="custom-container tip"><p class="custom-container-title">概念</p>
<p><code v-pre>loader</code>是一种打包规则，它告诉了 Webpack 在遇到非<code v-pre>.js</code>文件时，应该如何处理这些文件</p>
<p><code v-pre>loader</code>有如下几种固定的运用规则：</p>
<ul>
<li>使用<code v-pre>test</code>正则来匹配相应的文件</li>
<li>使用<code v-pre>use</code>来添加文件对应的<code v-pre>loader</code></li>
<li>对于多个<code v-pre>loader</code>而言，从 <strong>右到左</strong> 依次调用</li>
</ul>
</div>
<h2 id="使用loader打包图片" tabindex="-1"><a class="header-anchor" href="#使用loader打包图片" aria-hidden="true">#</a> 使用loader打包图片</h2>
<h3 id="_1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖" aria-hidden="true">#</a> 1.安装依赖</h3>
<p>打包图片需要用到<code v-pre>file-loader</code>或者<code v-pre>url-loader</code>，需使用<code v-pre>npm install</code>进行安装</p>
<p>一点小改动:</p>
<p>在打包图片之前，让我们把<code v-pre>index.html</code>移动到上一节打包后的<code v-pre>dist</code>目录下，<code v-pre>index.html</code>中相应的<code v-pre>.js</code>引入也需要修改一下，像下面这样</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-添加打包图片规则" tabindex="-1"><a class="header-anchor" href="#_2-添加打包图片规则" aria-hidden="true">#</a> 2.添加打包图片规则</h3>
<p>对于打包图片，我们需要在<code v-pre>webpack.config.js</code>中进行相应的配置，它可以像下面这样</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// path为Node的核心模块</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'file-loader'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-改写index-js" tabindex="-1"><a class="header-anchor" href="#_3-改写index-js" aria-hidden="true">#</a> 3.改写<code v-pre>index.js</code></h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> avatar <span class="token keyword">from</span> <span class="token string">'./avatar.jpg'</span>

<span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> avatar
root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-打包结果" tabindex="-1"><a class="header-anchor" href="#_4-打包结果" aria-hidden="true">#</a> 4.打包结果</h3>
<p>打包后的项目目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">|</span>-- dist
<span class="token operator">|</span>   <span class="token operator">|</span>-- bd7a45571e4b5ccb8e7c33b7ce27070a.jpg
<span class="token operator">|</span>   <span class="token operator">|</span>-- main.js
<span class="token operator">|</span>   <span class="token operator">|</span>-- index.html
<span class="token operator">|</span>-- index.js
<span class="token operator">|</span>-- avatar.jpg
<span class="token operator">|</span>-- package.json
<span class="token operator">|</span>-- webpack.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-3-1.png" alt="打包结果"></p>
<h3 id="运用占位符" tabindex="-1"><a class="header-anchor" href="#运用占位符" aria-hidden="true">#</a> 运用占位符</h3>
<p>在以上打包图片的过程中，我们发现打包生成的图片好像名字是一串乱码，如果我们要原样输出原图片的名字的话，又该如何进行配置呢？这个问题，可以使用 <strong>占位符</strong> 进行解决。</p>
<p>占位符说明</p>
<p>文件占位符它有一些固定的规则，像下面这样：</p>
<ul>
<li><code v-pre>[name]</code>代表原本文件的名字</li>
<li><code v-pre>[ext]</code>代表原本文件的后缀</li>
<li><code v-pre>[hash]</code>代表一个<code v-pre>md5</code>的唯一编码</li>
</ul>
<p>根据占位符的规则再次改写<code v-pre>webpack.config.js</code>文件，</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// path为Node的核心模块</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'file-loader'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'[name]_[hash].[ext]'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面占位符的运用，打包生成的图片，它的名字如下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">|</span>-- dist
<span class="token operator">|</span>   <span class="token operator">|</span>-- avatar_bd7a45571e4b5ccb8e7c33b7ce27070a.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用loader打包css" tabindex="-1"><a class="header-anchor" href="#使用loader打包css" aria-hidden="true">#</a> 使用loader打包CSS</h2>
<div class="custom-container tip"><p class="custom-container-title">打包说明</p>
<p>样式文件分为几种情况，每一种都需要不同的<code v-pre>loader</code>来处理：</p>
<ol>
<li>普通<code v-pre>.css</code>文件，使用<code v-pre>style-loader</code>和<code v-pre>css-loader</code>来处理</li>
<li><code v-pre>.less</code>文件，使用<code v-pre>less-loader</code>来处理</li>
<li><code v-pre>.sass或者.scss</code>文件，需要使用<code v-pre>sass-loader</code>来处理</li>
<li><code v-pre>.styl</code>文件，需要使用<code v-pre>stylus-loader</code>来处理</li>
</ol>
</div>
<h3 id="打包css文件" tabindex="-1"><a class="header-anchor" href="#打包css文件" aria-hidden="true">#</a> 打包css文件</h3>
<p>安装依赖</p>
<p>首先安装<code v-pre>style-loader</code>和<code v-pre>css-loader</code></p>
<p>改写webpack配置文件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// path为Node的核心模块</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'file-loader'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'[name]_[hash].[ext]'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根目录下创建<code v-pre>index.css</code></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.avatar</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改写<code v-pre>index.js</code>文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> avatar <span class="token keyword">from</span> <span class="token string">'./avatar.jpg'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> avatar<span class="token punctuation">;</span>
img<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'avatar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包结果" tabindex="-1"><a class="header-anchor" href="#打包结果" aria-hidden="true">#</a> <strong>打包结果</strong></h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-3-2.png" alt="css打包结果"></p>
<h3 id="打包sass文件" tabindex="-1"><a class="header-anchor" href="#打包sass文件" aria-hidden="true">#</a> 打包Sass文件</h3>
<p>安装依赖</p>
<p>需要安装<code v-pre>sass-loader</code>和<code v-pre>node-sass</code></p>
<p>改写<code v-pre>webpack.config.js</code>文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// path为Node的核心模块</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'file-loader'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'[name]_[hash].[ext]'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(sass|scss)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span><span class="token string">'sass-loader'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根目录下添加<code v-pre>index-sass.sass</code>文件</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token selector">.avatar-sass</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改写<code v-pre>index.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> avatar <span class="token keyword">from</span> <span class="token string">'./avatar.jpg'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./index-sass.sass'</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> avatar<span class="token punctuation">;</span>
img<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'avatar-sass'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面的配置和代码改写后，再次打包，打包的结果会是下面这个样子</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-3-3.png" alt="打包结果"></p>
<h3 id="自动添加css厂商前缀" tabindex="-1"><a class="header-anchor" href="#自动添加css厂商前缀" aria-hidden="true">#</a> 自动添加CSS厂商前缀</h3>
<p>当我们在<code v-pre>css</code>文件中写一些需要处理兼容性的样式的时候，需要我们分别对于不同的浏览器书添加不同的厂商前缀，使用<code v-pre>postcss-loader</code>可以帮我们在<code v-pre>webpack</code>打包的时候自动添加这些厂商前缀。</p>
<p>安装依赖</p>
<p>自动添加厂商前缀需要<code v-pre>npm install</code>安装<code v-pre>postcss-loader</code>和<code v-pre>autoprefixer</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> postcss-loader autoprefixer -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改<code v-pre>index-sass.sass</code></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.avatar-sass</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>50px<span class="token punctuation">,</span>50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在修改<code v-pre>sass</code>文件代码后，我们需要对<code v-pre>webpack.config.js</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// path为Node的核心模块</span>
const path = require('path');

module.exports = <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> /\.(png|jpg|gif)$/<span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">{</span>
          loader<span class="token operator">:</span> 'file-loader'<span class="token punctuation">,</span>
          options<span class="token operator">:</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> '<span class="token punctuation">[</span>name<span class="token punctuation">]</span>_<span class="token punctuation">[</span>hash<span class="token punctuation">]</span>.<span class="token punctuation">[</span>ext<span class="token punctuation">]</span>'
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> /\.css$/<span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>'style-loader'<span class="token punctuation">,</span> 'css-loader'<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> /\.(sass|scss)$/<span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>'style-loader'<span class="token punctuation">,</span>'css-loader'<span class="token punctuation">,</span>'sass-loader'<span class="token punctuation">,</span>'postcss-loader'<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根目录下添加<code v-pre>postcss.config.js</code>，并添加代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'autoprefixer'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面的配置，我们再次打包运行，在浏览器中运行<code v-pre>index.html</code>，它的结果如下图所示</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-3-4.png" alt="打包运行结果"></p>
<h3 id="模块化打包css文件" tabindex="-1"><a class="header-anchor" href="#模块化打包css文件" aria-hidden="true">#</a> 模块化打包CSS文件</h3>
<p>概念</p>
<p><code v-pre>CSS</code>的模块化打包的理解是：除非我主动引用你的样式，否则你打包的样式不能影响到我。</p>
<p>根目录下添加<code v-pre>createAvatar.js</code>文件，并填写下面这段代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> avatar <span class="token keyword">from</span> <span class="token string">'./avatar.jpg'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">CreateAvatar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  img<span class="token punctuation">.</span>src <span class="token operator">=</span> avatar<span class="token punctuation">;</span>
  img<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'avatar-sass'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改写<code v-pre>index.js</code>，引入<code v-pre>createAvatar.js</code>并调用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> avatar <span class="token keyword">from</span> <span class="token string">'./avatar.jpg'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> createAvatar <span class="token keyword">from</span> <span class="token string">'./createAvatar'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./index-sass.sass'</span><span class="token punctuation">;</span>

<span class="token function">createAvatar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> avatar<span class="token punctuation">;</span>
img<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'avatar-sass'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>打包运行</strong></p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-3-5.png" alt="打包运行"></p>
<p>我们可以看到，在<code v-pre>createAvatar.js</code>中，我们写的<code v-pre>img</code>标签的样式，它受<code v-pre>index-sass.sass</code>样式文件的影响，如果要消除这种影响，需要我们开启对<code v-pre>css</code>样式文件的模块化打包。</p>
<p>进一步改写<code v-pre>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// path为Node的核心模块</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'file-loader'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'[name]_[hash].[ext]'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(sass|scss)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'sass-loader'</span><span class="token punctuation">,</span> <span class="token string">'postcss-loader'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启<code v-pre>css</code>模块化打包后，我们需要在<code v-pre>index.js</code>中做一点小小的改动，像下面这样子</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> avatar <span class="token keyword">from</span> <span class="token string">'./avatar.jpg'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> createAvatar <span class="token keyword">from</span> <span class="token string">'./createAvatar'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> style <span class="token keyword">from</span>  <span class="token string">'./index-sass.sass'</span><span class="token punctuation">;</span>

<span class="token function">createAvatar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> avatar<span class="token punctuation">;</span>
img<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>style<span class="token punctuation">[</span><span class="token string">'avatar-sass'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打包运行后，我们发现使用<code v-pre>createAvatar.js</code>创建出来的<code v-pre>img</code>没有受到样式文件的影响，证明我们的<code v-pre>css</code>模块化配置已经生效，下图是<code v-pre>css</code>模块化打包的结果：</p>
<img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-3-6.png" alt="打包结果" style="zoom:50%;" />
<h2 id="使用webpackplugin" tabindex="-1"><a class="header-anchor" href="#使用webpackplugin" aria-hidden="true">#</a> 使用WebpackPlugin</h2>
<div class="custom-container tip"><p class="custom-container-title">理解</p>
<p><code v-pre>plugin</code>的理解是：当 Webpack 运行到某一个阶段时，可以使用<code v-pre>plugin</code>来帮我们做一些事情。</p>
<p>在使用<code v-pre>plugin</code>之前，我们先来改造一下我们的代码，首先删掉无用的文件，随后在根目录下新建一个<code v-pre>src</code>文件夹，并把<code v-pre>index.js</code>移动到<code v-pre>src</code>文件夹下，移动后你的目录看起来应该是下面这样子的</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> dist
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span><span class="token operator">--</span> src
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> postcss<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来再来处理一下<code v-pre>index.js</code>文件的代码，写成下面这样</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/index.js</span>
<span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'hello,world'</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后我们来处理一下我们的<code v-pre>webpack.config.js</code>文件，它的改动有下面这些</p>
<ul>
<li>因为<code v-pre>index.js</code>文件的位置变动了，我们需要改动一下<code v-pre>entry</code></li>
<li>删除掉我们配置的所有<code v-pre>loader</code>规则 按照上面的改动后，<code v-pre>webpack.config.js</code>中的代码看起来是下面这样的</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'main.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#html-webpack-plugin" aria-hidden="true">#</a> html-webpack-plugin</h3>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p><code v-pre>html-webpack-plugin</code>可以让我们使用固定的模板，在每次打包的时候 <strong>自动生成</strong> 一个<code v-pre>index.html</code>文件，并且它会 <strong>自动</strong> 帮我们引入我们打包后的<code v-pre>.js</code>文件</p>
</div>
<p>使用如下命令安装<code v-pre>html-webpack-plugin</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> html-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code v-pre>src</code>目录下创建<code v-pre>index.html</code>模板文件，它的代码可以写成下面这样子</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Html 模板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为我们要使用<code v-pre>html-webpack-plugin</code>插件，所以我们需要再次改写<code v-pre>webpack.config.js</code>文件(具体改动部分见高亮部分)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'src/index.html'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'main.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在完成上面的配置后，我们使用<code v-pre>npm run bundle</code>命令来打包一下测试一下，在打包完毕后，我们能在<code v-pre>dist</code>目录下面，看到<code v-pre>index.html</code>中的代码变成下面这样子</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>HTML模板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现，以上<code v-pre>index.html</code>的结构，正是我们在<code v-pre>src</code>目录下<code v-pre>index.html</code>模板的结构，并且还能发现，在打包完成后，还自动帮我们引入了打包输出的<code v-pre>.js</code>文件，这正是<code v-pre>html-webpack-plugin</code>的基本功能，当然它还有其它更多的功能，我们将在后面进行详细的说明。</p>
<h3 id="clean-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#clean-webpack-plugin" aria-hidden="true">#</a> clean-webpack-plugin</h3>
<div class="custom-container tip"><p class="custom-container-title">理解</p>
<p><code v-pre>clean-webpack-plugin</code>的理解是：它能帮我们在打包之前 <strong>自动删除</strong> <code v-pre>dist</code>打包目录及其目录下所有文件，不用我们手动进行删除。</p>
</div>
<p>我们使用如下命令来安装<code v-pre>clean-webpack-plugin</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> clean-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完毕以后，我们同样需要在<code v-pre>webpack.config.js</code>中进行配置(改动部分参考高亮代码块)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'src/index.html'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'main.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在完成以上配置后，我们使用<code v-pre>npm run bundle</code>打包命令进行打包，它的打包结果请自行在你的项目下观看自动清理<code v-pre>dist</code>目录的实时效果。</p>
<p>在使用<code v-pre>WebpackPlugin</code>小节，我们只介绍了两种常用的<code v-pre>plugin</code>，更多<code v-pre>plugin</code>的用法我们将在后续进行学习，你也可以点击<a href="https://webpack.js.org/plugins" target="_blank" rel="noopener noreferrer">Webpack Plugins<ExternalLinkIcon/></a>来学习更多官网推荐的<code v-pre>plugin</code>用法。</p>
<h2 id="entry和output" tabindex="-1"><a class="header-anchor" href="#entry和output" aria-hidden="true">#</a> Entry和Output</h2>
<h3 id="多个入口文件" tabindex="-1"><a class="header-anchor" href="#多个入口文件" aria-hidden="true">#</a> 多个入口文件</h3>
<p>在我们之前的所有<code v-pre>entry</code>配置中，仅仅只有一个入口文件，假设现在我们有这样一个需求：需要把<code v-pre>index.js</code>打包两遍，一个叫<code v-pre>main.js</code>，另外一个叫<code v-pre>sub.js</code>，那么我们应该在<code v-pre>entry</code>进行如下的配置：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'main.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：如果我们仅仅只是调整了<code v-pre>entry</code>配置，没有进行<code v-pre>output</code>配置修改的话，则会打包错误。原因是<code v-pre>output</code>打包后的文件都叫<code v-pre>main.js</code>，但我们<code v-pre>entry</code>却有两个入口文件，因此会造成错误，所以我们同样需要对<code v-pre>output</code>配置进行修改：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用[name]占位符，打包结果为main.js，sub.js</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进行如上配置后，<code v-pre>dist/index.html</code>文件中<code v-pre>js</code>的引用如下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sub.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cdn引用" tabindex="-1"><a class="header-anchor" href="#cdn引用" aria-hidden="true">#</a> CDN引用</h3>
<p>在打包后，把静态资源发布到<code v-pre>CDN</code>是一种常见的提高网页性能的手段，正如你在上面所看到的的那样，我们现在的打包方式并不能实现<code v-pre>CDN</code>引用，需要我们进行如下的配置：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 假设一个CDN地址</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">'www.cdn.com/wangtunan'</span><span class="token punctuation">,</span>
    <span class="token comment">// 使用[name]占位符，打包结果为main.js，sub.js</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的配置完毕，我们打包后<code v-pre>dist/index.html</code>的<code v-pre>js</code>引用效果如下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>www.cdn.com/wangtunan/main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>www.cdn.com/wangtunan/sub.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置sourcemap" tabindex="-1"><a class="header-anchor" href="#配置sourcemap" aria-hidden="true">#</a> 配置SourceMap</h2>
<p>理解</p>
<p><code v-pre>source-map</code>的理解：它是一种映射关系，它映射了打包后的代码和源代码之间的对应关系，一般通过<code v-pre>devtool</code>来配置。</p>
<p>以下是官方提供的<code v-pre>devtool</code>各个属性的解释以及打包速度对比图：</p>
<p><img src="https://wangtunan.github.io/blog/assets/img/16.495d7697.png" alt="devtool"></p>
<p>通过上图我们可以看出，良好的<code v-pre>source-map</code>配置不仅能帮助我们提高打包速度，同时在代码维护和调错方面也能有很大的帮助，一般来说，<code v-pre>source-map</code>的最佳实践是下面这样的：</p>
<ul>
<li>开发环境下<code v-pre>development</code>：推荐将<code v-pre>devtool</code>设置成<code v-pre>cheap-module-eval-source-map</code></li>
<li>生产环境下<code v-pre>production</code>：推荐将<code v-pre>devtool</code>设置成<code v-pre>cheap-module-source-map</code></li>
</ul>
<h2 id="使用webpackdevserver" tabindex="-1"><a class="header-anchor" href="#使用webpackdevserver" aria-hidden="true">#</a> 使用WebpackDevServer</h2>
<div class="custom-container tip"><p class="custom-container-title">理解</p>
<p><code v-pre>webpack-dev-server</code>的理解：它能帮助我们在源代码更改的情况下，<strong>自动</strong> 帮我们打包我们的代码并 <strong>启动</strong> 一个小型的服务器。如果与热更新一起使用，它能帮助我们高效的开发。</p>
</div>
<p>自动打包的方案，通常来说有如下几种：</p>
<ul>
<li><code v-pre>watch</code>参数自动打包：它是在打包命令后面跟了一个<code v-pre>--watch</code>参数，它虽然能帮我们自动打包，但我们任然需要手动刷新浏览器，同时它不能帮我们在本地启动一个小型服务器，一些<code v-pre>http</code>请求不能通过。</li>
<li><code v-pre>webpack-dev-server</code>插件打包(推荐)：它是我们推荐的一种自动打包方案，在开发环境下使用尤其能帮我们高效的开发，它能解决<code v-pre>watch</code>参数打包中的问题，如果我们与热更新<code v-pre>HMR</code>一起使用，我们将拥有非常良好的开发体验。</li>
</ul>
<h3 id="watch参数自动打包" tabindex="-1"><a class="header-anchor" href="#watch参数自动打包" aria-hidden="true">#</a> watch参数自动打包</h3>
<p>使用<code v-pre>watch</code>参数进行打包，我们需要在<code v-pre>package.json</code>中新增一个<code v-pre>watch</code>打包命令，它的配置如下</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"bundle"</span><span class="token operator">:</span> <span class="token string">"webpack"</span><span class="token punctuation">,</span>
    <span class="token property">"watch"</span><span class="token operator">:</span> <span class="token string">"webpack --watch"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在配置好上面的打包命令后，我们使用<code v-pre>npm run watch</code>命令进行打包，然后在浏览器中运行<code v-pre>dist</code>目录下的<code v-pre>index.html</code>，运行后，我们尝试修改<code v-pre>src/index.js</code>中的代码，例如把<code v-pre>hello,world</code>改成<code v-pre>hello,dell-lee</code>，改动完毕后，我们刷新一下浏览器，会发现浏览器成功输出<code v-pre>hello,dell-lee</code>，这也证明了<code v-pre>watch</code>参数确实能自动帮我们进行打包。</p>
<h3 id="webpack-dev-server打包" tabindex="-1"><a class="header-anchor" href="#webpack-dev-server打包" aria-hidden="true">#</a> webpack-dev-server打包</h3>
<p>要使用<code v-pre>webpack-dev-server</code>，我们需要使用如下命令进行安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> webpack-dev-server -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完毕后，我们和<code v-pre>watch</code>参数配置打包命令一样，也需要新增一个打包命令，在<code v-pre>package.json</code>中做如下改动：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// 其它配置</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"bundle"</span><span class="token operator">:</span> <span class="token string">"webpack"</span><span class="token punctuation">,</span>
    <span class="token property">"watch"</span><span class="token operator">:</span> <span class="token string">"webpack --watch"</span><span class="token punctuation">,</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack-dev-server"</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完打包命令后，我们最后需要对<code v-pre>webpack.config.js</code>做一下处理：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 以dist为基础启动一个服务器，服务器运行在4200端口上，每次启动时自动打开浏览器</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">'dist'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">4200</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上都配置完毕后，我们使用<code v-pre>npm run dev</code>命令进行打包，它会自动帮我们打开浏览器，现在你可以在<code v-pre>src/index.js</code>修改代码，再在浏览器中查看效果，它会有惊喜的哦，ღ( ´･ᴗ･` )比心</p>
<p>这一小节主要介绍了如何让工具自动帮我们打包，下一节我们将学习模块热更新(HMR)。</p>
<h2 id="模块热更新-hmr" tabindex="-1"><a class="header-anchor" href="#模块热更新-hmr" aria-hidden="true">#</a> 模块热更新(HMR)</h2>
<div class="custom-container tip"><p class="custom-container-title">理解</p>
<p>模块热更新(HMR)的理解：它能够让我们在不刷新浏览器(或自动刷新)的前提下，在运行时帮我们更新最新的代码。</p>
</div>
<p>模块热更新(HMR)已内置到 Webpack ,我们只需要在<code v-pre>webpack.config.js</code>中像下面这样简单的配置即可，无需安装别的东西。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">'dist'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>    <span class="token comment">// 启用模块热更新</span>
    <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 模块热更新启动失败时，不重新刷新浏览器</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 其它插件</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在模块热更新(HMR)配置完毕后，我们现在来想一下，什么样的代码是我们希望能够热更新的，我们发现大多数情况下，我们似乎只需要关心两部分内容：<code v-pre>CSS</code>文件和<code v-pre>.js</code>文件，根据这两部分，我们将分别来进行介绍。</p>
<h3 id="css中的模块热更新" tabindex="-1"><a class="header-anchor" href="#css中的模块热更新" aria-hidden="true">#</a> CSS中的模块热更新</h3>
<p>首先我们在<code v-pre>src</code>目录下新建一个<code v-pre>style.css</code>样式文件，它的代码可以这样下：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div:nth-of-type(odd)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>随后我们改写一下<code v-pre>src</code>目录下的<code v-pre>index.js</code>中的代码，像下面这样子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./style.css'</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'新增'</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>btn<span class="token punctuation">)</span><span class="token punctuation">;</span>

btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'item'</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于我们需要处理<code v-pre>CSS</code>文件，所以我们需要保留处理<code v-pre>CSS</code>文件的<code v-pre>loader</code>规则，像下面这样</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上代码添加和配置完毕后，我们使用<code v-pre>npm run dev</code>进行打包，我们点击按钮后，它会出现如下的情况</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/1110.png" alt="打包结果"></p>
<p><strong>理解</strong>： 由于<code v-pre>item</code>是动态生成的，当我们要将<code v-pre>yellow</code>颜色改变成<code v-pre>red</code>时，模块热更新能帮我们在不刷新浏览器的情况下，替换掉样式的内容。直白来说：自动生成的<code v-pre>item</code>依然存在，只是颜色变了。</p>
<h3 id="在js中的模块热更新" tabindex="-1"><a class="header-anchor" href="#在js中的模块热更新" aria-hidden="true">#</a> 在js中的模块热更新</h3>
<p>在介绍完<code v-pre>CSS</code>中的模块热更新后，我们接下来介绍在<code v-pre>js</code>中的模块热更新。</p>
<p>首先，我们在<code v-pre>src</code>目录下创建两个<code v-pre>.js</code>文件，分别叫<code v-pre>counter.js</code>和<code v-pre>number.js</code>，它的代码可以写成下面这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// counter.js代码</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token string">'counter'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  dom<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>innerHTML<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>number.js</code>中的代码是下面这样的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// number.js代码</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span><span class="token string">'number'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'1000'</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加完以上两个<code v-pre>.js</code>文件后，我们再来对<code v-pre>index.js</code>文件做一下小小的改动：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// index.js代码</span>
<span class="token keyword">import</span> counter <span class="token keyword">from</span> <span class="token string">'./counter'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> number <span class="token keyword">from</span> <span class="token string">'./number'</span><span class="token punctuation">;</span>
<span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上都改动完毕后，我们使用<code v-pre>npm run dev</code>进行打包，在页面上点击数字<code v-pre>1</code>，让它不断的累计到你喜欢的一个数值(记住这个数值)，这个时候我们再去修改<code v-pre>number.js</code>中的代码，将<code v-pre>1000</code>修改为<code v-pre>3000</code>，也就是下面这样修改：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// number.js代码</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span><span class="token string">'number'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'3000'</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现，虽然<code v-pre>1000</code>成功变成了<code v-pre>3000</code>，但我们累计的数值却重置到了<code v-pre>1</code>，这个时候你可能会问，我们不是配置了模块热更新了吗，为什么不像<code v-pre>CSS</code>一样，直接替换即可？</p>
<p><strong>回答</strong>：这是因为<code v-pre>CSS</code>文件，我们是使用了<code v-pre>loader</code>来进行处理，有些<code v-pre>loader</code>已经帮我们写好了模块热更新的代码，我们直接使用即可(类似的还有<code v-pre>.vue</code>文件，<code v-pre>vue-loader</code>也帮我们处理好了模块热更新)。而对于<code v-pre>js</code>代码，还需要我们写一点点额外的代码，像下面这样子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> counter <span class="token keyword">from</span> <span class="token string">'./counter'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> number <span class="token keyword">from</span> <span class="token string">'./number'</span><span class="token punctuation">;</span>
<span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 额外的模块HMR配置</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">'./number.js'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'number'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写完上面的额外代码后，我们再在浏览器中重复我们刚才的操作，即：</p>
<ul>
<li>累加数字<code v-pre>1</code>带你喜欢的一个值</li>
<li>修改<code v-pre>number.js</code>中的<code v-pre>1000</code>为你喜欢的一个值</li>
</ul>
<p>以下截图是我的测试结果，同时我们也可以在控制台<code v-pre>console</code>上，看到模块热更新第二次启动时，已经成功帮我们把<code v-pre>number.js</code>中的代码输出到了浏览器。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/1111.png" alt="模块热更新结果"></p>
<p><strong>小结</strong>：在更改<code v-pre>CSS</code>样式文件时，我们不用书写<code v-pre>module.hot</code>，这是因为各种<code v-pre>CSS</code>的<code v-pre>loader</code>已经帮我们处理了，相同的道理还有<code v-pre>.vue</code>文件的<code v-pre>vue-loader</code>，它也帮我们处理了模块热更新，但在<code v-pre>.js</code>文件中，我们还是需要根据实际的业务来书写一点<code v-pre>module.hot</code>代码的。</p>
<h2 id="处理es6语法" tabindex="-1"><a class="header-anchor" href="#处理es6语法" aria-hidden="true">#</a> 处理ES6语法</h2>
<h3 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> Babel</h3>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>我们在项目中书写的<code v-pre>ES6</code>代码，由于考虑到低版本浏览器的兼容性问题，需要把<code v-pre>ES6</code>代码转换成低版本浏览器能够识别的<code v-pre>ES5</code>代码。使用<code v-pre>babel-loader</code>和<code v-pre>@babel/core</code>来进行<code v-pre>ES6</code>和<code v-pre>ES5</code>之间的链接，使用<code v-pre>@babel/preset-env</code>来进行<code v-pre>ES6</code>转<code v-pre>ES5</code></p>
<ul>
<li>
<p>webpack使用<strong>babel-loader</strong>来使用babel，<strong>@babel/core</strong>实现通过Babel的API转码</p>
</li>
<li>
<p><strong>@babel/preset-env</strong>定义语法转化的配置</p>
<ol>
<li>preset就是在babel编译之前，让babel知道你的编译规则，看是用什么样的规范去编译</li>
<li>例如babel-preset-es2015就是安装es6标准编译</li>
<li>babel-preset-env可以直接实现使用最新的规范编译，包括了babel-preset-es2015,babel-preset-es2016 and babel-preset-es2017...</li>
</ol>
</li>
<li>
<p>@babel/polyfill补全浏览器中缺失的方法（promise、map....）</p>
</li>
</ul>
</div>
<p>在处理<code v-pre>ES6</code>代码之前，我们先来清理一下前面小节的中的代理，我们需要删除<code v-pre>counter.js</code>、<code v-pre>number.js</code>和<code v-pre>style.css</code>这个三个文件，删除后的文件目录大概是下面这样子的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> dist
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> src
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json
<span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要处理<code v-pre>ES6</code>代码，需要我们安装几个<code v-pre>npm</code>包，可以使用如下的命令去安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装 babel-loader @babel/core</span>
$ <span class="token function">npm</span> <span class="token function">install</span> babel-loader @babel/core --save-dev

<span class="token comment"># 安装 @babel/preset-env</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @babel/preset-env --save-dev

<span class="token comment"># 安装 @babel/polyfill进行ES5代码补丁</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @babel/polyfill --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完毕后，我们需要改写<code v-pre>src/index.js</code>中的代码，可以是下面这个样子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'@babel/polyfill'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理<code v-pre>ES6</code>代码，需要我们使用<code v-pre>loader</code>，所以需要在<code v-pre>webpack.config.js</code>中添加如下的代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@babel/preset-env</code>需要在根目录下有一个<code v-pre>.babelrc</code>文件，所以我们新建一个<code v-pre>.babelrc</code>文件，它的代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了让我们的打包变得更加清晰，我们需要在<code v-pre>webpack.config.js</code>中把<code v-pre>source-map</code>配置成<code v-pre>none</code>，像下面这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其他配置</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'none'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本次打包，我们需要使用<code v-pre>npx webpack</code>，打包的结果如下图所示：</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/es6result.png" alt="打包结果"></p>
<p>在以上的打包中，我们可以发现：</p>
<ul>
<li>箭头函数被转成了普通的函数形式</li>
<li>如果你仔细观察这次打包输出的话，你会发现打包体积会非常大，有几百K，这是因为我们将<code v-pre>@babel/polyfill</code>中的代码全部都打包进了我们的代码中</li>
</ul>
<h3 id="usebuiltins配置" tabindex="-1"><a class="header-anchor" href="#usebuiltins配置" aria-hidden="true">#</a> useBuiltIns配置</h3>
<p>针对以上最后一个问题，我们希望，我们使用了哪些<code v-pre>ES6</code>代码，就引入它对应的<code v-pre>polyfill</code>包，达到一种按需引入的目的，要实现这样一个效果，我们需要在<code v-pre>.babelrc</code>文件中做一下小小的改动，像下面这样：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// "corejs": 2,</span>
    <span class="token property">"useBuiltIns"</span><span class="token operator">:</span> <span class="token string">"usage"</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>usage</strong>的配置实现了<strong>只对使用到的方法补全</strong>。进行了同时需要注意的时，我们使用了<code v-pre>useBuiltIns:&quot;usage&quot;</code>后，在<code v-pre>index.js</code>中就不用使用<code v-pre>import '@babel/polyfill'</code>这样的写法了，因为它已经帮我们自动这样做了。</p>
<p>在以上配置完毕后，我们再次使用<code v-pre>npx webpack</code>进行打包，如下图，可以看到此次打包后，<code v-pre>main.js</code>的大小明显变小了。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/es6-2.png" alt="打包结果"></p>
<h3 id="targets配置目标浏览器" tabindex="-1"><a class="header-anchor" href="#targets配置目标浏览器" aria-hidden="true">#</a> targets配置目标浏览器</h3>
<p>可以设置targets属性设置需要转换的目标浏览器，例如下面设置了转化之后要让67版本以上的chrome的支持ES6语法，因为本身67版本以上的chrome本身就支持ES6,这个配置下的打包几乎对打包体积没影响。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">'67'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">"useBuiltIns"</span><span class="token operator">:</span> <span class="token string">"usage"</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件库或类库下" tabindex="-1"><a class="header-anchor" href="#组件库或类库下" aria-hidden="true">#</a> 组件库或类库下</h3>
<p>通过preset打包的babel补全的polyfill会注入到全局变量，如果希望打包一个组件库或者类库，可以使用@babel/plugin-transform-runtime和@babel/runtime配合实现</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D @babel/plugin-transform-runtime
<span class="token function">npm</span> i -S @babel/runtime
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>.babelrc</strong>文件去掉presets的配置，添加plugins的配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"@babel/plugin-transform-runtime"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"core-js"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token string-property property">"helpers"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">"regenerator"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">"useESModules"</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>core-js</strong>从默认false改成 2 需要安装<code v-pre>npm i -S @babel/runtime-corejs2</code>，core-js为2才能实现当没有promise、map这些方法的时候会把方法打包到库文件中</p>
</div></template>
