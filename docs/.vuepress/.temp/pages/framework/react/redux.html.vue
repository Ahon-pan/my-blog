<template><div><h1 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> Redux</h1>
<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2>
<p>redux（Reducer+Flux）实现了大型应用组件间数据传值的问题（数据层框架）</p>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/react/withRedux.PNG" alt=""></p>
<h3 id="redux的工作流程" tabindex="-1"><a class="header-anchor" href="#redux的工作流程" aria-hidden="true">#</a> Redux的工作流程</h3>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/react/reduxFlow.PNG" alt=""></p>
<ul>
<li>React Components(借阅者)</li>
<li>Action Creators(借书的这句话)</li>
<li>Store(管理员)</li>
<li>Reducers(记录本)</li>
</ul>
<h3 id="创建redux中的store" tabindex="-1"><a class="header-anchor" href="#创建redux中的store" aria-hidden="true">#</a> 创建redux中的store</h3>
<ul>
<li>
<p>reducer中的<strong>state</strong>存放store里面的数据（笔记本）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">'123'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> state
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>createStore函数第一个参数将reducer数据传给store</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">'./reducer'</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>页面引入store，通过getState方法获取state数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="action和reducer" tabindex="-1"><a class="header-anchor" href="#action和reducer" aria-hidden="true">#</a> Action和Reducer</h3>
<ul>
<li>
<p>action是一个对象，包含了type和value，store通过dispatch将action传递给store</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">handleInputChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'change_input_value'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>reducer接收action的type和value更新store(return newState)，注意：reducer不能直接修改state(深拷贝)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'change_input_value'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
        newState<span class="token punctuation">.</span>inputValue <span class="token operator">=</span> action<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">return</span> newState
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'delete_todo_item'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
        newState<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> newState
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'add_todo_item'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
        newState<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newState<span class="token punctuation">.</span>inputValue<span class="token punctuation">)</span>
        newState<span class="token punctuation">.</span>inputValue <span class="token operator">=</span> <span class="token string">''</span>
        <span class="token keyword">return</span> newState
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> state
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>组件需要订阅store更新，然后重新获取state<code v-pre>store.getState()</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleInputChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleInputChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleStoreChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleStoreChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 订阅store更新</span>
    store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleStoreChange<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// ......</span>

<span class="token comment">// 重新获取state</span>
<span class="token function">handleStoreChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 点击删除item</span>
<span class="token function">handleItemDelete</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'delete_todo_item'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> index
    <span class="token punctuation">}</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 点击btn添加listItem</span>
<span class="token function">handleBtnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'add_todo_item'</span>
    <span class="token punctuation">}</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="actiontypes的拆分" tabindex="-1"><a class="header-anchor" href="#actiontypes的拆分" aria-hidden="true">#</a> ActionTypes的拆分</h3>
<ul>
<li>常量或者变量的错误方便查错</li>
<li>字符串的拼写错误不好发现</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">CHANGE_INPUT_VALUE</span> <span class="token operator">=</span> <span class="token string">'change_input_value'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ADD_TODO_ITEM</span> <span class="token operator">=</span> <span class="token string">'add_todo_item'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">DELETE_TODO_ITEM</span> <span class="token operator">=</span> <span class="token string">'delete_todo_item'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="actioncreator" tabindex="-1"><a class="header-anchor" href="#actioncreator" aria-hidden="true">#</a> actionCreator</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">CHANGE_INPUT_VALUE</span><span class="token punctuation">,</span> <span class="token constant">ADD_TODO_ITEM</span><span class="token punctuation">,</span> <span class="token constant">DELETE_TODO_ITEM</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./actionTypes'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getInputChangeAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">CHANGE_INPUT_VALUE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> value
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getAddItemAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD_TODO_ITEM</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getDeleteItemAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">DELETE_TODO_ITEM</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> index
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中创建action，然后派发出去</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">handleInputChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">getInputChangeAction</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redux三大原则" tabindex="-1"><a class="header-anchor" href="#redux三大原则" aria-hidden="true">#</a> Redux三大原则</h3>
<ul>
<li>
<p>store是唯一的</p>
</li>
<li>
<p>只有store能够改变自己的内容</p>
<p>reducer是拿到store之前的数据，然后将更改后的数据再返回给store</p>
<p>store拿到数据之后自己进行更新（reducer不能更改store的内容）</p>
</li>
<li>
<p>reducer必需是纯函数</p>
<p>纯函数：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用</p>
<ol>
<li>
<p>state和action确定，return的结果就是固定的</p>
<p><code v-pre>newState.date = new Date()</code>不是纯函数，异步、ajax...</p>
</li>
<li>
<p><code v-pre>state.inputValue = action.value</code>参数修改 （副作用）也不是纯函数</p>
</li>
</ol>
</li>
</ul>
<h2 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h2>
<h3 id="ui组件和容器组件" tabindex="-1"><a class="header-anchor" href="#ui组件和容器组件" aria-hidden="true">#</a> UI组件和容器组件</h3>
<p>UI组件只关注于组件的内容，容器组件负责处理组件逻辑代码</p>
<h4 id="ui组件" tabindex="-1"><a class="header-anchor" href="#ui组件" aria-hidden="true">#</a> UI组件</h4>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// TodoListUI</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'antd/dist/antd.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Input<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TodoListUI</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token string">'10px'</span><span class="token punctuation">,</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token string">'10px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token string">'10px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>inputValue<span class="token punctuation">}</span></span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todoInfo<span class="token punctuation">"</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'300px'</span><span class="token punctuation">,</span> <span class="token literal-property property">marginRight</span><span class="token operator">:</span> <span class="token string">'20px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>handleInputChange<span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>handleBtnClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">提交</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'300px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">bordered</span>
          <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>list<span class="token punctuation">}</span></span>
          <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">handleItemDelete</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TodoListUI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="容器组件" tabindex="-1"><a class="header-anchor" href="#容器组件" aria-hidden="true">#</a> 容器组件</h4>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'../store'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TodoListUI <span class="token keyword">from</span> <span class="token string">'./TodoListUI'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getInputChangeAction<span class="token punctuation">,</span> getAddItemAction<span class="token punctuation">,</span> getDeleteItemAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../store/actionCreator'</span>

<span class="token keyword">class</span> <span class="token class-name">TodoList</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleInputChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleInputChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleStoreChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleStoreChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleBtnClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleBtnClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleItemDelete <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleItemDelete</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleStoreChange<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span> TodoListUI
        inputValue<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>inputValue<span class="token punctuation">}</span>
        list<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">}</span>
        handleBtnClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleBtnClick<span class="token punctuation">}</span>
        handleInputChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleInputChange<span class="token punctuation">}</span>
        handleItemDelete<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleItemDelete<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleInputChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">getInputChangeAction</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleStoreChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleItemDelete</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">getDeleteItemAction</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleBtnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">getAddItemAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TodoList
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4>
<p>onClick中的箭头函数参数默认是Event事件对象，index向外获取正确参数</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'300px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">bordered</span>
    <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>list<span class="token punctuation">}</span></span>
    <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">handleItemDelete</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无状态组件" tabindex="-1"><a class="header-anchor" href="#无状态组件" aria-hidden="true">#</a> 无状态组件</h3>
<div class="custom-container tip"><p class="custom-container-title">无状态组件</p>
<ul>
<li>当一个普通组件内只要一个render函数时，便可以用无状态组件替换它</li>
<li>无状态组件以函数的形式实现，性能比较（和js类）高</li>
<li>函数组件参数为props，返回JSX</li>
</ul>
</div>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'antd/dist/antd.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Input<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">TodoListUI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token string">'10px'</span><span class="token punctuation">,</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token string">'10px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token string">'10px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>inputValue<span class="token punctuation">}</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todoInfo<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'300px'</span><span class="token punctuation">,</span> <span class="token literal-property property">marginRight</span><span class="token operator">:</span> <span class="token string">'20px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>handleInputChange<span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>handleBtnClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">提交</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'300px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">bordered</span>
        <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>list<span class="token punctuation">}</span></span>
        <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List.Item</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> props<span class="token punctuation">.</span><span class="token function">handleItemDelete</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List.Item</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TodoListUI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redux异步请求数据" tabindex="-1"><a class="header-anchor" href="#redux异步请求数据" aria-hidden="true">#</a> Redux异步请求数据</h3>
<ul>
<li>
<p>actionTypes</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">INIT_LIST_ACTION</span> <span class="token operator">=</span> <span class="token string">'init_list_action'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>actionCreator</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">INIT_LIST_ACTION</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./actionTypes'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">initListAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">INIT_LIST_ACTION</span><span class="token punctuation">,</span>
    data
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>reducer</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">INIT_LIST_ACTION</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./actionTypes'</span>

<span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">INIT_LIST_ACTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
        newState<span class="token punctuation">.</span>list <span class="token operator">=</span> action<span class="token punctuation">.</span>data
        <span class="token keyword">return</span> newState
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> state
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>TodoList</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'../store'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initListAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../store/actionCreator'</span><span class="token punctuation">;</span>

<span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/todolist'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> res
        <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">initListAction</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
        store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="redux-thunk-ajax" tabindex="-1"><a class="header-anchor" href="#redux-thunk-ajax" aria-hidden="true">#</a> Redux-thunk ajax</h3>
<div class="custom-container tip"><p class="custom-container-title">Redux-thunk</p>
<ul>
<li>
<p>Redux-thunk实现异步请求和复杂逻辑在action的统一处理（Redux的中间件）</p>
</li>
<li>
<p>异步操作的代码从组件移动到action中</p>
</li>
<li>
<p>actionCreator原本是一个函数返回一个对象，在使用了该中间件之后：action可以是一个<strong>函数</strong>，store能够dispatch这个函数</p>
</li>
<li>
<p>store接收到函数会自动执行（异步数据的获取，然后改变store，又dispatch action做一次派发）</p>
</li>
</ul>
</div>
<h4 id="store-index-js配置" tabindex="-1"><a class="header-anchor" href="#store-index-js配置" aria-hidden="true">#</a> store/index.js配置</h4>
<ul>
<li>
<p>redux-devtools-extension: https://github.com/zalmoxisus/redux-devtools-extension</p>
</li>
<li>
<p>实现既支持redux-devtools，同时引入redux-thunk</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware<span class="token punctuation">,</span> compose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">'redux-thunk'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">'./reducer'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> composeEnhancers <span class="token operator">=</span>
      window<span class="token punctuation">.</span>__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ <span class="token operator">?</span>
      window<span class="token punctuation">.</span><span class="token function">__REDUX_DEVTOOLS_EXTENSION_COMPOSE__</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">:</span> compose<span class="token punctuation">;</span>

<span class="token keyword">const</span> enhancer <span class="token operator">=</span> <span class="token function">composeEnhancers</span><span class="token punctuation">(</span>
    <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> enhancer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="actioncreator-1" tabindex="-1"><a class="header-anchor" href="#actioncreator-1" aria-hidden="true">#</a> actionCreator</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">INIT_LIST_ACTION</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./actionTypes'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">initListAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">INIT_LIST_ACTION</span><span class="token punctuation">,</span>
    data
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getTodoList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/todolist'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> res
            <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">initListAction</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
            <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="todolist" tabindex="-1"><a class="header-anchor" href="#todolist" aria-hidden="true">#</a> TodoList</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getTodoList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../store/actionCreator'</span><span class="token punctuation">;</span>

<span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// action是一个函数</span>
    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">getTodoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 调用store来dispatch action时，action函数会被自动执行</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">异步请求和逻辑放到actionCreator的好处</p>
<ul>
<li>减少生命周期函数的代码量</li>
<li>有利于自动化测试（getTodoList函数相比生命周期函数更方便测试）</li>
</ul>
</div>
<h3 id="redux中间件" tabindex="-1"><a class="header-anchor" href="#redux中间件" aria-hidden="true">#</a> Redux中间件</h3>
<ul>
<li>
<p>redux中间件是表示在action和store中间的处理</p>
</li>
<li>
<p>Redux-thunk对dispatch这个方法做了升级，调用dispatch传递对象保持原样，而如果是传递函数，会先执行这个函数，在需要的时候再调用store(根据参数的不同执行不同的逻辑)</p>
</li>
</ul>
<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/react/middleware.PNG" alt=""></p>
<h3 id="redux-saga中间件" tabindex="-1"><a class="header-anchor" href="#redux-saga中间件" aria-hidden="true">#</a> Redux-saga中间件</h3>
<ul>
<li>
<p><strong>index.js</strong>使用配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> compose<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">'./reducer'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> createSagaMiddleware <span class="token keyword">from</span> <span class="token string">'redux-saga'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> todoSagas <span class="token keyword">from</span> <span class="token string">'./sagas'</span>

<span class="token keyword">const</span> sagaMiddleware <span class="token operator">=</span> <span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> composeEnhancers <span class="token operator">=</span> window<span class="token punctuation">.</span>__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ <span class="token operator">?</span> window<span class="token punctuation">.</span><span class="token function">__REDUX_DEVTOOLS_EXTENSION_COMPOSE__</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">:</span> compose<span class="token punctuation">;</span>
<span class="token keyword">const</span> enhancer <span class="token operator">=</span> <span class="token function">composeEnhancers</span><span class="token punctuation">(</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>sagaMiddleware<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> enhancer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// sagaMiddleware运行sagas文件</span>
sagaMiddleware<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>todoSagas<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>sagas.js</strong>一定要导出一个generator函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> takeEvery<span class="token punctuation">,</span> put <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux-saga/effects'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">GET_INIT_LIST</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./actionTypes'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initListAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./actionCreator'</span>

<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">getInitList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// generator对异步请求要用yield等待获取res</span>
  <span class="token comment">// 通过try catch语句捕获错误</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">yield</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/todolist'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">initListAction</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    <span class="token comment">// !! yield put()</span>
    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'todoList 网络请求失败'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// generator 函数</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">mySaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// sagas文件通过takeEvery捕获action，执行对应的方法</span>
  <span class="token keyword">yield</span> <span class="token function">takeEvery</span><span class="token punctuation">(</span><span class="token constant">GET_INIT_LIST</span><span class="token punctuation">,</span> getInitList<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> mySaga<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>reducer</strong>获取action更改state</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">INIT_LIST_ACTION</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./actionTypes'</span>

<span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">INIT_LIST_ACTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
        newState<span class="token punctuation">.</span>list <span class="token operator">=</span> action<span class="token punctuation">.</span>data
        <span class="token keyword">return</span> newState
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> state
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="react-redux" tabindex="-1"><a class="header-anchor" href="#react-redux" aria-hidden="true">#</a> React-Redux</h3>
<ul>
<li>
<p>Provider：将对应store提供给其内部的所有组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TodoList <span class="token keyword">from</span> <span class="token string">'./TodoList'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./store'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>TodoList <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">></span>
<span class="token punctuation">)</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    App<span class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>connect：将组件和store作连接（Provider内的组件）</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TodoList</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
                        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>inputValue<span class="token punctuation">}</span></span>
                        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>changeInputValue<span class="token punctuation">}</span></span>
                        <span class="token punctuation">/></span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">提交</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">123</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">inputValue</span><span class="token operator">:</span> state<span class="token punctuation">.</span>inputValue<span class="token punctuation">,</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> state<span class="token punctuation">.</span>list
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// store.dispatch, props</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function">changeInputValue</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'change_input_value'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
            <span class="token punctuation">}</span>
            <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>TodoList<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>mapStateToProps：定义state数据映射到props的规则</p>
</li>
<li>
<p>mapDispatchToProps：将store.dispatch方法映射到props上</p>
</li>
</ul>
<h4 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h4>
<ul>
<li>TodoList</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getAddItemAction<span class="token punctuation">,</span> getInputChangeAction<span class="token punctuation">,</span> getDeleteItemAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./store/actionCreator'</span>

<span class="token keyword">const</span> <span class="token function-variable function">TodoList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> inputValue<span class="token punctuation">,</span> list<span class="token punctuation">,</span> handleClick<span class="token punctuation">,</span> changeInputValue<span class="token punctuation">,</span> handleDelete <span class="token punctuation">}</span> <span class="token operator">=</span> props
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>changeInputValue<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">提交</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>
          list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// onCclick返回一个箭头函数执行，拿到正确index参数</span>
            <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token function">handleDelete</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inputValue</span><span class="token operator">:</span> state<span class="token punctuation">.</span>inputValue<span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> state<span class="token punctuation">.</span>list
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// store.dispatch, props</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function">changeInputValue</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">getInputChangeAction</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleDelete</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">getDeleteItemAction</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">getAddItemAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将UI组件和数据方法结合，返回容器组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>TodoList<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>store/index.js</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { createStore } from 'redux';
import reducer from './reducer'

const store = createStore(reducer)

export default store;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>reducer</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">CHANGE_INPUT_VALUE</span><span class="token punctuation">,</span> <span class="token constant">ADD_ITEM</span><span class="token punctuation">,</span> <span class="token constant">DELETE_ITEM</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./actionTypes'</span>

<span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">'hello world'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">CHANGE_INPUT_VALUE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
    newState<span class="token punctuation">.</span>inputValue <span class="token operator">=</span> action<span class="token punctuation">.</span>value
    <span class="token keyword">return</span> newState
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">ADD_ITEM</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
    newState<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newState<span class="token punctuation">.</span>inputValue<span class="token punctuation">)</span>
    newState<span class="token punctuation">.</span>inputValue <span class="token operator">=</span> <span class="token string">''</span>
    <span class="token keyword">return</span> newState
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">DELETE_ITEM</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
    newState<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> newState
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> state
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>actionTypes</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">CHANGE_INPUT_VALUE</span> <span class="token operator">=</span> <span class="token string">'change_input_value'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ADD_ITEM</span> <span class="token operator">=</span> <span class="token string">'add_item'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">DELETE_ITEM</span> <span class="token operator">=</span> <span class="token string">'delete_item'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>actionCreator</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">CHANGE_INPUT_VALUE</span><span class="token punctuation">,</span> <span class="token constant">ADD_ITEM</span><span class="token punctuation">,</span> <span class="token constant">DELETE_ITEM</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./actionTypes'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getInputChangeAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">CHANGE_INPUT_VALUE</span><span class="token punctuation">,</span>
  value
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getDeleteItemAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">DELETE_ITEM</span><span class="token punctuation">,</span>
  index
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getAddItemAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD_ITEM</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
