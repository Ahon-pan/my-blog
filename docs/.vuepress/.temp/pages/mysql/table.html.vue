<template><div><h1 id="表维护" tabindex="-1"><a class="header-anchor" href="#表维护" aria-hidden="true">#</a> 表维护</h1>
<blockquote>
<p>alter: 改变</p>
</blockquote>
<h2 id="修改表" tabindex="-1"><a class="header-anchor" href="#修改表" aria-hidden="true">#</a> 修改表</h2>
<h3 id="rename" tabindex="-1"><a class="header-anchor" href="#rename" aria-hidden="true">#</a> rename</h3>
<p>修改表名 <code v-pre>RENAME</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> stu <span class="token keyword">RENAME</span> stus<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rename-to" tabindex="-1"><a class="header-anchor" href="#rename-to" aria-hidden="true">#</a> rename to</h3>
<p>别一种操作方式 <code v-pre>RENAME ... to ...</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">RENAME</span> <span class="token keyword">TABLE</span> stus <span class="token keyword">to</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="charset" tabindex="-1"><a class="header-anchor" href="#charset" aria-hidden="true">#</a> charset</h3>
<p>修改表字符集 <code v-pre>charset</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> class <span class="token keyword">charset</span> gbk<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="truncat" tabindex="-1"><a class="header-anchor" href="#truncat" aria-hidden="true">#</a> truncat</h3>
<p>删除表所有数据 <code v-pre>TRUNCAT</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">TRUNCATE</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>truncate: 截断</p>
</blockquote>
<h3 id="drop" tabindex="-1"><a class="header-anchor" href="#drop" aria-hidden="true">#</a> drop</h3>
<p>删除数据表 <code v-pre>DROP</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="字段管理" tabindex="-1"><a class="header-anchor" href="#字段管理" aria-hidden="true">#</a> 字段管理</h2>
<h3 id="modify" tabindex="-1"><a class="header-anchor" href="#modify" aria-hidden="true">#</a> modify</h3>
<p>修改字段类型 <code v-pre>MODIFY</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> stu <span class="token keyword">MODIFY</span> sname <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change" aria-hidden="true">#</a> change</h3>
<p>修改字段时同时更改字段名 <code v-pre>CHANGE</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> stu CHANGE sname name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> stu change oldName newName <span class="token keyword">datetime</span> <span class="token keyword">default</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add</h3>
<p>添加字段 <code v-pre>ADD</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> stu <span class="token keyword">ADD</span> sex <span class="token keyword">SMALLINT</span> <span class="token keyword">default</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="add-after" tabindex="-1"><a class="header-anchor" href="#add-after" aria-hidden="true">#</a> add after</h3>
<p>在学生名称后添加邮箱字段 <code v-pre>ADD ... AFTER ...</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> stu <span class="token keyword">ADD</span> email <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">AFTER</span> sname<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="add-first" tabindex="-1"><a class="header-anchor" href="#add-first" aria-hidden="true">#</a> add first</h3>
<p>将字段添加到最前面 <code v-pre>ADD ... FIRST</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> stu <span class="token keyword">ADD</span> qq <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token keyword">first</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="drop-1" tabindex="-1"><a class="header-anchor" href="#drop-1" aria-hidden="true">#</a> drop</h3>
<p>删除学生邮箱字段 <code v-pre>DROP</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> stu <span class="token keyword">DROP</span> email<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主键操作" tabindex="-1"><a class="header-anchor" href="#主键操作" aria-hidden="true">#</a> 主键操作</h2>
<h3 id="modify-1" tabindex="-1"><a class="header-anchor" href="#modify-1" aria-hidden="true">#</a> modify</h3>
<p>💡 一般主键为<strong>自增字段</strong>，需要删除自增属性后才可以删除主键，即重写主键配置为默认非自增</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> stu <span class="token keyword">MODIFY</span> id <span class="token keyword">int</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="drop-primary-key" tabindex="-1"><a class="header-anchor" href="#drop-primary-key" aria-hidden="true">#</a> drop primary key</h3>
<p>删除主键  <code v-pre>DROP PROMARY KEY</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> stu <span class="token keyword">DROP</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">key</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="add-primary-key" tabindex="-1"><a class="header-anchor" href="#add-primary-key" aria-hidden="true">#</a> add primary key</h3>
<p>添加表主键 <code v-pre>ADD PRIMARY KEY</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">table</span> stu2 <span class="token keyword">add</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="auto-increment" tabindex="-1"><a class="header-anchor" href="#auto-increment" aria-hidden="true">#</a> auto_increment</h3>
<p>添加自增列 <code v-pre>AUTO_INCREMENT</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> stu2 <span class="token keyword">MODIFY</span> id <span class="token keyword">int</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>💡 主键与自增列一起添加</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">table</span> stu3 <span class="token keyword">modify</span> id <span class="token keyword">int</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token punctuation">,</span><span class="token keyword">add</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">key</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
