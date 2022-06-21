<template><div><h1 id="express项目改良" tabindex="-1"><a class="header-anchor" href="#express项目改良" aria-hidden="true">#</a> Express项目改良</h1>
<h2 id="创建控制器和装饰器" tabindex="-1"><a class="header-anchor" href="#创建控制器和装饰器" aria-hidden="true">#</a> 创建控制器和装饰器</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> reflect-metadata --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">|</span>-- src
<span class="token operator">|</span>   <span class="token operator">|</span>-- controller
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- decorators.ts
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- LoginController.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// LoginController.ts</span>
<span class="token keyword">import</span> <span class="token string">'reflect-metadata'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response<span class="token punctuation">,</span> response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> controller<span class="token punctuation">,</span> get <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./decorators'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getResponseData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../utils/util'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">BodyRequest</span> <span class="token keyword">extends</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">controller</span></span>
<span class="token keyword">class</span> <span class="token class-name">LoginController</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">'/logout'</span><span class="token punctuation">)</span>
  <span class="token function">loginout</span><span class="token punctuation">(</span>req<span class="token operator">:</span> BodyRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token function">getResponseData</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
  <span class="token function">home</span><span class="token punctuation">(</span>req<span class="token operator">:</span> BodyRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;html>
        &lt;body>
          &lt;a href='/getData'>爬取内容&lt;/a>
          &lt;a href='/showData'>展示内容&lt;/a>
          &lt;a href='/logout'>退出&lt;/a>
        &lt;/body>
      &lt;/html>
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;html>
        &lt;body>
          &lt;form method="post" action="/login">
            &lt;input type="password" name="password" />
            &lt;button>登陆&lt;/button>
          &lt;/form>
        &lt;/body>
      &lt;/html>
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">controller</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取'path',从target.prototype中的key上获取</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">,</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 存的key是'path',值是传入的path,存到target的key上</span>
    Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"tsc &amp;&amp; node ./build/controller/LoginController.js"</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>将方法所对应的路径，使用get这个方法装饰器，通过<strong>reflect-metadata</strong>绑定到方法上；</li>
<li>在<strong>LoginController</strong>这个类上添加<strong>controller</strong>类装饰器，获取到对应方法的<strong>path</strong>元数据值；</li>
</ul>
<h2 id="装饰器实现项目路由" tabindex="-1"><a class="header-anchor" href="#装饰器实现项目路由" aria-hidden="true">#</a> 装饰器实现项目路由</h2>
<ol>
<li>
<p>在装饰器内添加生成路由的逻辑</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token comment">// 导出路由</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">controller</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> path <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">,</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 拿到对应的方法</span>
    <span class="token keyword">const</span> handler <span class="token operator">=</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 生成路由，放到了router下面</span>
      router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>引入LoginController类生成路由</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// index.ts</span>
<span class="token keyword">import</span> <span class="token string">'./controller/LoginController'</span><span class="token punctuation">;</span>          <span class="token comment">// 生成路由</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./controller/decorators'</span><span class="token punctuation">;</span>       <span class="token comment">// 导出路由</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在index.ts中引入LoginController类，装饰器在类声明时执行，相当于执行了这个装饰器，得到了router</p>
</li>
<li>
<p>运行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问根路径（’/‘）和（’login‘）正常返回</p>
</li>
</ol>
<h2 id="多种请求方法装饰器" tabindex="-1"><a class="header-anchor" href="#多种请求方法装饰器" aria-hidden="true">#</a> 多种请求方法装饰器</h2>
<ul>
<li>增加method元数据区分各类请求方法</li>
<li>Method枚举类型解决method的any报错</li>
<li>getRequestDecorator工厂函数生成各种方法装饰器</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// decorators.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">enum</span> Method <span class="token punctuation">{</span>
  get <span class="token operator">=</span> <span class="token string">'get'</span><span class="token punctuation">,</span>
  post <span class="token operator">=</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
  put <span class="token operator">=</span> <span class="token string">'put'</span><span class="token punctuation">,</span>
  <span class="token keyword">delete</span> <span class="token operator">=</span> <span class="token string">'delete'</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">controller</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> path <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">,</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> method<span class="token operator">:</span> Method <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">'method'</span><span class="token punctuation">,</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> handler <span class="token operator">=</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path <span class="token operator">&amp;&amp;</span> method <span class="token operator">&amp;&amp;</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      router<span class="token punctuation">[</span>method<span class="token punctuation">]</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getRequestDecorator</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      Reflect<span class="token punctuation">.</span><span class="token function">defineMetadata</span><span class="token punctuation">(</span><span class="token string">'method'</span><span class="token punctuation">,</span> type<span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> get <span class="token operator">=</span> <span class="token function">getRequestDecorator</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token function">getRequestDecorator</span><span class="token punctuation">(</span><span class="token string">'post'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> put <span class="token operator">=</span> <span class="token function">getRequestDecorator</span><span class="token punctuation">(</span><span class="token string">'put'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> del <span class="token operator">=</span> <span class="token function">getRequestDecorator</span><span class="token punctuation">(</span><span class="token string">'delete'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// delete是关键字用del</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// LoginController.ts</span>
<span class="token keyword">import</span> <span class="token string">'reflect-metadata'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> controller<span class="token punctuation">,</span> get<span class="token punctuation">,</span> post <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./decorators'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getResponseData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../utils/util'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">BodyRequest</span> <span class="token keyword">extends</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">controller</span></span>
<span class="token keyword">class</span> <span class="token class-name">LoginController</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">post</span></span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span>
  <span class="token function">login</span><span class="token punctuation">(</span>req<span class="token operator">:</span> BodyRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
    <span class="token keyword">const</span> isLogin <span class="token operator">=</span> req<span class="token punctuation">.</span>session <span class="token operator">?</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token function">getResponseData</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">'已经登陆过'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>password <span class="token operator">===</span> <span class="token string">'123'</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>login <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token function">getResponseData</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token function">getResponseData</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">'登陆失败'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">'/logout'</span><span class="token punctuation">)</span>
  <span class="token function">logout</span><span class="token punctuation">(</span>req<span class="token operator">:</span> BodyRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
  <span class="token function">home</span><span class="token punctuation">(</span>req<span class="token operator">:</span> BodyRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
