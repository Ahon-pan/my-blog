<template><div><h1 id="异步组件与函数式组件" tabindex="-1"><a class="header-anchor" href="#异步组件与函数式组件" aria-hidden="true">#</a> 异步组件与函数式组件</h1>
<p><strong>异步组件</strong>：以异步的方式去加载并渲染一个组件；</p>
<p><strong>函数式组件</strong>：无状态，编写简单且直观。</p>
<h2 id="异步组件要解决的问题" tabindex="-1"><a class="header-anchor" href="#异步组件要解决的问题" aria-hidden="true">#</a> 异步组件要解决的问题</h2>
<p>✅ 异步组价在<strong>页面性能</strong>、<strong>拆包</strong>以及<strong>服务端下发组件</strong>等场景中尤为重要。</p>
<p>异步组件的实现实际上并不需要框架层面的支持，用户完全可以自行实现：</p>
<CodeGroup>
<CodeGroupItem title="同步App">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'App.vue'</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="异步App">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">loader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'App.vue'</span><span class="token punctuation">)</span>
<span class="token function">loader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">App</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="异步组件">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComA</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>asyncComp<span class="token punctuation">'</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> shallowRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> ComA <span class="token keyword">from</span> <span class="token string">'CompA.vue'</span>
    
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> ComA <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> asyncComp <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
        
        <span class="token comment">// 异步加载 ComB 组件</span>
        <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'CompB.vue'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">CompB</span> <span class="token operator">=></span> asyncComp<span class="token punctuation">.</span>value <span class="token operator">=</span> CompB<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> <span class="token punctuation">{</span> asyncComp <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>用户虽然可以自己实现组件的异步加载和渲染，但整体的实现还是比较复杂的。</p>
<div class="custom-container warning"><p class="custom-container-title">一个完善的异步组件还需要考虑以下几个方面：</p>
<ul>
<li>如果组件加载失败或加载超时，是否要渲染 Error 组件？</li>
<li>组件加载时，是否要显示占位的内容？例如渲染一个 loading 组件。</li>
<li>组件加载的速度可能很快，也可能很慢，是否要设置一个延迟展示 Loading 组件的时间？如果组件在 200ms 内没有加载成功才展示 Loading 组件，这样可以避免由组件加载过快所导致的闪烁。</li>
<li>组件加载失败后，是否需要重试？</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">我们需要在框架层面为异步组件提供更好的封装支持，与之对应能力如下：</p>
<ul>
<li>允许用户指定加载出错时要渲染的组件。</li>
<li>允许用户指定 Loading 组件，以及展示该组件的延迟时间。</li>
<li>允许用户设置加载组件的超时时长。</li>
<li>组件加载失败时，为用户提供重试的能力。</li>
</ul>
</div>
<h2 id="异步组件的实现原理" tabindex="-1"><a class="header-anchor" href="#异步组件的实现原理" aria-hidden="true">#</a> 异步组件的实现原理</h2>
<h3 id="封装-defineasynccomponent-函数" tabindex="-1"><a class="header-anchor" href="#封装-defineasynccomponent-函数" aria-hidden="true">#</a> 封装 defineAsyncComponent 函数</h3>
<p>异步组件本质上是通过封装手段来实现友好的用户接口，从而降低用户层面的使用复杂度。</p>
<CodeGroup>
<CodeGroupItem title="使用">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AsyncComp</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// defineAsyncComponent 定义异步组件，它接收一个加载器作为参数</span>
            <span class="token literal-property property">AsyncComp</span><span class="token operator">:</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'CompA'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="defineAsyncComponent">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// defineAsyncComponent 函数用于定义一个异步组件，它接收一个加载器作为参数</span>
<span class="token keyword">function</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token parameter">loader</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 一个存储异步组件的变量</span>
    <span class="token keyword">let</span> InnerComp <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token comment">// 返回一个包装组件</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'AsyncComponentWrapper'</span><span class="token punctuation">,</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 是否加载成功的标志</span>
            <span class="token keyword">const</span> loaded <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
            <span class="token comment">// 执行加载器，返回一个 Promise 实例</span>
            <span class="token function">loader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                InnerComp <span class="token operator">=</span> c
                loaded<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token comment">// 如果异步组件加载成功，则渲染该组件，否则渲染一个占位内容</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> loaded<span class="token punctuation">.</span>value 
                    <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> InnerComp <span class="token punctuation">}</span> 
                <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Text<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'...'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">defineAsyncComponent</p>
<ul>
<li>defineAsyncComponent 函数本质上是一个<strong>高阶组件</strong>，它的返回值是一个<strong>包装组件</strong>。</li>
<li>包装组件会根据加载器的内容来决定渲染什么内容。如果加载器成功地加载了组件，则渲染被加载的组件，否则会渲染一个占位内容。</li>
<li>通常占位内容是一个注释节点。组件没有被加载成功时，页面中会渲染一个注释节点来占位。这里使用了一个空文本节点来占位。</li>
</ul>
</div>
<h3 id="超时与-error-组件" tabindex="-1"><a class="header-anchor" href="#超时与-error-组件" aria-hidden="true">#</a> 超时与 Error 组件</h3>
<p>✅ 异步组件通常以<strong>网络请求</strong>的形式进行加载。前端发送一个 HTTP 请求，请求下载组件的 JavaScript 资源，或者从服务端直接获取组件数据。</p>
<p>网络请求可能会受网络环境的影响，由此我们需要为用户提供指定<strong>请求超长</strong>的能力，如果加载组件的时间超过了指定时长，会触发指定的错误。这时如果用户配置了 Error 组件，则会渲染该组件。</p>
<CodeGroup>
<CodeGroupItem title="用户接口">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token function-variable function">loader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'CompA.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 指定异步组价的加载器</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>  <span class="token comment">// 超时时长，单位为 ms</span>
    <span class="token literal-property property">errorComponent</span><span class="token operator">:</span> MyErrorComp  <span class="token comment">// 指定出错时要渲染的组件</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="defineAsyncComponent">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// options 可以是配置项，也可以是加载器</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        options <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> options
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> loader <span class="token punctuation">}</span> <span class="token operator">=</span> options
    <span class="token keyword">let</span> InnerComp <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'AsyncComponentWrapper'</span><span class="token punctuation">,</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> loaded <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
            <span class="token comment">// 代表是否超时</span>
            <span class="token keyword">const</span> timeout <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

            <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                InnerComp <span class="token operator">=</span> c
                loaded<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

            <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 如果指定了超时时长，则开启一个定时器</span>
                timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    timeout<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 包装组件被卸载时清除定时器</span>
            <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">)</span>

            <span class="token keyword">const</span> placeholder <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Text<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span>

            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>loaded<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 如果组件加载成功，则渲染被加载的组件</span>
                    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> InnerComp <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 如果加载超时，并且用户指定了 Error 组件，则渲染该组件</span>
                    <span class="token keyword">return</span> options<span class="token punctuation">.</span>errorComponent
                    <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> options<span class="token punctuation">.</span>errorComponent <span class="token punctuation">}</span> 
                    <span class="token operator">:</span> placeholder
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> placeholder
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>需要一个标志变量来标识异步组件的加载是否已经超时，即 <code v-pre>timeout.value</code>。</li>
<li>开始加载组件的同时，开启一个定时器进行计时。当加载超时之后，将 <code v-pre>timeout.value</code> 的值设置为 <code v-pre>true</code>，代表加载已经超时。这里需要注意的是，当包装组件被卸载时，需要清除定时器。</li>
<li>包租组件根据 <code v-pre>loaded</code> 变量的值以及 <code v-pre>timeout</code> 变量的值来决定具体的渲染内容。如果异步组件加载成功，则渲染被加载的组件；如果异步组件加载超时，并且用户指定了 Error 组件，则渲染 Error 组件。</li>
</ul>
</CodeGroupItem>
<CodeGroupItem title="代码优化">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// options 可以是配置项，也可以是加载器</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        options <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> options
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> loader <span class="token punctuation">}</span> <span class="token operator">=</span> options
    <span class="token keyword">let</span> InnerComp <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'AsyncComponentWrapper'</span><span class="token punctuation">,</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> loaded <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
            <span class="token comment">// 定义 error,当错误发生时，用来存储错误对象</span>
            <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

            <span class="token function">loader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                InnerComp <span class="token operator">=</span> c
                loaded<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token comment">// 添加 catch 语句来捕获加载过程中的错误</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> error<span class="token punctuation">.</span>value <span class="token operator">=</span> err<span class="token punctuation">)</span>

            <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token comment">// 创建一个超时 error 对象并赋值给 error.value</span>
                    <span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Async component timed out after </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>options<span class="token punctuation">.</span>timeout<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
                    error<span class="token punctuation">.</span>value <span class="token operator">=</span> err
                <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">const</span> placeholder <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Text<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span>

            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>loaded<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> InnerComp <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>errorComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 发生错误且用户配置了 errorComponent 时展示 Error 组件</span>
                    <span class="token comment">// 同时将 error 作为 props 传递</span>
                    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> options<span class="token punctuation">.</span>errorComponent<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> error<span class="token punctuation">.</span>value <span class="token punctuation">}</span> <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> placeholder
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="延迟与-loading-组件" tabindex="-1"><a class="header-anchor" href="#延迟与-loading-组件" aria-hidden="true">#</a> 延迟与 Loading 组件</h3>
<p>✅ 异步组件的加载受<strong>网络影响</strong>较大，加载过程可能很快，也可能很慢。对于加载过程，我们可以引入 Loading 组件来提供更好的用户体验。同时，考虑到请求很快的情况会导致 Loading 组件闪烁，我们可以设置一个延迟展示的时间。</p>
<blockquote>
<p>例如，当超过 200ms 没有完成加载，才展示 Loading 组件。这样，对于在 200ms 以内能够完成加载的情况来说，就避免了闪烁问题的出现。</p>
</blockquote>
<CodeGroup>
<CodeGroupItem title="用户接口">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">loader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/*...*/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 延迟 200 ms 展示 Loading 组件</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token comment">// Loading 组件</span>
  <span class="token literal-property property">loadingComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'h2'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'Loading...'</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="具体实现">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> options
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> loader <span class="token punctuation">}</span> <span class="token operator">=</span> options
  <span class="token keyword">let</span> InnerComp <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'AsyncComponentWrapper'</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> loaded <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token comment">// 一个标志，代表是否正在加载组件</span>
      <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

      <span class="token keyword">let</span> loadingTimer <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token comment">// 如果配置项中存在 delay，则开启一个定时器，到期把 loading 设置为 true</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        loadingTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 否则立即开启 loading</span>
        loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>

      <span class="token function">loader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        InnerComp <span class="token operator">=</span> c
        loaded<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> error<span class="token punctuation">.</span>value <span class="token operator">=</span> err<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 加载完成后，无论成功与否，关闭 loading 并清除定时器</span>
        loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>loadingTimer<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Async component timed out after </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>options<span class="token punctuation">.</span>timeout<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
          error<span class="token punctuation">.</span>value <span class="token operator">=</span> err
        <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> placeholder <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Text<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>loaded<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> InnerComp <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>errorComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> options<span class="token punctuation">.</span>errorComponent<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> error<span class="token punctuation">.</span>value <span class="token punctuation">}</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>loadingComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 如果异步组件正在加载且用户配置了 Loading 组件，则渲染该组件</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> options<span class="token punctuation">.</span>loadingComponent <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>  <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> placeholder
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">实现解析</p>
<ul>
<li>需要一个标记变量 <code v-pre>loading</code> 来代表组件是否正在加载。</li>
<li>如果用户指定了延迟时间，则开启延迟定时器。定时器到时后，再将 <code v-pre>loading.value</code> 的值设置为 <code v-pre>true</code>。</li>
<li>无论组件是否加载成功，都要清除延迟定时器，否则会出现组件已经加载成功，但仍然展示 Loading 组件的问题。</li>
<li>在渲染函数中，如果组件正在加载，并且用户指定了 Loading 组件，则渲染该 Loading 组件。</li>
</ul>
<blockquote>
<p>loading 是加载过程的中间状态，请求完成之后，无论成功还是失败，loading 都要结束。</p>
</blockquote>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="Loading 组件的卸载  🔥">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>type <span class="token operator">===</span> Fragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对于组件的卸载，本质上是要卸载组件所渲染的内容，即 subTree</span>
    <span class="token function">unmount</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>component<span class="token punctuation">.</span>subTree<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> parent <span class="token operator">=</span> vnode<span class="token punctuation">.</span>el<span class="token punctuation">.</span>parentNode
  <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当异步组件加载成功之后，会卸载 Loading 组件并渲染异步加载的组件或者 Error 组件。为了支持 Loading 组件的卸载，我们需要修改 <code v-pre>unmount</code> 函数。</p>
<p>✅ 组件的卸载本质上是要卸载组件所渲染的内容，即 <code v-pre>subTree</code>。通过 <code v-pre>vnode.component</code> 属性得到组件实例，再递归地调用 <code v-pre>unmout</code> 函数完成 <code v-pre>vnode.component.subTree</code> 的卸载。</p>
<blockquote>
<p>loading 是一个响应式数据，异步包装组件的 setup 返回值发生变化，副作用渲染函数就会重新执行。原本的 subTree 是 Loading 组件从 Loading 变成了 AsyncComp 或者 Error，渲染器内部就发生了组件的卸载和挂载动作。</p>
</blockquote>
</CodeGroupItem>
</CodeGroup>
<h3 id="重试机制-✨" tabindex="-1"><a class="header-anchor" href="#重试机制-✨" aria-hidden="true">#</a> 重试机制 ✨</h3>
<p>✅ <strong>重试</strong>指的是当加载出错时，有能力重新发起加载组件的请求。在加载组件的过程中，发生错误的情况非常常见，尤其是在网络不稳定的情况下。因此，提供开箱即用的重试机制，会提升用户的开发体验。</p>
<blockquote>
<p>异步组件加载失败后的重试机制，与请求服务端接口失败后的重试机制一样。</p>
</blockquote>
<CodeGroup>
<CodeGroupItem title="fetch">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 请求会在 1 秒后失败</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'err'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="load">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// load 函数接收一个 onError 回调函数</span>
<span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter">onError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 请求接口，得到 Promise 实例</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 捕获错误</span>
  <span class="token keyword">return</span> p<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 当错误发生时，返回一个新的 Promise 实例，并调用 onError 回调</span>
    <span class="token comment">// 同时将 retry 函数作为 onError 回调的参数</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// retry 函数的定义：用来执行重试的函数，执行 retry 会出现调用 load 发送请求</span>
      <span class="token keyword">const</span> <span class="token function-variable function">retry</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">load</span><span class="token punctuation">(</span>onError<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> <span class="token function-variable function">fail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token function">onError</span><span class="token punctuation">(</span>retry<span class="token punctuation">,</span> fail<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// 调用 load 加载资源</span>
<span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">retry</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 注册 onError 回调，参数为 retry、fail 函数</span>
  <span class="token function">retry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 正常请求成功，处理请求结果</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="异步组件的请求重试">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> options
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> loader <span class="token punctuation">}</span> <span class="token operator">=</span> options

  <span class="token keyword">let</span> InnerComp <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token comment">// 记录重试次数</span>
  <span class="token keyword">let</span> retries <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">loader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// 捕获加载器的错误</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果用户指定了 onError 回调，则将控制权交给用户</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>onError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 返回一个新的 Promise 实例</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token comment">// 重试</span>
          <span class="token keyword">const</span> <span class="token function-variable function">retry</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            retries<span class="token operator">++</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// 失败</span>
          <span class="token keyword">const</span> <span class="token function-variable function">fail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
          <span class="token comment">// 作为 onError 回调函数的参数，让用户决定下一步怎么做</span>
          options<span class="token punctuation">.</span><span class="token function">onError</span><span class="token punctuation">(</span>retry<span class="token punctuation">,</span> fail<span class="token punctuation">,</span> retries<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> error
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'AsyncComponentWrapper'</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> loaded <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

      <span class="token keyword">let</span> loadingTimer <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        loadingTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 调用 load 函数加载组件</span>
      <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        InnerComp <span class="token operator">=</span> c
        loaded<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        error<span class="token punctuation">.</span>value <span class="token operator">=</span> err
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>loadingTimer<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>



      <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Async component timed out after </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>options<span class="token punctuation">.</span>timeout<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
          error<span class="token punctuation">.</span>value <span class="token operator">=</span> err
        <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> placeholder <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Text<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>loaded<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> InnerComp <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>errorComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> options<span class="token punctuation">.</span>errorComponent<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> error<span class="token punctuation">.</span>value <span class="token punctuation">}</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>loadingComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> options<span class="token punctuation">.</span>loadingComponent <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> placeholder
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="函数式组件" tabindex="-1"><a class="header-anchor" href="#函数式组件" aria-hidden="true">#</a> 函数式组件</h2>
<p>函数式组件本质上就是一个普通函数，该函数的返回值是虚拟 DOM。</p>
<blockquote>
<p>在 Vue.js 3 中使用函数式组件，主要是因为它的简单性，而不是因为它性能好。</p>
<p>在 Vue.js 3 中，即使是有状态组件，其初始化性能消耗也非常小。</p>
</blockquote>
<CodeGroup>
<CodeGroupItem title="用户接口">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyFuncComp</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> props<span class="token punctuation">.</span>title <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 定义 props，在函数式组件的静态属性 props 上定义</span>
MyFuncComp<span class="token punctuation">.</span>props <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> String
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数式组件没有自身状态，但它仍然可以接收由外部传入的 props。</p>
</CodeGroupItem>
<CodeGroupItem title="patch 函数支持">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&amp;&amp;</span> n1<span class="token punctuation">.</span>type <span class="token operator">!==</span> n2<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">unmount</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
    n1 <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> n2

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">mountElement</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">patchElement</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> Text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> el <span class="token operator">=</span> n2<span class="token punctuation">.</span>el <span class="token operator">=</span> <span class="token function">createText</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> el <span class="token operator">=</span> n2<span class="token punctuation">.</span>el <span class="token operator">=</span> n1<span class="token punctuation">.</span>el
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children <span class="token operator">!==</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setText</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> Fragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      n2<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">patchChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// component</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">mountComponent</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">patchComponent</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 patch 函数内部，通过检测vnode.props 的类型来判断组件的类型：</p>
<ul>
<li>如果 vnode.type 是一个对象，则它是一个有状态组件，并且 vnode.type 是组件选项对象。</li>
<li>如果 vnode.type 是一个函数，则它是一个函数式组件。</li>
</ul>
</CodeGroupItem>
<CodeGroupItem title="mountComponent 函数支持">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 检查函数是否是函数式组件</span>
  <span class="token keyword">const</span> isFunctional <span class="token operator">=</span> <span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'function'</span>
  
  <span class="token keyword">let</span> componentOptions <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isFunctional<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    componentOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果是函数式组件，将 vnode.type 作为渲染函数</span>
      <span class="token comment">// 将 vnode.type.props 作为 props 选项定义</span>
      <span class="token literal-property property">render</span><span class="token operator">:</span> vnode<span class="token punctuation">.</span>type<span class="token punctuation">,</span>
      <span class="token literal-property property">props</span><span class="token operator">:</span> vnode<span class="token punctuation">.</span>type<span class="token punctuation">.</span>props
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>✅ 除了<code v-pre>mountComponent</code> 的处理，出于更加严谨的考虑，需要通过<code v-pre>isFunctional</code>变量实现选择性地执行初始化逻辑。因为对于函数式组件来说，它无须初始化 data 以及声明周期钩子。</p>
<p>从这点可以看出，<strong>函数式组件的初始化性能消耗小于有状态组件</strong>。</p>
</div></template>
