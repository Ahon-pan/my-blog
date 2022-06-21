<template><div><h1 id="栅格布局" tabindex="-1"><a class="header-anchor" href="#栅格布局" aria-hidden="true">#</a> 栅格布局</h1>
<h2 id="栅格介绍" tabindex="-1"><a class="header-anchor" href="#栅格介绍" aria-hidden="true">#</a> 栅格介绍</h2>
<h3 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释" aria-hidden="true">#</a> 名词解释</h3>
<p>📗 CSS 网格布局(Grid Layout) 是CSS中最强大的布局系统。 这是一个二维系统，这意味着它可以同时处理列和行。</p>
<p>栅格系统与FLEX弹性布局有相似之处理，都是由父容器包含多个项目元素的使用。</p>
<h3 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h3>
<p>下面是栅格系统兼容性数据，你也可以在 <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">https://caniuse.com/ (opens new window)<ExternalLinkIcon/></a>网站查看，所以在根据项目使用的场景决定是否使用栅格布局。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/2.png" alt=""></p>
<h2 id="基本知识" tabindex="-1"><a class="header-anchor" href="#基本知识" aria-hidden="true">#</a> 基本知识</h2>
<p>栅格有关的元素说明</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/3.png" alt=""></p>
<h2 id="声明容器" tabindex="-1"><a class="header-anchor" href="#声明容器" aria-hidden="true">#</a> 声明容器</h2>
<h3 id="块级容器" tabindex="-1"><a class="header-anchor" href="#块级容器" aria-hidden="true">#</a> 块级容器</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/4.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#container</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 50px 50px 50px<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 50px 50px 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行级容器" tabindex="-1"><a class="header-anchor" href="#行级容器" aria-hidden="true">#</a> 行级容器</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> inline-grid<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/5.png" alt=""></p>
<h2 id="划分行列" tabindex="-1"><a class="header-anchor" href="#划分行列" aria-hidden="true">#</a> 划分行列</h2>
<p>📗 栅格有点类似表格，拥有 <code v-pre>行</code> 和 <code v-pre>列</code>。</p>
<p>使用 <code v-pre>grid-template-columns</code> 规则可划分列数，使用 <code v-pre>grid-template-rows</code> 划分行数。</p>
<h3 id="固定宽度" tabindex="-1"><a class="header-anchor" href="#固定宽度" aria-hidden="true">#</a> 固定宽度</h3>
<p>下面是使用固定宽度划分两行三列的的示例，当容器宽度过大时将漏白。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 5px silver<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
    <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/6.png" alt=""></p>
<h3 id="百分比" tabindex="-1"><a class="header-anchor" href="#百分比" aria-hidden="true">#</a> 百分比 %</h3>
<p>可以使用使用百分比自动适就容器。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/7.png" alt=""></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>display: grid;
grid-template-rows: 50% 50%;
grid-template-columns: 25% 25% 25% 25%;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重复设置" tabindex="-1"><a class="header-anchor" href="#重复设置" aria-hidden="true">#</a> 重复设置</h3>
<p>📗 使用 <code v-pre>repeat</code> 统一设置值，第一个参数为重复数量，第二个参数是重复值</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/8.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>👾 可以设置<strong>多个值</strong>来定义重复，下面定义了四列，以 <code v-pre>100%、20px</code> 重复排列。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/9.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token comment">/* 50%的高度重复两行 */</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* 100px 50px的高度重复两次 */</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 100px 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动填充-auto-fill" tabindex="-1"><a class="header-anchor" href="#自动填充-auto-fill" aria-hidden="true">#</a> 自动填充 auto-fill</h3>
<p>自动填充是根据容器尺寸，自动<strong>设置元素尺寸</strong>。(在容器宽度已知的情况下，自动计算单元格大小)</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/6.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="比例划分-fr" tabindex="-1"><a class="header-anchor" href="#比例划分-fr" aria-hidden="true">#</a> 比例划分 fr</h3>
<p>📗 使用 <code v-pre>fr</code> 单位设置元素在空间中所占的比例，下面按<code v-pre>1份-2份</code> 分成两组共四列。</p>
<h4 id="单位组合" tabindex="-1"><a class="header-anchor" href="#单位组合" aria-hidden="true">#</a> 单位组合</h4>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/10.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 1fr 2fr<span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 2fr 1fr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重复定义" tabindex="-1"><a class="header-anchor" href="#重复定义" aria-hidden="true">#</a> 重复定义</h4>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/9.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 2fr 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动空间-auto-📐" tabindex="-1"><a class="header-anchor" href="#自动空间-auto-📐" aria-hidden="true">#</a> 自动空间 auto 📐</h3>
<p>📗 下面为第二个栅格列使用<code v-pre>auto</code>来让其获取所有剩余空间</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/11.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 20vw auto 30vw<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合定义" tabindex="-1"><a class="header-anchor" href="#组合定义" aria-hidden="true">#</a> 组合定义</h3>
<p>📗 <code v-pre>grid-tempalte</code> 是 <code v-pre>grid-template-rows</code>、<code v-pre>grid-template-columns</code>、<code v-pre>grid-template-areas</code> 的三个属性的简写。</p>
<p>下面使用<code v-pre>grid-template</code>实现三行三列的布局</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.app</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span> / <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.app > div</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 1px red<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是使用 <code v-pre>grid-template</code> 同时声明 <code v-pre>grid-template-rows、grid-template-columns</code>。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span> 10vh 20vh 10vh/ 30vw 1fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/12.png" alt=""></p>
<h3 id="minmax" tabindex="-1"><a class="header-anchor" href="#minmax" aria-hidden="true">#</a> minmax</h3>
<p>📗 使用 <code v-pre>minmax</code> 方法可以设置取值范围，下列在行高在 <code v-pre>最小100px ~ 最大1fr</code> 间取值。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 1fr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="间距定义" tabindex="-1"><a class="header-anchor" href="#间距定义" aria-hidden="true">#</a> 间距定义</h2>
<ul>
<li>row-gap</li>
<li>column-gap</li>
<li>gap</li>
</ul>
<h3 id="行间距" tabindex="-1"><a class="header-anchor" href="#行间距" aria-hidden="true">#</a> 行间距</h3>
<p>使用 <code v-pre>row-gap</code> 设置行间距。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/13.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">row-gap</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列间距" tabindex="-1"><a class="header-anchor" href="#列间距" aria-hidden="true">#</a> 列间距</h3>
<p>使用 <code v-pre>column-gap</code> 定义列间距。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/14.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合定义-1" tabindex="-1"><a class="header-anchor" href="#组合定义-1" aria-hidden="true">#</a> 组合定义</h3>
<p>📗 使用 <code v-pre>gap</code> 规则可以一次定义行、列间距，如果间距一样可以只设置一个值。</p>
<p><strong>设置行列间距为20px与10px</strong></p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/15.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">gap</span><span class="token punctuation">:</span> 20px 10px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>统一设置行列间距为20px</strong></p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/16.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="栅格命名-👾" tabindex="-1"><a class="header-anchor" href="#栅格命名-👾" aria-hidden="true">#</a> 栅格命名 👾</h2>
<p>📗 栅格线可以使用命名与编号找到，方便控制指定栅格，或将内容添加到指定栅格中。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/17.png" alt=""></p>
<h3 id="独立命名" tabindex="-1"><a class="header-anchor" href="#独立命名" aria-hidden="true">#</a> 独立命名</h3>
<p>可以为每个栅格独立命名来进行调用。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/18.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 5px silver<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token comment">/* 线的命名： |-||-||-| */</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> [r1-start] 100px [r1-end r2-start] 100px [r2-end r3-start] 100px [r3-end]<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> [c1-start] 100px [c1-end c2-start] 100px [c2-end c3-start] 100px [c3-end]<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
        <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px blueviolet<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
        <span class="token property">grid-row-start</span><span class="token punctuation">:</span> r2-start<span class="token punctuation">;</span>
        <span class="token property">grid-row-end</span><span class="token punctuation">:</span> r2-end<span class="token punctuation">;</span>
        <span class="token property">grid-column-start</span><span class="token punctuation">:</span> c2-start<span class="token punctuation">;</span>
        <span class="token property">grid-column-end</span><span class="token punctuation">:</span> c2-end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动命名" tabindex="-1"><a class="header-anchor" href="#自动命名" aria-hidden="true">#</a> 自动命名</h3>
<p>对于重复设置的栅格系统会自动命名，使用时使用 <code v-pre>c 1、c 2</code> 的方式定位栅格。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 5px silver<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> [r-start] 100px [r-end]<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> [c-start] 100px [c-end]<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 在使用[r-start]命名后 通过r-start num确定对应的线 */</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> r-start 2<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> r-end 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> c-start 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> c-end 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元素定位-📐" tabindex="-1"><a class="header-anchor" href="#元素定位-📐" aria-hidden="true">#</a> 元素定位 📐</h2>
<table>
<thead>
<tr>
<th>样式属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>grid-row-start</td>
<td>行开始栅格线</td>
</tr>
<tr>
<td>grid-row-end</td>
<td>行结束栅格线</td>
</tr>
<tr>
<td>grid-column-start</td>
<td>列开始栅格线</td>
</tr>
<tr>
<td>grid-column-end</td>
<td>列结束栅格线</td>
</tr>
</tbody>
</table>
<p>上面几个样式属性可以使用以下值</p>
<table>
<thead>
<tr>
<th>属性值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Line</td>
<td>栅格线</td>
</tr>
<tr>
<td>span 数值</td>
<td>栅格包含的栅格数量 （span 2: 占两格）</td>
</tr>
<tr>
<td>span 区域名称</td>
<td>栅格包含到指定的区域名称</td>
</tr>
<tr>
<td>auto</td>
<td>自动设置，默认为一个网格宽度和高度</td>
</tr>
</tbody>
</table>
<h3 id="根据栅格线" tabindex="-1"><a class="header-anchor" href="#根据栅格线" aria-hidden="true">#</a> 根据栅格线</h3>
<p>通过设置具体的第几条栅格线来设置区域位置，设置的数值可以是正数和负数。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/20.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根据栅格命名" tabindex="-1"><a class="header-anchor" href="#根据栅格命名" aria-hidden="true">#</a> 根据栅格命名</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> [r1-start] 100px [r1-end r2-start] 100px [r2-end r3-start] 100px [r3-end]<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> [c1-start] 100px [c1-end c2-start] 100px [c2-start c3-start] 100px [c3-end]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token comment">/* r1-end r2-start是一样的线, 同理参考命名在同一个中括号内的线 */</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> r1-end<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> c2-start<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> r3-start<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> c3-start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/19.png" alt=""></p>
<h3 id="根据自动命名" tabindex="-1"><a class="header-anchor" href="#根据自动命名" aria-hidden="true">#</a> 根据自动命名</h3>
<p>对于重复设置的栅格系统会自动命名，使用时使用 <code v-pre>c 1、c 2</code> 的方式定位栅格。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>

    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> [r-start] 100px [r-end]<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> [c-start] 100px [c-end]<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> r-start 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> c-start 2<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> r-start 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> c-end 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根据偏移量" tabindex="-1"><a class="header-anchor" href="#根据偏移量" aria-hidden="true">#</a> 根据偏移量</h3>
<p>使用 <code v-pre>span</code> 可以设置包含栅格的数量或包含到的区域名称 📌</p>
<table>
<thead>
<tr>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>grid-row-end:2</td>
<td>向下包含2行</td>
</tr>
<tr>
<td>grid-row-start:2</td>
<td>向上包含2行</td>
</tr>
<tr>
<td>grid-column-end:2</td>
<td>向右包含2行</td>
</tr>
<tr>
<td>grid-column-start:2</td>
<td>向左包含2行</td>
</tr>
</tbody>
</table>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token comment">/* span 1表示占一个格子 */</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> span 1<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> span 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简写模式" tabindex="-1"><a class="header-anchor" href="#简写模式" aria-hidden="true">#</a> 简写模式</h3>
<p>📗 可以使用 <code v-pre>grid-row</code> 设置行开始栅格线，使用 <code v-pre>grid-column</code> 设置结束栅格线。</p>
<p>上例中的居中对齐元素，可以使用以下简写的方式声明（推荐）。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 2/3表示区间为第2条线到第3条线之间 */</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">grid-row</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 或者 */</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">grid-row</span><span class="token punctuation">:</span> 2/span 1<span class="token punctuation">;</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 2/span 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/21.png" alt=""></p>
<h3 id="grid-area" tabindex="-1"><a class="header-anchor" href="#grid-area" aria-hidden="true">#</a> grid-area</h3>
<p><code v-pre>grid-area</code>更加简洁是同时对 <code v-pre>grid-row</code> 与 <code v-pre>grid-column</code> 属性的组合声明。</p>
<p>语法结构如下（逆时针）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>grid-row-start/grid-column-start/grid-row-end/grid-column-end。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是将元素定位在中间的示例。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span>/<span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> 2/2/4/3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bootstrap" tabindex="-1"><a class="header-anchor" href="#bootstrap" aria-hidden="true">#</a> BOOTSTRAP</h3>
<p>下面是bootstrap栅格系统的开发，根据指定的样式自动设置栅格大小。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/22.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">padding-top</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 5px silver<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 1020px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 320px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.row</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>12<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">gap</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px blueviolet<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.c-1</span> <span class="token punctuation">{</span>
        <span class="token property">grid-column</span><span class="token punctuation">:</span> span 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.c-2</span> <span class="token punctuation">{</span>
        <span class="token property">grid-column-end</span><span class="token punctuation">:</span> span 2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.c-3</span> <span class="token punctuation">{</span>
        <span class="token property">grid-column-end</span><span class="token punctuation">:</span> span 3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.c-4</span> <span class="token punctuation">{</span>
        <span class="token property">grid-column-end</span><span class="token punctuation">:</span> span 4<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.c-5</span> <span class="token punctuation">{</span>
        <span class="token property">grid-column-end</span><span class="token punctuation">:</span> span 5<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.c-6</span> <span class="token punctuation">{</span>
        <span class="token property">grid-column-end</span><span class="token punctuation">:</span> span 6<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.c-7</span> <span class="token punctuation">{</span>
        <span class="token property">grid-column-end</span><span class="token punctuation">:</span> span 7<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.blue</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #904FA9<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.green</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #EEBC31<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c-1 blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c-3 blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c-6 blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c-2 blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c-4 green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c-4 green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c-4 green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区域定位" tabindex="-1"><a class="header-anchor" href="#区域定位" aria-hidden="true">#</a> 区域定位</h2>
<p>📗 通过 <code v-pre>grid-area</code> 属性可以将元素放在指定区域中。<code v-pre>grid-area</code>由<code v-pre>grid-row-start</code>、<code v-pre>grid-column-start</code>、<code v-pre>grid-row-end</code>、<code v-pre>grid-column-end</code> 的简写模式。</p>
<h3 id="编号定位" tabindex="-1"><a class="header-anchor" href="#编号定位" aria-hidden="true">#</a> 编号定位</h3>
<p>下例中将元素放在容器的中心位置中的栅格中。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/21.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article div:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> 2/2/4/3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名定位" tabindex="-1"><a class="header-anchor" href="#命名定位" aria-hidden="true">#</a> 命名定位</h3>
<p>同样是上面的例子可以使用栅格线命名来附加元素。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/23.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 5px silver<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> [r] 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> [l] 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article div:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> r 2/l 2/r 4/l 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区域声明-👾" tabindex="-1"><a class="header-anchor" href="#区域声明-👾" aria-hidden="true">#</a> 区域声明 👾</h2>
<p>📗 区域是由多个单元格构成，使用 <code v-pre>grid-template-areas</code>可以定义栅格区域，并且栅格区域必须是矩形的。</p>
<h3 id="区域布局" tabindex="-1"><a class="header-anchor" href="#区域布局" aria-hidden="true">#</a> 区域布局</h3>
<p>下面是使用栅格区域布局移动端页面结构：</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/25.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 80px 1fr 50px<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 1fr 50px 60px<span class="token punctuation">;</span>
        <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">"header header header header"</span>
            <span class="token string">"nav main main aside"</span>
            <span class="token string">"footer footer footer footer"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
    	<span class="token comment">/* 完整的写法，推荐使用下面的简写方式*/</span>
		<span class="token comment">/* grid-area: main-start/main-start/main-end/main-end; */</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> main<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #E9EEEF<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">header</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2EC56C<span class="token punctuation">;</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">nav</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #E1732C<span class="token punctuation">;</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> nav<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">aside</span> <span class="token punctuation">{</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> aside<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #EEBC31<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">footer</span> <span class="token punctuation">{</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> footer<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #904FA9<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简写形式" tabindex="-1"><a class="header-anchor" href="#简写形式" aria-hidden="true">#</a> 简写形式</h3>
<p>使用<code v-pre>grid-template</code>进行栅格划分会更简洁。</p>
<ol>
<li>grid-template-rows</li>
<li>grid-template-columns</li>
<li>grid-template-areas</li>
</ol>
<p>语法格式为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> grid-template:
      <span class="token string">'栅格名称 栅格名称 栅格名称 栅格名称'</span> 行高
      <span class="token string">'栅格名称 栅格名称 栅格名称 栅格名称'</span> 行高
      <span class="token string">'栅格名称 栅格名称 栅格名称 栅格名称'</span> 行高/列宽 列宽 列宽 列宽<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是使用grid-template进行简写的示例</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span>
        <span class="token string">'header header header header'</span> 80px
        <span class="token string">'nav main main aside'</span> auto
        <span class="token string">'footer footer footer footer'</span> 50px/100px auto 50px 60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/24.png" alt=""></p>
<h3 id="区域命名" tabindex="-1"><a class="header-anchor" href="#区域命名" aria-hidden="true">#</a> 区域命名</h3>
<p>系统会为区域自动命名，上例中的会产生 <code v-pre>header-start</code> 水平与垂直同名的起始区域与 <code v-pre>header-end</code>水平与垂直同名的区域终止。</p>
<p>下面使用区域命名部署的效果</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/26.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 80px 1fr 50px<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 80 1fr<span class="token punctuation">;</span>
        <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">"header header header"</span>
            <span class="token string">"nav main main"</span>
            <span class="token string">"footer footer footer"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
        <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px blueviolet<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(1)</span> <span class="token punctuation">{</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> header-start/nav-start/main-end/main-end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(2)</span> <span class="token punctuation">{</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> footer-start/footer-start/footer-end/footer-end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区域占位" tabindex="-1"><a class="header-anchor" href="#区域占位" aria-hidden="true">#</a> 区域占位</h3>
<p>使用一个或多个 连续的<code v-pre>.</code> 定义区域占位 📌</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/27.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 33.3%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 33.3%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">"top . ."</span>
            <span class="token string">"top . ."</span>
            <span class="token string">"bottom bottom bottom"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.top</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.bottom</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        top
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        bottom
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="栅格流动" tabindex="-1"><a class="header-anchor" href="#栅格流动" aria-hidden="true">#</a> 栅格流动</h2>
<p>在容器中设置<code v-pre>grid-auto-flow</code> 属性可以改变单元格排列方式。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>column</td>
<td>按列排序</td>
</tr>
<tr>
<td>row</td>
<td>按行排列</td>
</tr>
<tr>
<td>dense</td>
<td>元素使用前面空余栅格（下面有示例说明）</td>
</tr>
</tbody>
</table>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<p>下例将单元按列排序流动<code v-pre>grid-auto-flow: column;</code></p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/28.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">article</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
      <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> solid 5px silver<span class="token punctuation">;</span>
      <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">div</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
      <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制填充" tabindex="-1"><a class="header-anchor" href="#强制填充" aria-hidden="true">#</a> 强制填充</h3>
<p>当元素在栅格中放不下时，将会发生换行产生留白，使用<code v-pre>grid-auto-flow: row dense;</code> 可以执行填充空白区域操作。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/29.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">padding-left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">padding-top</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 5px silver<span class="token punctuation">;</span>
        <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row dense<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
        <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">article div:nth-child(1)</span> <span class="token punctuation">{</span>
        <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/span 2<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">article div:nth-child(2)</span> <span class="token punctuation">{</span>
        <span class="token property">grid-column</span><span class="token punctuation">:</span> 2/span 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对齐管理" tabindex="-1"><a class="header-anchor" href="#对齐管理" aria-hidden="true">#</a> 对齐管理</h2>
<p>📗 可以通过属性方便的定义栅格或元素的对齐方式</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
<th>对象</th>
</tr>
</thead>
<tbody>
<tr>
<td>justify-content</td>
<td>所有栅格在容器中的水平对齐方式，容器有额外空间时</td>
<td>栅格容器</td>
</tr>
<tr>
<td>align-content</td>
<td>所有栅格在容器中的垂直对齐方式，容器有额外空间时</td>
<td>栅格容器</td>
</tr>
<tr>
<td>align-items</td>
<td>栅格内所有元素的垂直排列方式</td>
<td>栅格容器</td>
</tr>
<tr>
<td>justify-items</td>
<td>栅格内所有元素的横向排列方式</td>
<td>栅格容器</td>
</tr>
<tr>
<td>align-self</td>
<td>元素在栅格中垂直对齐方式</td>
<td>栅格元素</td>
</tr>
<tr>
<td>justify-self</td>
<td>元素在栅格中水平对齐方式</td>
<td>栅格元素</td>
</tr>
</tbody>
</table>
<h3 id="栅格对齐" tabindex="-1"><a class="header-anchor" href="#栅格对齐" aria-hidden="true">#</a> 栅格对齐</h3>
<p>📗 justify-content与align-content用于控制栅格的对齐方式，比如在栅格的尺寸<strong>小于</strong>容器的心里时，控制栅格的布局方式。</p>
<p>justify-content属性的值如下</p>
<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>start</td>
<td>容器左边</td>
</tr>
<tr>
<td>end</td>
<td>容器右边</td>
</tr>
<tr>
<td>center</td>
<td>容器中间</td>
</tr>
<tr>
<td>stretch</td>
<td>撑满容器</td>
</tr>
<tr>
<td>space-between</td>
<td>第一个栅格靠左边，最后一个栅格靠右边，余下元素平均分配空间</td>
</tr>
<tr>
<td>space-around</td>
<td>每个元素两侧的间隔相等。所以，栅格之间的间隔比栅格与容器边距的间隔大一倍</td>
</tr>
<tr>
<td>space-evenly</td>
<td>栅格间距离完全平均分配</td>
</tr>
</tbody>
</table>
<p>align-content属性的值如下</p>
<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>start</td>
<td>容器顶边</td>
</tr>
<tr>
<td>end</td>
<td>容器底边</td>
</tr>
<tr>
<td>center</td>
<td>容器垂直中间</td>
</tr>
<tr>
<td>stretch</td>
<td>撑满容器</td>
</tr>
<tr>
<td>space-between</td>
<td>第一个栅格靠左边，最后一个栅格靠右边，余下元素平均分配空间</td>
</tr>
<tr>
<td>space-around</td>
<td>每个元素两侧的间隔相等。所以，栅格之间的间隔比栅格与容器边距的间隔大一倍</td>
</tr>
<tr>
<td>space-evenly</td>
<td>栅格间距离完全平均分配</td>
</tr>
</tbody>
</table>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/30.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">border</span><span class="token punctuation">:</span> solid 5px silver<span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 200px 200px<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 200px 200px<span class="token punctuation">;</span>
<span class="token comment">/* 水平两边对其 */</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token comment">/* 垂直间隔对其 */</span>
<span class="token property">align-content</span><span class="token punctuation">:</span> space-evenly<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是栅格水平与垂直居中对齐的示例</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/31.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">grid-template</span><span class="token punctuation">:</span> 10vh 20vh / 30vw auto<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(1)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(2)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(3)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(4)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1st<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3rd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4th<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素对齐" tabindex="-1"><a class="header-anchor" href="#元素对齐" aria-hidden="true">#</a> 元素对齐</h3>
<p>justify-items与align-items用于控制所有栅格内元素的对齐方式</p>
<p>justify-items用于控制元素的水平对齐方式，可用的属性值如下</p>
<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>start</td>
<td>元素对齐栅格的左边</td>
</tr>
<tr>
<td>end</td>
<td>元素对齐栅格的右边</td>
</tr>
<tr>
<td>center</td>
<td>元素对齐栅格的中间</td>
</tr>
<tr>
<td>stretch</td>
<td>水平撑满栅格</td>
</tr>
</tbody>
</table>
<p>align-items用于控制元素的垂直对齐方式，可用的属性值如下</p>
<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>start</td>
<td>元素对齐栅格的顶边</td>
</tr>
<tr>
<td>end</td>
<td>元素对齐栅格的底边</td>
</tr>
<tr>
<td>center</td>
<td>元素对齐栅格的垂直中间</td>
</tr>
<tr>
<td>stretch</td>
<td>垂直撑满栅格</td>
</tr>
</tbody>
</table>
<p>下面是将元素在所在栅格中水平、垂直居中的示例</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/32.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span> 20vh / <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 区域内容的水平对其 */</span>
    <span class="token property">justify-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token comment">/* 区域内容的垂直对其 */</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是所有元素在所在栅格中居中对齐的示例</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/33.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span> 50vh 1fr / 50vw 1fr<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素独立控制" tabindex="-1"><a class="header-anchor" href="#元素独立控制" aria-hidden="true">#</a> 元素独立控制</h3>
<p>📗 justify-self与align-self控制单个栅格内元素的对齐方式，属性值与justify-items和align-items是一致的。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/34.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">justify-self</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:nth-child(4)</span> <span class="token punctuation">{</span>
    <span class="token property">justify-self</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合简写" tabindex="-1"><a class="header-anchor" href="#组合简写" aria-hidden="true">#</a> 组合简写</h3>
<h4 id="place-content" tabindex="-1"><a class="header-anchor" href="#place-content" aria-hidden="true">#</a> place-content</h4>
<p>用于控制栅格的对齐方式，语法如下：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">place-content</span><span class="token punctuation">:</span> &lt;align-content> &lt;justify-content>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="place-items" tabindex="-1"><a class="header-anchor" href="#place-items" aria-hidden="true">#</a> place-items</h4>
<p>控制所有元素的对齐方式，语法结构如下：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">place-items</span><span class="token punctuation">:</span> &lt;align-items> &lt;justify-items>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="place-self" tabindex="-1"><a class="header-anchor" href="#place-self" aria-hidden="true">#</a> place-self</h4>
<p>控制单个元素的对齐方式</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">place-self</span><span class="token punctuation">:</span> &lt;align-self> &lt;justify-self>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="自动排列" tabindex="-1"><a class="header-anchor" href="#自动排列" aria-hidden="true">#</a> 自动排列</h2>
<p>📗 当栅格无法放置内容时，系统会自动添加栅格用于放置溢出的元素，我们需要使用以下属性控制自动添加栅格的尺寸。</p>
<h3 id="属性说明" tabindex="-1"><a class="header-anchor" href="#属性说明" aria-hidden="true">#</a> 属性说明</h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
<th>对象</th>
</tr>
</thead>
<tbody>
<tr>
<td>grid-auto-rows</td>
<td>控制自动增加的栅格行的尺寸，grid-auto-flow:row; 为默认</td>
<td>容器</td>
</tr>
<tr>
<td>grid-auto-columns</td>
<td>控制自动增加的栅格列的尺寸，grid-auto-flow: column;</td>
<td>容器</td>
</tr>
</tbody>
</table>
<h3 id="自动栅格行" tabindex="-1"><a class="header-anchor" href="#自动栅格行" aria-hidden="true">#</a> 自动栅格行</h3>
<p>下面定义了2X2的栅格，但有多个元素，系统将自动创建栅格用于放置额外元素。我们使用grid-auto-rows来控制增加栅格的行高。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/35.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">grid-auto-columns</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
        <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动行列" tabindex="-1"><a class="header-anchor" href="#自动行列" aria-hidden="true">#</a> 自动行列</h3>
<p>下面创建了2X2栅格，我们将第2个DIV设置的格栅已经超过了四个栅格，所以系统会自动创建栅格。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/36.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">grid-auto-columns</span><span class="token punctuation">:</span> 10vw<span class="token punctuation">;</span>
        <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span> 10vh<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
        <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(2)</span> <span class="token punctuation">{</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> 5/5/5/5<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="终级简写" tabindex="-1"><a class="header-anchor" href="#终级简写" aria-hidden="true">#</a> 终级简写</h2>
<p>grid是简写属性，可以用来设置：</p>
<ul>
<li>显式网格属性 grid-template-rows、grid-template-columns和 grid-template-areas，</li>
<li>隐式网格属性 grid-auto-rows、grid-auto-columns 和 grid-auto-flow，</li>
<li>间距属性 grid-column-gap和 grid-row-gap</li>
</ul>
<p>使用语法:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>&lt;<span class="token string">'grid-template'</span>> | &lt;<span class="token string">'grid-template-rows'</span>> / [ auto-flow &amp;&amp; dense? ] &lt;<span class="token string">'grid-auto-columns'</span>>? | [ auto-flow &amp;&amp; dense? ] &lt;<span class="token string">'grid-auto-rows'</span>>? / &lt;<span class="token string">'grid-template-columns'</span>>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="行列划分" tabindex="-1"><a class="header-anchor" href="#行列划分" aria-hidden="true">#</a> 行列划分</h3>
<p>下面使用grid布局内容，将body容器的栅格居中排列，将main容器内的栅格内的元素居中排列。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/37.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">place-content</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid</span><span class="token punctuation">:</span> 10vh / <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">place-items</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(1)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(2)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(3)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(4)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义区域" tabindex="-1"><a class="header-anchor" href="#定义区域" aria-hidden="true">#</a> 定义区域</h3>
<p>使用grid也可以定义栅格区域</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/38.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid</span><span class="token punctuation">:</span>
            <span class="token string">'header header'</span>50px <span class="token string">'nav main'</span>auto <span class="token string">'footer footer'</span>60px/100px auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(1)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(2)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> nav<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(3)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">;</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> main<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(4)</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
        <span class="token property">grid-area</span><span class="token punctuation">:</span> footer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
