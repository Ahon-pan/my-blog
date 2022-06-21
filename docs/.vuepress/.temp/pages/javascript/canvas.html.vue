<template><div><h1 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> Canvas</h1>
<h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2>
<p>📗 Canvas是用使用 JS画布的思想来绘制图形，下面通过一些示例掌握 Canvas 的使用</p>
<h3 id="项目模板" tabindex="-1"><a class="header-anchor" href="#项目模板" aria-hidden="true">#</a> 项目模板</h3>
<p>以下示例因为使用到了Typescript，所以使用vite创建typescript项目，并选择使用 <code v-pre>vanilla</code> 模板来开发</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">yarn</span> create vite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>项目安装执行结果</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>执行结果
✔ Project name: … aaa
✔ Select a framework: › vanilla
✔ Select a variant: › vanilla-ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录结构</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>├── images				 		//图片文件
│   └── p2.jpeg
├── index.html				//项目模板文件
├── package.json			//项目配置文件
├── src
│   ├── main.ts				//项目主文件，我们在这里编码
│   ├── style.css			//公共样式
│   └── vite-env.d.ts	//TS类型声明文件
├── tsconfig.json			//TS配置文件
└── yarn.lock					//扩展包版本锁定文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="矩形绘制" tabindex="-1"><a class="header-anchor" href="#矩形绘制" aria-hidden="true">#</a> 矩形绘制</h2>
<p>下面来学习使用strokeRect方法绘制边框矩形</p>
<h3 id="实心矩形" tabindex="-1"><a class="header-anchor" href="#实心矩形" aria-hidden="true">#</a> 实心矩形</h3>
<p>使用 <code v-pre>fillRect</code> 方法可以绘制实心矩形，下面是fillRect 方法的参数说明</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">x</td>
<td style="text-align:left">矩形左上角的 x 坐标</td>
</tr>
<tr>
<td style="text-align:left">y</td>
<td style="text-align:left">矩形左上角的 y 坐标</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">矩形的宽度，以像素计</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">矩形的高度，以像素计</td>
</tr>
</tbody>
</table>
<p>下面使用纯色填充画布</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/1.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 画布元素 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	您的浏览器不支持 HTML5 canvas
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
    <span class="token comment">//画布对象</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
    <span class="token comment">//定义填充颜色</span>
    app<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'#16a085'</span>
    <span class="token comment">//绘制矩形</span>
    app<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空心矩形" tabindex="-1"><a class="header-anchor" href="#空心矩形" aria-hidden="true">#</a> 空心矩形</h3>
<p>使用 <code v-pre>strokeRect</code> 方法可以绘制空心矩形，下面是strokeRect 方法的参数说明</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><em>x</em></td>
<td>矩形左上角的 x 坐标</td>
</tr>
<tr>
<td><em>y</em></td>
<td>矩形左上角的 y 坐标</td>
</tr>
<tr>
<td>width</td>
<td>矩形的宽度，以像素计</td>
</tr>
<tr>
<td>height</td>
<td>矩形的高度，以像素计</td>
</tr>
</tbody>
</table>
<p>下面绘制实线边框的示例代码</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/2.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 您的浏览器不支持 HTML5 canvas <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
    <span class="token comment">//画布对象</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
    <span class="token comment">//定义填充颜色</span>
    ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">'#16a085'</span>
    <span class="token comment">//线条宽度</span>
    ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">30</span>
    <span class="token comment">//边角类型：bevel斜角 ,round圆角，miter尖角</span>
    ctx<span class="token punctuation">.</span>lineJoin <span class="token operator">=</span> <span class="token string">'round'</span>
    <span class="token comment">//绘制矩形边框</span>
    ctx<span class="token punctuation">.</span><span class="token function">strokeRect</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="圆形绘制" tabindex="-1"><a class="header-anchor" href="#圆形绘制" aria-hidden="true">#</a> 圆形绘制</h2>
<p>使用canvas可以绘制圆形</p>
<h3 id="arc" tabindex="-1"><a class="header-anchor" href="#arc" aria-hidden="true">#</a> arc</h3>
<p>下面是绘制圆方法 arc 的参数说明</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>x</td>
<td>圆的中心的 x 坐标。</td>
</tr>
<tr>
<td><em>y</em></td>
<td>圆的中心的 y 坐标。</td>
</tr>
<tr>
<td><em>r</em></td>
<td>圆的半径。</td>
</tr>
<tr>
<td><em>sAngle</em></td>
<td>起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。</td>
</tr>
<tr>
<td><em>eAngle</em></td>
<td>结束角，以弧度计。</td>
</tr>
<tr>
<td><em>counterclockwise</em></td>
<td>可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。</td>
</tr>
</tbody>
</table>
<h3 id="绘制空心圆" tabindex="-1"><a class="header-anchor" href="#绘制空心圆" aria-hidden="true">#</a> 绘制空心圆</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/3.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
    <span class="token comment">//填充画布颜色</span>
    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">'red'</span>
    ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">20</span>
    ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="绘制实心圆" tabindex="-1"><a class="header-anchor" href="#绘制实心圆" aria-hidden="true">#</a> 绘制实心圆</h3>
<p>下面来掌握使用canvas绘制填充圆，绘制圆使用 arc 函数，具体参数说明参考上例。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/4.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
    <span class="token comment">//填充画布颜色</span>
    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'#f1c40f'</span>
    ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">20</span>
    ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节点绘制" tabindex="-1"><a class="header-anchor" href="#节点绘制" aria-hidden="true">#</a> 节点绘制</h2>
<div class="custom-container tip"><p class="custom-container-title">我们可以通过以下方法定义不同节点、线条样式来绘制图形</p>
<ul>
<li>beginPath() 重置绘制路径</li>
<li>lineTo() 开始绘制线条</li>
<li>moveTo() 把路径移动到画布中的指定点，但不会创建线条(lineTo方法会绘制线条)</li>
<li>closePath() 闭合线条绘制，即当前点连接到线条开始绘制点</li>
<li>lineWidth 线条宽度</li>
<li>strokeStyle 线条的样式，可以是颜色 、渐变</li>
<li>stroke() 根据上面方法定义的节点绘制出线条</li>
</ul>
</div>
<h3 id="绘制多边形" tabindex="-1"><a class="header-anchor" href="#绘制多边形" aria-hidden="true">#</a> 绘制多边形</h3>
<p>下面是根据节点来绘制三角形图形</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/5.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
            <span class="token selector">*</span> <span class="token punctuation">{</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">body</span> <span class="token punctuation">{</span>
                <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
                <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
                <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">app</span> <span class="token punctuation">{</span>
                <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
                <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
            <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
            <span class="token comment">//填充画布颜色</span>
            ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'#8e44ad'</span>
            ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> el<span class="token punctuation">.</span>width<span class="token punctuation">,</span> el<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
            <span class="token comment">//开始画线</span>
            ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">//移动起始点</span>
            ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token comment">//下一个节点</span>
            ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
            <span class="token comment">//下一个节点</span>
            ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
            <span class="token comment">//闭合节点</span>
            ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">//线宽</span>
            ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">10</span>
            <span class="token comment">//线颜色</span>
            ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">'#f1c40f'</span>
            <span class="token comment">//画线</span>
            ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
            <span class="token keyword">import</span> main <span class="token keyword">from</span> <span class="token string">'./main.js'</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a> 线性渐变</h2>
<p>📗 使用canvas的createLinearGradient() 方法可以创建线性的渐变对象，用于实现线性渐变效果。</p>
<h3 id="createlineargradient" tabindex="-1"><a class="header-anchor" href="#createlineargradient" aria-hidden="true">#</a> createLinearGradient</h3>
<p>下面是createLinearGradient线性渐变的参数</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">x0</td>
<td style="text-align:left">渐变开始点的 x 坐标</td>
</tr>
<tr>
<td style="text-align:left">y0</td>
<td style="text-align:left">渐变开始点的 y 坐标</td>
</tr>
<tr>
<td style="text-align:left">x1</td>
<td style="text-align:left">渐变结束点的 x 坐标</td>
</tr>
<tr>
<td style="text-align:left">y1</td>
<td style="text-align:left">渐变结束点的 y 坐标</td>
</tr>
</tbody>
</table>
<h3 id="渐变边框" tabindex="-1"><a class="header-anchor" href="#渐变边框" aria-hidden="true">#</a> 渐变边框</h3>
<p>下面是绘制激变的边框的效果</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/6.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 画布元素 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
    <span class="token comment">//画布对象</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
    <span class="token comment">//定义渐变的开始与结束坐标</span>
    <span class="token keyword">const</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
    <span class="token comment">// 定义渐变位置与颜色，参数一为位置是从 0～1 之间，参数二为激变颜色</span>
    gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'#1abc9c'</span><span class="token punctuation">)</span>
    gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token string">'#9b59b6'</span><span class="token punctuation">)</span>
    gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'#f1c40f'</span><span class="token punctuation">)</span>
    <span class="token comment">//渐变填充</span>
    ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> gradient
    <span class="token comment">//设置线的宽度</span>
    ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">20</span>
    <span class="token comment">//绘制线条矩形</span>
    ctx<span class="token punctuation">.</span><span class="token function">strokeRect</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="渐变填充" tabindex="-1"><a class="header-anchor" href="#渐变填充" aria-hidden="true">#</a> 渐变填充</h3>
<p>渐变也可以用于填充</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/7.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 画布元素 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 您的浏览器不支持 HTML5 canvas <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
    <span class="token comment">//画布对象</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
    <span class="token comment">// 定义渐变位置与颜色，参数一为位置是从 0～1 之间，参数二为激变颜色</span>
    gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'#1abc9c'</span><span class="token punctuation">)</span>
    gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token string">'#9b59b6'</span><span class="token punctuation">)</span>
    gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'#f1c40f'</span><span class="token punctuation">)</span>
    <span class="token comment">//定义填充颜色</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> gradient
    <span class="token comment">//绘制矩形</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清空区域" tabindex="-1"><a class="header-anchor" href="#清空区域" aria-hidden="true">#</a> 清空区域</h2>
<p>下面是将红色画布上清除一块区域，清除后的内容是透明的。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/8.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>

    canvas<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'red'</span>
    canvas<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
		<span class="token comment">//清除矩形区域</span>
    canvas<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="填充文字" tabindex="-1"><a class="header-anchor" href="#填充文字" aria-hidden="true">#</a> 填充文字</h2>
<p>下面掌握使用canvas的fillText方法绘制填充文字</p>
<h3 id="filltext" tabindex="-1"><a class="header-anchor" href="#filltext" aria-hidden="true">#</a> fillText</h3>
<p>下面是 fillText 方法的参数</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><em>text</em></td>
<td style="text-align:left">规定在画布上输出的文本。</td>
</tr>
<tr>
<td style="text-align:left"><em>x</em></td>
<td style="text-align:left">开始绘制文本的 x 坐标位置（相对于画布）。</td>
</tr>
<tr>
<td style="text-align:left"><em>y</em></td>
<td style="text-align:left">开始绘制文本的 y 坐标位置（相对于画布）。</td>
</tr>
<tr>
<td style="text-align:left"><em>maxWidth</em></td>
<td style="text-align:left">可选。允许的最大文本宽度，以像素计。</td>
</tr>
</tbody>
</table>
<h3 id="textbaseline" tabindex="-1"><a class="header-anchor" href="#textbaseline" aria-hidden="true">#</a> textBaseline</h3>
<p>textBaseline用于定义文字基线</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">alphabetic</td>
<td style="text-align:left">默认。文本基线是普通的字母基线。</td>
</tr>
<tr>
<td style="text-align:left">top</td>
<td style="text-align:left">文本基线是 em 方框的顶端。。</td>
</tr>
<tr>
<td style="text-align:left">hanging</td>
<td style="text-align:left">文本基线是悬挂基线。</td>
</tr>
<tr>
<td style="text-align:left">middle</td>
<td style="text-align:left">文本基线是 em 方框的正中。</td>
</tr>
<tr>
<td style="text-align:left">ideographic</td>
<td style="text-align:left">文本基线是表意基线。</td>
</tr>
<tr>
<td style="text-align:left">bottom</td>
<td style="text-align:left">文本基线是 em 方框的底端。</td>
</tr>
</tbody>
</table>
<h3 id="textalign" tabindex="-1"><a class="header-anchor" href="#textalign" aria-hidden="true">#</a> textAlign</h3>
<p>textAlign用于文本的对齐方式的属性</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">left</td>
<td style="text-align:left">文本左对齐</td>
</tr>
<tr>
<td style="text-align:left">right</td>
<td style="text-align:left">文本右对齐</td>
</tr>
<tr>
<td style="text-align:left">center</td>
<td style="text-align:left">文本居中对齐</td>
</tr>
<tr>
<td style="text-align:left">start</td>
<td style="text-align:left">文本对齐界线开始的地方 （左对齐指本地从左向右，右对齐指本地从右向左）</td>
</tr>
<tr>
<td style="text-align:left">end</td>
<td style="text-align:left">文本对齐界线结束的地方 （左对齐指本地从左向右，右对齐指本地从右向左）</td>
</tr>
</tbody>
</table>
<h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/9.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
    <span class="token comment">//画布对象</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
    <span class="token comment">//填充样式</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'red'</span>
    <span class="token comment">//文字大小与字体设置</span>
    ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">'30px CascadiaMono'</span>
    <span class="token comment">//定义文字基线</span>
    ctx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">'top'</span>
    <span class="token comment">//文字居中</span>
    ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">'center'</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="激变文字" tabindex="-1"><a class="header-anchor" href="#激变文字" aria-hidden="true">#</a> 激变文字</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/10.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
    <span class="token comment">//画布对象</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
    <span class="token comment">//定义渐变的开始与结束坐标</span>
    <span class="token keyword">const</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span>  <span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
    <span class="token comment">// 定义渐变位置与颜色，参数一为位置是从 0～1 之间，参数二为激变颜色</span>
    gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'#1abc9c'</span><span class="token punctuation">)</span>
    gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token string">'#9b59b6'</span><span class="token punctuation">)</span>
    gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'#f1c40f'</span><span class="token punctuation">)</span>
    <span class="token comment">//渐变填充</span>
    ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> gradient
    <span class="token comment">//文字大小与字体设置</span>
    ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">'30px CascadiaMono'</span>
    ctx<span class="token punctuation">.</span><span class="token function">strokeText</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片填充" tabindex="-1"><a class="header-anchor" href="#图片填充" aria-hidden="true">#</a> 图片填充</h2>
<p>下面掌握将图片填充到画布</p>
<h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">image</td>
<td style="text-align:left">规定要使用的图片、画布或视频元素。</td>
</tr>
<tr>
<td style="text-align:left">repeat</td>
<td style="text-align:left">默认。该模式在水平和垂直方向重复。</td>
</tr>
<tr>
<td style="text-align:left">repeat-x</td>
<td style="text-align:left">该模式只在水平方向重复。</td>
</tr>
<tr>
<td style="text-align:left">repeat-y</td>
<td style="text-align:left">该模式只在垂直方向重复。</td>
</tr>
<tr>
<td style="text-align:left">no-repeat</td>
<td style="text-align:left">该模式只显示一次（不重复）。</td>
</tr>
</tbody>
</table>
<h3 id="示例代码-1" tabindex="-1"><a class="header-anchor" href="#示例代码-1" aria-hidden="true">#</a> 示例代码</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/11.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 画布元素 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
    <span class="token comment">//画布对象</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
    <span class="token comment">//创建图片对象</span>
    <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'icon.jpeg'</span>
    <span class="token comment">//图片加载后处理</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">//第二个参数："repeat|repeat-x|repeat-y|no-repeat"</span>
        <span class="token keyword">const</span> pat <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createPattern</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token string">'repeat'</span><span class="token punctuation">)</span>
        <span class="token comment">//指定填充方式为贴图</span>
        ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> pat
        <span class="token comment">//开始填充</span>
        ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="💡-图片缩放" tabindex="-1"><a class="header-anchor" href="#💡-图片缩放" aria-hidden="true">#</a> 💡 图片缩放</h2>
<p>下面将图片直接绘制到画布上。</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/12.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 画布元素 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
    <span class="token comment">//画布对象</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
    <span class="token comment">//创建图片对象</span>
    <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'icon.jpeg'</span>
    <span class="token comment">//图片加载后处理</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      el<span class="token punctuation">.</span>width <span class="token operator">=</span> img<span class="token punctuation">.</span>naturalWidth <span class="token operator">*</span> <span class="token function">scale</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> el<span class="token punctuation">)</span>
      el<span class="token punctuation">.</span>height <span class="token operator">=</span> img<span class="token punctuation">.</span>naturalHeight <span class="token operator">*</span> <span class="token function">scale</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> el<span class="token punctuation">)</span>
      <span class="token comment">//绘制图片</span>
      app<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> el<span class="token punctuation">.</span>width<span class="token punctuation">,</span> el<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//取最小缩放比例</span>
    <span class="token keyword">function</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">img</span><span class="token operator">:</span> HTMLImageElement<span class="token punctuation">,</span> <span class="token literal-property property">el</span><span class="token operator">:</span> HTMLCanvasElement</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>width <span class="token operator">/</span> img<span class="token punctuation">.</span>naturalWidth<span class="token punctuation">,</span> el<span class="token punctuation">.</span>height <span class="token operator">/</span> img<span class="token punctuation">.</span>naturalHeight<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绘制像素" tabindex="-1"><a class="header-anchor" href="#绘制像素" aria-hidden="true">#</a> 绘制像素</h2>
<p>下面是绘制像素点的示例</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/13.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 画布元素 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
    <span class="token comment">//画布对象</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
    <span class="token comment">//画布填充为红色</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'red'</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> el<span class="token punctuation">.</span>width<span class="token punctuation">,</span> el<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
    <span class="token comment">//向画出中绘制点</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//随机生成坐标</span>
        <span class="token keyword">const</span> x <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> el<span class="token punctuation">.</span>width<span class="token punctuation">)</span>
        <span class="token keyword">const</span> y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> el<span class="token punctuation">.</span>width<span class="token punctuation">)</span>
        <span class="token comment">//绘制 5x5 白块</span>
        ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
        ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'#fff'</span>
        ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绘制不规则" tabindex="-1"><a class="header-anchor" href="#绘制不规则" aria-hidden="true">#</a> 绘制不规则</h2>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/14.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 画布元素 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token property">border</span><span class="token punctuation">:</span> solid 20px #000</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span>
    <span class="token comment">//画布对象并填充为黑色</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'#000'</span>
    app<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> el<span class="token punctuation">.</span>width<span class="token punctuation">,</span> el<span class="token punctuation">.</span>height<span class="token punctuation">)</span>

    <span class="token comment">//向画出中绘制点</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        app<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">//随机设置绘制位置</span>
        <span class="token comment">//随机设置圆的半径</span>
        app<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> el<span class="token punctuation">.</span>width<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> el<span class="token punctuation">.</span>height<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span>

        <span class="token comment">//随机设置填充颜色 </span>
        app<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'yellow'</span><span class="token punctuation">,</span> <span class="token string">'red'</span><span class="token punctuation">,</span> <span class="token string">'#16a085'</span><span class="token punctuation">,</span> <span class="token string">'#2ecc71'</span><span class="token punctuation">,</span> <span class="token string">'#f1c40f'</span><span class="token punctuation">,</span> <span class="token string">'#9b59b6'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        app<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="💡-黑板实例" tabindex="-1"><a class="header-anchor" href="#💡-黑板实例" aria-hidden="true">#</a> 💡 黑板实例</h2>
<p>https://github.com/caffreygo/canvas-blackboard</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/javascript/canvas/15.png" alt=""></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Draw</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
     <span class="token keyword">public</span> height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
     <span class="token keyword">public</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'#canvas'</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">,</span>
     <span class="token keyword">public</span> app <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">,</span>
     <span class="token keyword">public</span> btns <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">insertAdjacentElement</span><span class="token punctuation">(</span><span class="token string">'afterend'</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width
        <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setBackground</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">event</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//事件绑定</span>
    <span class="token keyword">private</span> <span class="token function">event</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//bind会返回新函数，addEventListener与removeEventListener要使用相同函数</span>
        <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">drawEventCallback</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousedown'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">//重新画线</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">//鼠标移动事件</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">//鼠标抬起时移除事件</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mouseup'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//黑板写字的事件回调函数</span>
    <span class="token keyword">private</span> <span class="token function">drawEventCallback</span><span class="token punctuation">(</span>event<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>offsetX<span class="token punctuation">,</span> event<span class="token punctuation">.</span>offsetY<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">'white'</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//截图</span>
    <span class="token keyword">public</span> <span class="token function">short</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> bt <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span>
        bt<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'截图'</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>btns<span class="token punctuation">.</span><span class="token function">insertAdjacentElement</span><span class="token punctuation">(</span><span class="token string">'beforeend'</span><span class="token punctuation">,</span> bt<span class="token punctuation">)</span>
        <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">insertAdjacentElement</span><span class="token punctuation">(</span><span class="token string">'afterend'</span><span class="token punctuation">,</span> img<span class="token punctuation">)</span>

        bt<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">//使用canval标签的toDataURL方法，获取图片数据内容</span>
            img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">'image/jpeg'</span><span class="token punctuation">)</span>
            img<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cssText <span class="token operator">=</span> <span class="token string">'width:300px;position:absolute;bottom:50px;right:0;border:solid 10px white;left:50%;transform:translateX(-50%);'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//清屏</span>
    <span class="token keyword">public</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> bt <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span>
        bt<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'清屏'</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>btns<span class="token punctuation">.</span><span class="token function">insertAdjacentElement</span><span class="token punctuation">(</span><span class="token string">'beforeend'</span><span class="token punctuation">,</span> bt<span class="token punctuation">)</span>
        bt<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'#000'</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>width<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//初始背景为黑色</span>
    <span class="token keyword">private</span> <span class="token function">setBackground</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'#000'</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>width<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> blackboard <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Draw</span><span class="token punctuation">(</span><span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
blackboard<span class="token punctuation">.</span><span class="token function">short</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
blackboard<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
