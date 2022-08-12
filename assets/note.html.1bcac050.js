import{_ as n,o as s,c as a,a as t}from"./app.4bbb0959.js";const p={},o=t(`<h1 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h1><h2 id="styled-components" tabindex="-1"><a class="header-anchor" href="#styled-components" aria-hidden="true">#</a> styled-components</h2><div class="custom-container tip"><p class="custom-container-title">styled-components</p><ul><li><p>\u5B9E\u73B0\u6837\u5F0F\u72EC\u4EAB</p></li><li><p>css \u5728\u67D0\u4E2A\u7EC4\u4EF6\u5185\u5F15\u5165\u4E4B\u540E\uFF0C\u5176\u5B83\u7EC4\u4EF6\u6CA1\u6709\u5F15\u5165\u4F46\u662F\u4E5F\u4F1A\u751F\u6548\uFF08\u6837\u5F0F\u5168\u5C40\u5316\uFF09</p></li><li><p>\u5B9E\u73B0\u6837\u5F0F\u53EA\u5728\u5F15\u5165\u7684\u7EC4\u4EF6\u5185\u751F\u6548</p></li></ul></div><h3 id="\u5168\u5C40\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u6837\u5F0F" aria-hidden="true">#</a> \u5168\u5C40\u6837\u5F0F</h3><ul><li>createGlobalStyle \u5B9E\u73B0\u5168\u5C40\u6837\u5F0F\u5BFC\u5165</li><li>\u7EC4\u4EF6\u5185\u5F15\u5165\u8BE5\u6837\u5F0F\u7EC4\u4EF6\uFF0C\u653E\u5728\u9700\u8981\u6E32\u67D3\u7EC4\u4EF6\u7684\u6700\u4E0A\u65B9</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createGlobalStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;styled-components&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> GlobalStyle <span class="token operator">=</span> createGlobalStyle<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: &#39;&#39;;
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Fragment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GlobalStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./style.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Fragment<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>GlobalStyle <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;red&quot;</span><span class="token operator">&gt;</span>hello world<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Fragment<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6837\u5F0F\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u7EC4\u4EF6" aria-hidden="true">#</a> \u6837\u5F0F\u7EC4\u4EF6</h3><ol><li><p>\u521B\u5EFA\u4E00\u4E2A div \u7EC4\u4EF6\u5E26\u6709\u6837\u5F0F</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&quot;styled-components&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> HeaderWrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  height: 56px;
  background: red;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>\u7EC4\u4EF6\u5F15\u5165\u4F7F\u7528\u8BE5\u7EC4\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HeaderWrapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./style&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Header</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>HeaderWrapper<span class="token operator">&gt;</span>header<span class="token operator">&lt;</span><span class="token operator">/</span>HeaderWrapper<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Header<span class="token punctuation">;</span>
</code></pre></div></li></ol><h3 id="\u5305\u542B\u56FE\u7247\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5305\u542B\u56FE\u7247\u7EC4\u4EF6" aria-hidden="true">#</a> \u5305\u542B\u56FE\u7247\u7EC4\u4EF6</h3><ul><li>\u56FE\u7247\u9700\u8981<strong>\u5148\u5F15\u5165</strong>\u7136\u540E\u518D\u4F7F\u7528\uFF08\u76F8\u5BF9\u8DEF\u5F84\u5148\u7F16\u8BD1\u540E\u5F53\u524D\u8DEF\u5F84\u662F\u6839\u8DEF\u5F84\u4F1A\u51FA\u9519\uFF09</li><li>hred \u8FD9\u79CD\u5C5E\u6027\u53EF\u4EE5\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E0A\u5199<code>&lt;Logo href=&quot;/&quot; /&gt;</code>\uFF0C\u4E5F\u53EF\u4EE5\u5728 style \u7684<strong>attr</strong>\u65B9\u6CD5\u5185\u6DFB\u52A0</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&quot;styled-components&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LogoPic <span class="token keyword">from</span> <span class="token string">&quot;../../statics/logo.png&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Logo <span class="token operator">=</span> styled<span class="token punctuation">.</span>a<span class="token punctuation">.</span><span class="token function">attrs</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>LogoPic<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">);
  background-size: contain;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div><hr><hr><p>\u901A\u8FC7<code>\${(props)=&gt; ~}</code>\u51FD\u6570\u8FD4\u56DE\u503C\u4F7F\u7528<strong>\u7EC4\u4EF6\u5C5E\u6027</strong></p><div class="language-html ext-html"><pre class="language-html"><code>&lt;RecommendItem
       imgUrl={item.get(&quot;imgUrl&quot;)}
       key={item.get(&quot;id&quot;)}
&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RecommendItem</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> RecommendItem <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  width: 280px;
  height: 50px;
  margin-bottom: 5px;
  background-image: url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>imgUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">);
  background-size: contain;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> item <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">imgUrl</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;../../../statics/1.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="input-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#input-\u7EC4\u4EF6" aria-hidden="true">#</a> Input \u7EC4\u4EF6</h3><p><code>&amp;::placeholder</code>\u66F4\u6539 placeholder \u6587\u5B57\u989C\u8272</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> NavSearch <span class="token operator">=</span> styled<span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">attrs</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&quot;\u641C\u7D22&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 20px;
  background-color: #eee;
  font-size: 15px;
  box-sizing: border-box;
  &amp;::placeholder {
    color: #999;
  }
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div><h2 id="iconfont-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#iconfont-\u7684\u4F7F\u7528" aria-hidden="true">#</a> iconfont \u7684\u4F7F\u7528</h2><ul><li><p>\u5728 iconfont \u65B0\u5EFA\u4ED3\u5E93\uFF0C\u6DFB\u52A0\u5BF9\u5E94\u56FE\u6807\uFF0C\u4E0B\u8F7D\u81F3\u672C\u5730</p></li><li><p>\u5728 src/static \u4E0B\u65B0\u5EFA iconfont \u6587\u4EF6\u5939</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">|</span>-- iconfont
<span class="token operator">|</span>   <span class="token operator">|</span>-- iconfont.css
<span class="token operator">|</span>   <span class="token operator">|</span>-- iconfont.eot
<span class="token operator">|</span>   <span class="token operator">|</span>-- iconfont.svg
<span class="token operator">|</span>   <span class="token operator">|</span>-- iconfont.ttf
<span class="token operator">|</span>   <span class="token operator">|</span>-- iconfont.woff
<span class="token operator">|</span>   <span class="token operator">|</span>-- iconfont.woff2
</code></pre></div></li><li><p>\u4FEE\u6539 iconfont.css \u4E2D\u7684\u5F15\u7528\u8DEF\u5F84\u4E3A\u76F8\u5BF9\u8DEF\u5F84</p></li><li><p>\u4FEE\u6539 iconfont.css \u4E3A iconfont.js \u6587\u4EF6\uFF0C\u4F7F\u7528<code>createGlobalStyle</code>\u5BFC\u51FA\u5168\u5C40 iconfont \u7EC4\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createGlobalStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;styled-components&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> IconFont <span class="token operator">=</span> createGlobalStyle<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
@font-face {
  font-family: &#39;iconfont&#39;;
  src: url(&#39;./iconfont.eot?t=1591025542556&#39;); /* IE9 */
  src: url(&#39;.l/iconfont.eot?t=1591025542556#iefix&#39;) format(&#39;embedded-opentype&#39;),
    /* IE6-IE8 */
      url(&#39;data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAP8AAsAAAAACBQAAAOuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDUIMmATYCJAMQCwoABCAFhG0HRxsXB1GUzM0e2cdhHEMuSywmU5QSWtz4ard4+BpL39/9d9kQKlBMksdHRVKBjaiNapWrkBWqwtQC61beZJsVyirsqefM6JoaEmhqMJBztdeanNpL9KV/3Dv9fyc4n2W5jDVpbarzqAswmkABjb3ICihAjLlh7MqLWE9gwLxxqMvE9HzgIRndAvEGKzzwSJllTWZoQrdkbIr3XLXyUGoB8M7/fPwBvuFB0amMvlfPEiQQ/b37x0a/7c1W7iIk4znBJlGxAUjiRan7ETqMbaANKN9xcQRomsL37h+OPrb//6F0L+pm/uURikp0GelD4ACp6olJbB7B90AehR8eGjeJp7bBxAPgEyZnH1WkMuPl0aZZznOKfCv9kGpvL2xtzW9rK1j2MAptWHZsztSHD4uSwoK7tLd3Ygq98hkbW1K6cSCzvXcxf41dBgATzG1maT01p6hojj84vOD8YTD7CLvsHkXZCgovp9tIOHq97uFx29t65BdteBi2y+wZz/lBIWbci9qv5WHUxleWpQf7Pf0x8vzXsGr3jh0rRqlRpnX37q2rpsAVOvOuvXd/XYnSRrd17Lilr1/fALO8/kfP/3BqPlBU6DLNL7HQE8BfBm7LSU2j4ptQx/9CXLs1MqvAFCvgyIf5O9IgD4LNlOsZp44uxB0q2LTo0Hc3RaSmT4/ffYd/Gz4QfNozXjoq45NrnwUhjkppwLoIMnHG0HNJi0+t5dJPlYwrqY47fb0D9d91Cli1veHOojh0fPvvFGr7QWxGKZi6UlUpxGB6+OsvXXPpWqH7vLUDfZ7QAPTu1Nt0jI/+RwHaoA3+re3kcd63qk7hvzzY6yr6/Dt6IfL27iToJ/k3ktaSnyhpmZOqzLBkynJbrHnScaKbggED+HUpJrwYQzvdOp3QTMdQ9JmDqllAk9yAjkEH0NWcwIB1SZMHTdLRIvuxZgGAMOYUFCM+QjWmDk3yOXTM+ARdY0HDgOvoNuegpcBMnI54giQoTIFYVJ2yZSNMkJmLlAl2Xk/KfGYh0g0chD6cdzaZhJxIH2OAMVHxJUSGsq46YCLYDNntKtR01YpEwlkI0ULNZrnsRZyoOgDjgg7hEYgEEkwBYSKVk+wWJpjc+3MhignseHpNVoW/EKIz4NohHxzvFmiS2tkq61ouMUyk8EUQMkimUzlAicCJ2M2YCtLKW1khIoJj6RHRhDKjfHJbNTe/1vGEq2CAMU9GiRoZHQPPeKci8VbsDjfF8Gw2chpTJjh4VcAAAAAA&#39;)
      format(&#39;woff2&#39;),
    url(&#39;./iconfont.woff?t=1591025542556&#39;) format(&#39;woff&#39;),
    url(&#39;./iconfont.ttf?t=1591025542556&#39;) format(&#39;truetype&#39;),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url(&#39;./iconfont.svg?t=1591025542556#iconfont&#39;) format(&#39;svg&#39;); /* iOS 4.1- */
}

.iconfont {
  font-family: &#39;iconfont&#39; !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfangdajing:before {
  content: &#39;\\e614&#39;;
}

.iconAa:before {
  content: &#39;\\e636&#39;;
}

.iconPensyumaobi:before {
  content: &#39;\\e708&#39;;
}
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>App.js \u4F7F\u7528 IconFont \u7EC4\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Fragment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">&quot;./common/header&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GlobalStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./style.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IconFont <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./statics/iconfont/iconfont.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Fragment<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>GlobalStyle <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>IconFont <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Fragment<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre></div></li></ul><h2 id="\u8F93\u5165\u6846\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u8F93\u5165\u6846\u52A8\u753B" aria-hidden="true">#</a> \u8F93\u5165\u6846\u52A8\u753B</h2><ul><li><p>\u5B9A\u4E49\u4E8B\u4EF6 onFocus\u3001onBlur</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">handleInpusFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">handleInpusBlur</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5F15\u5165 CSSTransition\uFF0C\u8BBE\u7F6E<code>classNames</code>\u5C5E\u6027</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CSSTransition</span> <span class="token attr-name">timeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{200}</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{this.state.focused}</span> <span class="token attr-name">classNames</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavSearch</span> <span class="token special-attr"><span class="token attr-name">onFocus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token value javascript language-javascript"><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleInpusFocus<span class="token punctuation">}</span></span></span></span> <span class="token special-attr"><span class="token attr-name">onBlur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token value javascript language-javascript"><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleInpusBlur<span class="token punctuation">}</span></span></span></span> 				<span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{this.state.focused</span> <span class="token attr-name">?</span> <span class="token attr-name">&#39;focused&#39;</span> <span class="token attr-name">:</span> <span class="token attr-name">&#39;&#39;}</span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavSearch</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CSSTransition</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>\u6DFB\u52A0\u52A8\u753B\u6837\u5F0F slide-enter\u3001slide-enter-active\u3001slide-exit\u3001slide-exit-active</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> SearchWrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  float: left;
  position: relative;
  .slide-enter {
    width: 160px;
    transition: all 0.3s ease-out;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all 0.3s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    &amp;.focused {
      background-color: #777;
      color: #fff;
    }
  }
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div></li></ul><h2 id="redux-react-redux" tabindex="-1"><a class="header-anchor" href="#redux-react-redux" aria-hidden="true">#</a> redux &amp;&amp; react-redux</h2><ul><li><p>\u5B9A\u4E49 store/index.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;redux&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&quot;./reducer&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre></div></li><li><p>store/reducer.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;search_focus&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;search_blur&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> state<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>App.js \u5F15\u5165 store \u548C Provider \u7EC4\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Fragment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">&quot;./common/header&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&quot;./store&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-redux&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GlobalStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./style.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IconFont <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./statics/iconfont/iconfont.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Fragment<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>GlobalStyle <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>IconFont <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Fragment<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre></div></li><li><p>\u5BF9\u5E94\u7EC4\u4EF6\u5F15\u5165 connect</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Header</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
	<span class="token operator">...</span><span class="token operator">...</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">focused</span><span class="token operator">:</span> state<span class="token punctuation">.</span>focused
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Header<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><h2 id="redux-devtools-extension" tabindex="-1"><a class="header-anchor" href="#redux-devtools-extension" aria-hidden="true">#</a> redux-devtools-extension</h2><p>https://github.com/zalmoxisus/redux-devtools-extension</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> compose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;redux&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&quot;./reducer&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> composeEnhancers <span class="token operator">=</span> window<span class="token punctuation">.</span>__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ <span class="token operator">||</span> compose<span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token function">composeEnhancers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre></div><h2 id="reducer-\u62C6\u5206" tabindex="-1"><a class="header-anchor" href="#reducer-\u62C6\u5206" aria-hidden="true">#</a> reducer \u62C6\u5206</h2><p>reducer \u5982\u679C\u5B58\u653E\u8FC7\u591A\u7684\u6570\u636E\u53EF\u80FD\u4F1A\u9020\u6210\u4EE3\u7801\u7684\u4E0D\u53EF\u7EF4\u62A4\uFF0Creducer \u7684\u62C6\u5206\u548C\u6574\u5408</p><h3 id="\u62C6\u5206" tabindex="-1"><a class="header-anchor" href="#\u62C6\u5206" aria-hidden="true">#</a> \u62C6\u5206</h3><ul><li>common/header/store/reducer.js</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;search_focus&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;search_blur&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> state<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>common/header/store/index.js \u5BFC\u51FA</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&quot;./reducer&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> reducer <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6574\u5408" tabindex="-1"><a class="header-anchor" href="#\u6574\u5408" aria-hidden="true">#</a> \u6574\u5408</h3><ul><li>store/reducer.js <code>combineReducers</code>\u65B9\u6CD5\u6574\u5408 reducer</li><li>as \u662F es6 \u5B9E\u73B0\u7684\u522B\u540D</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;redux&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reducer <span class="token keyword">as</span> headerReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../common/header/store&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> reducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">header</span><span class="token operator">:</span> headerReducer<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> reducer<span class="token punctuation">;</span>
</code></pre></div><ul><li>\u7EC4\u4EF6\u5185 state \u8DEF\u5F84\u4FEE\u6539</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6574\u5408\u540E\u7684focused\u5728state\u7684header\u4E0B</span>
    <span class="token literal-property property">focused</span><span class="token operator">:</span> state<span class="token punctuation">.</span>header<span class="token punctuation">.</span>focused<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="actioncreators" tabindex="-1"><a class="header-anchor" href="#actioncreators" aria-hidden="true">#</a> actionCreators</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">|</span>-- header
<span class="token operator">|</span>   <span class="token operator">|</span>-- store
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- actionCreators.js
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- constants.js
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- index.js
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- reducer.js
<span class="token operator">|</span>   <span class="token operator">|</span>-- index.js
<span class="token operator">|</span>   <span class="token operator">|</span>-- style.js
</code></pre></div><ul><li><p>actionCreators \u521B\u5EFA action</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> constants <span class="token keyword">from</span> <span class="token string">&quot;./constants&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">searchFocus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> constants<span class="token punctuation">.</span><span class="token constant">SEARCH_FOCUS</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">searchBlur</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> constants<span class="token punctuation">.</span><span class="token constant">SEARCH_BLUR</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>constants \u7EDF\u4E00\u5B9A\u4E49 action types</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SEARCH_FOCUS</span> <span class="token operator">=</span> <span class="token string">&quot;header/SEARCH_FOCUS&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SEARCH_BLUR</span> <span class="token operator">=</span> <span class="token string">&quot;header/SEARCH_BLUR&quot;</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>store/index \u7EDF\u4E00\u5BFC\u51FA</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&quot;./reducer&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> actionCreators <span class="token keyword">from</span> <span class="token string">&quot;./actionCreators&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> constants <span class="token keyword">from</span> <span class="token string">&quot;./constants&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> reducer<span class="token punctuation">,</span> actionCreators<span class="token punctuation">,</span> constants <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>reducer</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> constants <span class="token keyword">from</span> <span class="token string">&quot;./constants&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> constants<span class="token punctuation">.</span><span class="token constant">SEARCH_FOCUS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> constants<span class="token punctuation">.</span><span class="token constant">SEARCH_BLUR</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> state<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>header/index.js \u4F7F\u7528 actionCreators \u521B\u5EFA action</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> actionCreators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span><span class="token punctuation">;</span>

<span class="token operator">...</span><span class="token operator">...</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function">handleInpusFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">searchFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleInpusBlur</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">searchBlur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h2 id="immutable-js" tabindex="-1"><a class="header-anchor" href="#immutable-js" aria-hidden="true">#</a> Immutable.js</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>state \u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539\uFF0Creducer \u5E94\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 state</li><li>\u539F\u59CB\u7684\u65B9\u6CD5\u5B58\u5728 state \u88AB\u8BEF\u4FEE\u6539\u7684\u98CE\u9669</li><li>immutable.js \u5E2E\u52A9\u6211\u4EEC\u751F\u6210\u4E00\u4E2A immutable \u5BF9\u8C61\uFF08\u4E0D\u53EF\u6539\u53D8\uFF09</li><li>\u5B9E\u73B0 state \u4E0D\u53EF\u6539\u53D8\uFF08fromJS\u3001get\u3001set\uFF09</li></ul></div><ol><li><p>\u5C06 reducer \u4E2D\u7684 state \u8F6C\u5316\u4E3A\u901A\u8FC7<code>fromJS</code>\u65B9\u6CD5\u8F6C\u5316\u4E3A immutable \u5BF9\u8C61</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> fromJS <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;immutable&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token function">fromJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>\u6B64\u65F6 state.header \u5BF9\u8C61\u5DF2\u7ECF\u662F\u4E00\u4E2A immutable\uFF0C\u5C5E\u6027\u7684\u83B7\u53D6\u901A\u8FC7<code>get</code>\u65B9\u6CD5\u83B7\u5F97</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">focused</span><span class="token operator">:</span> state<span class="token punctuation">.</span>header<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;focused&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>reducer \u518D\u8FD4\u56DE\u65B0\u7684 state \u4E4B\u540E\uFF0C\u662F\u4E00\u4E2A\u666E\u901A\u7684\u5BF9\u8C61\uFF0C\u901A\u8FC7 get \u65B9\u6CD5\u83B7\u53D6\u4F1A\u62A5\u9519\u3002</p><p>immutable \u5BF9\u8C61<code>set</code>\u65B9\u6CD5: \u4F1A\u7ED3\u5408\u4E4B\u524D immutable \u5BF9\u8C61\u7684\u503C\u548C\u8BBE\u7F6E\u7684\u503C\u8FD4\u56DE\u4E00\u4E2A<strong>\u5168\u65B0</strong>\u7684\u5BF9\u8C61\uFF01</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> constants<span class="token punctuation">.</span><span class="token constant">SEARCH_FOCUS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;focused&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> constants<span class="token punctuation">.</span><span class="token constant">SEARCH_BLUR</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;focused&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> state<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> action<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;totalPage&quot;</span><span class="token punctuation">,</span> action<span class="token punctuation">.</span>totalPage<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// merge\u6BD4\u591A\u6B21\u7684set\u64CD\u4F5C\u6027\u80FD\u66F4\u9AD8</span>
state<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> action<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
  <span class="token literal-property property">totalPage</span><span class="token operator">:</span> action<span class="token punctuation">.</span>totalPage<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div><h2 id="redux-immutable" tabindex="-1"><a class="header-anchor" href="#redux-immutable" aria-hidden="true">#</a> redux-immutable</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>\u83B7\u53D6 focus \u9700\u8981\u8C03\u7528 state.header.get(&#39;focused&#39;)\uFF0Cstate \u548C header \u4E24\u4E2A\u5BF9\u8C61\u7C7B\u578B\u4E0D\u7EDF\u4E00</li><li>\u5E94\u8BE5\u5C06 state \u4E5F\u8F6C\u5316\u6210 immutable \u5BF9\u8C61\uFF08redux-immutable\uFF09</li><li>redux-immutable \u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E2A<code>combineReducers</code>\u65B9\u6CD5\u751F\u6210\u7684\u662F immutable \u5BF9\u8C61</li></ul></div><ol><li><p>store/reducer.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;redux-immutable&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reducer <span class="token keyword">as</span> headerReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../common/header/store&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> reducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">header</span><span class="token operator">:</span> headerReducer<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> reducer<span class="token punctuation">;</span>
</code></pre></div></li><li><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// focused: state.get(&#39;header&#39;).get(&#39;focused&#39;)</span>
    <span class="token literal-property property">focused</span><span class="token operator">:</span> state<span class="token punctuation">.</span><span class="token function">getIn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;header&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;focused&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li></ol><h2 id="redux-thunk-axios" tabindex="-1"><a class="header-anchor" href="#redux-thunk-axios" aria-hidden="true">#</a> redux-thunk &amp; axios</h2><ul><li><p>\u5F02\u6B65\u6570\u636E\u7684\u83B7\u53D6\u90FD\u62C6\u5206\u5230 actionCreators \u4E2D\uFF0C\u8981\u6C42 actionCreators \u8FD4\u56DE\u503C\u4ECE\u5BF9\u8C61\u53D8\u6210\u51FD\u6570\uFF0C\u8FD9\u9700\u8981<code>redux-thunk</code>\u8FD9\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u4FEE\u6539 store/index \u914D\u7F6E\u5982\u4E0B:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> compose<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;redux&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">&quot;redux-thunk&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&quot;./reducer&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> composeEnhancers <span class="token operator">=</span>
  window<span class="token punctuation">.</span>__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ <span class="token operator">||</span> compose<span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token function">composeEnhancers</span><span class="token punctuation">(</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre></div></li><li><p>list \u4F5C\u4E3A state \u7684\u5185\u90E8\u6570\u7EC4\u4E5F\u662F immutable \u7C7B\u578B\u7684\u6570\u7EC4\uFF0C\u5982\u679C\u76F4\u63A5\u6D3E\u53D1\u6539\u53D8\u4F1A\u5C06\u8BE5\u6570\u7EC4\u53D8\u6210\u666E\u901A\u6570\u7EC4\uFF0C\u5728<code>changeList</code>\u51FD\u6570\u4E2D\u751F\u6210\u7684 action \u7684 list \u9700\u8981<code>fromJs</code>\u65B9\u6CD5\u8F6C\u6362\u4E00\u4E0B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> constants <span class="token keyword">from</span> <span class="token string">&quot;./constants&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fromJS <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;immutable&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">changeList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> constants<span class="token punctuation">.</span><span class="token constant">CHANGE_LIST</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token function">fromJS</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    axios
      <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;api/headerList.json&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> success<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeList</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;err&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>\u6570\u7EC4\u6539\u53D8\u4E4B\u540E\u9700\u8981\u901A\u8FC7\u6570\u7EC4\u7684<code>map</code>\u65B9\u6CD5\u5FAA\u73AF\u5C55\u793A\u6570\u636E</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchInfoList</span><span class="token punctuation">&gt;</span></span>
  { this.props.list.map((item) =&gt; { return
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchInfoItem</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{item}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{item}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SearchInfoItem</span><span class="token punctuation">&gt;</span></span>
  }) }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SearchInfoList</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li></ul><h3 id="\u8C03\u6574" tabindex="-1"><a class="header-anchor" href="#\u8C03\u6574" aria-hidden="true">#</a> \u8C03\u6574</h3><p>reducer.js\uFF1Aswitch \u8BED\u6CD5\u4E00\u822C\u9700\u8981\u8DDF break\uFF0C\u8FD9\u8FB9 case \u4E4B\u540E\u6709 return\uFF0C\u5C31\u4E0D\u9700\u8981\u4E86</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> constants <span class="token keyword">from</span> <span class="token string">&quot;./constants&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fromJS <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;immutable&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token function">fromJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">focused</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> constants<span class="token punctuation">.</span><span class="token constant">SEARCH_FOCUS</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;focused&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> constants<span class="token punctuation">.</span><span class="token constant">SEARCH_BLUR</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;focused&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> constants<span class="token punctuation">.</span><span class="token constant">CHANGE_LIST</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> action<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u8BF7\u6C42\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u4F18\u5316" aria-hidden="true">#</a> \u8BF7\u6C42\u4F18\u5316</h3><p>list \u6570\u636E\u5728\u8BF7\u6C42\u4E4B\u540E\u4FBF\u4E0D\u9700\u8981\u518D\u91CD\u590D\u8BF7\u6C42\u4E86\uFF0C<code>handleInpusFocus</code>\u5185\u4F20\u5165 list\uFF0C\u8BF7\u6C42\u65F6\u5224\u65AD</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>NavSearch
  onFocus<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleInpusFocus</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">}</span>
  onBlur<span class="token operator">=</span><span class="token punctuation">{</span>handleInpusBlur<span class="token punctuation">}</span>
  className<span class="token operator">=</span><span class="token punctuation">{</span>focused <span class="token operator">?</span> <span class="token string">&quot;focused&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span>
<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>NavSearch<span class="token operator">&gt;</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">handleInpusFocus</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>list<span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">searchFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="css-\u5B9E\u73B0\u65CB\u8F6C\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#css-\u5B9E\u73B0\u65CB\u8F6C\u52A8\u753B" aria-hidden="true">#</a> css \u5B9E\u73B0\u65CB\u8F6C\u52A8\u753B</h2><ul><li>\u4F7F\u7528<code>ref</code>\u83B7\u53D6\u5230\u539F\u59CB dom \u6807\u7B7E\uFF0C\u5728<code>handlePageChange</code>\u4E2D\u4F20\u5165</li></ul><div class="language-html ext-html"><pre class="language-html"><code>&lt;SearchInfoSwitch
    onClick={() =&gt; handlePageChange(page, totalPage, this.spinIcon)}
  	&gt;
    &lt;i ref={(icon) =&gt; { this.spinIcon = icon }} className=&quot;iconfont spin&quot;&gt;<span class="token entity" title="\uE77F">&amp;#xe77f;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
    \u6362\u4E00\u6279
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SearchInfoSwitch</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><p><code>handlePageChange</code>\u83B7\u53D6\u5230 style \u7684 transform \u5C5E\u6027\uFF0C\u5C06\u975E\u6570\u5B57\u66FF\u6362\u4E3A\u7A7A</p><p>\u65CB\u8F6C\u89D2\u5EA6\u81EA\u589E 360\uFF0C\u66F4\u65B0<code>transform: rotate(xxxdeg)</code></p></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">handlePageChange</span><span class="token punctuation">(</span><span class="token parameter">page<span class="token punctuation">,</span> totalPage<span class="token punctuation">,</span> spin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> originAngle <span class="token operator">=</span> spin<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^0-9]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">ig</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>originAngle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        originAngle <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>originAngle<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        originAngle <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    spin<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;rotate(&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>originAngle <span class="token operator">+</span> <span class="token number">360</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;deg)&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>page <span class="token operator">&lt;</span> totalPage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">changePage</span><span class="token punctuation">(</span>page <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">changePage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>block \u6807\u7B7E\u624D\u80FD transform \u65CB\u8F6C</p><p>transform-origin \u8BBE\u7F6E\u65CB\u8F6C\u4E2D\u5FC3\uFF0C\u8FD9\u8FB9\u662F center</p><p>transition \u8BBE\u7F6E\u52A8\u753B</p></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> SearchInfoSwitch <span class="token operator">=</span> styled<span class="token punctuation">.</span>span<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  float: right;
  cursor: pointer;
  font-size: 13px;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save react-router-dom
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Fragment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">&quot;./common/header&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&quot;./store&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-redux&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GlobalStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./style.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IconFont <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./statics/iconfont/iconfont.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Fragment<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>GlobalStyle <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>IconFont <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> exact render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>home<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/detail&quot;</span> exact render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>detail<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Fragment<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">react-router-dom</p><ul><li>path \u5C5E\u6027\u5339\u914D\u8DEF\u7531\uFF0C\u6DFB\u52A0<strong>exact</strong>\u5C5E\u6027\u540E<code>/detail</code>\u9875\u9762\u5C06\u4E0D\u4F1A\u52A0\u8F7D home \u7EC4\u4EF6</li><li><strong>Route</strong>\u7EC4\u4EF6\u7684 render \u8FD4\u56DE\u6E32\u67D3\u5185\u5BB9\uFF08\u8DEF\u7531\u89C4\u5219\uFF09</li><li>\u5373\u6839\u636E\u8DEF\u7531\u7684\u4E0D\u540C\u6E32\u67D3\u4E0D\u540C\u7684\u7EC4\u4EF6</li></ul></div><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BrowserRouter</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">exact</span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Home}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Route</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/detail<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Detail}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Route</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BrowserRouter</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u6570\u636E\u5F02\u6B65\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5F02\u6B65\u83B7\u53D6" aria-hidden="true">#</a> \u6570\u636E\u5F02\u6B65\u83B7\u53D6</h2><div class="custom-container tip"><p class="custom-container-title">mapDispatch</p><ul><li>\u7236\u7EC4\u4EF6\u901A\u8FC7<code>connect</code>\u65B9\u6CD5\u8FDE\u63A5 store\uFF0C\u5728\u7236\u7EC4\u4EF6<code>dispatch</code>\u7684 action\uFF0C<strong>\u6240\u6709</strong>\u7684\u5B50\u7EC4\u4EF6\u90FD\u80FD\u63A5\u6536\u5230</li><li><code>formJS</code>\u65B9\u6CD5\u53EF\u4EE5\u5C06\u666E\u901A\u5BF9\u8C61\u8F6C\u5316\u4E3A immutableJS \u5BF9\u8C61\uFF0C\u7136\u540E<code>set</code>\u66F4\u65B0 state</li><li><code>merge</code>\u65B9\u6CD5\u540C\u4E0A\u53EF\u4EE5\u6267\u884C\u591A\u6B21\u7684<code>set</code>\u64CD\u4F5C</li><li>\u901A\u8FC7<strong>redux-thunk</strong>\u53EF\u4EE5\u5B9E\u73B0\u5C06\u5F02\u6B65\u8BF7\u6C42\u653E\u5230 action \u4E2D\u7BA1\u7406\uFF0C\u800C\u4E0D\u662F\u5728\u7EC4\u4EF6\u5185</li></ul></div><h3 id="\u7EC4\u4EF6\u5185\u7684\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5185\u7684\u83B7\u53D6" aria-hidden="true">#</a> \u7EC4\u4EF6\u5185\u7684\u83B7\u53D6</h3><ol><li>connect \u65B9\u6CD5\u8FDE\u63A5 store</li><li>componentDidMount \u65F6\u521B\u5EFA action \u6D3E\u53D1\u7ED9 reducer</li><li>reducer \u6839\u636E action.type \u8BBE\u7F6E immutableJS \u6570\u636E\u8FD4\u56DE</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// pages/home/index.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-redux&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token comment">// JSX</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">changeHomeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapDispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">changeHomeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/api/home.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span>success<span class="token punctuation">,</span>data<span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> <span class="token punctuation">{</span>topicList<span class="token punctuation">,</span>articleList<span class="token punctuation">,</span>recommendList<span class="token punctuation">}</span> <span class="token operator">=</span> data
                <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;change_home_data&quot;</span><span class="token punctuation">,</span>
                    topicList<span class="token punctuation">,</span>
                    articleList<span class="token punctuation">,</span>
                    recommendList
                <span class="token punctuation">}</span>
                <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>mapDispatch<span class="token punctuation">)</span><span class="token punctuation">(</span>Home<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// reducer.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fromJS <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;immutable&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token function">fromJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">topicList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">articleList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">recommendList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;change_home_data&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">topicList</span><span class="token operator">:</span> <span class="token function">fromJS</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>topicList<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">articleList</span><span class="token operator">:</span> <span class="token function">fromJS</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>articleList<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">recommendList</span><span class="token operator">:</span> <span class="token function">fromJS</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>recommendList<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u8BF7\u6C42\u4EE3\u7801\u4F18\u5316\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u4EE3\u7801\u4F18\u5316\u7BA1\u7406" aria-hidden="true">#</a> \u8BF7\u6C42\u4EE3\u7801\u4F18\u5316\u7BA1\u7406</h3><div class="custom-container tip"><p class="custom-container-title">redux</p><ul><li>\u9996\u5148\u521B\u5EFA action\uFF0C\u6D3E\u53D1\u7ED9 reducer</li><li>reducer \u83B7\u53D6 action\uFF0C\u6700\u540E\u66F4\u65B0 state</li><li>actionCreators \u7BA1\u7406 action \u7684\u521B\u5EFA</li><li>constants \u7BA1\u7406 actionTypes</li><li>redux-thunk \u80FD\u591F\u5B9E\u73B0 action \u7684\u521B\u5EFA\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF08getHomeInfo \u8FD4\u56DE\u51FD\u6570\uFF0C\u51FD\u6570\u5185\u521B\u5EFA action \u7136\u540E\u6D3E\u53D1\uFF09</li></ul></div><h4 id="\u7EC4\u4EF6-index" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6-index" aria-hidden="true">#</a> \u7EC4\u4EF6 index</h4><p>\u83B7\u53D6 actionCreators \u65B9\u6CD5\u521B\u5EFA action\uFF0C\u5E76\u4E14\u6D3E\u53D1\u7ED9 reducer</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-redux&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> actionCreators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./store&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token comment">// JSX</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">changeHomeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapDispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">changeHomeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> action <span class="token operator">=</span> actionCreators<span class="token punctuation">.</span><span class="token function">getHomeInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>mapDispatch<span class="token punctuation">)</span><span class="token punctuation">(</span>Home<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="actioncreators-1" tabindex="-1"><a class="header-anchor" href="#actioncreators-1" aria-hidden="true">#</a> actionCreators</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> constants <span class="token keyword">from</span> <span class="token string">&quot;./constants&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">changeHomeData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> constants<span class="token punctuation">.</span><span class="token constant">CHANGE_HOME_DATA</span><span class="token punctuation">,</span>
  <span class="token literal-property property">topicList</span><span class="token operator">:</span> result<span class="token punctuation">.</span>topicList<span class="token punctuation">,</span>
  <span class="token literal-property property">articleList</span><span class="token operator">:</span> result<span class="token punctuation">.</span>articleList<span class="token punctuation">,</span>
  <span class="token literal-property property">recommendList</span><span class="token operator">:</span> result<span class="token punctuation">.</span>recommendList<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// !!!!!!!!!  redux-thunk</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getHomeInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/api/home.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> success<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
      success <span class="token operator">&amp;&amp;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeHomeData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="constants" tabindex="-1"><a class="header-anchor" href="#constants" aria-hidden="true">#</a> constants</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">CHANGE_HOME_DATA</span> <span class="token operator">=</span> <span class="token string">&quot;home/CHANGE_HOME_DATA&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> index</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&quot;./reducer&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> constants <span class="token keyword">from</span> <span class="token string">&quot;./constants&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> actionCreators <span class="token keyword">from</span> <span class="token string">&quot;./actionCreators&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> reducer<span class="token punctuation">,</span> actionCreators<span class="token punctuation">,</span> constants <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="reducer" tabindex="-1"><a class="header-anchor" href="#reducer" aria-hidden="true">#</a> reducer</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> fromJS <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;immutable&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> constants <span class="token keyword">from</span> <span class="token string">&quot;./constants&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token function">fromJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">topicList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">articleList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">recommendList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> constants<span class="token punctuation">.</span><span class="token constant">CHANGE_HOME_DATA</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">topicList</span><span class="token operator">:</span> <span class="token function">fromJS</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>topicList<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">articleList</span><span class="token operator">:</span> <span class="token function">fromJS</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>articleList<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">recommendList</span><span class="token operator">:</span> <span class="token function">fromJS</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>recommendList<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u9875\u9762\u8DEF\u7531\u53C2\u6570\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u8DEF\u7531\u53C2\u6570\u83B7\u53D6" aria-hidden="true">#</a> \u9875\u9762\u8DEF\u7531\u53C2\u6570\u83B7\u53D6</h2><h3 id="params-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#params-\u53C2\u6570" aria-hidden="true">#</a> params \u53C2\u6570</h3><ul><li><code>App.js</code>\u7EC4\u4EF6\u8DEF\u7531\u8BBE\u7F6E</li></ul><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/detail/:id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Detail}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Route</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>home \u9875\u9762 List \u7EC4\u4EF6\u6DFB\u52A0<strong>\u53C2\u6570\u8DF3\u8F6C</strong></li></ul><div class="language-html ext-html"><pre class="language-html"><code>&lt;Link key={index} to={&quot;/detail/&quot; + item.get(&quot;id&quot;)}&gt;
	...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>detail \u9875\u9762\u53C2\u6570\u83B7\u53D6 <code>this.props.match.params.id</code></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>match<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="query-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#query-\u53C2\u6570" aria-hidden="true">#</a> query \u53C2\u6570</h3><ul><li><code>App.js</code>\u7EC4\u4EF6\u8DEF\u7531<strong>\u65E0\u9700\u8BBE\u7F6E</strong>\u7279\u6B8A\u53C2\u6570</li></ul><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/detail<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Detail}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Route</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>home \u9875\u9762 List \u7EC4\u4EF6\u6DFB\u52A0<strong>\u53C2\u6570\u8DF3\u8F6C</strong></li></ul><div class="language-html ext-html"><pre class="language-html"><code>&lt;Link key={index} to={&quot;/detail?id=&quot; + item.get(&quot;id&quot;)}&gt;
	...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>\u53C2\u6570\u83B7\u53D6<code>this.props.location.search</code>\uFF0C\u9700\u8981\u81EA\u5DF1<strong>\u518D\u5904\u7406</strong>\u8FD9\u4E2A\u53C2\u6570</li></ul><div class="language-text ext-text"><pre class="language-text"><code>?id=2
</code></pre></div><h2 id="\u5F02\u6B65\u7EC4\u4EF6\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u7EC4\u4EF6\u52A0\u8F7D" aria-hidden="true">#</a> \u5F02\u6B65\u7EC4\u4EF6\u52A0\u8F7D</h2><p>\u5B9E\u73B0\u9875\u9762\u5728\u8BBF\u95EE\u67D0\u4E2A\u8DEF\u7531\u9875\u9762\u7684\u65F6\u5019\u518D\u52A0\u8F7D<strong>\u5BF9\u5E94\u7684 js</strong>\u6587\u4EF6\uFF0C\u51CF\u5C11\u9996\u5C4F\u52A0\u8F7D\u65F6\u95F4</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">|</span>-- pages
<span class="token operator">|</span>   <span class="token operator">|</span>-- detail
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- store
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- index.js
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- loadable.js
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- style.js
</code></pre></div><ul><li><h4 id="loadable-js" tabindex="-1"><a class="header-anchor" href="#loadable-js" aria-hidden="true">#</a> loadable.js</h4></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> Loadable <span class="token keyword">from</span> <span class="token string">&quot;react-loadable&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> LoadableComponent <span class="token operator">=</span> <span class="token function">Loadable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">loader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\u6B63\u5728\u52A0\u8F7D<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>LoadableComponent <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><h4 id="withrouter" tabindex="-1"><a class="header-anchor" href="#withrouter" aria-hidden="true">#</a> withRouter</h4></li></ul><p><strong>detail \u9875\u9762</strong>\u9700\u8981\u83B7\u53D6\u5BF9\u5E94\u7684\u6587\u7AE0 id\uFF0C\u4F46\u662F\u7ECF\u8FC7<strong>loadable</strong>\u5904\u7406\u8FD4\u56DE\u540E\u7684\u7EC4\u4EF6\u5DF2\u7ECF\u65E0\u6CD5\u518D\u76F4\u63A5\u62FF\u5230\u53C2\u6570\uFF0C\u9700\u8981\u501F\u52A9 react-router-dom \u7684<strong>withRouter</strong>\u5305\u88C5\u8FD4\u56DE</p><p><code>export default connect(mapState, mapDispatch)(withRouter(Detail));</code></p><h2 id="\u52A0\u8F7D\u66F4\u591A" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u66F4\u591A" aria-hidden="true">#</a> \u52A0\u8F7D\u66F4\u591A</h2><ol><li>\u70B9\u51FB<strong>\u66F4\u591A\u6587\u5B57</strong>\u6D3E\u53D1 action \u5F02\u6B65\u83B7\u53D6\u4E0B\u4E00\u9875\u6570\u636E \uFF08page \u8868\u793A\u5F53\u524D\u9875\u9875\u7801\uFF0C\u83B7\u53D6\u65F6\u589E 1\uFF09</li><li>\u83B7\u53D6\u6210\u529F\u540E\u6D3E\u53D1 addHomeList \u8FD9\u4E2A action,reducer \u63A5\u6536\u540E concat \u6587\u7AE0\u6570\u636E</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ListItem<span class="token punctuation">,</span> ListInfo<span class="token punctuation">,</span> LoadMore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../style&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-redux&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> actionCreators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../store&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">List</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> list<span class="token punctuation">,</span> getMoreList<span class="token punctuation">,</span> page <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>Link key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> to<span class="token operator">=</span><span class="token string">&quot;/detail&quot;</span><span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>ListItem<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>img className<span class="token operator">=</span><span class="token string">&quot;pic&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span> src<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;imgUrl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>ListInfo<span class="token operator">&gt;</span>
                  <span class="token operator">&lt;</span>h3 className<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
                  <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">&quot;desc&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;desc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>ListInfo<span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>ListItem<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>LoadMore onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">getMoreList</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\u66F4\u591A\u6587\u5B57<span class="token operator">&lt;</span><span class="token operator">/</span>LoadMore<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> state<span class="token punctuation">.</span><span class="token function">getIn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;articleList&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">page</span><span class="token operator">:</span> state<span class="token punctuation">.</span><span class="token function">getIn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;articlePage&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapDispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">getMoreList</span><span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">getMoreList</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapState<span class="token punctuation">,</span> mapDispatch<span class="token punctuation">)</span><span class="token punctuation">(</span>List<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="actioncreators-2" tabindex="-1"><a class="header-anchor" href="#actioncreators-2" aria-hidden="true">#</a> actionCreators</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">addArticleList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">articleList</span><span class="token operator">:</span> state<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;articleList&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">articlePage</span><span class="token operator">:</span> action<span class="token punctuation">.</span>nextPage<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getMoreList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/homeList.json?page=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">addHomeList</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> page <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="reducer-1" tabindex="-1"><a class="header-anchor" href="#reducer-1" aria-hidden="true">#</a> reducer</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">addArticleList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">articleList</span><span class="token operator">:</span> state<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;articleList&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">articlePage</span><span class="token operator">:</span> action<span class="token punctuation">.</span>nextPage<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u56DE\u5230\u9876\u90E8" tabindex="-1"><a class="header-anchor" href="#\u56DE\u5230\u9876\u90E8" aria-hidden="true">#</a> \u56DE\u5230\u9876\u90E8</h2><ol><li>\u76D1\u542C window \u7684 scroll \u4E8B\u4EF6\uFF0C\u5230\u8FBE\u9608\u503C\u663E\u793A\u56DE\u5230\u9876\u90E8\u6309\u94AE</li><li>\u70B9\u51FB\u56DE\u5230\u9876\u90E8\u6267\u884C window.scrollTl(0,0)</li><li>componentWillUnmount \u79FB\u9664\u76D1\u542C</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-redux&quot;</span><span class="token punctuation">;</span>
<span class="token operator">&lt;&lt;</span><span class="token operator">&lt;&lt;</span><span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span> <span class="token constant">HEAD</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> withRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Detail</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> content <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token constant">JSX</span><span class="token operator">...</span><span class="token operator">...</span>
<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>
<span class="token keyword">import</span> List <span class="token keyword">from</span> <span class="token string">&quot;./components/List&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Recommend <span class="token keyword">from</span> <span class="token string">&quot;./components/Recommend&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Writer <span class="token keyword">from</span> <span class="token string">&quot;./components/Writer&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Topic <span class="token keyword">from</span> <span class="token string">&quot;./components/Topic&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HomeWrapper<span class="token punctuation">,</span> HomeLeft<span class="token punctuation">,</span> HomeRight<span class="token punctuation">,</span> BackTop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./style&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> actionCreators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./store&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">handleScrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showScroll <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>HomeWrapper<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>HomeLeft<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>img
            className<span class="token operator">=</span><span class="token string">&quot;banner-img&quot;</span>
            alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span>
            src<span class="token operator">=</span><span class="token string">&quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1592200833675&amp;di=6fc258493302450c75369d484e287e9b&amp;imgtype=0&amp;src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201306%2F23%2F110328s72xxse7lfis9fnd.jpg&quot;</span>
          <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Topic <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>List <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>HomeLeft<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>HomeRight<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Recommend <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Writer <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>HomeRight<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>showScroll <span class="token operator">?</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>BackTop onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleScrollTop<span class="token punctuation">}</span><span class="token operator">&gt;</span>\u56DE\u5230\u9876\u90E8<span class="token operator">&lt;</span><span class="token operator">/</span>BackTop<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>HomeWrapper<span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;&gt;</span><span class="token operator">&gt;&gt;&gt;</span><span class="token operator">&gt;</span> c126359de7417042a3f2a740f3802ed80315daa0
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token operator">&lt;&lt;</span><span class="token operator">&lt;&lt;</span><span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span> <span class="token constant">HEAD</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>match<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">changeHomeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6EDA\u52A8\u4E8B\u4EF6\u76D1\u542C</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u79FB\u9664\u4E8B\u4EF6</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;scroll&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>changeScrollTopShow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;scroll&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>changeScrollTopShow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&gt;&gt;&gt;</span><span class="token operator">&gt;&gt;&gt;</span><span class="token operator">&gt;</span> c126359de7417042a3f2a740f3802ed80315daa0
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token operator">&lt;&lt;</span><span class="token operator">&lt;&lt;</span><span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span> <span class="token constant">HEAD</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapDispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapState<span class="token punctuation">,</span> mapDispatch<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token function">withRouter</span><span class="token punctuation">(</span>Detail<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>
  <span class="token literal-property property">showScroll</span><span class="token operator">:</span> state<span class="token punctuation">.</span><span class="token function">getIn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;showScroll&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapDispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">changeHomeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">getHomeInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">changeScrollTopShow</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6D3E\u53D1toggleTopShow</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">&gt;</span> <span class="token number">400</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">toggleTopShow</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">toggleTopShow</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapState<span class="token punctuation">,</span> mapDispatch<span class="token punctuation">)</span><span class="token punctuation">(</span>Home<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u8DEF\u7531\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u8DF3\u8F6C" aria-hidden="true">#</a> \u8DEF\u7531\u8DF3\u8F6C</h2><p>react \u7684\u5355\u9875\u9762\u5E94\u7528\u7531<strong>react-router-dom</strong>\u5B9E\u73B0\u8DEF\u7531\u7684\u8DF3\u8F6C\uFF0C\u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D html\uFF0C\u53EA\u6539\u53D8\u90E8\u5206\u533A\u57DF\u7684\u663E\u793A</p><p><strong>Link</strong>\u7EC4\u4EF6\u5B9E\u73B0\u94FE\u63A5</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/detail<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8DF3\u8F6C\u5230\u8BE6\u60C5\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="purecomponent" tabindex="-1"><a class="header-anchor" href="#purecomponent" aria-hidden="true">#</a> PureComponent</h2><p>\u7EC4\u4EF6\u9700\u8981\u4F7F\u7528<code>shouldComponentUpdate</code>\u89C2\u5BDF\u4E0D\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u7684 redux \u6570\u636E\uFF0C\u51CF\u5C11\u67D0\u4E9B\u7EC4\u4EF6\u7684\u4E0D\u5FC5\u8981\u91CD\u65B0\u6E32\u67D3</p><p>\u5728\u4F7F\u7528\u4E86<code>immutable.js</code>\u4E0B\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5F15\u5165<strong>PureComponent</strong>\u4EE3\u66FF\u539F\u6765\u7684 Component \u7684 class \u5373\u53EF\u81EA\u52A8\u5B9E\u73B0\u8BE5\u529F\u80FD</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">List</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ....</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;&gt;</span><span class="token operator">&gt;&gt;&gt;</span><span class="token operator">&gt;</span> c126359de7417042a3f2a740f3802ed80315daa0
</code></pre></div>`,133),e=[o];function c(l,u){return s(),a("div",null,e)}var k=n(p,[["render",c],["__file","note.html.vue"]]);export{k as default};
