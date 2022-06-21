<template><div><h1 id="帧动画" tabindex="-1"><a class="header-anchor" href="#帧动画" aria-hidden="true">#</a> 帧动画</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>📗 通过定义一段动画中的关键点、关键状态来创建动画。Keyframes相比transition对动画过程和细节有<strong>更强</strong>的控制。</p>
<p>📌过渡动画是两个状态间的变化，帧动画可以处理动画过程中不同时间的细节变化，也可以把帧动画理解为多个帧之间的过渡动画。</p>
<h2 id="关键帧" tabindex="-1"><a class="header-anchor" href="#关键帧" aria-hidden="true">#</a> 关键帧</h2>
<div class="custom-container tip"><p class="custom-container-title">使用`@keyframes` 规则配置动画中的各个帧</p>
<ul>
<li>from 表示起始点</li>
<li>to 表示终点</li>
<li>可以使用百分数如 20%，动画运行到20%时</li>
</ul>
</div>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<p>📗 下面使用 <code v-pre>@keyframes</code> 定义了动画叫 <code v-pre>test</code> 并配置了两个帧动作<code v-pre>from/to</code> ，然后在div元素中使用<code v-pre>animation-name</code> 引用了动画并使用<code v-pre>animation-duration</code>声明执行三秒。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> test</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token comment">/* transform: scale(1); */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">animation-name</span><span class="token punctuation">:</span> test<span class="token punctuation">;</span>
<span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>👾 动画命名不要使用CSS关键字如 <code v-pre>none</code></p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/1.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 20px #ddd<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> test<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> test</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时间点" tabindex="-1"><a class="header-anchor" href="#时间点" aria-hidden="true">#</a> 时间点</h3>
<div class="custom-container tip"><p class="custom-container-title">📗 帧动画需要定义在不同时间执行的动作，开始与结束可以使用 `form/to` 或 `0%/100%` 声明。</p>
<ul>
<li>必须添加百分号，25%是正确写法</li>
<li>时间点没有顺序要求，即100%写在25%前也可以</li>
<li>未设置<code v-pre>0%</code>与<code v-pre>100%</code> 时将使用元素<strong>原始状态</strong> 📌</li>
</ul>
</div>
<h3 id="物体移动" tabindex="-1"><a class="header-anchor" href="#物体移动" aria-hidden="true">#</a> 物体移动</h3>
<p>下面定义不同时间点来让物体元素移动一圈，下例中可以不设置<code v-pre>from/to</code> 系统将定义为元素初始状态。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/2.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> test<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token atrule"><span class="token rule">@keyframes</span> test</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

        <span class="token selector">25%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">50%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>300%<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">75%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同时声明" tabindex="-1"><a class="header-anchor" href="#同时声明" aria-hidden="true">#</a> 同时声明</h3>
<p>时间点可以动画样式一样时可以一起声明，下面将25%/75%背景一起声明。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/3.gif" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> test</span> <span class="token punctuation">{</span>
    <span class="token selector">25%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>300%<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">75%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">25%,
    75%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">50%,
    100%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用动画" tabindex="-1"><a class="header-anchor" href="#使用动画" aria-hidden="true">#</a> 使用动画</h2>
<div class="custom-container tip"><p class="custom-container-title">`animation-name` 规则可以在元素身上同时使用多个动画。</p>
<ul>
<li>使用多个动画时用逗号分隔</li>
<li>多个动画有相同属性时，后面动画的属性优先使用</li>
</ul>
</div>
<h3 id="基本使用-1" tabindex="-1"><a class="header-anchor" href="#基本使用-1" aria-hidden="true">#</a> 基本使用</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/4.gif" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> translate<span class="token punctuation">,</span> scale<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> translate</span> <span class="token punctuation">{</span>
    <span class="token selector">25%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>300%<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">75%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">25%,
    75%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">50%,
    100%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> scale</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">75%</span> <span class="token punctuation">{</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动画时间" tabindex="-1"><a class="header-anchor" href="#动画时间" aria-hidden="true">#</a> 动画时间</h2>
<div class="custom-container tip"><p class="custom-container-title">`animation-duration` 可以声明动画播放的时间，即把所有帧执行一遍所需要的时间。</p>
<ul>
<li>可以使用m秒，ms毫秒时间单位</li>
<li>可为不同动画单独设置执行时间</li>
<li>如果动画数量大于时间数量，将重新从时间列表中计算</li>
</ul>
</div>
<h3 id="炫彩背景" tabindex="-1"><a class="header-anchor" href="#炫彩背景" aria-hidden="true">#</a> 炫彩背景</h3>
<p>下面实例声明三个动画，使用 <code v-pre>animation-duration</code>为每个动画设置不同执行的时间。</p>
<p>📌 当动画开始时，三个动画是同时开始执行的，duration规定了从开始到结束的总时间。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/5.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> scale<span class="token punctuation">,</span> colors<span class="token punctuation">,</span> rotate<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">,</span> 5s<span class="token punctuation">,</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> scale</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> colors</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">50%</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">100%</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #16a085<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> rotate</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">50%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">100%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性重叠" tabindex="-1"><a class="header-anchor" href="#属性重叠" aria-hidden="true">#</a> 属性重叠</h2>
<p>📗 如果多个帧动画设置了相同的属性，不同浏览器的对待方式略有不同。比如 chrome/edge最新版本对动画的计算就有变化。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
            <span class="token selector">*</span> <span class="token punctuation">{</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">body</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
                <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
                <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
                <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">main</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">div</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
                <span class="token property">animation-name</span><span class="token punctuation">:</span> translate<span class="token punctuation">,</span> background<span class="token punctuation">;</span>
                <span class="token property">animation-duration</span><span class="token punctuation">:</span> 4s<span class="token punctuation">,</span> 4s<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token atrule"><span class="token rule">@keyframes</span> translate</span> <span class="token punctuation">{</span>
                <span class="token selector">25%</span> <span class="token punctuation">{</span>
                    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token selector">50%</span> <span class="token punctuation">{</span>
                    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>300px<span class="token punctuation">,</span> 300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token selector">75%</span> <span class="token punctuation">{</span>
                    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token atrule"><span class="token rule">@keyframes</span> background</span> <span class="token punctuation">{</span>
                <span class="token selector">25%</span> <span class="token punctuation">{</span>
                    <span class="token property">background</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">;</span>
                    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token selector">50%</span> <span class="token punctuation">{</span>
                    <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token selector">75%</span> <span class="token punctuation">{</span>
                    <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>👾 上面的示例在早期chrome与safari浏览器效果是相同的：后面的background动画优先级高，4秒时长的动画都用background动画来控制translate属性。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/6.gif" alt=""></p>
<p>在最新版本的chrome/edge中执行过程将两个帧动画<strong>结合</strong>处理</p>
<ul>
<li>前25%帧使用background的动画</li>
<li>25%帧后综合使用background与translate动画</li>
</ul>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/7.gif" alt=""></p>
<p>✅ 所以建议尽量不要在两个动画中控制相同的属性</p>
<h2 id="动画属性" tabindex="-1"><a class="header-anchor" href="#动画属性" aria-hidden="true">#</a> 动画属性</h2>
<p>📗 不是所有css属性都有过渡效果，<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties" target="_blank" rel="noopener noreferrer">查看支持动画的CSS属性 (opens new window)<ExternalLinkIcon/></a>，一般来讲有中间值的属性都可以设置动画如宽度、透明度等。</p>
<h3 id="属性体验" tabindex="-1"><a class="header-anchor" href="#属性体验" aria-hidden="true">#</a> 属性体验</h3>
<p>📌 下例中的边框变化<strong>没有中间值</strong>，所以是瞬间改变也没有产生动画效果。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/8.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">h2</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #f39c12<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> gg<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> gg</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> solid 10px #000<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> double 10px #000<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>William<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中间值" tabindex="-1"><a class="header-anchor" href="#中间值" aria-hidden="true">#</a> 中间值</h3>
<p>下面是例子尺寸没有产生动画，因为<code v-pre>0%</code>帧设置的尺寸单位与 <code v-pre>100%</code> 设置的尺寸没有中间值，解析器没有办法计算，最终效果如下：</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/9.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">h2</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #f39c12<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> jj<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> jj</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>William<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确效果应该是这样</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/10.gif" alt=""></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> jj</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> cornsilk<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">100%</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重复动画" tabindex="-1"><a class="header-anchor" href="#重复动画" aria-hidden="true">#</a> 重复动画</h2>
<div class="custom-container tip"><p class="custom-container-title">`animation-iteration-count` 规则设置动画重复执行次数，设置值为 `infinite` 表示无限循环执行。</p>
<ul>
<li>可同时设置元素的多个动画重复，使用逗号分隔</li>
<li>如果动画数量大于重复数量定义，后面的动画将重新计算重复</li>
</ul>
</div>
<h3 id="心动感觉" tabindex="-1"><a class="header-anchor" href="#心动感觉" aria-hidden="true">#</a> 心动感觉</h3>
<p>使用循环动画绘制心动效果</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/11.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.heart</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> heart<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.heart::before</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> 0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.heart::after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> heart</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.3<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>heart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动画方向-💡" tabindex="-1"><a class="header-anchor" href="#动画方向-💡" aria-hidden="true">#</a> 动画方向 💡</h2>
<p>使用 <code v-pre>animation-direction</code> 控制动画运行的方向。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>normal</td>
<td>从0%到100%运行动画</td>
</tr>
<tr>
<td>reverse</td>
<td>从100%到0%运行动画</td>
</tr>
<tr>
<td>alternate</td>
<td>先从0%到100%，然后从100%到0%</td>
</tr>
<tr>
<td>alternate-reverse</td>
<td>先从100%到0%，然后从0%到100%</td>
</tr>
</tbody>
</table>
<h3 id="效果比较" tabindex="-1"><a class="header-anchor" href="#效果比较" aria-hidden="true">#</a> 效果比较</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/12.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">h2</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #f39c12<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">ul</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li</span> <span class="token punctuation">{</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li span</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #ecf0f1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">i.fa</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> hd<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(1)>i.fa</span> <span class="token punctuation">{</span>
            <span class="token property">animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(2)>i.fa</span> <span class="token punctuation">{</span>
            <span class="token property">animation-direction</span><span class="token punctuation">:</span> reverse<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(3)>i.fa</span> <span class="token punctuation">{</span>
            <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(4)>i.fa</span> <span class="token punctuation">{</span>
            <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate-reverse<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> hd</span> <span class="token punctuation">{</span>
            <span class="token selector">from</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

            <span class="token selector">to</span> <span class="token punctuation">{</span>
                <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa fa-heart<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>normal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa fa-heart<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>reverse<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa fa-heart<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>alternate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa fa-heart<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>alternate-reverse<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse</h3>
<p>根据上面的心动例子改变方向为100%~0%</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/13.gif" alt="Untitled"></p>
<h3 id="alternate" tabindex="-1"><a class="header-anchor" href="#alternate" aria-hidden="true">#</a> alternate</h3>
<p>根据上面的心动例子改变方向为0%~100%然后100%~0%</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/14.gif" alt="Untitled"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate-reverse<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="alternate-reverse" tabindex="-1"><a class="header-anchor" href="#alternate-reverse" aria-hidden="true">#</a> alternate-reverse</h3>
<p>通过使用合适的运动方向 <code v-pre>alternate-reverse</code> 制作跳动的小球</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/15.gif" alt="Untitled"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> ball<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
        <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate-reverse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> ball</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

        <span class="token selector">100%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">section</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> shadow<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
        <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> shadow</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>35px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #aaa<span class="token punctuation">;</span>
            <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="延迟动画" tabindex="-1"><a class="header-anchor" href="#延迟动画" aria-hidden="true">#</a> 延迟动画</h2>
<p>使用 <code v-pre>animation-delay</code> 规则定义动画等待多长时间后执行。</p>
<h3 id="微场景" tabindex="-1"><a class="header-anchor" href="#微场景" aria-hidden="true">#</a> 微场景</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/16.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">header</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 10vh<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 2.5em<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 10vh<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> jr-translate<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 500ms<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"5.jpg"</span><span class="token punctuation">)</span></span> no-repeat right bottom<span class="token punctuation">;</span>
        <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> jr-rotate<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main>*</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> .8<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .6<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main>.lesson</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 80vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 40vw<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-100vw<span class="token punctuation">,</span> -100vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> jr-rotate<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-delay</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main>.video</span> <span class="token punctuation">{</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 60vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 40vw<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2980b9<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> jr-translate<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-delay</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-100vw<span class="token punctuation">,</span> -100vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">footer</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 10vh<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #27ae60<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 10vh<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> jr-skew<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 500ms<span class="token punctuation">;</span>
        <span class="token property">animation-delay</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> jr-translate</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-100vw<span class="token punctuation">,</span> -100vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> jr-rotate</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-100%<span class="token punctuation">,</span> -100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> jr-skew</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span> <span class="token function">skew</span><span class="token punctuation">(</span>-45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewX</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
    Hello world
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lesson<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video jr-translate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>
    caffreygo.com
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动画速率" tabindex="-1"><a class="header-anchor" href="#动画速率" aria-hidden="true">#</a> 动画速率</h2>
<h3 id="系统属性" tabindex="-1"><a class="header-anchor" href="#系统属性" aria-hidden="true">#</a> 系统属性</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>animation-timing-function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">linear</td>
<td style="text-align:left">规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。</td>
</tr>
<tr>
<td style="text-align:left">ease</td>
<td style="text-align:left">开始慢，然后快，慢下来，结束时非常慢（cubic-bezier(0.25,0.1,0.25,1)）</td>
</tr>
<tr>
<td style="text-align:left">ease-in</td>
<td style="text-align:left">开始慢，结束快（等于 cubic-bezier(0.42,0,1,1)）</td>
</tr>
<tr>
<td style="text-align:left">ease-out</td>
<td style="text-align:left">开始快，结束慢（等于 cubic-bezier(0,0,0.58,1)）</td>
</tr>
<tr>
<td style="text-align:left">ease-in-out</td>
<td style="text-align:left">中间快，两边慢（等于 cubic-bezier(0.42,0,0.58,1)）</td>
</tr>
<tr>
<td style="text-align:left">cubic-bezier(<em>n</em>,<em>n</em>,<em>n</em>,<em>n</em>)</td>
<td style="text-align:left">在 cubic-bezier 函数中定义自己的值</td>
</tr>
</tbody>
</table>
<blockquote>
<p>可以在帧中单独定义，将影响当前帧的速率</p>
</blockquote>
<h3 id="贝塞尔曲线" tabindex="-1"><a class="header-anchor" href="#贝塞尔曲线" aria-hidden="true">#</a> 贝塞尔曲线</h3>
<p>📗  需要设置四个值 <code v-pre>cubic-bezier(&lt;x1&gt;, &lt;y1&gt;, &lt;x2&gt;, &lt;y2&gt;)</code>，来控制曲线速度，可在 <a href="https://cubic-bezier.com/" target="_blank" rel="noopener noreferrer">https://cubic-bezier.com (opens new window)<ExternalLinkIcon/></a>网站在线体验效果。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/17.jpg" alt=""></p>
<h3 id="体验效果" tabindex="-1"><a class="header-anchor" href="#体验效果" aria-hidden="true">#</a> 体验效果</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/17.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
            <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">ul</span> <span class="token punctuation">{</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
            <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li</span> <span class="token punctuation">{</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(1)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(2)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(3)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(4)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(5)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> move</span> <span class="token punctuation">{</span>
            <span class="token selector">to</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>90vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>ease<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>ease-in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>ease-out<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>ease-in-out<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>linear<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="弹跳小球-💡" tabindex="-1"><a class="header-anchor" href="#弹跳小球-💡" aria-hidden="true">#</a> 弹跳小球 💡</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/18.gif" alt="Untitled"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0vw<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at right top<span class="token punctuation">,</span> #f39c12<span class="token punctuation">,</span> #d35400<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> jump<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div:nth-child(2)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-delay</span><span class="token punctuation">:</span> .2s<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> jump</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">30%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>10vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">60%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>40vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">80%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>60vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">95%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>75vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">15%,
            45%,
            70%,
            85%,
            100%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>80vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="魔术小球" tabindex="-1"><a class="header-anchor" href="#魔术小球" aria-hidden="true">#</a> 魔术小球</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/19.gif" alt="Untitled"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-20vw<span class="token punctuation">,</span> -300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at right top<span class="token punctuation">,</span> #f39c12<span class="token punctuation">,</span> #d35400<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> jump<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1.5s<span class="token punctuation">;</span>
        <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
        <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(2)</span> <span class="token punctuation">{</span>
        <span class="token property">animation-delay</span><span class="token punctuation">:</span> .2s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(3)</span> <span class="token punctuation">{</span>
        <span class="token property">animation-delay</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> jump</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-20vw<span class="token punctuation">,</span> -300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">10%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.9<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>15vw<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">20%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>20vw<span class="token punctuation">,</span> -200%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">30%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.9<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>30vw<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">40%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>40vw<span class="token punctuation">,</span> -120%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">50%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.9<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>50vw<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">60%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>60vw<span class="token punctuation">,</span> -70%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">70%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.9<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>70vw<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">80%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>80vw<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">90%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.9<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>90vw<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">95%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>95vw<span class="token punctuation">,</span> -30%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">100%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.9<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>100vw<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> move</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
            <span class="token comment">/* transform: translateY(-400%); */</span>
        <span class="token punctuation">}</span>

        <span class="token selector">100%</span> <span class="token punctuation">{</span>
            <span class="token comment">/* right: 100px; */</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按钮提交" tabindex="-1"><a class="header-anchor" href="#按钮提交" aria-hidden="true">#</a> 按钮提交</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/20.gif" alt="Untitled"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">button</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 10px 50px<span class="token punctuation">;</span>
            <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> solid 5px white<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">button::after</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
            <span class="token property">box-shadow</span><span class="token punctuation">:</span> 3px 0 currentColor<span class="token punctuation">,</span> 9px 0 currentColor<span class="token punctuation">,</span> 15px 0 currentColor<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> point<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
            <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> point</span> <span class="token punctuation">{</span>
            <span class="token selector">from</span> <span class="token punctuation">{</span>
                <span class="token property">box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">30%</span> <span class="token punctuation">{</span>
                <span class="token property">box-shadow</span><span class="token punctuation">:</span> 3px 0 currentColor<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">60%</span> <span class="token punctuation">{</span>
                <span class="token property">box-shadow</span><span class="token punctuation">:</span> 3px 0 currentColor<span class="token punctuation">,</span> 9px 0 currentColor<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">90%</span> <span class="token punctuation">{</span>
                <span class="token property">box-shadow</span><span class="token punctuation">:</span> 3px 0 currentColor<span class="token punctuation">,</span> 9px 0 currentColor<span class="token punctuation">,</span> 15px 0 currentColor<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa fa-code<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
        提交
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="步进速度" tabindex="-1"><a class="header-anchor" href="#步进速度" aria-hidden="true">#</a> 步进速度</h2>
<p>过渡使用阶梯化呈现，有点像现实生活中的机械舞，下面是把过渡分五步完成。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>steps(n,start)</td>
<td>设置n个时间点，第一时间点变化状态</td>
</tr>
<tr>
<td>steps(n,end)</td>
<td>设置n个时间点，第一时间点初始状态</td>
</tr>
<tr>
<td>step-start</td>
<td>等于steps(1,start)，可以理解为从下一步开始</td>
</tr>
<tr>
<td>step-end</td>
<td>等于steps(1,end)，可以理解为从当前步开始</td>
</tr>
</tbody>
</table>
<h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> steps</h3>
<p>📗  <code v-pre>steps(n,start)</code> 可以简单理解为从第二个开始，<code v-pre>steps(n,end)</code> 从第一个开始。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/21.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
            <span class="token comment">/* justify-content: center;
            align-content: center; */</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main</span> <span class="token punctuation">{</span>
            <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
            <span class="token property">grid-template</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span>/<span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token property">border-right</span><span class="token punctuation">:</span> solid 1px #2c3e50<span class="token punctuation">;</span>
            <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 1px #2c3e50<span class="token punctuation">;</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div:nth-child(5)::before</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'END'</span><span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div:nth-child(1)::after</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'START'</span><span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> move</span> <span class="token punctuation">{</span>
            <span class="token selector">to</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>400px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-start" tabindex="-1"><a class="header-anchor" href="#step-start" aria-hidden="true">#</a> step-start</h3>
<p>📗  <code v-pre>step-start</code> 效果等于 <code v-pre>steps(1,start)</code> ,<code v-pre>step-end</code> 效果等同于 <code v-pre>steps(1,end)</code>。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/22.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main</span> <span class="token punctuation">{</span>
            <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
            <span class="token property">grid-template</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span>/<span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div</span> <span class="token punctuation">{</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #2c3e50<span class="token punctuation">;</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div:nth-child(1)::before,
        div:nth-child(5)::before</span> <span class="token punctuation">{</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> hd<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> .5s<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div:nth-child(1)::before</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'START'</span><span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> step-start<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div:nth-child(5)::before</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'END'</span><span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #27ae60<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> step-end<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> hd</span> <span class="token punctuation">{</span>
            <span class="token selector">50%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">to</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="播放状态" tabindex="-1"><a class="header-anchor" href="#播放状态" aria-hidden="true">#</a> 播放状态</h2>
<p>📗  使用 <code v-pre>animation-play-state</code> 可以控制动画的暂停与运行。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>paused</td>
<td>暂停</td>
</tr>
<tr>
<td>running</td>
<td>运行</td>
</tr>
</tbody>
</table>
<h3 id="幻灯片" tabindex="-1"><a class="header-anchor" href="#幻灯片" aria-hidden="true">#</a> 幻灯片</h3>
<p>下面是使用无JS脚本参与的图片轮换效果，图片切换使用<code v-pre>steps</code> 步进与<code v-pre>animation-play-state</code>播放状态技术。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/23.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>https://code.jquery.com/jquery-3.3.1.slim.min.js<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> solid 5px #ddd<span class="token punctuation">;</span>
            <span class="token property">border-width</span><span class="token punctuation">:</span> 5px 0 5px 0<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main:hover section</span> <span class="token punctuation">{</span>
            <span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main:hover ul::before</span> <span class="token punctuation">{</span>
            <span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">section</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 1600px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> slide<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 4s<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">section div</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">section div img</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">ul</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
            <span class="token property">bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">ul li</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
            <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> solid 3px transparent<span class="token punctuation">;</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">ul::before</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> num<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 4s<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> slide</span> <span class="token punctuation">{</span>
            <span class="token selector">from</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">to</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> num</span> <span class="token punctuation">{</span>
            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="填充模式" tabindex="-1"><a class="header-anchor" href="#填充模式" aria-hidden="true">#</a> 填充模式</h2>
<p>📗  <code v-pre>animation-fill-mode</code> 用于定义动画播放结束后的处理模式，是回到原来状态还是停止在动画结束状态。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td>需要等延迟结束，起始帧属性才应用</td>
</tr>
<tr>
<td>backwards</td>
<td>动画效果在起始帧，不等延迟结束</td>
</tr>
<tr>
<td>forwards</td>
<td>结束后停留动画的最后一帧</td>
</tr>
<tr>
<td>both</td>
<td>包含backwards与forwards规则，即动画效果在起始帧，不等延迟结束，并且在结束后停止在最后一帧</td>
</tr>
</tbody>
</table>
<h3 id="效果对比" tabindex="-1"><a class="header-anchor" href="#效果对比" aria-hidden="true">#</a> 效果对比</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/24.gif" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">ul</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li</span> <span class="token punctuation">{</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #ecf0f1<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> hd<span class="token punctuation">;</span>
            <span class="token property">animation-delay</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(1)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(2)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> backwards<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(3)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(4)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> hd</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>none<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>backwards<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>forwards<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>both<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合定义" tabindex="-1"><a class="header-anchor" href="#组合定义" aria-hidden="true">#</a> 组合定义</h2>
<p>📗  和CSS中的其他属性一样，可以使用<code v-pre>animation</code>组合定义帧动画。animation 属性是一个简写属性，用于设置<strong>六个</strong>动画属性：</p>
<ul>
<li>animation-name</li>
<li>animation-duration</li>
<li>animation-timing-function</li>
<li>animation-delay</li>
<li>animation-iteration-count</li>
<li>animation-direction</li>
</ul>
<blockquote>
<p>必须存在 <code v-pre>animation-duration</code>属性，否则过渡时间为0没有动画效果。</p>
</blockquote>
</div></template>
