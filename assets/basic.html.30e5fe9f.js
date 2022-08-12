import{_ as n,o as s,c as a,a as t}from"./app.4bbb0959.js";const p={},o=t(`<h1 id="typescript-\u7F16\u5199\u722C\u866B\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#typescript-\u7F16\u5199\u722C\u866B\u5DE5\u5177" aria-hidden="true">#</a> TypeScript \u7F16\u5199\u722C\u866B\u5DE5\u5177</h1><h2 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>// \u751F\u6210package.json
<span class="token function">npm</span> init -y
// tsconfig.json
tsc --init
// \u5378\u8F7D\u5168\u5C40ts-node
<span class="token function">npm</span> uninstall ts-node -g
// \u5B89\u88C5ts-node typescript\u5728dev\u73AF\u5883
<span class="token function">npm</span> <span class="token function">install</span> -D ts-node
<span class="token function">npm</span> <span class="token function">install</span> typescript -D
</code></pre></div><ul><li>\u65B0\u5EFA src \u4E0B\u7684 crawler.ts</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u66F4\u6539 package.json \u4E2D\u7684\u6267\u884C\u8BED\u53E5</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ts-node ./src/crawler.ts&quot;</span>
  <span class="token punctuation">}</span>
</code></pre></div><ul><li>\u6D4B\u8BD5</li></ul><div class="language-powershell ext-powershell"><pre class="language-powershell"><code><span class="token function">PS</span> E:\\typescript\\crawler&gt; npm run dev

&gt; crawler@1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0 dev E:\\typescript\\crawler
&gt; ts-node <span class="token punctuation">.</span><span class="token operator">/</span>src/crawler<span class="token punctuation">.</span>ts

hello world
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Crawler</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> secret <span class="token operator">=</span> <span class="token string">&#39;secretKey&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    http://www.dell-lee.com/typescript/demo.html?secret?=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;constructor&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// secret\u662F\u7C7B\u91CC\u9762\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u9700\u8981\u901A\u8FC7this\u83B7\u53D6</span>
<span class="token keyword">const</span> crawler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Crawler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="superagent" tabindex="-1"><a class="header-anchor" href="#superagent" aria-hidden="true">#</a> SuperAgent</h2><p>superagent \u53EF\u4EE5\u83B7\u53D6\u5230\u8FDC\u7A0B\u7F51\u5740\u4E0A\u7684 html</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> superagent --save
</code></pre></div><ul><li>--save\uFF1Adependencies \u751F\u4EA7\u73AF\u5883\u7528\u5230\u7684\u6A21\u5757</li><li>--\u2013save-dev\uFF1A devDependencies \u5F00\u53D1\u73AF\u5883\u6A21\u5757\uFF08-D\uFF09</li></ul><h3 id="\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6-types" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6-types" aria-hidden="true">#</a> \u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6@types</h3><p>TypeScript \u5F15\u7528 JavaScript \u4F1A\u62A5\u9519\uFF0C\u4E14\u65E0\u6CD5\u63D0\u4F9B\u53EA\u80FD\u63D0\u9192</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> Superagent <span class="token keyword">from</span> <span class="token string">&#39;superagent&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u9700\u8981\u63D0\u4F9B <strong>.d.ts</strong> \u7684\u7FFB\u8BD1\u6587\u4EF6,\u5C06 <strong>js</strong> \u6587\u4EF6\u91CC\u9762\u7684\u7C7B\u578B\u6587\u4EF6\u8FDB\u884C\u8865\u5168</p><p><strong>ts =&gt; .d.ts \u7FFB\u8BD1\u6587\u4EF6 @types/ =&gt; js</strong></p><div class="language-powershell ext-powershell"><pre class="language-powershell"><code>\u65E0\u6CD5\u627E\u5230\u6A21\u5757\u201Csuperagent\u201D\u7684\u58F0\u660E\u6587\u4EF6\u3002\u201Ce:<span class="token operator">/</span>typescript/crawler/node_modules/superagent/lib/node/index<span class="token punctuation">.</span>js\u201D\u9690\u5F0F\u62E5\u6709 <span class="token string">&quot;any&quot;</span> \u7C7B\u578B\u3002
  <span class="token keyword">Try</span> \`npm install @types/superagent\` <span class="token keyword">if</span> it exists or add a new declaration <span class="token punctuation">(</span><span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts<span class="token punctuation">)</span> file containing \`declare module <span class="token string">&#39;superagent&#39;</span><span class="token punctuation">;</span>\`ts<span class="token punctuation">(</span>7016<span class="token punctuation">)</span>
</code></pre></div><p>\u89E3\u51B3\uFF1A\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u5F15\u5165\u7FFB\u8BD1\u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @types/superagent -D
</code></pre></div><h3 id="htmt-\u83B7\u53D6\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#htmt-\u83B7\u53D6\u7684\u5B9E\u73B0" aria-hidden="true">#</a> Htmt \u83B7\u53D6\u7684\u5B9E\u73B0</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> Superagent <span class="token keyword">from</span> <span class="token string">&#39;superagent&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Crawler</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> secret <span class="token operator">=</span> <span class="token string">&#39;secretKey&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://www.dell-lee.com/typescript/demo.html?secret?=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> rawHtml <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">async</span> <span class="token function">getRawHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Superagent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rawHtml <span class="token operator">=</span> result<span class="token punctuation">.</span>text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRawHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> crawler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Crawler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="cheerio-\u6570\u636E\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#cheerio-\u6570\u636E\u83B7\u53D6" aria-hidden="true">#</a> cheerio \u6570\u636E\u83B7\u53D6</h2><h3 id="cheerio-\u5E93\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#cheerio-\u5E93\u5F15\u5165" aria-hidden="true">#</a> cheerio \u5E93\u5F15\u5165</h3><p>cheerio \u53EF\u4EE5\u8BFB\u53D6 html \u5B57\u7B26\u4E32\uFF0C\u8BA9\u6211\u4EEC\u80FD\u591F\u4EE5 jQuery \u7684\u65B9\u5F0F\u64CD\u4F5C\u83B7\u53D6\u6570\u636E</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> cheerio --save
<span class="token function">npm</span> <span class="token function">install</span> @types/cheerio -D
</code></pre></div><h3 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h3><p>cheerio \u4E2D\u7684 map((index,element)=&gt;{})\u65B9\u6CD5\u7684\u53C2\u6570\u548C JS \u7684 map((element,index)=&gt;{})\u65B9\u6CD5\u53C2\u6570\u76F8\u53CD</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// https://cheerio.js.org/ \u6587\u6863\u5B9E\u4F8B</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this === el</span>
    <span class="token keyword">return</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//=&gt; &quot;apple orange pear&quot;</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> superagent <span class="token keyword">from</span> <span class="token string">&#39;superagent&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> cheerio <span class="token keyword">from</span> <span class="token string">&#39;cheerio&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Crowller</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> secret <span class="token operator">=</span> <span class="token string">&#39;secretKey&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://www.dell-lee.com/typescript/demo.html?secret=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

  <span class="token function">getCourseInfo</span><span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> $ <span class="token operator">=</span> cheerio<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> courseItems <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.course-item&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> courseInfo<span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    courseItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> ele<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> descs <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.course-desc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> title <span class="token operator">=</span> descs<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>
        descs
          <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">10</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      courseInfo<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        title<span class="token operator">:</span> title<span class="token punctuation">,</span>
        count<span class="token operator">:</span> count<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
      time<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> courseInfo<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">getRawHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> superagent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCourseInfo</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRawHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> crowller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Crowller</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h3><div class="language-powershell ext-powershell"><pre class="language-powershell"><code>&gt; ts-node <span class="token punctuation">.</span><span class="token operator">/</span>src/crawler<span class="token punctuation">.</span>ts

<span class="token punctuation">{</span>
  time: 1582818112855<span class="token punctuation">,</span>
  <span class="token keyword">data</span>: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> title: <span class="token string">&#39;Vue2.5\u5F00\u53D1\u53BB\u54EA\u513F\u7F51App&#39;</span><span class="token punctuation">,</span> count: 18 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> title: <span class="token string">&#39;React 16.4 \u5F00\u53D1\u7B80\u4E66\u9879\u76EE&#39;</span><span class="token punctuation">,</span> count: 74 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> title: <span class="token string">&#39;React\u670D\u52A1\u5668\u6E32\u67D3\u539F\u7406\u89E3\u6790\u4E0E\u5B9E\u8DF5&#39;</span><span class="token punctuation">,</span> count: 10 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> title: <span class="token string">&#39;\u624B\u628A\u624B\u5E26\u4F60\u638C\u63E1\u65B0\u7248Webpack4.0&#39;</span><span class="token punctuation">,</span> count: 41 <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7EC4\u5408\u8BBE\u8BA1\u6A21\u5F0F\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u8BBE\u8BA1\u6A21\u5F0F\u4F18\u5316" aria-hidden="true">#</a> \u7EC4\u5408\u8BBE\u8BA1\u6A21\u5F0F\u4F18\u5316</h2><h3 id="crawler" tabindex="-1"><a class="header-anchor" href="#crawler" aria-hidden="true">#</a> crawler</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> superagent <span class="token keyword">from</span> <span class="token string">&#39;superagent&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CaffreyAnalyzer <span class="token keyword">from</span> <span class="token string">&#39;./specialAnalyzer&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Analyzer</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">analyze</span><span class="token operator">:</span> <span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> filePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Crowller</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../data/course.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">async</span> <span class="token function">getRawHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> superagent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">.</span>text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function">writeFile</span><span class="token punctuation">(</span>content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>filePath<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">initSpiderProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRawHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> fileContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>analyzer<span class="token punctuation">.</span><span class="token function">analyze</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>fileContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">private</span> analyzer<span class="token operator">:</span> Analyzer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initSpiderProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> secret <span class="token operator">=</span> <span class="token string">&#39;secretKey&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://www.dell-lee.com/typescript/demo.html?secret=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> analyzer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CaffreyAnalyzer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Crowller</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> analyzer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="analyzer-js" tabindex="-1"><a class="header-anchor" href="#analyzer-js" aria-hidden="true">#</a> analyzer.js</h3><ul><li>class implements interface</li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> cheerio <span class="token keyword">from</span> <span class="token string">&#39;cheerio&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Analyzer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./crowller&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CourseResult</span> <span class="token punctuation">{</span>
  time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  data<span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Content</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">CaffreyAnalyzer</span> <span class="token keyword">implements</span> <span class="token class-name">Analyzer</span> <span class="token punctuation">{</span>
  <span class="token function">getCourseInfo</span><span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> $ <span class="token operator">=</span> cheerio<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> courseItems <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.course-item&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> courseInfos<span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    courseItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> element<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> descs <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.course-desc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> title <span class="token operator">=</span> descs<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>
        descs
          <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">10</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      courseInfos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token punctuation">,</span> count <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      time<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> courseInfos<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">generateJsonContent</span><span class="token punctuation">(</span>courseInfo<span class="token operator">:</span> CourseResult<span class="token punctuation">,</span> filePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> fileContent<span class="token operator">:</span> Content <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fileContent <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    fileContent<span class="token punctuation">[</span>courseInfo<span class="token punctuation">.</span>time<span class="token punctuation">]</span> <span class="token operator">=</span> courseInfo<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">return</span> fileContent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">analyze</span><span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> filePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> courseInfo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCourseInfo</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> fileContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">generateJsonContent</span><span class="token punctuation">(</span>courseInfo<span class="token punctuation">,</span> filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>fileContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5355\u4F8B\u6A21\u5F0F\u5B9E\u6218" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F\u5B9E\u6218" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F\u5B9E\u6218</h2><h3 id="specialanalyzer-ts" tabindex="-1"><a class="header-anchor" href="#specialanalyzer-ts" aria-hidden="true">#</a> specialAnalyzer.ts</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> cheerio <span class="token keyword">from</span> <span class="token string">&#39;cheerio&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Analyzer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./crowller&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CourseResult</span> <span class="token punctuation">{</span>
  time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  data<span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Content</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">CaffreyAnalyzer</span> <span class="token keyword">implements</span> <span class="token class-name">Analyzer</span> <span class="token punctuation">{</span>
  <span class="token comment">// static\u9759\u6001\u5C5E\u6027\uFF0C\u5C06\u65B9\u6CD5\u76F4\u63A5\u6302\u8F7D\u5728\u7C7B\u4E0A\u9762\uFF0C\u800C\u4E0D\u662F\u7C7B\u7684\u5B9E\u4F8B\u4E0A\u9762</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> instance<span class="token operator">:</span> CaffreyAnalyzer<span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53EA\u751F\u6210\u4E00\u6B21</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>CaffreyAnalyzer<span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      CaffreyAnalyzer<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CaffreyAnalyzer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> CaffreyAnalyzer<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">private</span> <span class="token function">getCourseInfo</span><span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> $ <span class="token operator">=</span> cheerio<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> courseItems <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.course-item&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> courseInfos<span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    courseItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> element<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> descs <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.course-desc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> title <span class="token operator">=</span> descs<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>
        descs
          <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;\uFF1A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token number">10</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      courseInfos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token punctuation">,</span> count <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      time<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> courseInfos<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function">generateJsonContent</span><span class="token punctuation">(</span>courseInfo<span class="token operator">:</span> CourseResult<span class="token punctuation">,</span> filePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> fileContent<span class="token operator">:</span> Content <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fileContent <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    fileContent<span class="token punctuation">[</span>courseInfo<span class="token punctuation">.</span>time<span class="token punctuation">]</span> <span class="token operator">=</span> courseInfo<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">return</span> fileContent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">analyze</span><span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> filePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> courseInfo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCourseInfo</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> fileContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">generateJsonContent</span><span class="token punctuation">(</span>courseInfo<span class="token punctuation">,</span> filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>fileContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// private\u79C1\u6709\u9650\u5236\u7B26,\u53EA\u5141\u8BB8\u5185\u90E8\u8C03\u7528  \u7981\u6B62new \u5B9E\u4F8B</span>
  <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528" aria-hidden="true">#</a> \u5F15\u7528</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> analyzer <span class="token operator">=</span> CaffreyAnalyzer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Crowller</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> analyzer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u7F16\u8BD1\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u8FC7\u7A0B" aria-hidden="true">#</a> \u7F16\u8BD1\u8FC7\u7A0B</h2><h3 id="\u521D\u59CB\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u914D\u7F6E" aria-hidden="true">#</a> \u521D\u59CB\u914D\u7F6E</h3><p>\u5C06 ts \u6587\u4EF6\u7F16\u8BD1\u4E3A js \u6587\u4EF6\uFF0C\u7136\u540E\u8FD0\u884C\u8BE5\u6587\u4EF6</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ts-node ./src/crawler.ts&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6253\u5F00 <strong>tsconfig.json</strong> \u4FEE\u6539\u7F16\u8BD1\u8DEF\u5F84</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./build&quot;</span>
</code></pre></div><p>typescript \u6587\u4EF6\u662F\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884C\u7684</p><div class="language-powershell ext-powershell"><pre class="language-powershell"><code>node <span class="token punctuation">.</span><span class="token operator">/</span>build/crawler<span class="token punctuation">.</span>js
<span class="token operator">/</span><span class="token operator">/</span>\u62A5\u9519
node src/crawler<span class="token punctuation">.</span>ts
</code></pre></div><h3 id="\u81EA\u52A8\u7F16\u8BD1-ts-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u7F16\u8BD1-ts-\u6587\u4EF6" aria-hidden="true">#</a> \u81EA\u52A8\u7F16\u8BD1 ts \u6587\u4EF6</h3><p>\u901A\u8FC7 npm run build \u540E\uFF0C\u5982\u679C\u540E\u7EED ts \u6587\u4EF6\u6709\u4FEE\u6539\uFF0C\u4F1A\u81EA\u52A8\u7F16\u8BD1\u66F4\u65B0 js \u6587\u4EF6</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc -w&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u81EA\u52A8\u6267\u884C-js-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u6267\u884C-js-\u6587\u4EF6" aria-hidden="true">#</a> \u81EA\u52A8\u6267\u884C js \u6587\u4EF6</h3><p>\u76D1\u63A7\u6574\u4E2A\u9879\u76EE\u6587\u4EF6\u53D8\u5316\u540E\u6267\u884C\u52A8\u4F5C\uFF0C\u5B89\u88C5 nodemon(npm install nodemon -D)</p><ul><li>nodemon \u9ED8\u8BA4\u4E0D\u4F1A\u76D1\u6D4B TypeScript \u7684\u6587\u4EF6\u53D8\u5316\uFF08\u53EF\u914D\u7F6E\u4FEE\u6539\uFF09</li></ul><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc -w&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon node ./build/crawler.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>tips: \u7B2C\u4E00\u6B21\u8FD0\u884C\u7684 npm run start \u7684\u65F6\u5019\u4F1A\u5148\u6267\u884C\u4E00\u6B21\uFF0C\u5BFC\u81F4\u751F\u6210\u4E86 data \u6587\u4EF6\u5939\u4E0B\u9762\u7684 course.json; \u800C\u5F53\u524D\u7684\u6587\u4EF6\u53D8\u5316\u53C8\u5BFC\u81F4\u4E86 nodemon \u7684\u76D1\u6D4B\u91CD\u65B0\u6267\u884C\uFF0C\u5982\u6B64\u53CD\u590D\u5FAA\u73AF\u8FD0\u884C craw.js\uFF0C\u9700\u8981\u5728 package.json \u589E\u52A0 json \u914D\u7F6E</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;nodemonConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;data/*&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5408\u5E76\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u547D\u4EE4" aria-hidden="true">#</a> \u5408\u5E76\u547D\u4EE4</h3><p><strong>concurrently</strong>\u5E76\u884C\u6267\u884C\u547D\u4EE4(npm install concurrently -D)</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc -w&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev:start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon node ./build/crawler.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;concurrently npm run dev:build &amp; npm run dev:start&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>npm:dev:*\u76F8\u5F53\u4E8E npm run dev: \u4E0B\u7684\u6240\u6709\u547D\u4EE4</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc -w&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev: start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon node ./build/crawler.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;concurrently npm:dev:*&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,67),e=[o];function c(u,l){return s(),a("div",null,e)}var k=n(p,[["render",c],["__file","basic.html.vue"]]);export{k as default};
