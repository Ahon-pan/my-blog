import{_ as n,o as s,c as a,a as t}from"./app.4bbb0959.js";const p={},o=t(`<h1 id="\u76D2\u5B50\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u76D2\u5B50\u6A21\u578B" aria-hidden="true">#</a> \u76D2\u5B50\u6A21\u578B</h1><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/1.png" style="zoom:50%;"><h2 id="\u5916\u8FB9\u8DDD" tabindex="-1"><a class="header-anchor" href="#\u5916\u8FB9\u8DDD" aria-hidden="true">#</a> \u5916\u8FB9\u8DDD</h2><h3 id="\u58F0\u660E\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5B9A\u4E49" aria-hidden="true">#</a> \u58F0\u660E\u5B9A\u4E49</h3><p>\u8FB9\u8DDD\u987A\u5E8F\u4F9D\u6B21\u4E3A\uFF1A\u4E0A\u3001\u53F3\u3001\u4E0B\u3001\u5DE6\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/2.png" style="zoom:40%;"><p>\u4E0B\u4F8B\u5B9A\u4E49\u4E0A\u4E0B<code>50px</code>\u8FB9\u8DDD\uFF0C\u5DE6\u53F3<code>80px</code>\u8FB9\u8DDD</p><div class="language-css ext-css"><pre class="language-css"><code> <span class="token property">margin</span><span class="token punctuation">:</span> 50px 80px<span class="token punctuation">;</span>
</code></pre></div><p>\u4E0B\u9762\u5C06\u8FB9\u8DDD\u5168\u90E8\u5B9A\u4E49\u4E3A <code>100px</code></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">margin</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5C45\u4E2D\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5C45\u4E2D\u8BBE\u7F6E" aria-hidden="true">#</a> \u5C45\u4E2D\u8BBE\u7F6E</h3><p><code>margin</code> \u8BBE\u7F6Eauto \u540E\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u5C45\u4E2D</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>mdn.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/3.png" alt=""></p><h3 id="\u8D1F\u503C\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8D1F\u503C\u8BBE\u7F6E" aria-hidden="true">#</a> \u8D1F\u503C\u8BBE\u7F6E</h3><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/4.png" alt=""></p><h3 id="\u8FB9\u8DDD\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u8FB9\u8DDD\u5408\u5E76" aria-hidden="true">#</a> \u8FB9\u8DDD\u5408\u5E76</h3><p>\u76F8\u90BB\u5143\u7D20\u7684\u7EB5\u5411\u5916\u8FB9\u8DDD\u4F1A\u8FDB\u884C\u5408\u5E76</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px green<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">h3</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px green<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>mdn.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/5.png" alt=""></p><h2 id="\u5185\u8FB9\u8DDD" tabindex="-1"><a class="header-anchor" href="#\u5185\u8FB9\u8DDD" aria-hidden="true">#</a> \u5185\u8FB9\u8DDD</h2><p>\u5185\u8FB9\u8DDD\u4F7F\u7528 <code>padding</code> \u8FDB\u884C\u5B9A\u4E49\uFF0C\u4F7F\u7528\u8BED\u6CD5\u4E0E <code>margin</code> \u76F8\u4F3C\u3002</p><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">a</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px 30px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">a:hover</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 78<span class="token punctuation">,</span> 110<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>MYSQL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>CSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/6.png" alt=""></p><h2 id="box-sizing" tabindex="-1"><a class="header-anchor" href="#box-sizing" aria-hidden="true">#</a> BOX-SIZING</h2><p>\u{1F4D2} content-box\u548Cborder box\u7684\u533A\u522B\u5728\u4E8E\uFF1A\u4E24\u8005\u7684\u76D2\u5B50\u7684\u5BBD\u5EA6\u662F\u5426\u5305\u542B\u8868\u6846\u548C\u5185\u8FB9\u8DDD</p><ul><li>content-box\uFF08\u9ED8\u8BA4\u6837\u5F0F\uFF09</li><li>border-box\uFF1A\u5143\u7D20\u5BBD\u5EA6\u53EA\u5305\u62EC\u5185\u5BB9</li></ul><p>\u5BBD\u5EA6\u4E0E\u9AD8\u5EA6\u5305\u62EC\u5185\u8FB9\u8DDD\u4E0E\u8FB9\u6846<code>border-box</code> \uFF08200px * 120px\uFF09</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 10px #ddd<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/7.png" alt=""></p><h2 id="\u8FB9\u6846\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u8FB9\u6846\u8BBE\u8BA1" aria-hidden="true">#</a> \u8FB9\u6846\u8BBE\u8BA1</h2><h3 id="\u6837\u5F0F\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u9009\u62E9" aria-hidden="true">#</a> \u6837\u5F0F\u9009\u62E9</h3><table><thead><tr><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">none</td><td style="text-align:left;">\u5B9A\u4E49\u65E0\u8FB9\u6846\u3002</td></tr><tr><td style="text-align:left;">dotted</td><td style="text-align:left;">\u5B9A\u4E49\u70B9\u72B6\u8FB9\u6846\u3002\u5728\u5927\u591A\u6570\u6D4F\u89C8\u5668\u4E2D\u5448\u73B0\u4E3A\u5B9E\u7EBF\u3002</td></tr><tr><td style="text-align:left;">dashed</td><td style="text-align:left;">\u5B9A\u4E49\u865A\u7EBF\u3002\u5728\u5927\u591A\u6570\u6D4F\u89C8\u5668\u4E2D\u5448\u73B0\u4E3A\u5B9E\u7EBF\u3002</td></tr><tr><td style="text-align:left;">solid</td><td style="text-align:left;">\u5B9A\u4E49\u5B9E\u7EBF\u3002</td></tr><tr><td style="text-align:left;">double</td><td style="text-align:left;">\u5B9A\u4E49\u53CC\u7EBF\u3002\u53CC\u7EBF\u7684\u5BBD\u5EA6\u7B49\u4E8E border-width \u7684\u503C\u3002</td></tr><tr><td style="text-align:left;">groove</td><td style="text-align:left;">\u5B9A\u4E49 3D \u51F9\u69FD\u8FB9\u6846\u3002\u5176\u6548\u679C\u53D6\u51B3\u4E8E border-color \u7684\u503C\u3002</td></tr><tr><td style="text-align:left;">ridge</td><td style="text-align:left;">\u5B9A\u4E49 3D \u5784\u72B6\u8FB9\u6846\u3002\u5176\u6548\u679C\u53D6\u51B3\u4E8E border-color \u7684\u503C\u3002</td></tr><tr><td style="text-align:left;">inset</td><td style="text-align:left;">\u5B9A\u4E49 3D inset \u8FB9\u6846\u3002\u5176\u6548\u679C\u53D6\u51B3\u4E8E border-color \u7684\u503C\u3002</td></tr><tr><td style="text-align:left;">outset</td><td style="text-align:left;">\u5B9A\u4E49 3D outset \u8FB9\u6846\u3002\u5176\u6548\u679C\u53D6\u51B3\u4E8E border-color \u7684\u503C\u3002</td></tr></tbody></table><p>\u4E00\u6B21\u5B9A\u4E49\u56DB\u4E2A\u8FB9</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> double<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6837\u5F0F\u987A\u5E8F\u4E3A\u4E0A\u3001\u53F3\u3001\u4E0B\u3001\u5DE6\uFF0C\u53EF\u4EE5\u5206\u522B\u8FDB\u884C\u5B9A\u4E49</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> outset solid dotted double<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/8.png" alt=""></p><p>\u5355\u72EC\u8BBE\u7F6E\u4E00\u8FB9\u6837\u5F0F</p><table><thead><tr><th>\u89C4\u5219</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>border-top-style</td><td>\u9876\u8FB9</td></tr><tr><td>border-right-style</td><td>\u53F3\u8FB9</td></tr><tr><td>border-bottom-style</td><td>\u4E0B\u8FB9</td></tr><tr><td>border-left-style</td><td>\u5DE6\u8FB9</td></tr><tr><td>border-style</td><td>\u56DB\u8FB9</td></tr></tbody></table><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">border-top-style</span><span class="token punctuation">:</span> double<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/9.png" alt=""></p><h3 id="\u8FB9\u6846\u5BBD\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u8FB9\u6846\u5BBD\u5EA6" aria-hidden="true">#</a> \u8FB9\u6846\u5BBD\u5EA6</h3><p>\u8FB9\u6846\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u89C4\u5219\u6765\u8BBE\u7F6E</p><table><thead><tr><th>\u89C4\u5219</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>border-top-width</td><td>\u9876\u8FB9</td></tr><tr><td>border-right-width</td><td>\u53F3\u8FB9</td></tr><tr><td>border-bottom-width</td><td>\u4E0B\u8FB9</td></tr><tr><td>border-left-width</td><td>\u5DE6\u8FB9</td></tr><tr><td>border-width</td><td>\u56DB\u8FB9</td></tr></tbody></table><h3 id="\u8FB9\u6846\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u8FB9\u6846\u989C\u8272" aria-hidden="true">#</a> \u8FB9\u6846\u989C\u8272</h3><table><thead><tr><th>\u89C4\u5219</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>border-top-color</td><td>\u9876\u8FB9</td></tr><tr><td>border-right-color</td><td>\u53F3\u8FB9</td></tr><tr><td>border-bottom-color</td><td>\u4E0B\u8FB9</td></tr><tr><td>border-left-color</td><td>\u5DE6\u8FB9</td></tr><tr><td>border-color</td><td>\u56DB\u8FB9</td></tr></tbody></table><h3 id="\u7B80\u5199\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199\u89C4\u5219" aria-hidden="true">#</a> \u7B80\u5199\u89C4\u5219</h3><table><thead><tr><th>\u89C4\u5219</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>border-top</td><td>\u9876\u8FB9</td></tr><tr><td>border-right</td><td>\u53F3\u8FB9</td></tr><tr><td>border-bottom</td><td>\u4E0B\u8FB9</td></tr><tr><td>border-left</td><td>\u5DE6\u8FB9</td></tr><tr><td>border</td><td>\u56DB\u8FB9</td></tr></tbody></table><p>\u8BBE\u7F6E\u5E95\u90E8\u8FB9\u6846</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 5px red<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u884C\u5143\u7D20\u8FB9\u6846" tabindex="-1"><a class="header-anchor" href="#\u884C\u5143\u7D20\u8FB9\u6846" aria-hidden="true">#</a> \u884C\u5143\u7D20\u8FB9\u6846</h3><p>\u884C\u5143\u7D20\u4E5F\u53EF\u4EE5\u8FDB\u884C\u8FB9\u6846\u8BBE\u7F6E</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">em</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5706\u89D2\u8FB9\u6846-\u{1F47E}" tabindex="-1"><a class="header-anchor" href="#\u5706\u89D2\u8FB9\u6846-\u{1F47E}" aria-hidden="true">#</a> \u5706\u89D2\u8FB9\u6846 \u{1F47E}</h3><p>\u4F7F\u7528 <code>border-radius</code> \u89C4\u5219\u8BBE\u7F6E\u5706\u89D2\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>px | %</code> \u7B49\u5355\u4F4D\u3002\u4E5F\u652F\u6301\u56DB\u4E2A\u8FB9\u5206\u522B\u8BBE\u7F6E\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>border-top-left-radius</td><td>\u4E0A\u5DE6</td></tr><tr><td>border-top-right-radius</td><td>\u4E0A\u53F3</td></tr><tr><td>border-bottom-left-radius</td><td>\u4E0B\u8F7D</td></tr><tr><td>border-bottom-right-radius</td><td>\u4E0B\u53F3</td></tr></tbody></table><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u901A\u8FC7\u8FB9\u6846\u7ED8\u5236\u5706</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 3px red<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5B9A\u4E49\u4E0D\u540C\u8FB9</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 10px 30px 50px 100px<span class="token punctuation">;</span>
</code></pre></div><p>\u884C\u5143\u7D20\u7ED8\u5236\u5706\u89D2</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">em</span> <span class="token punctuation">{</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
	<span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/10.png" alt=""></p><h2 id="\u8F6E\u5ED3\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u8F6E\u5ED3\u7EBF" aria-hidden="true">#</a> \u8F6E\u5ED3\u7EBF</h2><p>\u5143\u7D20\u5728\u83B7\u53D6\u7126\u70B9\u65F6\u4EA7\u751F\uFF0C\u5E76\u4E14\u8F6E\u5ED3\u7EBF\u4E0D\u5360\u7528\u7A7A\u95F4\u3002\u53EF\u4EE5\u4F7F\u7528\u4F2A\u7C7B <code>:focus</code> \u5B9A\u4E49\u6837\u5F0F\u3002</p><ul><li>\u8F6E\u5ED3\u7EBF\u663E\u793A\u5728\u8FB9\u6846\u5916\u9762</li><li>\u8F6E\u5ED3\u7EBF\u4E0D\u5F71\u54CD\u9875\u9762\u5E03\u5C40</li></ul><h3 id="\u7EBF\u6761\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u6761\u6837\u5F0F" aria-hidden="true">#</a> \u7EBF\u6761\u6837\u5F0F</h3><table><thead><tr><th style="text-align:left;">\u503C</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">none</td><td style="text-align:left;">\u9ED8\u8BA4\u3002\u5B9A\u4E49\u65E0\u8F6E\u5ED3\u3002</td></tr><tr><td style="text-align:left;">dotted</td><td style="text-align:left;">\u5B9A\u4E49\u70B9\u72B6\u7684\u8F6E\u5ED3\u3002</td></tr><tr><td style="text-align:left;">dashed</td><td style="text-align:left;">\u5B9A\u4E49\u865A\u7EBF\u8F6E\u5ED3\u3002</td></tr><tr><td style="text-align:left;">solid</td><td style="text-align:left;">\u5B9A\u4E49\u5B9E\u7EBF\u8F6E\u5ED3\u3002</td></tr><tr><td style="text-align:left;">double</td><td style="text-align:left;">\u5B9A\u4E49\u53CC\u7EBF\u8F6E\u5ED3\u3002\u53CC\u7EBF\u7684\u5BBD\u5EA6\u7B49\u540C\u4E8E outline-width \u7684\u503C\u3002</td></tr><tr><td style="text-align:left;">groove</td><td style="text-align:left;">\u5B9A\u4E49 3D \u51F9\u69FD\u8F6E\u5ED3\u3002\u6B64\u6548\u679C\u53D6\u51B3\u4E8E outline-color \u503C\u3002</td></tr><tr><td style="text-align:left;">ridge</td><td style="text-align:left;">\u5B9A\u4E49 3D \u51F8\u69FD\u8F6E\u5ED3\u3002\u6B64\u6548\u679C\u53D6\u51B3\u4E8E outline-color \u503C\u3002</td></tr><tr><td style="text-align:left;">inset</td><td style="text-align:left;">\u5B9A\u4E49 3D \u51F9\u8FB9\u8F6E\u5ED3\u3002\u6B64\u6548\u679C\u53D6\u51B3\u4E8E outline-color \u503C\u3002</td></tr><tr><td style="text-align:left;">outset</td><td style="text-align:left;">\u5B9A\u4E49 3D \u51F8\u8FB9\u8F6E\u5ED3\u3002\u6B64\u6548\u679C\u53D6\u51B3\u4E8E outline-color \u503C\u3002</td></tr></tbody></table><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dotted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u7EBF\u8F6E\u5ED3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dashed<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u865A\u7EBF\u8F6E\u5ED3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5B9E\u7EBF\u8F6E\u5ED3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>double<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u53CC\u7EBF\u8F6E\u5ED3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>groove<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u51F9\u69FD\u8F6E\u5ED3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ridge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5784\u72B6\u8F6E\u5ED3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inset<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5D4C\u5165\u8F6E\u5ED3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>outset<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5916\u51F8\u8F6E\u5ED3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/11.png" alt=""></p><h3 id="\u7EBF\u5BBD\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u5BBD\u8BBE\u7F6E" aria-hidden="true">#</a> \u7EBF\u5BBD\u8BBE\u7F6E</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">outline-width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u7EBF\u6761\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u6761\u989C\u8272" aria-hidden="true">#</a> \u7EBF\u6761\u989C\u8272</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">outline-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u7EC4\u5408\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5B9A\u4E49" aria-hidden="true">#</a> \u7EC4\u5408\u5B9A\u4E49</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">outline</span><span class="token punctuation">:</span> red solid 2px<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u8868\u5355\u8F6E\u5ED3\u7EBF-\u{1F47E}" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u8F6E\u5ED3\u7EBF-\u{1F47E}" aria-hidden="true">#</a> \u8868\u5355\u8F6E\u5ED3\u7EBF \u{1F47E}</h3><p>\u8868\u5355\u9ED8\u8BA4\u5177\u6709\u8F6E\u5ED3\u7EBF\uFF0C\u4F46\u6709\u65F6\u5E76\u4E0D\u597D\u770B\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u6837\u5F0F\u89C4\u5219\u53BB\u9664\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">input:focus</span> <span class="token punctuation">{</span>
	<span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> DISPLAY</h2><h3 id="\u63A7\u5236\u663E\u793A\u9690\u85CF" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u663E\u793A\u9690\u85CF" aria-hidden="true">#</a> \u63A7\u5236\u663E\u793A\u9690\u85CF</h3><p>\u4F7F\u7528 <code>display</code> \u63A7\u5236\u5143\u7D20\u7684\u663E\u793A\u673A\u5236\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>none</td><td>\u9690\u85CF\u5143\u7D20</td></tr><tr><td>block</td><td>\u663E\u793A\u4E3A\u5757\u5143\u7D20</td></tr><tr><td>inline</td><td>\u663E\u793A\u4E3A\u884C\u5143\u7D20\uFF0C\u4E0D\u80FD\u8BBE\u7F6E\u5BBD/\u9AD8</td></tr><tr><td>inline-block</td><td>\u884C\u7EA7\u5757\u5143\u7D20\uFF0C\u5141\u8BB8\u8BBE\u7F6E\u5BBD/\u9AD8</td></tr></tbody></table><h3 id="\u884C\u8F6C\u5757\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u884C\u8F6C\u5757\u5143\u7D20" aria-hidden="true">#</a> \u884C\u8F6C\u5757\u5143\u7D20</h3><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">a</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/12.png" alt=""></p><h3 id="\u5757\u8F6C\u4E3A\u884C\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5757\u8F6C\u4E3A\u884C\u5143\u7D20" aria-hidden="true">#</a> \u5757\u8F6C\u4E3A\u884C\u5143\u7D20</h3><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">ul&gt;li</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">ul&gt;li:hover</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>mdn.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/13.png" alt=""></p><h3 id="\u884C\u7EA7\u5757\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u884C\u7EA7\u5757\u4F7F\u7528" aria-hidden="true">#</a> \u884C\u7EA7\u5757\u4F7F\u7528</h3><p>\u5C06a\u6807\u7B7E\u8F6C\u4E3A<code>inline-block</code>\u4E4B\u540E\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5176\u9AD8\u5EA6 \u{1F4CC}</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">a</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>MYSQL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>LINUX<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>PHP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/14.png" alt=""></p><h2 id="visibility" tabindex="-1"><a class="header-anchor" href="#visibility" aria-hidden="true">#</a> VISIBILITY</h2><p>\u63A7\u5236\u5143\u7D20\u7684\u663E\u793A\u9690\u85CF\uFF0C\u5728\u9690\u85CF\u540E\u7A7A\u95F4\u4F4D\u4E5F\u4FDD\u7559\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/15.1.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/15.png" alt=""></p><h2 id="\u6EA2\u51FA\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6EA2\u51FA\u63A7\u5236" aria-hidden="true">#</a> \u6EA2\u51FA\u63A7\u5236</h2><h3 id="\u9690\u85CF\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u63A7\u5236" aria-hidden="true">#</a> \u9690\u85CF\u63A7\u5236</h3><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>hidden</td><td>\u6EA2\u51FA\u5185\u5BB9\u9690\u85CF</td></tr><tr><td>scroll</td><td>\u663E\u793A\u6EDA\u52A8\u6761\uFF08\u6709\u4E9B\u6D4F\u89C8\u5668\u4F1A\u4E00\u76F4\u663E\u793A\uFF0C\u6709\u4E9B\u5728\u6EDA\u52A8\u65F6\u663E\u793A\uFF09</td></tr><tr><td>auto</td><td>\u6839\u636E\u5185\u5BB9\u81EA\u52A8\u5904\u7406\u6EDA\u52A8\u6761</td></tr></tbody></table><p><strong>\u6EA2\u51FA\u9690\u85CF</strong></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px #ddd<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/16.1.png" alt=""></p><p><strong>\u6EA2\u51FA\u4EA7\u751F\u6EDA\u52A8\u6761</strong></p><p>\u4E0D\u540C\u6D4F\u89C8\u5668\u5904\u7406\u65B9\u5F0F\u4E0D\u540C\uFF0C\u6709\u4E9B\u76F4\u63A5\u663E\u793A\u51FA\u6765\uFF0C\u6709\u4E9B\u5728\u6EDA\u52A8\u65F6\u624D\u663E\u793A\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px #ddd<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/16.2.png" alt=""></p><h3 id="\u6587\u672C\u6EA2\u51FA-\u{1F47E}" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u6EA2\u51FA-\u{1F47E}" aria-hidden="true">#</a> \u6587\u672C\u6EA2\u51FA \u{1F47E}</h3><p><strong>\u5355\u884C\u6587\u672C\u6EA2\u51FA</strong></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px #ddd<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/16.3.png" alt=""></p><p><strong>\u591A\u884C\u6587\u672C\u6EA2\u51FA\u63A7\u5236</strong></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px #ddd<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/16.4.png" alt=""></p><h2 id="\u5C3A\u5BF8\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5C3A\u5BF8\u5B9A\u4E49" aria-hidden="true">#</a> \u5C3A\u5BF8\u5B9A\u4E49</h2><p>\u53EF\u4EE5\u4F7F\u7528\u591A\u79CD\u65B9\u5F0F\u4E3A\u5143\u7D20\u8BBE\u7F6E\u5BBD\u3001\u9AD8\u5C3A\u5BF8\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>width</td><td>\u5BBD\u5EA6</td></tr><tr><td>height</td><td>\u9AD8\u5EA6</td></tr><tr><td>min-width</td><td>\u6700\u5C0F\u5BBD\u5EA6</td></tr><tr><td>min-height</td><td>\u6700\u5C0F\u9AD8\u5EA6</td></tr><tr><td>max-width</td><td>\u6700\u5927\u5BBD\u5EA6</td></tr><tr><td>max-height</td><td>\u6700\u5927\u9AD8\u5EA6</td></tr><tr><td>fill-available</td><td>\u6491\u6EE1\u53EF\u7528\u7684\u7A7A\u95F4</td></tr><tr><td>fit-content</td><td>\u6839\u636E\u5185\u5BB9\u9002\u5E94\u5C3A\u5BF8</td></tr></tbody></table><h3 id="min-max" tabindex="-1"><a class="header-anchor" href="#min-max" aria-hidden="true">#</a> min&amp;max</h3><p>\u6B63\u6587\u4E2D\u4E0D\u5E0C\u671B\u56FE\u7247\u592A\u5927\u9020\u6210\u6EA2\u51FA\u7A97\u53E3\uFF0C\u4E5F\u4E0D\u5E0C\u671B\u592A\u5C0F\u5F71\u54CD\u7F8E\u89C2\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u4EE3\u7801\u53EF\u4EE5\u505A\u5230\u7EA6\u675F\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px #ddd<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">div img</span> <span class="token punctuation">{</span>
        <span class="token property">min-width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">max-width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="fill-available-\u{1F47E}" tabindex="-1"><a class="header-anchor" href="#fill-available-\u{1F47E}" aria-hidden="true">#</a> fill-available \u{1F47E}</h3><p>\u5728<code>chrome</code> \u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\u524D\u7F00 <code>-webkit</code> \u4E66\u5199\u6837\u5F0F\u3002</p><p>\u4E0B\u9762\u662F\u884C\u5757\u5143\u7D20\u53EF\u4EE5\u6491\u6EE1\u53EF\u7528\u7A7A\u95F4\u540E\u7684\u6548\u679C\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/17.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>
        source.com
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="fit-content" tabindex="-1"><a class="header-anchor" href="#fit-content" aria-hidden="true">#</a> fit-content</h3><p>\u4E0B\u9762\u662F\u6839\u636E\u5185\u5BB9\u81EA\u52A8\u9002\u5E94\u5BBD\u5EA6\uFF0C\u8BA9\u5143\u7D20\u5C45\u4E2D\u663E\u793A\u7684\u6548\u679C\u3002(h2\u539F\u672C\u4F5C\u4E3Ablock\u5143\u7D20\u5BBD\u5EA6\u662F100%)</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/18.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="min-content" tabindex="-1"><a class="header-anchor" href="#min-content" aria-hidden="true">#</a> min-content</h3><p>\u4F7F\u7528<code>min-content</code> \u5C06\u5BB9\u5668\u5C3A\u5BF8\u6309\u6700\u5C0F\u5143\u7D20\u5BBD\u5EA6\u8BBE\u7F6E\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/19.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>mdn.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="max-content" tabindex="-1"><a class="header-anchor" href="#max-content" aria-hidden="true">#</a> max-content</h3><p>\u5BB9\u5668\u5C3A\u5BF8\u6309\u5B50\u5143\u7D20\u6700\u5927\u5BBD\u5EA6\u8BBE\u7F6E\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/box-model/20.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>source.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>mdn.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,143),e=[o];function c(l,u){return s(),a("div",null,e)}var k=n(p,[["render",c],["__file","box-model.html.vue"]]);export{k as default};