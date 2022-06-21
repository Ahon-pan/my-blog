<template><div><h1 id="存储" tabindex="-1"><a class="header-anchor" href="#存储" aria-hidden="true">#</a> 存储</h1>
<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h2>
<div class="custom-container tip"><p class="custom-container-title">cookie</p>
<p>​		本身用于浏览器和server通讯，被‘借用’到本地存储</p>
<p>​		前端可通过document.cookie = '...' 来修改</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">'a=100'</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">'b=200'</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">'a=300'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span> <span class="token comment">// a=300;b=200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要页面不清除，页面刷新cookie仍然存在</p>
<p><strong>缺点</strong>：</p>
<ul>
<li>最大为4kb</li>
<li>http请求时需要发送到服务端，增加请求数据量</li>
<li>只能通过document.cookie = '...' 来修改</li>
</ul>
<h2 id="lcoalstorage-sessionstorage" tabindex="-1"><a class="header-anchor" href="#lcoalstorage-sessionstorage" aria-hidden="true">#</a> lcoalStorage/sessionStorage</h2>
<div class="custom-container tip"><p class="custom-container-title">lcoalStorage和sessionStorage</p>
<p>​		HTML5专门为存储而设计，最大可存5M</p>
<p>​		API简单易用 setTtem getItem</p>
<p>​		不会随着请求被发送出去</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>        <span class="token comment">// "100"</span>

sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'200'</span><span class="token punctuation">)</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>        <span class="token comment">// "200"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>localStorage数据会永久存储，除非代码或者手动删除</li>
<li>sessionStorage数据只存在于当前会话，浏览器关闭则清空</li>
<li>一般用localStorage会多一些（方便下次访问）</li>
</ul>
<h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2>
<ol>
<li>容量</li>
<li>API易用性</li>
<li>是否跟随http请求发送出去</li>
</ol>
</div></template>
