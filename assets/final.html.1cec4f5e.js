import{_ as n,o as s,c as a,a as t}from"./app.4bbb0959.js";const p={},o=t(`<h1 id="express\u9879\u76EE\u6539\u826F" tabindex="-1"><a class="header-anchor" href="#express\u9879\u76EE\u6539\u826F" aria-hidden="true">#</a> Express\u9879\u76EE\u6539\u826F</h1><h2 id="\u521B\u5EFA\u63A7\u5236\u5668\u548C\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u63A7\u5236\u5668\u548C\u88C5\u9970\u5668" aria-hidden="true">#</a> \u521B\u5EFA\u63A7\u5236\u5668\u548C\u88C5\u9970\u5668</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> reflect-metadata --save
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">|</span>-- src
<span class="token operator">|</span>   <span class="token operator">|</span>-- controller
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- decorators.ts
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- LoginController.ts
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// LoginController.ts</span>
<span class="token keyword">import</span> <span class="token string">&#39;reflect-metadata&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response<span class="token punctuation">,</span> response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> controller<span class="token punctuation">,</span> get <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./decorators&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getResponseData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../utils/util&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">BodyRequest</span> <span class="token keyword">extends</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">controller</span></span>
<span class="token keyword">class</span> <span class="token class-name">LoginController</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">&#39;/logout&#39;</span><span class="token punctuation">)</span>
  <span class="token function">loginout</span><span class="token punctuation">(</span>req<span class="token operator">:</span> BodyRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token function">getResponseData</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
  <span class="token function">home</span><span class="token punctuation">(</span>req<span class="token operator">:</span> BodyRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
      &lt;html&gt;
        &lt;body&gt;
          &lt;a href=&#39;/getData&#39;&gt;\u722C\u53D6\u5185\u5BB9&lt;/a&gt;
          &lt;a href=&#39;/showData&#39;&gt;\u5C55\u793A\u5185\u5BB9&lt;/a&gt;
          &lt;a href=&#39;/logout&#39;&gt;\u9000\u51FA&lt;/a&gt;
        &lt;/body&gt;
      &lt;/html&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
      &lt;html&gt;
        &lt;body&gt;
          &lt;form method=&quot;post&quot; action=&quot;/login&quot;&gt;
            &lt;input type=&quot;password&quot; name=&quot;password&quot; /&gt;
            &lt;button&gt;\u767B\u9646&lt;/button&gt;
          &lt;/form&gt;
        &lt;/body&gt;
      &lt;/html&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">controller</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6&#39;path&#39;,\u4ECEtarget.prototype\u4E2D\u7684key\u4E0A\u83B7\u53D6</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">,</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B58\u7684key\u662F&#39;path&#39;,\u503C\u662F\u4F20\u5165\u7684path,\u5B58\u5230target\u7684key\u4E0A</span>
    Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-json ext-json"><pre class="language-json"><code>  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc &amp;&amp; node ./build/controller/LoginController.js&quot;</span>
  <span class="token punctuation">}</span>
</code></pre></div><ul><li>\u5C06\u65B9\u6CD5\u6240\u5BF9\u5E94\u7684\u8DEF\u5F84\uFF0C\u4F7F\u7528get\u8FD9\u4E2A\u65B9\u6CD5\u88C5\u9970\u5668\uFF0C\u901A\u8FC7<strong>reflect-metadata</strong>\u7ED1\u5B9A\u5230\u65B9\u6CD5\u4E0A\uFF1B</li><li>\u5728<strong>LoginController</strong>\u8FD9\u4E2A\u7C7B\u4E0A\u6DFB\u52A0<strong>controller</strong>\u7C7B\u88C5\u9970\u5668\uFF0C\u83B7\u53D6\u5230\u5BF9\u5E94\u65B9\u6CD5\u7684<strong>path</strong>\u5143\u6570\u636E\u503C\uFF1B</li></ul><h2 id="\u88C5\u9970\u5668\u5B9E\u73B0\u9879\u76EE\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u5668\u5B9E\u73B0\u9879\u76EE\u8DEF\u7531" aria-hidden="true">#</a> \u88C5\u9970\u5668\u5B9E\u73B0\u9879\u76EE\u8DEF\u7531</h2><ol><li><p>\u5728\u88C5\u9970\u5668\u5185\u6DFB\u52A0\u751F\u6210\u8DEF\u7531\u7684\u903B\u8F91</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5BFC\u51FA\u8DEF\u7531</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">controller</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> path <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">,</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u62FF\u5230\u5BF9\u5E94\u7684\u65B9\u6CD5</span>
    <span class="token keyword">const</span> handler <span class="token operator">=</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u751F\u6210\u8DEF\u7531\uFF0C\u653E\u5230\u4E86router\u4E0B\u9762</span>
      router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5F15\u5165LoginController\u7C7B\u751F\u6210\u8DEF\u7531</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// index.ts</span>
<span class="token keyword">import</span> <span class="token string">&#39;./controller/LoginController&#39;</span><span class="token punctuation">;</span>          <span class="token comment">// \u751F\u6210\u8DEF\u7531</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./controller/decorators&#39;</span><span class="token punctuation">;</span>       <span class="token comment">// \u5BFC\u51FA\u8DEF\u7531</span>
</code></pre></div><p>\u5728index.ts\u4E2D\u5F15\u5165LoginController\u7C7B\uFF0C\u88C5\u9970\u5668\u5728\u7C7B\u58F0\u660E\u65F6\u6267\u884C\uFF0C\u76F8\u5F53\u4E8E\u6267\u884C\u4E86\u8FD9\u4E2A\u88C5\u9970\u5668\uFF0C\u5F97\u5230\u4E86router</p></li><li><p>\u8FD0\u884C</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre></div><p>\u8BBF\u95EE\u6839\u8DEF\u5F84\uFF08\u2019/\u2018\uFF09\u548C\uFF08\u2019login\u2018\uFF09\u6B63\u5E38\u8FD4\u56DE</p></li></ol><h2 id="\u591A\u79CD\u8BF7\u6C42\u65B9\u6CD5\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u591A\u79CD\u8BF7\u6C42\u65B9\u6CD5\u88C5\u9970\u5668" aria-hidden="true">#</a> \u591A\u79CD\u8BF7\u6C42\u65B9\u6CD5\u88C5\u9970\u5668</h2><ul><li>\u589E\u52A0method\u5143\u6570\u636E\u533A\u5206\u5404\u7C7B\u8BF7\u6C42\u65B9\u6CD5</li><li>Method\u679A\u4E3E\u7C7B\u578B\u89E3\u51B3method\u7684any\u62A5\u9519</li><li>getRequestDecorator\u5DE5\u5382\u51FD\u6570\u751F\u6210\u5404\u79CD\u65B9\u6CD5\u88C5\u9970\u5668</li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// decorators.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">enum</span> Method <span class="token punctuation">{</span>
  get <span class="token operator">=</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  post <span class="token operator">=</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  put <span class="token operator">=</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">delete</span> <span class="token operator">=</span> <span class="token string">&#39;delete&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">controller</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> path <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">,</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> method<span class="token operator">:</span> Method <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;method&#39;</span><span class="token punctuation">,</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> handler <span class="token operator">=</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path <span class="token operator">&amp;&amp;</span> method <span class="token operator">&amp;&amp;</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      router<span class="token punctuation">[</span>method<span class="token punctuation">]</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getRequestDecorator</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token string">&#39;method&#39;</span><span class="token punctuation">,</span> type<span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> get <span class="token operator">=</span> <span class="token function">getRequestDecorator</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token function">getRequestDecorator</span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> put <span class="token operator">=</span> <span class="token function">getRequestDecorator</span><span class="token punctuation">(</span><span class="token string">&#39;put&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> del <span class="token operator">=</span> <span class="token function">getRequestDecorator</span><span class="token punctuation">(</span><span class="token string">&#39;delete&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// delete\u662F\u5173\u952E\u5B57\u7528del</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// LoginController.ts</span>
<span class="token keyword">import</span> <span class="token string">&#39;reflect-metadata&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> controller<span class="token punctuation">,</span> get<span class="token punctuation">,</span> post <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./decorators&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getResponseData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../utils/util&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">BodyRequest</span> <span class="token keyword">extends</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">controller</span></span>
<span class="token keyword">class</span> <span class="token class-name">LoginController</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">post</span></span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>
  <span class="token function">login</span><span class="token punctuation">(</span>req<span class="token operator">:</span> BodyRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
    <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token function">getResponseData</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5DF2\u7ECF\u767B\u9646\u8FC7&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>password <span class="token operator">===</span> <span class="token string">&#39;123&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token function">getResponseData</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token function">getResponseData</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;\u767B\u9646\u5931\u8D25&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">&#39;/logout&#39;</span><span class="token punctuation">)</span>
  <span class="token function">logout</span><span class="token punctuation">(</span>req<span class="token operator">:</span> BodyRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
  <span class="token function">home</span><span class="token punctuation">(</span>req<span class="token operator">:</span> BodyRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,14),e=[o];function c(l,u){return s(),a("div",null,e)}var i=n(p,[["render",c],["__file","final.html.vue"]]);export{i as default};