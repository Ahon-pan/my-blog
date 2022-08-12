import{_ as s,o as n,c as a,a as t}from"./app.4bbb0959.js";const p={},e=t(`<h1 id="\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u7B14\u8BB0" aria-hidden="true">#</a> \u7B14\u8BB0</h1><h2 id="\u547D\u540D\u7A7A\u95F4\u4E0E\u7F16\u8BD1\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4\u4E0E\u7F16\u8BD1\u6253\u5305" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4\u4E0E\u7F16\u8BD1\u6253\u5305</h2><h3 id="\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4</h3><p>\u{1F4D7} TypeScript \u50CF\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u4E00\u6837\uFF0C\u5B58\u5728\u547D\u540D\u7A7A\u95F4\uFF08namespace\uFF09\u7684\u6982\u5FF5\u3002</p><blockquote><p>https://github.com/caffreygo/demoFolder</p></blockquote><p>\u5F53\u6211\u4EEC\u5B9A\u4E49\u4EE5\u4E0B\u540C\u540D\u53D8\u91CF\u65F6\u662F\u4E0D\u5141\u8BB8\u7684\uFF0C\u8FD9\u79CD\u60C5\u51B5\u53EF\u4EE5\u901A\u8FC7\u547D\u540D\u7A7A\u95F4\u89E3\u51B3</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;helloworld&#39;</span>
<span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;google.com&#39;</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u4F7F\u7528<strong>\u547D\u540D\u7A7A\u95F4</strong>\u5C06\u53D8\u91CF\u9694\u79BB</p><ul><li>\u6570\u636E\u9700\u8981\u4F7F\u7528 export \u5BFC\u51FA\u624D\u53EF\u4EE5\u4F7F\u7528</li><li>\u5B50\u547D\u540D\u7A7A\u95F4\u4E5F\u9700\u8981 export \u540E\u624D\u53EF\u4EE5\u4F7F\u7528</li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> User <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;helloworld&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">namespace</span> Member <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;google.com&#39;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Member<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u62A5\u9519\uFF0C\u56E0\u4E3A\u6CA1\u6709\u4F7F\u7528 export \u5C06\u53D8\u91CF\u5BFC\u51FA</span>
</code></pre></div><p>\u547D\u540D\u7A7A\u95F4\u652F\u6301\u5D4C\u5957</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> User <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;helloworld&#39;</span>
    <span class="token keyword">export</span> <span class="token keyword">namespace</span> Member <span class="token punctuation">{</span>
        <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;google.com&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>Member<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//google.com \u83B7\u53D6\u5B50\u547D\u540D\u7A7A\u95F4\u4E2D\u7684\u6570\u636E </span>
</code></pre></div><h3 id="\u5355\u72EC\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u5355\u72EC\u7F16\u8BD1" aria-hidden="true">#</a> \u5355\u72EC\u7F16\u8BD1</h3><p>\u4E0B\u9762\u5C06\u6BCF\u4E2A ts \u6587\u4EF6\u5355\u72EC\u8FDB\u884C\u7F16\u8BD1\uFF0C\u7136\u540E\u5728 html \u6587\u4EF6\u4E2D\u4F9D\u6B21\u5F15\u5165</p><p>\u9996\u5148\u521B\u5EFA tsconfig.js</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tsc --init
</code></pre></div><p>\u7136\u540E\u6267\u884C\u6587\u4EF6\u76D1\u6D4B</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tsc -w
</code></pre></div><p>\u4E0B\u9762\u6211\u4EEC\u521B\u5EFA<code>user.ts</code>\u6A21\u5757\u6587\u4EF6</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> User <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;helloworld&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">namespace</span> Member <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;google.com&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 index.ts \u6587\u4EF6\u4E2D\u5B9A\u4E49\u4E1A\u52A1\u5185\u5BB9\uFF0C\u5373\u4F7F\u7528 User.ts \u4E2D\u7684\u6570\u636E User.name</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7136\u540E\u6267\u884C\u7F16\u8BD1</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tsc -w
</code></pre></div><p>\u521B\u5EFAhd.html \u6587\u4EF6\u5F15\u5165\u8FD9\u4E24\u4E2A JS \u6587\u4EF6\uFF0C\u6CE8\u610F\u8981\u5C06 namespace.js \u6587\u4EF6\u5148\u5F15\u5165</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>helloworld<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defer</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defer</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u5408\u5E76\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u6253\u5305" aria-hidden="true">#</a> \u5408\u5E76\u6253\u5305</h3><p>\u{1F4D7} \u4E0A\u9762\u7684\u591A\u6587\u4EF6\u5904\u7406\u65B9\u5F0F\u975E\u5E38\u4E0D\u65B9\u4FBF\uFF0C\u5982\u679C\u6709<strong>\u591A\u4E2A\u6587\u4EF6</strong>\u8981\u5199\u591A\u4E2A script \u6807\u7B7E\u6765\u5F15\u5165\u3002</p><p>\u4E0B\u9762\u662F\u901A\u8FC7\u547D\u4EE4\u5C06\u591A\u4E2A\u6587\u4EF6\u8FDB\u884C\u6253\u5305</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tsc --outFile ./dist/app.js user.ts index.ts
</code></pre></div><p>\u7136\u540E\u5728 hd.html \u6587\u4EF6\u5F15\u5165\u6253\u5305\u597D\u7684\u6587\u4EF6</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>helloworld<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dist/app.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defer</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h3><p>\u{1F4D7} \u5982\u679C\u5B58\u5728\u591A\u4E2A\u6587\u4EF6\u90FD\u50CF\u4E0A\u9762\u4E00\u6837\u5728\u547D\u4EE4\u884C\u586B\u5199\uFF0C\u663E\u7136\u662F\u5F88\u9EBB\u70E6\u4E86\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u65B9\u6CD5\u4F18\u5316\u5728 index.ts \u4E2D\u4F7F\u7528 <code>reference</code> \u5F15\u5165\u4F9D\u8D56\u7684\u6587\u4EF6</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">/// &lt;reference path=&quot;user.ts&quot;/&gt;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7136\u540E\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u7F16\u8BD1\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tsc --outFile ./dist/app.js index.ts 
</code></pre></div><p>\u7136\u540E\u8BBF\u95EE hd.html</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>helloworld<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dist/app.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defer</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="amd" tabindex="-1"><a class="header-anchor" href="#amd" aria-hidden="true">#</a> amd</h3><p>\u{1F530} \u4F7F\u7528 amd \u6A21\u5757\u6253\u5305\u8F83\u4E0A\u9762\u7684\u6253\u5305\u65B9\u5F0F<strong>\u65B9\u4FBF</strong>\u4E9B\uFF0C\u56E0\u4E3A\u6211\u4EEC\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528 js \u6A21\u5757\u7684 export/import \u8BED\u6CD5</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>ts\u4EE3\u7801\u7684\u4E66\u5199\u6B63\u5E38\u4F7F\u7528es6\u89C4\u8303\u7684import/export\uFF0C\u7136\u540E\u5C06tsconfig\u7684\u6253\u5305\u8F93\u51FA\u65B9\u5F0F\u66F4\u6539\u4E3Aamd\u3002</li><li>tsc\u6267\u884C\u7F16\u8BD1\u547D\u4EE4\u5C06ts\u6587\u4EF6\u7F16\u8BD1\u4E3Aamd\u6A21\u5757\u4EE3\u7801</li><li>\u9875\u9762\u5F15\u5165require.js\uFF0C\u7136\u540E\u4F7F\u7528\u6B63\u786Erequire amd <code>require([&#39;App&#39;])</code>\u5373\u53EF</li></ol></div><p>\u9996\u5148\u521B\u5EFA ts\u914D\u7F6E\u6587\u4EF6 tsconfig.js</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tsc --init
</code></pre></div><p>\u7136\u540E\u4FEE\u6539\u914D\u7F6E\u9879</p><div class="language-json ext-json"><pre class="language-json"><code>...
<span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;amd&quot;</span> 
...
</code></pre></div><p>\u7136\u540E\u521B\u5EFAuser.ts\uFF0C\u5E76\u4E14\u53EA\u5BFC\u51FA User\u7C7B</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">namespace</span> User <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;helloworld&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">namespace</span> Member <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;google.com&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728index.ts \u6587\u4EF6\u4E2Dimport\u5BFC\u5165 ts \u7684User\u6A21\u5757</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> User <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./user&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7136\u540E\u6267\u884C\u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tsc --outFile ./dist/app.js   
</code></pre></div><p>\u7136\u540E\u4FEE\u6539 hd.html \u6587\u4EF6\u5185\u5BB9\uFF0C\u56E0\u4E3A\u662F amd \u6A21\u5757\u6240\u4EE5\u9700\u8981\u4F7F\u7528 require.js \u5904\u7406\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/require.js/2.3.6/require.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dist/app.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;App&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token parameter">User</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,54),o=[e];function c(l,u){return n(),a("div",null,o)}var i=s(p,[["render",c],["__file","note.html.vue"]]);export{i as default};