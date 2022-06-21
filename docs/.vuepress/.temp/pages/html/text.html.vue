<template><div><h1 id="文本相关" tabindex="-1"><a class="header-anchor" href="#文本相关" aria-hidden="true">#</a> 文本相关</h1>
<h2 id="基本标签" tabindex="-1"><a class="header-anchor" href="#基本标签" aria-hidden="true">#</a> 基本标签</h2>
<h3 id="p" tabindex="-1"><a class="header-anchor" href="#p" aria-hidden="true">#</a> p</h3>
<p><code v-pre>p</code>标签标记了一个段落内容。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是第一个段落。这是第一个段落。
    这是第一个段落。这是第一个段落。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是第二个段落。这是第二个段落。
    这是第二个段落。这是第二个段落。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pre" tabindex="-1"><a class="header-anchor" href="#pre" aria-hidden="true">#</a> pre</h3>
<blockquote>
<p>preformatted: 预先格式化</p>
</blockquote>
<p><strong>原样显示</strong>文本内容包括空白、换行等。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>
        这是pre标签的显示效果
            这是换行后的内容，空白和换行都会保留
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/pre.png" alt=""></p>
<h3 id="br" tabindex="-1"><a class="header-anchor" href="#br" aria-hidden="true">#</a> br</h3>
<p>📌 在<code v-pre>html</code> 中回车是<strong>忽略</strong>的，使用 <code v-pre>br</code> 标签可以实现换行效果。</p>
<h3 id="span" tabindex="-1"><a class="header-anchor" href="#span" aria-hidden="true">#</a> span</h3>
<p><code v-pre>span</code> 标签与 <code v-pre>div</code> 标签都是没有语义的，<code v-pre>span</code> 常用于对某些文本特殊控制，但该文本又没有适合的语义标签。</p>
<h2 id="描述文本" tabindex="-1"><a class="header-anchor" href="#描述文本" aria-hidden="true">#</a> 描述文本</h2>
<p><code v-pre>small</code> 用于设置描述、声明等文本。</p>
<p>HTML 中的<code v-pre>small</code>元素將使文本的字体变小一号。(例如从大变成中等，从中等变成小，从小变成超小)。在HTML5中，除了它的样式含义，这个元素被重新定义为表示边注释和附属细则，包括版权和法律文本。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>MDN Web Docs is a learning platform for Web technologies and the software that powers the Web.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>The content is licensed under a Creative Commons Attribution-ShareAlike 2.5 Generic License.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/small.png" alt=""></p>
<h3 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h3>
<p>标签定义日期或时间，或者两者。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span><span class="token punctuation">></span></span> 2019-07-26 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="abbr" tabindex="-1"><a class="header-anchor" href="#abbr" aria-hidden="true">#</a> abbr</h3>
<blockquote>
<p>abbreviation: 缩写</p>
</blockquote>
<p><code v-pre>abbr</code>用于代表缩写，并且可以通过可选的title属性提供完整的描述。若使用 <code v-pre>title</code>属性，则它必须且仅可包含完整的描述内容。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>You can use <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>abbr</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Cascading Style Sheets<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>CSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>abbr</span><span class="token punctuation">></span></span> to style your <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>abbr</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HyperText Markup Language<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>HTML<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>abbr</span><span class="token punctuation">></span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/abbr.png" alt=""></p>
<h3 id="sub" tabindex="-1"><a class="header-anchor" href="#sub" aria-hidden="true">#</a> sub</h3>
<p>用于数字的下标内容</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>水的化学式为H<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub</span><span class="token punctuation">></span></span>O
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="sup" tabindex="-1"><a class="header-anchor" href="#sup" aria-hidden="true">#</a> sup</h3>
<p>用于数字的上标内容</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>请计算5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sup</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sup</span><span class="token punctuation">></span></span>平方
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/subsup.png" alt=""></p>
<h3 id="del" tabindex="-1"><a class="header-anchor" href="#del" aria-hidden="true">#</a> del</h3>
<p><code v-pre>del</code> 标签表示删除的内容，<code v-pre>ins</code>(insert) 一般与 <code v-pre>del</code> 标签配合使用描述更新与修正。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>原价 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>del</span><span class="token punctuation">></span></span>200元<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>del</span><span class="token punctuation">></span></span> 现价 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ins</span><span class="token punctuation">></span></span>100元<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ins</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/delins.png" alt=""></p>
<h3 id="s" tabindex="-1"><a class="header-anchor" href="#s" aria-hidden="true">#</a> s</h3>
<p><code v-pre>s</code> 标签显示效果与 <code v-pre>del</code> 相似，但语义用来定义那些不正确、不准确或没有用的文本。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s</span><span class="token punctuation">></span></span>A 太阳是方的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
B 地球是圆的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/s.png" alt=""></p>
<h3 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> code</h3>
<p>用于显示代码块内容，一般需要代码格式化插件完成。</p>
<h3 id="progress" tabindex="-1"><a class="header-anchor" href="#progress" aria-hidden="true">#</a> progress</h3>
<p>用于表示完成任务的进度，当游览器不支持时显示内容。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>progress</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>完成60%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>progress</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/progress.png" alt=""></p>
<h2 id="强调文本" tabindex="-1"><a class="header-anchor" href="#强调文本" aria-hidden="true">#</a> 强调文本</h2>
<h3 id="strong" tabindex="-1"><a class="header-anchor" href="#strong" aria-hidden="true">#</a> strong</h3>
<p><code v-pre>strong</code> 标签和 <code v-pre>em</code> 一样，用于强调文本，但是它们的强调程度不同。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>Jerry<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>正在学习<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">></span></span>HTML<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/strongem.png" alt=""></p>
<h3 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> mark</h3>
<p>用于突出显示文本内容，类似我们生活中使用的马克笔。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>请认真学习以下语言 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">></span></span>PHP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">></span></span>、<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">></span></span>JavaScript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/mark.png" alt=""></p>
<h2 id="引用标签" tabindex="-1"><a class="header-anchor" href="#引用标签" aria-hidden="true">#</a> 引用标签</h2>
<h3 id="cite" tabindex="-1"><a class="header-anchor" href="#cite" aria-hidden="true">#</a> cite</h3>
<blockquote>
<p>Citation: 引文</p>
</blockquote>
<p><code v-pre>cite</code> 标签通常表示它所包含的文本对某个参考文献的引用，或文章作者的名子。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>这本小说是 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cite</span><span class="token punctuation">></span></span>毛姆<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cite</span><span class="token punctuation">></span></span> 写的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/cite.png" alt=""></p>
<h3 id="blockquote" tabindex="-1"><a class="header-anchor" href="#blockquote" aria-hidden="true">#</a> blockquote</h3>
<p><code v-pre>blockquote</code> 用来定义摘自另一个源的块引用</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>下而是来自某一个大叔，对失败的认知
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span> <span class="token attr-name">cite</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.houdunren.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	在坚持的人面前，失败终将被踏过。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/blockquote.png" alt=""></p>
<h3 id="q" tabindex="-1"><a class="header-anchor" href="#q" aria-hidden="true">#</a> q</h3>
<p><code v-pre>q</code> 用于表示行内引用文本，在大部分浏览器中会加上引号。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>最新课程 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q</span><span class="token punctuation">></span></span>HTML开启WEB征途<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q</span><span class="token punctuation">></span></span> 已经发布了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/q.png" alt=""></p>
<h2 id="联系信息" tabindex="-1"><a class="header-anchor" href="#联系信息" aria-hidden="true">#</a> 联系信息</h2>
<h3 id="address" tabindex="-1"><a class="header-anchor" href="#address" aria-hidden="true">#</a> address</h3>
<p>用于设置联系地址等信息，一般将<code v-pre>address</code> 放在<code v-pre>footer</code> 标签中。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>address</span><span class="token punctuation">></span></span>
	感谢您提交建议到 caffreygo@163.com
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>address</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/html/text/address.png" alt=""></p>
</div></template>
