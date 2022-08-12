import{_ as n,o as s,c as a,a as t}from"./app.4bbb0959.js";const p={},o=t(`<h1 id="\u57FA\u7840\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u8BED\u6CD5</h1><h2 id="\u7EC4\u4EF6\u4E8B\u4EF6\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4E8B\u4EF6\u5C01\u88C5" aria-hidden="true">#</a> \u7EC4\u4EF6\u4E8B\u4EF6\u5C01\u88C5</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> events <span class="token operator">=</span> eventNames
	<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token operator">=&gt;</span> evt<span class="token punctuation">.</span><span class="token function">toLocalLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">eventName</span><span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">completeName</span><span class="token operator">:</span> <span class="token string">&#39;Plotly_&#39;</span><span class="token operator">+</span>eventName<span class="token punctuation">,</span>
        <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token parameter">context</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            context<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token punctuation">[</span>eventName<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Plotly<span class="token punctuation">.</span><span class="token function">newPlot</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span>
	events<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">evt</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// this.$el  Plotly\u7684Dom\u5143\u7D20.on(event, handler)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>evt<span class="token punctuation">.</span>completeName<span class="token punctuation">,</span> evt<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="npm\u7EC4\u4EF6\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#npm\u7EC4\u4EF6\u53D1\u5E03" aria-hidden="true">#</a> NPM\u7EC4\u4EF6\u53D1\u5E03</h2><p>https://www.npmjs.com/package/kl-test-data</p><h3 id="\u7EC4\u4EF6\u6DFB\u52A0install\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6DFB\u52A0install\u65B9\u6CD5" aria-hidden="true">#</a> \u7EC4\u4EF6\u6DFB\u52A0install\u65B9\u6CD5</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5BFC\u5165\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u5FC5\u987B\u58F0\u660E name</span>
<span class="token keyword">import</span> KlTestData <span class="token keyword">from</span> <span class="token string">&quot;./src/KlTestData.vue&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E3A\u7EC4\u4EF6\u63D0\u4F9B install \u5B89\u88C5\u65B9\u6CD5\uFF0C\u4F9B\u6309\u9700\u5F15\u5165</span>
KlTestData<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>KlTestData<span class="token punctuation">.</span>name<span class="token punctuation">,</span> KlTestData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u9ED8\u8BA4\u5BFC\u51FA\u7EC4\u4EF6</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> KlTestData<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u63D2\u4EF6\u6CE8\u518C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u6CE8\u518C\u65B9\u6CD5" aria-hidden="true">#</a> \u63D2\u4EF6\u6CE8\u518C\u65B9\u6CD5</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> KlTestData <span class="token keyword">from</span> <span class="token string">&quot;./KlTestData&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5B58\u50A8\u7EC4\u4EF6\u5217\u8868</span>
<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">[</span>KlTestData<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">/* 
  \u5B9A\u4E49install \u65B9\u6CD5\uFF0C\u63A5\u6536Vue\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5982\u679C\u4F7F\u7528use\u6CE8\u518C\u63D2\u4EF6\uFF0C\u5219\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u5C06\u88AB\u6CE8\u518C
*/</span>
<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u5224\u65AD\u662F\u5426\u5B89\u88C5</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>install<span class="token punctuation">.</span>installed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  components<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u5224\u65AD\u662F\u5426\u5F15\u5165\u6587\u4EF6</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>Vue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  install<span class="token punctuation">,</span>
  KlTestData
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u7EC4\u4EF6\u7684\u4F7F\u7528\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u4F7F\u7528\u6848\u4F8B" aria-hidden="true">#</a> \u7EC4\u4EF6\u7684\u4F7F\u7528\u6848\u4F8B</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">/* main.js */</span>
<span class="token comment">// \u5BFC\u5165\u7EC4\u4EF6\u5E93</span>
<span class="token keyword">import</span> ComColorButton <span class="token keyword">from</span> <span class="token string">&#39;./../packages/index&#39;</span>
<span class="token comment">// \u6CE8\u518C\u7EC4\u4EF6\u5E93</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ComColorButton<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u7F16\u8BD1\u547D\u4EE4\u884C" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u547D\u4EE4\u884C" aria-hidden="true">#</a> \u7F16\u8BD1\u547D\u4EE4\u884C</h3><p>\u4EE5\u4E0B\u6211\u4EEC\u5728 scripts \u4E2D\u65B0\u589E\u4E00\u6761\u547D\u4EE4 npm run lib</p><ul><li>--target: \u6784\u5EFA\u76EE\u6807\uFF0C\u9ED8\u8BA4\u4E3A\u5E94\u7528\u6A21\u5F0F\u3002\u8FD9\u91CC\u4FEE\u6539\u4E3A lib \u542F\u7528\u5E93\u6A21\u5F0F\u3002</li><li>--dest : \u8F93\u51FA\u76EE\u5F55\uFF0C\u9ED8\u8BA4 dist\u3002\u8FD9\u91CC\u6211\u4EEC\u6539\u6210 lib</li><li>[entry]: \u6700\u540E\u4E00\u4E2A\u53C2\u6570\u4E3A\u5165\u53E3\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u4E3A src/App.vue\u3002\u8FD9\u91CC\u6211\u4EEC\u6307\u5B9A\u7F16\u8BD1 packages/ \u7EC4\u4EF6\u5E93\u76EE\u5F55\u3002</li></ul><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --target lib --name vcolorpicker --dest lib packages/index.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7F16\u8BD1\u548C\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u548C\u53D1\u5E03" aria-hidden="true">#</a> \u7F16\u8BD1\u548C\u53D1\u5E03</h3><h4 id="\u6267\u884C\u7F16\u8BD1\u5E93\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u7F16\u8BD1\u5E93\u547D\u4EE4" aria-hidden="true">#</a> \u6267\u884C\u7F16\u8BD1\u5E93\u547D\u4EE4</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> run lib
</code></pre></div><h4 id="npm\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#npm\u914D\u7F6E" aria-hidden="true">#</a> npm\u914D\u7F6E</h4><ul><li>private\uFF1A\u662F\u5426\u79C1\u6709\uFF0C\u9700\u8981\u4FEE\u6539\u4E3A false \u624D\u80FD\u53D1\u5E03\u5230 npm</li><li>version: \u7248\u672C\u53F7\uFF0C\u6BCF\u6B21\u53D1\u5E03\u81F3 npm \u9700\u8981\u4FEE\u6539\u7248\u672C\u53F7\uFF0C\u4E0D\u80FD\u548C\u5386\u53F2\u7248\u672C\u53F7\u76F8\u540C</li></ul><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kl-test-data&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.1.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lib/klTestData.umd.min.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Component, showing TestData&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;William&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sdp_518@126.com&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;TestData&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="npmignore" tabindex="-1"><a class="header-anchor" href="#npmignore" aria-hidden="true">#</a> .npmignore</h4><div class="language-text ext-text"><pre class="language-text"><code># \u5FFD\u7565\u76EE\u5F55
examples/
packages/
public/

# \u5FFD\u7565\u6307\u5B9A\u6587\u4EF6
vue.config.js
babel.config.js
*.map
</code></pre></div><h4 id="\u53D1\u5E03\u5230npm" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u5230npm" aria-hidden="true">#</a> \u53D1\u5E03\u5230npm</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> login
<span class="token function">npm</span> publish
</code></pre></div><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><ul><li>\u5355\u6B21\u70B9\u51FB\u89E6\u53D1\u4E24\u6B21\u4E8B\u4EF6\uFF1A<code>@click=\u201ChandleClick1()\uFF0ChabdleClick2()\u201D</code></li><li>\u4E0D\u54CD\u5E94\u5B50\u5143\u7D20\u7684\u70B9\u51FB\uFF1A<code>@click.self</code></li><li><code>@scroll.passive</code>\u589E\u52A0\u6EDA\u52A8\u6027\u80FD\uFF08\u89E3\u51B3chrome\u6027\u80FD\u8B66\u544A\uFF09</li><li>\u952E\u76D8\u4FEE\u9970\u7B26<code>@keydown.enter deleye</code></li><li>\u9F20\u6807\u4FEE\u9970\u7B26<code>@click.left right middle</code></li><li>\u7CBE\u786E\u4FEE\u9970\u7B26, \u5355\u72EC\u70B9\u51FBctrl\u89E6\u53D1<code>@clock.ctrl.exact</code></li></ul><h3 id="v-model\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#v-model\u4FEE\u9970\u7B26" aria-hidden="true">#</a> V-model\u4FEE\u9970\u7B26</h3><p><code>v-model. lazy number trim</code></p><h2 id="\u7EC4\u4EF6\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u57FA\u7840" aria-hidden="true">#</a> \u7EC4\u4EF6\u57FA\u7840</h2><h3 id="\u5C40\u90E8\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u7EC4\u4EF6" aria-hidden="true">#</a> \u5C40\u90E8\u7EC4\u4EF6</h3><p><code>components: { name: componentObj }</code></p><h3 id="\u5168\u5C40\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u7EC4\u4EF6" aria-hidden="true">#</a> \u5168\u5C40\u7EC4\u4EF6</h3><p><code>app. component(name, configObj) </code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> component <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;child component&lt;/div&gt;&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="function\u7C7B\u578B\u7684\u4F20\u503C" tabindex="-1"><a class="header-anchor" href="#function\u7C7B\u578B\u7684\u4F20\u503C" aria-hidden="true">#</a> Function\u7C7B\u578B\u7684\u4F20\u503C</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/functionProp.png" alt=""></p><h3 id="validator" tabindex="-1"><a class="header-anchor" href="#validator" aria-hidden="true">#</a> validator</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/validator.png" alt=""></p><h3 id="\u5BF9\u8C61\u591A\u5C5E\u6027\u4F20\u503C" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u591A\u5C5E\u6027\u4F20\u503C" aria-hidden="true">#</a> \u5BF9\u8C61\u591A\u5C5E\u6027\u4F20\u503C</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0B\u9762\u4E24\u79CD\u5F62\u5F0F\u7B49\u4EF7\uFF0C\u76F4\u63A5<code>v-bind</code>\u4F20\u9012\uFF0C\u9002\u5408\u9700\u8981\u591A\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u7684\u60C5\u51B5</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>params<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">:a</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>params.a<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:b</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>params.b<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="\u9A7C\u5CF0\u5C5E\u6027\u540D" tabindex="-1"><a class="header-anchor" href="#\u9A7C\u5CF0\u5C5E\u6027\u540D" aria-hidden="true">#</a> \u9A7C\u5CF0\u5C5E\u6027\u540D</h3><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">data-hello</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>\u5B50\u7EC4\u4EF6\u4F7F\u7528<code>dataHello</code>\u4F7F\u7528\u8BE5\u53C2\u6570\uFF0Chtml\u4E0D\u80FD\u4F20<strong>dataHello</strong>\u8FD9\u6837\u7684\u5C5E\u6027\uFF0C\u53EA\u80FD\u7528<strong>data-hello</strong></p><h3 id="non-props-attrs" tabindex="-1"><a class="header-anchor" href="#non-props-attrs" aria-hidden="true">#</a> Non-props | $attrs</h3><div class="custom-container tip"><p class="custom-container-title">Non-props</p><ol><li>\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u5B50\u7EC4\u4EF6\u4E0D\u5199props\u5C5E\u6027\u63A5\u53D7\u7684\u8FD9\u4E9B\u5C5E\u6027\uFF1B</li><li>\u5B50\u7EC4\u4EF6\u5728\u63A5\u53D7\u5230\u8FD9\u4E9B\u5C5E\u6027\u540E\uFF0C\u4F1A\u628A\u5C5E\u6027\u653E\u7740\u5B50\u7EC4\u4EF6<strong>\u6700\u5916\u5C42</strong>\u7684<strong>DOM\u6807\u7B7E</strong>\u4E0B\uFF1B</li><li>\u53EF\u4EE5\u8BBE\u7F6E<strong>inheritAttrs</strong>\u4E0D\u5199\u5165\u5230DOM (\u7EC4\u4EF6\u7684<strong>\u6839\u5143\u7D20 \u7EE7\u627F\u7279\u6027</strong>);</li><li>\u5E94\u7528\uFF1Aclass\u6837\u5F0F</li><li>\u5F53\u5B50\u7EC4\u4EF6\u6839\u8282\u70B9\u4E0D\u6B62\u4E00\u4E2A\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EE7\u627F\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>$attrs</code>\u83B7\u53D6</li></ol></div><ul><li><p>\u7236\u7EC4\u4EF6</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div></li><li><p>\u5B50\u7EC4\u4EF6</p><div class="language-text ext-text"><pre class="language-text"><code>app.component(&#39;child&#39;, {
	template: \`&lt;div&gt;child component&lt;/div&gt;\`
})
</code></pre></div></li><li><p>\u6E32\u67D3\u6548\u679C</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>child component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>\u6709\u591A\u4E2A\u6839\u8282\u70B9\u65F6\u4E0D\u4F1A\u5199\u5165\uFF0C\u4F7F\u7528<code>$attrs</code>\u5F97\u5230Non-props</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div :msg=&quot;$attrs.msg&quot;&gt;child component&lt;/div&gt;
        &lt;div v-bind=&quot;$attrs&quot;&gt;child component&lt;/div&gt;
        &lt;div&gt;child component&lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li></ul><h3 id="emits-\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#emits-\u6821\u9A8C" aria-hidden="true">#</a> emits \u6821\u9A8C</h3><div class="custom-container tip"><p class="custom-container-title">emits</p><p>emits\u8868\u793A\u7EC4\u4EF6\u5C06\u5411\u5916\u89E6\u53D1\u7684\u4E8B\u4EF6\u5217\u8868\uFF0C\u5982\u679C\u89E6\u53D1\u7684\u4E8B\u4EF6\u4E0D\u5728emits\u6570\u7EC4\u91CC,\u5F00\u53D1\u73AF\u5883\u4E0B\u4F1A\u629B\u51FA\u8B66\u544A\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div @click=&quot;handleClick&quot;&gt;{{ count }}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></div><ul><li>emits\u8FD8\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6BCF\u4E2A\u4E8B\u4EF6\u540D\u90FD\u662F\u4E00\u4E2A<strong>\u51FD\u6570</strong>\uFF0C\u5BF9emit\u4E8B\u4EF6\u7684\u53C2\u6570\u8FDB\u884C\u6821\u9A8C \uFF08\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u4EE5\u6307\u793A\u4E8B\u4EF6<strong>\u662F\u5426\u6709\u6548</strong>\uFF09</li><li>\u5F53\u5C5E\u6027\u503C\u8BBE\u7F6E\u672Anull\u8868\u793A\u6CA1\u6709\u6821\u9A8C</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div @click=&quot;handleClick&quot;&gt;{{ count }}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h2><h4 id="\u7236\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;&lt;counter v-model=&quot;count&quot; /&gt;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="\u5B50\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7EC4\u4EF6" aria-hidden="true">#</a> \u5B50\u7EC4\u4EF6</h4><ul><li>\u5B50\u7EC4\u4EF6\u901A\u8FC7<strong>update:modelValue</strong>\u63A5\u6536v-model\u7684\u4F20\u9012\u7684\u503C</li><li>\u5B50\u7EC4\u4EF6\u5411\u5916\u89E6\u53D1\u7684\u4E8B\u4EF6\u540D\u5FC5\u987B\u662F<strong>update:modelValue</strong></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modelValue <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div @click=&quot;handleClick&quot;&gt;{{ modelValue }}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="v-model-\u81EA\u5B9A\u4E49\u53C2\u6570\u540D" tabindex="-1"><a class="header-anchor" href="#v-model-\u81EA\u5B9A\u4E49\u53C2\u6570\u540D" aria-hidden="true">#</a> v-model \u81EA\u5B9A\u4E49\u53C2\u6570\u540D</h3><p>\u5982\u679C\u4E0D\u5E0C\u671B\u4F7F\u7528<strong>modelValue</strong>\u4F5C\u4E3A\u53C2\u6570\u540D\uFF1A</p><ul><li>\u7236\u7EC4\u4EF6\uFF1A<strong>v-model:app</strong></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;&lt;counter v-model:app=&quot;count&quot; /&gt;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>\u5B50\u7EC4\u4EF6\uFF1A<strong>update:app</strong></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:app&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modelValue <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div @click=&quot;handleClick&quot;&gt;{{ app }}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="v-model-\u591A\u4E2A\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#v-model-\u591A\u4E2A\u5C5E\u6027" aria-hidden="true">#</a> v-model \u591A\u4E2A\u5C5E\u6027</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> 
            <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">count1</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;&lt;counter v-model:count=&quot;count&quot; v-model:count1=&quot;count1&quot; /&gt;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;count1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:count&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">handleClick1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:count1&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count1 <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div @click=&quot;handleClick&quot;&gt;{{ count }}&lt;/div&gt;
        &lt;div @click=&quot;handleClick1&quot;&gt;{{ count1 }}&lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="v-model-\u4FEE\u9970\u7B26-modelmodifiers" tabindex="-1"><a class="header-anchor" href="#v-model-\u4FEE\u9970\u7B26-modelmodifiers" aria-hidden="true">#</a> v-model \u4FEE\u9970\u7B26 modelModifiers</h3><p>requirement: \u5E0C\u671B\u901A\u8FC7\u81EA\u5B9A\u4E49\u4FEE\u9970\u7B26 uppercase \u81EA\u52A8\u5C06\u6539\u53D8\u540E\u7684\u6570\u636E\u5927\u5199</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> 
            <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;&lt;counter v-model.uppercase=&quot;count&quot; /&gt;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;modelValue&#39;</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token string-property property">&#39;modelModifiers&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u4E0D\u4F20\u9012\u4FEE\u9970\u7B26\u7684\u65F6\u5019\uFF0C\u9ED8\u8BA4\u4FEE\u9970\u7B26\u662F\u4E2A\u7A7A\u5BF9\u8C61,\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7this.modelModifiers\u8BBF\u95EE</span>
            <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> newValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modelValue <span class="token operator">+</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>modelModifiers<span class="token punctuation">.</span>uppercase<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token comment">// \u5982\u679C\u6709uppercase\u4FEE\u9970\u7B26\uFF0C\u8C03\u7528\u5B57\u7B26\u4E32toUpperCase\u65B9\u6CD5\u5C06\u9996\u5B57\u6BCD\u5927\u5199</span>
              newValue <span class="token operator">=</span> newValue<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div @click=&quot;handleClick&quot;&gt;{{ modelValue }}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u7EC4\u4EF6\u6E32\u67D3</span>
<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="\u81EA\u5B9A\u4E49\u53C2\u6570\u7684\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u53C2\u6570\u7684\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u53C2\u6570\u7684\u4FEE\u9970\u7B26</h4><p>\u5BF9\u4E8E\u5E26\u53C2\u6570\u7684 <code>v-model</code> \u7ED1\u5B9A\uFF0C\u751F\u6210\u7684 prop \u540D\u79F0\u5C06\u4E3A <code>arg + &quot;Modifiers&quot;</code>\uFF1A</p><p>\u7236\u7EC4\u4EF6\uFF1A</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span class="token attr-name"><span class="token namespace">v-model:</span>foo.capitalize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-component</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5B50\u7EC4\u4EF6\u901A\u8FC7 this**.fooModifiers** \u8BBF\u95EE:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-component&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fooModifiers&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;input type=&quot;text&quot; 
      :value=&quot;foo&quot;
      @input=&quot;$emit(&#39;update:foo&#39;, $event.target.value)&quot;&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fooModifiers<span class="token punctuation">)</span> <span class="token comment">// { capitalize: true }</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a> \u63D2\u69FD</h2><h3 id="\u57FA\u7840\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u63D2\u69FD" aria-hidden="true">#</a> \u57FA\u7840\u63D2\u69FD</h3><ul><li><p>slot \u63D2\u69FD</p></li><li><p>\u7236\u6A21\u677F\u91CC\u9762\u8C03\u7528\u7684\u6570\u636E\u5C5E\u6027\uFF0C\u4F7F\u7528\u7684\u90FD\u662F\u7236\u6A21\u677F\u91CC\u9762\u7684\u6570\u636E</p></li><li><p>\u5B50\u6A21\u677F\u91CC\u9762\u8C03\u7528\u7684\u6570\u636E\u5C5E\u6027\uFF0C\u4F7F\u7528\u7684\u90FD\u662F\u5B50\u6A21\u677F\u91CC\u9762\u7684\u6570\u636E</p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A<code>&lt;slot&gt;default value&lt;/slot&gt;</code>\u5728\u672A\u4F20\u9012\u63D2\u69FD\u5185\u5BB9\u7684\u65F6\u5019\u663E\u793A</p></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u63D0\u4EA4&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;myform&gt;
            &lt;div&gt;{{text}}&lt;/div&gt;
        &lt;/myform&gt;
        &lt;myform&gt;
            &lt;button&gt;{{text}}&lt;/button&gt;
        &lt;/myform&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6  \uFF08\u63D2\u69FD\u662F\u4E0D\u80FD\u7ED1\u5B9A\u4E8B\u4EF6\u7684\uFF0C\u53EF\u4EE5\u5728\u63D2\u69FD\u5916\u9762\u52A0\u4E00\u4E2A\u6807\u7B7E\u76D1\u542C\uFF09</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;myform&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div&gt;
            &lt;input /&gt;
            &lt;span @click=&quot;handleClick&quot;&gt;
                &lt;slot&gt;default value&lt;/slot&gt;
            &lt;/span&gt;
        &lt;/div&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5177\u540D\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u5177\u540D\u63D2\u69FD" aria-hidden="true">#</a> \u5177\u540D\u63D2\u69FD</h3><ul><li>\u7236\u7EC4\u4EF6 <code>v-slot:name</code></li><li>\u5B50\u7EC4\u4EF6 <code>&lt;slot name=&quot;name&quot;&gt;&lt;/slot&gt;</code></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;layout&gt;
			&lt;template v-slot:header&gt;
				&lt;div&gt;header&lt;/div&gt;
			&lt;/template&gt;
			&lt;template v-slot:footer&gt;
				&lt;div&gt;header&lt;/div&gt;
			&lt;/template&gt;
        &lt;/layout&gt;&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;layout&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div&gt;
			&lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;
            &lt;div&gt;content&lt;/div&gt;
			&lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;
        &lt;/div&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u4F5C\u7528\u57DF\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u63D2\u69FD" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u63D2\u69FD</h3><h4 id="\u63D2\u69FD\u7B80\u5199-slotname" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD\u7B80\u5199-slotname" aria-hidden="true">#</a> \u63D2\u69FD\u7B80\u5199 #slotName</h4><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u7B80\u5199\uFF1A</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="\u4F5C\u7528\u57DF\u63D2\u69FD-1" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u63D2\u69FD-1" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u63D2\u69FD</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>\u5F53\u5B50\u7EC4\u4EF6\u6E32\u67D3\u7684\u5185\u5BB9\u9700\u8981\u7531\u7236\u7EC4\u4EF6\u51B3\u5B9A\u7684\u65F6\u5019</li><li>\u56E0\u4E3A\u7236\u7EC4\u4EF6\u53EA\u80FD\u4F7F\u7528\u81EA\u5DF1\u4F5C\u7528\u57DF\u5185\u7684\u6570\u636E\uFF0C\u5B9E\u73B0\u5728\u7236\u7EC4\u4EF6\u5185\u53BB\u8C03\u7528\u5B50\u7EC4\u4EF6\u7684\u6570\u636E</li></ul></div><ul><li>\u5B50\u7EC4\u4EF6\u5C06item\u6570\u636E\u4F20\u9012\u7ED9item\u5C5E\u6027</li><li>\u7236\u7EC4\u4EF6\u4F7F\u7528slot\u65F6\uFF0C\u901A\u8FC7<code>v-slot=&quot;slotProps&quot;</code>\u7684<strong>\u6570\u636E\u5BF9\u8C61</strong>\u63A5\u6536\u4F7F\u7528</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;list v-slot=&quot;slotProps&quot;&gt;
        	&lt;div&gt;{{ slotProps.item }}&lt;/div&gt;    // \u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u7684slot
        &lt;/list&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
	<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div&gt;
            &lt;slot v-for=&quot;item in list&quot; :item=&quot;item&quot;/&gt;
        &lt;/div&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u5BF9\u8C61\u7ED3\u6784\u8BED\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;list v-slot=&quot;{ item }&quot;&gt;
        	&lt;div&gt;{{ item }}&lt;/div&gt;
        &lt;/list&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></div><h2 id="\u52A8\u6001\u7EC4\u4EF6\u548C\u5F02\u6B65\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6\u548C\u5F02\u6B65\u7EC4\u4EF6" aria-hidden="true">#</a> \u52A8\u6001\u7EC4\u4EF6\u548C\u5F02\u6B65\u7EC4\u4EF6</h2><h3 id="\u52A8\u6001\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6" aria-hidden="true">#</a> \u52A8\u6001\u7EC4\u4EF6</h3><ul><li>\u6839\u636E\u6570\u636E\u7684\u53D8\u5316\uFF0C\u7ED3\u5408<code>component</code>\u6807\u7B7E\u6765\u968F\u65F6\u52A8\u6001\u5207\u6362\u7EC4\u4EF6</li><li>\u53EF\u4EE5\u7ED3\u5408\u4F7F\u7528<code>keep-alive</code>\u7EC4\u4EF6\uFF0C\u6765\u4FDD\u7559\u7EC4\u4EF6\u5207\u6362\u524D\u7684\u72B6\u6001</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">componentName</span><span class="token operator">:</span> <span class="token string">&#39;common-item&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
		&lt;keep-alive&gt;
			&lt;component :is=&quot;componentName&quot; /&gt;
		&lt;/keep-alive&gt;
		&lt;button @click=&quot;handleClick&quot;&gt;\u5207\u6362&lt;/button&gt;
	</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>componentName <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>componentName<span class="token operator">===</span><span class="token string">&#39;common-item&#39;</span><span class="token operator">?</span><span class="token string">&#39;input-item&#39;</span><span class="token operator">:</span><span class="token string">&#39;common-item&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;common-item&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div&gt;common-item&lt;/div&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;input-item&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div&gt;input-item&lt;/div&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5F02\u6B65\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u7EC4\u4EF6" aria-hidden="true">#</a> \u5F02\u6B65\u7EC4\u4EF6</h3><p>\u8C03\u7528<strong>Vue.defineAsyncComponent\uFF08fn\uFF09<strong>\u65B9\u6CD5\uFF0C\u53C2\u6570\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A</strong>Promise</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> AsyncCommonItem <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;this is an async component&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">4000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">componentName</span><span class="token operator">:</span> <span class="token string">&quot;common-item&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div&gt;
        &lt;common-item /&gt;
        &lt;async-common-item /&gt;
        &lt;/div&gt;
	</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;common-item&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
&lt;div&gt;common-item&lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;async-common-item&quot;</span><span class="token punctuation">,</span> AsyncCommonItem<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="v-once" tabindex="-1"><a class="header-anchor" href="#v-once" aria-hidden="true">#</a> v-once</h2><p>\u8868\u793A\u6807\u7B7E\u53EA\u4F1A\u88AB\u6E32\u67D3\u4E00\u6B21\uFF0C\u540E\u7EED\u5373\u4F7F\u6570\u636E\u53D1\u751F\u4E86\u53D8\u5316\u4E5F\u4E0D\u4F1A\u518D\u66F4\u65B0\u89C6\u56FE</p><ul><li>\u7B2C\u4E00\u4E2Adiv\u6807\u7B7E\u5185\u521D\u59CB\u6570\u636E\u672A1\uFF0C\u70B9\u51FB\u4E0D\u4F1A\u66F4\u65B0</li><li>\u7B2C\u4E8C\u4E2Adiv\u4F34\u968F\u7740\u70B9\u51FB\uFF0C\u6570\u636E\u4F1A\u66F4\u65B0</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div @click=&quot;count += 1&quot; v-once&gt;
            {{count}}
        &lt;/div&gt;
        &lt;div&gt;{{count}}&lt;/div&gt;
	</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="provide-inject" tabindex="-1"><a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a> Provide &amp; Inject</h2><p>\u7EC4\u4EF6\u5D4C\u5957\u591A\u7EA7\u65F6\uFF08<strong>\u8DE8\u7EC4\u4EF6\u7684\u591A\u7EA7\u4F20\u9012</strong>\uFF09\uFF0C\u6570\u636E\u4F20\u9012\u7E41\u7410\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
    	&lt;child :count=&quot;count&quot; /&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;child-child :count=&quot;count&quot;/&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child-child&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;{{count}}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="provide\u642D\u914Dinject" tabindex="-1"><a class="header-anchor" href="#provide\u642D\u914Dinject" aria-hidden="true">#</a> Provide\u642D\u914DInject</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
    	&lt;child :count=&quot;count&quot; /&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;child-child /&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child-child&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;{{count}}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u4F20\u9012data\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4F20\u9012data\u7684\u6570\u636E" aria-hidden="true">#</a> \u4F20\u9012data\u7684\u6570\u636E</h3><ul><li>\u5982\u679C\u60F3\u4F20\u9012data\u91CC\u9762\u7684\u6570\u636E\uFF0C\u9700\u8981\u628A<strong>provide</strong>\u6539\u5199\u6210<strong>\u51FD\u6570</strong>\u5F62\u5F0F\uFF1B</li><li>provide\u63D0\u4F9B\u7684\u6570\u636E<strong>\u4E0D\u662F\u54CD\u5E94\u5F0F</strong>\u7684\uFF0C\u70B9\u51FB\u4E4B\u540E<code>child-child</code>\u7EC4\u4EF6\u4E0D\u4F1A\u53D1\u751F\u6539\u53D8\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
        &lt;div&gt;{{count}}&lt;/div&gt;
        &lt;child :count=&quot;count&quot; /&gt;
        &lt;button @click=&quot;count += 1&quot;&gt;Add&lt;/button&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;child-child /&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child-child&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;{{count}}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,113),e=[o];function c(l,u){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","basic.html.vue"]]);export{r as default};