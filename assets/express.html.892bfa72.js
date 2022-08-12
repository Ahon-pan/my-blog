import{_ as n,o as s,c as a,a as t}from"./app.4bbb0959.js";const p={},o=t(`<h1 id="express-\u722C\u866B" tabindex="-1"><a class="header-anchor" href="#express-\u722C\u866B" aria-hidden="true">#</a> Express &amp;&amp; \u722C\u866B</h1><h2 id="express\u57FA\u7840\u9879\u76EE\u7ED3\u6784\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#express\u57FA\u7840\u9879\u76EE\u7ED3\u6784\u642D\u5EFA" aria-hidden="true">#</a> Express\u57FA\u7840\u9879\u76EE\u7ED3\u6784\u642D\u5EFA</h2><h3 id="\u6539\u826F" tabindex="-1"><a class="header-anchor" href="#\u6539\u826F" aria-hidden="true">#</a> \u6539\u826F</h3><p>\u4F7F\u7528Express\u5F00\u542F\u4E00\u4E2A\u670D\u52A1\u5668\uFF0C\u8BA9\u6D4F\u89C8\u5668\u80FD\u591F\u8BBF\u95EE\u670D\u52A1\u5668\u4E0A\u7684\u63A5\u53E3</p><div class="language-json ext-json"><pre class="language-json"><code>  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc -w&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev:start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon node ./build/index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;concurrently npm:dev:*&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u7B2C\u4E00\u6B21\u8FD0\u884C<code>npm run dev</code>\u65F6\uFF0C\u7531\u4E8Ebuild\u548Cstart\u662F\u5E76\u884C\u8FD0\u884C\u7684\uFF0C\u5F53index.js\u8FD8\u672A\u751F\u6210\uFF0C\u4F1A\u62A5\u9519\u627E\u4E0D\u5230index.js</p><p>\u89E3\u51B3\uFF1A</p><div class="language-json ext-json"><pre class="language-json"><code>  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc -w&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev:start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon node ./build/index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc &amp;&amp; concurrently npm:dev:*&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u5728node\u6267\u884Cjs\u7684\u65F6\u5019\u5148tsc\u7F16\u8BD1\u4E00\u6B21TS\u4EE3\u7801</p><h3 id="express\u642D\u5EFA\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#express\u642D\u5EFA\u670D\u52A1\u5668" aria-hidden="true">#</a> Express\u642D\u5EFA\u670D\u52A1\u5668</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> express --save
<span class="token function">npm</span> <span class="token function">install</span> @types/express --D
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">|</span>-- build
<span class="token operator">|</span>-- data
<span class="token operator">|</span>-- node_modules
<span class="token operator">|</span>-- src
<span class="token operator">|</span>   <span class="token operator">|</span>-- crowller.ts
<span class="token operator">|</span>   <span class="token operator">|</span>-- dellAnalyzer.ts
<span class="token operator">|</span>   <span class="token operator">|</span>-- index.ts
<span class="token operator">|</span>   <span class="token operator">|</span>-- router.ts
<span class="token operator">|</span>-- package-lock.json
<span class="token operator">|</span>-- package.json
<span class="token operator">|</span>-- tsconfig.json
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> express<span class="token punctuation">,</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">7001</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server is running&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// router.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Router<span class="token punctuation">,</span> Request<span class="token punctuation">,</span> Response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Crowller <span class="token keyword">from</span> <span class="token string">&#39;./crowller&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DellAnalyzer <span class="token keyword">from</span> <span class="token string">&#39;./dellAnalyzer&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;hello world !&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/getData&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> secret <span class="token operator">=</span> <span class="token string">&#39;secretKey&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://www.dell-lee.com/typescript/demo.html?secret=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> analyzer <span class="token operator">=</span> DellAnalyzer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">new</span> <span class="token class-name">Crowller</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> analyzer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;getData Success!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre></div><h3 id="ts\u7F16\u5199express\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#ts\u7F16\u5199express\u4EE3\u7801" aria-hidden="true">#</a> TS\u7F16\u5199express\u4EE3\u7801</h3><p>\u73B0\u5728\u6BCF\u6B21\u8BBF\u95EEgetData\u63A5\u53E3\uFF0C\u5C31\u4F1A\u751F\u6210\u65B0\u6570\u636E\uFF0C\u4E3A\u4E86\u9632\u6B62\u8FC7\u591A\u7684\u8BBF\u95EE\u5237\u65B0\uFF0C\u589E\u52A0\u6743\u9650</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/getData&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>password <span class="token operator">===</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> secret <span class="token operator">=</span> <span class="token string">&#39;secretKey&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://www.dell-lee.com/typescript/demo.html?secret=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> analyzer <span class="token operator">=</span> DellAnalyzer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Crowller</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> analyzer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;getData Success!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;password Error!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>req.body\u8FD4\u56DE\u503C\u662Fundefined,\u7136\u800C\u7F16\u8F91\u5668\u4E2D\u867D\u7136\u5F15\u5165\u4E86.d.ts\u6587\u4EF6\uFF0C\u5374\u6CA1\u6709\u62A5\u9519\u3002\u9700\u8981\u6709body-parse\u8FD9\u4E2Aexpress\u4E2D\u95F4\u4EF6<code>npm install body-parse --save</code>\uFF0C\u4E2D\u95F4\u4EF6\u4F7F\u7528app.use(),\u5FC5\u987B\u5728app.use(router\u4E4B\u524D)</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// index.ts</span>
<span class="token keyword">import</span> express<span class="token punctuation">,</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> bodyParse <span class="token keyword">from</span> <span class="token string">&#39;body-parser&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParse<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> extended<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">7001</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server is running&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>express\u5E93\u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6 .d.ts \u6587\u4EF6\u63CF\u8FF0\u4E0D\u51C6\u786E\uFF08\u8001\u6846\u67B6\uFF09</li><li>\u5F53\u4F7F\u7528\u4E2D\u95F4\u4EF6\u7684\u65F6\u5019\uFF0C\u5BF9req res\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u5B9E\u9645\u4E0A\u7C7B\u578B\u5E76\u4E0D\u80FD\u6539\u53D8\uFF08\u4F8B\u5982\u5F53\u5BF9req\u589E\u52A0\u4E86\u65B0\u5C5E\u6027\uFF0C\u4F46\u662F\u4F7F\u7528\u7684\u65F6\u5019\u7C7B\u578B\u6CA1\u6709\u66F4\u65B0\uFF0C\u4F1A\u62A5\u9519\uFF09</li></ul><h3 id="express\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#express\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6" aria-hidden="true">#</a> Express\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6</h3><ul><li>.d.ts \u6587\u4EF6\u7C7B\u578B\u5B9A\u4E49\u4E0D\u51C6\u786E</li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body           <span class="token comment">// const password: any</span>

<span class="token comment">// \u4FEE\u6539\u5BF9\u5E94.d.ts</span>
ReqBody <span class="token operator">=</span> <span class="token punctuation">{</span> password<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span>        <span class="token comment">// \u968F\u7740node module\u7684\u91CD\u65B0\u5B89\u88C5\u5C31\u5931\u6548\u4E86</span>
</code></pre></div><p>\u89E3\u51B3\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RequestWithBody</span> <span class="token keyword">extends</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
  	<span class="token comment">// password: string | undefined;</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u4E2D\u95F4\u4EF6\u5BF9req res\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u4F46\u662F\u7C7B\u578B\u4E0D\u80FD\u4FEE\u6539\uFF08\u7C7B\u578B\u878D\u5408\uFF09</li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// index.ts</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> extended<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunction<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  req<span class="token punctuation">.</span>teacherName <span class="token operator">=</span> <span class="token string">&#39;dell&#39;</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// custom.d.ts</span>
<span class="token keyword">declare</span> <span class="token keyword">namespace</span> Express <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
    teacherName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    
<span class="token comment">// touter.ts \u7F16\u8F91\u5668\u63D0\u9192</span>
res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>teacherName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u767B\u5F55\u529F\u80FD\u7684\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u529F\u80FD\u7684\u5F00\u53D1" aria-hidden="true">#</a> \u767B\u5F55\u529F\u80FD\u7684\u5F00\u53D1</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> cookie-session --save
<span class="token function">npm</span> <span class="token function">install</span> @types/cookie-session -D
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// router.ts   \u7528\u6237\u8FDB\u884C\u767B\u5F55\u5E76\u4E14 \u722C\u53D6/\u5C55\u793A \u6570\u636E</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Router<span class="token punctuation">,</span> Request<span class="token punctuation">,</span> Response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Crowller <span class="token keyword">from</span> <span class="token string">&#39;./crowller&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DellAnalyzer <span class="token keyword">from</span> <span class="token string">&#39;./dellAnalyzer&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> json <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;body-parser&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">RequestWithBody</span> <span class="token keyword">extends</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;html&gt;
      &lt;body&gt;
        &lt;a href=&quot;/getData&quot;&gt;\u722C\u53D6\u5185\u5BB9&lt;/a&gt;
        &lt;a href=&quot;/showData&quot;&gt;\u5C55\u793A\u5185\u5BB9&lt;/a&gt;
        &lt;a href=&quot;/logout&quot;&gt;\u9000\u51FA&lt;/a&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;html&gt;
      &lt;body&gt;
        &lt;form method=&quot;post&quot; action=&quot;/login&quot;&gt;
          &lt;input type=&quot;password&quot; name=&quot;password&quot; /&gt;
          &lt;button&gt;\u767B\u5F55&lt;/button&gt;
        &lt;/form&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> RequestWithBody<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
  <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;\u5DF2\u7ECF\u767B\u5F55\u8FC7&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>password <span class="token operator">===</span> <span class="token string">&#39;123&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;\u767B\u5F55\u6210\u529F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;\u767B\u5F55\u5931\u8D25&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/logout&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> RequestWithBody<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/getData&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> RequestWithBody<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> secret <span class="token operator">=</span> <span class="token string">&#39;secretKey&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://www.dell-lee.com/typescript/demo.html?secret=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> analyzer <span class="token operator">=</span> DellAnalyzer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Crowller</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> analyzer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;getData Success!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u767B\u5F55\u540E\u722C\u53D6\u5185\u5BB9&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/showData&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> RequestWithBody<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> position <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../data/course.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C1A\u672A\u722C\u53D6\u5230\u5185\u5BB9&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u767B\u5F55\u540E\u67E5\u770B\u5185\u5BB9&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// index.ts</span>
<span class="token keyword">import</span> express<span class="token punctuation">,</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response<span class="token punctuation">,</span> NextFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> bodyParser <span class="token keyword">from</span> <span class="token string">&#39;body-parser&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> cookieSession <span class="token keyword">from</span> <span class="token string">&#39;cookie-session&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u95EE\u98981: express \u5E93\u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6 .d.ts \u6587\u4EF6\u7C7B\u578B\u63CF\u8FF0\u4E0D\u51C6\u786E</span>
<span class="token comment">// \u95EE\u98982: \u5F53\u6211\u4F7F\u7528\u4E2D\u95F4\u4EF6\u7684\u65F6\u5019\uFF0C\u5BF9 req \u6216\u8005 res \u505A\u4E86\u4FEE\u6539\u4E4B\u540E\u5462\uFF0C\u5B9E\u9645\u4E0A\u7C7B\u578B\u5E76\u4E0D\u80FD\u6539\u53D8\u3002</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> extended<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">cookieSession</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;session&#39;</span><span class="token punctuation">,</span>
    keys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;caffrey go&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    maxAge<span class="token operator">:</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token comment">// 24 hours</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">7001</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server is running&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><h3 id="\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a> \u4F18\u5316</h3></li></ul><p>\u7F16\u5199\u548C\u4F7F\u7528\u81EA\u5DF1\u7684\u4E1A\u52A1\u4E2D\u95F4\u4EF6</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// router.ts</span>
<span class="token keyword">const</span> <span class="token function-variable function">checkLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunction<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u5148\u767B\u5F55&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//  router.get(&#39;/getData&#39;, checkLogin, (req: BodyRequest, res: Response) =&gt; {...}</span>
</code></pre></div><p>\u63A5\u53E3\u7EDF\u4E00</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// util.ts</span>
<span class="token keyword">interface</span> <span class="token class-name">Result</span> <span class="token punctuation">{</span>
  success<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  errMsg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getResponseData <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> errMsg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Result <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>errMsg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      success<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      errMsg<span class="token punctuation">,</span>
      data
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    success<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// res.json(getResponseData(false, &#39;\u6570\u636E\u4E0D\u5B58\u5728&#39;));</span>
<span class="token comment">// res.json(getResponseData(true));</span>
<span class="token comment">// res.json(getResponseData(JSON.parse(result)));</span>
</code></pre></div>`,36),e=[o];function c(u,l){return s(),a("div",null,e)}var i=n(p,[["render",c],["__file","express.html.vue"]]);export{i as default};