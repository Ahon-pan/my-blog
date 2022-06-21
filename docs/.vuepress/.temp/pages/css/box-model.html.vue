<template><div><h1 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型" aria-hidden="true">#</a> 盒子模型</h1>
<img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/1.png" style="zoom:50%;" />
<h2 id="外边距" tabindex="-1"><a class="header-anchor" href="#外边距" aria-hidden="true">#</a> 外边距</h2>
<h3 id="声明定义" tabindex="-1"><a class="header-anchor" href="#声明定义" aria-hidden="true">#</a> 声明定义</h3>
<p>边距顺序依次为：上、右、下、左。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px red<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px green<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 50px 80px 100px 150px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/2.png" style="zoom:40%;" />
<p>下例定义上下<code v-pre>50px</code>边距，左右<code v-pre>80px</code>边距</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code> <span class="token property">margin</span><span class="token punctuation">:</span> 50px 80px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面将边距全部定义为 <code v-pre>100px</code></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">margin</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="居中设置" tabindex="-1"><a class="header-anchor" href="#居中设置" aria-hidden="true">#</a> 居中设置</h3>
<p><code v-pre>margin</code> 设置auto 后，浏览器会自动居中</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">h2,h3</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 10px #ddd<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">h3</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>mdn.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/3.png" alt=""></p>
<h3 id="负值设置" tabindex="-1"><a class="header-anchor" href="#负值设置" aria-hidden="true">#</a> 负值设置</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px red<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px green<span class="token punctuation">;</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/4.png" alt=""></p>
<h3 id="边距合并" tabindex="-1"><a class="header-anchor" href="#边距合并" aria-hidden="true">#</a> 边距合并</h3>
<p>相邻元素的纵向外边距会进行合并</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px green<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">h3</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px green<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>mdn.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/5.png" alt=""></p>
<h2 id="内边距" tabindex="-1"><a class="header-anchor" href="#内边距" aria-hidden="true">#</a> 内边距</h2>
<p>内边距使用 <code v-pre>padding</code> 进行定义，使用语法与 <code v-pre>margin</code> 相似。</p>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">a</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px 30px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">a:hover</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 78<span class="token punctuation">,</span> 110<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>MYSQL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>CSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/6.png" alt=""></p>
<h2 id="box-sizing" tabindex="-1"><a class="header-anchor" href="#box-sizing" aria-hidden="true">#</a> BOX-SIZING</h2>
<p>📒 content-box和border box的区别在于：两者的盒子的宽度是否包含表框和内边距</p>
<ul>
<li>content-box（默认样式）</li>
<li>border-box：元素宽度只包括内容</li>
</ul>
<p>宽度与高度包括内边距与边框<code v-pre>border-box</code> （200px * 120px）</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 10px #ddd<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/7.png" alt=""></p>
<h2 id="边框设计" tabindex="-1"><a class="header-anchor" href="#边框设计" aria-hidden="true">#</a> 边框设计</h2>
<h3 id="样式选择" tabindex="-1"><a class="header-anchor" href="#样式选择" aria-hidden="true">#</a> 样式选择</h3>
<table>
<thead>
<tr>
<th style="text-align:left">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">none</td>
<td style="text-align:left">定义无边框。</td>
</tr>
<tr>
<td style="text-align:left">dotted</td>
<td style="text-align:left">定义点状边框。在大多数浏览器中呈现为实线。</td>
</tr>
<tr>
<td style="text-align:left">dashed</td>
<td style="text-align:left">定义虚线。在大多数浏览器中呈现为实线。</td>
</tr>
<tr>
<td style="text-align:left">solid</td>
<td style="text-align:left">定义实线。</td>
</tr>
<tr>
<td style="text-align:left">double</td>
<td style="text-align:left">定义双线。双线的宽度等于 border-width 的值。</td>
</tr>
<tr>
<td style="text-align:left">groove</td>
<td style="text-align:left">定义 3D 凹槽边框。其效果取决于 border-color 的值。</td>
</tr>
<tr>
<td style="text-align:left">ridge</td>
<td style="text-align:left">定义 3D 垄状边框。其效果取决于 border-color 的值。</td>
</tr>
<tr>
<td style="text-align:left">inset</td>
<td style="text-align:left">定义 3D inset 边框。其效果取决于 border-color 的值。</td>
</tr>
<tr>
<td style="text-align:left">outset</td>
<td style="text-align:left">定义 3D outset 边框。其效果取决于 border-color 的值。</td>
</tr>
</tbody>
</table>
<p>一次定义四个边</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> double<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样式顺序为上、右、下、左，可以分别进行定义</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> outset solid dotted double<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/8.png" alt=""></p>
<p>单独设置一边样式</p>
<table>
<thead>
<tr>
<th>规则</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-top-style</td>
<td>顶边</td>
</tr>
<tr>
<td>border-right-style</td>
<td>右边</td>
</tr>
<tr>
<td>border-bottom-style</td>
<td>下边</td>
</tr>
<tr>
<td>border-left-style</td>
<td>左边</td>
</tr>
<tr>
<td>border-style</td>
<td>四边</td>
</tr>
</tbody>
</table>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">border-top-style</span><span class="token punctuation">:</span> double<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/9.png" alt=""></p>
<h3 id="边框宽度" tabindex="-1"><a class="header-anchor" href="#边框宽度" aria-hidden="true">#</a> 边框宽度</h3>
<p>边框可以通过以下规则来设置</p>
<table>
<thead>
<tr>
<th>规则</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-top-width</td>
<td>顶边</td>
</tr>
<tr>
<td>border-right-width</td>
<td>右边</td>
</tr>
<tr>
<td>border-bottom-width</td>
<td>下边</td>
</tr>
<tr>
<td>border-left-width</td>
<td>左边</td>
</tr>
<tr>
<td>border-width</td>
<td>四边</td>
</tr>
</tbody>
</table>
<h3 id="边框颜色" tabindex="-1"><a class="header-anchor" href="#边框颜色" aria-hidden="true">#</a> 边框颜色</h3>
<table>
<thead>
<tr>
<th>规则</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-top-color</td>
<td>顶边</td>
</tr>
<tr>
<td>border-right-color</td>
<td>右边</td>
</tr>
<tr>
<td>border-bottom-color</td>
<td>下边</td>
</tr>
<tr>
<td>border-left-color</td>
<td>左边</td>
</tr>
<tr>
<td>border-color</td>
<td>四边</td>
</tr>
</tbody>
</table>
<h3 id="简写规则" tabindex="-1"><a class="header-anchor" href="#简写规则" aria-hidden="true">#</a> 简写规则</h3>
<table>
<thead>
<tr>
<th>规则</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-top</td>
<td>顶边</td>
</tr>
<tr>
<td>border-right</td>
<td>右边</td>
</tr>
<tr>
<td>border-bottom</td>
<td>下边</td>
</tr>
<tr>
<td>border-left</td>
<td>左边</td>
</tr>
<tr>
<td>border</td>
<td>四边</td>
</tr>
</tbody>
</table>
<p>设置底部边框</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 5px red<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="行元素边框" tabindex="-1"><a class="header-anchor" href="#行元素边框" aria-hidden="true">#</a> 行元素边框</h3>
<p>行元素也可以进行边框设置</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">em</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="圆角边框-👾" tabindex="-1"><a class="header-anchor" href="#圆角边框-👾" aria-hidden="true">#</a> 圆角边框 👾</h3>
<p>使用 <code v-pre>border-radius</code> 规则设置圆角，可以使用<code v-pre>px | %</code> 等单位。也支持四个边分别设置。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-top-left-radius</td>
<td>上左</td>
</tr>
<tr>
<td>border-top-right-radius</td>
<td>上右</td>
</tr>
<tr>
<td>border-bottom-left-radius</td>
<td>下载</td>
</tr>
<tr>
<td>border-bottom-right-radius</td>
<td>下右</td>
</tr>
</tbody>
</table>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过边框绘制圆</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 3px red<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义不同边</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 10px 30px 50px 100px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>行元素绘制圆角</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">em</span> <span class="token punctuation">{</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
	<span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/10.png" alt=""></p>
<h2 id="轮廓线" tabindex="-1"><a class="header-anchor" href="#轮廓线" aria-hidden="true">#</a> 轮廓线</h2>
<p>元素在获取焦点时产生，并且轮廓线不占用空间。可以使用伪类 <code v-pre>:focus</code> 定义样式。</p>
<ul>
<li>轮廓线显示在边框外面</li>
<li>轮廓线不影响页面布局</li>
</ul>
<h3 id="线条样式" tabindex="-1"><a class="header-anchor" href="#线条样式" aria-hidden="true">#</a> 线条样式</h3>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">none</td>
<td style="text-align:left">默认。定义无轮廓。</td>
</tr>
<tr>
<td style="text-align:left">dotted</td>
<td style="text-align:left">定义点状的轮廓。</td>
</tr>
<tr>
<td style="text-align:left">dashed</td>
<td style="text-align:left">定义虚线轮廓。</td>
</tr>
<tr>
<td style="text-align:left">solid</td>
<td style="text-align:left">定义实线轮廓。</td>
</tr>
<tr>
<td style="text-align:left">double</td>
<td style="text-align:left">定义双线轮廓。双线的宽度等同于 outline-width 的值。</td>
</tr>
<tr>
<td style="text-align:left">groove</td>
<td style="text-align:left">定义 3D 凹槽轮廓。此效果取决于 outline-color 值。</td>
</tr>
<tr>
<td style="text-align:left">ridge</td>
<td style="text-align:left">定义 3D 凸槽轮廓。此效果取决于 outline-color 值。</td>
</tr>
<tr>
<td style="text-align:left">inset</td>
<td style="text-align:left">定义 3D 凹边轮廓。此效果取决于 outline-color 值。</td>
</tr>
<tr>
<td style="text-align:left">outset</td>
<td style="text-align:left">定义 3D 凸边轮廓。此效果取决于 outline-color 值。</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">p</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
        <span class="token comment">/* outline: green dotted thick; */</span>
        <span class="token property">outline-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
        <span class="token property">outline-width</span><span class="token punctuation">:</span> thick<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">p.dotted</span> <span class="token punctuation">{</span>
        <span class="token property">outline-style</span><span class="token punctuation">:</span> dotted<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    ...
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dotted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点线轮廓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dashed<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>虚线轮廓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>solid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>实线轮廓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>double<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>双线轮廓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>groove<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>凹槽轮廓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ridge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>垄状轮廓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>嵌入轮廓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>外凸轮廓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/11.png" alt=""></p>
<h3 id="线宽设置" tabindex="-1"><a class="header-anchor" href="#线宽设置" aria-hidden="true">#</a> 线宽设置</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">outline-width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="线条颜色" tabindex="-1"><a class="header-anchor" href="#线条颜色" aria-hidden="true">#</a> 线条颜色</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">outline-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="组合定义" tabindex="-1"><a class="header-anchor" href="#组合定义" aria-hidden="true">#</a> 组合定义</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">outline</span><span class="token punctuation">:</span> red solid 2px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="表单轮廓线-👾" tabindex="-1"><a class="header-anchor" href="#表单轮廓线-👾" aria-hidden="true">#</a> 表单轮廓线 👾</h3>
<p>表单默认具有轮廓线，但有时并不好看，使用以下样式规则去除。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">input:focus</span> <span class="token punctuation">{</span>
	<span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> DISPLAY</h2>
<h3 id="控制显示隐藏" tabindex="-1"><a class="header-anchor" href="#控制显示隐藏" aria-hidden="true">#</a> 控制显示隐藏</h3>
<p>使用 <code v-pre>display</code> 控制元素的显示机制。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td>隐藏元素</td>
</tr>
<tr>
<td>block</td>
<td>显示为块元素</td>
</tr>
<tr>
<td>inline</td>
<td>显示为行元素，不能设置宽/高</td>
</tr>
<tr>
<td>inline-block</td>
<td>行级块元素，允许设置宽/高</td>
</tr>
</tbody>
</table>
<h3 id="行转块元素" tabindex="-1"><a class="header-anchor" href="#行转块元素" aria-hidden="true">#</a> 行转块元素</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">a</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/12.png" alt=""></p>
<h3 id="块转为行元素" tabindex="-1"><a class="header-anchor" href="#块转为行元素" aria-hidden="true">#</a> 块转为行元素</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">ul>li</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">ul>li:hover</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>mdn.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/13.png" alt=""></p>
<h3 id="行级块使用" tabindex="-1"><a class="header-anchor" href="#行级块使用" aria-hidden="true">#</a> 行级块使用</h3>
<p>将a标签转为<code v-pre>inline-block</code>之后，可以设置其高度 📌</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">a</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>MYSQL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>LINUX<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>PHP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/14.png" alt=""></p>
<h2 id="visibility" tabindex="-1"><a class="header-anchor" href="#visibility" aria-hidden="true">#</a> VISIBILITY</h2>
<p>控制元素的显示隐藏，在隐藏后空间位也保留。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/15.1.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">article div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">article div:nth-of-type(1)</span> <span class="token punctuation">{</span>
        <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/15.png" alt=""></p>
<h2 id="溢出控制" tabindex="-1"><a class="header-anchor" href="#溢出控制" aria-hidden="true">#</a> 溢出控制</h2>
<h3 id="隐藏控制" tabindex="-1"><a class="header-anchor" href="#隐藏控制" aria-hidden="true">#</a> 隐藏控制</h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>hidden</td>
<td>溢出内容隐藏</td>
</tr>
<tr>
<td>scroll</td>
<td>显示滚动条（有些浏览器会一直显示，有些在滚动时显示）</td>
</tr>
<tr>
<td>auto</td>
<td>根据内容自动处理滚动条</td>
</tr>
</tbody>
</table>
<p><strong>溢出隐藏</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px #ddd<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/16.1.png" alt=""></p>
<p><strong>溢出产生滚动条</strong></p>
<p>不同浏览器处理方式不同，有些直接显示出来，有些在滚动时才显示。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px #ddd<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/16.2.png" alt=""></p>
<h3 id="文本溢出-👾" tabindex="-1"><a class="header-anchor" href="#文本溢出-👾" aria-hidden="true">#</a> 文本溢出 👾</h3>
<p><strong>单行文本溢出</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px #ddd<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/16.3.png" alt=""></p>
<p><strong>多行文本溢出控制</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px #ddd<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/16.4.png" alt=""></p>
<h2 id="尺寸定义" tabindex="-1"><a class="header-anchor" href="#尺寸定义" aria-hidden="true">#</a> 尺寸定义</h2>
<p>可以使用多种方式为元素设置宽、高尺寸。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>宽度</td>
</tr>
<tr>
<td>height</td>
<td>高度</td>
</tr>
<tr>
<td>min-width</td>
<td>最小宽度</td>
</tr>
<tr>
<td>min-height</td>
<td>最小高度</td>
</tr>
<tr>
<td>max-width</td>
<td>最大宽度</td>
</tr>
<tr>
<td>max-height</td>
<td>最大高度</td>
</tr>
<tr>
<td>fill-available</td>
<td>撑满可用的空间</td>
</tr>
<tr>
<td>fit-content</td>
<td>根据内容适应尺寸</td>
</tr>
</tbody>
</table>
<h3 id="min-max" tabindex="-1"><a class="header-anchor" href="#min-max" aria-hidden="true">#</a> min&amp;max</h3>
<p>正文中不希望图片太大造成溢出窗口，也不希望太小影响美观，使用以下代码可以做到约束。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px #ddd<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">div img</span> <span class="token punctuation">{</span>
        <span class="token property">min-width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">max-width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fill-available-👾" tabindex="-1"><a class="header-anchor" href="#fill-available-👾" aria-hidden="true">#</a> fill-available 👾</h3>
<p>在<code v-pre>chrome</code> 浏览器中使用前缀 <code v-pre>-webkit</code> 书写样式。</p>
<p>下面是行块元素可以撑满可用空间后的效果。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/17.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">span</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> -webkit-fill-available<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> -webkit-fill-available<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
        source.com
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fit-content" tabindex="-1"><a class="header-anchor" href="#fit-content" aria-hidden="true">#</a> fit-content</h3>
<p>下面是根据内容自动适应宽度，让元素居中显示的效果。(h2原本作为block元素宽度是100%)</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/18.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> fit-content<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="min-content" tabindex="-1"><a class="header-anchor" href="#min-content" aria-hidden="true">#</a> min-content</h3>
<p>使用<code v-pre>min-content</code> 将容器尺寸按最小元素宽度设置。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/19.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> min-content<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
        <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(1)</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>mdn.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="max-content" tabindex="-1"><a class="header-anchor" href="#max-content" aria-hidden="true">#</a> max-content</h3>
<p>容器尺寸按子元素最大宽度设置。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/20.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> max-content<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
        <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>mdn.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
