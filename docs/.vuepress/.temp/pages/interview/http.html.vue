<template><div><h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1>
<h2 id="_5-层网络协议模型" tabindex="-1"><a class="header-anchor" href="#_5-层网络协议模型" aria-hidden="true">#</a> 5 层网络协议模型</h2>
<ol>
<li>应用层（HTTP、FTP）</li>
<li>传输层（TCP、UDP）</li>
<li>网络层</li>
<li>数据链路层</li>
<li>物理层</li>
</ol>
<img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/http/img1.jpg" alt="通信协议" style="zoom:80%;" />
<h2 id="http-的三次握手" tabindex="-1"><a class="header-anchor" href="#http-的三次握手" aria-hidden="true">#</a> HTTP 的三次握手</h2>
<p>所谓的“三次握手”：为了对每次发送的数据量进行跟踪与协商，确保数据段的发送和接收同步，根据所接收到的数据量而确认数据发送、接收完毕后何时撤消联系，并建立虚连接。 [1]</p>
<p>为了提供可靠的传送，TCP 在发送新的数之前，以特定的顺序将数据包的序号，并需要这些包传送给目标机之后的确认消息。TCP 总是用来发送大批量的数据。当应用程序在收到数据后要做出确认时也要用到 TCP</p>
<img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/http/img2.jpg" alt="三次握手" style="zoom:80%;" />
<h2 id="uri-url-urn" tabindex="-1"><a class="header-anchor" href="#uri-url-urn" aria-hidden="true">#</a> URI URL-URN</h2>
<ol>
<li>
<h4 id="uri-universal-resource-identifier-统一资源标志符" tabindex="-1"><a class="header-anchor" href="#uri-universal-resource-identifier-统一资源标志符" aria-hidden="true">#</a> URI = Universal Resource Identifier 统一资源标志符</h4>
<p>它包含 URL 和 URN</p>
</li>
<li>
<h4 id="url-universal-resource-locator-统一资源定位符" tabindex="-1"><a class="header-anchor" href="#url-universal-resource-locator-统一资源定位符" aria-hidden="true">#</a> URL = Universal Resource Locator 统一资源定位符</h4>
<p>URL 唯一地标识一个资源在 Internet 上的位置。不管用什么方法表示，只要能定位一个资源，就叫 URL。</p>
</li>
<li>
<h4 id="urn-universal-resource-name-统一资源名称" tabindex="-1"><a class="header-anchor" href="#urn-universal-resource-name-统一资源名称" aria-hidden="true">#</a> URN = Universal Resource Name 统一资源名称</h4>
<p>URN 它命名资源但不指定如何定位资源，比如：只告诉你一个人的姓名，不告诉你这个人在哪。例如：telnet、mailto、news 和 isbn URI 等都是 URN。</p>
</li>
<li>
<p>URI、URL 和 URN 区别</p>
<ul>
<li>URI 指的是一个资源</li>
<li>URL 用地址定位一个资源</li>
<li>URN 用名称定位一个资源</li>
</ul>
</li>
</ol>
<h2 id="http-报文格式" tabindex="-1"><a class="header-anchor" href="#http-报文格式" aria-hidden="true">#</a> HTTP 报文格式</h2>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/http/img3.jpg" alt=""></p>
<p>http 方法：用来定义对资源的操作（GET、POST...）</p>
<p>http code：定义服务器对请求的处理结果</p>
<h2 id="curl-指令的简单应用" tabindex="-1"><a class="header-anchor" href="#curl-指令的简单应用" aria-hidden="true">#</a> curl 指令的简单应用</h2>
<p>curl 它的功能非常强大，命令行参数多达几十种。如果熟练的话，完全可以取代 Postman 这一类的图形界面工具。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/http/curlV.png" alt="1574690272753"></p>
<ul>
<li>不带有任何参数时，curl 就是发出 GET 请求。</li>
</ul>
<blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> https://www.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<p>上面命令向<code v-pre>www.example.com</code>发出 GET 请求，服务器返回的内容会在命令行输出。</p>
<ul>
<li><strong>-v</strong></li>
</ul>
<p><code v-pre>-v</code>参数输出通信的整个过程，用于调试。</p>
<blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> -v https://www.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<p><code v-pre>--trace</code>参数也可以用于调试，还会输出原始的二进制数据。</p>
<blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> --trace - https://www.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2>
<h3 id="access-control-allow-origin" tabindex="-1"><a class="header-anchor" href="#access-control-allow-origin" aria-hidden="true">#</a> Access-Control-Allow-Origin</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/http/img4.png" alt="跨域实例"></p>
<p>在 8888 端口下返回 test.html 文件，在 test 中访问 8887 端口</p>
<p>**跨域会导致浏览器拦截 response：**Access to XMLHttpRequest at 'http://localhost:8887/' from origin 'http://localhost:8888' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Access-Control-Allow-Origin'</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*： 表示允许任何服务都接受，可以设置特地域名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Access-Control-Allow-Origin'</span><span class="token operator">:</span> <span class="token string">'http://localhost:8888'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h3>
<p>原理：浏览器允许 link script 和 img 标签加载数据，不需要设置允许跨域 Access-Control-Allow-Origin</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/http/img5.png" alt="JSONP"></p>
<h2 id="cors-跨域限制以及请求校验" tabindex="-1"><a class="header-anchor" href="#cors-跨域限制以及请求校验" aria-hidden="true">#</a> CORS 跨域限制以及请求校验</h2>
<h3 id="限制" tabindex="-1"><a class="header-anchor" href="#限制" aria-hidden="true">#</a> 限制</h3>
<p>保持 Access-Control-Allow-Origin 允许之下，仍然是有限制的（返回 200 但是浏览器不允许）</p>
<ul>
<li>允许方法: GET、HEAD、POST</li>
<li>允许的 Content-Type: text/plain、multipart/form-data、application/x-www-form-urlencoded</li>
<li>其他限制：请求头限制、XMLHttpRequestUpload 对象均没有注册任何事件监听器、请求中没有使用 ReadableStream 对象</li>
</ul>
<p>method 限制：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'http://localhost:8887/'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'X-Test-Cors'</span><span class="token operator">:</span> <span class="token string">'123'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浏览器跨域预请求" tabindex="-1"><a class="header-anchor" href="#浏览器跨域预请求" aria-hidden="true">#</a> 浏览器跨域预请求</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Access-Control-Allow-Origin'</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Access-Control-Allow-Headers'</span><span class="token operator">:</span> <span class="token string">'X-Test-Cors'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Access-Control-Allow-Methods'</span><span class="token operator">:</span> <span class="token string">'POST,PUT,Delete'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Access-Control-Max-Age'</span><span class="token operator">:</span> <span class="token string">'1000'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过服务端设置允许的请求头来保证这个跨域请求的进行，在查看 Network 时会看到有两条请求记录吗，先是 OPTIONS 请求验证服务端是否允许此请求头的跨域，通过之后才是 POST 请求：</p>
<ol>
<li>
<p>OPTIONS</p>
</li>
<li>
<p>POST</p>
<p>保证跨域操作的安全性，对跨域方法和请求头的限制</p>
</li>
</ol>
<h3 id="access-control-max-age" tabindex="-1"><a class="header-anchor" href="#access-control-max-age" aria-hidden="true">#</a> Access-Control-Max-Age</h3>
<p>表示跨域请求的参数事件内在第一次预请求之后的时间内不需要再发送 OPTIONS 预请求（second）</p>
<h2 id="cache-control-缓存" tabindex="-1"><a class="header-anchor" href="#cache-control-缓存" aria-hidden="true">#</a> Cache-Control 缓存</h2>
<p>这个请求头只是一个希望你按照的这个规则来，你可以不遵守</p>
<h3 id="可缓存性" tabindex="-1"><a class="header-anchor" href="#可缓存性" aria-hidden="true">#</a> 可缓存性</h3>
<ul>
<li>public: 代表 http 经过的任何地方，客户端、浏览器、包括代理的中间服务器都可以进行缓存</li>
<li>private: 只有发起请求的浏览器可以进行和缓存</li>
<li>no-cache: 可以缓存的，但是每次访问缓存之前需要发送一个请求验证是否可以使用缓存的数据</li>
</ul>
<h3 id="到期" tabindex="-1"><a class="header-anchor" href="#到期" aria-hidden="true">#</a> 到期</h3>
<h4 id="max-age-s" tabindex="-1"><a class="header-anchor" href="#max-age-s" aria-hidden="true">#</a> max-age (s)</h4>
<p>指这个缓存什么时候到期，之后需要重新发起请求而不能读取缓存的内容。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">writeHeader</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/javascript'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Cache-Control'</span><span class="token operator">:</span> <span class="token string">'max-age=200'</span><span class="token punctuation">,</span> <span class="token comment">// 请求后的200s内再请求可使用缓存数据</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="s-maxage-s" tabindex="-1"><a class="header-anchor" href="#s-maxage-s" aria-hidden="true">#</a> s-maxage(s)</h4>
<p>在浏览器中会读取 max-age, 但是在代理服务器中如果同时存在 max-age 和 s-maxage, 会读取 s-maxage。</p>
<h4 id="max-stale-s" tabindex="-1"><a class="header-anchor" href="#max-stale-s" aria-hidden="true">#</a> max-stale(s)</h4>
<p>发起请求的一方主动带的一个请求头，即使 max-age 已经过期，超出 max-age 时间的响应消息如果还在 max-stale 有效期之内，还能读取缓存的内容，而不需要重新发起请求。</p>
<p>此时 max-age 和 max-stale 和</p>
<h3 id="重新验证" tabindex="-1"><a class="header-anchor" href="#重新验证" aria-hidden="true">#</a> 重新验证*</h3>
<h4 id="must-revalidate" tabindex="-1"><a class="header-anchor" href="#must-revalidate" aria-hidden="true">#</a> must-revalidate</h4>
<p>缓存如果过期必须从原服务端发送请求验证这个缓存是否真的过期，来重新获取数据，而不能读取本地缓存</p>
<h4 id="proxy-revalidate" tabindex="-1"><a class="header-anchor" href="#proxy-revalidate" aria-hidden="true">#</a> proxy-revalidate</h4>
<p>在代理服务器中需要重新验证</p>
<h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3>
<h4 id="no-store" tabindex="-1"><a class="header-anchor" href="#no-store" aria-hidden="true">#</a> no-store</h4>
<p>客户端和代理服务器都不可以使用缓存数据，必须重新发送请求</p>
<h4 id="no-transform" tabindex="-1"><a class="header-anchor" href="#no-transform" aria-hidden="true">#</a> no-transform</h4>
<p>代理服务器不能改动数据，例如压缩等等操作</p>
<h2 id="no-cache-资源验证" tabindex="-1"><a class="header-anchor" href="#no-cache-资源验证" aria-hidden="true">#</a> no-cache 资源验证</h2>
<h3 id="last-modified" tabindex="-1"><a class="header-anchor" href="#last-modified" aria-hidden="true">#</a> Last-Modified</h3>
<p>上次修改的时间，配合<strong>If-Modified-Since</strong>或者<strong>If-Unmodifiled-Since</strong>使用</p>
<p>服务端设置 Last-Modified，下次请求会带上 If-Modified-Since，以此判断资源是否修改过，然后确认要不要读取缓存的数据还是重新发起请求</p>
<h3 id="etag" tabindex="-1"><a class="header-anchor" href="#etag" aria-hidden="true">#</a> Etag</h3>
<p>数据签名，资源修改后就更新 Etag，配合例如对内容进行一个 hash 计算，判断两者是否一样，配合 If-Match 和 If-Non-Match 使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">writeHeader</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/javascript'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Cache-Control'</span><span class="token operator">:</span> <span class="token string">'max-age=200000，no-cache'</span><span class="token punctuation">,</span> <span class="token comment">// no-cache</span>
    <span class="token string-property property">'Last-Modified'</span><span class="token operator">:</span> <span class="token string">'data1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Etag</span><span class="token operator">:</span> <span class="token string">'data2'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// request  head</span>
<span class="token comment">// If-Modified-Since: data1</span>
<span class="token comment">// If-Non-Match：data2</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>etag <span class="token operator">===</span> data2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">writeHeader</span><span class="token punctuation">(</span><span class="token number">304</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/javascript'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'Cache-Control'</span><span class="token operator">:</span> <span class="token string">'max-age=200000，no-cache'</span><span class="token punctuation">,</span> <span class="token comment">// no-cache</span>
        <span class="token string-property property">'Last-Modified'</span><span class="token operator">:</span> <span class="token string">'data1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">Etag</span><span class="token operator">:</span> <span class="token string">'data2'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>当请求返回 304（Not-Modified）时，此时使用本地缓存的数据，在 respond 里面的内容是不会返回的</li>
</ul>
<h2 id="cookie-和-session" tabindex="-1"><a class="header-anchor" href="#cookie-和-session" aria-hidden="true">#</a> cookie 和 session</h2>
<h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h3>
<ul>
<li>node 里面通过 Set-Cookie 设置</li>
<li>下次请求的 head 里面会自动带上这个数据</li>
<li>可以设置多个 key=value</li>
</ul>
<h4 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h4>
<ul>
<li>max-age 和 expires 设置过期时间</li>
<li>Secure 只在 https 的时候发送</li>
<li>HttpOnly 无法通过 document.cookie 访问</li>
</ul>
<p><em>cookie 的过期时间是在浏览器关闭之后失效，在没有设置过期时间的情况下</em></p>
<ol>
<li>过期之后下次请求 Request Headers 的 Cookie 便不会带上这个 key=value</li>
<li>max-age 值有效时间是多长，expires 指到这个时间点过期</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">writeHeader</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/javascript'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Set-Cookie'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'id=123;max-age=10'</span><span class="token punctuation">,</span> <span class="token string">'abc=456；HttpOnly'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cookie-domain" tabindex="-1"><a class="header-anchor" href="#cookie-domain" aria-hidden="true">#</a> cookie domain</h4>
<p>cookie 在当前域下写入在其他域是无法访问的</p>
<p>但是如果在 test.com 里面设置了 cookie,二级域名下 a.test.com/b.test.com 都可以访问</p>
<h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h3>
<p>cookie 不等于 session，session 的实现方式有很多种，cookie 只是其中一种</p>
<p>例如通过对不同用户设置不同的唯一的 cookie 的 key=value 值，来<strong>定位用户的数据</strong></p>
<h2 id="http-长连接" tabindex="-1"><a class="header-anchor" href="#http-长连接" aria-hidden="true">#</a> HTTP 长连接</h2>
<p>http 的创建过程中需要创建一个 TCP 连接，长连接可以保持 TCP 的连接不关闭，减少三次握手导致的开销</p>
<p>chrome 下可以最多保持 6 个 TCP 的并发，那么 http 长连接可以在此 6 个 TCP 连接内传输</p>
<p>现代浏览器下和框架下一般都是长连接 Connection: keep-alive (close)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">writeHeader</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'......'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Connection</span><span class="token operator">:</span> <span class="token string">'close'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 每个http请求都要创建一个TCP连接</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTTP2：信道复用，tcp 内可以并发 http 请求</p>
<h2 id="数据协商" tabindex="-1"><a class="header-anchor" href="#数据协商" aria-hidden="true">#</a> 数据协商</h2>
<h3 id="accept-客户端" tabindex="-1"><a class="header-anchor" href="#accept-客户端" aria-hidden="true">#</a> Accept(客户端)</h3>
<ul>
<li>Accept：想要的数据类型</li>
<li>Accept-Encoding：数据的编码方式，限制服务端的数据压缩方法（gzip deflate br...）</li>
<li>Accept-Language：判断返回的语言(zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7... q 越大表示权重越大 )</li>
<li>User-Agent:：表示浏览器一些相关的信息，移动端、PC 端(Mozilla/5.0(windows NT 10.0; win64; ×64)...)</li>
</ul>
<h3 id="content-服务端" tabindex="-1"><a class="header-anchor" href="#content-服务端" aria-hidden="true">#</a> Content（服务端）</h3>
<ul>
<li>Content-Type：服务端返回的数据格式 (type/suntype)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">'X-Content-Type-Options'</span><span class="token operator">:</span> <span class="token string">'nosniff'</span>
<span class="token comment">// 让浏览器不预测返回的数据类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>发送请求也可以带 Content-Type</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/form<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POST<span class="token punctuation">"</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multipart/form-data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/form<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POST<span class="token punctuation">"</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>application/x-www-form-urlencoded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Content-Encoding: 返回的数据编码方式</li>
<li>Content-Language: 声明返回的语言</li>
</ul>
<h3 id="表单中的-enctype" tabindex="-1"><a class="header-anchor" href="#表单中的-enctype" aria-hidden="true">#</a> 表单中的 enctype</h3>
<h4 id="表单中的三种-entype" tabindex="-1"><a class="header-anchor" href="#表单中的三种-entype" aria-hidden="true">#</a> 表单中的三种 entype</h4>
<ul>
<li>application/x-www-urlencoded</li>
<li>multipart/form-data</li>
<li>text-plain</li>
</ul>
<p>GET 请求只支持 ASCII 字符集，因此，如果我们要发送更大<strong>字符集的内容</strong>，我们应使用 <strong>POST</strong> 请求。</p>
<p>默认情况下是 <code v-pre>application/x-www-urlencoded</code>，当表单使用 POST 请求时，数据会被以 x-www-urlencoded 方式编码到 Body 中来传送， 而如果 GET 请求，则是附在 url 链接后面来发送(query)。</p>
<p>如果要发送大量的二进制数据（non-ASCII），<code v-pre>&quot;application/x-www-form-urlencoded&quot;</code> 显然是低效的，因为它需要用 3 个字符来表示一个 non-ASCII 的字符。因此，这种情况下，应该使用 <code v-pre>&quot;multipart/form-data&quot;</code> 格式。</p>
<h4 id="application-x-www-urlencoded" tabindex="-1"><a class="header-anchor" href="#application-x-www-urlencoded" aria-hidden="true">#</a> application/x-www-urlencoded</h4>
<p>我们在通过 HTTP 向服务器发送 POST 请求提交数据，都是通过 form 表单形式提交的，代码如下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://w.sohu.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>txt1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>txt2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提交时会向服务器端发出这样的数据（已经去除部分不相关的头信息），数据如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>POST / HTTP/1.1
Content-Type:application/x-www-form-urlencoded
Accept-Encoding: gzip, deflate
Host: w.sohu.com
Content-Length: <span class="token number">21</span>
Connection: Keep-Alive
Cache-Control: no-cache

<span class="token assign-left variable">txt1</span><span class="token operator">=</span>hello<span class="token operator">&amp;</span><span class="token assign-left variable">txt2</span><span class="token operator">=</span>world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于普通的 HTML Form POST 请求，它会在头信息里使用 <code v-pre>Content-Length</code> 注明内容长度。
​ 请求头信息每行一条，空行之后便是 Body，即“内容”（entity）。内容的格式是在头信息中的 Content-Type 指定的，如上是 <code v-pre>application/x-www-form-urlencoded</code>，这意味着消息内容会经过 URL 格式编码，就像在 GET 请 求时 URL 里的 QueryString 那样。<code v-pre>txt1=hello&amp;txt2=world</code></p>
<h4 id="multipart-form-data" tabindex="-1"><a class="header-anchor" href="#multipart-form-data" aria-hidden="true">#</a> multipart/form-data</h4>
<p><code v-pre>multipart/form-data</code> 定义在 <a href="https://tools.ietf.org/html/rfc2388" target="_blank" rel="noopener noreferrer">rfc2388<ExternalLinkIcon/></a> 中，最早的 HTTP POST 是不支持文件上传的，给编程开发带来很多问题。但是在 1995 年，ietf 出台了 rfc1867，也就是《RFC 1867 -Form-based File Upload in HTML》，用以支持文件上传。所以 Content-Type 的类型扩充了 multipart/form-data 用以支持向服务器发送二进制数据。因此，发送 POST 请求时候，表单<code v-pre>&lt;form&gt;</code>属性 enctype 共有二个值可选，这个属性管理的是表单的 MIME 编码：</p>
<p>① application/x-www-form-urlencoded (默认值)
​ ② multipart/form-data</p>
<p>注：form 表单中 enctype 的默认值是 <code v-pre>enctype=&quot;application/x- www-form-urlencoded&quot;</code>.</p>
<p>通过 form 表单提交文件操作如下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FORM</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POST<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://w.sohu.com/t2/upload.do<span class="token punctuation">"</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multipart/form-data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>INPUT</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>city<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Santa colo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>INPUT</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>desc<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>INPUT</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pic<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FORM</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器将会发送以下数据：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>POST /t2/upload.do HTTP/1.1
User-Agent: SOHUWapRebot
Accept-Language: zh-cn,zh<span class="token punctuation">;</span><span class="token assign-left variable">q</span><span class="token operator">=</span><span class="token number">0.5</span>
Accept-Charset: GBK,utf-8<span class="token punctuation">;</span><span class="token assign-left variable">q</span><span class="token operator">=</span><span class="token number">0.7</span>,*<span class="token punctuation">;</span><span class="token assign-left variable">q</span><span class="token operator">=</span><span class="token number">0.7</span>
Connection: keep-alive
Content-Length: <span class="token number">60408</span>
Content-Type:multipart/form-data<span class="token punctuation">;</span> <span class="token assign-left variable">boundary</span><span class="token operator">=</span>ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
Host: w.sohu.com

--ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
Content-Disposition: form-data<span class="token punctuation">;</span> <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">"city"</span>

Santa colo
--ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
Content-Disposition: form-data<span class="token punctuation">;</span><span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">"desc"</span>
Content-Type: text/plain<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
Content-Transfer-Encoding: 8bit

<span class="token punctuation">..</span>.
--ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
Content-Disposition: form-data<span class="token punctuation">;</span><span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">"pic"</span><span class="token punctuation">;</span> <span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token string">"photo.jpg"</span>
Content-Type: application/octet-stream
Content-Transfer-Encoding: binary

<span class="token punctuation">..</span>. binary data of the jpg <span class="token punctuation">..</span>.
--ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的 <code v-pre>multipart/form-data</code> 格式发送的请求的样式来看，它包含了多个 <strong>Parts</strong>，每个 <strong>Part</strong> 都包含头信息部分，<strong>Part</strong> 头信息中必须包含一个 <code v-pre>Content-Disposition</code> 头，其他的头信息则为可选项， 比如 <code v-pre>Content-Type</code> 等。</p>
<p><strong>Content-Disposition</strong> 包含了 type 和 一个名字为 name 的 parameter，type 是 form-data，name 参数的值则为表单控件（也即 field）的名字，如果是文件，那么还有一个 filename 参数，值就是文件名。</p>
<p>比如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Content-Disposition: form-data<span class="token punctuation">;</span> <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">"user"</span><span class="token punctuation">;</span> <span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token string">"hello.txt"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的 &quot;user&quot; 就是表单中的控件的名字，后面的参数 filename 则是点选的文件名。
对于可选的 Content-Type（如果没有的话），默认就是 <code v-pre>text/plain</code>。</p>
<h5 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意：</h5>
<p>如果文件内容是通过填充表单来获得，那么上传的时候，Content-Type 会被自动设置（识别）成相应的格式，如果没法识别，那么就会被设置成 <code v-pre>&quot;application/octet-stream&quot;</code>
​ 如果多个文件被填充成单个表单项，那么它们的请求格式则会是 multipart/mixed。</p>
<p>如果 Part 的内容跟默认的 encoding 方式不同，那么会有一个 <code v-pre>&quot;content-transfer-encoding&quot;</code> 头信息来指定。</p>
<p>下面，我们填充两个文件到一个表单项中，行程的请求信息如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Content-Type: multipart/form-data<span class="token punctuation">;</span> <span class="token assign-left variable">boundary</span><span class="token operator">=</span>AaB03x

--AaB03x
Content-Disposition: form-data<span class="token punctuation">;</span> <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">"submit-name"</span>

Larry
--AaB03x
Content-Disposition: form-data<span class="token punctuation">;</span> <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">"files"</span>
Content-Type: multipart/mixed<span class="token punctuation">;</span> <span class="token assign-left variable">boundary</span><span class="token operator">=</span>BbC04y

--BbC04y
Content-Disposition: <span class="token function">file</span><span class="token punctuation">;</span> <span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token string">"file1.txt"</span>
Content-Type: text/plain

<span class="token punctuation">..</span>. contents of file1.txt <span class="token punctuation">..</span>.
--BbC04y
Content-Disposition: <span class="token function">file</span><span class="token punctuation">;</span> <span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token string">"file2.gif"</span>
Content-Type: image/gif
Content-Transfer-Encoding: binary

<span class="token punctuation">..</span>.contents of file2.gif<span class="token punctuation">..</span>.
--BbC04y--
--AaB03x--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="boundary-分隔符" tabindex="-1"><a class="header-anchor" href="#boundary-分隔符" aria-hidden="true">#</a> Boundary 分隔符</h4>
<p>每个部分使用 <code v-pre>--boundary</code> 分割开来，最后一行使用 <code v-pre>--boundary--</code> 结尾。</p>
<h2 id="redirect-重定向" tabindex="-1"><a class="header-anchor" href="#redirect-重定向" aria-hidden="true">#</a> Redirect 重定向</h2>
<p><strong>临时跳转 302</strong>：将请求重定向到新的地址，必须要设置代表需要进行跳转。</p>
<p><strong>永久跳转 301</strong>：永久定向到一个新的路由。from disk cache，可能会一直访问缓存数据，无法控制缓存。（302 需要先到旧地址再到新地址，301 则在下次让浏览器直接访问新地址）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>resquest<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">'/'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">302</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">Location</span><span class="token operator">:</span> <span class="token string">'/new'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>resquest<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">'/new'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/html'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'&lt;div>this is content&lt;/div>'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="csp" tabindex="-1"><a class="header-anchor" href="#csp" aria-hidden="true">#</a> CSP</h2>
<h3 id="content-security-policy" tabindex="-1"><a class="header-anchor" href="#content-security-policy" aria-hidden="true">#</a> Content-security-Policy</h3>
<ul>
<li>限制资源获取</li>
<li>报告资源获取越权</li>
</ul>
<h3 id="限制方式" tabindex="-1"><a class="header-anchor" href="#限制方式" aria-hidden="true">#</a> 限制方式</h3>
<p>default-src 限制全局、connect-src、img-src、manifest-src、style-src、script-src、frame-src、media-src、font-src...</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/html'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Content-Srcurity-Policy'</span><span class="token operator">:</span> <span class="token string">'default-src http:https'</span><span class="token punctuation">,</span>
    <span class="token comment">//只能通过https的方式加载，此时inline script无法加载</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/html'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Content-Srcurity-Policy'</span><span class="token operator">:</span> <span class="token string">"default-src 'self'"</span><span class="token punctuation">,</span>
    <span class="token comment">//不能引入外链的JavaScript</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/html'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Content-Srcurity-Policy'</span><span class="token operator">:</span> <span class="token string">"default-src 'self' https://source.com/"</span><span class="token punctuation">,</span>
    <span class="token comment">//不能引入外链的JavaScript,允许该域名内的数据加载</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="限制-form-表单的提交" tabindex="-1"><a class="header-anchor" href="#限制-form-表单的提交" aria-hidden="true">#</a> 限制 form 表单的提交</h3>
<ul>
<li>form 表单不受 default-src 的限制</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/html'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Content-Srcurity-Policy'</span><span class="token operator">:</span> <span class="token string">"default-src 'self' form-action 'self'"</span><span class="token punctuation">,</span>
    <span class="token comment">//form提交范围被限制</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="个别资源限制" tabindex="-1"><a class="header-anchor" href="#个别资源限制" aria-hidden="true">#</a> 个别资源限制</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/html'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Content-Srcurity-Policy'</span><span class="token operator">:</span> <span class="token string">"img-src 'self'; report-uri /report"</span><span class="token punctuation">,</span>
    <span class="token comment">//在遇到限制之后可以想/report发送一个csp的报告</span>
    <span class="token comment">//默认disposition enforce不允许加载</span>
    <span class="token comment">//Content-Srcurity-Policy-Report-Only 会做report工作但是仍然会加载</span>
    <span class="token comment">//report只能在head里面设置，在meta中无效</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'text/html'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Content-Srcurity-Policy'</span><span class="token operator">:</span> <span class="token string">"connect-src 'self'"</span><span class="token punctuation">,</span>
    <span class="token comment">// ajax请求的资源限制</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="meta-设置-csp" tabindex="-1"><a class="header-anchor" href="#meta-设置-csp" aria-hidden="true">#</a> Meta 设置 CSP</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
      <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Content-Security-Policy<span class="token punctuation">"</span></span>
      <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default-src <span class="token punctuation">'</span>self<span class="token punctuation">'</span> form-action <span class="token punctuation">'</span>self<span class="token punctuation">'</span><span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>

&lt;meta http-equiv="Content-Security-Policy" content="connect 'self'>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
