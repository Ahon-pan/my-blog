<template><div><h1 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h1>
<p>📗 大部分HTML元素都有系统提供的样式，但有以下问题</p>
<ul>
<li>不同浏览器显示样式不一致</li>
<li>样式过于简单，显示效果不美观</li>
<li>很难按照设计稿完全呈现显示效果</li>
</ul>
<h2 id="样式声明" tabindex="-1"><a class="header-anchor" href="#样式声明" aria-hidden="true">#</a> 样式声明</h2>
<p>可以通过多种方式定义样式表。</p>
<h3 id="外部样式" tabindex="-1"><a class="header-anchor" href="#外部样式" aria-hidden="true">#</a> 外部样式</h3>
<div class="custom-container tip"><p class="custom-container-title">使用 link标签引入外部样式文件，需要注意以下几点。</p>
<ul>
<li>link 标签放在 <code v-pre>head</code> 标签内部</li>
<li>样式文件要以 <code v-pre>.css</code> 为扩展名</li>
<li>一个页面往往需要引入多个样式文件</li>
</ul>
</div>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>rel</td>
<td>定义当前文档与被链接文档之间的关系</td>
</tr>
<tr>
<td>href</td>
<td>外部样式文件</td>
</tr>
<tr>
<td>type</td>
<td>文档类型</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="嵌入样式" tabindex="-1"><a class="header-anchor" href="#嵌入样式" aria-hidden="true">#</a> 嵌入样式</h3>
<p>使用 <code v-pre>style</code> 标签可以在文档内部定义样式规则。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式" aria-hidden="true">#</a> 内联样式</h3>
<p>可以为某个标签单独设置样式。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>caffreygo.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="导入样式-💡" tabindex="-1"><a class="header-anchor" href="#导入样式-💡" aria-hidden="true">#</a> 导入样式 💡</h3>
<p>📗  使用 <code v-pre>@import</code> 可以在原样式规则中导入其他样式表，可以在外部样式、<code v-pre>style</code>标签中使用。</p>
<p>可以使用以下两种方式导入</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>@import <span class="token string">"style.css"</span>
@import <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"style.css"</span><span class="token punctuation">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>导入样式要放在样式规则前面定义。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span>
    @import url("hdcms.css");
    body {
        background: red;
    }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style1</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他细节" tabindex="-1"><a class="header-anchor" href="#其他细节" aria-hidden="true">#</a> 其他细节</h2>
<h3 id="空白" tabindex="-1"><a class="header-anchor" href="#空白" aria-hidden="true">#</a> 空白</h3>
<p>📗 在样式规则中可以随意使用空白，空白只是看不见但同样<strong>占用空间</strong>，所以可以结合其他工具如 <code v-pre>webpack</code> 等将<code v-pre>css</code> 📗 为一行。</p>
<h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3>
<p>注释是对定义样式规则的说明，便于后期维护理解。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">...
body</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 这是注释的使用 */</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误" tabindex="-1"><a class="header-anchor" href="#错误" aria-hidden="true">#</a> 错误</h3>
<p>📗 样式规则如果存在错误，解析器会选择<strong>忽略</strong>，并不会影响其他样式规则。</p>
<p>以下代码的<code v-pre>hello:red</code> 是无效样式但不影响后面的 <code v-pre>font-size:100px;</code> 规则使用。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">hello</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始样式" tabindex="-1"><a class="header-anchor" href="#初始样式" aria-hidden="true">#</a> 初始样式</h2>
<p>有些标签默认含有内外边距，且不同浏览器大小也不一样。为了统一我们可以<strong>重置</strong>标签的CSS默认样式。</p>
<p>最简单的方式就是使用插件<a href="https://meyerweb.com/eric/tools/css/reset/" target="_blank" rel="noopener noreferrer">css-reset (opens new window)<ExternalLinkIcon/></a>完成，也可以在vscode等编辑器中定义代码片段。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
