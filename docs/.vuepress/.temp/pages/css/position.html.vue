<template><div><h1 id="定位布局" tabindex="-1"><a class="header-anchor" href="#定位布局" aria-hidden="true">#</a> 定位布局</h1>
<h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2>
<p>📗 定位的基本思想很简单，它允许你定义元素框相对于其正常位置应该出现的位置，或者相对于父元素、另一个元素甚至浏览器窗口本身的位置。</p>
<h3 id="定位类型" tabindex="-1"><a class="header-anchor" href="#定位类型" aria-hidden="true">#</a> 定位类型</h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>static</td>
<td>默认行为，参考文档流</td>
</tr>
<tr>
<td>relative</td>
<td>相对定位</td>
</tr>
<tr>
<td>absolute</td>
<td>绝对定位</td>
</tr>
<tr>
<td>fixed</td>
<td>固定定位</td>
</tr>
<tr>
<td>sticky</td>
<td>粘性定位</td>
</tr>
</tbody>
</table>
<h3 id="位置偏移" tabindex="-1"><a class="header-anchor" href="#位置偏移" aria-hidden="true">#</a> 位置偏移</h3>
<p>可以为部分类型的定位元素设置<code v-pre>上、下、左、右</code> 的位置偏移。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>top</td>
<td>距离顶边</td>
</tr>
<tr>
<td>bottom</td>
<td>距离下边</td>
</tr>
<tr>
<td>left</td>
<td>距离左部</td>
</tr>
<tr>
<td>right</td>
<td>距离右边</td>
</tr>
</tbody>
</table>
<p>👾 元素直接设置<code v-pre>absolute</code>定位是相对于文档的：</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/1.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 6px blueviolet<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #f2a67d<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>👾 使用百分比单位时使用的是父级尺寸，比如下面的示例<code v-pre>left:100%</code>会定位到最右边</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/2.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #1abc9c<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main div</span> <span class="token punctuation">{</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
        <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #333<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相对定位" tabindex="-1"><a class="header-anchor" href="#相对定位" aria-hidden="true">#</a> 相对定位</h2>
<p>👾 <code v-pre>relative</code>相对定位是相对于元素<strong>原来的位置</strong>控制，当元素发生位置偏移时，原位置留白。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/3.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 10px blueviolet<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">article img</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    泉州市。市境西南接厦门市、漳州市，西界龙岩市，北邻三明市，东北达福州市、莆田市，东隔台湾海峡与台湾相望。地处闽东南沿海丘陵平原区，地势西北高，东南低，西北部为戴云山。晋江东溪和西溪于南安市双溪口汇合，往东流贯市区，注入泉州湾。全市总面积11,287平方公里，人口878.23万，市人民政府驻丰泽区东海街道。泉州是闽东南沿海政治、经济、文化和交通中心，首批国家历史文化名城，古代海上丝绸之路的起点，联合国教科文组织设立的世界多元文化展示中心，世界宗教博物馆，中国首届东亚文化之都，全国文明城市，国家卫生城市。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位" aria-hidden="true">#</a> 绝对定位</h2>
<p>👾  绝对定义不受文档流影响，就像漂浮在页面中的精灵，绝对定位元素拥有行内块特性。</p>
<h3 id="参照元素" tabindex="-1"><a class="header-anchor" href="#参照元素" aria-hidden="true">#</a> 参照元素</h3>
<p>如果父级元素设置了 <code v-pre>relative | fixed | sticky</code> ，绝对定位子元素将参数此父元素进行定位。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/4.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 6px blueviolet<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #f2a67d<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认位置-💡" tabindex="-1"><a class="header-anchor" href="#默认位置-💡" aria-hidden="true">#</a> 默认位置 💡</h3>
<p>💡 如果没有为定位元素设置偏移，将受父元素的padding等属性影响（content-box）。但使用定位一般都会设置偏移位置。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/1.gif" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 6px blueviolet<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #f2a67d<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置尺寸" tabindex="-1"><a class="header-anchor" href="#设置尺寸" aria-hidden="true">#</a> 设置尺寸</h3>
<p>📗 在没用设置定位元素的宽高时，可以通过定位的偏移值设置元素的尺寸。</p>
<p>以下如果我们设置了div的宽高，那么<code v-pre>right: 0; bottom: 0;</code>就是不生效的；而现在它会依据这个设置得到尺寸是宽高一半一半。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/5.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 6px blueviolet<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #f2a67d<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="居中定位" tabindex="-1"><a class="header-anchor" href="#居中定位" aria-hidden="true">#</a> 居中定位</h3>
<p>通过将 <code v-pre>left</code> 设置为50% ,并向左偏移子元素宽度一半可以实现水平居中，垂直居中使用方式类似。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/6.png" alt=""></p>
<h3 id="滚动行为-💡" tabindex="-1"><a class="header-anchor" href="#滚动行为-💡" aria-hidden="true">#</a> 滚动行为 💡</h3>
<p>💡 固定定位元素会随滚动条发生滚动。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/2.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 10px blueviolet<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article div:nth-of-type(1)</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="纵向重叠-👾" tabindex="-1"><a class="header-anchor" href="#纵向重叠-👾" aria-hidden="true">#</a> 纵向重叠 👾</h2>
<p>📗  <code v-pre>z-index</code>属性目前只有在<code v-pre>position:relative</code>、<code v-pre>position:absolute</code>和<code v-pre>position:fixed</code>参与的情况下才有作用，表示层级，类似photoshop中层级的概念。现在z-index对于flex容器的子元素也会生效。</p>
<p>📗 <code v-pre>absolute</code>是一个能够独当一面的属性，其使用可以不要<code v-pre>relative</code>，当然，也可以不使用<code v-pre>z-index</code>。在默认情况下，元素应用了非<code v-pre>static</code>的<code v-pre>position</code>属性后，<strong>其就会有一个隐晦的层级</strong>，<strong>会居于普通元素之上</strong>，无需额外设置z-index属性值。（当一个元素设置了定位之后，这个元素便理论上可以放到页面的任何位置，这个元素当然也可以盖到其它元素上面，这时候就出现了层级的关系）</p>
<div class="custom-container tip"><p class="custom-container-title">z-index</p>
<ul>
<li>
<p>如果元素重叠在一起，可以使用 z-index 控制元素的上下层级，数值越大越在上面。（正负都可以）</p>
</li>
<li>
<p>父级子元素设置 z-index 没有意义，子元素永远在父元素上 面的。</p>
</li>
</ul>
</div>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/7.png" alt=""></p>
<h3 id="层级改变" tabindex="-1"><a class="header-anchor" href="#层级改变" aria-hidden="true">#</a> 层级改变</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/3.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 10px blueviolet<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* hover时提升第二个div的z-index */</span>
    <span class="token selector">article:hover div:nth-of-type(2)</span> <span class="token punctuation">{</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">article div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* 默认情况下将第一个div的index增高，将会覆盖第二个 */</span>
    <span class="token selector">article div:nth-of-type(1)</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">article div:nth-of-type(2)</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>两个div子元素都是绝对定位，可以任意设置层级</em></p>
<h3 id="购物车" tabindex="-1"><a class="header-anchor" href="#购物车" aria-hidden="true">#</a> 购物车</h3>
<p>固定显示区域的层级要高于hover显示之后的层级，从而在hover状态下 <code v-pre>我的购物车</code> 的下边线能够遮住下面的元素。</p>
<p>👾 为了让 <code v-pre>我的购物车</code> 的z-index生效，必须设置元素的定位属性：<code v-pre>position: relative</code>。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/4.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article:hover div:nth-of-type(1)</span> <span class="token punctuation">{</span>
        <span class="token property">border-bottom</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article:hover div:nth-of-type(2)</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article div</span> <span class="token punctuation">{</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 3.5em<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px blueviolet<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article div:nth-of-type(1)</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 这是必要的！ */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article div:nth-of-type(2)</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> -150px<span class="token punctuation">;</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>我的购物车<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>购物车中暂无产品<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="固定定位" tabindex="-1"><a class="header-anchor" href="#固定定位" aria-hidden="true">#</a> 固定定位</h2>
<p>📗 元素相对于页面固定定位在某个位置，固定定位元素不会在滚动时改变位置 ，使用<code v-pre>position: fixed</code> 产生固定定位。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/5.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">header</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
        <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 5px #7f35c9<span class="token punctuation">;</span>
        <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 5px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>100<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 3000px<span class="token punctuation">;</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 5px #ddd<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="粘性定位" tabindex="-1"><a class="header-anchor" href="#粘性定位" aria-hidden="true">#</a> 粘性定位</h2>
<h3 id="同级定位" tabindex="-1"><a class="header-anchor" href="#同级定位" aria-hidden="true">#</a> 同级定位</h3>
<p>粘性定位如果是同级的，上面的元素并不会被顶走，会一直<strong>叠加</strong>堆接在一起。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/6.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 5px blueviolet<span class="token punctuation">;</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main article h2</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #db1f77<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">text-indent</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main article h2:nth-of-type(1)</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main article section</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>HHH<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>TTT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非同级定位" tabindex="-1"><a class="header-anchor" href="#非同级定位" aria-hidden="true">#</a> 非同级定位</h3>
<p>不属于同一个父元素设置粘性定位时，后面的元素<strong>挤掉</strong>原来位置的元素如下例。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/7.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 5px blueviolet<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main article section:nth-of-type(odd) h2</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main article section h2</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #db1f77<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">text-indent</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main article section p</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>简介<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
                泉州市（闽南语：泉州市，白話字：Choân-chiu-chhǐ，臺羅：Tsuân-tsiu-tshǐ，閩拼：Zuánziū-cî，國際音標：/tsuan˨˨ ʨiu˧˧ ʨʰi˧˧/），简称泉、鲤，泉州府城又称刺桐城（Zaytun：زيتون或Chidun：ᠴᠢᠳᠤᠨ，在阿拉伯語、蒙古語意為橄欖）、温陵、清源，是中華人民共和國福建省下辖的地级市，位于福建省中南部沿海。市境西南接厦门市、漳州市，西界龙岩市，北邻三明市，东北达福州市、莆田市，东隔台湾海峡与台湾相望。地处闽东南沿海丘陵平原区，地势西北高，东南低，西北部为戴云山。晋江东溪和西溪于南安市双溪口汇合，往东流贯市区，注入泉州湾。全市总面积11,287平方公里，人口878.23万，市人民政府驻丰泽区东海街道。泉州是闽东南沿海政治、经济、文化和交通中心，首批国家历史文化名城，古代海上絲綢之路的起点，联合国教科文组织设立的世界多元文化展示中心，世界宗教博物馆，中国首届东亚文化之都，全国文明城市，国家卫生城市。
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>经济<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
                泉州是闻名海内外的国际花园城市，中国三大金融综合改革试验区之一，海峡西岸经济区五大中心城市之一，经济总量连续22年居福建省首位[3]。2017年城市综合经济竞争力位列中国第28位。[4]泉州是中国著名的侨乡籍貫地，同时泉州也是闽南文化的发源地与发祥地，闽南文化保护的核心区与富集区，历史文化深厚、名胜古迹众多，有“海滨邹鲁”、“光明之城”的美誉。
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>文化<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
                泉州文化生活丰富，并拥有大量国家级非物质文化遗产。如南音、泉州北管、泉州拍胸舞、梨园戏、高甲戏（柯派）、泉州提线木偶戏、晋江布袋木偶戏、惠安石雕、泉州花灯、德化瓷烧制技艺、惠安女服饰、打城戏、五祖拳、水密隔舱福船制造技艺、乌龙茶制作技艺（铁观音制作技艺）、闽南传统民居营造技艺、灵源万应茶、南安英都拔拔灯、蟳埔女习俗、泉州（李尧宝）刻纸、木偶头雕刻（江加走木偶头雕刻）、安海嗦啰嗹习俗、安海抓鸭等。
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
