import{_ as s,o as a,c as n,a as e}from"./app.4bbb0959.js";const p={},o=e(`<h1 id="\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u672C\u64CD\u4F5C</h1><h2 id="\u8FDE\u63A5\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u670D\u52A1\u5668" aria-hidden="true">#</a> \u8FDE\u63A5\u670D\u52A1\u5668</h2><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><p>\u5728\u547D\u4EE4\u884C\u8FDE\u63A5mysql\u7684\u53C2\u6570\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>-u</td><td>\u5E10\u53F7</td><td>\u5F53\u524D\u7CFB\u7EDF\u540C\u540D\u5E10\u53F7 root</td></tr><tr><td>-p</td><td>\u5BC6\u7801</td><td></td></tr><tr><td>-P</td><td>\u8FDE\u63A5\u7AEF\u53E3</td><td>3306</td></tr><tr><td>-h</td><td>\u4E3B\u673A\u5730\u5740</td><td>127.0.0.1</td></tr><tr><td>-e</td><td>\u6267\u884Csql\u6307\u4EE4</td><td></td></tr></tbody></table><h3 id="\u8FDE\u63A5\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u64CD\u4F5C" aria-hidden="true">#</a> \u8FDE\u63A5\u64CD\u4F5C</h3><p><strong>\u8FDE\u63A5\u670D\u52A1\u5668</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>mysql -uroot -p -P3306 -h <span class="token number">127.0</span>.0.1
</code></pre></div><p>\u8FDE\u63A5\u672C\u5730\u6570\u636E\u5E93\u65F6\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u503C</p><div class="language-bash ext-sh"><pre class="language-bash"><code>mysql -uroot -p 
</code></pre></div><p>\u4F7F\u7528<code>-e</code> \u6267\u884CSQL\u8BED\u53E5</p><div class="language-bash ext-sh"><pre class="language-bash"><code>mysql -uroot -pforget6. -e<span class="token string">&quot;show databases;&quot;</span>
</code></pre></div><p><strong>\u9000\u51FA\u8FDE\u63A5</strong></p><p>\u547D\u4EE4\u884C\u4E0B\u6267\u884Cexit\u53EF\u901A\u51FA\u5F53\u524D\u8FDE\u63A5</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">exit</span>
</code></pre></div><h3 id="\u6267\u884C\u4E0E\u53D6\u6D88" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0E\u53D6\u6D88" aria-hidden="true">#</a> \u6267\u884C\u4E0E\u53D6\u6D88</h3><p>\u6BCF\u6761SQL\u6307\u4EE4\u4EE5<code>;</code>\u7ED3\u675F\uFF0C\u6309\u56DE\u8F66\u952E\u540E\u6267\u884C\u8BE5\u6761\u8BED\u53E5\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>show databases<span class="token punctuation">;</span>
</code></pre></div><p><strong>\u653E\u5F03\u8BED\u53E5</strong></p><p>\u5728SQL\u540E\u4F7F\u7528 <code>\\c</code>\u8868\u793A\u53D6\u6D88\u672C\u6761SQL\uFF0C\u540E\u9762\u4E0D\u9700\u8981\u5199 <code>;</code>\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>show databases <span class="token punctuation">\\</span>c
</code></pre></div><h2 id="\u6570\u636E\u5E93\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u7BA1\u7406" aria-hidden="true">#</a> \u6570\u636E\u5E93\u7BA1\u7406</h2><h3 id="\u5E38\u7528\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u6307\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u6307\u4EE4</h3><p><strong>\u6570\u636E\u5E93\u5217\u8868</strong></p><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u5F97\u5230\u5F53\u524D\u670D\u52A1\u5668\u4E2D\u7684\u6240\u6709\u6570\u636E\u5E93\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>show databases<span class="token punctuation">;</span>
</code></pre></div><p><strong>\u521B\u5EFA\u65B0\u5E93</strong></p><p>\u4E0B\u9762\u662F\u521B\u5EFA\u6570\u636E\u5E93 <code>scaffold</code> \u5E76\u8BBE\u7F6E\u5B57\u7B26\u96C6\u4E3A utf8\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> scaffold <span class="token keyword">CHARSET</span> utf8<span class="token punctuation">;</span>
</code></pre></div><p><strong>\u67E5\u770B\u6570\u636E\u5E93</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>show create database scaffold<span class="token punctuation">;</span>
</code></pre></div><p><strong>\u5220\u9664\u6570\u636E\u5E93</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">database</span> scaffold<span class="token punctuation">;</span>
</code></pre></div><p>\u4E3A\u4E86\u9632\u6B62\u5220\u9664\u4E0D\u5B58\u5728\u7684\u6570\u636E\u5E93\u62A5\u9519</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">database</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> scaffold<span class="token punctuation">;</span>
</code></pre></div><p><strong>\u9009\u62E9\u6570\u636E\u5E93</strong></p><p>\u6570\u636E\u5E93\u4E3B\u8981\u662F\u5BF9\u8868\u64CD\u4F5C\uFF0C\u9009\u62E9\u6570\u636E\u5E93\u540E\u53EF\u4EE5\u7701\u6389\u6BCF\u6B21\u6307\u5B9A\u6570\u636E\u5E93\u7684\u9EBB\u70E6\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">use</span> scaffold
</code></pre></div><h3 id="\u5BFC\u5165\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u8BED\u53E5" aria-hidden="true">#</a> \u5BFC\u5165\u8BED\u53E5</h3><p>\u6709\u65F6\u9700\u8981\u628A\u5916\u90E8\u7684SQL\u6587\u4EF6\u5BFC\u5165\u5230\u670D\u52A1\u5668\u4E2D\uFF0C\u56FE\u50CF\u5316\u7684\u6570\u636E\u5E93\u7BA1\u7406\u8F6F\u4EF6\u90FD\u652F\u6301\u5BFC\u5165\uFF0C\u4E0B\u9762\u6211\u4EEC\u4ECB\u7ECD\u547D\u4EE4\u884C\u7684\u4F7F\u7528\u65B9\u6CD5\u3002</p><p><strong>\u521B\u5EFA\u6587\u4EF6</strong></p><p>\u4E0B\u9762\u6211\u4EEC\u521B\u5EFA <code>test.sql</code>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> hello <span class="token keyword">charset</span> utf8<span class="token punctuation">;</span>

<span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u5916\u90E8\u5BFC\u5165</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token operator">&lt;</span> test<span class="token punctuation">.</span><span class="token keyword">sql</span>
</code></pre></div><p><strong>\u8FDE\u63A5\u540E\u5BFC\u5165</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p
<span class="token operator">&gt;</span> source test<span class="token punctuation">.</span><span class="token keyword">sql</span>
</code></pre></div><h2 id="\u6570\u636E\u8868\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8868\u7BA1\u7406" aria-hidden="true">#</a> \u6570\u636E\u8868\u7BA1\u7406</h2><p>\u53EF\u4EE5\u628A\u6570\u636E\u5E93\u7406\u89E3\u4E3A\u6587\u4EF6\u5939\uFF0C\u6570\u636E\u8868\u7406\u89E3\u4E3A\u6587\u4EF6\uFF0C\u6570\u636E\u8868\u662F\u771F\u6B63\u50A8\u5B58\u6570\u636E\u7684\u5730\u65B9\u3002</p><h3 id="\u57FA\u672C\u64CD\u4F5C-1" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u64CD\u4F5C-1" aria-hidden="true">#</a> \u57FA\u672C\u64CD\u4F5C</h3><p><strong>\u521B\u5EFA\u6570\u636E\u8868</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> class <span class="token punctuation">(</span>
id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
cname <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
description <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> 
<span class="token keyword">charset</span> utf8<span class="token punctuation">;</span>
</code></pre></div><p>\u4EE5\u4E0A\u8BED\u53E5\u521B\u5EFA\u8868 <code>class</code> \u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p><ul><li>\u5B57\u6BB5 id \u4E3A\u4E3B\u952E\u81EA\u589E</li><li>\u5B57\u6BB5 cname \u4E3A\u5B57\u7B26\u4E32\u7C7B\u578Bvarchar \u5E76\u4E0D\u5141\u8BB8\u4E3A null</li><li>\u5B57\u6BB5 description \u4E3A\u53EF\u4E3Anull \u5B57\u7B26\u4E32</li><li>\u5B57\u7B26\u96C6\u4E3A utf8 \uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u5C06\u7EE7\u627F\u6570\u636E\u5E93\u5B57\u7B26\u96C6</li></ul><p><strong>\u6DFB\u52A0\u6D4B\u8BD5\u6570\u636E</strong></p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> class <span class="token punctuation">(</span>cname<span class="token punctuation">,</span>description<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;PHP&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u540E\u76FE\u4EBA\u6559\u4F60\u4F7F\u7528PHP\u5FEB\u901F\u5F00\u53D1\u7F51\u7AD9&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> class <span class="token punctuation">(</span>cname<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;Mysql&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u56E0\u4E3A description \u8BBE\u7F6E\u4E3Anull \u6240\u4EE5\u7B2C\u4E8C\u4E2A\u8BB0\u5F55\u6CA1\u6709\u8BBE\u7F6E\u503C\u65F6\u4F7F\u7528\u9ED8\u8BA4\u7684null\u503C\u3002</p><h3 id="\u590D\u5236\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u6570\u636E" aria-hidden="true">#</a> \u590D\u5236\u6570\u636E</h3><p>\u6839\u636E\u5DF2\u7ECF\u5B58\u5728\u7684\u8868\u7ED3\u6784\u521B\u5EFA\u65B0\u8868</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> hello <span class="token operator">like</span> class<span class="token punctuation">;</span>
</code></pre></div><p>\u590D\u5236\u5176\u4ED6\u8868\u7684\u6570\u636E</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> hello <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> class<span class="token punctuation">;</span>
</code></pre></div><p>\u53EA\u590D\u5236\u6279\u5B9A\u5B57\u6BB5</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> hello <span class="token punctuation">(</span>cname<span class="token punctuation">)</span> <span class="token keyword">select</span> cname <span class="token keyword">from</span> class<span class="token punctuation">;</span>
</code></pre></div><p>\u590D\u5236\u8868\u65F6\u540C\u65F6\u590D\u5236\u6570\u636E</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> hdjs <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> class<span class="token punctuation">;</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u53EA\u590D\u5236\u6307\u5B9A\u5B57\u6BB5\uFF0C\u5E76\u4E3A\u4E0D\u540C\u540D\u5B57\u6BB5\u8D77\u522B\u540D</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> hd <span class="token punctuation">(</span>id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">select</span> id<span class="token punctuation">,</span>cname <span class="token keyword">as</span> name <span class="token keyword">from</span> class<span class="token punctuation">;</span>
</code></pre></div><p>\u5220\u9664\u6570\u636E\u8868</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TEMPORARY</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> hd<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u4E34\u65F6\u8868" tabindex="-1"><a class="header-anchor" href="#\u4E34\u65F6\u8868" aria-hidden="true">#</a> \u4E34\u65F6\u8868</h3><div class="custom-container tip"><p class="custom-container-title">\u4E34\u65F6\u8868\u662F\u7528\u4E8E\u50A8\u5B58\u4E34\u65F6\u6570\u636E\u8868\u8868\uFF0C\u4F1A\u5728\u6570\u636E\u5E93\u8FDE\u63A5\u4E2D\u65AD\u65F6\u81EA\u52A8\u5220\u9664\u3002</p><ul><li>\u53EF\u4EE5\u4E0E\u666E\u901A\u8868\u540C\u540D\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E\u666E\u901A\u8868</li><li>\u8FDE\u63A5\u7EC8\u7AEF\u65F6\u81EA\u52A8\u5220\u9664</li></ul></div><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">TEMPORARY</span> <span class="token keyword">TABLE</span> class_names <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">from</span> class<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> class_names<span class="token punctuation">;</span>
</code></pre></div><p>\u5220\u9664\u4E34\u65F6\u8868</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TEMPORARY</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> class_names<span class="token punctuation">;</span>
</code></pre></div><blockquote><p>\u5F53\u7136\u5F00\u53D1\u4E2D\u6211\u4EEC\u66F4\u559C\u6B22\u5C06\u4E34\u65F6\u6570\u636E\u653E\u5728\u7F13\u5B58\u6216\u4F1A\u8BDD\u4E2D\uFF0C\u8FD9\u91CC\u53EA\u662F\u4ECB\u7ECD\u8FD9\u4E2Amysql\u7279\u6027\u3002</p></blockquote><h2 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h2><h3 id="\u6D4B\u8BD5\u8868" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u8868" aria-hidden="true">#</a> \u6D4B\u8BD5\u8868</h3><p>\u4E3A\u4E86\u8FDB\u884C\u67E5\u8BE2\u5B9E\u4F8B\u64CD\u4F5C\u6211\u4EEC\u521B\u5EFA\u4EE5\u4E0B\u8868</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> stu <span class="token punctuation">(</span>id <span class="token keyword">int</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>sname <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>class_id <span class="token keyword">int</span> <span class="token keyword">default</span> <span class="token boolean">null</span><span class="token punctuation">,</span>age <span class="token keyword">smallint</span> <span class="token keyword">default</span> <span class="token boolean">null</span><span class="token punctuation">)</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu<span class="token punctuation">(</span>sname<span class="token punctuation">,</span>class_id<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token boolean">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u5218&#39;</span><span class="token punctuation">,</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token number">46</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5B57\u6BB5\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5\u5904\u7406" aria-hidden="true">#</a> \u5B57\u6BB5\u5904\u7406</h3><p>\u67E5\u8BE2\u6240\u6709\u5B57\u4F30\u6570\u636E</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> class<span class="token punctuation">;</span>
</code></pre></div><p>\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5\u6570\u636E\u5E76\u6392\u5E8F\u5B57\u6BB5</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> description<span class="token punctuation">,</span>cname <span class="token keyword">from</span> class<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6761\u4EF6\u7B5B\u9009" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u7B5B\u9009" aria-hidden="true">#</a> \u6761\u4EF6\u7B5B\u9009</h3><p><code>where</code>\u6839\u636E\u6761\u4EF6\u67E5\u8BE2</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> class <span class="token keyword">where</span> cname <span class="token operator">=</span> <span class="token string">&#39;php&#39;</span>
</code></pre></div><p>\u67E5\u8BE2<strong>\u5305\u542B</strong>\u5173\u952E\u8BCD\u7684\u6570\u636E</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> class <span class="token keyword">where</span> description <span class="token operator">like</span> <span class="token string">&#39;%p%&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u5408\u5E76</strong>\u5217\u8FD4\u56DE\u67E5\u8BE2\u7ED3\u679C</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> CONCAT<span class="token punctuation">(</span>id<span class="token punctuation">,</span>cname<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token string">&#39;class_info&#39;</span> <span class="token keyword">FROM</span> class<span class="token punctuation">;</span>
</code></pre></div><p>\u6307\u5B9A\u591A\u6761\u4EF6\u67E5\u8BE2</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> class <span class="token keyword">where</span> id<span class="token operator">&gt;</span><span class="token number">1</span> <span class="token operator">and</span> cname <span class="token operator">=</span> <span class="token string">&#39;php&#39;</span>
</code></pre></div><p>\u67E5\u627E\u4E00\u73ED\u6216\u59D3\u5F20\u7684\u540C\u5B66</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> class_id <span class="token operator">=</span><span class="token number">1</span> <span class="token operator">or</span> sname <span class="token operator">like</span> <span class="token string">&#39;%\u5F20%&#39;</span>
</code></pre></div><p>\u4ECB\u7ECD\u4E2D\u4E0D\u5305\u542Bphp\u7684\u73ED\u7EA7</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">from</span> class <span class="token keyword">WHERE</span> description <span class="token operator">NOT</span> <span class="token operator">LIKE</span> <span class="token string">&#39;%php%&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u67E5\u8BE2\u5B66\u751F\u6240\u5728\u73ED\u7EA7\u7F16\u53F7\uFF0C\u5E76\u53BB\u9664\u91CD\u590D\u503C</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> class_id <span class="token keyword">from</span> stu <span class="token punctuation">;</span>
</code></pre></div><p>\u67E5\u8BE2\u5E74\u9F84\u572820~35\u5C81\u7684\u540C\u5B66</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">BETWEEN</span> <span class="token number">20</span> <span class="token operator">and</span> <span class="token number">35</span><span class="token punctuation">;</span>
</code></pre></div><p>\u67E5\u627E\u4E0D\u572830~35\u5C81\u95F4\u7684\u540C\u5B66</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">NOT</span> <span class="token operator">BETWEEN</span> <span class="token number">30</span> <span class="token operator">and</span> <span class="token number">35</span><span class="token punctuation">;</span>
</code></pre></div><p>\u67E5\u627E2\u30013\u73ED\u7684\u6240\u6709\u540C\u5B66</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> stu <span class="token keyword">where</span> class_id <span class="token operator">IN</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u67E5\u627E\u9664\u4E861\u30013\u73ED\u7684\u540C\u5B66</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> class_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="null" tabindex="-1"><a class="header-anchor" href="#null" aria-hidden="true">#</a> NULL</h3><p>\u67E5\u8BE2\u6CA1\u6709\u5206\u914D\u73ED\u7EA7\u7684\u5B66\u751F\u59D3\u540D</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> sname <span class="token keyword">from</span> stu <span class="token keyword">where</span> class_id <span class="token operator">is</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre></div><p>\u67E5\u8BE2\u5DF2\u7ECF\u5206\u914D\u73ED\u7EA7\u7684\u5B66\u751F\u4FE1\u606F</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> class_id <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>\u67E5\u8BE2\u7ED3\u679C\u4E2D\u5BF9\u6CA1\u5206\u914D\u73ED\u7EA7\u7684\u5B66\u751F\u663E\u793A\u672A\u5206\u914D</p></blockquote><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> sname<span class="token punctuation">,</span><span class="token keyword">if</span><span class="token punctuation">(</span>class_id <span class="token operator">is</span> <span class="token boolean">null</span><span class="token punctuation">,</span><span class="token string">&#39;\u672A\u5206\u914D&#39;</span><span class="token punctuation">,</span>class_id<span class="token punctuation">)</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
<span class="token comment"># \u4E5F\u53EF\u4EE5\u4F7F\u7528IFNULl \u51FD\u6570\u7B80\u5316\u64CD\u4F5C</span>
<span class="token keyword">select</span> sname<span class="token punctuation">,</span>ifnull <span class="token punctuation">(</span>class_id <span class="token punctuation">,</span><span class="token string">&#39;\u672A\u5206\u914D&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> stu<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6392\u5E8F\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F\u7ED3\u679C" aria-hidden="true">#</a> \u6392\u5E8F\u7ED3\u679C</h3><p>\u6309\u5B66\u751F\u5E74\u9F84\u4ECE\u5927\u5230\u5C0F\u6392\u5E8F</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> stu <span class="token keyword">order</span> <span class="token keyword">by</span> age <span class="token keyword">desc</span><span class="token punctuation">;</span>
</code></pre></div><p>\u73ED\u7EA7\u4ECE\u5927\u5230\u5C0F\u6392\u5E8F\uFF0C\u76F8\u540C\u73ED\u7EA7\u7684\u540C\u5B66\u5E74\u9F84\u4ECE\u5C0F\u5230\u5927\u6392\u5E8F</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">order</span> <span class="token keyword">by</span> class_id <span class="token keyword">DESC</span><span class="token punctuation">,</span>age <span class="token keyword">ASC</span><span class="token punctuation">;</span>
</code></pre></div><p>\u968F\u673A\u83B7\u53D6\u4E00\u540D\u540C\u5B66</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">order</span> <span class="token keyword">by</span> RAND<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">limit</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6700\u540E\u62A5\u540D\u7684\u540C\u540D</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">order</span> <span class="token keyword">by</span> id <span class="token keyword">desc</span> <span class="token keyword">limit</span> <span class="token number">1</span>
</code></pre></div><p>\u6BCF\u4E8C\u548C\u7B2C\u4E09\u62A5\u540D\u7684\u540C\u5B66</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment"># Limit \u662F\u4ECE\u96F6\u5F00\u59CB\u7684</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> stu <span class="token keyword">order</span> <span class="token keyword">by</span> id <span class="token keyword">ASC</span> <span class="token keyword">limit</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">;</span>
</code></pre></div><p>\u67E5\u627E2\u73ED\u5E74\u9F84\u6700\u5C0F\u7684\u540C\u5B66</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> class_id <span class="token operator">=</span><span class="token number">2</span> <span class="token operator">and</span> age <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">order</span> <span class="token keyword">by</span> age <span class="token keyword">asc</span> <span class="token keyword">limit</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u7ED3\u679C\u4E0D\u51C6\u786E\uFF0C\u56E0\u4E3A\u53EF\u80FD\u6709\u540C\u5E74\u9F84\u7684\u540C\u5B66\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4F7F\u7528\u5B50\u67E5\u8BE2\u64CD\u4F5C\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> age <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> age <span class="token keyword">from</span> stu <span class="token keyword">where</span> class_id <span class="token operator">=</span><span class="token number">2</span> <span class="token operator">and</span> age <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">order</span> <span class="token keyword">by</span> age <span class="token keyword">asc</span> <span class="token keyword">limit</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5176\u4ED6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u64CD\u4F5C" aria-hidden="true">#</a> \u5176\u4ED6\u64CD\u4F5C</h2><h3 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h3><p>\u5C06\u73ED\u7EA7\u4E3A2\u7684\u5B66\u751F\u6539\u4E3A\u73ED\u7EA73</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> stu <span class="token keyword">SET</span> class_id <span class="token operator">=</span> <span class="token number">3</span> <span class="token keyword">WHERE</span> class_id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre></div><p>2\u73ED\u5E74\u9F84\u5C0F\u4E8E20\u5C81\u7684\u540C\u5B66\u5E74\u9F84\u8BBE\u7F6E\u4E3ANULL</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> stu <span class="token keyword">SET</span> age <span class="token operator">=</span> <span class="token boolean">null</span> <span class="token keyword">WHERE</span> class_id<span class="token operator">=</span><span class="token number">2</span> <span class="token operator">AND</span> age<span class="token operator">&lt;</span><span class="token number">20</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5C06\u5E74\u9F84\u5C0F\u4E8E20\u5C81\u7684\u540C\u5B66\u5E74\u9F84\u52A010\u5C81</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> stu <span class="token keyword">SET</span> age<span class="token operator">=</span> age<span class="token operator">+</span><span class="token number">20</span> <span class="token keyword">WHERE</span> age<span class="token operator">&lt;</span><span class="token number">20</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5220\u9664\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8BB0\u5F55" aria-hidden="true">#</a> \u5220\u9664\u8BB0\u5F55</h3><p>\u5220\u9664\u6240\u6709\u5E74\u9F84\u5C0F\u4E8E20\u7684\u540C\u5B66</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> stu <span class="token keyword">WHERE</span> age<span class="token operator">&lt;</span><span class="token number">20</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5220\u9664\u6240\u6709\u5E74\u9F84\u5C0F\u572830\u5E76\u6CA1\u6709\u73ED\u7EA7\u7684\u540C\u5B66</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> stu <span class="token keyword">WHERE</span> class_id <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6DFB\u52A0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6570\u636E" aria-hidden="true">#</a> \u6DFB\u52A0\u6570\u636E</h3><p>\u6DFB\u52A0\u4E00\u6761\u8BB0\u5F55</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu <span class="token keyword">SET</span> sname <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">22</span><span class="token punctuation">,</span>class_id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6DFB\u52A0\u591A\u6761\u8BB0\u5F55</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu <span class="token punctuation">(</span>sname<span class="token punctuation">,</span>class_id<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u5F20&#39;</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,148),t=[o];function l(c,r){return a(),n("div",null,t)}var d=s(p,[["render",l],["__file","basic.html.vue"]]);export{d as default};
