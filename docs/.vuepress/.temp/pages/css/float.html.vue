<template><div><h1 id="浮动布局" tabindex="-1"><a class="header-anchor" href="#浮动布局" aria-hidden="true">#</a> 浮动布局</h1>
<h2 id="float" tabindex="-1"><a class="header-anchor" href="#float" aria-hidden="true">#</a> float</h2>
<p>📗 float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种元素。</p>
<ul>
<li>浮动元素会影响后面文档元素的布局</li>
<li>浮动元素是inline block，设置浮动之后可以为inline元素设置宽高</li>
<li>清楚浮动能够让父元素获得高度信息</li>
</ul>
<h3 id="float-1" tabindex="-1"><a class="header-anchor" href="#float-1" aria-hidden="true">#</a> FLOAT</h3>
<p>使用浮动可以控制相邻元素间的排列关系。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>left</td>
<td>向左浮动</td>
</tr>
<tr>
<td>right</td>
<td>向右浮动</td>
</tr>
<tr>
<td>none</td>
<td>不浮动</td>
</tr>
</tbody>
</table>
<h3 id="文档流" tabindex="-1"><a class="header-anchor" href="#文档流" aria-hidden="true">#</a> 文档流</h3>
<p>没有设置浮动的块元素是独占一行的。</p>
<p>浮动是对后面元素的影响，下图中第二个元素设置浮动对第一个元素没有影响</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div:first-of-type</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:last-of-type</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/1.png" alt=""></p>
<h3 id="丢失空间" tabindex="-1"><a class="header-anchor" href="#丢失空间" aria-hidden="true">#</a> 丢失空间</h3>
<p>如果只给第一个元素设置浮动，第二个元素不设置，后面的元素会占用第一个元素空间。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div:first-of-type</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:last-of-type</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/2.png" alt=""></p>
<h3 id="使用浮动" tabindex="-1"><a class="header-anchor" href="#使用浮动" aria-hidden="true">#</a> 使用浮动</h3>
<p>两个元素都设置浮动后，会并排显示</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div:first-of-type</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:last-of-type</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/3.png" alt=""></p>
<p>为第二个元素设置右浮动时将移动到右边</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div:first-of-type</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:last-of-type</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/4.png" alt=""></p>
<h3 id="浮动边界" tabindex="-1"><a class="header-anchor" href="#浮动边界" aria-hidden="true">#</a> 浮动边界</h3>
<p>浮动元素边界不能超过父元素的padding</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> antiquewhite<span class="token punctuation">;</span>
    <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:first-of-type</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:last-of-type</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/5.png" alt=""></p>
<h3 id="浮动转块" tabindex="-1"><a class="header-anchor" href="#浮动转块" aria-hidden="true">#</a> 浮动转块</h3>
<p>📗  元素浮动后会变为<strong>块元素</strong>包括行元素如 <code v-pre>span</code>，所以浮动后的元素可以<strong>设置宽高</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h2>
<p>📗 不希望元素受浮动元素影响时，可以清除浮动。</p>
<h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> CLEAR</h3>
<p>CSS提供了 <code v-pre>clear</code> 规则用于清除元素浮动影响。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>left</td>
<td>左边远离浮动元素</td>
</tr>
<tr>
<td>right</td>
<td>右连远离浮动元素</td>
</tr>
<tr>
<td>both</td>
<td>左右都远离浮动元素</td>
</tr>
</tbody>
</table>
<p>使用清除浮动</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div.green</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px green<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div.red</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div.blue</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/6.png" alt=""></p>
<p>在父元素内部最后面添加一个没有高度的子元素，并使用<code v-pre>clear:both</code> 📌</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token selector">div.green</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px green<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div.red</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div.blue</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clear<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/7.png" alt=""></p>
<h3 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> AFTER</h3>
<p>使用 <code v-pre>::after</code> 伪类为父元素添加后标签，实现清除浮动影响 📌</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="overflow" tabindex="-1"><a class="header-anchor" href="#overflow" aria-hidden="true">#</a> OVERFLOW</h3>
<p>子元素使用浮动后将不占用空间，这时父元素高度为将为零。</p>
<p>通过添加父元素并设置 <code v-pre>overflow</code> 属性可以清除浮动。</p>
<p>将会使用父元素产生 <code v-pre>BFC</code> 机制，即父元素的高度计算会包括浮动元素的高度 📌</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面布局" tabindex="-1"><a class="header-anchor" href="#页面布局" aria-hidden="true">#</a> 页面布局</h2>
<div class="custom-container tip"><p class="custom-container-title">完成页面布局注意以下几点</p>
<ol>
<li>首先根据设计稿确定页面大小（主要指宽度，移动端不需要考虑），如 1200px 宽度</li>
<li>水平分割页面主要区域</li>
<li>每个区域中按以上两步继续细分</li>
</ol>
</div>
<h2 id="形状浮动-👾" tabindex="-1"><a class="header-anchor" href="#形状浮动-👾" aria-hidden="true">#</a> 形状浮动 👾</h2>
<p><code v-pre>shape-outside</code>的<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">CSS<ExternalLinkIcon/></a> 属性定义了一个可以是非矩形的形状，相邻的内联内容应围绕该形状进行包装。 默认情况下，内联内容包围其边距框; <code v-pre>shape-outside</code>提供了一种自定义此包装的方法，可以将文本包装在复杂对象周围而不是简单的框中。</p>
<p>📗 通过形状浮动可以让内容围绕图片，类似于我们在word 中的环绕排版。要求图片是有透明度的PNG格式。</p>
<h3 id="shape-outside" tabindex="-1"><a class="header-anchor" href="#shape-outside" aria-hidden="true">#</a> shape-outside</h3>
<p><code v-pre>shape-outside</code></p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>margin-box</td>
<td>外边距环绕</td>
</tr>
<tr>
<td>padding-box</td>
<td>内边距环绕</td>
</tr>
<tr>
<td>border-box</td>
<td>边线环绕</td>
</tr>
<tr>
<td>content-box</td>
<td>内容环绕</td>
</tr>
</tbody>
</table>
<h4 id="margin-box" tabindex="-1"><a class="header-anchor" href="#margin-box" aria-hidden="true">#</a> margin-box</h4>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/8.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">span.shape</span> <span class="token punctuation">{</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 30px green<span class="token punctuation">;</span>
        <span class="token property">shape-outside</span><span class="token punctuation">:</span> margin-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shape<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    泉州市（闽南语：泉州市，白话字：Choân-chiu-chhǐ，台罗：Tsuân-tsiu-tshǐ，闽拼：Zuánziū-cî，国际音标：/tsuan˨˨ ʨiu˧˧
    ʨʰi˧˧/），简称泉、鲤，泉州府城又称刺桐城（Zaytun：زيتون或Chidun：ᠴᠢᠳᠤᠨ，在阿拉伯语、蒙古语意为橄榄）、温陵、清源，是中华人民共和国福建省下辖的地级市，位于福建省中南部沿海。市境西南接厦门市、漳州市，西界龙岩市，北邻三明市，东北达福州市、莆田市，东隔台湾海峡与台湾相望。地处闽东南沿海丘陵平原区，地势西北高，东南低，西北部为戴云山。晋江东溪和西溪于南安市双溪口汇合，往东流贯市区，注入泉州湾。全市总面积11,287平方公里，人口878.23万，市人民政府驻丰泽区东海街道。泉州是闽东南沿海政治、经济、文化和交通中心，首批国家历史文化名城，古代海上丝绸之路的起点，联合国教科文组织设立的世界多元文化展示中心，世界宗教博物馆，中国首届东亚文化之都，全国文明城市，国家卫生城市。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="border-box" tabindex="-1"><a class="header-anchor" href="#border-box" aria-hidden="true">#</a> border-box</h4>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/9.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 30px green<span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="padding-box" tabindex="-1"><a class="header-anchor" href="#padding-box" aria-hidden="true">#</a> padding-box</h4>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/10.png" alt=""></p>
<h3 id="clip-path" tabindex="-1"><a class="header-anchor" href="#clip-path" aria-hidden="true">#</a> clip-path</h3>
<p><code v-pre>clip-path</code> 直译过来就是裁剪路径，使用SVG或形状定义一个HTML元素的可见区域的方法。想象一下你在<code v-pre>Photoshop</code>中勾勒路径的场景。</p>
<blockquote>
<p>clip-path属性可以防止部分元素通过定义的剪切区域来显示，仅通过显示的特殊区域。剪切区域是被URL定义的路径代替行内或者外部svg，或者定义路线的方法例如circle().。clip-path属性代替了现在已经弃用的剪切 clip属性。</p>
<p><code v-pre>clip-path</code>在线神器 - <a href="https://link.segmentfault.com/?url=http%3A%2F%2Fbennettfeely.com%2Fclippy" target="_blank" rel="noopener noreferrer">http://bennettfeely.com/clippy<ExternalLinkIcon/></a> 。</p>
</blockquote>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>circle</td>
<td>圆形</td>
</tr>
<tr>
<td>ellipse</td>
<td>椭圆</td>
</tr>
<tr>
<td>polygon</td>
<td>多边形</td>
</tr>
</tbody>
</table>
<h4 id="circle" tabindex="-1"><a class="header-anchor" href="#circle" aria-hidden="true">#</a> circle</h4>
<ol>
<li>圆的半径</li>
<li>圆心位置</li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token function">circle</span><span class="token punctuation">(</span> [ &lt;shape-radius> ]? [ at &lt;position> ]? <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/11.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span>50% at center<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ellipse" tabindex="-1"><a class="header-anchor" href="#ellipse" aria-hidden="true">#</a> ellipse</h4>
<ol>
<li>椭圆的X轴半径，默认是宽度的一半，支持百分比</li>
<li>椭圆的Y轴半径，默认是高度的一半，支持百分比</li>
<li>椭圆中心位置，默认是元素的中心点</li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">ellipse( [ &lt;shape-radius></span><span class="token punctuation">{</span>2<span class="token punctuation">}</span> ]? [ at &lt;position> ]? <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/12.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">ellipse</span><span class="token punctuation">(</span>50% 80% at 100% 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ploygon" tabindex="-1"><a class="header-anchor" href="#ploygon" aria-hidden="true">#</a> ploygon</h4>
<blockquote>
<p>polygon() : 定义一个多边形 。</p>
</blockquote>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token function">polygon</span><span class="token punctuation">(</span> &lt;fill-rule>? <span class="token punctuation">,</span> [ &lt;length-percentage> &lt;length-percentage> ]# <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/13.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50% 0<span class="token punctuation">,</span> 100% 100%<span class="token punctuation">,</span> 0 100%<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内移距离-inset" tabindex="-1"><a class="header-anchor" href="#内移距离-inset" aria-hidden="true">#</a> 内移距离 inset</h3>
<p>使用 <code v-pre>inset</code> 属性控制环绕向内移动的距离。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>50px 30px 80px 50px<span class="token punctuation">)</span> padding-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/14.png" alt=""></p>
<h3 id="环绕模式" tabindex="-1"><a class="header-anchor" href="#环绕模式" aria-hidden="true">#</a> 环绕模式</h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>circle</td>
<td>圆形环绕</td>
</tr>
<tr>
<td>ellipse</td>
<td>椭圆环绕</td>
</tr>
<tr>
<td>url</td>
<td>图片环绕</td>
</tr>
<tr>
<td>polygan</td>
<td>多边环绕</td>
</tr>
</tbody>
</table>
<h4 id="圆形环绕" tabindex="-1"><a class="header-anchor" href="#圆形环绕" aria-hidden="true">#</a> 圆形环绕</h4>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/15.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span> padding-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="椭圆环绕" tabindex="-1"><a class="header-anchor" href="#椭圆环绕" aria-hidden="true">#</a> 椭圆环绕</h4>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/16.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">ellipse</span><span class="token punctuation">(</span>120px 98px<span class="token punctuation">)</span> padding-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="图片环绕" tabindex="-1"><a class="header-anchor" href="#图片环绕" aria-hidden="true">#</a> 图片环绕</h4>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/17.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>xj.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多边环绕" tabindex="-1"><a class="header-anchor" href="#多边环绕" aria-hidden="true">#</a> 多边环绕</h4>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/float/18.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50px 0px<span class="token punctuation">,</span> 0 100px<span class="token punctuation">,</span> 100px 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50px 0px<span class="token punctuation">,</span> 0 100px<span class="token punctuation">,</span> 100px 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
