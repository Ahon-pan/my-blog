import{_ as p,o,c as e,b as n,d as c,a as s,e as a,r as u}from"./app.4bbb0959.js";const l={},k=s(`<h1 id="\u54CD\u5E94\u7CFB\u7EDF\u7684\u4F5C\u7528\u4E0E\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u7CFB\u7EDF\u7684\u4F5C\u7528\u4E0E\u5B9E\u73B0" aria-hidden="true">#</a> \u54CD\u5E94\u7CFB\u7EDF\u7684\u4F5C\u7528\u4E0E\u5B9E\u73B0</h1><p>Vue.js 3 \u91C7\u7528 Proxy \u5B9E\u73B0\u54CD\u5E94\u5F0F\u6570\u636E</p><h2 id="\u54CD\u5E94\u5F0F\u6570\u636E\u4E0E\u526F\u4F5C\u7528\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u6570\u636E\u4E0E\u526F\u4F5C\u7528\u51FD\u6570" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u6570\u636E\u4E0E\u526F\u4F5C\u7528\u51FD\u6570</h2><h3 id="\u526F\u4F5C\u7528\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u526F\u4F5C\u7528\u51FD\u6570" aria-hidden="true">#</a> \u526F\u4F5C\u7528\u51FD\u6570</h3><ul><li>\u526F\u4F5C\u7528\u51FD\u6570\u6307\u7684\u662F\u4F1A\u4EA7\u751F\u526F\u4F5C\u7528\u7684\u51FD\u6570\uFF1B</li><li>\u5F53\u51FD\u6570\u7684\u6267\u884C\u76F4\u63A5\u6216\u95F4\u63A5\u5F71\u54CD\u5176\u4ED6\u51FD\u6570\u7684\u6267\u884C\uFF0C\u8FD9\u65F6\u6211\u4EEC\u5C31\u8BF4\u51FD\u6570\u4EA7\u751F\u4E86\u526F\u4F5C\u7528\uFF1B</li><li>\u526F\u4F5C\u7528\u5F88\u5BB9\u6613\u4EA7\u751F\uFF0C\u4F8B\u5982\u4E00\u4E2A\u51FD\u6570\u4FEE\u6539\u4E86\u5168\u5C40\u53D8\u91CF\uFF0C\u8FD9\u4E5F\u662F\u4E00\u4E2A\u526F\u4F5C\u7528\u3002</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> val <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  val <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// \u4FEE\u6539\u5168\u5C40\u53D8\u91CF\uFF0C\u4EA7\u751F\u526F\u4F5C\u7528</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span> <span class="token comment">// \u4FEE\u6539\u4E86\u4E00\u4E2A\u4EFB\u4F55\u51FD\u6570\u90FD\u53EF\u4EE5\u8BFB\u53D6\u6216\u8005\u8BBE\u7F6E\u7684\u5185\u5BB9</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u54CD\u5E94\u5F0F\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u6570\u636E" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u6570\u636E</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// effect \u51FD\u6570\u7684\u6267\u884C\u4F1A\u8BFB\u53D6 obj.text</span>
	document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerText <span class="token operator">=</span> obj<span class="token punctuation">.</span>text
<span class="token punctuation">}</span>

obj<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;new value&#39;</span> <span class="token comment">// \u4FEE\u6539 obj.text \u7684\u503C\uFF0C\u540C\u65F6\u5E0C\u671B\u526F\u4F5C\u7528\u51FD\u6570\u4F1A\u91CD\u65B0\u6267\u884C</span>
</code></pre></div><p>\u{1F525} \u5F53\u6570\u636E\u7684\u53D8\u5316\u80FD\u591F\u4F7F\u5BF9\u5E94\u7684\u526F\u4F5C\u7528\u51FD\u6570\u81EA\u52A8\u91CD\u65B0\u6267\u884C\uFF0C\u90A3\u4E48\u8BE5\u6570\u636E obj \u5BF9\u8C61\u5C31\u662F\u54CD\u5E94\u5F0F\u6570\u636E</p><h2 id="\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u57FA\u672C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u57FA\u672C\u5B9E\u73B0" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u6570\u636E\u7684\u57FA\u672C\u5B9E\u73B0</h2><ul><li>\u5F53\u526F\u4F5C\u7528\u51FD\u6570 effect \u6267\u884C\u65F6\uFF0C\u4F1A\u89E6\u53D1\u5B57\u6BB5 obj.text \u7684\u8BFB\u53D6\u64CD\u4F5C\uFF1B</li><li>\u5F53\u4FEE\u6539 obj.text \u5F53\u503C\u65F6\uFF0C\u4F1A\u89E6\u53D1\u5B57\u6BB5 obj.text \u7684\u8BBE\u7F6E\u64CD\u4F5C\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5B58\u50A8\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6876</span>
<span class="token keyword">const</span> bucket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u539F\u59CB\u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;hello world&#39;</span> <span class="token punctuation">}</span>
<span class="token comment">// \u5BF9\u539F\u59CB\u6570\u636E\u7684\u4EE3\u7406</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u62E6\u622A\u8BFB\u53D6\u64CD\u4F5C</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06\u526F\u4F5C\u7528\u51FD\u6570 effect \u6DFB\u52A0\u5230\u5B58\u50A8\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6876\u4E2D</span>
    bucket<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span>
    <span class="token comment">// \u8FD4\u56DE\u5C5E\u6027\u503C</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u62E6\u622A\u8BBE\u7F6E\u64CD\u4F5C</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u5C5E\u6027\u503C</span>
    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal
    <span class="token comment">// \u628A\u526F\u4F5C\u7528\u51FD\u6570\u4ECE\u6876\u91CC\u53D6\u51FA\u5E76\u6267\u884C</span>
    bucket<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// ---------------------------------</span>

<span class="token comment">// \u526F\u4F5C\u7528\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerText <span class="token operator">=</span> obj<span class="token punctuation">.</span>text
<span class="token punctuation">}</span>
<span class="token comment">// \u9996\u6B21\u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570\uFF0C\u6536\u96C6\u4F9D\u8D56</span>
<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u4FEE\u6539\u6570\u636E\uFF0C\u81EA\u52A8\u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;new val&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><blockquote><p>\u5F53 setter \u62E6\u622A\u8BBE\u7F6E\u5E76\u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570\u65F6\uFF0C\u4F1A\u518D\u6B21\u89E6\u53D1 getter\uFF0Cbucket Set \u6570\u636E\u53EF\u4EE5\u4FDD\u8BC1\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6536\u96C6\u4E0D\u91CD\u590D</p></blockquote><h2 id="\u5B8C\u5584\u7684\u54CD\u5E94\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u5584\u7684\u54CD\u5E94\u7CFB\u7EDF" aria-hidden="true">#</a> \u5B8C\u5584\u7684\u54CD\u5E94\u7CFB\u7EDF</h2><div class="custom-container tip"><p class="custom-container-title">\u4E00\u4E2A\u54CD\u5E94\u7CFB\u7EDF\u7684\u5DE5\u4F5C\u6D41\u7A0B\u5982\u4E0B</p><ul><li>\u5F53\u8BFB\u53D6\u64CD\u4F5C\u53D1\u751F\u65F6\uFF0C\u5C06\u526F\u4F5C\u7528\u51FD\u6570\u6536\u96C6\u5230\u201D\u6876\u201C\u4E2D\uFF1B</li><li>\u5F53\u8BBE\u7F6E\u64CD\u4F5C\u53D1\u751F\u65F6\uFF0C\u4ECE\u201D\u6876\u201C\u4E2D\u53D6\u51FA\u526F\u4F5C\u7528\u51FD\u6570\u5E76\u6267\u884C\uFF1B</li></ul></div><h3 id="\u526F\u4F5C\u7528\u51FD\u6570\u6CE8\u518C\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u526F\u4F5C\u7528\u51FD\u6570\u6CE8\u518C\u673A\u5236" aria-hidden="true">#</a> \u526F\u4F5C\u7528\u51FD\u6570\u6CE8\u518C\u673A\u5236</h3><details class="custom-container details"><summary>\u6CE8\u518C\u526F\u4F5C\u7528\u51FD\u6570</summary><p>\u57FA\u672C\u5B9E\u73B0\u786C\u7F16\u7801\u4E86\u526F\u4F5C\u7528\u51FD\u6570\u7684\u540D\u5B57\uFF08effect\uFF09\uFF0C\u5B83\u751A\u81F3\u8FD8\u6709\u53EF\u80FD\u4E3A\u533F\u540D\u51FD\u6570\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A\u7528\u6765\u6CE8\u518C\u526F\u4F5C\u7528\u51FD\u6570\u7684\u673A\u5236\uFF1A</p><ol><li><strong>\u624B\u52A8\u6267\u884C</strong> effect \u6CE8\u518C\u526F\u4F5C\u7528\u51FD\u6570</li><li>\u5148\u628A\u526F\u4F5C\u7528\u51FD\u6570\u8D4B\u503C\u5230\u5168\u5C40\u53D8\u91CF activeEffect</li><li>\u7136\u540E\u6267\u884C\u771F\u6B63\u7684\u526F\u4F5C\u7528\u51FD\u6570\u89E6\u53D1 Proxy \u7684 get</li><li>get \u62E6\u622A\u5668\u76F4\u63A5\u8BFB\u53D6\u5168\u5C40\u53D8\u91CF\u5B9E\u73B0\u4F9D\u8D56\u6536\u96C6\uFF1Atrack(target, key)</li></ol></details><h3 id="weakmap" tabindex="-1"><a class="header-anchor" href="#weakmap" aria-hidden="true">#</a> WeakMap</h3>`,18),i=a("\u{1F310} "),r={href:"https://www.ijerrychen.com/javascript/map.html#weakmap",target:"_blank",rel:"noopener noreferrer"},f=a("WeakMap (opens new window)"),d=s(`<p>WeakMap \u5BF9 key \u662F\u5F31\u5F15\u7528\uFF0C\u4E0D\u5F71\u54CD\u5783\u573E\u56DE\u6536\u7684\u5DE5\u4F5C\u3002\u6839\u636E\u8FD9\u4E2A\u7279\u6027\u53EF\u77E5\uFF0C\u4E00\u65E6 key \u88AB\u5783\u573E\u56DE\u6536\u5668\u56DE\u6536\uFF0C\u90A3\u4E48\u5BF9\u5E94\u7684\u952E\u548C\u503C\u5C31\u8BBF\u95EE\u4E0D\u5230\u4E86\u3002</p><p>\u6240\u4EE5 WeakMap \u7ECF\u5E38\u7528\u4E8E\u5B58\u50A8\u90A3\u4E9B\u53EA\u6709\u5F53 key \u6240\u5F15\u7528\u7684\u5BF9\u8C61\u5B58\u5728\u65F6\uFF08\u6CA1\u6709\u88AB\u56DE\u6536\uFF09\u624D\u6709\u4EF7\u503C\u7684\u4FE1\u606F\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5B58\u50A8\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6876</span>
<span class="token keyword">const</span> bucket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u539F\u59CB\u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;hello world&#39;</span> <span class="token punctuation">}</span>
<span class="token comment">// \u5BF9\u539F\u59CB\u6570\u636E\u7684\u4EE3\u7406</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u62E6\u622A\u8BFB\u53D6\u64CD\u4F5C</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06\u526F\u4F5C\u7528\u51FD\u6570 activeEffect \u6DFB\u52A0\u5230\u5B58\u50A8\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6876\u4E2D</span>
    <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token comment">// \u8FD4\u56DE\u5C5E\u6027\u503C</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u62E6\u622A\u8BBE\u7F6E\u64CD\u4F5C</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u5C5E\u6027\u503C</span>
    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal
    <span class="token comment">// \u628A\u526F\u4F5C\u7528\u51FD\u6570\u4ECE\u6876\u91CC\u53D6\u51FA\u5E76\u6267\u884C</span>
    <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">track</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> depsMap <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bucket<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">(</span>depsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> deps <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    depsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span>deps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  deps<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> depsMap <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">const</span> effects <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  effects <span class="token operator">&amp;&amp;</span> effects<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7528\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u5B58\u50A8\u5F53\u524D\u6FC0\u6D3B\u7684 effect \u51FD\u6570</span>
<span class="token keyword">let</span> activeEffect
<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5F53\u8C03\u7528 effect \u6CE8\u518C\u526F\u4F5C\u7528\u51FD\u6570\u65F6\uFF0C\u5C06\u526F\u4F5C\u7528\u51FD\u6570\u590D\u5236\u7ED9 activeEffect</span>
  activeEffect <span class="token operator">=</span> fn
  <span class="token comment">// \u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>WeakMap =&gt; Map =&gt; Set</p></blockquote><h2 id="\u5206\u652F\u5207\u6362\u4E0Ecleanup" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u5207\u6362\u4E0Ecleanup" aria-hidden="true">#</a> \u5206\u652F\u5207\u6362\u4E0Ecleanup</h2><h3 id="\u5206\u652F\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u5207\u6362" aria-hidden="true">#</a> \u5206\u652F\u5207\u6362</h3><ul><li>\u4E09\u5143\u8868\u8FBE\u5F0F\u9996\u6B21\u771F\u503C\u4F1A\u5BFC\u81F4 data \u7684\u4E24\u4E2A\u5B57\u6BB5\u90FD\u628A\u5F53\u524D\u526F\u4F5C\u7528\u51FD\u6570\u6536\u96C6\u4E3A\u4F9D\u8D56\uFF0C\u4E5F\u5C31\u662F\u8BF4 data \u4EFB\u4F55\u4E00\u4E2A\u5B57\u6BB5\u7684\u66F4\u6539\u90FD\u4F1A\u5BFC\u81F4\u526F\u4F5C\u7528\u51FD\u6570\u7684\u91CD\u65B0\u6267\u884C</li><li>\u4F46\u662F\uFF0C\u5F53 ok \u6539\u53D8\u4E3A false \uFF0C\u8FD9\u91CC\u4EA7\u751F\u4E86\u9057\u7559\u7684\u526F\u4F5C\u7528\u51FD\u6570\u3002\u5B9E\u9645\u4E0A\u6211\u4EEC\u5E0C\u671B\u53EA\u6709 text \u5B57\u6BB5\u4FDD\u7559\u7740\u5F53\u524D\u8FD9\u4E2A\u526F\u4F5C\u7528\u51FD\u6570\u4F9D\u8D56\u3002</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">/*...*/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">effect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerText <span class="token operator">=</span> obj<span class="token punctuation">.</span>ok <span class="token operator">?</span> obj<span class="token punctuation">.</span>text <span class="token operator">:</span> <span class="token string">&#39;not&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u9700\u8981<strong>\u91CD\u65B0\u5EFA\u7ACB\u8054\u7CFB</strong>\uFF0C\u5728\u526F\u4F5C\u7528\u51FD\u6570\u6267\u884C\u65F6\uFF0C\u5148\u628A\u5B83\u4E0E\u6240\u6709\u5173\u8054\u7684\u4F9D\u8D56\u96C6\u5408\u4E2D\u5220\u9664\uFF0C\u6267\u884C\u540E\u4FBF\u91CD\u65B0\u6536\u96C6\u4E86\u65B0\u4E00\u8F6E\u7684\u4F9D\u8D56\u3002</p><p>\u2705\u589E\u52A0 activeEffect.deps \u7528\u6765\u5B58\u50A8\u6240\u6709\u4E0E\u8BE5\u526F\u4F5C\u7528\u51FD\u6570\u76F8\u5173\u7684\u4F9D\u8D56\u96C6\u5408</p><h3 id="set-\u5FAA\u73AF\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#set-\u5FAA\u73AF\u95EE\u9898" aria-hidden="true">#</a> Set \u5FAA\u73AF\u95EE\u9898</h3><p>\u5728\u8C03\u7528 forEach \u904D\u5386 Set \u96C6\u5408\u65F6\uFF0C\u5982\u679C\u4E00\u4E2A\u503C\u5DF2\u7ECF\u88AB\u8BBF\u95EE\u8FC7\uFF0C\u4F46\u8BE5\u503C\u88AB\u5220\u9664\u5E76\u91CD\u65B0\u6DFB\u52A0\u5230\u96C6\u5408\uFF0C\u5982\u679C\u6B64\u65F6 forEach \u904D\u5386\u6CA1\u6709\u7ED3\u675F\uFF0C\u90A3\u4E48\u8BE5\u503C\u4F1A\u88AB\u91CD\u65B0\u8BBF\u95EE\u3002</p><p>\u2705\u8FD9\u79CD\u60C5\u51B5\u4E0B\u4F1A\u51FA\u73B0\u6B7B\u5FAA\u73AF\uFF0C\u53EF\u4EE5\u6784\u9020\u4E00\u4E2A\u989D\u5916\u7684 Set \u96C6\u5408\u5E76\u904D\u5386\u5B83</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> newSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span>
newSet<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  set<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><blockquote><p>chrome \u8C03\u8BD5\u76EE\u524D\u597D\u50CF\u6CA1\u6709\u590D\u73B0\u8FD9\u4E2A\u95EE\u9898</p></blockquote><h3 id="\u6700\u7EC8\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u6700\u7EC8\u4EE3\u7801" aria-hidden="true">#</a> \u6700\u7EC8\u4EE3\u7801</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5B58\u50A8\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6876</span>
<span class="token keyword">const</span> bucket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u539F\u59CB\u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;hello world&#39;</span> <span class="token punctuation">}</span>
<span class="token comment">// \u5BF9\u539F\u59CB\u6570\u636E\u7684\u4EE3\u7406</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u62E6\u622A\u8BFB\u53D6\u64CD\u4F5C</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06\u526F\u4F5C\u7528\u51FD\u6570 activeEffect \u6DFB\u52A0\u5230\u5B58\u50A8\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6876\u4E2D</span>
    <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token comment">// \u8FD4\u56DE\u5C5E\u6027\u503C</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u62E6\u622A\u8BBE\u7F6E\u64CD\u4F5C</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u5C5E\u6027\u503C</span>
    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal
    <span class="token comment">// \u628A\u526F\u4F5C\u7528\u51FD\u6570\u4ECE\u6876\u91CC\u53D6\u51FA\u5E76\u6267\u884C</span>
    <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">track</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> depsMap <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bucket<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">(</span>depsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> deps <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    depsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span>deps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  deps<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span>
  activeEffect<span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>deps<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> depsMap <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">const</span> effects <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
	<span class="token comment">// \u58F0\u660E\u4E00\u4E2A\u65B0 Set \u8FDB\u884C\u904D\u5386\u64CD\u4F5C</span>
  <span class="token keyword">const</span> effectsToRun <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  effects <span class="token operator">&amp;&amp;</span> effects<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">effectFn</span> <span class="token operator">=&gt;</span> effectsToRun<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// effectFn() \u7684\u6267\u884C\u4F1A\u91CD\u65B0\u89E6\u53D1\u4F9D\u8D56\u6536\u96C6 track</span>
  effectsToRun<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">effectFn</span> <span class="token operator">=&gt;</span> <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// effects &amp;&amp; effects.forEach(effectFn =&gt; effectFn())</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7528\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u5B58\u50A8\u5F53\u524D\u6FC0\u6D3B\u7684 effect \u51FD\u6570</span>
<span class="token keyword">let</span> activeEffect
<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">effectFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">cleanup</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>  <span class="token comment">// \u8C03\u7528 cleanup\u5B8C\u6210\u6E05\u9664\u5DE5\u4F5C</span>
    <span class="token comment">// \u5F53\u8C03\u7528 effect \u6CE8\u518C\u526F\u4F5C\u7528\u51FD\u6570\u65F6\uFF0C\u5C06\u526F\u4F5C\u7528\u51FD\u6570\u590D\u5236\u7ED9 activeEffect</span>
    activeEffect <span class="token operator">=</span> effectFn
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// \u4F9D\u8D56\u6536\u96C6</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// activeEffect.deps \u7528\u6765\u5B58\u50A8\u6240\u6709\u4E0E\u8BE5\u526F\u4F5C\u7528\u51FD\u6570\u76F8\u5173\u7684\u4F9D\u8D56\u96C6\u5408</span>
  effectFn<span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// \u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570</span>
  <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">cleanup</span><span class="token punctuation">(</span><span class="token parameter">effectFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> effectFn<span class="token punctuation">.</span>deps<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// deps \u5373\u67D0\u4E2A\u5BF9\u8C61\u5C5E\u6027\u4E0B\u7684\u4F9D\u8D56\u6876</span>
    <span class="token keyword">const</span> deps <span class="token operator">=</span> effectFn<span class="token punctuation">.</span>deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    deps<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  effectFn<span class="token punctuation">.</span>deps<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">// \u6700\u540E\u9700\u8981\u91CD\u7F6E effectFn.deps \u6570\u7EC4</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div></div><h2 id="\u5D4C\u5957\u7684-effect-\u4E0E-effect-\u6808" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u7684-effect-\u4E0E-effect-\u6808" aria-hidden="true">#</a> \u5D4C\u5957\u7684 effect \u4E0E effect \u6808</h2><p>\u7EC4\u4EF6\u5D4C\u5957\u5C31\u4F1A\u51FA\u73B0 effect \u7684\u5D4C\u5957\uFF0C\u5168\u5C40\u53D8\u91CF activeEffect \u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u4F1A\u88AB\u5D4C\u5957\u7684 effect \u8986\u76D6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E2A<strong>\u51FD\u6570\u6808</strong>\u89E3\u51B3</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u7528\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u5B58\u50A8\u5F53\u524D\u6FC0\u6D3B\u7684 effect \u51FD\u6570</span>
<span class="token keyword">let</span> activeEffect
<span class="token comment">// effect \u6808</span>
<span class="token keyword">const</span> effectStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">effectFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">cleanup</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
    <span class="token comment">// \u5F53\u8C03\u7528 effect \u6CE8\u518C\u526F\u4F5C\u7528\u51FD\u6570\u65F6\uFF0C\u5C06\u526F\u4F5C\u7528\u51FD\u6570\u590D\u5236\u7ED9 activeEffect</span>
    activeEffect <span class="token operator">=</span> effectFn
    <span class="token comment">// \u5728\u8C03\u7528\u526F\u4F5C\u7528\u51FD\u6570\u4E4B\u524D\u5C06\u5F53\u524D\u526F\u4F5C\u7528\u51FD\u6570\u538B\u6808</span>
    effectStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5728\u5F53\u524D\u526F\u4F5C\u7528\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u5C06\u5F53\u524D\u526F\u4F5C\u7528\u51FD\u6570\u5F39\u51FA\u6808\uFF0C\u5E76\u8FD8\u539F activeEffect \u4E3A\u4E4B\u524D\u7684\u503C</span>
    effectStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    activeEffect <span class="token operator">=</span> effectStack<span class="token punctuation">[</span>effectStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// activeEffect.deps \u7528\u6765\u5B58\u50A8\u6240\u6709\u4E0E\u8BE5\u526F\u4F5C\u7528\u51FD\u6570\u76F8\u5173\u7684\u4F9D\u8D56\u96C6\u5408</span>
  effectFn<span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// \u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570</span>
  <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div></div><h2 id="\u907F\u514D\u65E0\u9650\u9012\u5F52\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u907F\u514D\u65E0\u9650\u9012\u5F52\u5FAA\u73AF" aria-hidden="true">#</a> \u907F\u514D\u65E0\u9650\u9012\u5F52\u5FAA\u73AF</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>foo<span class="token operator">++</span><span class="token punctuation">)</span>
</code></pre></div><p>\u2705 \u5F53\u526F\u4F5C\u7528\u51FD\u6570\u5185<strong>\u540C\u65F6</strong>\u53D1\u751F\u4E86<strong>\u8BFB\u548C\u5199</strong>\uFF0C\u4F1A\u5BFC\u81F4 get \u4E0E set \u7684\u6B7B\u5FAA\u73AF\uFF0C\u6211\u4EEC\u9700\u8981\u4E3A trigger \u7684\u6267\u884C\u589E\u52A0\u5B88\u536B\u6761\u4EF6\uFF1A\u5982\u679C trigger \u89E6\u53D1\u6267\u884C\u7684\u526F\u4F5C\u7528\u51FD\u6570\u4E0E\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u526F\u4F5C\u7528\u51FD\u6570\u76F8\u540C\uFF0C\u5219\u4E0D\u6267\u884C\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> depsMap <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">const</span> effects <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

  <span class="token keyword">const</span> effectsToRun <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  effects <span class="token operator">&amp;&amp;</span> effects<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">effectFn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B88\u536B\u6761\u4EF6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectFn <span class="token operator">!==</span> activeEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      effectsToRun<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  effectsToRun<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">effectFn</span> <span class="token operator">=&gt;</span> <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div></div><h2 id="\u8C03\u5EA6\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u8C03\u5EA6\u6267\u884C" aria-hidden="true">#</a> \u8C03\u5EA6\u6267\u884C</h2><p>\u2705 <strong>\u53EF\u8C03\u5EA6</strong>\u5C31\u662F\u6307\u5F53 trigger \u52A8\u4F5C\u89E6\u53D1\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6267\u884C\u65F6\uFF0C\u6709\u80FD\u529B\u51B3\u5B9A\u526F\u4F5C\u7528\u51FD\u6570\u6267\u884C\u7684<strong>\u65F6\u673A</strong>\u3001<strong>\u6B21\u6570</strong>\u4EE5\u53CA<strong>\u65B9\u5F0F</strong>\u3002</p><details class="custom-container details"><summary>\u8C03\u5EA6\u5668\u7684\u5B9E\u73B0</summary><p>\u5728\u6267\u884C effect \u51FD\u6570\u7684\u65F6\u5019\u83B7\u5F97\u4E00\u4E9B\u989D\u5916\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u4E3A effectFn \u589E\u52A0\u4E00\u4E2A\u989D\u5916\u7684\u914D\u7F6E\u5373\u53EF\uFF1A</p><ol><li>\u5728 effect \u526F\u4F5C\u7528\u51FD\u6570\u6CE8\u518C\u7684\u65F6\u5019\u589E\u52A0\u914D\u7F6E\u53C2\u6570\uFF1Aoptions.scheduler</li><li>trigger \u6267\u884C\u65F6\uFF0C\u5982\u679C\u6709 scheduler \u5219\u4F7F\u7528\u5B83\u8C03\u5EA6\u6267\u884C</li></ol></details><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> bucket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal
        <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">track</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>activeEffect<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">let</span> depsMap <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        bucket<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">(</span>depsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> deps <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        depsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span>deps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    deps<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span>
    activeEffect<span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>deps<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> depsMap <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">const</span> effects <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

    <span class="token keyword">const</span> effectsToRun <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    effects <span class="token operator">&amp;&amp;</span> effects<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">effectFn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>effectFn <span class="token operator">!==</span> activeEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            effectsToRun<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    effectsToRun<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">effectFn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>effectFn<span class="token punctuation">.</span>options<span class="token punctuation">.</span>scheduler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            effectFn<span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">scheduler</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">let</span> activeEffect
<span class="token keyword">const</span> effectStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">effectFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">cleanup</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
        activeEffect <span class="token operator">=</span> effectFn
        effectStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        effectStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        activeEffect <span class="token operator">=</span> effectStack<span class="token punctuation">[</span>effectStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>

        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    effectFn<span class="token punctuation">.</span>options <span class="token operator">=</span> options
    effectFn<span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> effectFn
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">cleanup</span><span class="token punctuation">(</span><span class="token parameter">effectFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> effectFn<span class="token punctuation">.</span>deps<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> deps <span class="token operator">=</span> effectFn<span class="token punctuation">.</span>deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        deps<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    effectFn<span class="token punctuation">.</span>deps<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><h3 id="\u7F13\u51B2\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u7F13\u51B2\u961F\u5217" aria-hidden="true">#</a> \u7F13\u51B2\u961F\u5217</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> jobQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> isFlushing <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">function</span> <span class="token function">flushJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isFlushing<span class="token punctuation">)</span> <span class="token keyword">return</span>
    isFlushing <span class="token operator">=</span> <span class="token boolean">true</span>
    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5C06\u4EFB\u52A1\u653E\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u6267\u884C</span>
        jobQueue<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">job</span> <span class="token operator">=&gt;</span> <span class="token function">job</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        isFlushing <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">scheduler</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        jobQueue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
        <span class="token function">flushJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>foo<span class="token operator">++</span>
obj<span class="token punctuation">.</span>foo<span class="token operator">++</span>  <span class="token comment">// 3</span>
</code></pre></div><blockquote><p>\u4EE5\u4E0A\u8C03\u5EA6\u5668\u5B9E\u73B0\uFF1A\u5C5E\u6027\u4FEE\u6539\u4E24\u6B21\uFF0C\u4E2D\u95F4\u7684 2 \u8FC7\u6E21\u72B6\u6001\u5BF9\u5E94\u7684\u4F9D\u8D56\u66F4\u65B0\u5FFD\u7565\u4E0D\u6267\u884C</p><p>\u4E24\u4E2A\u526F\u4F5C\u7528\u51FD\u6570\u653E\u5230\u7F13\u51B2\u961F\u5217\u4E2D\uFF0C\u4E24\u6B21\u6570\u636E\u66F4\u65B0\u540E\uFF0C\u5728\u5FAE\u4EFB\u52A1\u5F53\u4E2D\u4E00\u6B21\u6267\u884C</p></blockquote><h2 id="\u8BA1\u7B97\u5C5E\u6027-computed-\u4E0E-lazy" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u5C5E\u6027-computed-\u4E0E-lazy" aria-hidden="true">#</a> \u8BA1\u7B97\u5C5E\u6027 computed \u4E0E lazy</h2><details class="custom-container details"><summary>\u8BA1\u7B97\u5C5E\u6027\u7684\u5B9E\u73B0\uFF1A</summary><ol><li><strong>\u61D2\u8BA1\u7B97</strong>\uFF1A\u8BA1\u7B97\u5C5E\u6027\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u5728\u9700\u8981\u7684\u65F6\u5019\u624D\u6267\u884C\u3002\u6211\u4EEC\u901A\u8FC7\u4E3A option \u6DFB\u52A0 lazy \u5C5E\u6027\u6765\u8FBE\u5230\u76EE\u7684\uFF1B\u540C\u65F6\uFF0C\u8BA1\u7B97\u5C5E\u6027\u5B9E\u9645\u4E0A\u5C31\u662F\u526F\u4F5C\u7528\u51FD\u6570\uFF08getter\uFF09\u7684\u6267\u884C\u7ED3\u679C\uFF0C\u6211\u4EEC\u9700\u8981\u8C03\u6574\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6CE8\u518C\u4EE3\u7801\uFF0C\u8FD4\u56DE\u771F\u6B63\u526F\u4F5C\u7528\u51FD\u6570\u7684\u7ED3\u679C\u3002</li><li><strong>\u503C\u7F13\u5B58</strong>\uFF1A\u8BA1\u7B97\u5C5E\u6027\u5728 getter \u51FD\u6570\u6240\u4F9D\u8D56\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u53D8\u5316\u65F6\u624D\u9700\u8981\u771F\u6B63\u6267\u884C\uFF0C\u800C\u4E0D\u662F\u6BCF\u6B21\u83B7\u53D6 computed \u5C5E\u6027\u65F6\u90FD\u9700\u8981\u6267\u884C\u4E00\u6B21\u526F\u4F5C\u7528\u51FD\u6570\u3002\u4E3A\u8BA1\u7B97\u5C5E\u6027\u6DFB\u52A0 value \u5B57\u6BB5\u4FDD\u5B58\u6267\u884C\u7ED3\u679C\uFF0C\u540C\u65F6\u6DFB\u52A0 dirty \u5C5E\u6027\uFF0C\u5728\u4F9D\u8D56\u7684\u6570\u636E\u53D8\u5316\u65F6\u66F4\u6539 dirty \u4E3A true\u3002\u8FD9\u6837\uFF0C\u4E0B\u6B21\u8BFB\u53D6\u8BA1\u7B97\u5C5E\u6027\u7684\u503C\u65F6\uFF0C\u6211\u4EEC\u4F1A\u91CD\u65B0\u8BA1\u7B97\u771F\u6B63\u7684\u503C\u3002</li><li><strong>\u54CD\u5E94\u5F0F</strong>\uFF1A\u8BA1\u7B97\u5C5E\u6027\u4E5F\u8981\u80FD\u591F\u66F4\u65B0\u5BF9\u5E94\u7684\u526F\u4F5C\u7528\u51FD\u6570\u3002\u5728\u5176 value \u8BFB\u53D6\u65F6\uFF0C\u624B\u52A8\u8C03\u7528 track \u51FD\u6570\u8FDB\u884C\u8FFD\u8E2A\uFF0C\u6536\u96C6\u4F9D\u8D56\uFF1B\u5728\u8BA1\u7B97\u5C5E\u6027\u4F9D\u8D56\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u624B\u52A8\u8C03\u7528 trigger\u51FD\u6570\u89E6\u53D1\u54CD\u5E94\u3002</li></ol></details><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token parameter">getter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> value
  <span class="token keyword">let</span> dirty <span class="token operator">=</span> <span class="token boolean">true</span>

  <span class="token keyword">const</span> effectFn <span class="token operator">=</span> <span class="token function">effect</span><span class="token punctuation">(</span>getter<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// scheduler(effectFn)\u5185\u90E8\u867D\u7136\u80FD\u62FF\u5230 getter \u5173\u8054\u6570\u636E\u7684\u526F\u4F5C\u7528\u51FD\u6570\uFF0C\u4F46\u4E0D\u9700\u8981\uFF0C\u5B83\u4EEC\u6709\u81EA\u5DF1\u7684\u66F4\u65B0\u903B\u8F91</span>
    <span class="token comment">// \u8BA1\u7B97\u5C5E\u6027\u53EA\u9700\u8981\u5173\u6CE8\u81EA\u5DF1\u7684effectFn\u8FDB\u884C\u66F4\u65B0\u5373\u53EF\uFF0C\u5F53\u5173\u8054\u6570\u636E\u66F4\u65B0\u65F6\uFF0Cdirty \u8BBE\u4E3A true\uFF0C\u4E5F\u5C31\u662F\u8981\u91CD\u65B0\u8BA1\u7B97</span>
    <span class="token function">scheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dirty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dirty <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token function">trigger</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dirty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        dirty <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
      <span class="token function">track</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> obj
<span class="token punctuation">}</span>

<span class="token keyword">const</span> sumRes <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>foo <span class="token operator">+</span> obj<span class="token punctuation">.</span>bar<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sumRes<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sumRes<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>foo<span class="token operator">++</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sumRes<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sumRes<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>foo<span class="token operator">++</span>
</code></pre></div><h2 id="watch-\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#watch-\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> watch \u7684\u5B9E\u73B0\u539F\u7406</h2><details class="custom-container details"><summary>watch \u7684\u5B9E\u73B0</summary><ol><li>watch \u53EF\u4EE5\u89C2\u6D4B\u54CD\u5E94\u5F0F\u6570\u636E\u6216\u8005\u4E00\u4E2A getter \u51FD\u6570\uFF1Atraverse\u51FD\u6570</li><li>\u56DE\u8C03\u51FD\u6570\u4E2D\u8981\u80FD\u591F\u62FF\u5230\u65B0\u503C\u4E0E\u65E7\u503C</li><li>immediate \u51B3\u5B9A\u662F\u5426\u9700\u8981\u7ACB\u5373\u6267\u884C\u56DE\u8C03\uFF0C\u6B64\u65F6\u65E7\u503C\u65F6 undefined</li><li>flush \u51B3\u5B9A\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u65F6\u673A\uFF1A\u901A\u8FC7\u8C03\u5EA6\u5668\u548C\u5F02\u6B65\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\u5B9E\u73B0 post</li></ol><p>\u2705 watch \u7684\u5B9E\u73B0\u672C\u8D28\u4E0A\u5229\u7528\u4E86\u526F\u4F5C\u7528\u51FD\u6570\u91CD\u65B0\u6267\u884C\u65F6\u7684<strong>\u53EF\u8C03\u5EA6\u6027</strong>\u3002\u4E00\u4E2A watch \u672C\u8EAB\u4F1A\u521B\u5EFA\u4E00\u4E2A effect\uFF0C\u5F53\u8FD9\u4E2A effect \u4F9D\u8D56\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u6267\u884C\u8BE5 effect \u7684\u8C03\u5EA6\u5668\u51FD\u6570\uFF0C\u5373 scheduler\u3002\u8FD9\u91CC\u7684 scheduler \u53EF\u4EE5\u7406\u89E3\u4E3A\u201C\u56DE\u8C03\u201D\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u8981\u5728 scheduler \u4E2D\u6267\u884C\u7528\u6237\u901A\u8FC7 watch \u51FD\u6570\u6CE8\u518C\u7684\u56DE\u8C03\u51FD\u6570\u5373\u53EF</p></details><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u89C2\u6D4B\u53C2\u6570\u5904\u7406</span>
<span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> seen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> value <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> seen<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  seen<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> k <span class="token keyword">in</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> seen<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">watch</span><span class="token punctuation">(</span><span class="token parameter">source<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> getter
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> source <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    getter <span class="token operator">=</span> source
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">getter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">traverse</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> oldValue<span class="token punctuation">,</span> newValue

  <span class="token comment">// \u6267\u884C\u56DE\u8C03\uFF0C\u4F20\u9012\u65B0\u503C\u4E0E\u65E7\u503C</span>
  <span class="token keyword">const</span> <span class="token function-variable function">job</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    newValue <span class="token operator">=</span> <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">cb</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
    oldValue <span class="token operator">=</span> newValue
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> effectFn <span class="token operator">=</span> <span class="token function">effect</span><span class="token punctuation">(</span>
    <span class="token comment">// \u6267\u884C getter</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">getter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">scheduler</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>flush <span class="token operator">===</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>job<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">job</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">job</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    oldValue <span class="token operator">=</span> <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>foo<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">flush</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span>foo<span class="token operator">++</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u8FC7\u671F\u7684\u526F\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u671F\u7684\u526F\u4F5C\u7528" aria-hidden="true">#</a> \u8FC7\u671F\u7684\u526F\u4F5C\u7528</h2><p><strong>\u7ADE\u6001\u95EE\u9898</strong>\u5BF9\u5E94\u524D\u7AEF\u4E5F\u6709\u53D1\u751F\u7684\u573A\u666F\uFF0C\u6BD4\u5982 watch \u89C2\u6D4B \u54CD\u5E94\u5F0F\u6570\u636E\u7684\u53D8\u5316\uFF1A\u56DE\u8C03\u51FD\u6570\u4E2D\u6267\u884C\u5F02\u6B65\u6570\u636E\u8BF7\u6C42\u64CD\u4F5C\uFF0C\u5982\u679C\u56E0\u4E3A\u7F51\u7EDC\u95EE\u9898\u6216\u5176\u4ED6\u5BFC\u81F4\u524D\u9762\u7684\u8BF7\u6C42\u6BD4\u540E\u9762\u7684\u665A\u5230\uFF0C\u5C31\u4F1A\u51FA\u73B0\u6570\u636E\u66F4\u65B0\u9519\u4E71\u3002</p><p>\u2705 \u5F52\u6839\u7ED3\u5E95\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u8BA9\u526F\u4F5C\u7528\u51FD\u6570\u8FC7\u671F\u7684\u624B\u6BB5\uFF1Awatch \u5185\u90E8\u6BCF\u6B21\u68C0\u6D4B\u5230\u53D8\u66F4\u4E4B\u540E\uFF0C\u5728\u526F\u4F5C\u7528\u51FD\u6570\u91CD\u65B0\u6267\u884C\u4E4B\u524D\uFF0C\u5148\u8C03\u7528\u81EA\u5B9A\u4E49\u7684\u8FC7\u671F\u56DE\u8C03\u5373\u53EF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> seen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> value <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> seen<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    seen<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> k <span class="token keyword">in</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> seen<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> value
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">watch</span><span class="token punctuation">(</span><span class="token parameter">source<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> getter
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> source <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        getter <span class="token operator">=</span> source
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">getter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">traverse</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> oldValue<span class="token punctuation">,</span> newValue

    <span class="token keyword">let</span> cleanup
    <span class="token keyword">function</span> <span class="token function">onInvalidate</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cleanup <span class="token operator">=</span> fn
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">job</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        newValue <span class="token operator">=</span> <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cleanup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">cleanup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">cb</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> onInvalidate<span class="token punctuation">)</span>
        oldValue <span class="token operator">=</span> newValue
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> effectFn <span class="token operator">=</span> <span class="token function">effect</span><span class="token punctuation">(</span>
        <span class="token comment">// \u6267\u884C getter</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">getter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token function-variable function">scheduler</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>flush <span class="token operator">===</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>job<span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token function">job</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">job</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        oldValue <span class="token operator">=</span> <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">function</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">++</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> count <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">&#39;A&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;B&#39;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> count <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token number">1000</span> <span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> finallyData

<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>foo<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal<span class="token punctuation">,</span> onInvalidate</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> valid <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token function">onInvalidate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        valid <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>valid<span class="token punctuation">)</span> <span class="token keyword">return</span>

    finallyData <span class="token operator">=</span> res
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>finallyData<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>foo<span class="token operator">++</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    obj<span class="token punctuation">.</span>foo<span class="token operator">++</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br></div></div>`,41);function b(g,y){const t=u("ExternalLinkIcon");return o(),e("div",null,[k,n("p",null,[i,n("a",r,[f,c(t)])]),d])}var m=p(l,[["render",b],["__file","chapter4.html.vue"]]);export{m as default};
