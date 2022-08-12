import{_ as n,o as s,c as a,a as t}from"./app.4bbb0959.js";const p={},o=t(`<h1 id="vue-js-\u9AD8\u7EA7\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#vue-js-\u9AD8\u7EA7\u8BED\u6CD5" aria-hidden="true">#</a> Vue.js \u9AD8\u7EA7\u8BED\u6CD5</h1><h2 id="mixin-\u6DF7\u5165" tabindex="-1"><a class="header-anchor" href="#mixin-\u6DF7\u5165" aria-hidden="true">#</a> Mixin \u6DF7\u5165</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>myMixin<span class="token punctuation">]</span>    <span class="token comment">// \u5C40\u90E8\u7684mixin</span>
</code></pre></div><ul><li>\u7EC4\u4EF6data\u3001methods\u4F18\u5148\u7EA7\u9AD8\u4E8Emixin\u6570\u636E\u4F18\u5148\u7EA7 (\u5408\u5E76\u7B56\u7565\uFF1A\u8986\u76D6)</li><li>\u58F0\u660E\u5468\u671F\u51FD\u6570\uFF0C\u5148\u6267\u884Cmixin\u91CC\u9762\u7684\uFF0C\u518D\u6267\u884C\u7EC4\u4EF6\u91CC\u9762\u7684</li></ul><h3 id="\u5168\u5C40mixin" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40mixin" aria-hidden="true">#</a> \u5168\u5C40mixin</h3><ul><li>\u5C40\u90E8\u7684mixin\u53EA\u80FD\u5728\u6DF7\u5165\u7684\u7EC4\u4EF6\u5185\u4F7F\u7528mixin\u7684\u5185\u5BB9</li><li>\u5168\u5C40\u7684mixin\u53EF\u4EE5\u5728\u4EFB\u4F55\u7EC4\u4EF6\u4F4D\u7F6E\u5185\u4F7F\u7528\uFF08\u81EA\u52A8\u6CE8\u5165\uFF09</li><li>\u4EE3\u7801\u7EF4\u62A4\u6027\u4E0D\u9AD8</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token comment">// ...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token comment">// ...  </span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u81EA\u5B9A\u4E49\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u4F18\u5148\u7EA7</h3><p>\u81EA\u5B9A\u4E49\u5C5E\u6027\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8Emixin\u5C5E\u6027\u7684\u4F18\u5148\u7EA7 \uFF08\u548Cdata\u3001methods\u4E00\u6837\uFF09</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> myMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">minxins</span><span class="token operator">:</span> <span class="token punctuation">[</span>myMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;{{ this.$options.number }} &lt;/div&gt;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4EE5\u4E0A\u9875\u9762\u5C06\u4F1A\u5C55\u793A <strong>2</strong>\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u91CD\u5199\u5C5E\u6027\u7684\u5408\u5E76\u7B56\u7565\uFF0C\u5728\u58F0\u660EoptionMergeStrategies\u7684number\u5408\u5E76\u7B56\u7565\u540E\uFF0C\u5C06\u663E\u793A <strong>1</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> myMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>myMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
    	&lt;div&gt;{{this.$options.number}}&lt;/div&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>optionMergeStrategies<span class="token punctuation">.</span><span class="token function-variable function">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">mixinVal<span class="token punctuation">,</span> appValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> mixinVal <span class="token operator">||</span> appValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u81EA\u5B9A\u4E49\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6307\u4EE4" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6307\u4EE4</h2><p>\u8F93\u5165\u6846\u81EA\u52A8\u805A\u7126</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
    	&lt;input ref=&quot;input&quot; /&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u81EA\u52A8\u805A\u7126\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u805A\u7126\u6307\u4EE4" aria-hidden="true">#</a> \u81EA\u52A8\u805A\u7126\u6307\u4EE4</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
    	&lt;input v-focus /&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F53\u5143\u7D20\u88AB\u6302\u8F7D\u5230\u9875\u9762dom\u4E4B\u540E\uFF0Cmounted\u51FD\u6570\u4F1A\u81EA\u52A8\u6267\u884C</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5C40\u90E8\u81EA\u5B9A\u4E49\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u81EA\u5B9A\u4E49\u6307\u4EE4" aria-hidden="true">#</a> \u5C40\u90E8\u81EA\u5B9A\u4E49\u6307\u4EE4</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> directives <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    directives<span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
    	&lt;input v-focus /&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u58F0\u660E\u5468\u671F\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5468\u671F\u51FD\u6570" aria-hidden="true">#</a> \u58F0\u660E\u5468\u671F\u51FD\u6570</h3><ol><li>\u6267\u884C<code>vm.$data.show = false</code>, beforeUpdate\u3001updated\u4F9D\u6B21\u6253\u5370 \uFF08display\u7684\u53D8\u5316\uFF09</li><li>\u5F53\u6539\u6210<code>v-if</code>\u65F6\uFF0CbeforeUnmount\u3001unmounted\u4F9D\u6B21\u6253\u5370</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> directives <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span>
            el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;beforeUpdate&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5143\u7D20\u5DF2\u7ECF\u91CD\u65B0\u66F4\u65B0\u6E32\u67D3</span>
        <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;updated&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">beforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;beforeUnmount&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">unmounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;unmounted&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    directives<span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
&lt;div&gt;
&lt;div v-show=&quot;show&quot;&gt;
&lt;input v-focus /&gt;
&lt;/div&gt;
&lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="teleport\u4F20\u9001\u95E8\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#teleport\u4F20\u9001\u95E8\u529F\u80FD" aria-hidden="true">#</a> Teleport\u4F20\u9001\u95E8\u529F\u80FD</h2><p>Teleport\u7EC4\u4EF6\u80FD\u591F\u5C06\u7EC4\u4EF6\u5185\u7684\u5185\u5BB9\u6302\u8F7D\u5230\u5176\u5B83\u786E\u5B9A\u7684DOM\u8282\u70B9\u4E0B\uFF0C\u5E76\u4E14\u6A21\u677F\u5185\u80FD\u591F\u4F7F\u7528\u5F53\u524D\u7EC4\u4EF6\u7684\u6570\u636E</p><p>\u4EE5\u4E0Bdemo\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u8499\u5C42\u7EC4\u4EF6\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleBtnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>show<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div class=&quot;area&quot;&gt;
        &lt;button @click=&quot;handleBtnClick&quot;&gt;\u6309\u94AE&lt;/button&gt;
        &lt;teleport to=&quot;#hello&quot;&gt;
        	&lt;div class=&quot;mask&quot; v-show=&quot;show&quot;&gt;{{message}}&lt;/div&gt;
        &lt;/teleport&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>css:</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.area</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mask</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="render\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#render\u51FD\u6570" aria-hidden="true">#</a> render\u51FD\u6570</h2><p>render\u51FD\u6570\u8FD4\u56DEvirtual dom\uFF0C\u9664\u4E86\u4F7F\u7528<strong>h</strong>\u51FD\u6570\u751F\u6210vnode\u4E4B\u5916\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5199vnode\u8282\u70B9\u8FD4\u56DE</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// render function</span>
<span class="token comment">// template -&gt; render -&gt; h -&gt; \u865A\u62DFDOM\uFF08JS\u5BF9\u8C61\uFF09-&gt; \u771F\u5B9E DOM -&gt; \u5C55\u793A\u5230\u9875\u9762\u4E0A</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;my-title :level=&quot;2&quot;&gt;
    	hello dell
    &lt;/my-title&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-title&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;level&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;h&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;h4&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;dell&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u76F4\u63A5\u8FD4\u56DEvnode:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> icon<span class="token punctuation">,</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> context<span class="token punctuation">.</span>props<span class="token punctuation">;</span>
    <span class="token keyword">const</span> vnodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>icon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>icon<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;el-icon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            vnodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>icon<span class="token punctuation">,</span> <span class="token string">&quot;sub-el-icon&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        	vnodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>svg<span class="token operator">-</span>icon icon<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token punctuation">{</span>icon<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>title<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	vnodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>span slot<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> vnodes<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u63D2\u4EF6\u7684\u5B9A\u4E49\u548C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u7684\u5B9A\u4E49\u548C\u4F7F\u7528" aria-hidden="true">#</a> \u63D2\u4EF6\u7684\u5B9A\u4E49\u548C\u4F7F\u7528</h2><h3 id="\u63D2\u4EF6\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u4ECB\u7ECD" aria-hidden="true">#</a> \u63D2\u4EF6\u4ECB\u7ECD</h3><ul><li>\u63D2\u4EF6plugin\u53EF\u4EE5\u662F\u4E00\u4E2A\u5305\u542Binstall\u65B9\u6CD5\u7684\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u662Finstall\u8FD9\u4E2A\u51FD\u6570</li><li>\u53C2\u6570app\u662FVue\u5B9E\u4F8B\uFF0Coptions\u662F\u63D2\u4EF6\u4F7F\u7528\u65F6\u4F20\u5165\u7684\u53C2\u6570<code>app.use(pluginName, options)</code></li><li>plugin \u63D2\u4EF6, \u4E5F\u662F\u628A\u901A\u7528\u6027\u7684\u529F\u80FD\u5C01\u88C5\u8D77\u6765</li><li>vue\u5168\u5C40\u5C5E\u6027\uFF1A<strong>app.config.globalProperties</strong></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> myPlugin <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Dell Lee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mixin&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$sayHello <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
		&lt;my-title /&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-title&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$sayHello<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;{{name}}&lt;input v-focus /&gt;&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>myPlugin<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dell&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6570\u636E\u6821\u9A8C\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6821\u9A8C\u63D2\u4EF6" aria-hidden="true">#</a> \u6570\u636E\u6821\u9A8C\u63D2\u4EF6</h3><ul><li>\u5C5E\u6027\u5185\u589E\u52A0<strong>rules</strong>\u5C5E\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7<strong>this.$options.rules</strong>\u83B7\u53D6</li><li>\u63D2\u4EF6\u5185\u4F7F\u7528mixin\u5728created\u5BF9\u9700\u8981\u6821\u9A8C\u7684\u5C5E\u6027\u589E\u52A0watcher\uFF0C\u4E0D\u7B26\u5408validator\u65F6\u6253\u5370\u9519\u8BEF\u4FE1\u606F</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dell&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">validate</span><span class="token operator">:</span> <span class="token parameter">age</span> <span class="token operator">=&gt;</span> age <span class="token operator">&gt;</span> <span class="token number">25</span><span class="token punctuation">,</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;too young, to simple&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">validate</span><span class="token operator">:</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> name<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;name too short&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
		&lt;div&gt;name:{{name}}, age:{{age}}&lt;/div&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">validatorPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>rules<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>rules<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">const</span> result <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>validatorPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,40),e=[o];function c(u,l){return s(),a("div",null,e)}var k=n(p,[["render",c],["__file","advanced.html.vue"]]);export{k as default};
