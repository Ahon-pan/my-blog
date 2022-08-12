import{_ as n,o as s,c as a,a as t}from"./app.4bbb0959.js";const p={},o=t(`<h1 id="\u5B9A\u4F4D\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4F4D\u5E03\u5C40" aria-hidden="true">#</a> \u5B9A\u4F4D\u5E03\u5C40</h1><h2 id="\u57FA\u7840\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a> \u57FA\u7840\u77E5\u8BC6</h2><p>\u{1F4D7} \u5B9A\u4F4D\u7684\u57FA\u672C\u601D\u60F3\u5F88\u7B80\u5355\uFF0C\u5B83\u5141\u8BB8\u4F60\u5B9A\u4E49\u5143\u7D20\u6846\u76F8\u5BF9\u4E8E\u5176\u6B63\u5E38\u4F4D\u7F6E\u5E94\u8BE5\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C\u6216\u8005\u76F8\u5BF9\u4E8E\u7236\u5143\u7D20\u3001\u53E6\u4E00\u4E2A\u5143\u7D20\u751A\u81F3\u6D4F\u89C8\u5668\u7A97\u53E3\u672C\u8EAB\u7684\u4F4D\u7F6E\u3002</p><h3 id="\u5B9A\u4F4D\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4F4D\u7C7B\u578B" aria-hidden="true">#</a> \u5B9A\u4F4D\u7C7B\u578B</h3><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>static</td><td>\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u53C2\u8003\u6587\u6863\u6D41</td></tr><tr><td>relative</td><td>\u76F8\u5BF9\u5B9A\u4F4D</td></tr><tr><td>absolute</td><td>\u7EDD\u5BF9\u5B9A\u4F4D</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A\u5B9A\u4F4D</td></tr><tr><td>sticky</td><td>\u7C98\u6027\u5B9A\u4F4D</td></tr></tbody></table><h3 id="\u4F4D\u7F6E\u504F\u79FB" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u7F6E\u504F\u79FB" aria-hidden="true">#</a> \u4F4D\u7F6E\u504F\u79FB</h3><p>\u53EF\u4EE5\u4E3A\u90E8\u5206\u7C7B\u578B\u7684\u5B9A\u4F4D\u5143\u7D20\u8BBE\u7F6E<code>\u4E0A\u3001\u4E0B\u3001\u5DE6\u3001\u53F3</code> \u7684\u4F4D\u7F6E\u504F\u79FB\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>top</td><td>\u8DDD\u79BB\u9876\u8FB9</td></tr><tr><td>bottom</td><td>\u8DDD\u79BB\u4E0B\u8FB9</td></tr><tr><td>left</td><td>\u8DDD\u79BB\u5DE6\u90E8</td></tr><tr><td>right</td><td>\u8DDD\u79BB\u53F3\u8FB9</td></tr></tbody></table><p>\u{1F47E} \u5143\u7D20\u76F4\u63A5\u8BBE\u7F6E<code>absolute</code>\u5B9A\u4F4D\u662F\u76F8\u5BF9\u4E8E\u6587\u6863\u7684\uFF1A</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/1.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u{1F47E} \u4F7F\u7528\u767E\u5206\u6BD4\u5355\u4F4D\u65F6\u4F7F\u7528\u7684\u662F\u7236\u7EA7\u5C3A\u5BF8\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u793A\u4F8B<code>left:100%</code>\u4F1A\u5B9A\u4F4D\u5230\u6700\u53F3\u8FB9</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/2.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u76F8\u5BF9\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5BF9\u5B9A\u4F4D" aria-hidden="true">#</a> \u76F8\u5BF9\u5B9A\u4F4D</h2><p>\u{1F47E} <code>relative</code>\u76F8\u5BF9\u5B9A\u4F4D\u662F\u76F8\u5BF9\u4E8E\u5143\u7D20<strong>\u539F\u6765\u7684\u4F4D\u7F6E</strong>\u63A7\u5236\uFF0C\u5F53\u5143\u7D20\u53D1\u751F\u4F4D\u7F6E\u504F\u79FB\u65F6\uFF0C\u539F\u4F4D\u7F6E\u7559\u767D\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/3.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    \u6CC9\u5DDE\u5E02\u3002\u5E02\u5883\u897F\u5357\u63A5\u53A6\u95E8\u5E02\u3001\u6F33\u5DDE\u5E02\uFF0C\u897F\u754C\u9F99\u5CA9\u5E02\uFF0C\u5317\u90BB\u4E09\u660E\u5E02\uFF0C\u4E1C\u5317\u8FBE\u798F\u5DDE\u5E02\u3001\u8386\u7530\u5E02\uFF0C\u4E1C\u9694\u53F0\u6E7E\u6D77\u5CE1\u4E0E\u53F0\u6E7E\u76F8\u671B\u3002\u5730\u5904\u95FD\u4E1C\u5357\u6CBF\u6D77\u4E18\u9675\u5E73\u539F\u533A\uFF0C\u5730\u52BF\u897F\u5317\u9AD8\uFF0C\u4E1C\u5357\u4F4E\uFF0C\u897F\u5317\u90E8\u4E3A\u6234\u4E91\u5C71\u3002\u664B\u6C5F\u4E1C\u6EAA\u548C\u897F\u6EAA\u4E8E\u5357\u5B89\u5E02\u53CC\u6EAA\u53E3\u6C47\u5408\uFF0C\u5F80\u4E1C\u6D41\u8D2F\u5E02\u533A\uFF0C\u6CE8\u5165\u6CC9\u5DDE\u6E7E\u3002\u5168\u5E02\u603B\u9762\u79EF11,287\u5E73\u65B9\u516C\u91CC\uFF0C\u4EBA\u53E3878.23\u4E07\uFF0C\u5E02\u4EBA\u6C11\u653F\u5E9C\u9A7B\u4E30\u6CFD\u533A\u4E1C\u6D77\u8857\u9053\u3002\u6CC9\u5DDE\u662F\u95FD\u4E1C\u5357\u6CBF\u6D77\u653F\u6CBB\u3001\u7ECF\u6D4E\u3001\u6587\u5316\u548C\u4EA4\u901A\u4E2D\u5FC3\uFF0C\u9996\u6279\u56FD\u5BB6\u5386\u53F2\u6587\u5316\u540D\u57CE\uFF0C\u53E4\u4EE3\u6D77\u4E0A\u4E1D\u7EF8\u4E4B\u8DEF\u7684\u8D77\u70B9\uFF0C\u8054\u5408\u56FD\u6559\u79D1\u6587\u7EC4\u7EC7\u8BBE\u7ACB\u7684\u4E16\u754C\u591A\u5143\u6587\u5316\u5C55\u793A\u4E2D\u5FC3\uFF0C\u4E16\u754C\u5B97\u6559\u535A\u7269\u9986\uFF0C\u4E2D\u56FD\u9996\u5C4A\u4E1C\u4E9A\u6587\u5316\u4E4B\u90FD\uFF0C\u5168\u56FD\u6587\u660E\u57CE\u5E02\uFF0C\u56FD\u5BB6\u536B\u751F\u57CE\u5E02\u3002
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u7EDD\u5BF9\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u7EDD\u5BF9\u5B9A\u4F4D" aria-hidden="true">#</a> \u7EDD\u5BF9\u5B9A\u4F4D</h2><p>\u{1F47E} \u7EDD\u5BF9\u5B9A\u4E49\u4E0D\u53D7\u6587\u6863\u6D41\u5F71\u54CD\uFF0C\u5C31\u50CF\u6F02\u6D6E\u5728\u9875\u9762\u4E2D\u7684\u7CBE\u7075\uFF0C\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\u62E5\u6709\u884C\u5185\u5757\u7279\u6027\u3002</p><h3 id="\u53C2\u7167\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u53C2\u7167\u5143\u7D20" aria-hidden="true">#</a> \u53C2\u7167\u5143\u7D20</h3><p>\u5982\u679C\u7236\u7EA7\u5143\u7D20\u8BBE\u7F6E\u4E86 <code>relative | fixed | sticky</code> \uFF0C\u7EDD\u5BF9\u5B9A\u4F4D\u5B50\u5143\u7D20\u5C06\u53C2\u6570\u6B64\u7236\u5143\u7D20\u8FDB\u884C\u5B9A\u4F4D\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/4.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u9ED8\u8BA4\u4F4D\u7F6E-\u{1F4A1}" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u4F4D\u7F6E-\u{1F4A1}" aria-hidden="true">#</a> \u9ED8\u8BA4\u4F4D\u7F6E \u{1F4A1}</h3><p>\u{1F4A1} \u5982\u679C\u6CA1\u6709\u4E3A\u5B9A\u4F4D\u5143\u7D20\u8BBE\u7F6E\u504F\u79FB\uFF0C\u5C06\u53D7\u7236\u5143\u7D20\u7684padding\u7B49\u5C5E\u6027\u5F71\u54CD\uFF08content-box\uFF09\u3002\u4F46\u4F7F\u7528\u5B9A\u4F4D\u4E00\u822C\u90FD\u4F1A\u8BBE\u7F6E\u504F\u79FB\u4F4D\u7F6E\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/1.gif" alt=""></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
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
</code></pre></div><h3 id="\u8BBE\u7F6E\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5C3A\u5BF8" aria-hidden="true">#</a> \u8BBE\u7F6E\u5C3A\u5BF8</h3><p>\u{1F4D7} \u5728\u6CA1\u7528\u8BBE\u7F6E\u5B9A\u4F4D\u5143\u7D20\u7684\u5BBD\u9AD8\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B9A\u4F4D\u7684\u504F\u79FB\u503C\u8BBE\u7F6E\u5143\u7D20\u7684\u5C3A\u5BF8\u3002</p><p>\u4EE5\u4E0B\u5982\u679C\u6211\u4EEC\u8BBE\u7F6E\u4E86div\u7684\u5BBD\u9AD8\uFF0C\u90A3\u4E48<code>right: 0; bottom: 0;</code>\u5C31\u662F\u4E0D\u751F\u6548\u7684\uFF1B\u800C\u73B0\u5728\u5B83\u4F1A\u4F9D\u636E\u8FD9\u4E2A\u8BBE\u7F6E\u5F97\u5230\u5C3A\u5BF8\u662F\u5BBD\u9AD8\u4E00\u534A\u4E00\u534A\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/5.png" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u5C45\u4E2D\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u5C45\u4E2D\u5B9A\u4F4D" aria-hidden="true">#</a> \u5C45\u4E2D\u5B9A\u4F4D</h3><p>\u901A\u8FC7\u5C06 <code>left</code> \u8BBE\u7F6E\u4E3A50% ,\u5E76\u5411\u5DE6\u504F\u79FB\u5B50\u5143\u7D20\u5BBD\u5EA6\u4E00\u534A\u53EF\u4EE5\u5B9E\u73B0\u6C34\u5E73\u5C45\u4E2D\uFF0C\u5782\u76F4\u5C45\u4E2D\u4F7F\u7528\u65B9\u5F0F\u7C7B\u4F3C\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/6.png" alt=""></p><h3 id="\u6EDA\u52A8\u884C\u4E3A-\u{1F4A1}" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u884C\u4E3A-\u{1F4A1}" aria-hidden="true">#</a> \u6EDA\u52A8\u884C\u4E3A \u{1F4A1}</h3><p>\u{1F4A1} \u56FA\u5B9A\u5B9A\u4F4D\u5143\u7D20\u4F1A\u968F\u6EDA\u52A8\u6761\u53D1\u751F\u6EDA\u52A8\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/2.gif" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u7EB5\u5411\u91CD\u53E0-\u{1F47E}" tabindex="-1"><a class="header-anchor" href="#\u7EB5\u5411\u91CD\u53E0-\u{1F47E}" aria-hidden="true">#</a> \u7EB5\u5411\u91CD\u53E0 \u{1F47E}</h2><p>\u{1F4D7} <code>z-index</code>\u5C5E\u6027\u76EE\u524D\u53EA\u6709\u5728<code>position:relative</code>\u3001<code>position:absolute</code>\u548C<code>position:fixed</code>\u53C2\u4E0E\u7684\u60C5\u51B5\u4E0B\u624D\u6709\u4F5C\u7528\uFF0C\u8868\u793A\u5C42\u7EA7\uFF0C\u7C7B\u4F3Cphotoshop\u4E2D\u5C42\u7EA7\u7684\u6982\u5FF5\u3002\u73B0\u5728z-index\u5BF9\u4E8Eflex\u5BB9\u5668\u7684\u5B50\u5143\u7D20\u4E5F\u4F1A\u751F\u6548\u3002</p><p>\u{1F4D7} <code>absolute</code>\u662F\u4E00\u4E2A\u80FD\u591F\u72EC\u5F53\u4E00\u9762\u7684\u5C5E\u6027\uFF0C\u5176\u4F7F\u7528\u53EF\u4EE5\u4E0D\u8981<code>relative</code>\uFF0C\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u4F7F\u7528<code>z-index</code>\u3002\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5143\u7D20\u5E94\u7528\u4E86\u975E<code>static</code>\u7684<code>position</code>\u5C5E\u6027\u540E\uFF0C<strong>\u5176\u5C31\u4F1A\u6709\u4E00\u4E2A\u9690\u6666\u7684\u5C42\u7EA7</strong>\uFF0C<strong>\u4F1A\u5C45\u4E8E\u666E\u901A\u5143\u7D20\u4E4B\u4E0A</strong>\uFF0C\u65E0\u9700\u989D\u5916\u8BBE\u7F6Ez-index\u5C5E\u6027\u503C\u3002\uFF08\u5F53\u4E00\u4E2A\u5143\u7D20\u8BBE\u7F6E\u4E86\u5B9A\u4F4D\u4E4B\u540E\uFF0C\u8FD9\u4E2A\u5143\u7D20\u4FBF\u7406\u8BBA\u4E0A\u53EF\u4EE5\u653E\u5230\u9875\u9762\u7684\u4EFB\u4F55\u4F4D\u7F6E\uFF0C\u8FD9\u4E2A\u5143\u7D20\u5F53\u7136\u4E5F\u53EF\u4EE5\u76D6\u5230\u5176\u5B83\u5143\u7D20\u4E0A\u9762\uFF0C\u8FD9\u65F6\u5019\u5C31\u51FA\u73B0\u4E86\u5C42\u7EA7\u7684\u5173\u7CFB\uFF09</p><div class="custom-container tip"><p class="custom-container-title">z-index</p><ul><li><p>\u5982\u679C\u5143\u7D20\u91CD\u53E0\u5728\u4E00\u8D77\uFF0C\u53EF\u4EE5\u4F7F\u7528 z-index \u63A7\u5236\u5143\u7D20\u7684\u4E0A\u4E0B\u5C42\u7EA7\uFF0C\u6570\u503C\u8D8A\u5927\u8D8A\u5728\u4E0A\u9762\u3002\uFF08\u6B63\u8D1F\u90FD\u53EF\u4EE5\uFF09</p></li><li><p>\u7236\u7EA7\u5B50\u5143\u7D20\u8BBE\u7F6E z-index \u6CA1\u6709\u610F\u4E49\uFF0C\u5B50\u5143\u7D20\u6C38\u8FDC\u5728\u7236\u5143\u7D20\u4E0A \u9762\u7684\u3002</p></li></ul></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/7.png" alt=""></p><h3 id="\u5C42\u7EA7\u6539\u53D8" tabindex="-1"><a class="header-anchor" href="#\u5C42\u7EA7\u6539\u53D8" aria-hidden="true">#</a> \u5C42\u7EA7\u6539\u53D8</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/3.gif" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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

    <span class="token comment">/* hover\u65F6\u63D0\u5347\u7B2C\u4E8C\u4E2Adiv\u7684z-index */</span>
    <span class="token selector">article:hover div:nth-of-type(2)</span> <span class="token punctuation">{</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">article div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5C06\u7B2C\u4E00\u4E2Adiv\u7684index\u589E\u9AD8\uFF0C\u5C06\u4F1A\u8986\u76D6\u7B2C\u4E8C\u4E2A */</span>
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><em>\u4E24\u4E2Adiv\u5B50\u5143\u7D20\u90FD\u662F\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u53EF\u4EE5\u4EFB\u610F\u8BBE\u7F6E\u5C42\u7EA7</em></p><h3 id="\u8D2D\u7269\u8F66" tabindex="-1"><a class="header-anchor" href="#\u8D2D\u7269\u8F66" aria-hidden="true">#</a> \u8D2D\u7269\u8F66</h3><p>\u56FA\u5B9A\u663E\u793A\u533A\u57DF\u7684\u5C42\u7EA7\u8981\u9AD8\u4E8Ehover\u663E\u793A\u4E4B\u540E\u7684\u5C42\u7EA7\uFF0C\u4ECE\u800C\u5728hover\u72B6\u6001\u4E0B <code>\u6211\u7684\u8D2D\u7269\u8F66</code> \u7684\u4E0B\u8FB9\u7EBF\u80FD\u591F\u906E\u4F4F\u4E0B\u9762\u7684\u5143\u7D20\u3002</p><p>\u{1F47E} \u4E3A\u4E86\u8BA9 <code>\u6211\u7684\u8D2D\u7269\u8F66</code> \u7684z-index\u751F\u6548\uFF0C\u5FC5\u987B\u8BBE\u7F6E\u5143\u7D20\u7684\u5B9A\u4F4D\u5C5E\u6027\uFF1A<code>position: relative</code>\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/4.gif" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
        <span class="token comment">/* \u8FD9\u662F\u5FC5\u8981\u7684\uFF01 */</span>
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u6211\u7684\u8D2D\u7269\u8F66<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u8D2D\u7269\u8F66\u4E2D\u6682\u65E0\u4EA7\u54C1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u56FA\u5B9A\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u56FA\u5B9A\u5B9A\u4F4D" aria-hidden="true">#</a> \u56FA\u5B9A\u5B9A\u4F4D</h2><p>\u{1F4D7} \u5143\u7D20\u76F8\u5BF9\u4E8E\u9875\u9762\u56FA\u5B9A\u5B9A\u4F4D\u5728\u67D0\u4E2A\u4F4D\u7F6E\uFF0C\u56FA\u5B9A\u5B9A\u4F4D\u5143\u7D20\u4E0D\u4F1A\u5728\u6EDA\u52A8\u65F6\u6539\u53D8\u4F4D\u7F6E \uFF0C\u4F7F\u7528<code>position: fixed</code> \u4EA7\u751F\u56FA\u5B9A\u5B9A\u4F4D\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/5.gif" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u7C98\u6027\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u7C98\u6027\u5B9A\u4F4D" aria-hidden="true">#</a> \u7C98\u6027\u5B9A\u4F4D</h2><h3 id="\u540C\u7EA7\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u540C\u7EA7\u5B9A\u4F4D" aria-hidden="true">#</a> \u540C\u7EA7\u5B9A\u4F4D</h3><p>\u7C98\u6027\u5B9A\u4F4D\u5982\u679C\u662F\u540C\u7EA7\u7684\uFF0C\u4E0A\u9762\u7684\u5143\u7D20\u5E76\u4E0D\u4F1A\u88AB\u9876\u8D70\uFF0C\u4F1A\u4E00\u76F4<strong>\u53E0\u52A0</strong>\u5806\u63A5\u5728\u4E00\u8D77\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/6.gif" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>HHH<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>TTT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u975E\u540C\u7EA7\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u975E\u540C\u7EA7\u5B9A\u4F4D" aria-hidden="true">#</a> \u975E\u540C\u7EA7\u5B9A\u4F4D</h3><p>\u4E0D\u5C5E\u4E8E\u540C\u4E00\u4E2A\u7236\u5143\u7D20\u8BBE\u7F6E\u7C98\u6027\u5B9A\u4F4D\u65F6\uFF0C\u540E\u9762\u7684\u5143\u7D20<strong>\u6324\u6389</strong>\u539F\u6765\u4F4D\u7F6E\u7684\u5143\u7D20\u5982\u4E0B\u4F8B\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/position/7.gif" alt=""></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u7B80\u4ECB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
                \u6CC9\u5DDE\u5E02\uFF08\u95FD\u5357\u8BED\uFF1A\u6CC9\u5DDE\u5E02\uFF0C\u767D\u8A71\u5B57\uFF1ACho\xE2n-chiu-chh\u01D0\uFF0C\u81FA\u7F85\uFF1ATsu\xE2n-tsiu-tsh\u01D0\uFF0C\u95A9\u62FC\uFF1AZu\xE1nzi\u016B-c\xEE\uFF0C\u570B\u969B\u97F3\u6A19\uFF1A/tsuan\u02E8\u02E8 \u02A8iu\u02E7\u02E7 \u02A8\u02B0i\u02E7\u02E7/\uFF09\uFF0C\u7B80\u79F0\u6CC9\u3001\u9CA4\uFF0C\u6CC9\u5DDE\u5E9C\u57CE\u53C8\u79F0\u523A\u6850\u57CE\uFF08Zaytun\uFF1A\u0632\u064A\u062A\u0648\u0646\u6216Chidun\uFF1A\u1834\u1822\u1833\u1824\u1828\uFF0C\u5728\u963F\u62C9\u4F2F\u8A9E\u3001\u8499\u53E4\u8A9E\u610F\u70BA\u6A44\u6B16\uFF09\u3001\u6E29\u9675\u3001\u6E05\u6E90\uFF0C\u662F\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u570B\u798F\u5EFA\u7701\u4E0B\u8F96\u7684\u5730\u7EA7\u5E02\uFF0C\u4F4D\u4E8E\u798F\u5EFA\u7701\u4E2D\u5357\u90E8\u6CBF\u6D77\u3002\u5E02\u5883\u897F\u5357\u63A5\u53A6\u95E8\u5E02\u3001\u6F33\u5DDE\u5E02\uFF0C\u897F\u754C\u9F99\u5CA9\u5E02\uFF0C\u5317\u90BB\u4E09\u660E\u5E02\uFF0C\u4E1C\u5317\u8FBE\u798F\u5DDE\u5E02\u3001\u8386\u7530\u5E02\uFF0C\u4E1C\u9694\u53F0\u6E7E\u6D77\u5CE1\u4E0E\u53F0\u6E7E\u76F8\u671B\u3002\u5730\u5904\u95FD\u4E1C\u5357\u6CBF\u6D77\u4E18\u9675\u5E73\u539F\u533A\uFF0C\u5730\u52BF\u897F\u5317\u9AD8\uFF0C\u4E1C\u5357\u4F4E\uFF0C\u897F\u5317\u90E8\u4E3A\u6234\u4E91\u5C71\u3002\u664B\u6C5F\u4E1C\u6EAA\u548C\u897F\u6EAA\u4E8E\u5357\u5B89\u5E02\u53CC\u6EAA\u53E3\u6C47\u5408\uFF0C\u5F80\u4E1C\u6D41\u8D2F\u5E02\u533A\uFF0C\u6CE8\u5165\u6CC9\u5DDE\u6E7E\u3002\u5168\u5E02\u603B\u9762\u79EF11,287\u5E73\u65B9\u516C\u91CC\uFF0C\u4EBA\u53E3878.23\u4E07\uFF0C\u5E02\u4EBA\u6C11\u653F\u5E9C\u9A7B\u4E30\u6CFD\u533A\u4E1C\u6D77\u8857\u9053\u3002\u6CC9\u5DDE\u662F\u95FD\u4E1C\u5357\u6CBF\u6D77\u653F\u6CBB\u3001\u7ECF\u6D4E\u3001\u6587\u5316\u548C\u4EA4\u901A\u4E2D\u5FC3\uFF0C\u9996\u6279\u56FD\u5BB6\u5386\u53F2\u6587\u5316\u540D\u57CE\uFF0C\u53E4\u4EE3\u6D77\u4E0A\u7D72\u7DA2\u4E4B\u8DEF\u7684\u8D77\u70B9\uFF0C\u8054\u5408\u56FD\u6559\u79D1\u6587\u7EC4\u7EC7\u8BBE\u7ACB\u7684\u4E16\u754C\u591A\u5143\u6587\u5316\u5C55\u793A\u4E2D\u5FC3\uFF0C\u4E16\u754C\u5B97\u6559\u535A\u7269\u9986\uFF0C\u4E2D\u56FD\u9996\u5C4A\u4E1C\u4E9A\u6587\u5316\u4E4B\u90FD\uFF0C\u5168\u56FD\u6587\u660E\u57CE\u5E02\uFF0C\u56FD\u5BB6\u536B\u751F\u57CE\u5E02\u3002
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u7ECF\u6D4E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
                \u6CC9\u5DDE\u662F\u95FB\u540D\u6D77\u5185\u5916\u7684\u56FD\u9645\u82B1\u56ED\u57CE\u5E02\uFF0C\u4E2D\u56FD\u4E09\u5927\u91D1\u878D\u7EFC\u5408\u6539\u9769\u8BD5\u9A8C\u533A\u4E4B\u4E00\uFF0C\u6D77\u5CE1\u897F\u5CB8\u7ECF\u6D4E\u533A\u4E94\u5927\u4E2D\u5FC3\u57CE\u5E02\u4E4B\u4E00\uFF0C\u7ECF\u6D4E\u603B\u91CF\u8FDE\u7EED22\u5E74\u5C45\u798F\u5EFA\u7701\u9996\u4F4D[3]\u30022017\u5E74\u57CE\u5E02\u7EFC\u5408\u7ECF\u6D4E\u7ADE\u4E89\u529B\u4F4D\u5217\u4E2D\u56FD\u7B2C28\u4F4D\u3002[4]\u6CC9\u5DDE\u662F\u4E2D\u56FD\u8457\u540D\u7684\u4FA8\u4E61\u7C4D\u8CAB\u5730\uFF0C\u540C\u65F6\u6CC9\u5DDE\u4E5F\u662F\u95FD\u5357\u6587\u5316\u7684\u53D1\u6E90\u5730\u4E0E\u53D1\u7965\u5730\uFF0C\u95FD\u5357\u6587\u5316\u4FDD\u62A4\u7684\u6838\u5FC3\u533A\u4E0E\u5BCC\u96C6\u533A\uFF0C\u5386\u53F2\u6587\u5316\u6DF1\u539A\u3001\u540D\u80DC\u53E4\u8FF9\u4F17\u591A\uFF0C\u6709\u201C\u6D77\u6EE8\u90B9\u9C81\u201D\u3001\u201C\u5149\u660E\u4E4B\u57CE\u201D\u7684\u7F8E\u8A89\u3002
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u6587\u5316<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
                \u6CC9\u5DDE\u6587\u5316\u751F\u6D3B\u4E30\u5BCC\uFF0C\u5E76\u62E5\u6709\u5927\u91CF\u56FD\u5BB6\u7EA7\u975E\u7269\u8D28\u6587\u5316\u9057\u4EA7\u3002\u5982\u5357\u97F3\u3001\u6CC9\u5DDE\u5317\u7BA1\u3001\u6CC9\u5DDE\u62CD\u80F8\u821E\u3001\u68A8\u56ED\u620F\u3001\u9AD8\u7532\u620F\uFF08\u67EF\u6D3E\uFF09\u3001\u6CC9\u5DDE\u63D0\u7EBF\u6728\u5076\u620F\u3001\u664B\u6C5F\u5E03\u888B\u6728\u5076\u620F\u3001\u60E0\u5B89\u77F3\u96D5\u3001\u6CC9\u5DDE\u82B1\u706F\u3001\u5FB7\u5316\u74F7\u70E7\u5236\u6280\u827A\u3001\u60E0\u5B89\u5973\u670D\u9970\u3001\u6253\u57CE\u620F\u3001\u4E94\u7956\u62F3\u3001\u6C34\u5BC6\u9694\u8231\u798F\u8239\u5236\u9020\u6280\u827A\u3001\u4E4C\u9F99\u8336\u5236\u4F5C\u6280\u827A\uFF08\u94C1\u89C2\u97F3\u5236\u4F5C\u6280\u827A\uFF09\u3001\u95FD\u5357\u4F20\u7EDF\u6C11\u5C45\u8425\u9020\u6280\u827A\u3001\u7075\u6E90\u4E07\u5E94\u8336\u3001\u5357\u5B89\u82F1\u90FD\u62D4\u62D4\u706F\u3001\u87F3\u57D4\u5973\u4E60\u4FD7\u3001\u6CC9\u5DDE\uFF08\u674E\u5C27\u5B9D\uFF09\u523B\u7EB8\u3001\u6728\u5076\u5934\u96D5\u523B\uFF08\u6C5F\u52A0\u8D70\u6728\u5076\u5934\u96D5\u523B\uFF09\u3001\u5B89\u6D77\u55E6\u5570\u55F9\u4E60\u4FD7\u3001\u5B89\u6D77\u6293\u9E2D\u7B49\u3002
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,67),c=[o];function e(l,u){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","position.html.vue"]]);export{k as default};
