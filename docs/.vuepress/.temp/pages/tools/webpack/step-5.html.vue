<template><div><h1 id="webpack配置案例" tabindex="-1"><a class="header-anchor" href="#webpack配置案例" aria-hidden="true">#</a> Webpack配置案例</h1>
<h3 id="pwa配置" tabindex="-1"><a class="header-anchor" href="#pwa配置" aria-hidden="true">#</a> PWA配置</h3>
<div class="custom-container tip"><p class="custom-container-title">概念以及作用</p>
<p>PWA全称<code v-pre>Progressive Web Application</code>(渐进式应用框架)，它能让我们主动缓存文件，这样用户离线后依然能够使用我们缓存的文件打开网页，而不至于让页面挂掉，实现这种技术需要安装<code v-pre>workbox-webpack-plugin</code>插件</p>
</div>
<h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> workbox-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="config-js文件配置" tabindex="-1"><a class="header-anchor" href="#config-js文件配置" aria-hidden="true">#</a> config.js文件配置</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// PWA只有在线上环境才有效，所以需要在webpack.prod.js文件中进行配置</span>
<span class="token keyword">const</span> WorkboxWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'workbox-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> prodConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">WorkboxWebpackPlugin<span class="token punctuation">.</span>GenerateSW</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">clientsClaim</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">skipWaiting</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig<span class="token punctuation">,</span> prodConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置完毕后，让我们使用<code v-pre>npm run build</code>打包看一看生成了哪些文件，<code v-pre>dist</code>目录的打包结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">|</span>-- dist
<span class="token operator">|</span>   <span class="token operator">|</span>-- index.html
<span class="token operator">|</span>   <span class="token operator">|</span>-- main.f28cbac9bec3756acdbe.js
<span class="token operator">|</span>   <span class="token operator">|</span>-- main.f28cbac9bec3756acdbe.js.map
<span class="token operator">|</span>   <span class="token operator">|</span>-- precache-manifest.ea54096f38009609a46058419fc7009b.js
<span class="token operator">|</span>   <span class="token operator">|</span>-- service-worker.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以代码块高亮的部分，多出来了<code v-pre>precache-manifest.xxxxx.js</code>文件和<code v-pre>service-worker.js</code>，就是这两个文件能让我们实现PWA。</p>
<h3 id="改写index-js" tabindex="-1"><a class="header-anchor" href="#改写index-js" aria-hidden="true">#</a> 改写index.js</h3>
<div class="custom-container tip"><p class="custom-container-title">需要判断浏览器是否支持PWA，支持的时候我们才进行注册，注册的`.js`文件为我们打包后的`service-worker.js`文件。</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello,world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">'serviceWorker'</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'/service-worker.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">register</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'注册成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'注册失败'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pwa实际效果" tabindex="-1"><a class="header-anchor" href="#pwa实际效果" aria-hidden="true">#</a> PWA实际效果</h3>
<p>在<code v-pre>npm run dev</code>后，我们利用<code v-pre>webpack-dev-server</code>启动了一个小型的服务器，然后我们停掉这个服务器，刷新页面，PWA的实际结果如下图所示</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-5-1.png" alt="PWA实际结果"></p>
<h2 id="devserver请求转发" tabindex="-1"><a class="header-anchor" href="#devserver请求转发" aria-hidden="true">#</a> DevServer请求转发</h2>
<p>在这一小节中，我们要学到的技能有：</p>
<ul>
<li>如何进行接口代理配置</li>
<li>如何使用接口路径重写</li>
<li>其他常见配置的介绍</li>
</ul>
<p>假设我们现在有这样一个需求：我有一个URL地址(<code v-pre>http://www.dell-lee.com/react/api/header.json</code>)，我希望我请求的时候，请求的地址是<code v-pre>/react/api/header.json</code>，能有一个什么东西能自动帮我把请求转发到<code v-pre>http://www.dell-lee.com</code>域名下，那么这个问题该如何解决呢？</p>
<div class="custom-container tip"><p class="custom-container-title">解决办法</p>
<p>可以使用 Webpack 的<code v-pre>webpack-dev-server</code>这个插件来解决，其中需要配置<code v-pre>proxy</code>属性。</p>
</div>
<h3 id="如何进行接口代理配置" tabindex="-1"><a class="header-anchor" href="#如何进行接口代理配置" aria-hidden="true">#</a> 如何进行接口代理配置</h3>
<p>既然我们要做请求，那么安装<code v-pre>axios</code>来发请求再合适不过了，使用如下命令安装<code v-pre>axios</code>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> axios --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为我们的请求代理只能在开发环境下使用，线上的生产环境，需要走其他的代理配置，所以我们需要在<code v-pre>webpack.dev.js</code>中进行代理配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> devConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">'./dist'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/react/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://www.dell-lee.com'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置完毕后，我们在<code v-pre>index.js</code>文件中引入<code v-pre>axios</code>模块，再做请求转发。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/react/api/header.json'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span>data<span class="token punctuation">,</span>status<span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>npm run dev</code>后， 我们可以在浏览器中看到，我们已经成功请求到了我们的数据。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-5-2.png" alt="请求的结果"></p>
<h3 id="如何使用接口路径重写" tabindex="-1"><a class="header-anchor" href="#如何使用接口路径重写" aria-hidden="true">#</a> 如何使用接口路径重写</h3>
<p>现在依然假设有这样一个场景：<code v-pre>http://www.dell-lee.com/react/api/header.json</code>这个后端接口还没有开发完毕，但后端告诉我们可以先使用<code v-pre>http://www.dell-lee.com/react/api/demo.json</code> 这个测试接口，等接口开发完毕后，我们再改回来。</p>
<div class="custom-container tip"><p class="custom-container-title">解决办法</p>
<p>解决这个问题最佳办法是，代码中的地址不能变动，我们只在<code v-pre>proxy</code>代理中处理即可，使用<code v-pre>pathRewrite</code>属性进行配置。</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> devConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">'./dist'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/react/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://www.dell-lee.com'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">'header.json'</span><span class="token operator">:</span> <span class="token string">'demo.json'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，我们打包后在浏览器中可以看到，我们的测试接口的数据已经成功拿到了。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-5-3.png" alt="请求结果"></p>
<h3 id="其他常见配置的含义" tabindex="-1"><a class="header-anchor" href="#其他常见配置的含义" aria-hidden="true">#</a> 其他常见配置的含义</h3>
<p><strong>转发到https：</strong> 一般情况下，不接受运行在<code v-pre>https</code>上，如果要转发到<code v-pre>https</code>上，可以使用如下配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//其它配置</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/react/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'https://www.dell-lee.com'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>跨域：</strong> 有时候，在请求的过程中，由于同源策略的影响，存在跨域问题，我们需要处理这种情况，可以如下进行配置。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//其它配置</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/react/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'https://www.dell-lee.com'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代理多个路径到同一个target：</strong> 代理多个路径到同一个<code v-pre>target</code>，可以如下进行配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//其它配置</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/vue/api'</span><span class="token punctuation">,</span> <span class="token string">'/react/api'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://www.dell-lee.com'</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多页打包" tabindex="-1"><a class="header-anchor" href="#多页打包" aria-hidden="true">#</a> 多页打包</h2>
<p>现在流行的前端框架都推行单页引用(SPA)，但有时候我们不得不兼容一些老的项目，他们是多页的，那么如何进行多页打包配置呢？ 现在我们来思考一个问题：多页运用，即 <strong>多个入口文件+多个对应的html文件</strong> ，那么我们就可以配置 <strong>多个入口+配置多个<code v-pre>html-webpack-plugin</code></strong> 来进行。</p>
<div class="custom-container tip"><p class="custom-container-title">场景</p>
<p>假设现在我们有这样三个页面：<code v-pre>index.html</code>, <code v-pre>list.html</code>, <code v-pre>detail.html</code>，我们需要配置三个入口文件，新建三个<code v-pre>.js</code>文件。</p>
</div>
<p>在<code v-pre>webpack.common.js</code>中配置多个<code v-pre>entry</code>并使用<code v-pre>html-webpack-plugin</code>来生成对应的多个<code v-pre>.html</code>页面。 <strong>HtmlWebpackPlugin参数说明</strong>：</p>
<ul>
<li><code v-pre>template</code>：代表以哪个HTML页面为模板</li>
<li><code v-pre>filename</code>：代表生成页面的文件名</li>
<li><code v-pre>chunks</code>：代表需要引用打包后的哪些<code v-pre>.js</code>文件</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其它配置</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token string">'./src/list.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">'./src/detail.js'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'src/index.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'index.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'index'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'src/index.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'list.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'list'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'src/index.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'detail.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'detail'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>src</code>目录下新建三个<code v-pre>.js</code>文件，名字分别是：<code v-pre>index.js</code>，<code v-pre>list.js</code>和<code v-pre>detail.js</code>，它们的代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// index.js代码</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'this is index page!'</span>

<span class="token comment">// list.js代码</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'this is list page!'</span>

<span class="token comment">// detail.js代码</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'this is detail page!'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行<code v-pre>npm run build</code>进行打包：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打包后的<code v-pre>dist</code>目录：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> dist
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> detail<span class="token punctuation">.</span>dae2986ea47c6eceecd6<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> detail<span class="token punctuation">.</span>dae2986ea47c6eceecd6<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> detail<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>ca8e3d1b5e23e645f832<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>ca8e3d1b5e23e645f832<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> list<span class="token punctuation">.</span>5f40def0946028db30ed<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> list<span class="token punctuation">.</span>5f40def0946028db30ed<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> list<span class="token punctuation">.</span>html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>随机选择<code v-pre>list.html</code>在浏览器中运行，结果如下：</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-5-4.png" alt="运行结果"></p>
<div class="custom-container tip"><p class="custom-container-title">思考</p>
<p>现在只有三个页面，即我们要配置三个入口+三个对应的<code v-pre>html</code>，如果我们有十个入口，那么我们也要这样做重复的劳动吗？有没有什么东西能帮助我们自动实现呢？答案当然是有的！</p>
</div>
<p>我们首先定义一个<code v-pre>makeHtmlPlugins</code>方法，它接受一个 Webpack 配置项的参数<code v-pre>configs</code>，返回一个<code v-pre>plugins</code>数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">makeHtmlPlugins</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">configs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> htmlPlugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>configs<span class="token punctuation">.</span>entry<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    htmlPlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'src/index.html'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.html</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> htmlPlugins
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过调用<code v-pre>makeHtmlPlugins</code>方法，它返回一个<code v-pre>html</code>的<code v-pre>plugins</code>数组，把它和原有的<code v-pre>plugin</code>进行合并后再复制给<code v-pre>configs</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>configs<span class="token punctuation">.</span>plugins <span class="token operator">=</span> configs<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">makeHtmlPlugins</span><span class="token punctuation">(</span>configs<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> configs<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置完毕后，打包结果依然还是一样的，请自行测试，以下是<code v-pre>webpack.commom.js</code>完整的代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> miniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mini-css-extract-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> optimizaCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'optimize-css-assets-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> configs <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token string">'./src/list.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">'./src/detail.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> 
            <span class="token literal-property property">loader</span><span class="token operator">:</span> miniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
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
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"imports-loader?this=>window"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span> 
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">miniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].css'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProvidePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">'$'</span><span class="token operator">:</span> <span class="token string">'jquery'</span><span class="token punctuation">,</span>
      <span class="token string-property property">'_'</span><span class="token operator">:</span> <span class="token string">'lodash'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">optimizaCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'../dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">makeHtmlPlugins</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">configs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> htmlPlugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>configs<span class="token punctuation">.</span>entry<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    htmlPlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'src/index.html'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.html</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> htmlPlugins
<span class="token punctuation">}</span>
configs<span class="token punctuation">.</span>plugins <span class="token operator">=</span> configs<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">makeHtmlPlugins</span><span class="token punctuation">(</span>configs<span class="token punctuation">)</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> configs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包一个库文件-library" tabindex="-1"><a class="header-anchor" href="#打包一个库文件-library" aria-hidden="true">#</a> 打包一个库文件(Library)</h2>
<p>在上面所有的 Webpack 配置中，几乎都是针对业务代码的，如果我们要打包发布一个库，让别人使用的话，该怎么配置？在下面的几个小节中，我们将来讲一讲该怎么样打包一个库文件，并让这个库文件在多种场景能够使用。</p>
<h3 id="创建一个全新的项目" tabindex="-1"><a class="header-anchor" href="#创建一个全新的项目" aria-hidden="true">#</a> 创建一个全新的项目</h3>
<div class="custom-container tip"><p class="custom-container-title">步骤</p>
<ul>
<li>创建library项目</li>
<li>使用<code v-pre>npm init -y</code>进行配置<code v-pre>package.json</code></li>
<li>新建<code v-pre>src</code>目录，创建<code v-pre>math.js</code>文件、<code v-pre>string.js</code>文件、<code v-pre>index.js</code>文件</li>
<li>根目录下创建<code v-pre>webpack.config.js</code>文件</li>
<li>安装<code v-pre>webpack</code>、<code v-pre>webpack-cli</code></li>
</ul>
</div>
<p>按上面的步骤走完后，你的目录大概看起来是这样子的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> src
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> math<span class="token punctuation">.</span>js
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> string<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化package-json" tabindex="-1"><a class="header-anchor" href="#初始化package-json" aria-hidden="true">#</a> 初始化package.json</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 初始化后，改写package.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"library"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string-property property">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string-property property">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建src目录-并添加文件" tabindex="-1"><a class="header-anchor" href="#创建src目录-并添加文件" aria-hidden="true">#</a> 创建src目录，并添加文件</h3>
<p>在<code v-pre>src</code>目录下新建<code v-pre>math.js</code>，它的代码是四则混合运算的方法，如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">minus</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">division</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">/</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>src</code>目录下新建<code v-pre>string.js</code>，它有一个<code v-pre>join</code>方法，如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">join</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> <span class="token string">''</span> <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>src</code>目录下新建<code v-pre>index.js</code>文件，它引用<code v-pre>math.js</code>和<code v-pre>string.js</code>并导出，如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> math <span class="token keyword">from</span> <span class="token string">'./math'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> string <span class="token keyword">from</span> <span class="token string">'./string'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> math<span class="token punctuation">,</span> string <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加webpack-config-js" tabindex="-1"><a class="header-anchor" href="#添加webpack-config-js" aria-hidden="true">#</a> 添加webpack.config.js</h3>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>因为我们是要打包一个库文件，所以<code v-pre>mode</code>只配置为生产环境(<code v-pre>production</code>)即可。</p>
</div>
<p>在以上文件添加完毕后，我们来配置一下<code v-pre>webpack.config.js</code>文件，它的代码非常简单，如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'library.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装webpack" tabindex="-1"><a class="header-anchor" href="#安装webpack" aria-hidden="true">#</a> 安装Webpack</h3>
<p>根据涉及到 Webpack 打包，所以我们需要使用<code v-pre>npm instll</code>进行安装：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="进行第一次打包" tabindex="-1"><a class="header-anchor" href="#进行第一次打包" aria-hidden="true">#</a> 进行第一次打包</h3>
<p>使用<code v-pre>npm run build</code>进行第一次打包，在<code v-pre>dist</code>目录下会生成一个叫<code v-pre>library.js</code>的文件，我们要测试这个文件的话，需要在<code v-pre>dist</code>目录下新建<code v-pre>index.html</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> run build
$ <span class="token builtin class-name">cd</span> dist
$ <span class="token function">touch</span> index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>index.html</code>中引入<code v-pre>library.js</code>文件：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./library.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此，我们已经基本把项目目录搭建完毕，现在我们来考虑一下，可以在哪些情况下使用我们打包的文件：</p>
<ul>
<li>使用<code v-pre>ES Module</code>语法引入，例如<code v-pre>import library from 'library'</code></li>
<li>使用<code v-pre>CommonJS</code>语法引入，例如<code v-pre>const library = require('library')</code></li>
<li>使用<code v-pre>AMD</code>、<code v-pre>CMD</code>语法引入，例如<code v-pre>require(['library'], function() {// todo})</code></li>
<li>使用<code v-pre>script</code>标签引入，例如``</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">打包方案</p>
<p>针对以上几种使用场景，我们可以在<code v-pre>output</code>中配置<code v-pre>library</code>和<code v-pre>libraryTarget</code>属性(注意：这里的<code v-pre>library</code>和<code v-pre>libraryTarget</code>和我们的库名字<code v-pre>library.js</code>没有任何关系，前者是<code v-pre>webpack</code>固有的配置项，后者只是我们随意取的一个名字)</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">'library'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">'umd'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置属性说明：</strong></p>
<ul>
<li><strong><code v-pre>library</code></strong>：这个属性指，我们库的全局变量是什么，类似于<code v-pre>jquery</code>中的<code v-pre>$</code>符号</li>
<li><strong><code v-pre>libraryTarget</code></strong>: 这个属性指，我们库应该支持的模块引入方案，<code v-pre>umd</code>代表支持<code v-pre>ES Module</code>、<code v-pre>CommomJS</code>、<code v-pre>AMD</code>以及<code v-pre>CMD</code></li>
</ul>
<p>在配置完毕后，我们再使用<code v-pre>npm run build</code>进行打包，并在浏览器中运行<code v-pre>index.html</code>，在<code v-pre>console</code>控制台输出<code v-pre>library</code>这个全局变量，结果如下图所示:</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-5-5.png" alt="打包结果"></p>
<p>以上我们所写的库非常简单，在实际的库开发过程中，往往需要使用到一些<strong>第三方库</strong>，如果我们不做其他配置的话，第三方库会直接打包进我们的库文件中。</p>
<p>如果用户在使用我们的库文件时，也引入了这个第三方库，就造成了重复引用的问题，那么如何解决这个问题呢？</p>
<div class="custom-container tip"><p class="custom-container-title">解决办法</p>
<p>可以在<code v-pre>webpack.config.js</code>文件中配置<code v-pre>externals</code>属性</p>
</div>
<p>在<code v-pre>string.js</code>文件的<code v-pre>join</code>方法中，我们使用第三方库<code v-pre>lodash</code>中的<code v-pre>_join()</code>方法来进行字符串的拼接。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">join</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在修改完毕<code v-pre>string.js</code>文件后，使用<code v-pre>npm run build</code>进行打包，发现<code v-pre>lodash</code>直接打包进了我们的库文件，造成库文件积极臃肿，有70.8kb。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> run build
Built at: <span class="token number">2019</span>-04-05 00:47:25
     Asset      Size  Chunks             Chunk Names
library.js  <span class="token number">70.8</span> KiB       <span class="token number">0</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>针对以上问题，我们可以在<code v-pre>webpack.config.js</code>中配置<code v-pre>externals</code>属性，更多<code v-pre>externals</code>的用法请点击<a href="https://webpack.js.org/configuration/externals/#root" target="_blank" rel="noopener noreferrer">externals<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'lodash'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'library.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">'library'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">'umd'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完<code v-pre>externals</code>后，我们再进行打包，它的打包结果如下，我们可以看到我们的库文件又变回原来的大小了，证明我们的配置起作用了。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ npm run build
Built at<span class="token operator">:</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">05</span> <span class="token number">00</span><span class="token operator">:</span><span class="token number">51</span><span class="token operator">:</span><span class="token number">22</span>
     Asset      Size  Chunks             Chunk Names
library<span class="token punctuation">.</span>js  <span class="token number">1.63</span> KiB       <span class="token number">0</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何发布并使用我们的库文件" tabindex="-1"><a class="header-anchor" href="#如何发布并使用我们的库文件" aria-hidden="true">#</a> 如何发布并使用我们的库文件</h3>
<p>在打包完毕后，我们如何发布我们的库文件呢，以下是<strong>发布的步骤</strong>：</p>
<div class="custom-container tip"><p class="custom-container-title">步骤</p>
<ul>
<li>注册<code v-pre>npm</code>账号</li>
<li>修改<code v-pre>package.json</code>文件的入口，修改为：<code v-pre>&quot;main&quot;: &quot;./dist/library.js&quot;</code></li>
<li>运行<code v-pre>npm adduser</code>添加账户名称</li>
<li>运行<code v-pre>npm publish</code>命令进行发布</li>
<li>运行<code v-pre>npm install xxx</code>来进行安装</li>
</ul>
</div>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<ul>
<li>为了维护<code v-pre>npm</code>仓库的干净，我们并未实际运行<code v-pre>npm publish</code>命令，因为我们的库是无意义的，发布上去属于垃圾代码，所以为了维护<code v-pre>npm</code>仓库的干净性，请自行尝试发布。</li>
<li>自己包的名字不能和<code v-pre>npm</code>仓库中已有的包名字重复，所以需要在<code v-pre>package.json</code>中给<code v-pre>name</code>属性起一个特殊一点的名字才行，例如<code v-pre>&quot;name&quot;: &quot;why-library-2019&quot;</code></li>
</ul>
</div>
<h2 id="typescript配置" tabindex="-1"><a class="header-anchor" href="#typescript配置" aria-hidden="true">#</a> TypeScript配置</h2>
<p>随着<code v-pre>TypeScript</code>的不断发展，相信未来使用<code v-pre>TypeScript</code>来编写 JS 代码将变成主流形式，那么如何在 Webpack 中配置支持<code v-pre>TypeScript</code>呢？可以安装<code v-pre>ts-loader</code>和<code v-pre>typescript</code>来解决这个问题。</p>
<h3 id="新建一个项目webpack-typescript" tabindex="-1"><a class="header-anchor" href="#新建一个项目webpack-typescript" aria-hidden="true">#</a> 新建一个项目webpack-typescript</h3>
<div class="custom-container tip"><p class="custom-container-title">新创建一个项目，命名为`webpack-typescript`，并按如下步骤处理：</p>
<ul>
<li>使用<code v-pre>npm init -y</code>初始化<code v-pre>package.json</code>文件，并在其中添加<code v-pre>build</code> Webpack打包命令</li>
<li>新建<code v-pre>webpack.config.js</code>文件，并做一些简单配置，例如<code v-pre>entry</code>、<code v-pre>output</code>等</li>
<li>新建<code v-pre>src</code>目录，并在<code v-pre>src</code>目录下新建<code v-pre>index.ts</code>文件</li>
<li>新建<code v-pre>tsconfig.json</code>文件，并做一些配置</li>
<li>安装<code v-pre>webpack</code>和<code v-pre>webpack-cli</code></li>
<li>安装<code v-pre>ts-loader</code>和<code v-pre>typescript</code></li>
</ul>
</div>
<p>按以上步骤完成后，项目目录大概如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> src
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>ts
<span class="token operator">|</span><span class="token operator">--</span> tsconfig<span class="token punctuation">.</span>json
<span class="token operator">|</span><span class="token operator">--</span> webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>package.json</code>中添加好打包命令命令：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们需要对<code v-pre>webpack.config.js</code>做一下配置：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(ts|tsx)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'ts-loader'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.ts'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>tsconfig.json</code>里面进行<code v-pre>typescript</code>的相关配置，配置项的说明如下</p>
<ul>
<li><code v-pre>module</code>: 表示我们使用<code v-pre>ES6</code>模块</li>
<li><code v-pre>target</code>: 表示我们转换成<code v-pre>ES5</code>代码</li>
<li><code v-pre>allowJs</code>: 允许我们在<code v-pre>.ts</code>文件中通过<code v-pre>import</code>语法引入其他<code v-pre>.js</code>文件</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"ES6"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"ES5"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>src/index.ts</code>文件中书写<code v-pre>TypeScript</code>代码，像下面这样</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">greeting</span><span class="token operator">:</span> string
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">message</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>greeting <span class="token operator">=</span> message<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'hello, '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>greeting<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> greeter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeter</span><span class="token punctuation">(</span><span class="token string">'why'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeter<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包测试" tabindex="-1"><a class="header-anchor" href="#打包测试" aria-hidden="true">#</a> 打包测试</h3>
<ul>
<li>运行<code v-pre>npm run build</code>进行打包</li>
<li>在生成<code v-pre>dist</code>目录下，新建<code v-pre>index.html</code>，并引入打包后的<code v-pre>main.js</code>文件</li>
<li>在浏览器中运行<code v-pre>index.html</code></li>
</ul>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-5-6.png" alt="打包结果"></p>
<h3 id="使用其他模块的类型定义文件" tabindex="-1"><a class="header-anchor" href="#使用其他模块的类型定义文件" aria-hidden="true">#</a> 使用其他模块的类型定义文件</h3>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>如果我们要使用<code v-pre>lodash</code>库，必须安装其对应的类型定义文件，格式为<code v-pre>@types/xxx</code></p>
</div>
<p>安装<code v-pre>lodash</code>对应的<code v-pre>typescript</code>类型文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> lodash @types/lodash -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完毕后，我们在<code v-pre>index.ts</code>中引用<code v-pre>lodash</code>，并使用里面的方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span>

<span class="token keyword">class</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">greeting</span><span class="token operator">:</span> string
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">message</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>greeting <span class="token operator">=</span> message<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>greeting<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'**'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> greeter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeter</span><span class="token punctuation">(</span><span class="token string">'why'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeter<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包测试-1" tabindex="-1"><a class="header-anchor" href="#打包测试-1" aria-hidden="true">#</a> 打包测试</h3>
<p>使用<code v-pre>npm run build</code>，在浏览器中运行<code v-pre>index.html</code>，结果如下：</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/webpack/step-5-7.png" alt=""></p>
</div></template>
