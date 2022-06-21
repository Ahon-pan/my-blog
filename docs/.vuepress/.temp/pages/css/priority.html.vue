<template><div><h1 id="元素权重" tabindex="-1"><a class="header-anchor" href="#元素权重" aria-hidden="true">#</a> 元素权重</h1>
<p>📗 元素会被多个样式一层层作用，这就是层叠样式表的来源。如果多个样式做用在元素上就会产生优先级权重问题。</p>
<p>使用类、ID、伪类都有不同的权重，具体应用哪条规则要看权限大小。</p>
<ul>
<li>相同权重的规则应用最后出现的</li>
<li>可以使用 <code v-pre>!important</code> 强制提升某个规则的权限</li>
</ul>
<h2 id="权重应用-👾" tabindex="-1"><a class="header-anchor" href="#权重应用-👾" aria-hidden="true">#</a> 权重应用 👾</h2>
<table>
<thead>
<tr>
<th>规则</th>
<th>粒度</th>
</tr>
</thead>
<tbody>
<tr>
<td>ID</td>
<td>0100</td>
</tr>
<tr>
<td>class，属性值</td>
<td>0010</td>
</tr>
<tr>
<td>标签，伪元素</td>
<td>0001</td>
</tr>
<tr>
<td>*</td>
<td>0000</td>
</tr>
<tr>
<td>行内样式</td>
<td>1000</td>
</tr>
</tbody>
</table>
<p>下面是ID权限大于CLASS的示例</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.color</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">#hot</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hot<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hot<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/priority/1.png" alt=""></p>
<p>属性权重的示例</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token comment">/* 权重:0021 = class和id两个属性为20 + h2标签为1  */</span>
    <span class="token selector">h2[class="color"][id]</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* 权重:0012 = class属性值为10 + article和h2两个标签为2*/</span>
    <span class="token selector">article h2[class="color"]</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hot<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>HDCMS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/priority/2.png" alt=""></p>
<p>行级权重优先级最高</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token comment">/* 权重:0012  */</span>
    <span class="token selector">article h2[class="color"]</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">#hot</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hot<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/priority/3.png" alt=""></p>
<h2 id="强制优先级" tabindex="-1"><a class="header-anchor" href="#强制优先级" aria-hidden="true">#</a> 强制优先级</h2>
<p>有时在规则冲突时，为了让某个规则强制有效可以使用 !important。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两条规则权限一样，默认应用第二个规则，但第一个规则使用了<code v-pre>!important</code> 提升了权限，所以被应用。</p>
<h2 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> LESS</h2>
<p>📗 为了使 CSS 更易维护和扩展，并减少在书写规则时对权重的思考，使用LESS是不错的主意。</p>
<p>很多软件提供了自动生成LESS的功能，下面是在VSCODE中使用的方法。</p>
<ol>
<li>安装插件 <a href="https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less" target="_blank" rel="noopener noreferrer">easy-less 编译LESS(opens new window)<ExternalLinkIcon/></a></li>
<li>编辑扩展名为 <code v-pre>.less</code> 的文件将自动生成同名的 <code v-pre>.css</code> 文件。</li>
</ol>
<p>下面是一个LESS的示例</p>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token selector">h1</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将生成 <code v-pre>css</code> 文件如下</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">main article h1</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承规则-👾" tabindex="-1"><a class="header-anchor" href="#继承规则-👾" aria-hidden="true">#</a> 继承规则 👾</h2>
<div class="custom-container tip"><p class="custom-container-title">子元素可以继承父元素设置的样式。</p>
<ul>
<li>👾 子元素并不是继承全部样式。比如边框、高度等并不会继承。</li>
<li>👾 继承的规则没有权重</li>
</ul>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>hello <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Michael<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/priority/4.png" alt=""></p>
<p>上例中 <code v-pre>h2</code> 标签没有设置颜色样式，将继承 <code v-pre>article</code> 的颜色，并且边框没有产生继承。</p>
<h2 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> 通配符</h2>
<p>在开发中使用<code v-pre>*</code> 选择器会有一个问题。因为通配符的权重为0，而继承的规则<strong>没有权重(NULL)</strong>，看以下代码产生的问题。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>hello <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Michael<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/priority/5.png" alt=""></p>
<p>span并没有继承 <code v-pre>h2</code> 的颜色，就是因为继承没有权重。而使用了 <code v-pre>*</code> 权重为0的规则。(0权重大于null无权重，<code v-pre>*</code> &gt; 继承)</p>
</div></template>
