import{_ as n,o as s,c as a,a as p}from"./app.4bbb0959.js";const t={},e=p(`<h1 id="\u57FA\u7840\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u8BED\u6CD5</h1><h2 id="typescript\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#typescript\u7684\u5B9A\u4E49" aria-hidden="true">#</a> TypeScript\u7684\u5B9A\u4E49</h2><p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.</p><ul><li>JavaScript\u7684\u8D85\u96C6 \u3001\u9759\u6001\u7C7B\u578B</li><li>\u9700\u8981\u628Ats\u7F16\u8BD1\u6210 JavaScript \u4EE3\u7801\u624D\u80FD\u6267\u884C</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// js\u52A8\u6001\u7C7B\u578B</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// ts\u9759\u6001\u7C7B\u578B   \u62A5\u9519\u63D0\u793A</span>
<span class="token keyword">let</span> b1 <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">b2</span><span class="token operator">:</span>number <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

<span class="token comment">// ts\u76F4\u63A5\u6267\u884C</span>
<span class="token comment">// Uncaught SyntaxError: Unexpected identifier</span>
</code></pre></div><h2 id="typescript\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#typescript\u7684\u4F18\u52BF" aria-hidden="true">#</a> TypeScript\u7684\u4F18\u52BF</h2><ul><li>\u7F16\u5199\u65F6\u7684\u9519\u8BEF\u68C0\u67E5</li><li>\u7F16\u8F91\u5668\u7684\u8BED\u6CD5\u63D0\u793A</li><li>\u4EE3\u7801\u8BED\u4E49\u66F4\u6E05\u6670\u6613\u61C2</li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">tsDemo</span><span class="token punctuation">(</span>data<span class="token operator">:</span> Point<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>x <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>y <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">tsDemo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="typescript\u8FD0\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#typescript\u8FD0\u884C\u73AF\u5883" aria-hidden="true">#</a> TypeScript\u8FD0\u884C\u73AF\u5883</h2><ul><li>node\u73AF\u5883 \uFF08node -v &amp;&amp; npm -v\u68C0\u67E5\u7248\u672C\uFF09</li><li>vs code\u8BBE\u7F6E\uFF08quote: single &amp;&amp; tab: 2)</li><li>\u5B89\u88C5prettier (format on save = true &amp;&amp; prettier: Single Quote)</li><li>\u5B89\u88C5typescript (npm install typescript@3.6.4 -g)</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u9A8C\u8BC1</span>
tsc demo<span class="token punctuation">.</span>ts
node demo<span class="token punctuation">.</span>js

<span class="token comment">//  tsc : \u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6 C:\\Users\\Caffrey\\AppData\\Roaming\\npm\\tsc.ps1\u3002</span>
<span class="token comment">//  \u672A\u5BF9\u6587\u4EF6 C:\\Users\\Caffrey\\AppData\\Roaming\\npm\\tsc.ps1 \u8FDB\u884C\u6570\u5B57\u7B7E\u540D\u3002\u65E0\u6CD5\u5728\u5F53\u524D</span>
<span class="token comment">//  \u7CFB\u7EDF\u4E0A\u8FD0\u884C\u8BE5\u811A\u672C\u3002\u6709\u5173\u8FD0\u884C\u811A\u672C\u548C\u8BBE\u7F6E\u6267\u884C\u7B56\u7565\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 https:/go.microsoft.com/</span>
<span class="token comment">//  fwlink/?LinkID=135170\u4E2D\u7684 about_Execution_Policies\u3002</span>
<span class="token comment">//  \u6240\u5728\u4F4D\u7F6E \u884C:1 \u5B57\u7B26: 1</span>
<span class="token comment">//  + tsc demo.ts</span>
<span class="token comment">//  + ~~~</span>
<span class="token comment">//      + CategoryInfo          : SecurityError: (:) []\uFF0CPSSecurityException</span>
<span class="token comment">//      + FullyQualifiedErrorId : UnauthorizedAccess</span>
\u9700\u8981\u7BA1\u7406\u5458\u8EAB\u4EFD\u6253\u5F00powershell
\u8FD0\u884CSet<span class="token operator">-</span>ExecutionPolicy RemoteSigned
</code></pre></div><p><strong>\u6539\u8FDB</strong></p><ul><li>\u5B89\u88C5ts-node (npm install -g ts-node // npm install -g ts-node@8.4.1)</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>ts-node demo.ts
</code></pre></div><h2 id="\u9759\u6001\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u7C7B\u578B" aria-hidden="true">#</a> \u9759\u6001\u7C7B\u578B</h2><ul><li>\u53D8\u91CF\u4F1A\u53D7\u5230\u9759\u6001\u7C7B\u578B\u7684\u9650\u5236\uFF08\u7C7B\u578B\u4E0D\u80FD\u4FEE\u6539\uFF09</li><li>\u62E5\u6709\u7C7B\u578B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF08\u7F16\u8F91\u5668\u7684\u63D0\u9192\uFF09</li></ul><h2 id="\u57FA\u7840\u7C7B\u578B\u548C\u5BF9\u8C61\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7C7B\u578B\u548C\u5BF9\u8C61\u7C7B\u578B" aria-hidden="true">#</a> \u57FA\u7840\u7C7B\u578B\u548C\u5BF9\u8C61\u7C7B\u578B</h2><p>\u9759\u6001\u7C7B\u578B\u5E2E\u52A9\u5224\u65AD\u53D8\u91CF\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u662F\u4EC0\u4E48</p><p>\u9759\u6001\u7C7B\u578B\uFF1A</p><ol><li>\u57FA\u7840\u7C7B\u578B</li><li>\u5BF9\u8C61\u7C7B\u578B</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u57FA\u7840\u7C7B\u578B null, undefined, symbol, boolean, void, string, number...</span>
<span class="token keyword">const</span> <span class="token literal-property property">count</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">teacherName</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;Dell&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5BF9\u8C61\u7C7B\u578B\uFF08\u51FD\u6570\u7C7B\u578B\uFF0C \u6570\u7EC4\u7C7B\u578B...\uFF09</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">teacher</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Dell&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u6570\u7EC4\u7C7B\u578B</span>
<span class="token keyword">const</span> <span class="token literal-property property">numbers</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// dell \u5FC5\u987B\u662F\u4E00\u4E2APerson\u7C7B\u5BF9\u5E94\u7684\u5BF9\u8C61</span>
<span class="token keyword">const</span> <span class="token literal-property property">dell</span><span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// getTotal\u662F\u4E00\u4E2A\u51FD\u6570\uFF08\uFF09=&gt; \uFF0C\u8FD4\u56DE\u503C\u662F\u6570\u5B57 number</span>
<span class="token keyword">const</span> <span class="token function-variable function">getTotal</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function-variable function">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u7C7B\u578B\u6CE8\u89E3\u548C\u7C7B\u578B\u63A8\u65AD" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u6CE8\u89E3\u548C\u7C7B\u578B\u63A8\u65AD" aria-hidden="true">#</a> \u7C7B\u578B\u6CE8\u89E3\u548C\u7C7B\u578B\u63A8\u65AD</h2><ul><li>type annotation: \u7C7B\u578B\u6CE8\u89E3, \u6211\u4EEC\u6765\u544A\u8BC9 TS \u53D8\u91CF\u662F\u4EC0\u4E48\u7C7B\u578B</li><li>type inference: \u7C7B\u578B\u63A8\u65AD, TS \u4F1A\u81EA\u52A8\u7684\u53BB\u5C1D\u8BD5\u5206\u6790\u53D8\u91CF\u7684\u7C7B\u578B</li><li>\u5982\u679C TS \u80FD\u591F\u81EA\u52A8\u5206\u6790\u53D8\u91CF\u7C7B\u578B\uFF0C\u6211\u4EEC\u5C31\u4EC0\u4E48\u4E5F\u4E0D\u9700\u8981\u505A\u4E86</li><li>\u5982\u679C TS \u65E0\u6CD5\u5206\u6790\u53D8\u91CF\u7C7B\u578B\u7684\u8BDD\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u4F7F\u7528\u7C7B\u578B\u6CE8\u89E3</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u53EF\u81EA\u52A8\u5206\u6790</span>
<span class="token keyword">const</span> firstNumber <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> secondNumber <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> total <span class="token operator">=</span> firstNumber <span class="token operator">+</span> secondNumber<span class="token punctuation">;</span>

<span class="token comment">// \u7C7B\u578B\u6CE8\u89E3\uFF0C\u7ED3\u679C\u7C7B\u578B\u63A8\u65AD</span>
<span class="token keyword">function</span> <span class="token function">getTotalData</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">firstNumber</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">secondNumber</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> firstNumber <span class="token operator">+</span> secondNumber<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> totalData <span class="token operator">=</span> <span class="token function">getTotalData</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u51FD\u6570\u76F8\u5173\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u76F8\u5173\u7C7B\u578B" aria-hidden="true">#</a> \u51FD\u6570\u76F8\u5173\u7C7B\u578B</h2><ul><li>\u5982\u679C\u51FD\u6570\u7684\u53C2\u6570\u89E3\u6784\uFF0C\u5BF9\u5E94\u7684\u53C2\u6570\u7C7B\u578B\u58F0\u660E \uFF1A{ key: value }</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// function add(first: number, second: number): number {</span>
<span class="token comment">//   return first + second;</span>
<span class="token comment">// }</span>

<span class="token comment">// function sayHello(): void {</span>
<span class="token comment">//   console.log(&#39;hello&#39;);</span>
<span class="token comment">// }</span>

<span class="token comment">// function errorEmitter(): never {</span>
<span class="token comment">//   while(true) {}</span>
<span class="token comment">// }</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> first<span class="token punctuation">,</span> second <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> number<span class="token punctuation">;</span> second<span class="token operator">:</span> number <span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">return</span> first <span class="token operator">+</span> second<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> first <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> number <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> first<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">second</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u56DE\u987E" tabindex="-1"><a class="header-anchor" href="#\u56DE\u987E" aria-hidden="true">#</a> \u56DE\u987E</h2><ul><li>\u58F0\u660E\u51FD\u6570\u7684\u4E24\u79CD\u65B9\u5F0F(:\u7C7B\u578B = \u5B9E\u73B0)</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5B9A\u4E49\u51FD\u6570\u7ED3\u6784\u4F53\uFF0C\u53EF\u4EE5\u628A (str: string) =&gt; number \u63D0\u53D6\u51FA\u6765\u58F0\u660E\u4E3Atype\uFF08\u7C7B\u578B\u522B\u540D\uFF09</span>
<span class="token keyword">const</span> <span class="token function-variable function">func1</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">str</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function-variable function">number</span> <span class="token operator">=</span> <span class="token parameter">str</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u76F4\u63A5\u5B9A\u4E49\u51FD\u6570\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7684\u7C7B\u578B</span>
<span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token parameter">\uFF1Anumber</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u901A\u5E38\u53EF\u4EE5\u901A\u8FC7\u7C7B\u578B\u63A8\u65AD\u8FD4\u56DE</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u65E0\u6CD5\u901A\u8FC7\u7C7B\u578B\u63A8\u65AD\u7684case</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> rawData <span class="token operator">=</span> <span class="token string">&#39;{&quot;name&quot;: &quot;dell&quot;}&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">newData</span><span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>rawData<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u8054\u5408\u7C7B\u578B\uFF1A\u591A\u79CD\u7C7B\u578B\u58F0\u660E ( | )</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">temp</span><span class="token operator">:</span> number <span class="token operator">|</span> string <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
temp <span class="token operator">=</span> <span class="token string">&#39;456&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6570\u7EC4\u548C\u5143\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u548C\u5143\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4\u548C\u5143\u7EC4</h2><h3 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h3><ul><li>\u57FA\u7840\u7684\u6570\u7EC4\u58F0\u660E</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">numberArr</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">undefinedArr</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u5305\u542B\u591A\u79CD\u7C7B\u578B\u503C\u7684\u6570\u7EC4\u58F0\u660E</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">(</span>number <span class="token operator">|</span> string<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u901A\u8FC7<strong>\u8303\u578B</strong>\u5B9A\u4E49\u5305\u542B\u591A\u79CD\u7C7B\u578B\u503C\u7684\u6570\u7EC4</li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> object<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;jkl&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u5BF9\u8C61\u6570\u7EC4</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5BF9\u8C61\u6570\u7EC4\u4E2D\u5FC5\u987B\u5305\u542B\u4E00\u4E2Astring\u7C7B\u578B\u7684name,\u53EA\u80FD\u6709\u4E00\u4E2Akey,\u5E76\u4E14\u662Fname</span>
<span class="token keyword">const</span> <span class="token literal-property property">objectArr</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;caffrey&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token comment">// \u591A\u4E2Akey\u7684\u5BF9\u8C61\u6570\u7EC4</span>
<span class="token keyword">const</span> <span class="token literal-property property">objectArr</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> string\uFF0Cage<span class="token operator">:</span> number<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;caffrey&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><ul><li>\u7C7B\u578B\u522B\u540D type alias</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>type User <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span>number<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">objectArr</span><span class="token operator">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;caffrey&#39;</span><span class="token punctuation">;</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment">// typescript\u8FD9\u79CD\u4E5F\u652F\u6301</span>
<span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">teacherArr</span><span class="token operator">:</span> Teacher<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;caffrey&#39;</span><span class="token punctuation">;</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="\u5143\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5143\u7EC4" aria-hidden="true">#</a> \u5143\u7EC4</h3><p>\u5143\u7EC4\u5728\u6570\u7EC4\u7684\u57FA\u7840\u4E0A\u8FD8\u5B9A\u4E49\u4E86\u6570\u7EC4\u6BCF\u4E00\u9879\u7684\u7C7B\u578B\u9650\u5236</p><ul><li>\u6570\u7EC4\u957F\u5EA6\u56FA\u5B9A</li><li>\u6570\u7EC4\u6BCF\u4E00\u9879\u7684\u7C7B\u578B\u56FA\u5B9A</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">teacherInfo</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">,</span> string<span class="token punctuation">,</span> number<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Dell&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// csv\u5E94\u7528</span>
<span class="token keyword">const</span> <span class="token literal-property property">teacherList</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">,</span> string<span class="token punctuation">,</span> number<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;dell&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;sun&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;female&#39;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;jeny&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;female&#39;</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h2><h3 id="\u901A\u7528\u6027\u7684\u7C7B\u578B\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u6027\u7684\u7C7B\u578B\u96C6\u5408" aria-hidden="true">#</a> \u901A\u7528\u6027\u7684\u7C7B\u578B\u96C6\u5408</h3><ul><li>interface \u63A5\u53E3</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getPersonName1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">person</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">setPersonName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">person</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    person<span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token comment">// interface Person\u5B9A\u4E49</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token keyword">const</span> getPersonName <span class="token operator">=</span> <span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> setPersonName <span class="token operator">=</span> <span class="token punctuation">(</span>person<span class="token operator">:</span>Person<span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    person<span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
</code></pre></div><h3 id="type-\u7C7B\u578B\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#type-\u7C7B\u578B\u522B\u540D" aria-hidden="true">#</a> type \u7C7B\u578B\u522B\u540D\uFF08=\uFF09</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>type Person <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token comment">// interface\u53EF\u4EE5\u4EE3\u8868\u51FD\u6570\u548C\u5BF9\u8C61</span>
<span class="token comment">// type\u8FD8\u53EF\u4EE5\u4EE3\u8868\u57FA\u7840\u7C7B\u578B</span>
type Person1 <span class="token operator">=</span> string<span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4E00\u822C\u7528interface\u4EE3\u8868\u7C7B\u578B\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u5426\u5219\u624D\u7528type</li></ul><h3 id="\u53EF\u9009\u62E9\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u62E9\u5C5E\u6027" aria-hidden="true">#</a> \u53EF\u9009\u62E9\u5C5E\u6027\uFF08?\uFF09</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u53EA\u8BFB\u5C5E\u6027readonly" tabindex="-1"><a class="header-anchor" href="#\u53EA\u8BFB\u5C5E\u6027readonly" aria-hidden="true">#</a> \u53EA\u8BFB\u5C5E\u6027readonly</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  readonly name<span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u62A5\u9519\uFF0Cread-only\u7684\u5C5E\u6027\u53EA\u8BFB\uFF0C\u4E0D\u80FD\u88AB\u8D4B\u503C</span>
<span class="token keyword">const</span> setPersonName <span class="token operator">=</span> <span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">)</span>\uFF1A<span class="token keyword">void</span> <span class="token punctuation">{</span>
    person<span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5B57\u9762\u91CF\u5F3A\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF\u5F3A\u6821\u9A8C" aria-hidden="true">#</a> \u5B57\u9762\u91CF\u5F3A\u6821\u9A8C</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// Person\u8981\u6C42\u4F20\u5165\u7684\u53C2\u6570\u5FC5\u987B\u6709name</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
	age<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> getPersonName <span class="token operator">=</span> <span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// success</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;caffrey&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span>
<span class="token function">getPersonName</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>

<span class="token comment">// error (Object literal may only specify known properties, and &#39;sex&#39; does not exist in type &#39;Person&#39;)</span>
<span class="token comment">// person\u5199\u6210\u5B57\u9762\u91CF\u5F62\u5F0F\u4F20\u9012\u7ED9\u51FD\u6570\u62A5\u9519</span>
<span class="token function">getPersonName</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;caffrey&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul><li><p>\u5F53\u4EE5\u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u5F62\u5F0F\u4F20\u9012\u65F6typescript\u4F1A\u53D8\u6210<strong>\u5F3A\u6821\u9A8C</strong></p></li><li><p>\u4EE5\u7F13\u5B58\u7684\u53D8\u91CF\u5F62\u5F0F\uFF0C\u53EA\u8981\u6EE1\u8DB3interface\u7684\u8981\u6C42\u5373\u53EF\uFF08name\uFF09</p></li></ul><h3 id="propname-string-any" tabindex="-1"><a class="header-anchor" href="#propname-string-any" aria-hidden="true">#</a> [propName: string]: any</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u200B \u5982\u679C\u8981\u8BA9\u5B57\u9762\u91CF\u5F62\u5F0F\u4E5F\u6EE1\u8DB3\u9700\u6C42</p><p>\u200B \u53EF\u4EE5\u7528\u5982\u4E0A\u5F62\u5F0F\u4EE3\u8868\uFF0C\u8FD8\u6709\u53EF\u80FD\u5B58\u5728string\u7C7B\u578B\u7684key\uFF0C\u4EFB\u4F55\u7C7B\u578B\u7684value\u7684\u5C5E\u6027</p><h3 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> getPersonName <span class="token operator">=</span> <span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dell&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;say hello&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">getPersonName</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u7C7B\u5E94\u7528\u63A5\u53E3-implements" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u5E94\u7528\u63A5\u53E3-implements" aria-hidden="true">#</a> \u7C7B\u5E94\u7528\u63A5\u53E3\uFF08implements\uFF09</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&#39;dell&#39;</span><span class="token punctuation">;</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// User\u7C7B\u5FC5\u987B\u8981\u6709name\u5C5E\u6027\u548Csay\u65B9\u6CD5</span>
</code></pre></div><h3 id="\u63A5\u53E3\u7684\u7EE7\u627F-extends" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u7684\u7EE7\u627F-extends" aria-hidden="true">#</a> \u63A5\u53E3\u7684\u7EE7\u627F\uFF08extends\uFF09</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Teacher</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token function">teach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>string
<span class="token punctuation">}</span>
<span class="token comment">// Tercher\u63A5\u53E3\u9664\u4E86\u8981\u6C42Person\u7684\u5C5E\u6027\u65B9\u6CD5\uFF0C\u8FD8\u9700\u8981\u6709\u4E00\u4E2Ateach\u65B9\u6CD5</span>
<span class="token keyword">const</span> person\uFF1ATeacher <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dell&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;say hello&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">teach</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;teach&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a> \u63A5\u53E3\u5B9A\u4E49\u51FD\u6570</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">SayHi</span> <span class="token punctuation">{</span>
	<span class="token punctuation">(</span>word<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token comment">// \u63A5\u53E3\u4F7F\u7528</span>
<span class="token keyword">const</span> <span class="token literal-property property">say</span><span class="token operator">:</span><span class="token function-variable function">SayHi</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">word</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> word
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u63A5\u53E3\u7F16\u8BD1\u6210javascript" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u7F16\u8BD1\u6210javascript" aria-hidden="true">#</a> \u63A5\u53E3\u7F16\u8BD1\u6210javascript</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>// \u521D\u59CB\u5316typescript\u5DE5\u7A0B<span class="token punctuation">(</span>\u914D\u7F6E\u6587\u4EF6<span class="token punctuation">)</span>
tsc --init
// \u7F16\u8BD1
tsc demo.ts
</code></pre></div><p>\u63A5\u53E3\u662F\u5728typescript\u5F00\u53D1\u65F6\u5B9A\u4E49\u7684\u4EE3\u7801\uFF0C\u5B8C\u6210\u7C7B\u578B\u68C0\u67E5\u7684\u529F\u80FD</p><p>\u7F16\u8BD1\u6210JavaScript\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u88AB<strong>\u5254\u9664</strong></p><h2 id="\u7C7B\u7684\u5B9A\u4E49\u4E0E\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u5B9A\u4E49\u4E0E\u7EE7\u627F" aria-hidden="true">#</a> \u7C7B\u7684\u5B9A\u4E49\u4E0E\u7EE7\u627F</h2><ul><li>\u5B9A\u4E49\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;caffrey&#39;</span><span class="token punctuation">;</span>
	<span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>\u7C7B\u7684\u7EE7\u627F(extends)</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token function">getTeacherName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&#39;teacher name&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> teacher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>\u7C7B\u7684\u91CD\u5199\uFF08\u5B50\u7C7B\u53EF\u4EE5\u91CD\u5199\u7236\u7C7B\uFF09</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">getTeacherName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&#39;teacher name&#39;</span>
	<span class="token punctuation">}</span>
	<span class="token function">getName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&#39;go&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> teacher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
teacher<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;go&#39;</span>
</code></pre></div><ul><li>super(\u4EE3\u8868\u7236\u7C7B)</li></ul><p>\u5F53\u7C7B\u65B9\u6CD5\u88AB\u91CD\u5199\uFF0C\u53EF\u4EE5\u4F7F\u7528super\u53BB\u8C03\u7528\u7236\u7C7B\u7684\u65B9\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token function">getName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39; go&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> teacher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
teacher<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;caffrey go&#39;</span>
</code></pre></div><h2 id="\u7C7B\u4E2D\u7684\u8BBF\u95EE\u7C7B\u578B\u548C\u6784\u9020\u5668" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u4E2D\u7684\u8BBF\u95EE\u7C7B\u578B\u548C\u6784\u9020\u5668" aria-hidden="true">#</a> \u7C7B\u4E2D\u7684\u8BBF\u95EE\u7C7B\u578B\u548C\u6784\u9020\u5668</h2><h3 id="\u8BBF\u95EE\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u7C7B\u578B" aria-hidden="true">#</a> \u8BBF\u95EE\u7C7B\u578B</h3><ul><li>public \u5141\u8BB8\u5728\u7C7B\u7684\u5185\u5916\u88AB\u8C03\u7528\uFF08\u9ED8\u8BA4\uFF09</li><li>protected \u5141\u8BB8\u5728\u7C7B\u5185\u53CA\u7EE7\u627F\u7684\u5B50\u7C7B\u4E2D\u4F7F\u7528</li><li>private \u5141\u8BB8\u5728\u7C7B\u5185\u88AB\u4F7F\u7528</li></ul><p><em>\u91CD\u5199\u7684\u65B9\u6CD5\u7684\u8BBF\u95EE\u7B49\u7EA7\u4E0D\u80FD\u53D8\u4E25\u683C\uFF0C\u4F8B\u5982\u7236\u7C7B\u662Fprotected\uFF0C\u5B50\u7C7B\u4E0D\u80FD\u662Fprivate</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token function">sayHi</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u7C7B\u5185\u8C03\u7528</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u7C7B\u5916</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;caffrey&#39;</span>
person<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>constructor\u4F1A\u5728\u7C7B\u5B9E\u4F8B\u5316\uFF08new Class\uFF09\u7684\u65F6\u5019\u88AB\u6267\u884C</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4F20\u7EDF\u5199\u6CD5</span>
  <span class="token comment">// public name: string;</span>
  <span class="token comment">// constructor(name: string) {</span>
  <span class="token comment">//   this.name = name;</span>
  <span class="token comment">// }</span>
  <span class="token comment">// \u5E26\u8BBF\u95EE\u7C7B\u578B\u7684\u7B80\u5316\u5199\u6CD5</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">public</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;dell&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><ul><li>\u7236\u7C7B\u548C\u5B50\u7C7B<strong>\u90FD\u6709</strong>\u6784\u9020\u5668</li></ul><p><strong>\u5B50\u7C7B\u6784\u9020\u5668</strong>\u9700\u8981\u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5426\u5219\u4F1A\u62A5\u9519super(...)</p><p>\u5373\u4F7F\u7236\u7C7B\u6CA1\u6709\u53C2\u6570\uFF0C\u4E5F\u8981\u8C03\u7528super()</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">public</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">public</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&#39;caffrey&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> teacher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token number">28</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>teacher<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 28</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>teacher<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// caffrey</span>
</code></pre></div><h2 id="\u9759\u6001\u5C5E\u6027-getter\u548Csetter" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5C5E\u6027-getter\u548Csetter" aria-hidden="true">#</a> \u9759\u6001\u5C5E\u6027\uFF0Cgetter\u548Csetter</h2><h3 id="\u7C7B\u91CC\u9762\u7684getter\u548Csetter" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u91CC\u9762\u7684getter\u548Csetter" aria-hidden="true">#</a> \u7C7B\u91CC\u9762\u7684getter\u548Csetter</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">getName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39; go&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;caffrey&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// get\u76F4\u63A5getName\u8C03\u7528\uFF0C\u4E0D\u9700\u8981person.getName()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>getName<span class="token punctuation">)</span>
<span class="token comment">// &#39;caffrey go&#39;</span>
</code></pre></div><p>private\u7684\u5C5E\u6027(\u79C1\u6709\u5C5E\u6027)\u4E00\u822C\u4F7F\u7528_name\u547D\u540D</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">_name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">+</span> <span class="token string">&#39; go&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> realName <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> realName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;caffrey&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// get</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// set</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;caffrey go&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u8BBE\u8BA1\u6A21\u5F0F-\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u6A21\u5F0F-\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> \u8BBE\u8BA1\u6A21\u5F0F\uFF1A\u5355\u4F8B\u6A21\u5F0F</h3><p>\u53EA\u80FD\u751F\u6210\u4E00\u4E2A\u7C7B\u7684\u5B9E\u4F8B\uFF08\u4E0D\u5141\u8BB8\u5916\u90E8\u4EE5new Demo()\u7684\u65B9\u5F0F\u521B\u5EFA\u5B9E\u4F8B\uFF09</p><p><strong>private</strong>\u79C1\u6709\u9650\u5236\u7B26,\u53EA\u5141\u8BB8\u5185\u90E8\u8C03\u7528\uFF0C\u9ED8\u8BA4<strong>public</strong></p><p><strong>static</strong>\u9759\u6001\u5C5E\u6027\uFF0C\u5C06\u65B9\u6CD5\u76F4\u63A5\u6302\u8F7D\u5728\u7C7B\u4E0A\u9762\uFF0C\u800C\u4E0D\u662F\u7C7B\u7684\u5B9E\u4F8B\u4E0A\u9762</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token literal-property property">instance</span><span class="token operator">:</span> Demo<span class="token punctuation">;</span>
    <span class="token comment">// \u4E0D\u5141\u8BB8\u5916\u90E8\u4EE5new Demo()\u7684\u65B9\u5F0F\u521B\u5EFA\u5B9E\u4F8B</span>
    <span class="token keyword">private</span> <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">public</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
   	<span class="token comment">// static\u5C06\u65B9\u6CD5\u76F4\u63A5\u6302\u8F7D\u5728\u7C7B\u4E0A\u9762\uFF0C\u800C\u4E0D\u662F\u7C7B\u7684\u5B9E\u4F8B\u4E0A\u9762</span>
    <span class="token comment">// new Demo\u53EF\u4EE5\u5728\u7C7B\u5185\u8C03\u7528</span>
	<span class="token comment">// static getInstance == public static getInstance</span>
    <span class="token keyword">static</span> <span class="token function">getInstance</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token string">&#39;caffrey go&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// demo1 demo2\u5B8C\u5168\u76F8\u540C\uFF0C\u800C\u4E0D\u662F\u4E24\u4E2A\u4E0D\u540C\u5B9E\u4F8B</span>
<span class="token keyword">const</span> demo1 <span class="token operator">=</span> Demo<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> demo2 <span class="token operator">=</span> Demo<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// demo1.name === demo2.name === &#39;caffrey go&#39;</span>
</code></pre></div><hr><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Axios</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> instance<span class="token operator">:</span> Axios <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// private\u6784\u9020\u51FD\u6570\uFF0C\u7981\u6B62\u5916\u90E8\u8C03\u7528\u521B\u5EFA\u65B0\u5BF9\u8C61</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Axios<span class="token punctuation">.</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u521B\u5EFAAxios\u5B9E\u4F8B&#39;</span><span class="token punctuation">)</span>
      Axios<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Axios</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> Axios<span class="token punctuation">.</span>instance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> axios <span class="token operator">=</span> Axios<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// \u521B\u5EFAAxios\u5B9E\u4F8B</span>
<span class="token keyword">const</span> axios1 <span class="token operator">=</span> Axios<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>axios <span class="token operator">===</span> axios1<span class="token punctuation">)</span>  <span class="token comment">// true</span>
</code></pre></div><h2 id="readonly\u53EA\u8BFB" tabindex="-1"><a class="header-anchor" href="#readonly\u53EA\u8BFB" aria-hidden="true">#</a> readonly\u53EA\u8BFB</h2><ul><li>\u901A\u8FC7getter\u548Csetter\u5B9E\u73B0</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token literal-property property">_name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
	<span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">get</span> <span class="token function">name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u62A5\u9519\uFF0C\u6CA1\u6709\u8BBE\u7F6Egetter\u7684\u79C1\u6709\u5C5E\u6027\u65E0\u6CD5\u8BFB\u53D6</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>readonly</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> readonly name<span class="token operator">:</span> string<span class="token punctuation">;</span>
	<span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u62A5\u9519\uFF0Creadonly\u8FD9\u6837\u7684public\u5C5E\u6027\u53EA\u80FD\u8BFB\u4E0D\u80FD\u6539</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u62BD\u8C61\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B</h2><h3 id="\u62BD\u8C61\u7C7B-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B-\u65B9\u6CD5" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B/\u65B9\u6CD5</h3><ul><li>\u7C7B\u7684\u901A\u6027 =&gt; \u62BD\u8C61\u7C7B</li><li>abstract\u65B9\u6CD5\uFF0C\u5177\u4F53\u5B9E\u73B0\u4E0D\u786E\u5B9A\uFF08\u53EA\u80FD\u5B9A\u4E49\uFF0C\u4E0D\u80FD\u5B9E\u73B0\uFF09,\u7EE7\u627F\u7684\u62BD\u8C61\u65B9\u6CD5\u5FC5\u987B\u5B9E\u73B0</li><li>\u62BD\u8C61\u7C7B\u53EA\u80FD\u88AB<strong>\u7EE7\u627F</strong>\uFF0C\u4E0D\u80FD\u88AB\u5B9E\u4F8B\u5316</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// abstract\u7C7B\uFF0C\u901A\u7528\u7684\u7C7B</span>
abstract <span class="token keyword">class</span> <span class="token class-name">Geom</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token function">getType</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Geom&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// abstract\u65B9\u6CD5\uFF0C\u5177\u4F53\u5B9E\u73B0\u4E0D\u786E\u5B9A\uFF08\u53EA\u80FD\u5B9A\u4E49\uFF0C\u4E0D\u80FD\u5B9E\u73B0\uFF09</span>
	abstract <span class="token function">getArea</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>\uFF1A number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Geom</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7EE7\u627F\u7684\u62BD\u8C61\u65B9\u6CD5\u5FC5\u987B\u5B9E\u73B0</span>
    <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">123</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span>  <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Triangle</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="\u62BD\u8C61\u7C7B\u548C\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B\u548C\u63A5\u53E3" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B\u548C\u63A5\u53E3</h3><ul><li>\u62BD\u8C61\u7C7B\u662F\u628A\u7C7B\u91CC\u9762\u76F8\u5173\u7684\u901A\u7528\u7684\u4E1C\u897F\u62BD\u8C61\u51FA\u6765</li><li>\u63A5\u53E3\u662F\u628A\u5404\u79CD\u5BF9\u8C61\u7B49\u7684\u901A\u7528\u6027\u4E1C\u897F\u7684\u63D0\u70BC</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Teacher</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">teachingAge</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token keyword">const</span> teacher <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;caffrey&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">teachingAge</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;go&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">getUserInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">user</span><span class="token operator">:</span> Person</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">getUserInfo</span><span class="token punctuation">(</span>teacher<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getUserInfo</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,127),o=[e];function c(l,r){return s(),a("div",null,o)}var k=n(t,[["render",c],["__file","basic.html.vue"]]);export{k as default};
