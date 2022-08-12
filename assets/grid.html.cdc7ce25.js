import{_ as p,o,c,b as s,d as e,a,e as n,r as l}from"./app.4bbb0959.js";const u={},i=a('<h1 id="\u6805\u683C\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u6805\u683C\u5E03\u5C40" aria-hidden="true">#</a> \u6805\u683C\u5E03\u5C40</h1><h2 id="\u6805\u683C\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u6805\u683C\u4ECB\u7ECD" aria-hidden="true">#</a> \u6805\u683C\u4ECB\u7ECD</h2><h3 id="\u540D\u8BCD\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u540D\u8BCD\u89E3\u91CA" aria-hidden="true">#</a> \u540D\u8BCD\u89E3\u91CA</h3><p>\u{1F4D7} CSS \u7F51\u683C\u5E03\u5C40(Grid Layout) \u662FCSS\u4E2D\u6700\u5F3A\u5927\u7684\u5E03\u5C40\u7CFB\u7EDF\u3002 \u8FD9\u662F\u4E00\u4E2A\u4E8C\u7EF4\u7CFB\u7EDF\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u53EF\u4EE5\u540C\u65F6\u5904\u7406\u5217\u548C\u884C\u3002</p><p>\u6805\u683C\u7CFB\u7EDF\u4E0EFLEX\u5F39\u6027\u5E03\u5C40\u6709\u76F8\u4F3C\u4E4B\u5904\u7406\uFF0C\u90FD\u662F\u7531\u7236\u5BB9\u5668\u5305\u542B\u591A\u4E2A\u9879\u76EE\u5143\u7D20\u7684\u4F7F\u7528\u3002</p><h3 id="\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u517C\u5BB9\u6027</h3>',6),r=n("\u4E0B\u9762\u662F\u6805\u683C\u7CFB\u7EDF\u517C\u5BB9\u6027\u6570\u636E\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728 "),k={href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"},d=n("https://caniuse.com/ (opens new window)"),g=n("\u7F51\u7AD9\u67E5\u770B\uFF0C\u6240\u4EE5\u5728\u6839\u636E\u9879\u76EE\u4F7F\u7528\u7684\u573A\u666F\u51B3\u5B9A\u662F\u5426\u4F7F\u7528\u6805\u683C\u5E03\u5C40\u3002"),h=a(`<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/2.png" alt=""></p><h2 id="\u57FA\u672C\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u77E5\u8BC6" aria-hidden="true">#</a> \u57FA\u672C\u77E5\u8BC6</h2><p>\u6805\u683C\u6709\u5173\u7684\u5143\u7D20\u8BF4\u660E</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/3.png" alt=""></p><h2 id="\u58F0\u660E\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5BB9\u5668" aria-hidden="true">#</a> \u58F0\u660E\u5BB9\u5668</h2><h3 id="\u5757\u7EA7\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u5BB9\u5668" aria-hidden="true">#</a> \u5757\u7EA7\u5BB9\u5668</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/4.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">#container</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 50px 50px 50px<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 50px 50px 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u884C\u7EA7\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u884C\u7EA7\u5BB9\u5668" aria-hidden="true">#</a> \u884C\u7EA7\u5BB9\u5668</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> inline-grid<span class="token punctuation">;</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/5.png" alt=""></p><h2 id="\u5212\u5206\u884C\u5217" tabindex="-1"><a class="header-anchor" href="#\u5212\u5206\u884C\u5217" aria-hidden="true">#</a> \u5212\u5206\u884C\u5217</h2><p>\u{1F4D7} \u6805\u683C\u6709\u70B9\u7C7B\u4F3C\u8868\u683C\uFF0C\u62E5\u6709 <code>\u884C</code> \u548C <code>\u5217</code>\u3002</p><p>\u4F7F\u7528 <code>grid-template-columns</code> \u89C4\u5219\u53EF\u5212\u5206\u5217\u6570\uFF0C\u4F7F\u7528 <code>grid-template-rows</code> \u5212\u5206\u884C\u6570\u3002</p><h3 id="\u56FA\u5B9A\u5BBD\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u56FA\u5B9A\u5BBD\u5EA6" aria-hidden="true">#</a> \u56FA\u5B9A\u5BBD\u5EA6</h3><p>\u4E0B\u9762\u662F\u4F7F\u7528\u56FA\u5B9A\u5BBD\u5EA6\u5212\u5206\u4E24\u884C\u4E09\u5217\u7684\u7684\u793A\u4F8B\uFF0C\u5F53\u5BB9\u5668\u5BBD\u5EA6\u8FC7\u5927\u65F6\u5C06\u6F0F\u767D\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
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
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/6.png" alt=""></p><h3 id="\u767E\u5206\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u767E\u5206\u6BD4" aria-hidden="true">#</a> \u767E\u5206\u6BD4 %</h3><p>\u53EF\u4EE5\u4F7F\u7528\u4F7F\u7528\u767E\u5206\u6BD4\u81EA\u52A8\u9002\u5C31\u5BB9\u5668\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/7.png" alt=""></p><div class="language-text ext-text"><pre class="language-text"><code>display: grid;
grid-template-rows: 50% 50%;
grid-template-columns: 25% 25% 25% 25%;
</code></pre></div><h3 id="\u91CD\u590D\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u8BBE\u7F6E" aria-hidden="true">#</a> \u91CD\u590D\u8BBE\u7F6E</h3><p>\u{1F4D7} \u4F7F\u7528 <code>repeat</code> \u7EDF\u4E00\u8BBE\u7F6E\u503C\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u91CD\u590D\u6570\u91CF\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u91CD\u590D\u503C</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/8.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u{1F47E} \u53EF\u4EE5\u8BBE\u7F6E<strong>\u591A\u4E2A\u503C</strong>\u6765\u5B9A\u4E49\u91CD\u590D\uFF0C\u4E0B\u9762\u5B9A\u4E49\u4E86\u56DB\u5217\uFF0C\u4EE5 <code>100%\u300120px</code> \u91CD\u590D\u6392\u5217\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/9.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token comment">/* 50%\u7684\u9AD8\u5EA6\u91CD\u590D\u4E24\u884C */</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* 100px 50px\u7684\u9AD8\u5EA6\u91CD\u590D\u4E24\u6B21 */</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 100px 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u81EA\u52A8\u586B\u5145-auto-fill" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u586B\u5145-auto-fill" aria-hidden="true">#</a> \u81EA\u52A8\u586B\u5145 auto-fill</h3><p>\u81EA\u52A8\u586B\u5145\u662F\u6839\u636E\u5BB9\u5668\u5C3A\u5BF8\uFF0C\u81EA\u52A8<strong>\u8BBE\u7F6E\u5143\u7D20\u5C3A\u5BF8</strong>\u3002(\u5728\u5BB9\u5668\u5BBD\u5EA6\u5DF2\u77E5\u7684\u60C5\u51B5\u4E0B\uFF0C\u81EA\u52A8\u8BA1\u7B97\u5355\u5143\u683C\u5927\u5C0F)</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/6.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6BD4\u4F8B\u5212\u5206-fr" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u4F8B\u5212\u5206-fr" aria-hidden="true">#</a> \u6BD4\u4F8B\u5212\u5206 fr</h3><p>\u{1F4D7} \u4F7F\u7528 <code>fr</code> \u5355\u4F4D\u8BBE\u7F6E\u5143\u7D20\u5728\u7A7A\u95F4\u4E2D\u6240\u5360\u7684\u6BD4\u4F8B\uFF0C\u4E0B\u9762\u6309<code>1\u4EFD-2\u4EFD</code> \u5206\u6210\u4E24\u7EC4\u5171\u56DB\u5217\u3002</p><h4 id="\u5355\u4F4D\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F4D\u7EC4\u5408" aria-hidden="true">#</a> \u5355\u4F4D\u7EC4\u5408</h4><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/10.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 1fr 2fr<span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 2fr 1fr<span class="token punctuation">;</span>
</code></pre></div><h4 id="\u91CD\u590D\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u5B9A\u4E49" aria-hidden="true">#</a> \u91CD\u590D\u5B9A\u4E49</h4><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/9.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 2fr 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u81EA\u52A8\u7A7A\u95F4-auto-\u{1F4D0}" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u7A7A\u95F4-auto-\u{1F4D0}" aria-hidden="true">#</a> \u81EA\u52A8\u7A7A\u95F4 auto \u{1F4D0}</h3><p>\u{1F4D7} \u4E0B\u9762\u4E3A\u7B2C\u4E8C\u4E2A\u6805\u683C\u5217\u4F7F\u7528<code>auto</code>\u6765\u8BA9\u5176\u83B7\u53D6\u6240\u6709\u5269\u4F59\u7A7A\u95F4</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/11.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u7EC4\u5408\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5B9A\u4E49" aria-hidden="true">#</a> \u7EC4\u5408\u5B9A\u4E49</h3><p>\u{1F4D7} <code>grid-tempalte</code> \u662F <code>grid-template-rows</code>\u3001<code>grid-template-columns</code>\u3001<code>grid-template-areas</code> \u7684\u4E09\u4E2A\u5C5E\u6027\u7684\u7B80\u5199\u3002</p><p>\u4E0B\u9762\u4F7F\u7528<code>grid-template</code>\u5B9E\u73B0\u4E09\u884C\u4E09\u5217\u7684\u5E03\u5C40</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.app</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span> / <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.app &gt; div</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 1px red<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u4F7F\u7528 <code>grid-template</code> \u540C\u65F6\u58F0\u660E <code>grid-template-rows\u3001grid-template-columns</code>\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span> 10vh 20vh 10vh/ 30vw 1fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/12.png" alt=""></p><h3 id="minmax" tabindex="-1"><a class="header-anchor" href="#minmax" aria-hidden="true">#</a> minmax</h3><p>\u{1F4D7} \u4F7F\u7528 <code>minmax</code> \u65B9\u6CD5\u53EF\u4EE5\u8BBE\u7F6E\u53D6\u503C\u8303\u56F4\uFF0C\u4E0B\u5217\u5728\u884C\u9AD8\u5728 <code>\u6700\u5C0F100px ~ \u6700\u59271fr</code> \u95F4\u53D6\u503C\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 1fr<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u95F4\u8DDD\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u95F4\u8DDD\u5B9A\u4E49" aria-hidden="true">#</a> \u95F4\u8DDD\u5B9A\u4E49</h2><ul><li>row-gap</li><li>column-gap</li><li>gap</li></ul><h3 id="\u884C\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#\u884C\u95F4\u8DDD" aria-hidden="true">#</a> \u884C\u95F4\u8DDD</h3><p>\u4F7F\u7528 <code>row-gap</code> \u8BBE\u7F6E\u884C\u95F4\u8DDD\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/13.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">row-gap</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5217\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#\u5217\u95F4\u8DDD" aria-hidden="true">#</a> \u5217\u95F4\u8DDD</h3><p>\u4F7F\u7528 <code>column-gap</code> \u5B9A\u4E49\u5217\u95F4\u8DDD\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/14.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u7EC4\u5408\u5B9A\u4E49-1" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5B9A\u4E49-1" aria-hidden="true">#</a> \u7EC4\u5408\u5B9A\u4E49</h3><p>\u{1F4D7} \u4F7F\u7528 <code>gap</code> \u89C4\u5219\u53EF\u4EE5\u4E00\u6B21\u5B9A\u4E49\u884C\u3001\u5217\u95F4\u8DDD\uFF0C\u5982\u679C\u95F4\u8DDD\u4E00\u6837\u53EF\u4EE5\u53EA\u8BBE\u7F6E\u4E00\u4E2A\u503C\u3002</p><p><strong>\u8BBE\u7F6E\u884C\u5217\u95F4\u8DDD\u4E3A20px\u4E0E10px</strong></p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/15.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">gap</span><span class="token punctuation">:</span> 20px 10px<span class="token punctuation">;</span>
</code></pre></div><p><strong>\u7EDF\u4E00\u8BBE\u7F6E\u884C\u5217\u95F4\u8DDD\u4E3A20px</strong></p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/16.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6805\u683C\u547D\u540D-\u{1F47E}" tabindex="-1"><a class="header-anchor" href="#\u6805\u683C\u547D\u540D-\u{1F47E}" aria-hidden="true">#</a> \u6805\u683C\u547D\u540D \u{1F47E}</h2><p>\u{1F4D7} \u6805\u683C\u7EBF\u53EF\u4EE5\u4F7F\u7528\u547D\u540D\u4E0E\u7F16\u53F7\u627E\u5230\uFF0C\u65B9\u4FBF\u63A7\u5236\u6307\u5B9A\u6805\u683C\uFF0C\u6216\u5C06\u5185\u5BB9\u6DFB\u52A0\u5230\u6307\u5B9A\u6805\u683C\u4E2D\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/17.png" alt=""></p><h3 id="\u72EC\u7ACB\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u72EC\u7ACB\u547D\u540D" aria-hidden="true">#</a> \u72EC\u7ACB\u547D\u540D</h3><p>\u53EF\u4EE5\u4E3A\u6BCF\u4E2A\u6805\u683C\u72EC\u7ACB\u547D\u540D\u6765\u8FDB\u884C\u8C03\u7528\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/18.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
        <span class="token comment">/* \u7EBF\u7684\u547D\u540D\uFF1A |-||-||-| */</span>
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u81EA\u52A8\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u547D\u540D" aria-hidden="true">#</a> \u81EA\u52A8\u547D\u540D</h3><p>\u5BF9\u4E8E\u91CD\u590D\u8BBE\u7F6E\u7684\u6805\u683C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u547D\u540D\uFF0C\u4F7F\u7528\u65F6\u4F7F\u7528 <code>c 1\u3001c 2</code> \u7684\u65B9\u5F0F\u5B9A\u4F4D\u6805\u683C\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 5px silver<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> [r-start] 100px [r-end]<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> [c-start] 100px [c-end]<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u5728\u4F7F\u7528[r-start]\u547D\u540D\u540E \u901A\u8FC7r-start num\u786E\u5B9A\u5BF9\u5E94\u7684\u7EBF */</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> r-start 2<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> r-end 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> c-start 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> c-end 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5143\u7D20\u5B9A\u4F4D-\u{1F4D0}" tabindex="-1"><a class="header-anchor" href="#\u5143\u7D20\u5B9A\u4F4D-\u{1F4D0}" aria-hidden="true">#</a> \u5143\u7D20\u5B9A\u4F4D \u{1F4D0}</h2><table><thead><tr><th>\u6837\u5F0F\u5C5E\u6027</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>grid-row-start</td><td>\u884C\u5F00\u59CB\u6805\u683C\u7EBF</td></tr><tr><td>grid-row-end</td><td>\u884C\u7ED3\u675F\u6805\u683C\u7EBF</td></tr><tr><td>grid-column-start</td><td>\u5217\u5F00\u59CB\u6805\u683C\u7EBF</td></tr><tr><td>grid-column-end</td><td>\u5217\u7ED3\u675F\u6805\u683C\u7EBF</td></tr></tbody></table><p>\u4E0A\u9762\u51E0\u4E2A\u6837\u5F0F\u5C5E\u6027\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u503C</p><table><thead><tr><th>\u5C5E\u6027\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>Line</td><td>\u6805\u683C\u7EBF</td></tr><tr><td>span \u6570\u503C</td><td>\u6805\u683C\u5305\u542B\u7684\u6805\u683C\u6570\u91CF \uFF08span 2: \u5360\u4E24\u683C\uFF09</td></tr><tr><td>span \u533A\u57DF\u540D\u79F0</td><td>\u6805\u683C\u5305\u542B\u5230\u6307\u5B9A\u7684\u533A\u57DF\u540D\u79F0</td></tr><tr><td>auto</td><td>\u81EA\u52A8\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A\u4E00\u4E2A\u7F51\u683C\u5BBD\u5EA6\u548C\u9AD8\u5EA6</td></tr></tbody></table><h3 id="\u6839\u636E\u6805\u683C\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u6805\u683C\u7EBF" aria-hidden="true">#</a> \u6839\u636E\u6805\u683C\u7EBF</h3><p>\u901A\u8FC7\u8BBE\u7F6E\u5177\u4F53\u7684\u7B2C\u51E0\u6761\u6805\u683C\u7EBF\u6765\u8BBE\u7F6E\u533A\u57DF\u4F4D\u7F6E\uFF0C\u8BBE\u7F6E\u7684\u6570\u503C\u53EF\u4EE5\u662F\u6B63\u6570\u548C\u8D1F\u6570\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/20.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
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
</code></pre></div><h3 id="\u6839\u636E\u6805\u683C\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u6805\u683C\u547D\u540D" aria-hidden="true">#</a> \u6839\u636E\u6805\u683C\u547D\u540D</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> [r1-start] 100px [r1-end r2-start] 100px [r2-end r3-start] 100px [r3-end]<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> [c1-start] 100px [c1-end c2-start] 100px [c2-start c3-start] 100px [c3-end]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token comment">/* r1-end r2-start\u662F\u4E00\u6837\u7684\u7EBF, \u540C\u7406\u53C2\u8003\u547D\u540D\u5728\u540C\u4E00\u4E2A\u4E2D\u62EC\u53F7\u5185\u7684\u7EBF */</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> r1-end<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> c2-start<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> r3-start<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> c3-start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/19.png" alt=""></p><h3 id="\u6839\u636E\u81EA\u52A8\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u81EA\u52A8\u547D\u540D" aria-hidden="true">#</a> \u6839\u636E\u81EA\u52A8\u547D\u540D</h3><p>\u5BF9\u4E8E\u91CD\u590D\u8BBE\u7F6E\u7684\u6805\u683C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u547D\u540D\uFF0C\u4F7F\u7528\u65F6\u4F7F\u7528 <code>c 1\u3001c 2</code> \u7684\u65B9\u5F0F\u5B9A\u4F4D\u6805\u683C\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>

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
</code></pre></div><h3 id="\u6839\u636E\u504F\u79FB\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u504F\u79FB\u91CF" aria-hidden="true">#</a> \u6839\u636E\u504F\u79FB\u91CF</h3><p>\u4F7F\u7528 <code>span</code> \u53EF\u4EE5\u8BBE\u7F6E\u5305\u542B\u6805\u683C\u7684\u6570\u91CF\u6216\u5305\u542B\u5230\u7684\u533A\u57DF\u540D\u79F0 \u{1F4CC}</p><table><thead><tr><th>\u793A\u4F8B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>grid-row-end:2</td><td>\u5411\u4E0B\u5305\u542B2\u884C</td></tr><tr><td>grid-row-start:2</td><td>\u5411\u4E0A\u5305\u542B2\u884C</td></tr><tr><td>grid-column-end:2</td><td>\u5411\u53F3\u5305\u542B2\u884C</td></tr><tr><td>grid-column-start:2</td><td>\u5411\u5DE6\u5305\u542B2\u884C</td></tr></tbody></table><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token comment">/* span 1\u8868\u793A\u5360\u4E00\u4E2A\u683C\u5B50 */</span>
    <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">grid-row-end</span><span class="token punctuation">:</span> span 1<span class="token punctuation">;</span>
    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">grid-column-end</span><span class="token punctuation">:</span> span 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7B80\u5199\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199\u6A21\u5F0F" aria-hidden="true">#</a> \u7B80\u5199\u6A21\u5F0F</h3><p>\u{1F4D7} \u53EF\u4EE5\u4F7F\u7528 <code>grid-row</code> \u8BBE\u7F6E\u884C\u5F00\u59CB\u6805\u683C\u7EBF\uFF0C\u4F7F\u7528 <code>grid-column</code> \u8BBE\u7F6E\u7ED3\u675F\u6805\u683C\u7EBF\u3002</p><p>\u4E0A\u4F8B\u4E2D\u7684\u5C45\u4E2D\u5BF9\u9F50\u5143\u7D20\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u7B80\u5199\u7684\u65B9\u5F0F\u58F0\u660E\uFF08\u63A8\u8350\uFF09\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* 2/3\u8868\u793A\u533A\u95F4\u4E3A\u7B2C2\u6761\u7EBF\u5230\u7B2C3\u6761\u7EBF\u4E4B\u95F4 */</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">grid-row</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 2/3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u6216\u8005 */</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">grid-row</span><span class="token punctuation">:</span> 2/span 1<span class="token punctuation">;</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 2/span 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/21.png" alt=""></p><h3 id="grid-area" tabindex="-1"><a class="header-anchor" href="#grid-area" aria-hidden="true">#</a> grid-area</h3><p><code>grid-area</code>\u66F4\u52A0\u7B80\u6D01\u662F\u540C\u65F6\u5BF9 <code>grid-row</code> \u4E0E <code>grid-column</code> \u5C5E\u6027\u7684\u7EC4\u5408\u58F0\u660E\u3002</p><p>\u8BED\u6CD5\u7ED3\u6784\u5982\u4E0B\uFF08\u9006\u65F6\u9488\uFF09\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>grid-row-start/grid-column-start/grid-row-end/grid-column-end\u3002
</code></pre></div><p>\u4E0B\u9762\u662F\u5C06\u5143\u7D20\u5B9A\u4F4D\u5728\u4E2D\u95F4\u7684\u793A\u4F8B\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span>/<span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> 2/2/4/3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="bootstrap" tabindex="-1"><a class="header-anchor" href="#bootstrap" aria-hidden="true">#</a> BOOTSTRAP</h3><p>\u4E0B\u9762\u662Fbootstrap\u6805\u683C\u7CFB\u7EDF\u7684\u5F00\u53D1\uFF0C\u6839\u636E\u6307\u5B9A\u7684\u6837\u5F0F\u81EA\u52A8\u8BBE\u7F6E\u6805\u683C\u5927\u5C0F\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/22.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c-1 blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c-3 blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c-6 blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c-2 blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c-4 green<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c-4 green<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c-4 green<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u533A\u57DF\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u533A\u57DF\u5B9A\u4F4D" aria-hidden="true">#</a> \u533A\u57DF\u5B9A\u4F4D</h2><p>\u{1F4D7} \u901A\u8FC7 <code>grid-area</code> \u5C5E\u6027\u53EF\u4EE5\u5C06\u5143\u7D20\u653E\u5728\u6307\u5B9A\u533A\u57DF\u4E2D\u3002<code>grid-area</code>\u7531<code>grid-row-start</code>\u3001<code>grid-column-start</code>\u3001<code>grid-row-end</code>\u3001<code>grid-column-end</code> \u7684\u7B80\u5199\u6A21\u5F0F\u3002</p><h3 id="\u7F16\u53F7\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u7F16\u53F7\u5B9A\u4F4D" aria-hidden="true">#</a> \u7F16\u53F7\u5B9A\u4F4D</h3><p>\u4E0B\u4F8B\u4E2D\u5C06\u5143\u7D20\u653E\u5728\u5BB9\u5668\u7684\u4E2D\u5FC3\u4F4D\u7F6E\u4E2D\u7684\u6805\u683C\u4E2D\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/21.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article div:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> 2/2/4/3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u547D\u540D\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u5B9A\u4F4D" aria-hidden="true">#</a> \u547D\u540D\u5B9A\u4F4D</h3><p>\u540C\u6837\u662F\u4E0A\u9762\u7684\u4F8B\u5B50\u53EF\u4EE5\u4F7F\u7528\u6805\u683C\u7EBF\u547D\u540D\u6765\u9644\u52A0\u5143\u7D20\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/23.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
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
</code></pre></div><h2 id="\u533A\u57DF\u58F0\u660E-\u{1F47E}" tabindex="-1"><a class="header-anchor" href="#\u533A\u57DF\u58F0\u660E-\u{1F47E}" aria-hidden="true">#</a> \u533A\u57DF\u58F0\u660E \u{1F47E}</h2><p>\u{1F4D7} \u533A\u57DF\u662F\u7531\u591A\u4E2A\u5355\u5143\u683C\u6784\u6210\uFF0C\u4F7F\u7528 <code>grid-template-areas</code>\u53EF\u4EE5\u5B9A\u4E49\u6805\u683C\u533A\u57DF\uFF0C\u5E76\u4E14\u6805\u683C\u533A\u57DF\u5FC5\u987B\u662F\u77E9\u5F62\u7684\u3002</p><h3 id="\u533A\u57DF\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u533A\u57DF\u5E03\u5C40" aria-hidden="true">#</a> \u533A\u57DF\u5E03\u5C40</h3><p>\u4E0B\u9762\u662F\u4F7F\u7528\u6805\u683C\u533A\u57DF\u5E03\u5C40\u79FB\u52A8\u7AEF\u9875\u9762\u7ED3\u6784\uFF1A</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/25.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 80px 1fr 50px<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 1fr 50px 60px<span class="token punctuation">;</span>
        <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&quot;header header header header&quot;</span>
            <span class="token string">&quot;nav main main aside&quot;</span>
            <span class="token string">&quot;footer footer footer footer&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
    	<span class="token comment">/* \u5B8C\u6574\u7684\u5199\u6CD5\uFF0C\u63A8\u8350\u4F7F\u7528\u4E0B\u9762\u7684\u7B80\u5199\u65B9\u5F0F*/</span>
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u7B80\u5199\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199\u5F62\u5F0F" aria-hidden="true">#</a> \u7B80\u5199\u5F62\u5F0F</h3><p>\u4F7F\u7528<code>grid-template</code>\u8FDB\u884C\u6805\u683C\u5212\u5206\u4F1A\u66F4\u7B80\u6D01\u3002</p><ol><li>grid-template-rows</li><li>grid-template-columns</li><li>grid-template-areas</li></ol><p>\u8BED\u6CD5\u683C\u5F0F\u4E3A\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code> grid-template:
      <span class="token string">&#39;\u6805\u683C\u540D\u79F0 \u6805\u683C\u540D\u79F0 \u6805\u683C\u540D\u79F0 \u6805\u683C\u540D\u79F0&#39;</span> \u884C\u9AD8
      <span class="token string">&#39;\u6805\u683C\u540D\u79F0 \u6805\u683C\u540D\u79F0 \u6805\u683C\u540D\u79F0 \u6805\u683C\u540D\u79F0&#39;</span> \u884C\u9AD8
      <span class="token string">&#39;\u6805\u683C\u540D\u79F0 \u6805\u683C\u540D\u79F0 \u6805\u683C\u540D\u79F0 \u6805\u683C\u540D\u79F0&#39;</span> \u884C\u9AD8/\u5217\u5BBD \u5217\u5BBD \u5217\u5BBD \u5217\u5BBD<span class="token punctuation">;</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u4F7F\u7528grid-template\u8FDB\u884C\u7B80\u5199\u7684\u793A\u4F8B</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span>
        <span class="token string">&#39;header header header header&#39;</span> 80px
        <span class="token string">&#39;nav main main aside&#39;</span> auto
        <span class="token string">&#39;footer footer footer footer&#39;</span> 50px/100px auto 50px 60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/24.png" alt=""></p><h3 id="\u533A\u57DF\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u533A\u57DF\u547D\u540D" aria-hidden="true">#</a> \u533A\u57DF\u547D\u540D</h3><p>\u7CFB\u7EDF\u4F1A\u4E3A\u533A\u57DF\u81EA\u52A8\u547D\u540D\uFF0C\u4E0A\u4F8B\u4E2D\u7684\u4F1A\u4EA7\u751F <code>header-start</code> \u6C34\u5E73\u4E0E\u5782\u76F4\u540C\u540D\u7684\u8D77\u59CB\u533A\u57DF\u4E0E <code>header-end</code>\u6C34\u5E73\u4E0E\u5782\u76F4\u540C\u540D\u7684\u533A\u57DF\u7EC8\u6B62\u3002</p><p>\u4E0B\u9762\u4F7F\u7528\u533A\u57DF\u547D\u540D\u90E8\u7F72\u7684\u6548\u679C</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/26.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 80px 1fr 50px<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 80 1fr<span class="token punctuation">;</span>
        <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&quot;header header header&quot;</span>
            <span class="token string">&quot;nav main main&quot;</span>
            <span class="token string">&quot;footer footer footer&quot;</span><span class="token punctuation">;</span>
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u533A\u57DF\u5360\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u533A\u57DF\u5360\u4F4D" aria-hidden="true">#</a> \u533A\u57DF\u5360\u4F4D</h3><p>\u4F7F\u7528\u4E00\u4E2A\u6216\u591A\u4E2A \u8FDE\u7EED\u7684<code>.</code> \u5B9A\u4E49\u533A\u57DF\u5360\u4F4D \u{1F4CC}</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/27.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
        <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&quot;top . .&quot;</span>
            <span class="token string">&quot;top . .&quot;</span>
            <span class="token string">&quot;bottom bottom bottom&quot;</span><span class="token punctuation">;</span>
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        top
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        bottom
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u6805\u683C\u6D41\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6805\u683C\u6D41\u52A8" aria-hidden="true">#</a> \u6805\u683C\u6D41\u52A8</h2><p>\u5728\u5BB9\u5668\u4E2D\u8BBE\u7F6E<code>grid-auto-flow</code> \u5C5E\u6027\u53EF\u4EE5\u6539\u53D8\u5355\u5143\u683C\u6392\u5217\u65B9\u5F0F\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>column</td><td>\u6309\u5217\u6392\u5E8F</td></tr><tr><td>row</td><td>\u6309\u884C\u6392\u5217</td></tr><tr><td>dense</td><td>\u5143\u7D20\u4F7F\u7528\u524D\u9762\u7A7A\u4F59\u6805\u683C\uFF08\u4E0B\u9762\u6709\u793A\u4F8B\u8BF4\u660E\uFF09</td></tr></tbody></table><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><p>\u4E0B\u4F8B\u5C06\u5355\u5143\u6309\u5217\u6392\u5E8F\u6D41\u52A8<code>grid-auto-flow: column;</code></p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/28.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u5F3A\u5236\u586B\u5145" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236\u586B\u5145" aria-hidden="true">#</a> \u5F3A\u5236\u586B\u5145</h3><p>\u5F53\u5143\u7D20\u5728\u6805\u683C\u4E2D\u653E\u4E0D\u4E0B\u65F6\uFF0C\u5C06\u4F1A\u53D1\u751F\u6362\u884C\u4EA7\u751F\u7559\u767D\uFF0C\u4F7F\u7528<code>grid-auto-flow: row dense;</code> \u53EF\u4EE5\u6267\u884C\u586B\u5145\u7A7A\u767D\u533A\u57DF\u64CD\u4F5C\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/29.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u5BF9\u9F50\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u9F50\u7BA1\u7406" aria-hidden="true">#</a> \u5BF9\u9F50\u7BA1\u7406</h2><p>\u{1F4D7} \u53EF\u4EE5\u901A\u8FC7\u5C5E\u6027\u65B9\u4FBF\u7684\u5B9A\u4E49\u6805\u683C\u6216\u5143\u7D20\u7684\u5BF9\u9F50\u65B9\u5F0F</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th><th>\u5BF9\u8C61</th></tr></thead><tbody><tr><td>justify-content</td><td>\u6240\u6709\u6805\u683C\u5728\u5BB9\u5668\u4E2D\u7684\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5BB9\u5668\u6709\u989D\u5916\u7A7A\u95F4\u65F6</td><td>\u6805\u683C\u5BB9\u5668</td></tr><tr><td>align-content</td><td>\u6240\u6709\u6805\u683C\u5728\u5BB9\u5668\u4E2D\u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5BB9\u5668\u6709\u989D\u5916\u7A7A\u95F4\u65F6</td><td>\u6805\u683C\u5BB9\u5668</td></tr><tr><td>align-items</td><td>\u6805\u683C\u5185\u6240\u6709\u5143\u7D20\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F</td><td>\u6805\u683C\u5BB9\u5668</td></tr><tr><td>justify-items</td><td>\u6805\u683C\u5185\u6240\u6709\u5143\u7D20\u7684\u6A2A\u5411\u6392\u5217\u65B9\u5F0F</td><td>\u6805\u683C\u5BB9\u5668</td></tr><tr><td>align-self</td><td>\u5143\u7D20\u5728\u6805\u683C\u4E2D\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F</td><td>\u6805\u683C\u5143\u7D20</td></tr><tr><td>justify-self</td><td>\u5143\u7D20\u5728\u6805\u683C\u4E2D\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</td><td>\u6805\u683C\u5143\u7D20</td></tr></tbody></table><h3 id="\u6805\u683C\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#\u6805\u683C\u5BF9\u9F50" aria-hidden="true">#</a> \u6805\u683C\u5BF9\u9F50</h3><p>\u{1F4D7} justify-content\u4E0Ealign-content\u7528\u4E8E\u63A7\u5236\u6805\u683C\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u6BD4\u5982\u5728\u6805\u683C\u7684\u5C3A\u5BF8<strong>\u5C0F\u4E8E</strong>\u5BB9\u5668\u7684\u5FC3\u91CC\u65F6\uFF0C\u63A7\u5236\u6805\u683C\u7684\u5E03\u5C40\u65B9\u5F0F\u3002</p><p>justify-content\u5C5E\u6027\u7684\u503C\u5982\u4E0B</p><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>start</td><td>\u5BB9\u5668\u5DE6\u8FB9</td></tr><tr><td>end</td><td>\u5BB9\u5668\u53F3\u8FB9</td></tr><tr><td>center</td><td>\u5BB9\u5668\u4E2D\u95F4</td></tr><tr><td>stretch</td><td>\u6491\u6EE1\u5BB9\u5668</td></tr><tr><td>space-between</td><td>\u7B2C\u4E00\u4E2A\u6805\u683C\u9760\u5DE6\u8FB9\uFF0C\u6700\u540E\u4E00\u4E2A\u6805\u683C\u9760\u53F3\u8FB9\uFF0C\u4F59\u4E0B\u5143\u7D20\u5E73\u5747\u5206\u914D\u7A7A\u95F4</td></tr><tr><td>space-around</td><td>\u6BCF\u4E2A\u5143\u7D20\u4E24\u4FA7\u7684\u95F4\u9694\u76F8\u7B49\u3002\u6240\u4EE5\uFF0C\u6805\u683C\u4E4B\u95F4\u7684\u95F4\u9694\u6BD4\u6805\u683C\u4E0E\u5BB9\u5668\u8FB9\u8DDD\u7684\u95F4\u9694\u5927\u4E00\u500D</td></tr><tr><td>space-evenly</td><td>\u6805\u683C\u95F4\u8DDD\u79BB\u5B8C\u5168\u5E73\u5747\u5206\u914D</td></tr></tbody></table><p>align-content\u5C5E\u6027\u7684\u503C\u5982\u4E0B</p><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>start</td><td>\u5BB9\u5668\u9876\u8FB9</td></tr><tr><td>end</td><td>\u5BB9\u5668\u5E95\u8FB9</td></tr><tr><td>center</td><td>\u5BB9\u5668\u5782\u76F4\u4E2D\u95F4</td></tr><tr><td>stretch</td><td>\u6491\u6EE1\u5BB9\u5668</td></tr><tr><td>space-between</td><td>\u7B2C\u4E00\u4E2A\u6805\u683C\u9760\u5DE6\u8FB9\uFF0C\u6700\u540E\u4E00\u4E2A\u6805\u683C\u9760\u53F3\u8FB9\uFF0C\u4F59\u4E0B\u5143\u7D20\u5E73\u5747\u5206\u914D\u7A7A\u95F4</td></tr><tr><td>space-around</td><td>\u6BCF\u4E2A\u5143\u7D20\u4E24\u4FA7\u7684\u95F4\u9694\u76F8\u7B49\u3002\u6240\u4EE5\uFF0C\u6805\u683C\u4E4B\u95F4\u7684\u95F4\u9694\u6BD4\u6805\u683C\u4E0E\u5BB9\u5668\u8FB9\u8DDD\u7684\u95F4\u9694\u5927\u4E00\u500D</td></tr><tr><td>space-evenly</td><td>\u6805\u683C\u95F4\u8DDD\u79BB\u5B8C\u5168\u5E73\u5747\u5206\u914D</td></tr></tbody></table><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/30.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">border</span><span class="token punctuation">:</span> solid 5px silver<span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 200px 200px<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 200px 200px<span class="token punctuation">;</span>
<span class="token comment">/* \u6C34\u5E73\u4E24\u8FB9\u5BF9\u5176 */</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token comment">/* \u5782\u76F4\u95F4\u9694\u5BF9\u5176 */</span>
<span class="token property">align-content</span><span class="token punctuation">:</span> space-evenly<span class="token punctuation">;</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u6805\u683C\u6C34\u5E73\u4E0E\u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50\u7684\u793A\u4F8B</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/31.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1st<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3rd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4th<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u5143\u7D20\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#\u5143\u7D20\u5BF9\u9F50" aria-hidden="true">#</a> \u5143\u7D20\u5BF9\u9F50</h3><p>justify-items\u4E0Ealign-items\u7528\u4E8E\u63A7\u5236\u6240\u6709\u6805\u683C\u5185\u5143\u7D20\u7684\u5BF9\u9F50\u65B9\u5F0F</p><p>justify-items\u7528\u4E8E\u63A7\u5236\u5143\u7D20\u7684\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u7528\u7684\u5C5E\u6027\u503C\u5982\u4E0B</p><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>start</td><td>\u5143\u7D20\u5BF9\u9F50\u6805\u683C\u7684\u5DE6\u8FB9</td></tr><tr><td>end</td><td>\u5143\u7D20\u5BF9\u9F50\u6805\u683C\u7684\u53F3\u8FB9</td></tr><tr><td>center</td><td>\u5143\u7D20\u5BF9\u9F50\u6805\u683C\u7684\u4E2D\u95F4</td></tr><tr><td>stretch</td><td>\u6C34\u5E73\u6491\u6EE1\u6805\u683C</td></tr></tbody></table><p>align-items\u7528\u4E8E\u63A7\u5236\u5143\u7D20\u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u7528\u7684\u5C5E\u6027\u503C\u5982\u4E0B</p><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>start</td><td>\u5143\u7D20\u5BF9\u9F50\u6805\u683C\u7684\u9876\u8FB9</td></tr><tr><td>end</td><td>\u5143\u7D20\u5BF9\u9F50\u6805\u683C\u7684\u5E95\u8FB9</td></tr><tr><td>center</td><td>\u5143\u7D20\u5BF9\u9F50\u6805\u683C\u7684\u5782\u76F4\u4E2D\u95F4</td></tr><tr><td>stretch</td><td>\u5782\u76F4\u6491\u6EE1\u6805\u683C</td></tr></tbody></table><p>\u4E0B\u9762\u662F\u5C06\u5143\u7D20\u5728\u6240\u5728\u6805\u683C\u4E2D\u6C34\u5E73\u3001\u5782\u76F4\u5C45\u4E2D\u7684\u793A\u4F8B</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/32.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span> 20vh / <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* \u533A\u57DF\u5185\u5BB9\u7684\u6C34\u5E73\u5BF9\u5176 */</span>
    <span class="token property">justify-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token comment">/* \u533A\u57DF\u5185\u5BB9\u7684\u5782\u76F4\u5BF9\u5176 */</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u6240\u6709\u5143\u7D20\u5728\u6240\u5728\u6805\u683C\u4E2D\u5C45\u4E2D\u5BF9\u9F50\u7684\u793A\u4F8B</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/33.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span> 50vh 1fr / 50vw 1fr<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5143\u7D20\u72EC\u7ACB\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u5143\u7D20\u72EC\u7ACB\u63A7\u5236" aria-hidden="true">#</a> \u5143\u7D20\u72EC\u7ACB\u63A7\u5236</h3><p>\u{1F4D7} justify-self\u4E0Ealign-self\u63A7\u5236\u5355\u4E2A\u6805\u683C\u5185\u5143\u7D20\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5C5E\u6027\u503C\u4E0Ejustify-items\u548Calign-items\u662F\u4E00\u81F4\u7684\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/34.png" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">div:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">justify-self</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:nth-child(4)</span> <span class="token punctuation">{</span>
    <span class="token property">justify-self</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7EC4\u5408\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u7B80\u5199" aria-hidden="true">#</a> \u7EC4\u5408\u7B80\u5199</h3><h4 id="place-content" tabindex="-1"><a class="header-anchor" href="#place-content" aria-hidden="true">#</a> place-content</h4><p>\u7528\u4E8E\u63A7\u5236\u6805\u683C\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">place-content</span><span class="token punctuation">:</span> &lt;align-content&gt; &lt;justify-content&gt;
</code></pre></div><h4 id="place-items" tabindex="-1"><a class="header-anchor" href="#place-items" aria-hidden="true">#</a> place-items</h4><p>\u63A7\u5236\u6240\u6709\u5143\u7D20\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u8BED\u6CD5\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">place-items</span><span class="token punctuation">:</span> &lt;align-items&gt; &lt;justify-items&gt;
</code></pre></div><h4 id="place-self" tabindex="-1"><a class="header-anchor" href="#place-self" aria-hidden="true">#</a> place-self</h4><p>\u63A7\u5236\u5355\u4E2A\u5143\u7D20\u7684\u5BF9\u9F50\u65B9\u5F0F</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">place-self</span><span class="token punctuation">:</span> &lt;align-self&gt; &lt;justify-self&gt;
</code></pre></div><h2 id="\u81EA\u52A8\u6392\u5217" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u6392\u5217" aria-hidden="true">#</a> \u81EA\u52A8\u6392\u5217</h2><p>\u{1F4D7} \u5F53\u6805\u683C\u65E0\u6CD5\u653E\u7F6E\u5185\u5BB9\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u6DFB\u52A0\u6805\u683C\u7528\u4E8E\u653E\u7F6E\u6EA2\u51FA\u7684\u5143\u7D20\uFF0C\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u5C5E\u6027\u63A7\u5236\u81EA\u52A8\u6DFB\u52A0\u6805\u683C\u7684\u5C3A\u5BF8\u3002</p><h3 id="\u5C5E\u6027\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u8BF4\u660E" aria-hidden="true">#</a> \u5C5E\u6027\u8BF4\u660E</h3><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th><th>\u5BF9\u8C61</th></tr></thead><tbody><tr><td>grid-auto-rows</td><td>\u63A7\u5236\u81EA\u52A8\u589E\u52A0\u7684\u6805\u683C\u884C\u7684\u5C3A\u5BF8\uFF0Cgrid-auto-flow:row; \u4E3A\u9ED8\u8BA4</td><td>\u5BB9\u5668</td></tr><tr><td>grid-auto-columns</td><td>\u63A7\u5236\u81EA\u52A8\u589E\u52A0\u7684\u6805\u683C\u5217\u7684\u5C3A\u5BF8\uFF0Cgrid-auto-flow: column;</td><td>\u5BB9\u5668</td></tr></tbody></table><h3 id="\u81EA\u52A8\u6805\u683C\u884C" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u6805\u683C\u884C" aria-hidden="true">#</a> \u81EA\u52A8\u6805\u683C\u884C</h3><p>\u4E0B\u9762\u5B9A\u4E49\u4E862X2\u7684\u6805\u683C\uFF0C\u4F46\u6709\u591A\u4E2A\u5143\u7D20\uFF0C\u7CFB\u7EDF\u5C06\u81EA\u52A8\u521B\u5EFA\u6805\u683C\u7528\u4E8E\u653E\u7F6E\u989D\u5916\u5143\u7D20\u3002\u6211\u4EEC\u4F7F\u7528grid-auto-rows\u6765\u63A7\u5236\u589E\u52A0\u6805\u683C\u7684\u884C\u9AD8\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/35.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u81EA\u52A8\u884C\u5217" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u884C\u5217" aria-hidden="true">#</a> \u81EA\u52A8\u884C\u5217</h3><p>\u4E0B\u9762\u521B\u5EFA\u4E862X2\u6805\u683C\uFF0C\u6211\u4EEC\u5C06\u7B2C2\u4E2ADIV\u8BBE\u7F6E\u7684\u683C\u6805\u5DF2\u7ECF\u8D85\u8FC7\u4E86\u56DB\u4E2A\u6805\u683C\uFF0C\u6240\u4EE5\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u521B\u5EFA\u6805\u683C\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/36.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u7EC8\u7EA7\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#\u7EC8\u7EA7\u7B80\u5199" aria-hidden="true">#</a> \u7EC8\u7EA7\u7B80\u5199</h2><p>grid\u662F\u7B80\u5199\u5C5E\u6027\uFF0C\u53EF\u4EE5\u7528\u6765\u8BBE\u7F6E\uFF1A</p><ul><li>\u663E\u5F0F\u7F51\u683C\u5C5E\u6027 grid-template-rows\u3001grid-template-columns\u548C grid-template-areas\uFF0C</li><li>\u9690\u5F0F\u7F51\u683C\u5C5E\u6027 grid-auto-rows\u3001grid-auto-columns \u548C grid-auto-flow\uFF0C</li><li>\u95F4\u8DDD\u5C5E\u6027 grid-column-gap\u548C grid-row-gap</li></ul><p>\u4F7F\u7528\u8BED\u6CD5:</p><div class="language-css ext-css"><pre class="language-css"><code>&lt;<span class="token string">&#39;grid-template&#39;</span>&gt; | &lt;<span class="token string">&#39;grid-template-rows&#39;</span>&gt; / [ auto-flow &amp;&amp; dense? ] &lt;<span class="token string">&#39;grid-auto-columns&#39;</span>&gt;? | [ auto-flow &amp;&amp; dense? ] &lt;<span class="token string">&#39;grid-auto-rows&#39;</span>&gt;? / &lt;<span class="token string">&#39;grid-template-columns&#39;</span>&gt;
</code></pre></div><h3 id="\u884C\u5217\u5212\u5206" tabindex="-1"><a class="header-anchor" href="#\u884C\u5217\u5212\u5206" aria-hidden="true">#</a> \u884C\u5217\u5212\u5206</h3><p>\u4E0B\u9762\u4F7F\u7528grid\u5E03\u5C40\u5185\u5BB9\uFF0C\u5C06body\u5BB9\u5668\u7684\u6805\u683C\u5C45\u4E2D\u6392\u5217\uFF0C\u5C06main\u5BB9\u5668\u5185\u7684\u6805\u683C\u5185\u7684\u5143\u7D20\u5C45\u4E2D\u6392\u5217\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/37.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u5B9A\u4E49\u533A\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u533A\u57DF" aria-hidden="true">#</a> \u5B9A\u4E49\u533A\u57DF</h3><p>\u4F7F\u7528grid\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u6805\u683C\u533A\u57DF</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/grid/38.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid</span><span class="token punctuation">:</span>
            <span class="token string">&#39;header header&#39;</span>50px <span class="token string">&#39;nav main&#39;</span>auto <span class="token string">&#39;footer footer&#39;</span>60px/100px auto<span class="token punctuation">;</span>
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,225);function y(m,f){const t=l("ExternalLinkIcon");return o(),c("div",null,[i,s("p",null,[r,s("a",k,[d,e(t)]),g]),h])}var v=p(u,[["render",y],["__file","grid.html.vue"]]);export{v as default};
