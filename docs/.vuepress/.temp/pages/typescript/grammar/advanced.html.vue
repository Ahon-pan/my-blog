<template><div><h1 id="typescript语法进阶" tabindex="-1"><a class="header-anchor" href="#typescript语法进阶" aria-hidden="true">#</a> TypeScript语法进阶</h1>
<h2 id="typescript中的配置文件" tabindex="-1"><a class="header-anchor" href="#typescript中的配置文件" aria-hidden="true">#</a> TypeScript中的配置文件</h2>
<h3 id="编译文件指定" tabindex="-1"><a class="header-anchor" href="#编译文件指定" aria-hidden="true">#</a> 编译文件指定</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tsc --init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化一个新文件夹并且生成一个tsconfig.json文件</p>
<p>直接 tsc指定编译文件 <strong>不会应用</strong>tsconfig.json的配置的</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tsc demo.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>直接运行tsc</strong>则会读取配置文件（ts-node demo.ts 也会使用tsconfig.json）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tsc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行 tsc 会先到tsconfig.json中查找配置中需要编译的文件(include)，没有则默认把根目录下的ts文件编译</p>
<ul>
<li>include / files指定需要编译的文件(正则匹配)</li>
<li>exclude指定不编译的文件(正则匹配)</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token string">"include"</span>：<span class="token punctuation">[</span><span class="token string">"./demo.ts"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token string">"compilerOptions"</span>： <span class="token punctuation">{</span>
        ...
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="compileroptions" tabindex="-1"><a class="header-anchor" href="#compileroptions" aria-hidden="true">#</a> compilerOptions</h3>
<ul>
<li>removeComments：移除ts对应的注释项</li>
<li>strict：对应的strict以下的配置都是true</li>
<li>noImplicitAny：不允许隐士配置any(true: 需要手动设置any类型)</li>
<li>strictNullChecks：强制检查null类型 （true : const str:string = null报错）</li>
<li>rootDir/outDir：指定编译的文件和输出的位置</li>
<li>incremental：增量编译，对已经编译的文件不再编译</li>
<li>target：es5编译后的语法</li>
<li>allowJs：对js文件的编译，（e.g. es6=&gt;es5）</li>
<li>checkJs: 是否检查JS文件的语法</li>
<li>sourceMap：是否生成代码的.map文件</li>
<li>noUnusedLocals：有定义但未使用的变量检查</li>
<li>noUnusedParameters：有定义但未使用的函数参数检查</li>
<li>baseUrl：根路径指定</li>
</ul>
<p>......</p>
<h2 id="联合类型和类型保护" tabindex="-1"><a class="header-anchor" href="#联合类型和类型保护" aria-hidden="true">#</a> 联合类型和类型保护</h2>
<h3 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型</h3>
<p><strong>type a | type b</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Bird</span> <span class="token punctuation">{</span>
  fly<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token function-variable function">sing</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  fly<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token function-variable function">bark</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">trainAnimal</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Bird <span class="token operator">|</span> Dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 语法只会提示共有的fly,typescript无法判断具体是哪种</span>
  animal<span class="token punctuation">.</span>fly<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unknow-any-never" tabindex="-1"><a class="header-anchor" href="#unknow-any-never" aria-hidden="true">#</a> unknow any never</h3>
<p>unknow与any类型是有区别的，any是没有类型，unknown是有类型，但是不知道；</p>
<p>never是永远没有返回类型，比如执行一半报错的函数；</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> abc<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token string">"hello"</span>；
<span class="token comment">// Type 'unknown' is not assignable to type 'string'</span>
<span class="token comment">// let b: string = abc；</span>
<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> abc <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"string"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> str <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型保护" tabindex="-1"><a class="header-anchor" href="#类型保护" aria-hidden="true">#</a> 类型保护</h2>
<h3 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">trainAnimal</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Bird <span class="token operator">|</span> Dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>animal<span class="token punctuation">.</span>fly<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>animal <span class="token keyword">as</span> Bird<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>animal <span class="token keyword">as</span> Dog<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> abc<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> abc <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"string"</span><span class="token punctuation">;</span>
<span class="token comment">//  类型 "string" 到类型 "number" 的转换可能是错误的，因为两种类型不能充分重叠。如果这是有意的，请先将表达式转换为 "unknown"</span>
<span class="token comment">//  let a: number = str as number;</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> str <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型断言有两种形式，两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有<code v-pre>as</code>语法断言是被允许的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">strLength</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>string<span class="token operator">></span>someValue<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">strLength</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token punctuation">(</span>someValue <span class="token keyword">as</span> string<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="as-const" tabindex="-1"><a class="header-anchor" href="#as-const" aria-hidden="true">#</a> as const</h4>
<p>断言为const数据，把数据的基本类型转化为了值类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// let a: number</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
<span class="token comment">// const b: 99</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
<span class="token comment">// let c: 99   </span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">99</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>
c <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token comment">// let arr: number[] 对于数组对象这种引用类型，let和const不影响类型推断</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// const arr1: (string | number | boolean)[]</span>
<span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> <span class="token string">'string'</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// const arr2: readonly [number, "string", 123, false] 转化成了元组</span>
<span class="token comment">// &lt;const>[a, 'string', 123, false] 也可以达到和as断言一样的效果</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> <span class="token string">'string'</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>

<span class="token comment">// let obj: { age: number; }</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token number">11</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// let obj1: { readonly age: 11; }</span>
<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token number">11</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h4>
<ul>
<li>断言</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// function func(): (string | ((x: number, y: number) => number))[]</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">"Jerry"</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=></span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>m<span class="token punctuation">,</span> n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// m可能是string或者Function</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token keyword">as</span> <span class="token builtin">Function</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 3</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token keyword">as</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//3</span>

<span class="token comment">// as [string, (x: number, y: number) => number]</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">Function</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>typeof</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">"Jerry"</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=></span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token punctuation">[</span><span class="token keyword">typeof</span> a<span class="token punctuation">,</span> <span class="token keyword">typeof</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>m<span class="token punctuation">,</span> n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">n</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>as const</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">"Jerry"</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=></span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
  <span class="token comment">// return [a, b] as [typeof a, typeof b];</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>m<span class="token punctuation">,</span> n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">n</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="非空断言" tabindex="-1"><a class="header-anchor" href="#非空断言" aria-hidden="true">#</a> 非空断言</h4>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// const el: HTMLDivElement = document.querySelector(".container") as HTMLDivElement;</span>
<span class="token comment">// !是非空断言，而as能具体断言为某个类型</span>
<span class="token keyword">const</span> el<span class="token operator">:</span> HTMLDivElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".container"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="in-语法" tabindex="-1"><a class="header-anchor" href="#in-语法" aria-hidden="true">#</a> in 语法</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">trainAnimal</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Bird <span class="token operator">|</span> Dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'sing'</span> <span class="token keyword">in</span> animal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    animal<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    animal<span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typeof-语法" tabindex="-1"><a class="header-anchor" href="#typeof-语法" aria-hidden="true">#</a> typeof 语法</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>first<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">,</span> second<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 运算符“+”不能应用于类型“string | number”和“string | number”</span>
  <span class="token comment">// return first + second</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> first <span class="token operator">===</span> <span class="token string">'string'</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> second <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> first <span class="token operator">+</span> second
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instanceof-语法" tabindex="-1"><a class="header-anchor" href="#instanceof-语法" aria-hidden="true">#</a> instanceof 语法</h3>
<p>Intanceof做类型保护（class才可以使用instanceof ， interface不可以）</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">NumberObj</span> <span class="token punctuation">{</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">addSecond</span> <span class="token punctuation">(</span>first <span class="token operator">:</span> object <span class="token operator">|</span> NumberObj<span class="token punctuation">,</span> second <span class="token operator">:</span> object <span class="token operator">|</span> NumberObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>first <span class="token keyword">instanceof</span> <span class="token class-name">NumberObj</span> <span class="token operator">&amp;&amp;</span> second <span class="token keyword">instanceof</span> <span class="token class-name">NumberObj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> first<span class="token punctuation">.</span>count <span class="token operator">+</span> second<span class="token punctuation">.</span>count
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enum-枚举类型" tabindex="-1"><a class="header-anchor" href="#enum-枚举类型" aria-hidden="true">#</a> Enum 枚举类型</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init -y
<span class="token function">npm</span> <span class="token function">install</span> ts-node -D
<span class="token function">npm</span> <span class="token function">install</span> typescript -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>JavaScript(场景：某个状态的值固定)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Status <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">OFFLINE</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token constant">ONLINE</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token constant">DELETED</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> Status<span class="token punctuation">.</span><span class="token constant">OFFLINE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'offline'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> Status<span class="token punctuation">.</span><span class="token constant">ONLINE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'online'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> Status<span class="token punctuation">.</span><span class="token constant">DELETED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'deleted'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">'error'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">getResult</span><span class="token punctuation">(</span>Status<span class="token punctuation">.</span><span class="token constant">ONLINE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>枚举类型</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 枚举类型的默认值从0开始，  0，1，2...</span>
<span class="token keyword">enum</span> Status <span class="token punctuation">{</span>
  <span class="token constant">OFFLINE</span><span class="token punctuation">,</span>
  <span class="token constant">ONLINE</span><span class="token punctuation">,</span>
  <span class="token constant">DELETED</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getResult</span><span class="token punctuation">(</span>status<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> Status<span class="token punctuation">.</span><span class="token constant">OFFLINE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'offline'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> Status<span class="token punctuation">.</span><span class="token constant">ONLINE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'online'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> Status<span class="token punctuation">.</span><span class="token constant">DELETED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'deleted'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">'error'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//	online</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Status<span class="token punctuation">.</span><span class="token constant">OFFLINE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 0</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Status<span class="token punctuation">.</span><span class="token constant">ONLINE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		 <span class="token comment">// 1</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Status<span class="token punctuation">.</span><span class="token constant">DELETED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	 <span class="token comment">// 2</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Status<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	   <span class="token comment">// OFFLINE     反向映射   </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 如果中间的某个值被设置了，后续的+1自增</span>
<span class="token keyword">enum</span> Status <span class="token punctuation">{</span>
  <span class="token constant">OFFLINE</span><span class="token punctuation">,</span>
  <span class="token constant">ONLINE</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token constant">DELETED</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0 4 5</span>
<span class="token comment">// Status[0]    undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数泛型" tabindex="-1"><a class="header-anchor" href="#函数泛型" aria-hidden="true">#</a> 函数泛型</h2>
<ul>
<li>场景</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">join</span><span class="token punctuation">(</span>first<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">,</span> second<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 需求如果fisrt是number或者string,second也要一样?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>泛型 generic <strong>泛指的类型</strong>，在使用的时候才会知道具体的类型，可以显式得声明，也可以让typescript进行类型推断</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// ABC 泛型（任意类型）</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">join</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">ABC</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>first<span class="token operator">:</span> <span class="token constant">ABC</span><span class="token punctuation">,</span>second<span class="token operator">:</span> <span class="token constant">ABC</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// 报错：类型“1”的参数不能赋给类型“string”的参数</span>
<span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token generic-function"><span class="token function">join</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// success</span>
<span class="token generic-function"><span class="token function">join</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">,</span><span class="token string">'1'</span><span class="token punctuation">)</span>
<span class="token generic-function"><span class="token function">join</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>泛型的使用</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">map</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">ABC</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token constant">ABC</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> params
<span class="token punctuation">}</span>
<span class="token generic-function"><span class="token function">map</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span>     <span class="token comment">//  123</span>

<span class="token comment">// T[]  与  Array&lt;T>  等价</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">map1</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> params
<span class="token punctuation">}</span>
<span class="token generic-function"><span class="token function">map1</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'123'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>     <span class="token comment">//  ['123']</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">map1</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> params
<span class="token punctuation">}</span>
<span class="token generic-function"><span class="token function">map2</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'123'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>     <span class="token comment">//  ['123']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>多个泛型的定义</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">join</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">P</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>first<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> second<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>

<span class="token generic-function"><span class="token function">join</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">'1'</span><span class="token punctuation">)</span>
<span class="token comment">// 如果没有写类型，typescript会类型推断</span>
<span class="token function">join</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">'1'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类中的泛型以及泛型类型、" tabindex="-1"><a class="header-anchor" href="#类中的泛型以及泛型类型、" aria-hidden="true">#</a> 类中的泛型以及泛型类型、</h2>
<h3 id="类中的泛型" tabindex="-1"><a class="header-anchor" href="#类中的泛型" aria-hidden="true">#</a> 类中的泛型</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">DataManager</span> <span class="token punctuation">{</span>
	<span class="token comment">// 可以传string或者number类型的数组...</span>
	<span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token keyword">private</span> data<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">getItem</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataManager</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>           <span class="token comment">//   '1'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了能传入各种类型的参数，并且返回和传入相应的类型，减少代码量</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">DataManager<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token keyword">private</span> data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">getItem</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// const data = new DataManager(['1']);    类型推断</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DanaManager<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>           <span class="token comment">//   '1'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>泛型类型约束（extends）</li>
</ul>
<p>如果要求this.data[index].name有值,传入T类型一定要包含name属性，此时返回值是string</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Item</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DataManager<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Item<span class="token operator">></span></span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token keyword">private</span> data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">getItem</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DanaManager</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		name<span class="token operator">:</span> <span class="token string">'caffrey'</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//  interface Test {</span>
<span class="token comment">//  	name: string</span>
<span class="token comment">//  }</span>
<span class="token comment">//  const data = new DanaManager&lt;Test>([{name: 'caffrey'}]);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>类接收的泛型的具体类型只能是number和string</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">DataManager<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token keyword">private</span> data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">getItem</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataManager<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型声明类型" tabindex="-1"><a class="header-anchor" href="#泛型声明类型" aria-hidden="true">#</a> 泛型声明类型</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 如何使用泛型作为一个具体的类型注解</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">hello</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> params<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//  const func: (T)=>string = &lt;T>() => {</span>
<span class="token comment">//  	return '123'</span>
<span class="token comment">//  }</span>
<span class="token keyword">const</span> func<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>patams<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">T</span> <span class="token operator">=</span> hello<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init -y
tsc -init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>tsconfig.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"outDir"</span><span class="token operator">:</span> <span class="token string">"./dist"</span><span class="token punctuation">,</span>
<span class="token property">"rootDir"</span><span class="token operator">:</span> <span class="token string">"./src"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>index.html</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./page.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>page.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Header</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is header'</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Content</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is content'</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Footer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is footer'</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 tsc -w (自动检测变化编译)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">|</span>-- namespace
<span class="token operator">|</span>   <span class="token operator">|</span>-- dist
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- page.js
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- index.html
<span class="token operator">|</span>   <span class="token operator">|</span>-- src
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- page.ts
<span class="token operator">|</span>   <span class="token operator">|</span>-- package.json
<span class="token operator">|</span>   <span class="token operator">|</span>-- tsconfig.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题：编译后的page.js文件暴露了很多的全局变量（控制台能够拿到Header、Content、Footer、Page）,而实际上需要保留的只有Page这个全局变量，需要在typescript中融入一些<strong>模块化</strong>的思想。</p>
<h3 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> namespace</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">namespace</span> Home <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">Header</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is header'</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">Content</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is content'</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">Footer</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is footer'</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 如果没有export,此时在控制台只能拿到一个空对象Home,export编译后（Home.Page = Page）</span>
  <span class="token comment">// new Home.page()</span>
  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">new</span> <span class="token class-name">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">new</span> <span class="token class-name">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">new</span> <span class="token class-name">Footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局变量只有一个Home,而且Home只暴露了一个Page方法（export）</p>
<h3 id="命名空间相互引用" tabindex="-1"><a class="header-anchor" href="#命名空间相互引用" aria-hidden="true">#</a> 命名空间相互引用</h3>
<p>将组件放在单独的文件中去管理，与页面逻辑分开（component / page两个全局变量）</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// Components</span>
<span class="token keyword">namespace</span> Components <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Header</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is header'</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Content</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is content'</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Footer</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is footer'</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// Home</span>
<span class="token keyword">namespace</span> Home <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">new</span> <span class="token class-name">Components</span><span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">new</span> <span class="token class-name">Components</span><span class="token punctuation">.</span><span class="token function">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">new</span> <span class="token class-name">Components</span><span class="token punctuation">.</span><span class="token function">Footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Document<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"./dist/components.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"./dist/page.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
      <span class="token keyword">new</span> <span class="token class-name">Home</span><span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包生成单个文件" tabindex="-1"><a class="header-anchor" href="#打包生成单个文件" aria-hidden="true">#</a> 打包生成单个文件</h3>
<p>这样导致出现了多个js文件的引入，如果希望只生成一个单独的文件，修改tsconfig.json(这种情况下module只支持amd和system)，不支持commonjs的模块化规范（修改后由于IDE延迟需要重新打开编辑器）</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"amd"</span><span class="token punctuation">,</span>
<span class="token property">"outFile"</span><span class="token operator">:</span> <span class="token string">"./build/page.js"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>打包后：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">|</span>-- namespace
<span class="token operator">|</span>   <span class="token operator">|</span>-- build
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- page.js
<span class="token operator">|</span>   <span class="token operator">|</span>-- src
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- components.ts
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- page.ts
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- index.html
<span class="token operator">|</span>   <span class="token operator">|</span>-- package.json
<span class="token operator">|</span>   <span class="token operator">|</span>-- tsconfig.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名空间依赖声明" tabindex="-1"><a class="header-anchor" href="#命名空间依赖声明" aria-hidden="true">#</a> 命名空间依赖声明</h3>
<p>namespace依赖之前的相互引用可以做一个声明</p>
<p>Home这个命名空间依赖于Components</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">///&lt;reference path='./components.ts' /></span>

<span class="token keyword">namespace</span> Home <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">new</span> <span class="token class-name">Components</span><span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">new</span> <span class="token class-name">Components</span><span class="token punctuation">.</span><span class="token function">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">new</span> <span class="token class-name">Components</span><span class="token punctuation">.</span><span class="token function">Footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内部其他声明" tabindex="-1"><a class="header-anchor" href="#内部其他声明" aria-hidden="true">#</a> 内部其他声明</h3>
<ul>
<li>
<p>命名空间内部声明interface</p>
</li>
<li>
<p>命名空间导出子命名空间</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">namespace</span> Components <span class="token punctuation">{</span>
  <span class="token comment">// new Components.SubComponents.Test()</span>
  <span class="token keyword">export</span> <span class="token keyword">namespace</span> SubComponents <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 声明interface</span>
  <span class="token class-name"><span class="token keyword">export</span></span> <span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token operator">...</span>Header Content Footer<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">///&lt;reference path='./components.ts' /></span>

<span class="token keyword">namespace</span> Home <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token punctuation">{</span>
    <span class="token comment">// interface使用</span>
    user<span class="token operator">:</span> Components<span class="token punctuation">.</span>User <span class="token operator">=</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">'caffrey'</span>
    <span class="token punctuation">}</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">new</span> <span class="token class-name">Components</span><span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">new</span> <span class="token class-name">Components</span><span class="token punctuation">.</span><span class="token function">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">new</span> <span class="token class-name">Components</span><span class="token punctuation">.</span><span class="token function">Footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="import对应的模块化" tabindex="-1"><a class="header-anchor" href="#import对应的模块化" aria-hidden="true">#</a> import对应的模块化</h2>
<p>修改Components</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Header</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is header'</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Content</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is content'</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Footer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is footer'</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./components'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打包生成AMD某块语法的js文件（module: amd）,浏览器不支持AMD(define =&gt; require)语法，需要引入能够识别define语法支持的文件。而且现在是在page这个模块定义了Page这个class</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./components'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Header</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is header'</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Content</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is content'</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Footer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elem<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is footer'</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./build/page.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string">'page'</span><span class="token punctuation">,</span>
        <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">new</span> <span class="token class-name">page<span class="token punctuation">.</span>default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种引入require.js文件的方式有些麻烦，可以结合webpack进行处理</p>
<h2 id="使用parcel打包代码" tabindex="-1"><a class="header-anchor" href="#使用parcel打包代码" aria-hidden="true">#</a> 使用parcel打包代码</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> parcel@next -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"scripts": {
	"start": "parcel ./src/index.html"
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行parcel对TS代码进行编译，然后在本地（localhost:1234）起一个服务器，然后我们便可以直接访问index.html文件，引入的ts代码以及被编译</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>// index.html
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./page.ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="描述文件中的全局类型" tabindex="-1"><a class="header-anchor" href="#描述文件中的全局类型" aria-hidden="true">#</a> 描述文件中的全局类型</h2>
<ul>
<li>定义全局变量 declare var</li>
<li>定义全局函数 declare function</li>
<li>定义全局对象 declare namespace</li>
</ul>
<p>仍然使用parcel对代码进行编译，引入jquery代码</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>--!</span> <span class="token attr-name">index.html</span> <span class="token attr-name">--</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.bootcss.com/jquery/3.4.1/jquery.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./page.ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// page.ts</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// $里面传一个字符串，如果没继续声明会报错，但是parcel会尝试打包，正常运行</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">'&lt;div>123&lt;/div>'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时运行<strong>npm run start</strong>代码可以运行，但是typescript下编辑器会对$进行报错；此时需要类型定义文件**.d.ts**</p>
<p>类型定义文件如果不引入，如何<strong>自己写一个类型定义文件</strong>？</p>
<h3 id="定义全局变量-函数" tabindex="-1"><a class="header-anchor" href="#定义全局变量-函数" aria-hidden="true">#</a> 定义全局变量/函数</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// jquery.d.ts</span>
<span class="token comment">// $是一个返回值为空的函数，接收的参数也是一个返回值为空的函数</span>
<span class="token comment">// 定义全局变量</span>
<span class="token comment">// declare var $: (param: () => void) => void；</span>

<span class="token keyword">interface</span> <span class="token class-name">JqueryInstance</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">html</span><span class="token operator">:</span> <span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> JqueryInstance<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义全局函数</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token function-variable function">readyFuc</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token comment">// 函数重载，$还可以接收一个字符串，返回也是一个jquery对象，有html方法</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">$</span><span class="token punctuation">(</span>selector<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> JqueryInstance<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface进行函数重载" tabindex="-1"><a class="header-anchor" href="#interface进行函数重载" aria-hidden="true">#</a> interface进行函数重载</h3>
<p>interface里面如果定义了多个函数的声明，就是函数的重载</p>
<p>当$既要是一个函数也是对象，使用declare声明；而如果只是函数的重载，interface也支持</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">JQuery</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token function-variable function">readyFunc</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token punctuation">(</span>selector<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> JqueryInstance<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> $<span class="token operator">:</span>JQuery<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义全局对象" tabindex="-1"><a class="header-anchor" href="#定义全局对象" aria-hidden="true">#</a> 定义全局对象</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">'&lt;div>123&lt;/div>'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// $ 还是一个对象, new一个class</span>
    <span class="token class-name"><span class="token keyword">new</span></span> $<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">namespace</span> <span class="token punctuation">{</span>
    <span class="token keyword">namespace</span> fn <span class="token punctuation">{</span>
    	<span class="token keyword">class</span> <span class="token class-name">init</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块代码的类型描述文件" tabindex="-1"><a class="header-anchor" href="#模块代码的类型描述文件" aria-hidden="true">#</a> 模块代码的类型描述文件</h2>
<p>使用模块包的方式安装jquery</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save jquery
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用import引入模块包，需要声明juqery的模块<strong>declare module 'jquery'</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// Es6 模块化 (jquery.d.ts)</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'jquery'</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">JqueryInstance</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">html</span><span class="token operator">:</span> <span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> JqueryInstance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 混合类型,不需要再declare</span>
  <span class="token keyword">function</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token function-variable function">readyFunc</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">$</span><span class="token punctuation">(</span>selector<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> JqueryInstance<span class="token punctuation">;</span>
  <span class="token keyword">namespace</span> $ <span class="token punctuation">{</span>
    <span class="token keyword">namespace</span> fn <span class="token punctuation">{</span>
      <span class="token keyword">class</span> <span class="token class-name">init</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 模块化定义.d.ts，需要export</span>
  <span class="token keyword">export</span> <span class="token operator">=</span> $<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// page.ts</span>
<span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">'jquery'</span><span class="token punctuation">;</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">'&lt;div>123&lt;/div>'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">new</span> <span class="token class-name">$</span><span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>common和umd模块的声明和ES6略有不同，需查阅</p>
<h2 id="泛型中keyof语法的使用" tabindex="-1"><a class="header-anchor" href="#泛型中keyof语法的使用" aria-hidden="true">#</a> 泛型中keyof语法的使用</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// page.ts</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> info<span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
  <span class="token function">getInfo</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// getInfo返回值为any</span>
    <span class="token comment">// return this.info[key];</span>
      
    <span class="token comment">// (method) Teacher.getInfo(key: string): string | number | undefined</span>
   	<span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">'name'</span> <span class="token operator">||</span> key <span class="token operator">===</span> <span class="token string">'age'</span> <span class="token operator">||</span> key <span class="token operator">===</span> <span class="token string">'gender'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>info<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> teacher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'caffrey'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">'male'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// const test = teacher.getInfo('name') as string;</span>
<span class="token keyword">const</span> test <span class="token operator">=</span> teacher<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有类是一个对象，希望通过key值获取对象的内容，并且能够获取到正确的类型推断：</p>
<p>通过泛型结合<strong>keyof</strong>来确定返回值类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// T extends 'name'</span>
<span class="token comment">// type T = 'name'</span>
<span class="token comment">// key: 'name'</span>
<span class="token comment">// Person['name']</span>

<span class="token comment">// type T = 'age'</span>
<span class="token comment">// key: 'age'</span>
<span class="token comment">// Person['age']</span>
<span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> info<span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token generic-function"><span class="token function">getInfo</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> Person<span class="token operator">></span></span></span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Person<span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>info<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> teacher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'caffrey'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">'male'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// const test: string</span>
<span class="token keyword">const</span> test <span class="token operator">=</span> teacher<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// const test: number</span>
<span class="token keyword">const</span> test <span class="token operator">=</span> teacher<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 类型“"abc"”的参数不能赋给类型“"name" | "age" | "gender"”的参数</span>
<span class="token keyword">const</span> test <span class="token operator">=</span> teacher<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型的值可以是一个字符串</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">NAME</span></span> <span class="token operator">=</span> <span class="token string">'name'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> abc<span class="token operator">:</span> <span class="token constant">NAME</span> <span class="token operator">=</span> <span class="token string">'name'</span><span class="token punctuation">;</span>

<span class="token comment">// 不能将类型“"hello"”分配给类型“"name"”</span>
<span class="token keyword">const</span> abc<span class="token operator">:</span> <span class="token constant">NAME</span> <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
