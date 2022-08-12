import{_ as o,o as e,c,b as n,d as t,a as p,e as s,r as u}from"./app.4bbb0959.js";const l={},i=p(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><p><code>webpack</code> \u662F\u4E00\u4E2A\u73B0\u4EE3 JavaScript \u5E94\u7528\u7A0B\u5E8F\u7684<em>\u9759\u6001\u6A21\u5757\u6253\u5305\u5668(module bundler)</em>\u3002\u5F53 webpack \u5904\u7406\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u5B83\u4F1A\u9012\u5F52\u5730\u6784\u5EFA\u4E00\u4E2A<em>\u4F9D\u8D56\u5173\u7CFB\u56FE(dependency graph)</em>\uFF0C\u5176\u4E2D\u5305\u542B\u5E94\u7528\u7A0B\u5E8F\u9700\u8981\u7684\u6BCF\u4E2A\u6A21\u5757\uFF0C\u7136\u540E\u5C06\u6240\u6709\u8FD9\u4E9B\u6A21\u5757\u6253\u5305\u6210\u4E00\u4E2A\u6216\u591A\u4E2A <em>bundle</em>\u3002</p><h3 id="\u9762\u5411\u8FC7\u7A0B\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u9762\u5411\u8FC7\u7A0B\u5F00\u53D1" aria-hidden="true">#</a> \u9762\u5411\u8FC7\u7A0B\u5F00\u53D1</h3><p><strong>\u7279\u5F81\uFF1A</strong> \u4E00\u9505\u4E71\u7096 \u5728\u65E9\u671F <code>js</code> \u80FD\u529B\u8FD8\u975E\u5E38\u6709\u9650\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u901A\u8FC7\u9762\u5411\u8FC7\u7A0B\u7684\u65B9\u5F0F\u628A\u4EE3\u7801\u5199\u5728\u540C\u4E00\u4E2A<code>.js</code>\u6587\u4EF6\u4E2D\uFF0C\u4E00\u4E2A\u9762\u5411\u8FC7\u7A0B\u7684\u5F00\u53D1\u6A21\u5F0F\u53EF\u80FD\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- index.html\u4EE3\u7801 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u8FD9\u91CC\u662F\u6211\u4EEC\u7F51\u9875\u7684\u5185\u5BB9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
// index.js\u4EE3\u7801
var root = document.getElementById(&#39;root&#39;);

// header\u6A21\u5757
var header = document.createElement(&#39;div&#39;);
header.innerText = &#39;header&#39;;
root.appendChild(header);

// sidebar\u6A21\u5757
var sidebar = document.createElement(&#39;div&#39;);
sidebar.innerText = &#39;sidebar&#39;;
root.appendChild(sidebar);

// content\u6A21\u5757
var content = document.createElement(&#39;div&#39;);
content.innerText = &#39;content&#39;;
root.appendChild(content);
</code></pre></div><h3 id="\u9762\u5411\u5BF9\u8C61\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u9762\u5411\u5BF9\u8C61\u5F00\u53D1" aria-hidden="true">#</a> \u9762\u5411\u5BF9\u8C61\u5F00\u53D1</h3><p><strong>\u7279\u5F81\uFF1A</strong> \u9762\u5411\u5BF9\u8C61\u5F00\u53D1\u6A21\u5F0F\u4FBF\u4E8E\u4EE3\u7801\u7EF4\u62A4\uFF0C\u6DF1\u5165\u4EBA\u5FC3\u3002 \u968F\u7740 <code>js</code> \u7684\u4E0D\u65AD\u53D1\u5C55\uFF0C\u5B83\u6240\u80FD\u89E3\u51B3\u7684\u95EE\u9898\u4E5F\u8D8A\u6765\u8D8A\u591A\uFF0C\u5982\u679C\u518D\u50CF<strong>\u9762\u5411\u8FC7\u7A0B</strong>\u90A3\u6837\u628A\u6240\u6709\u4EE3\u7801\u5199\u5728\u540C\u4E00\u4E2A<code>.js</code>\u6587\u4EF6\u4E2D\uFF0C\u90A3\u4E48\u4EE3\u7801\u5C06\u53D8\u5F97\u975E\u5E38\u96BE\u4EE5\u7406\u89E3\u548C\u7EF4\u62A4\uFF0C\u6B64\u65F6<strong>\u9762\u5411\u5BF9\u8C61</strong>\u5F00\u53D1\u6A21\u5F0F\u4FBF\u51FA\u73B0\u4E86\uFF0C\u4E00\u4E2A\u9762\u5411\u5BF9\u8C61\u5F00\u53D1\u6A21\u5F0F\u53EF\u80FD\u5982\u4E0B\u6240\u793A\u3002</p><p>\u5728<code>index.html</code>\u4E2D\u5F15\u5165\u4E0D\u540C\u7684\u6A21\u5757\uFF1A</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- index.html\u4EE3\u7801 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u8FD9\u91CC\u662F\u6211\u4EEC\u7F51\u9875\u7684\u5185\u5BB9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./src/header.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./src/sidebar.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./src/content.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><code>header.js</code>\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// header.js\u4EE3\u7801</span>
<span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> header <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  header<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;header&#39;</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>sidebar.js</code>\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// sidebar.js\u4EE3\u7801</span>
<span class="token keyword">function</span> <span class="token function">Sidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> sidebar <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  sidebar<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;sidebar&#39;</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>sidebar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>content.js</code>\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// content.js\u4EE3\u7801</span>
<span class="token keyword">function</span> <span class="token function">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> content <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  content<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;content&#39;</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>index.js</code>\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Sidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u4E0D\u8DB3\uFF1A</strong> \u4EE5\u4E0A\u7684\u4EE3\u7801\u793A\u4F8B\u4E2D\uFF0C\u867D\u7136\u4F7F\u7528<strong>\u9762\u5411\u5BF9\u8C61</strong>\u5F00\u53D1\u6A21\u5F0F\u89E3\u51B3\u4E86<strong>\u9762\u5411\u8FC7\u7A0B</strong>\u5F00\u53D1\u6A21\u5F0F\u4E2D\u7684\u4E00\u4E9B\u95EE\u9898\uFF0C\u4F46\u4F3C\u4E4E\u53C8\u5F15\u5165\u4E86\u4E00\u4E9B\u65B0\u7684\u95EE\u9898\u3002</p><ol><li>\u6BCF\u4E00\u4E2A\u6A21\u5757\u90FD\u9700\u8981\u5F15\u5165\u4E00\u4E2A<code>.js</code>\u6587\u4EF6\uFF0C\u968F\u7740\u6A21\u5757\u7684\u589E\u591A\uFF0C\u8FD9\u4F1A\u5F71\u54CD\u9875\u9762\u6027\u80FD</li><li>\u5728<code>index.js</code>\u6587\u4EF6\u4E2D\uFF0C\u5E76\u4E0D\u80FD\u76F4\u63A5\u770B\u51FA\u6A21\u5757\u7684\u903B\u8F91\u5173\u7CFB\uFF0C\u5FC5\u987B\u53BB\u9875\u9762\u624D\u80FD\u627E\u5230</li><li>\u5728<code>index.html</code>\u9875\u9762\u4E2D\uFF0C\u6587\u4EF6\u7684\u5F15\u5165\u987A\u5E8F\u5FC5\u987B\u4E25\u683C\u6309\u987A\u5E8F\u6765\u5F15\u5165\uFF0C\u4F8B\u5982\uFF1A<code>index.js</code>\u5FC5\u987B\u653E\u5728\u6700\u540E\u5F15\u5165\uFF0C\u5982\u679C\u628A<code>header.js</code>\u6587\u4EF6\u653E\u5728<code>index.js</code>\u6587\u4EF6\u540E\u5F15\u5165\uFF0C\u90A3\u4E48\u4EE3\u7801\u4F1A\u62A5\u9519</li></ol><h3 id="\u73B0\u4EE3\u5F00\u53D1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u73B0\u4EE3\u5F00\u53D1\u6A21\u5F0F" aria-hidden="true">#</a> \u73B0\u4EE3\u5F00\u53D1\u6A21\u5F0F</h3><p><strong>\u7279\u5F81\uFF1A</strong> \u6A21\u5757\u5316\u52A0\u8F7D\u65B9\u6848\u8BA9\u524D\u7AEF\u5F00\u53D1\u8FDB\u4E00\u6B65\u5DE5\u7A0B\u5316 \u6839\u636E<strong>\u9762\u5411\u5BF9\u8C61</strong>\u5F00\u53D1\u6A21\u5F0F\u4E2D\u7684\u4E00\u7CFB\u5217\u95EE\u9898\uFF0C\u968F\u540E\u5404\u79CD<strong>\u6A21\u5757\u5316</strong>\u52A0\u8F7D\u7684\u65B9\u6848\u5982\u96E8\u540E\u6625\u7B0B\uFF0C\u4F8B\u5982\uFF1A<code>ES Module</code>\u3001<code>AMD</code>\u3001<code>CMD</code>\u4EE5\u53CA<code>CommonJS</code>\u7B49\uFF0C\u4E00\u4E2A<code>ES Module</code>\u6A21\u5757\u5316\u52A0\u8F7D\u65B9\u6848\u53EF\u80FD\u5982\u4E0B\u6240\u793A\u3002</p><p><code>index.html</code>\u4EE3\u7801\uFF1A</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- index.html\u4EE3\u7801 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u8FD9\u91CC\u662F\u6211\u4EEC\u7F51\u9875\u7684\u5185\u5BB9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><code>header.js</code>\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// header.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> header <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  header<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;header&#39;</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>sidebar.js</code>\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// sidebar.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Sidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> sidebar <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  sidebar<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;sidebar&#39;</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>sidebar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>content.js</code>\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// content.js\u4EE3\u7801</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> content <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  content<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;content&#39;</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>index.js</code>\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js\u4EE3\u7801</span>
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">&#39;./src/header.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Sidebar <span class="token keyword">from</span> <span class="token string">&#39;./src/sidebar.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Content <span class="token keyword">from</span> <span class="token string">&#39;./src/content.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Sidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u6CE8\u610F\uFF1A</strong> \u4EE5\u4E0A\u4EE3\u7801\u5E76\u4E0D\u80FD\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E0A\u6267\u884C\uFF0C\u56E0\u4E3A\u6D4F\u89C8\u5668\u5E76\u4E0D\u80FD\u76F4\u63A5\u8BC6\u522B<code>ES Module</code>\u4EE3\u7801\uFF0C\u9700\u8981\u501F\u52A9\u5176\u4ED6\u5DE5\u5177\u6765\u8FDB\u884C\u7FFB\u8BD1\uFF0C\u6B64\u65F6 Webpack \u5C31\u7C89\u58A8\u767B\u573A\u4E86\u3002</p><h3 id="webpack\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#webpack\u6253\u5305" aria-hidden="true">#</a> webpack\u6253\u5305</h3>`,34),r=s("\u4E0D\u5EFA\u8BAE\u8DDF\u968F\u6B64\u5C0F\u7ED3\u4E00\u8D77\u5B89\u88C5\uFF0C\u6B64\u6B21\u793A\u4F8B\u4EC5\u4EC5\u4F5C\u4E3A\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u8BE6\u7EC6\u5B66\u4E60\u6B65\u9AA4\u8BF7\u76F4\u63A5\u9605\u8BFB\u4E0B\u4E00\u7AE0\u8282"),k={href:"https://wangtunan.github.io/blog/webpack/#%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},d=s("\u5B89\u88C5"),g=p(`<h4 id="\u751F\u6210package-json\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210package-json\u6587\u4EF6" aria-hidden="true">#</a> \u751F\u6210package.json\u6587\u4EF6</h4><p>\u53C2\u6570\u8BF4\u660E</p><p><code>-y</code>\u53C2\u6570\u8868\u793A\u76F4\u63A5\u751F\u6210\u9ED8\u8BA4\u914D\u7F6E\u9879\u7684<code>package.json</code>\u6587\u4EF6\uFF0C\u4E0D\u52A0\u6B64\u53C2\u6570\u9700\u8981\u4E00\u6B65\u6B65\u6309\u9700\u8FDB\u884C\u914D\u7F6E\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> init -y
</code></pre></div><p>\u751F\u6210\u7684<code>package.json</code>\u6587\u4EF6\uFF1A</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-vuepress&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u5B89\u88C5webpack" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5webpack" aria-hidden="true">#</a> \u5B89\u88C5Webpack</h4><p>\u53C2\u6570\u8BF4\u660E</p><p><code>-D</code>\u53C2\u6570\u4EE3\u8868\u5728\u672C\u9879\u76EE\u4E0B\u5B89\u88C5 Webpack \uFF0C\u5B83\u662F<code>--save-dev</code>\u7684\u7B80\u5199</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli -D
</code></pre></div><h4 id="\u4FEE\u6539\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u4EE3\u7801" aria-hidden="true">#</a> \u4FEE\u6539\u4EE3\u7801</h4><p>\u914D\u7F6E\u8BF4\u660E</p><div class="language-text ext-text"><pre class="language-text"><code>webpack\`\u9ED8\u8BA4\u6253\u5305\u8DEF\u5F84\u5230\`dist\`\u6587\u4EF6\u5939\uFF0C\u6253\u5305\u540E\u7684\`.js\`\u6587\u4EF6\u540D\u5B57\u53EB\`main.js
</code></pre></div><p>\u5176\u4ED6\u4EE3\u7801\u4E0D\u52A8\uFF0C\u5C06<code>index.html</code>\u4E2D\u7684<code>.js</code>\u6587\u4EF6\u6539\u6210\u5982\u4E0B\u5F15\u7528\u65B9\u5F0F(\u5F15\u7528\u6253\u5305\u540E\u7684\u6587\u4EF6)\uFF1A</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- index.html\u4EE3\u7801 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u8FD9\u91CC\u662F\u6211\u4EEC\u7F51\u9875\u7684\u5185\u5BB9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./dist/main.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="webpack\u6253\u5305-1" tabindex="-1"><a class="header-anchor" href="#webpack\u6253\u5305-1" aria-hidden="true">#</a> Webpack\u6253\u5305</h4><p>\u53C2\u6570\u8BF4\u660E</p><ol><li><code>npx webpack</code>\u4EE3\u8868\u5728\u672C\u9879\u76EE\u4E0B\u5BFB\u627E Webpack \u6253\u5305\u547D\u4EE4\uFF0C\u5B83\u533A\u522B\u4E8E<code>npm</code>\u547D\u4EE4</li><li><code>index.js</code>\u53C2\u6570\u4EE3\u8868\u672C\u6B21\u6253\u5305\u7684\u5165\u53E3\u662F<code>index.js</code></li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>$ npx webpack index.js
</code></pre></div><p>\u6253\u5305\u7ED3\u679C\uFF1A <img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/img2.png" alt="\u6548\u679C"></p><p>\u6B63\u5982\u4E0A\u9762\u4F60\u6240\u770B\u5230\u7684\u90A3\u6837\uFF0C\u7F51\u9875\u6B63\u786E\u663E\u793A\u4E86\u6211\u4EEC\u671F\u5F85\u7684\u7ED3\u679C\uFF0C\u8FD9\u4E5F\u662F Webpack \u80FD\u4E3A\u6211\u4EEC\u89E3\u51B3\u95EE\u9898\u7684\u4E00\u5C0F\u90E8\u5206\u80FD\u529B\uFF0C\u4E0B\u9762\u5C06\u6B63\u5F0F\u5F00\u59CB\u4ECB\u7ECD Webpack \u3002</p><h2 id="loader\u7684\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#loader\u7684\u7F16\u5199" aria-hidden="true">#</a> loader\u7684\u7F16\u5199</h2><div class="custom-container tip"><p class="custom-container-title">Loader</p><p>\u200B loader\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B9E\u73B0\u5BF9\u6A21\u5757\u4EE3\u7801\u7684\u51FA</p></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> init
<span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli loader-utils -D
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">|</span>-- loaders
<span class="token operator">|</span>   <span class="token operator">|</span>-- replaceLoader.js
<span class="token operator">|</span>   <span class="token operator">|</span>-- replaceLoaderAsync.js
<span class="token operator">|</span>-- src
<span class="token operator">|</span>   <span class="token operator">|</span>-- index.js
<span class="token operator">|</span>-- package.json
<span class="token operator">|</span>-- webpack.config.js
</code></pre></div><ul><li><p>webpack.config.js \uFF08resolveLoader\uFF1Aloader\u5F15\u7528\u65F6\u67E5\u627E\u4F4D\u7F6E\u914D\u7F6E\uFF09</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// path.resolve(__dirname, &quot;loaders/replaceLoaderAsync.js&quot;)</span>
  <span class="token literal-property property">resolveLoader</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./loaders&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// loader\u6267\u884C\u987A\u5E8F\u4ECE\u53F3\u5230\u5DE6</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;replaceLoader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;replaceLoaderAsync&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Sumi&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div></li><li><p>replaceLoader.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;Sumi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Enjoy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>replaceLoaderAsync.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// loader-utils\u66F4\u65B9\u4FBF\u83B7\u53D6\u5230this   \uFF08options.name === this.query.name\uFF09</span>
<span class="token keyword">const</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;loader-utils&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// this.async\u8FD4\u56DE\u5F02\u6B65callback</span>
  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// callback\u8FD4\u56DE\u66F4\u591A\u6570\u636E</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>index.js\uFF1A <code>console.log(&quot;hello Jerry&quot;);</code></p></li><li><p>package.json</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span>
  <span class="token punctuation">}</span>
  ......
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h2 id="plugin\u7684\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#plugin\u7684\u7F16\u5199" aria-hidden="true">#</a> plugin\u7684\u7F16\u5199</h2><div class="custom-container tip"><p class="custom-container-title">Plugin</p><p>\u200B plugin\u662F\u4E00\u4E2A\u7C7B\uFF0C\u5728\u6253\u5305\u7684hook\u65F6\u95F4\u70B9\u89E6\u53D1</p><p>\u200B \u57FA\u4E8E\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u8BBE\u8BA1\uFF0C\u662F\u4E8B\u4EF6\u9A71\u52A8\u7684\u63D2\u4EF6\u673A\u5236</p></div><h3 id="copyrightwebpackplugin" tabindex="-1"><a class="header-anchor" href="#copyrightwebpackplugin" aria-hidden="true">#</a> CopyrightWebpackPlugin</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CopyrightWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// compiler: webpack\u7684\u5B9E\u4F8B\u5BF9\u8C61, \u5B58\u653E\u4E86\u914D\u7F6E\u548C\u6253\u5305\u7684\u6240\u6709\u5185\u5BB9(https://webpack.js.org/api/compiler-hooks/)</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u540C\u6B65hook\u7531tap\u89E6\u53D1\uFF0C\u51FD\u6570\u6CA1\u6709callback\u53C2\u6570</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>compile<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&quot;CopyrightWebpackPlugin&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;compile tab&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// compilation\uFF1A \u53EA\u5B58\u653E\u8FD9\u6B21\u6253\u5305\u7684\u5185\u5BB9</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span>
      <span class="token string">&quot;CopyrightWebpackPlugin&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span><span class="token string">&quot;copyright.txt&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">source</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;copyright by caffrey&quot;</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">20</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> CopyrightWebpackPlugin<span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> CopyrightWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./plugins/copyright-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CopyrightWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Sumi&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="node\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#node\u8C03\u8BD5" aria-hidden="true">#</a> node\u8C03\u8BD5</h3><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;debug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node --inspect --inspect-brk node_modules/webpack/bin/webpack.js&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u200B \u6B64\u65F6<code>npm run debug</code>\u548C<code>npm run build</code>\u8FBE\u5230\u7684\u6548\u679C\u662F\u4E00\u6837\u7684\uFF0C\u663E\u793A\u7528node\u6267\u884Cwebpack.js\u53EF\u4EE5\u5141\u8BB8\u5916\u9762\u4F20\u4E00\u4E9B\u53C2\u6570\u8FDB\u53BB\uFF0C\u4F8B\u5982<code>--inspect</code>\u3001<code>--inspect-brk</code>\u5206\u522B\u8868\u793A<strong>\u8981\u5F00\u542F\u8C03\u8BD5</strong>\u548C<strong>\u5728webpack\u7B2C\u4E00\u884C\u6253\u4E00\u4E2A\u65AD\u70B9</strong></p></div><div class="language-bash ext-sh"><pre class="language-bash"><code>PS E:<span class="token punctuation">\\</span>webpack<span class="token punctuation">\\</span>plugin<span class="token operator">&gt;</span> <span class="token function">npm</span> run debug

<span class="token operator">&gt;</span> plugin@1.0.0 debug E:<span class="token punctuation">\\</span>webpack<span class="token punctuation">\\</span>plugin
<span class="token operator">&gt;</span> <span class="token function">node</span> --inspect --inspect-brk node_modules/webpack/bin/webpack.js

Debugger listening on ws://127.0.0.1:9229/cb8dee01-7e07-4eb5-823a-603ef027795c
For help, see: https://nodejs.org/en/docs/inspector
</code></pre></div><p><code>npm run debug</code>\u540E\u6253\u5F00chrome<strong>\u6D4F\u89C8\u5668\u63A7\u5236\u53F0</strong>\u7684node\u7EFF\u8272\u6309\u94AE\u5C31\u53EF\u4EE5\u770B\u5230\u8C03\u8BD5\u8FC7\u7A0B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CopyrightWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span>
      <span class="token string">&quot;CopyrightWebpackPlugin&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u65AD\u70B9\u8C03\u8BD5</span>
        <span class="token keyword">debugger</span><span class="token punctuation">;</span>
        compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span><span class="token string">&quot;copyright.txt&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">source</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;copyright by caffrey&quot;</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">20</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> CopyrightWebpackPlugin<span class="token punctuation">;</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/debug.png" alt=""></p><h2 id="bundler\u6E90\u7801\u7684\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#bundler\u6E90\u7801\u7684\u7F16\u5199" aria-hidden="true">#</a> bundler\u6E90\u7801\u7684\u7F16\u5199</h2><h3 id="\u5355\u4E2A\u6A21\u5757\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E2A\u6A21\u5757\u5206\u6790" aria-hidden="true">#</a> \u5355\u4E2A\u6A21\u5757\u5206\u6790</h3><h4 id="babel-parser-\u5206\u6790\u6E90\u4EE3\u7801-\u751F\u6210ast" tabindex="-1"><a class="header-anchor" href="#babel-parser-\u5206\u6790\u6E90\u4EE3\u7801-\u751F\u6210ast" aria-hidden="true">#</a> @babel/parser \u5206\u6790\u6E90\u4EE3\u7801, \u751F\u6210AST</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> ast <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>ast.program.body\u5206\u6790\u51FA\u62BD\u8C61\u8BED\u6CD5\u6811</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>
  Node <span class="token punctuation">{</span>
    type: <span class="token string">&#39;ImportDeclaration&#39;</span>,
    start: <span class="token number">0</span>,
    end: <span class="token number">35</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    specifiers: <span class="token punctuation">[</span> <span class="token punctuation">[</span>Node<span class="token punctuation">]</span> <span class="token punctuation">]</span>,
    source: Node <span class="token punctuation">{</span>
      type: <span class="token string">&#39;StringLiteral&#39;</span>,
      start: <span class="token number">20</span>,
      end: <span class="token number">34</span>,
      loc: <span class="token punctuation">[</span>SourceLocation<span class="token punctuation">]</span>,
      extra: <span class="token punctuation">[</span>Object<span class="token punctuation">]</span>,
      value: <span class="token string">&#39;./message.js&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  Node <span class="token punctuation">{</span>
    type: <span class="token string">&#39;ExpressionStatement&#39;</span>,
    start: <span class="token number">39</span>,
    end: <span class="token number">60</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    expression: Node <span class="token punctuation">{</span>
      type: <span class="token string">&#39;CallExpression&#39;</span>,
      start: <span class="token number">39</span>,
      end: <span class="token number">59</span>,
      loc: <span class="token punctuation">[</span>SourceLocation<span class="token punctuation">]</span>,
      callee: <span class="token punctuation">[</span>Node<span class="token punctuation">]</span>,
      arguments: <span class="token punctuation">[</span>Array<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h4 id="babel-traverse-\u5206\u6790\u62BD\u8C61\u8BED\u6CD5\u6811\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#babel-traverse-\u5206\u6790\u62BD\u8C61\u8BED\u6CD5\u6811\u7684\u8282\u70B9" aria-hidden="true">#</a> @babel/traverse \u5206\u6790\u62BD\u8C61\u8BED\u6CD5\u6811\u7684\u8282\u70B9</h4><p>dependencies\u4E3A\u4F9D\u8D56\u7684<strong>\u8DEF\u5F84\u6570\u7EC4</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> dependencies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">ImportDeclaration</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> node <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        dependencies<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>Node <span class="token punctuation">{</span>
  type: <span class="token string">&#39;ImportDeclaration&#39;</span>,
  start: <span class="token number">0</span>,
  end: <span class="token number">35</span>,
  loc: SourceLocation <span class="token punctuation">{</span>
    start: Position <span class="token punctuation">{</span> line: <span class="token number">1</span>, column: <span class="token number">0</span> <span class="token punctuation">}</span>,
    end: Position <span class="token punctuation">{</span> line: <span class="token number">1</span>, column: <span class="token number">35</span> <span class="token punctuation">}</span>  
  <span class="token punctuation">}</span>,
  specifiers: <span class="token punctuation">[</span>
    Node <span class="token punctuation">{</span>
      type: <span class="token string">&#39;ImportDefaultSpecifier&#39;</span>,      
      start: <span class="token number">7</span>,
      end: <span class="token number">14</span>,
      loc: <span class="token punctuation">[</span>SourceLocation<span class="token punctuation">]</span>,
      local: <span class="token punctuation">[</span>Node<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>,
  source: Node <span class="token punctuation">{</span>
    type: <span class="token string">&#39;StringLiteral&#39;</span>,
    start: <span class="token number">20</span>,
    end: <span class="token number">34</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    extra: <span class="token punctuation">{</span> rawValue: <span class="token string">&#39;./message.js&#39;</span>, raw: <span class="token string">&#39;&quot;./message.js&quot;&#39;</span> <span class="token punctuation">}</span>,
    value: <span class="token string">&#39;./message.js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u8DEF\u5F84\u8F6C\u5316" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u5F84\u8F6C\u5316" aria-hidden="true">#</a> \u8DEF\u5F84\u8F6C\u5316</h4><p>\u76F8\u5BF9\u8DEF\u5F84\u8F6C\u5316\u4E3A\u7EDD\u5BF9\u8DEF\u5F84(\u6216\u8005\u662F<strong>\u76F8\u5BF9\u4E8E\u6839\u8DEF\u5F84\u7684\u76F8\u5BF9\u8DEF\u5F84</strong>)</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> dirname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> newFile <span class="token operator">=</span> <span class="token string">&quot;./&quot;</span> <span class="token operator">+</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code>path.join(dirname, node.source.value)</code>\u83B7\u53D6\u5230\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u52A0\u4E0A<code>./</code>\u53D8\u6210\u76F8\u5BF9\u4E8Ebundler\u7684\u76F8\u5BF9\u8DEF\u5F84</p><h4 id="babel-core-ast\u8F6C\u53EF\u6267\u884C\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#babel-core-ast\u8F6C\u53EF\u6267\u884C\u4EE3\u7801" aria-hidden="true">#</a> @babel/core ast\u8F6C\u53EF\u6267\u884C\u4EE3\u7801</h4><p>\u6838\u5FC3\u6A21\u5757\u5176\u4E2D<strong>transformFromAst</strong>\u5C06ast\u8F6C\u5316\u4E3A\u6D4F\u89C8\u5668\u53EF\u4EE5\u6267\u884C\u7684\u4EE3\u7801\uFF0C<strong>presets</strong>\u5C06ES6\u8F6C\u5316\u4E3AES5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> babel<span class="token punctuation">.</span><span class="token function">transformFromAst</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> _message <span class="token operator">=</span> <span class="token function">_interopRequireDefault</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./message.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">_interopRequireDefault</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> obj <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">.</span>__esModule <span class="token operator">?</span> obj <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;default&quot;</span><span class="token operator">:</span> obj <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_message<span class="token punctuation">[</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5168\u90E8\u6A21\u5757\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5168\u90E8\u6A21\u5757\u5206\u6790" aria-hidden="true">#</a> \u5168\u90E8\u6A21\u5757\u5206\u6790</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">makeDependenciesGraph</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> entryModule <span class="token operator">=</span> <span class="token function">moduleAnalyser</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> graphArray <span class="token operator">=</span> <span class="token punctuation">[</span>entryModule<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> graphArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> item <span class="token operator">=</span> graphArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> dependencies <span class="token punctuation">}</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token keyword">in</span> dependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                graphArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">moduleAnalyser</span><span class="token punctuation">(</span>dependencies<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    graphArray<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        graph<span class="token punctuation">[</span>item<span class="token punctuation">.</span>filename<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">dependencies</span><span class="token operator">:</span> item<span class="token punctuation">.</span>dependencies<span class="token punctuation">,</span>
            <span class="token literal-property property">code</span><span class="token operator">:</span> item<span class="token punctuation">.</span>code<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> graph
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&#39;./src/index.js&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    dependencies: <span class="token punctuation">{</span> <span class="token string">&#39;./message.js&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;./src\\\\message.js&#39;</span> <span class="token punctuation">}</span>,
    code: <span class="token string">&#39;&quot;use strict&quot;;\\n&#39;</span> +
      <span class="token string">&#39;\\n&#39;</span> +
      <span class="token string">&#39;var _message = _interopRequireDefault(require(&quot;./message.js&quot;));\\n&#39;</span> +
      <span class="token string">&#39;\\n&#39;</span> +
      <span class="token string">&#39;function _interopRequireDefault(obj) { return obj &amp;&amp; obj.__esModule ? obj : { &quot;default&quot;: obj }; }\\n&#39;</span> +
      <span class="token string">&#39;\\n&#39;</span> +
      <span class="token string">&#39;console.log(_message[&quot;default&quot;]);&#39;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&#39;./src\\\\message.js&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    dependencies: <span class="token punctuation">{</span> <span class="token string">&#39;./word.js&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;./src\\\\word.js&#39;</span> <span class="token punctuation">}</span>,
    code: <span class="token string">&#39;&quot;use strict&quot;;\\n&#39;</span> +
      <span class="token string">&#39;\\n&#39;</span> +
      <span class="token string">&#39;Object.defineProperty(exports, &quot;__esModule&quot;, {\\n&#39;</span> +
      <span class="token string">&#39;  value: true\\n&#39;</span> +
      <span class="token string">&#39;});\\n&#39;</span> +
      <span class="token string">&#39;exports[&quot;default&quot;] = void 0;\\n&#39;</span> +
      <span class="token string">&#39;\\n&#39;</span> +
      <span class="token string">&#39;var _word = require(&quot;./word.js&quot;);\\n&#39;</span> +
      <span class="token string">&#39;\\n&#39;</span> +
      <span class="token string">&#39;var message = &quot;say &quot;.concat(_word.word);\\n&#39;</span> +
      <span class="token string">&#39;var _default = message;\\n&#39;</span> +
      <span class="token string">&#39;exports[&quot;default&quot;] = _default;&#39;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&#39;./src\\\\word.js&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    dependencies: <span class="token punctuation">{</span><span class="token punctuation">}</span>,
    code: <span class="token string">&#39;&quot;use strict&quot;;\\n&#39;</span> +
      <span class="token string">&#39;\\n&#39;</span> +
      <span class="token string">&#39;Object.defineProperty(exports, &quot;__esModule&quot;, {\\n&#39;</span> +
      <span class="token string">&#39;  value: true\\n&#39;</span> +
      <span class="token string">&#39;});\\n&#39;</span> +
      <span class="token string">&#39;exports.word = void 0;\\n&#39;</span> +
      <span class="token string">&#39;var word = &quot;hello&quot;;\\n&#39;</span> +
      <span class="token string">&#39;exports.word = word;&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u751F\u6210\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u4EE3\u7801" aria-hidden="true">#</a> \u751F\u6210\u4EE3\u7801</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>JSON.stringify(makeDependenciesGraph(entry))</code>\u751F\u6210\u7684\u4F9D\u8D56\u56FE\u8C31\u91CC\u9700\u8981\u6784\u9020<strong>require</strong>\u65B9\u6CD5\u548C<strong>exports</strong>\u5BF9\u8C61</p></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">generateCode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">makeDependenciesGraph</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
		(function(graph){
			function require(module) { 
				function localRequire(relativePath) {
					return require(graph[module].dependencies[relativePath]);
				}
				var exports = {};
				(function(require, exports, code){
					eval(code)
				})(localRequire, exports, graph[module].code);
				return exports;
			};
			require(&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;)
		})(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>graph<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">);
	</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5B8C\u6574\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u4EE3\u7801" aria-hidden="true">#</a> \u5B8C\u6574\u4EE3\u7801</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/parser&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/traverse&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>
<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/core&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">moduleAnalyser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> ast <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dependencies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">ImportDeclaration</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> node <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> dirname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> newFile <span class="token operator">=</span> <span class="token string">&quot;./&quot;</span> <span class="token operator">+</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      dependencies<span class="token punctuation">[</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> newFile<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> babel<span class="token punctuation">.</span><span class="token function">transformFromAst</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    filename<span class="token punctuation">,</span>
    dependencies<span class="token punctuation">,</span>
    code<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">makeDependenciesGraph</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> entryModule <span class="token operator">=</span> <span class="token function">moduleAnalyser</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> graphArray <span class="token operator">=</span> <span class="token punctuation">[</span>entryModule<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> graphArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> graphArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> dependencies <span class="token punctuation">}</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token keyword">in</span> dependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        graphArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">moduleAnalyser</span><span class="token punctuation">(</span>dependencies<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  graphArray<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    graph<span class="token punctuation">[</span>item<span class="token punctuation">.</span>filename<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">dependencies</span><span class="token operator">:</span> item<span class="token punctuation">.</span>dependencies<span class="token punctuation">,</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> item<span class="token punctuation">.</span>code<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> graph<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateCode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">makeDependenciesGraph</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
		(function(graph){
			function require(module) { 
				function localRequire(relativePath) {
					return require(graph[module].dependencies[relativePath]);
				}
				var exports = {};
				(function(require, exports, code){
					eval(code)
				})(localRequire, exports, graph[module].code);
				return exports;
			};
			require(&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;)
		})(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>graph<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">);
	</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">generateCode</span><span class="token punctuation">(</span><span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6A21\u5757\u6253\u5305\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u6253\u5305\u5DE5\u5177" aria-hidden="true">#</a> \u6A21\u5757\u6253\u5305\u5DE5\u5177\uFF1F</h2><p>webpack\u6700\u65E9\u662F\u4E00\u4E2Ajs\u7684\u6A21\u5757\u6253\u5305\u5DE5\u5177\uFF0C\u4F46\u662F\u73B0\u5728\uFF0Cwebpack\u5B9E\u9645\u4E0A\u5DF2\u7ECF\u662F\u4E00\u4E2A<strong>\u6A21\u5757\u6253\u5305\u5DE5\u5177</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// commonjs</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token operator">~</span>
<span class="token keyword">const</span> <span class="token operator">~</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// ESModule</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token operator">~</span>
<span class="token keyword">import</span> <span class="token operator">~</span> <span class="token keyword">from</span> <span class="token string">&quot;src&quot;</span>
</code></pre></div>`,67),h={href:"https://www.webpackjs.com/concepts/modules/",target:"_blank",rel:"noopener noreferrer"},m=s("webpack module"),b={href:"https://www.webpackjs.com/api/module-methods/",target:"_blank",rel:"noopener noreferrer"},y=s("module methods"),v={href:"https://www.webpackjs.com/api/module-variables/",target:"_blank",rel:"noopener noreferrer"},f=s("module variables"),q=p(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><h3 id="\u5168\u5C40\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5" aria-hidden="true">#</a> \u5168\u5C40\u5B89\u88C5</h3><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5982\u679C\u4F60\u53EA\u662F\u60F3\u505A\u4E00\u4E2A Webpack \u7684 Demo \u6848\u4F8B\uFF0C\u90A3\u4E48\u5168\u5C40\u5B89\u88C5\u65B9\u6CD5\u53EF\u80FD\u4F1A\u6BD4\u8F83\u9002\u5408\u4F60\u3002\u5982\u679C\u4F60\u662F\u5728\u5B9E\u9645\u751F\u4EA7\u5F00\u53D1\u4E2D\u4F7F\u7528\uFF0C\u90A3\u4E48\u63A8\u8350\u4F60\u4F7F\u7528\u672C\u5730\u5B89\u88C5\u65B9\u6CD5\u3002</p><p><code>webpack4.0+</code>\u7684\u7248\u672C\uFF0C\u5FC5\u987B\u5B89\u88C5<code>webpack-cli</code>\uFF0C<code>-g</code>\u547D\u4EE4\u4EE3\u8868\u5168\u5C40\u5B89\u88C5\u7684\u610F\u601D</p></div><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli -g
</code></pre></div><h3 id="\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D" aria-hidden="true">#</a> \u5378\u8F7D</h3><p>\u53C2\u6570\u8BF4\u660E</p><p>\u901A\u8FC7<code>npm install</code>\u5B89\u88C5\u7684\u6A21\u5757\uFF0C\u5BF9\u5E94\u7684\u53EF\u901A\u8FC7<code>npm uninstall</code>\u8FDB\u884C\u5378\u8F7D</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> uninstall webpack webpack-cli -g
</code></pre></div><h3 id="\u672C\u5730\u5B89\u88C5-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5B89\u88C5-\u63A8\u8350" aria-hidden="true">#</a> \u672C\u5730\u5B89\u88C5(\u63A8\u8350)</h3><p>\u53C2\u6570\u8BF4\u660E</p><p>\u672C\u5730\u5B89\u88C5\u7684<code>Webpack</code>\u610F\u601D\u662F\uFF0C\u53EA\u5728\u4F60\u5F53\u524D\u9879\u76EE\u4E0B\u6709\u6548\u3002\u800C\u901A\u8FC7\u5168\u5C40\u5B89\u88C5\u7684<code>Webpack</code>\uFF0C\u5982\u679C\u4E24\u4E2A\u9879\u76EE\u7684<code>Webpack</code>\u4E3B\u7248\u672C\u4E0D\u4E00\u81F4\uFF0C\u5219\u53EF\u80FD\u4F1A\u9020\u6210\u5176\u4E2D\u4E00\u4E2A\u9879\u76EE\u65E0\u6CD5\u6B63\u5E38\u6253\u5305\u3002\u672C\u5730\u5B89\u88C5\u65B9\u5F0F\u4E5F\u662F\u5B9E\u9645\u5F00\u53D1\u4E2D\u63A8\u8350\u7684\u4E00\u79CD<code>Webpack</code>\u5B89\u88C5\u65B9\u5F0F\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli -D \u6216\u8005 <span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli --save-dev
</code></pre></div><h3 id="\u7248\u672C\u53F7\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u53F7\u5B89\u88C5" aria-hidden="true">#</a> \u7248\u672C\u53F7\u5B89\u88C5</h3><p>\u53C2\u6570\u8BF4\u660E</p><p>\u5982\u679C\u4F60\u5BF9<code>Webpack</code>\u7684\u5177\u4F53\u7248\u672C\u6709\u4E25\u683C\u8981\u6C42\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5148\u53BBgithub\u7684<code>Webpack</code>\u4ED3\u5E93\u67E5\u770B\u5386\u53F2\u7248\u672C\u8BB0\u5F55\u6216\u8005\u4F7F\u7528<code>npm view webpack versions</code>\u67E5\u770B<code>Webpack</code>\u7684<code>npm</code>\u5386\u53F2\u7248\u672C\u8BB0\u5F55</p><div class="language-bash ext-sh"><pre class="language-bash"><code>// \u67E5\u770Bwebpack\u7684\u5386\u53F2\u7248\u672C\u8BB0\u5F55
$ <span class="token function">npm</span> view webpack versions

// \u6309\u7248\u672C\u53F7\u5B89\u88C5
$ <span class="token function">npm</span> <span class="token function">install</span> webpack@4.25.0 -D
</code></pre></div>`,16);function w(j,x){const a=u("ExternalLinkIcon");return e(),c("div",null,[i,n("p",null,[r,n("a",k,[d,t(a)])]),g,n("p",null,[n("a",h,[m,t(a)])]),n("p",null,[n("a",b,[y,t(a)])]),n("p",null,[n("a",v,[f,t(a)])]),q])}var S=o(l,[["render",w],["__file","basic.html.vue"]]);export{S as default};
