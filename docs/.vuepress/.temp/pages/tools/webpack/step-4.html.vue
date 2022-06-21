<template><div><h1 id="webpack进阶" tabindex="-1"><a class="header-anchor" href="#webpack进阶" aria-hidden="true">#</a> Webpack进阶</h1>
<h2 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> Tree Shaking</h2>
<div class="custom-container tip"><p class="custom-container-title">理解</p>
<p><code v-pre>Tree Shaking</code>是一个术语，通常用于描述移除<code v-pre>js</code>中未使用的代码。</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>Tree Shaking 只适用于<code v-pre>ES Module</code>语法(既通过<code v-pre>export</code>导出，<code v-pre>import</code>引入)，因为它依赖于<code v-pre>ES Module</code>的静态结构特性。</p>
</div>
<p>在正式介绍<code v-pre>Tree Shaking</code>之前，我们需要现在<code v-pre>src</code>目录下新建一个<code v-pre>math.js</code>文件，它的代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">minus</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们对<code v-pre>index.js</code>做一下处理，它的代码像下面这样，从<code v-pre>math.js</code>中引用<code v-pre>add</code>方法并调用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./math'</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的<code v-pre>.js</code>改动完毕后，我们最后需要对<code v-pre>webpack.config.js</code>做一下配置，让它支持<code v-pre>Tree Shaking</code>，它的改动如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'source-map'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'main.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上<code v-pre>webpack.config.js</code>配置完毕后，我们需要使用<code v-pre>npx webpack</code>进行打包，它的打包结果如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// dist/main.js</span>
<span class="token string">"use strict"</span><span class="token punctuation">;</span>
<span class="token comment">/* harmony export (binding) */</span> 
__webpack_require__<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>__webpack_exports__<span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> add<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* unused harmony export minus */</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">minus</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>打包结果分析</strong>：虽然我们配置了 <code v-pre>Tree Shaking</code>，但在开发环境下，我们依然能够看到未使用过的<code v-pre>minus</code>方法，以上注释也清晰了说明了这一点，这个时候你可能会问：为什么我们配置了<code v-pre>Tree Shaking</code>，<code v-pre>minus</code>方法也没有被使用，但依然还是被打包进了<code v-pre>main.js</code>中？</p>
<p>其实这个原因很简单，这是因为我们处于开发环境下打包，当我们处于开发环境下时，由于<code v-pre>source-map</code>等相关因素的影响，如果我们不把没有使用的代码一起打包进来的话，<code v-pre>source-map</code>就不是很准确，这会影响我们本地开发的效率。</p>
<p>看完以上本地开发<code v-pre>Tree Shaking</code>的结果，我们也知道了本地开发<code v-pre>Tree Shaking</code>相对来说是不起作用的，那么在生产环境下打包时，<code v-pre>Tree Shaking</code>的表现又如何呢？</p>
<p>在生产环境下打包，需要我们对<code v-pre>webpack.config.js</code>中的<code v-pre>mode</code>属性，需要由<code v-pre>development</code>改为<code v-pre>production</code>，它的改动如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'source-map'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'main.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完毕后，我们依然使用<code v-pre>npx webpack</code>进行打包，可以看到，它的打包结果如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// dist/main.js</span>
<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span>n<span class="token punctuation">,</span>r</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token string">"use strict"</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> t<span class="token punctuation">,</span>o<span class="token punctuation">;</span>
  r<span class="token punctuation">.</span><span class="token function">r</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span>
  t<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>
  o<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token operator">+</span>o<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>打包代码分析</strong>：以上代码是一段被压缩过后的代码，我们可以看到，上面只有<code v-pre>add</code>方法，未使用的<code v-pre>minus</code>方法并没有被打包进来，这说明在生产环境下我们的<code v-pre>Tree Shaking</code>才能真正起作用。</p>
<h4 id="sideeffects" tabindex="-1"><a class="header-anchor" href="#sideeffects" aria-hidden="true">#</a> SideEffects</h4>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>由于<code v-pre>Tree Shaking</code>作用于所有通过<code v-pre>import</code>引入的文件，如果我们引入第三方库，例如：<code v-pre>import _ from 'lodash'</code>或者<code v-pre>.css</code>文件，例如<code v-pre>import './style.css'</code> 时，如果我们不 做限制的话，Tree Shaking将起副作用，<code v-pre>SideEffects</code>属性能帮我们解决这个问题：它告诉<code v-pre>webpack</code>，我们可以对哪些文件不做 <code v-pre>Tree Shaking</code></p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 修改package.json</span>
<span class="token comment">// 如果不希望对任何文件进行此配置，可以设置sideEffects属性值为false</span>
<span class="token comment">// *.css 表示 对所有css文件不做 Tree Shaking</span>
<span class="token comment">// @babael/polyfill 表示 对@babel/polyfill不做 Tree Shaking</span>
<span class="token string-property property">"sideEffects"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">"*.css"</span><span class="token punctuation">,</span>
  <span class="token string">"@babel/polyfill"</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>小结</strong>：对于<code v-pre>Tree Shaking</code>的争议比较多，推荐看👉<a href="https://zhuanlan.zhihu.com/p/32831172" target="_blank" rel="noopener noreferrer">你的Tree Shaking并没有什么卵用<ExternalLinkIcon/></a>，看完你会发现我们对<code v-pre>Tree Shaking</code>的了解还需要进一步加深。</p>
<h2 id="区分开发模式和生产模式" tabindex="-1"><a class="header-anchor" href="#区分开发模式和生产模式" aria-hidden="true">#</a> 区分开发模式和生产模式</h2>
<p>像上一节那样，如果我们要区分<code v-pre>Tree Shaking</code>的开发环境和生产环境，那么我们每次打包的都要去更改<code v-pre>webpack.config.js</code>文件，有没有什么办法能让我们少改一点代码呢？ 答案是有的！</p>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>区分开发环境和生产环境，最好的办法是把公用配置提取到一个配置文件，生产环境和开发环境只写自己需要的配置，在打包的时候再进行合并即可，<strong><code v-pre>webpack-merge</code></strong> 可以帮我们做到这个事情。</p>
</div>
<p>首先，我们效仿各大框架的脚手架的形式，把 Webpack 相关的配置都放在根目录下的<code v-pre>build</code>文件夹下，所以我们需要新建一个<code v-pre>build</code>文件夹，随后我们要在此文件夹下新建三个<code v-pre>.js</code>文件和删除<code v-pre>webpack.config.js</code>，它们分别是：</p>
<ul>
<li><code v-pre>webpack.common.js</code>：Webpack 公用配置文件</li>
<li><code v-pre>webpack.dev.js</code>：开发环境下的 Webpack 配置文件</li>
<li><code v-pre>webpack.prod.js</code>：生产环境下的 Webpack 配置文件</li>
<li><code v-pre>webpack.config.js</code>：<strong>删除</strong>根目录下的此文件</li>
</ul>
<p>新建完<code v-pre>webpack.common.js</code>文件后，我们需要把公用配置提取出来，它的代码看起来应该是下面这样子的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span><span class="token string">'css-loader'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> 
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span> 
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'src/index.html'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提取完 Webpack 公用配置文件后，我们开发环境下的配置，也就是<code v-pre>webpack.dev.js</code>中的代码，将剩下下面这些：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'cheap-module-eval-source-map'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">'dist'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而生产环境下的配置，也就是<code v-pre>webpack.prod.js</code>中的代码，可能是下面这样子的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'cheap-module-source-map'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在处理完以上三个<code v-pre>.js</code>文件后，我们需要做一件事情：</p>
<ul>
<li>当处于开发环境下时，把<code v-pre>webpack.common.js</code>中的配置和<code v-pre>webpack.dev.js</code>中的配置合并在一起</li>
<li>当处于开发环境下时，把<code v-pre>webpack.common.js</code>中的配置和<code v-pre>webpack.prod.js</code>中的配置合并在一起</li>
</ul>
<p>针对以上问题，我们可以使用<code v-pre>webpack-merge</code>进行合并，在使用之前，我们需要使用如下命令进行安装：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> webpack-merge -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完毕后，我们需要对<code v-pre>webpack.dev.js</code>和<code v-pre>webpack.prod.js</code>做一下手脚，其中<code v-pre>webpack.dev.js</code>中的改动如下(代码高亮部分)：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> commonConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.common'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> devConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'cheap-module-eval-source-map'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">'dist'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig<span class="token punctuation">,</span> devConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相同的代码，<code v-pre>webpack.prod.js</code>中的改动部分如下(代码高亮)：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> commonConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.common'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> prodConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'cheap-module-source-map'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig<span class="token punctuation">,</span> prodConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>聪明的你一定想到了，因为上面我们已经删除了<code v-pre>webpack.config.js</code>文件，所以我们需要重新在<code v-pre>package.json</code>中配置一下我们的打包命令，它们是这样子写的：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack-dev-server --config ./build/webpack.dev.js"</span><span class="token punctuation">,</span>
  <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --config ./build/webpack.prod.js"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完打包命令，心急的你可能会马上开始尝试进行打包，你的打包目录可能长成下面这个样子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> build
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> dist
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>common<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>prod<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> src
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> math<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>babelrc
<span class="token operator">|</span><span class="token operator">--</span> postcss<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题分析</strong>：当我们运行<code v-pre>npm run build</code>时，<code v-pre>dist</code>目录打包到了<code v-pre>build</code>文件夹下了，这是因为我们把Webpack 相关的配置放到了<code v-pre>build</code>文件夹下后，并没有做其他配置，Webpack 会认为<code v-pre>build</code>文件夹会是根目录，要解决这个问题，需要我们在<code v-pre>webpack.common.js</code>中修改<code v-pre>output</code>属性，具体改动的部分如下所示：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>output<span class="token operator">:</span> <span class="token punctuation">{</span>
  filename<span class="token operator">:</span> '<span class="token punctuation">[</span>name<span class="token punctuation">]</span>.js'<span class="token punctuation">,</span>
  path<span class="token operator">:</span> path.resolve(__dirname<span class="token punctuation">,</span>'../dist')
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么解决完上面这个问题，赶紧使用你的打包命令测试一下吧，我的打包目录是下面这样子，如果你按上面的配置后，你的应该跟此目录类似</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> build
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>common<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>prod<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> dist
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
<span class="token operator">|</span><span class="token operator">--</span> src
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> math<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>babelrc
<span class="token operator">|</span><span class="token operator">--</span> postcss<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码分离-codesplitting" tabindex="-1"><a class="header-anchor" href="#代码分离-codesplitting" aria-hidden="true">#</a> 代码分离(CodeSplitting)</h2>
<p>理解</p>
<p><code v-pre>Code Splitting</code> 的核心是把很大的文件，分离成更小的块，让浏览器进行并行加载。</p>
<p>常见的代码分割有三种形式：</p>
<ul>
<li>手动进行分割：例如项目如果用到<code v-pre>lodash</code>，则把<code v-pre>lodash</code>单独打包成一个文件。</li>
<li>同步导入的代码：使用 Webpack 配置进行代码分割。</li>
<li>异步导入的代码：通过模块中的内联函数调用来分割代码。</li>
</ul>
<h3 id="手动进行分割" tabindex="-1"><a class="header-anchor" href="#手动进行分割" aria-hidden="true">#</a> 手动进行分割</h3>
<p>手动进行分割的意思是在<code v-pre>entry</code>上配置多个入口，例如像下面这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lodash</span><span class="token operator">:</span> <span class="token string">'lodash'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样配置后，我们使用<code v-pre>npm run build</code>打包命令，它的打包输出结果为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>        Asset       Size  Chunks             Chunk Names
  index.html  <span class="token number">462</span> bytes          <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
    lodash.js   <span class="token number">1.46</span> KiB       <span class="token number">1</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  lodash
lodash.js.map   <span class="token number">5.31</span> KiB       <span class="token number">1</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  lodash
      main.js   <span class="token number">1.56</span> KiB       <span class="token number">2</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  main
  main.js.map   <span class="token number">5.31</span> KiB       <span class="token number">2</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它输出了两个模块，也能在一定程度上进行代码分割，不过这种分割是十分脆弱的，如果两个模块共同引用了第三个模块，那么第三个模块会被同时打包进这两个入口文件中，而不是分离出来。</p>
<p>所以我们常见的做法是关心最后两种代码分割方法，无论是同步代码还是异步代码，都需要在<code v-pre>webpack.common.js</code>中配置<code v-pre>splitChunks</code>属性，像下面这样子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能已经看到了其中有一个<code v-pre>chunks</code>属性，它告诉 Webpack 应该对哪些模式进行打包，它的参数有三种：</p>
<ul>
<li><code v-pre>async</code>：此值为默认值，只有异步导入的代码才会进行代码分割。</li>
<li><code v-pre>initial</code>：与<code v-pre>async</code>相对，只有同步引入的代码才会进行代码分割。</li>
<li><code v-pre>all</code>：表示无论是同步代码还是异步代码都会进行代码分割。</li>
</ul>
<h3 id="同步代码分割" tabindex="-1"><a class="header-anchor" href="#同步代码分割" aria-hidden="true">#</a> 同步代码分割</h3>
<p>在完成上面的配置后，让我们来安装一个相对大一点的包，例如：<code v-pre>lodash</code>，然后对<code v-pre>index.js</code>中的代码做一些手脚，像下面这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Dell'</span><span class="token punctuation">,</span><span class="token string">'Lee'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>就像上面提到的那样，同步代码分割，我们只需要在<code v-pre>webpack.common.js</code>配置<code v-pre>chunks</code>属性值为<code v-pre>initial</code>即可：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'initial'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>webpack.common.js</code>配置完毕后，我们使用<code v-pre>npm run build</code>来进行打包， 你的打包<code v-pre>dist</code>目录看起来应该像下面这样子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> dist
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> vendors<span class="token operator">~</span>main<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> vendors<span class="token operator">~</span>main<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>打包分析</strong>：<code v-pre>main.js</code>使我们的业务代码，<code v-pre>vendors~main.js</code>是第三方模块的代码，在此案例中也就是<code v-pre>_lodash</code>中的代码。</p>
<h3 id="异步代码分割" tabindex="-1"><a class="header-anchor" href="#异步代码分割" aria-hidden="true">#</a> 异步代码分割</h3>
<p>由于<code v-pre>chunks</code>属性的默认值为<code v-pre>async</code>，如果我们只需要针对异步代码进行代码分割的话，我们只需要进行异步导入，Webpack会自动帮我们进行代码分割，异步代码分割它的配置如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'async'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：由于异步导入语法目前并没有得到全面支持，需要通过 npm 安装 <code v-pre>@babel/plugin-syntax-dynamic-import</code> 插件来进行转译</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> @babel/plugin-syntax-dynamic-import -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完毕后，我们需要在根目录下的<code v-pre>.babelrc</code>文件做一下改动，像下面这样子：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token property">"corejs"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">"useBuiltIns"</span><span class="token operator">:</span> <span class="token string">"usage"</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/plugin-syntax-dynamic-import"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完毕后，我们需要对<code v-pre>index.js</code>做一下代码改动，让它使用异步导入代码块:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 点击页面，异步导入lodash模块</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">getComponent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: 'lodash' */</span><span class="token string">'lodash'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> _ <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Dell'</span><span class="token punctuation">,</span> <span class="token string">'lee'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">' '</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> element<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写好以上代码后，我们同样使用<code v-pre>npm run build</code>进行打包，<code v-pre>dist</code>打包目录的输出结果如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> dist
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> <span class="token number">1</span><span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> <span class="token number">1</span><span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在浏览器中运行<code v-pre>dist</code>目录下的<code v-pre>index.html</code>，切换到<code v-pre>network</code>面板时，我们可以发现只加载了<code v-pre>main.js</code>，如下图：</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step4-1.png" alt="异步导入的结果"></p>
<p>当我们点击页面时，才 <strong>真正开始加载</strong> 第三方模块，如下图(<code v-pre>1.js</code>)：</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step4-2.png" alt="异步导入的结果"></p>
<h2 id="splitchunksplugin配置参数详解" tabindex="-1"><a class="header-anchor" href="#splitchunksplugin配置参数详解" aria-hidden="true">#</a> SplitChunksPlugin配置参数详解</h2>
<p>在上一节中，我们配置了<code v-pre>splitChunks</code>属性，它能让我们进行代码分割，其实这是因为 Webpack 底层使用了 <strong><code v-pre>splitChunksPlugin</code></strong> 插件。这个插件有很多可以配置的属性，它也有一些默认的配置参数，它的默认配置参数如下所示，我们将在下面为一些常用的配置项做一些说明。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置项</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'async'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maxAsyncRequests</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maxInitialRequests</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">automaticNameDelimiter</span><span class="token operator">:</span> <span class="token string">'~'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">vendors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/]node_modules[\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token literal-property property">reuseExistingChunk</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chunks参数" tabindex="-1"><a class="header-anchor" href="#chunks参数" aria-hidden="true">#</a> chunks参数</h3>
<p>此参数的含义在上一节中已详细说明，同时也配置了相应的案例，就<strong>不再次累述</strong>。</p>
<p>minSize 和 maxSize</p>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p><code v-pre>minSize</code>默认值是30000，也就是30kb，当代码超过30kb时，才开始进行代码分割，小于30kb的则不会进行代码分割；与<code v-pre>minSize</code>相对的，<code v-pre>maxSize</code>默认值为0，为0表示不限制打包后文件的大小，一般这个属性不推荐设置，一定要设置的话，它的意思是：打包后的文件最大不能超过设定的值，超过的话就会进行代码分割。</p>
</div>
<p>为了测试以上两个属性，我们来写一个小小的例子，在<code v-pre>src</code>目录下新建一个<code v-pre>math.js</code>文件，它的代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建完毕后，在<code v-pre>index.js</code>中引入<code v-pre>math.js</code>:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./math.js'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>打包分析</strong>：因为我们写的<code v-pre>math.js</code>文件的大小非常小，如果应用默认值，它是不会进行代码分割的，如果你要进一步测试<code v-pre>minSize</code>和<code v-pre>maxSize</code>，请自行修改后打包测试。</p>
<h3 id="minchunks" tabindex="-1"><a class="header-anchor" href="#minchunks" aria-hidden="true">#</a> minChunks</h3>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>默认值为1，表示某个模块复用的次数大于或等于一次，就进行代码分割。</p>
<p>如果将其设置大于1，例如：<code v-pre>minChunks:2</code>，在不考虑其他模块的情况下，以下代码不会进行代码分割：</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 配置了minChunks: 2，以下lodash不会进行代码分割，因为只使用了一次 </span>
<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Dell'</span><span class="token punctuation">,</span> <span class="token string">'Lee'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="maxasyncrequests-和-maxinitialrequests" tabindex="-1"><a class="header-anchor" href="#maxasyncrequests-和-maxinitialrequests" aria-hidden="true">#</a> maxAsyncRequests 和 maxInitialRequests</h3>
<ul>
<li><code v-pre>maxAsyncRequests</code>：它的默认值是5，代表在进行异步代码分割时，前五个会进行代码分割，超过五个的不再进行代码分割。</li>
<li><code v-pre>maxInitialRequests</code>：它的默认值是3，代表在进行同步代码分割时，前三个会进行代码分割，超过三个的不再进行代码分割。</li>
</ul>
<h3 id="automaticnamedelimiter" tabindex="-1"><a class="header-anchor" href="#automaticnamedelimiter" aria-hidden="true">#</a> automaticNameDelimiter</h3>
<p>这是一个连接符，左边是代码分割的缓存组，右边是打包的入口文件的项，例如<code v-pre>vendors~main.js</code></p>
<h3 id="cachegroups" tabindex="-1"><a class="header-anchor" href="#cachegroups" aria-hidden="true">#</a> cacheGroups</h3>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>在进行代码分割时，会把符合条件的放在一组，然后把一组中的所有文件打包在一起，默认配置项中有两个分组，一个是<code v-pre>vendors</code>和<code v-pre>default</code></p>
</div>
<p><strong>vendors组：</strong> 以下代码的含义是，将所有通过引用<code v-pre>node_modules</code>文件夹下的都放在<code v-pre>vendors</code>组中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">vendors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/]node_modules[\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>default组：</strong> 默认组，意思是，不符合<code v-pre>vendors</code>的分组都将分配在<code v-pre>default</code>组中，如果一个文件即满足<code v-pre>vendors</code>分组，又满足<code v-pre>default</code>分组，那么通过<code v-pre>priority</code>的值进行取舍，值最大<strong>优先级</strong>越高。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reuseExistingChunk</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>reuseExistingChunk：</strong> 中文解释是复用已存在的文件。意思是，如果有一个<code v-pre>a.js</code>文件，它里面引用了<code v-pre>b.js</code>，但我们其他模块又有引用<code v-pre>b.js</code>的地方。开启这个配置项后，在打包时会分析<code v-pre>b.js</code>已经打包过了，直接可以复用不用再次打包。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// a.js</span>
<span class="token keyword">import</span> b <span class="token keyword">from</span> <span class="token string">'b.js'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// c.js</span>
<span class="token keyword">import</span> b <span class="token keyword">from</span> <span class="token string">'b.js'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'c.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义文件名" tabindex="-1"><a class="header-anchor" href="#自定义文件名" aria-hidden="true">#</a> 自定义文件名</h3>
<p>我们如果不对代码分隔后的文件进行配置的话，那么在<code v-pre>vendors</code>组里面的文件名，默认会按<code v-pre>vendors</code>+<code v-pre>main</code>(入口)的形式命名，例如：<code v-pre>vendors~main.js</code>，如果我们想要自定义配置文件名的话，则需要分情况：</p>
<ul>
<li>同步代码分隔：使用<code v-pre>filename</code>命名。</li>
<li>非同步代码分隔：使用<code v-pre>name</code>来命令。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 同步代码分隔</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置略</span>
  <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'initial'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">vendors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/]node_modules[\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'vendors.js'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 非同步代码分隔</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置略</span>
  <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'async'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">vendors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/]node_modules[\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'vendors'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lazy-loading懒加载" tabindex="-1"><a class="header-anchor" href="#lazy-loading懒加载" aria-hidden="true">#</a> Lazy Loading懒加载</h2>
<div class="custom-container tip"><p class="custom-container-title">理解</p>
<p><code v-pre>Lazy Loading</code>懒加载的理解是：通过异步引入代码，这里说的异步，并不是在页面一开始就加载，而是在合适的时机进行加载。</p>
</div>
<p><code v-pre>Lazy Loading</code>懒加载的实际案例我们已经在上一小节书写了一个例子，不过我们依然可以做一下小小的改动，让它使用<code v-pre>async/await</code>进行异步加载，它的代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 页面点击的时候才加载lodash模块</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getComponet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getComponet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> _ <span class="token punctuation">}</span>  <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: 'lodash' */</span> <span class="token string">'lodash'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'**'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> element<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上懒加载的结果与上一小节的结果类似，就不在此展示，你可以在你本地的项目中打包后自行测试和查看。</p>
<h2 id="preloading-和prefetching" tabindex="-1"><a class="header-anchor" href="#preloading-和prefetching" aria-hidden="true">#</a> PreLoading 和Prefetching</h2>
<div class="custom-container tip"><p class="custom-container-title">理解</p>
<p>在以上<code v-pre>Lazy Loading</code>的例子中，只有当我们在页面点击时才会加载<code v-pre>lodash</code>，也有一些模块虽然是异步导入的，但我们希望能提前进行加载，<code v-pre>PreLoading</code>和<code v-pre>Prefetching</code>可以帮助我们实现这一点，它们的用法类似，但它们还是有区别的：<code v-pre>Prefetching</code>不会跟随主进程一起下载，而是等到主进程加载完毕，带宽释放后才进行加载，<code v-pre>PreLoading</code>会随主进程一起加载。</p>
</div>
<p>实现<code v-pre>PreLoading</code>或者<code v-pre>Prefetching</code>非常简单，我们只需要在上一节的例子中加一点点代码即可(参考高亮部分)：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 页面点击的时候才加载lodash模块</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getComponet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getComponet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> _ <span class="token punctuation">}</span>  <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackPrefetch: true */</span> <span class="token string">'lodash'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'**'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> element<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改写完毕后，我们使用<code v-pre>npm run dev</code>或者<code v-pre>npm run build</code>进行打包，在浏览器中点击页面，我们将在<code v-pre>network</code>面板看到如下图所示：</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step4-3.png" alt="Prefetch结果"></p>
<p>相信聪明的你一定看到了<code v-pre>0.js</code>，它是<code v-pre>from disk cache</code>，那为什么？原因在于，<code v-pre>Prefetching</code>的代码它会在<code v-pre>head</code>头部，添加像这样的一段内容：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>&lt;link rel=<span class="token string">"prefetch"</span> as=<span class="token string">"script"</span> href=<span class="token string">"0.js"</span>>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样一段内容追加到<code v-pre>head</code>头部后，指示浏览器在空闲时间里去加载<code v-pre>0.js</code>，这正是<code v-pre>Prefetching</code>它所能帮我们做到的事情，而<code v-pre>PreLoading</code>的用法于此类似，请自行测试。</p>
<h2 id="css代码分割" tabindex="-1"><a class="header-anchor" href="#css代码分割" aria-hidden="true">#</a> CSS代码分割</h2>
<div class="custom-container tip"><p class="custom-container-title">理解</p>
<p>当我们在使用<code v-pre>style-loader</code>和<code v-pre>css-loader</code>打包<code v-pre>.css</code>文件时会直接把CSS文件打包进<code v-pre>.js</code>文件中，然后直接把样式通过``的方式写在页面，如果我们要把CSS单独打包在一起，然后通过<code v-pre>link</code>标签引入，那么可以使用<code v-pre>mini-css-extract-plugin</code>插件进行打包。</p>
</div>
<p>截止到写此文档时，此插件还未支持HMR，意味着我们要使用这个插件进行打包CSS时，为了开发效率，我们需要配置在生产环境下，开发环境依然还是使用<code v-pre>style-loader</code>进行打包。
<strong>此插件的最新版已支持HMR</strong>。</p>
<p>在配置之前，我们需要使用<code v-pre>npm install</code>进行安装此插件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> mini-css-extract-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完毕后，由于此插件已支持<code v-pre>HMR</code>，那我们可以把配置写在<code v-pre>webpack.common.js</code>中(以下配置为完整配置，改动参考高亮代码块)：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mini-css-extract-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> 
            <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">hmr</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token literal-property property">reloadAll</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">'css-loader'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> 
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span> 
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'src/index.html'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].css'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'../dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完毕以后，我们来在<code v-pre>src</code>目录下新建一个<code v-pre>style.css</code>文件，它的代码如下：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们改动一下<code v-pre>index.js</code>文件，让它引入<code v-pre>style.css</code>，它的代码可以这样写：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./style.css'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'Hello,world'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>npm run build</code>进行打包，<code v-pre>dist</code>打包目录如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> dist
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>css
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>css<span class="token punctuation">.</span>map
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>如果发现并没有打包生成<code v-pre>main.css</code>文件，可能是<code v-pre>Tree Shaking</code>的副作用，应该在<code v-pre>package.json</code>中添加属性<code v-pre>sideEffects:['*.css']</code></p>
</div>
<h3 id="css压缩" tabindex="-1"><a class="header-anchor" href="#css压缩" aria-hidden="true">#</a> CSS压缩</h3>
<div class="custom-container tip"><p class="custom-container-title">理解</p>
<p><code v-pre>CSS</code>压缩的理解是：当我们有两个相同的样式分开写的时候，我们可以把它们合并在一起；为了减少<code v-pre>CSS</code>文件的体积，我们需要像压缩<code v-pre>JS</code>文件一样，压缩一下<code v-pre>CSS</code>文件。</p>
</div>
<p>我们再在<code v-pre>src</code>目录下新建<code v-pre>style1.css</code>文件，内容如下：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>index.js</code>文件中引入此CSS文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./style.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./style1.css'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'Hello,world'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用打包<code v-pre>npm run build</code>打包命令，我们发现虽然插件帮我们把CSS打包在了一个文件，但并没有合并压缩。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要实现<code v-pre>CSS</code>的压缩，我们需要再安装一个插件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> optimize-css-assets-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完毕后我们需要再一次改写<code v-pre>webpack.common.js</code>的配置，如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> optimizaCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'optimize-css-assets-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">optimizaCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完毕以后，我们再次使用<code v-pre>npm run build</code>进行打包，打包结果如下所示，可以看见，两个CSS文件的代码已经压缩合并了。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token property">line-height</span><span class="token punctuation">:</span>100px<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="webpack和浏览器缓存-caching" tabindex="-1"><a class="header-anchor" href="#webpack和浏览器缓存-caching" aria-hidden="true">#</a> Webpack和浏览器缓存(Caching)</h2>
<p>在讲这一小节之前，让我们清理下项目目录，改写下我们的<code v-pre>index.js</code>，删除掉一些没用的文件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Dell'</span><span class="token punctuation">,</span> <span class="token string">'Lee'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'---'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>清理后的项目目录可能是这样的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> build
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>common<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>prod<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> src
    <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
    <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> postcss<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用<code v-pre>npm run build</code>打包命令，打包我们的代码，可能会生成如下的文件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> build
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>common<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>prod<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> dist
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> vendors<span class="token operator">~</span>main<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> vendors<span class="token operator">~</span>main<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
<span class="token operator">|</span><span class="token operator">--</span> src
    <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
    <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json
<span class="token operator">|</span><span class="token operator">--</span> postcss<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到，打包生成的<code v-pre>dist</code>目录下，文件名是<code v-pre>main.js</code>和<code v-pre>vendors~main.js</code>，如果我们把<code v-pre>dist</code>目录放在服务器部署的话，当用户第一次访问页面时，浏览器会自动把这两个<code v-pre>.js</code>文件缓存起来，下一次非强制性刷新页面时，会直接使用缓存起来的文件。</p>
<p>假如，我们在用户第一次刷新页面和第二次刷新页面之间，我们修改了我们的代码，并再一次部署，这个时候由于浏览器缓存了这两个<code v-pre>.js</code>文件，所以用户界面无法获取最新的代码。</p>
<p>那么，我们有办法能解决这个问题呢，答案是<code v-pre>[contenthash]</code>占位符，它能根据文件的内容，在每一次打包时生成一个唯一的hash值，只要我们文件发生了变动，就重新生成一个hash值，没有改动的话，<code v-pre>[contenthash]</code>则不会发生变动，可以在<code v-pre>output</code>中进行配置，如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 开发环境下的output配置还是原来的那样，也就是webpack.common.js中的output配置</span>
<span class="token comment">// 因为开发环境下，我们不用考虑缓存问题</span>
<span class="token comment">// webpack.prod.js中添加output配置</span>
<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].[contenthash].js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">'[name].[contenthash].js'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>npm run build</code>进行打包，<code v-pre>dist</code>打包目录的结果如下所示，可以看到每一个<code v-pre>.js</code>文件都有一个唯一的<code v-pre>hash</code>值，这样配置后就能有效解决浏览器缓存的问题。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> dist
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>8bef05e11ca1dc804836<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> main<span class="token punctuation">.</span>8bef05e11ca1dc804836<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> vendors<span class="token operator">~</span>main<span class="token punctuation">.</span>4b711ce6ccdc861de436<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> vendors<span class="token operator">~</span>main<span class="token punctuation">.</span>4b711ce6ccdc861de436<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shimming" tabindex="-1"><a class="header-anchor" href="#shimming" aria-hidden="true">#</a> Shimming</h2>
<p>有时候我们在引入第三方库的时候，不得不处理一些全局变量的问题，例如jQuery的<code v-pre>$</code>，lodash的<code v-pre>_</code>，但由于一些老的第三方库不能直接修改它的代码，这时我们能不能定义一个全局变量，当文件中存在<code v-pre>$</code>或者<code v-pre>_</code>的时候自动的帮他们引入对应的包。</p>
<p>解决办法</p>
<p>这个问题，可以使用<code v-pre>ProvidePlugin</code>插件来解决，这个插件已经被 Webpack 内置，无需安装，直接使用即可。</p>
<p>在<code v-pre>src</code>目录下新建<code v-pre>jquery.ui.js</code>文件，代码如下所示，它使用了<code v-pre>jQuery</code>的<code v-pre>$</code>符号，创建这个文件目的是为了来模仿第三方库。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token constant">UI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">'background'</span><span class="token punctuation">,</span><span class="token string">'green'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建完毕后，我们修改一下<code v-pre>index.js</code>文件， 让它使用刚才我们创建的文件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">'jquery'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">UI</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./jquery.ui'</span><span class="token punctuation">;</span>

<span class="token constant">UI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> dom <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>_<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Dell'</span><span class="token punctuation">,</span> <span class="token string">'Lee'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'---'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#root'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们使用<code v-pre>npm run dev</code>进行打包，它的结果如下：</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step4-4.png" alt="打包结果"></p>
<p><strong>问题：</strong> 我们发现，根本运行不起来，报错<code v-pre>$ is not defined</code>
<strong>解答：</strong> 这是因为虽然我们在<code v-pre>index.js</code>中引入的<code v-pre>jquery</code>文件，但<code v-pre>$</code>符号只能在<code v-pre>index.js</code>才有效，在<code v-pre>jquery.ui.js</code>无效，报错是因为<code v-pre>jquery.ui.js</code>中<code v-pre>$</code>符号找不到引起的。</p>
<p>以上场景完美再现了我们最开始提到的问题，那么我们接下来就通过配置解决，首先在<code v-pre>webpack.common.js</code>文件中使用<code v-pre>ProvidePlugin</code>插件：</p>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>配置<code v-pre>$:'jquery'</code>，只要我们文件中使用了<code v-pre>$</code>符号，它就会自动帮我们引入<code v-pre>jquery</code>，相当于<code v-pre>import $ from 'jquery'</code></p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProvidePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">$</span><span class="token operator">:</span> <span class="token string">'jquery'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">_</span><span class="token operator">:</span> <span class="token string">'lodash'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>打包结果：</strong> 使用<code v-pre>npm run dev</code>进行打包，打包结果如下，可以发现，项目已经可以正确运行了。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step4-5.png" alt="打包结果"></p>
<h2 id="处理全局this指向问题" tabindex="-1"><a class="header-anchor" href="#处理全局this指向问题" aria-hidden="true">#</a> 处理全局this指向问题</h2>
<p>我们现在来思考一个问题，一个模块中的<code v-pre>this</code>到底指向什么，是模块自身还是全局的<code v-pre>window</code>对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// index.js代码，在浏览器中输出：false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">===</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示，如果我们使用<code v-pre>npm run dev</code>运行项目，运行<code v-pre>index.html</code>时，会在浏览器的<code v-pre>console</code>面板输出<code v-pre>false</code>，证明在模块中<code v-pre>this</code>指向模块自身，而不是全局的<code v-pre>window</code>对象，那么我们有什么办法来解决这个问题呢？</p>
<p><strong>解决办法</strong></p>
<p>安装使用<code v-pre>imports-loader</code>来解决这个问题</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> imports-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完毕后，我们在<code v-pre>webpack.common.js</code>加一点配置，在<code v-pre>.js</code>的loader处理中，添加<code v-pre>imports-loader</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 其它配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> 
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'imports-loader?this=>window'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完毕后使用<code v-pre>npm run dev</code>来进行打包，查看<code v-pre>console</code>控制台输出<code v-pre>true</code>，证明<code v-pre>this</code>这个时候已经指向了全局<code v-pre>window</code>对象，问题解决。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step4-6.png" alt="打包结果"></p>
</div></template>
