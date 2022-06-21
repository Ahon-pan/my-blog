<template><div><h1 id="排序聚合分组" tabindex="-1"><a class="header-anchor" href="#排序聚合分组" aria-hidden="true">#</a> 排序聚合分组</h1>
<h2 id="order-by" tabindex="-1"><a class="header-anchor" href="#order-by" aria-hidden="true">#</a> ORDER BY</h2>
<h3 id="排序介绍" tabindex="-1"><a class="header-anchor" href="#排序介绍" aria-hidden="true">#</a> 排序介绍</h3>
<div class="custom-container tip"><p class="custom-container-title">mysql对查询结果使用`order by` 进行排序</p>
<ul>
<li>对任何字段进行排序</li>
<li>desc降序，asc升序</li>
<li>对别名字段可排序</li>
<li>对函数结果可排序</li>
<li>支持多列表排序</li>
<li>排序受校对规则影响（请查看其他章节课程了解校对规则）</li>
</ul>
</div>
<blockquote>
<p>Descending：降序；Ascending：升序</p>
</blockquote>
<h3 id="排序实例" tabindex="-1"><a class="header-anchor" href="#排序实例" aria-hidden="true">#</a> 排序实例</h3>
<p><strong>从男到女排序</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> stu <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> sex <span class="token keyword">ASC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>从男到女排序年龄从小到大排序</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> stu <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> sex <span class="token keyword">ASC</span><span class="token punctuation">,</span>birthday <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>随机获取学生</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> stu <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> RAND<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">LIMIT</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>按出生月份从小到大排序</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> birthday<span class="token punctuation">,</span><span class="token keyword">MONTH</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span> <span class="token keyword">as</span> m <span class="token keyword">FROM</span> stu <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> m <span class="token keyword">ASC</span><span class="token punctuation">;</span>

<span class="token comment"># 或使用字符串函数操作</span>
<span class="token keyword">SELECT</span> birthday<span class="token punctuation">,</span><span class="token function">mid</span><span class="token punctuation">(</span>birthday<span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">as</span> m <span class="token keyword">FROM</span> stu
<span class="token keyword">WHERE</span> birthday <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> m <span class="token keyword">ASC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>年龄最大的90后</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> <span class="token keyword">year</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span><span class="token operator">>=</span><span class="token number">1990</span> <span class="token keyword">order</span> <span class="token keyword">by</span> birthday <span class="token keyword">asc</span> <span class="token keyword">limit</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自定义排序-field" tabindex="-1"><a class="header-anchor" href="#自定义排序-field" aria-hidden="true">#</a> 自定义排序 field</h3>
<p>field函数用于比较值在集合中的索引，利用这一特性可以自定义排序</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> FIELD<span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'c'</span><span class="token punctuation">,</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment"># 2</span>
<span class="token comment"># 第一个a 为比较字符，后面的 c/a/b为集合。所以结果为2，如果在集合中不存在为0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 field 进行自定义排序（赵2 =&gt; 何1 =&gt; 0...）</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> stu <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> FIELD<span class="token punctuation">(</span><span class="token keyword">left</span><span class="token punctuation">(</span>sname<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'何'</span><span class="token punctuation">,</span><span class="token string">'赵'</span><span class="token punctuation">)</span> <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> COUNT</h2>
<p><strong>统计所有学生人数</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>所有女生人数</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># SELECT COUNT(*) FROM stu WHERE sex=2;</span>
<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> stu <span class="token keyword">WHERE</span> sex<span class="token operator">=</span><span class="token string">'女'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>统计所有分配班级的学生（count(字段)不会统计null值，使用count(*)时会计算null），所以下面使用具体的字段</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># SELECT count(*) FROM stu WHERE class_id IS NOT NULL;</span>
<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>class_id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="min-max" tabindex="-1"><a class="header-anchor" href="#min-max" aria-hidden="true">#</a> MIN/MAX</h2>
<p><strong>获取最小的学生出生年份</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">year</span><span class="token punctuation">(</span><span class="token function">max</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>最大的班级编号</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">max</span><span class="token punctuation">(</span>class_id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>获取点击数最少的文章</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># select min(click) from article;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> article <span class="token keyword">WHERE</span> click <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>click<span class="token punctuation">)</span> <span class="token keyword">FROM</span> article<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment"># click数一样的都会出来</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sum-avg" tabindex="-1"><a class="header-anchor" href="#sum-avg" aria-hidden="true">#</a> SUM/AVG</h2>
<p><strong>获取所有文章总点击数</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>click<span class="token punctuation">)</span> <span class="token keyword">FROM</span> article<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>获取平均点击数</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>click<span class="token punctuation">)</span> <span class="token keyword">FROM</span> article<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>获取低于平均点击数据的文章：子查询</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> article <span class="token keyword">WHERE</span> click <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>click<span class="token punctuation">)</span> <span class="token keyword">FROM</span> article<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>获取学生的平均年龄</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># ROUND 四舍五入    AVG平均值</span>
<span class="token keyword">SELECT</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token function">AVG</span><span class="token punctuation">(</span>TIMESTAMPDIFF<span class="token punctuation">(</span><span class="token keyword">YEAR</span><span class="token punctuation">,</span>birthday<span class="token punctuation">,</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> stu <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="distinct" tabindex="-1"><a class="header-anchor" href="#distinct" aria-hidden="true">#</a> DISTINCT</h2>
<p>🔖 <code v-pre>distinct</code>用于去除结果集中的重复记录</p>
<p><strong>获取所有班级编号</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> class_id <span class="token keyword">AS</span> class <span class="token keyword">FROM</span> stu <span class="token keyword">WHERE</span> class_id <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>获取学生数，同班同名的算一个</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># DISTINCT class_id,sname   同一个班级内同名的只算一个</span>
<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> class_id<span class="token punctuation">,</span>sname<span class="token punctuation">)</span> <span class="token keyword">FROM</span> stu <span class="token keyword">WHERE</span> class_id <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>获取班级平均人数，去掉重复的数值</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> <span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> c <span class="token keyword">FROM</span> users <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="group" tabindex="-1"><a class="header-anchor" href="#group" aria-hidden="true">#</a> GROUP</h2>
<p>🔖 GROUP BY是对查询结果分组，应该出现在WHERE条件的后面。统计受ONLY_FULL_GROUP_BY模式影响</p>
<p><strong>统计每个班级的人数</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>class_id<span class="token punctuation">)</span><span class="token punctuation">,</span>class_id <span class="token keyword">FROM</span> stu
<span class="token keyword">WHERE</span> class_id <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class_id <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询模式" tabindex="-1"><a class="header-anchor" href="#查询模式" aria-hidden="true">#</a> 查询模式</h3>
<p><strong>每个班年龄最大的同学</strong></p>
<p>结果中要求出现班级编号和学生姓名，如果GROUP BY中只有班级编号字段，默认运行模式下SELECT中不能出现学生姓名。</p>
<div class="custom-container tip"><p class="custom-container-title">MYSQL默认使用ONLY_FULL_GROUP_BY模式要求select中的列要在group中使用。有多种方式可以处理这个问题</p>
<ul>
<li>可以通过更改查询模式，允许select的列不在group中出现</li>
<li>使用聚合函数</li>
<li>使用any_value函数处理</li>
<li>GROUP BY中使用PRIMAY KEY 或 UNIQUE NOT NULL字段</li>
</ul>
</div>
<p>🐛 直接查询将产生错误，因为sname不是GROUP BY使用的字段</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># 在使用min方法获取到birthday字段到同时，还要获取sname。这种语法在新版本下会报错</span>
<span class="token keyword">SELECT</span> <span class="token function">min</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span><span class="token punctuation">,</span>sname <span class="token keyword">FROM</span> stu <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>
<p>🚀 使用聚合函数解决这个问题</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">min</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">min</span><span class="token punctuation">(</span>sname<span class="token punctuation">)</span> <span class="token keyword">FROM</span> stu <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>🚀 使用any_value函数解决</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">min</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span><span class="token punctuation">,</span>any_value<span class="token punctuation">(</span>sname<span class="token punctuation">)</span> <span class="token keyword">FROM</span> stu <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>🚀 也可以使用子查询</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> stu <span class="token keyword">where</span> birthday <span class="token operator">IN</span><span class="token punctuation">(</span>
<span class="token keyword">SELECT</span> <span class="token function">min</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span> <span class="token keyword">FROM</span> stu <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>🚀 使用聚合函数</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">min</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">min</span><span class="token punctuation">(</span>sname<span class="token punctuation">)</span> <span class="token keyword">FROM</span> stu <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>🚀 也可以更改查询模式，去掉ONLY_FULL_GROUP_BY模式的方式解决</p>
<blockquote>
<p>很多后台程序框架提供配置项用于禁止ONLY_FULL_GROUP_BY模式</p>
</blockquote>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># SET sql_mode=''</span>
<span class="token keyword">SET</span> sql_mode <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token keyword">REPLACE</span><span class="token punctuation">(</span>@<span class="token variable">@sql_mode</span><span class="token punctuation">,</span> <span class="token string">"ONLY_FULL_GROUP_BY"</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token function">min</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span><span class="token punctuation">,</span>sname <span class="token keyword">FROM</span> stu <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class_id<span class="token punctuation">;</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="多个条件" tabindex="-1"><a class="header-anchor" href="#多个条件" aria-hidden="true">#</a> 多个条件</h3>
<p><strong>统计每班的男、女数</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span>class_id<span class="token punctuation">,</span>sex <span class="token keyword">from</span> stu
<span class="token keyword">WHERE</span> class_id <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token keyword">GROUP</span> <span class="token keyword">by</span> class_id<span class="token punctuation">,</span>sex
<span class="token keyword">ORDER</span> <span class="token keyword">by</span> class_id <span class="token keyword">ASC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>count(*)</th>
<th>class_id</th>
<th>sex</th>
</tr>
</thead>
<tbody>
<tr>
<td>13</td>
<td>1</td>
<td>男</td>
</tr>
<tr>
<td>11</td>
<td>1</td>
<td>女</td>
</tr>
<tr>
<td>22</td>
<td>2</td>
<td>男</td>
</tr>
<tr>
<td>24</td>
<td>2</td>
<td>女</td>
</tr>
</tbody>
</table>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> concat<span class="token punctuation">(</span>class_id<span class="token punctuation">,</span><span class="token string">'班'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">if</span><span class="token punctuation">(</span>sex<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'女'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> sex<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> stu
<span class="token keyword">WHERE</span> class_id <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class_id<span class="token punctuation">,</span>sex
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> class_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="having" tabindex="-1"><a class="header-anchor" href="#having" aria-hidden="true">#</a> HAVING</h3>
<p>🔖 where对查询结果进行筛选，having对分组结果进行筛选</p>
<p><strong>查找超过两个同学的班级</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> class_id<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> stu <span class="token keyword">GROUP</span> <span class="token keyword">by</span> class_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>class_id</th>
<th>count(*)</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>34</td>
</tr>
<tr>
<td>2</td>
<td>29</td>
</tr>
<tr>
<td>3</td>
<td>33</td>
</tr>
</tbody>
</table>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> class_id <span class="token keyword">FROM</span> stu <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class_id <span class="token keyword">HAVING</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">></span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token comment"># 或</span>
<span class="token keyword">SELECT</span> class_id<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">as</span> c <span class="token keyword">FROM</span> stu
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> class_id <span class="token keyword">HAVING</span> c<span class="token operator">></span><span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查找本周迟到超过两次的同学</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># select DATE_ADD(NOW(),INTERVAL 0-WEEKDAY(NOW()) day);  本周一对时间: 2022-04-11 22:11:58</span>
<span class="token keyword">SELECT</span> stu_id <span class="token keyword">FROM</span> attendance 
<span class="token keyword">WHERE</span> <span class="token keyword">date</span><span class="token punctuation">(</span>created_at<span class="token punctuation">)</span><span class="token operator">></span><span class="token keyword">date</span><span class="token punctuation">(</span>DATE_ADD<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">INTERVAL</span> <span class="token number">0</span><span class="token operator">-</span>WEEKDAY<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">day</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> <span class="token keyword">time</span><span class="token punctuation">(</span>created_at<span class="token punctuation">)</span><span class="token operator">></span><span class="token string">'08:30:00'</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> stu_id
<span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">></span><span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>本周哪个同学准时到校次数最多</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">as</span> c<span class="token punctuation">,</span>stu_id <span class="token keyword">FROM</span> attendance
<span class="token keyword">WHERE</span> <span class="token keyword">date</span><span class="token punctuation">(</span>created_at<span class="token punctuation">)</span><span class="token operator">>=</span><span class="token keyword">date</span><span class="token punctuation">(</span>date_add<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">interval</span> <span class="token number">0</span><span class="token operator">-</span>WEEKDAY<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">day</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> <span class="token keyword">time</span><span class="token punctuation">(</span>created_at<span class="token punctuation">)</span><span class="token operator">&lt;=</span><span class="token string">'08:30:00'</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> stu_id
<span class="token keyword">ORDER</span> <span class="token keyword">by</span> c <span class="token keyword">desc</span>
<span class="token keyword">limit</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>本周哪一天迟到的人数最多</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">date</span><span class="token punctuation">(</span>created_at<span class="token punctuation">)</span> <span class="token keyword">FROM</span> attendance 
<span class="token keyword">WHERE</span> <span class="token keyword">date</span><span class="token punctuation">(</span>created_at<span class="token punctuation">)</span><span class="token operator">></span><span class="token keyword">date</span><span class="token punctuation">(</span>DATE_ADD<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">INTERVAL</span> <span class="token number">0</span><span class="token operator">-</span>WEEKDAY<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">day</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> <span class="token keyword">time</span><span class="token punctuation">(</span>created_at<span class="token punctuation">)</span><span class="token operator">></span><span class="token string">'08:30:00'</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">date</span><span class="token punctuation">(</span>create_at<span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">DESC</span>
<span class="token keyword">LIMIT</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查找哪个姓的同学最多</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">left</span><span class="token punctuation">(</span>sname<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">as</span> s<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> c <span class="token keyword">FROM</span> stu
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> s
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> c <span class="token keyword">DESC</span>
<span class="token keyword">LIMIT</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查找超过两个同学的姓氏</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">left</span><span class="token punctuation">(</span>sname<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">as</span> s<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> c <span class="token keyword">FROM</span> stu
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> s
<span class="token keyword">HAVING</span> c<span class="token operator">>=</span><span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
