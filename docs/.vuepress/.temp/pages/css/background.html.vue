<template><div><h1 id="背景处理" tabindex="-1"><a class="header-anchor" href="#背景处理" aria-hidden="true">#</a> 背景处理</h1>
<h2 id="背景样式" tabindex="-1"><a class="header-anchor" href="#背景样式" aria-hidden="true">#</a> 背景样式</h2>
<h3 id="背景颜色" tabindex="-1"><a class="header-anchor" href="#背景颜色" aria-hidden="true">#</a> 背景颜色</h3>
<p>背景颜色可以使用 <code v-pre>rga | rgba | 十六进制</code> 等颜色格式</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/1.png" alt=""></p>
<h3 id="背景图片" tabindex="-1"><a class="header-anchor" href="#背景图片" aria-hidden="true">#</a> 背景图片</h3>
<p>可以使用 <code v-pre>png| gif |jpeg</code> 等图片做为背景使用</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="背景裁切" tabindex="-1"><a class="header-anchor" href="#背景裁切" aria-hidden="true">#</a> 背景裁切</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-clip</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>背景图片在容器元素内所显示的区域，例如<code v-pre>content-box</code>表示背景图片只会在元素的内容区域显示 📌</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-box</td>
<td>包括边框</td>
</tr>
<tr>
<td>padding-box</td>
<td>不含边框，包括内边距</td>
</tr>
<tr>
<td>content-box</td>
<td>内容区域</td>
</tr>
</tbody>
</table>
<h3 id="背景重复" tabindex="-1"><a class="header-anchor" href="#背景重复" aria-hidden="true">#</a> 背景重复</h3>
<p>用于设置背景重复的规则</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>repeat</td>
<td>水平、垂直重复</td>
</tr>
<tr>
<td>repeat-x</td>
<td>水平重复</td>
</tr>
<tr>
<td>repeat-y</td>
<td>垂直重复</td>
</tr>
<tr>
<td>no-repeat</td>
<td>不重复</td>
</tr>
<tr>
<td>space</td>
<td>背景图片对称均匀分布</td>
</tr>
</tbody>
</table>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="背景滚动" tabindex="-1"><a class="header-anchor" href="#背景滚动" aria-hidden="true">#</a> 背景滚动</h3>
<p>📗 <code v-pre>background-attachment</code>用于设置在页面滚动时的图片处理方式。（在父元素的容器大小限制之下，子元素内容超出滚动，并且带有背景图的情况）</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>scroll</td>
<td>背景滚动</td>
</tr>
<tr>
<td>fixed</td>
<td>背景固定</td>
</tr>
</tbody>
</table>
<h4 id="scroll" tabindex="-1"><a class="header-anchor" href="#scroll" aria-hidden="true">#</a> scroll</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token comment">/* scroll跟随内容滚动 */</span>
        <span class="token property">background-attachment</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 0 0.6rem #ddd<span class="token punctuation">,</span> 0 0 0.6rem #fff<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November
        weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it
        would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up
        Holborn Hill.
        London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November
        weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it
        would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up
        Holborn Hill.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/scroll.gif" alt=""></p>
<h4 id="fixed" tabindex="-1"><a class="header-anchor" href="#fixed" aria-hidden="true">#</a> fixed</h4>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/fixed.gif" alt=""></p>
<h3 id="背景位置" tabindex="-1"><a class="header-anchor" href="#背景位置" aria-hidden="true">#</a> 背景位置</h3>
<p><code v-pre>background-position</code>用于设置背景图片的水平、垂直定位。</p>
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
<td>左对齐</td>
</tr>
<tr>
<td>right</td>
<td>右对齐</td>
</tr>
<tr>
<td>center</td>
<td>居中对齐</td>
</tr>
<tr>
<td>top</td>
<td>顶端对齐</td>
</tr>
<tr>
<td>bottom</td>
<td>底部对齐</td>
</tr>
</tbody>
</table>
<p>居中对齐</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token comment">/* 或 X Y  */</span>
<span class="token property">background-position</span><span class="token punctuation">:</span> 50% 50%<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>水平居右，垂直居中</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-position</span><span class="token punctuation">:</span> right center<span class="token punctuation">;</span>
<span class="token comment">/* 或 X Y  */</span>
<span class="token property">background-position</span><span class="token punctuation">:</span> 100% 50%<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用具体数值定义</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-position</span><span class="token punctuation">:</span> 100px 100px<span class="token punctuation">;</span>
<span class="token comment">/* 也支持使用负值  */</span>
<span class="token property">background-position</span><span class="token punctuation">:</span> -200px 100px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> 200px 100px<span class="token punctuation">;</span>
<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
<span class="token property">background-position</span><span class="token punctuation">:</span> 80px 70px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/position.gif" alt=""></p>
<h3 id="背景尺寸" tabindex="-1"><a class="header-anchor" href="#背景尺寸" aria-hidden="true">#</a> 背景尺寸</h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>cover</td>
<td>背景完全覆盖，可能会有背景溢出</td>
</tr>
<tr>
<td>contain</td>
<td>图片不溢出的放在容器中，可能会漏出部分区域</td>
</tr>
</tbody>
</table>
<p>指定数值定义宽高尺寸</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-size</span><span class="token punctuation">:</span> 50% 100%<span class="token punctuation">;</span>
<span class="token comment">/* 或 Width Height  */</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> 200px 200px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>宽度固定高度自动</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-size</span><span class="token punctuation">:</span> 50% auto<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="多个背景" tabindex="-1"><a class="header-anchor" href="#多个背景" aria-hidden="true">#</a> 多个背景</h3>
<p>后定义的背景置于底层</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg1.png<span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多属性定义</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg1.png<span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
<span class="token property">background-position</span><span class="token punctuation">:</span> top left<span class="token punctuation">,</span> right bottom<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以一次定义多个背景图片。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg1.png<span class="token punctuation">)</span></span> left 50% no-repeat<span class="token punctuation">,</span>
                <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg.png<span class="token punctuation">)</span></span> right 100% no-repeat red<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>实例</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg1.png<span class="token punctuation">)</span></span><span class="token punctuation">,</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
<span class="token property">padding</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/2.png" alt=""></p>
<h3 id="组合设置" tabindex="-1"><a class="header-anchor" href="#组合设置" aria-hidden="true">#</a> 组合设置</h3>
<p>可以使用一条指令设置背景</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg1.png<span class="token punctuation">)</span></span> no-repeat content-box fixed<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/syntax.gif" alt=""></p>
<h2 id="盒子阴影" tabindex="-1"><a class="header-anchor" href="#盒子阴影" aria-hidden="true">#</a> 盒子阴影</h2>
<p>可以使用 <code v-pre>box-shadow</code> 对盒子元素设置阴影，参数为 <code v-pre>水平偏移,垂直偏移,模糊度,颜色</code> 构成。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 5px <span class="token function">rgba</span><span class="token punctuation">(</span>100<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> .5<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/3.png" alt=""></p>
<h2 id="颜色渐变" tabindex="-1"><a class="header-anchor" href="#颜色渐变" aria-hidden="true">#</a> 颜色渐变</h2>
<h3 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a> 线性渐变</h3>
<p>激变一般用在背景颜色中使用（默认渐变角度是从上向下）</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/4.png" alt=""></p>
<p>渐变角度</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>30deg<span class="token punctuation">,</span> red<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/5.png" alt=""></p>
<p>向右渐变</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> red<span class="token punctuation">,</span> green<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/6.png" alt=""></p>
<p>向左渐变</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to left<span class="token punctuation">,</span> red<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>左上渐变</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to top left<span class="token punctuation">,</span> red<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/7.png" alt=""></p>
<p>右下渐变</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right bottom<span class="token punctuation">,</span> red<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置多个颜色</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 200<span class="token punctuation">)</span><span class="token punctuation">,</span> green<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>122<span class="token punctuation">,</span> 211<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/8.png" alt=""></p>
<h3 id="径向渐变" tabindex="-1"><a class="header-anchor" href="#径向渐变" aria-hidden="true">#</a> 径向渐变</h3>
<p>设置渐变</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/9.png" alt=""></p>
<p>设置渐变宽度与高度</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>100px 200px<span class="token punctuation">,</span> red<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/10.png" alt=""></p>
<p>左下渐变</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at bottom left<span class="token punctuation">,</span> red<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/11.png" alt=""></p>
<p>右下渐变</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at bottom right<span class="token punctuation">,</span> red<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>左侧向中心渐变</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at center left<span class="token punctuation">,</span> red<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/12.png" alt=""></p>
<p>底部向中心渐变</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at 50% 100%<span class="token punctuation">,</span> red<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="标识位" tabindex="-1"><a class="header-anchor" href="#标识位" aria-hidden="true">#</a> 标识位</h3>
<p>颜色未指定标识时，颜色会平均分布。</p>
<p>红色与蓝色在50%和60%间发生激变.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> red 50%<span class="token punctuation">,</span> blue 60%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/13.png" alt=""></p>
<p>标识位相同时将没有过渡效果</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> red 50%<span class="token punctuation">,</span> blue 50%<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/14.png" alt=""></p>
<p>径向标识位绘制小太阳</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/15.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>red 0<span class="token punctuation">,</span> yellow 30%<span class="token punctuation">,</span> black 60%<span class="token punctuation">,</span> black 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过在两个颜色间中间点定义过渡位置</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> red<span class="token punctuation">,</span> 30%<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/16.png" alt=""></p>
<h3 id="渐变重复-💡" tabindex="-1"><a class="header-anchor" href="#渐变重复-💡" aria-hidden="true">#</a> 渐变重复 💡</h3>
<p>下例定义从0到50px为蓝色,50px到100px的黄色，并进行重复后产生渐变的进度条。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/17.png" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">repeating-linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> blue 50px<span class="token punctuation">,</span>yellow 50px<span class="token punctuation">,</span>yellow 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="径向重复" tabindex="-1"><a class="header-anchor" href="#径向重复" aria-hidden="true">#</a> 径向重复</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">repeating-radial-gradient</span><span class="token punctuation">(</span>100px 100px<span class="token punctuation">,</span> red 0%<span class="token punctuation">,</span> yellow 40%<span class="token punctuation">,</span> black 60%<span class="token punctuation">,</span> black 200%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/bg/18.png" alt=""></p>
</div></template>
