<template><div><h1 id="链接与图片" tabindex="-1"><a class="header-anchor" href="#链接与图片" aria-hidden="true">#</a> 链接与图片</h1>
<h2 id="图片处理" tabindex="-1"><a class="header-anchor" href="#图片处理" aria-hidden="true">#</a> 图片处理</h2>
<h3 id="图像格式" tabindex="-1"><a class="header-anchor" href="#图像格式" aria-hidden="true">#</a> 图像格式</h3>
<ul>
<li>网络带宽成本很高，图片处理在保证用户体验好的前提下，文件尺寸也要尽可能小</li>
<li>图片属性静态文件，不要放在WEB服务器上，而放在云储存服务器上并使用CDN加速</li>
<li>以JPEG类型优先使用，文件尺寸更小</li>
<li>小图片使用PNG，清晰度更高，因为文件尺寸小，文件也不会太大</li>
<li>网页图标建议使用css字体构建如 <a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont (opens new window)<ExternalLinkIcon/></a>或 <a href="https://fontawesome.com/icons?d=gallery" target="_blank" rel="noopener noreferrer">fontawesome(opens new window)<ExternalLinkIcon/></a></li>
</ul>
<table>
<thead>
<tr>
<th>格式</th>
<th>说明</th>
<th>透明</th>
</tr>
</thead>
<tbody>
<tr>
<td>PNG</td>
<td>无损压缩格式，适合图标、验证码等。有些小图标建议使用css字体构建。</td>
<td>支持</td>
</tr>
<tr>
<td>GIF</td>
<td>256色，可以产生动画效果（即GIF动图）</td>
<td>支持</td>
</tr>
<tr>
<td>JPEG</td>
<td>有损压缩的类型，如商品、文章的图片展示</td>
<td></td>
</tr>
</tbody>
</table>
<p>💡 使用<code v-pre>png</code> 类型，图片清晰，同时有透明色，当页面底色改变时也不需要修改图片。</p>
<p>💡 大图使用<code v-pre>jpeg</code> ，因为图片比较大使用png会造成文件过大，使用<code v-pre>jpeg</code>后尺寸不大而且清晰度也可以接受。</p>
<h3 id="使用图片" tabindex="-1"><a class="header-anchor" href="#使用图片" aria-hidden="true">#</a> 使用图片</h3>
<p>在网页中使用 <code v-pre>img</code> 标签展示图片，图片的大小、边框、倒角效果使用css处理。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>src</td>
<td>图片地址</td>
</tr>
<tr>
<td>alt</td>
<td>图像打开异常时的替代文本</td>
</tr>
</tbody>
</table>
<h2 id="网页链接" tabindex="-1"><a class="header-anchor" href="#网页链接" aria-hidden="true">#</a> 网页链接</h2>
<p>📗 不能通过一个页面展示网站的所有功能，需要在不同页面中跳转，这就是链接所起到的功能。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://doc.googlr.com<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>文档库<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>google文档库<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>href</td>
<td>跳转地址</td>
</tr>
<tr>
<td>target</td>
<td>_blank 新窗口打开 _self 当前窗口打开</td>
</tr>
<tr>
<td>title</td>
<td>链接提示文本</td>
</tr>
</tbody>
</table>
<h3 id="打开窗口" tabindex="-1"><a class="header-anchor" href="#打开窗口" aria-hidden="true">#</a> 打开窗口</h3>
<p>下面设置 target 属性在指定窗口打开。(从已有的google窗口中打开)</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.baidu.com<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>google<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    在IFRAME中打开
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'https://www.google.com'</span><span class="token punctuation">,</span> <span class="token string">'google'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="锚点链接" tabindex="-1"><a class="header-anchor" href="#锚点链接" aria-hidden="true">#</a> 锚点链接</h3>
<p>📗 锚点<code v-pre>#</code>可以设置跳转到页面中的某个部分。</p>
<ol>
<li>
<p>为元素添加<code v-pre>id</code> 属性来设置锚点</p>
</li>
<li>
<p>设置 <code v-pre>a</code> 标签的 <code v-pre>href</code> 属性</p>
</li>
<li>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#comment-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>跳转到评论区<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>comment-1<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    这是评论内容区
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>也可以跳转到不同页面的锚点</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>article.html#comment-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>跳转到评论区<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="邮箱链接" tabindex="-1"><a class="header-anchor" href="#邮箱链接" aria-hidden="true">#</a> 邮箱链接</h3>
<p>📗 除了页面跳转外可以指定其他链接。使用以下方式也有缺点，邮箱可能会被恶意用户采集到，所以有些用户使用 <code v-pre>test#qq.com</code> 然后提示用户 <code v-pre>请将#改为@后发邮件</code>的提示形式。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mailto:1106894094@qq.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>给后盾人发送邮件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="拨打电话" tabindex="-1"><a class="header-anchor" href="#拨打电话" aria-hidden="true">#</a> 拨打电话</h3>
<p>点击以下链接后，手机会询问用户是否拨打电话。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel:99999999999<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>联系客服<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件" aria-hidden="true">#</a> 下载文件</h3>
<p>📗 默认情况下使用链接可以<strong>下载</strong>浏览器无法处理的文件，如果下载图片需要后台语言告之浏览器<code v-pre>mime</code>类型。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.test.com/202005072207.zip<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>下载压缩包<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
