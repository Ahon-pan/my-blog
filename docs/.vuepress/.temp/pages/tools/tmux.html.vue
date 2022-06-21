<template><div><h1 id="tmux" tabindex="-1"><a class="header-anchor" href="#tmux" aria-hidden="true">#</a> tmux</h1>
<blockquote>
<p>prefix:  ctrl + b在配置已改成ctrl + f</p>
</blockquote>
<h2 id="回话存储" tabindex="-1"><a class="header-anchor" href="#回话存储" aria-hidden="true">#</a> 回话存储</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 保存会话</span>
prefix ctrl+s
<span class="token comment"># 恢复会话</span>
prefix ctrl+r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 新建会话</span>
tmux new -s windowName
<span class="token comment"># 查看会话</span>
prefix s
<span class="token comment"># 重命名会话</span>
prefix $

<span class="token comment"># 创建窗口</span>
prefix c
<span class="token comment"># 切换到2号窗口</span>
prefix <span class="token number">2</span>
<span class="token comment"># 重命名窗口</span>
prefix , 
<span class="token comment"># 关闭窗口</span>
prefix <span class="token operator">&amp;</span>

<span class="token comment"># 水平拆分出一个新窗格</span>
prefix %
<span class="token comment"># 垂直拆分窗格</span>
prefix "
<span class="token comment"># 切换到下一个窗格</span>
prefix o
<span class="token comment"># 关闭窗格</span>
prefix x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话管理" tabindex="-1"><a class="header-anchor" href="#会话管理" aria-hidden="true">#</a> 会话管理</h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>tmux new -s</td>
<td>创建会话</td>
<td></td>
</tr>
<tr>
<td>tmux detach</td>
<td>退出当前会话，会话进程仍然在后台运行</td>
<td>Ctrl+b d</td>
</tr>
<tr>
<td>tmux ls</td>
<td>查看当前所有的 会话</td>
<td>Ctrl+b s</td>
</tr>
<tr>
<td>tmux attach -t</td>
<td>重新接入某个已存在的会话</td>
<td></td>
</tr>
<tr>
<td>tmux kill-session</td>
<td>杀死某个会话</td>
<td></td>
</tr>
<tr>
<td>tmux switch -t</td>
<td>切换会话</td>
<td></td>
</tr>
<tr>
<td>tmux rename-session</td>
<td>重新命名会话</td>
<td>Ctrl+b $</td>
</tr>
<tr>
<td>tmux at -d</td>
<td>重绘窗口，在不同屏幕上保持窗口为最小尺寸</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="窗口管理" tabindex="-1"><a class="header-anchor" href="#窗口管理" aria-hidden="true">#</a> 窗口管理</h2>
<p>窗口属于会话，窗口包含多个窗格</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>tmux new-window -n</td>
<td>创建新窗口</td>
<td>Ctrl+b c</td>
</tr>
<tr>
<td>tmux select-window -t</td>
<td>切换窗口</td>
<td></td>
</tr>
<tr>
<td>tmux rename-window</td>
<td>重命名当前窗口</td>
<td>Ctrl+b ,</td>
</tr>
</tbody>
</table>
<p>切换窗口快捷键</p>
<table>
<thead>
<tr>
<th>快捷键</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ctrl+b p</td>
<td>切换到上一个窗口（按照状态栏上的顺序）</td>
</tr>
<tr>
<td>Ctrl+b n</td>
<td>切换到下一个窗口</td>
</tr>
<tr>
<td>Ctrl+b</td>
<td>切换到指定编号的窗口，number 是状态栏上的窗口编号</td>
</tr>
<tr>
<td>Ctrl+b w</td>
<td>从列表中选择窗口</td>
</tr>
<tr>
<td>ctrl+b &amp;</td>
<td>关闭当前窗口</td>
</tr>
<tr>
<td>ctrl+b x</td>
<td>删除窗口</td>
</tr>
</tbody>
</table>
<h2 id="窗格管理" tabindex="-1"><a class="header-anchor" href="#窗格管理" aria-hidden="true">#</a> 窗格管理</h2>
<p><strong>拆分窗格</strong></p>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>tmux split-window -h</td>
<td>划分左右两个窗格</td>
<td>prefix %</td>
</tr>
<tr>
<td>tmux split-window</td>
<td>划分上下两个窗格</td>
<td>prefix &quot;</td>
</tr>
</tbody>
</table>
<p><strong>移动窗格</strong></p>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>tmux select-pane -U</td>
<td>光标切换到上方窗格</td>
</tr>
<tr>
<td>tmux select-pane -D</td>
<td>光标切换到下方窗格</td>
</tr>
<tr>
<td>tmux select-pane -L</td>
<td>光标切换到左边窗格</td>
</tr>
<tr>
<td>tmux select-pane -R</td>
<td>光标切换到右边窗格</td>
</tr>
<tr>
<td>tmux swap-pane -U</td>
<td>当前窗格上移</td>
</tr>
<tr>
<td>tmux swap-pane -D</td>
<td>当前窗格下移</td>
</tr>
</tbody>
</table>
<p><strong>窗格快捷键</strong></p>
<table>
<thead>
<tr>
<th>快捷键</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ctrl+b %</td>
<td>划分左右两个窗格</td>
</tr>
<tr>
<td>Ctrl+b &quot;</td>
<td>划分上下两个窗格</td>
</tr>
<tr>
<td>Ctrl+b ;</td>
<td>切换到上一个窗格</td>
</tr>
<tr>
<td>Ctrl+b o</td>
<td>光标切换到下一个窗格</td>
</tr>
<tr>
<td>Ctrl+b {</td>
<td>当前窗格左移</td>
</tr>
<tr>
<td>Ctrl+b }</td>
<td>当前窗格右移</td>
</tr>
<tr>
<td>Ctrl+b Ctrl+o</td>
<td>当前窗格上移</td>
</tr>
<tr>
<td>Ctrl+b Alt+o</td>
<td>当前窗格下移</td>
</tr>
<tr>
<td>Ctrl+b x</td>
<td>关闭当前窗格</td>
</tr>
<tr>
<td>Ctrl+b !</td>
<td>将当前窗格拆分为一个独立窗口</td>
</tr>
<tr>
<td>Ctrl+b z</td>
<td>当前窗格全屏显示，再使用一次会变回原来大小</td>
</tr>
<tr>
<td>Ctrl+b q</td>
<td>显示窗格编号</td>
</tr>
<tr>
<td>Ctrl+b Alt+方向键</td>
<td>调整窗格大小</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="滚动窗口" tabindex="-1"><a class="header-anchor" href="#滚动窗口" aria-hidden="true">#</a> 滚动窗口</h2>
<p>tmux滚动窗口需要通过指令操作</p>
<table>
<thead>
<tr>
<th>快捷键</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ctrl+b [ （按q退出滚动模式）</td>
<td>滚动窗口</td>
</tr>
</tbody>
</table>
<h2 id="软件安装" tabindex="-1"><a class="header-anchor" href="#软件安装" aria-hidden="true">#</a> 软件安装</h2>
<h3 id="tmux下载" tabindex="-1"><a class="header-anchor" href="#tmux下载" aria-hidden="true">#</a> tmux下载</h3>
<p>使用以下命令安装 tmux，linux与mac都可以使用[brew (opens new window)](http://houdunren.gitee.io/note/linux/2 常用工具.html#brew)进行安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Mac</span>
$ brew <span class="token function">install</span> tmux

<span class="token comment"># CentOS 或 Fedor可以使用yum/dnf/brew等方式安装，brew版本更高些</span>
$ yum <span class="token function">install</span> tmux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字体图标" tabindex="-1"><a class="header-anchor" href="#字体图标" aria-hidden="true">#</a> 字体图标</h3>
<p>执行以下指令安装字体图标到系统中，有些风格需要图标时就可以正常显示了</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span>
<span class="token function">git</span> clone https://github.com/powerline/fonts.git --depth<span class="token operator">=</span><span class="token number">1</span>
<span class="token builtin class-name">cd</span> fonts
./install.sh
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">rm</span> -rf fonts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>items2需要在perference =&gt; profile =&gt; text:</p>
<p>✅  Use built-in Powerline glyphs    +  Font 选择</p>
</blockquote>
<h3 id="安装风格" tabindex="-1"><a class="header-anchor" href="#安装风格" aria-hidden="true">#</a> 安装风格</h3>
<ol>
<li>
<p>Clone 项目代码</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/odedlaz/tmux-onedark-theme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>删除原~/.tmux.conf文件（注意不是删除内容，因为存在的.tmux.conf可能是软链接），然后新建配置文件 <code v-pre>~/.tmux.conf</code> 添加以下内容，如果想显示完整日期就将前2~4行注释掉。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>run-shell ~/tmux-onedark-theme/tmux-onedark-theme.tmux
<span class="token builtin class-name">set</span> -g @onedark_widgets <span class="token string">" "</span>
<span class="token builtin class-name">set</span> -g @onedark_time_format <span class="token string">"%I:%M "</span>
<span class="token builtin class-name">set</span> -g @onedark_date_format <span class="token string">"%m/%d"</span>
set-option -g status-position bottom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>加载配置</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tmux source-file ~/.tmux.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="总体配置" tabindex="-1"><a class="header-anchor" href="#总体配置" aria-hidden="true">#</a> 总体配置</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>run-shell ~/tmux-onedark-theme/tmux-onedark-theme.tmux

<span class="token comment">#set -g @onedark_widgets"</span>
<span class="token builtin class-name">set</span> -g @onedark_widgets <span class="token string">"William"</span>
<span class="token builtin class-name">set</span> -g @onedark_time_format <span class="token string">"%I:%M"</span>
<span class="token builtin class-name">set</span> -g @onedark_date_format <span class="token string">"%m:%d"</span>
<span class="token comment">#set -g @onedark_date_format "%m:%d"</span>
set-option -g default-terminal <span class="token string">"screen-256color"</span>
<span class="token builtin class-name">set</span> -g default-terminal <span class="token string">"screen-256color"</span>

<span class="token comment"># 解决neovim中esc响应慢</span>
<span class="token builtin class-name">set</span> -s escape-time <span class="token number">0</span>
set-option -g status-position bottom

<span class="token comment"># 自动保存会话</span>
<span class="token builtin class-name">set</span> -g @plugin <span class="token string">'tmux-plugins/tpm'</span>
<span class="token builtin class-name">set</span> -g @plugin <span class="token string">'tmux-plugins/tmux-sensible'</span>
<span class="token builtin class-name">set</span> -g @plugin <span class="token string">'tmux-plugins/tmux-resurrect'</span>
<span class="token builtin class-name">set</span> -g @plugin <span class="token string">'tmux-plugins/tmux-continuum'</span>​
<span class="token builtin class-name">set</span> -g @continuum-save-interval <span class="token string">'15'</span>
<span class="token builtin class-name">set</span> -g @continuum-restore <span class="token string">'on'</span>
<span class="token builtin class-name">set</span> -g @resurrect-capture-pane-contents <span class="token string">'on'</span>
run <span class="token string">'~/.tmux/plugins/tpm/tpm'</span>

run-shell ~/.tmux/plugins/resurrect/resurrect.tmux

<span class="token comment"># 解除默认前缀</span>
unbind C-b
<span class="token comment"># 设置自定义前缀</span>
<span class="token builtin class-name">set</span> -g prefix C-f
<span class="token comment"># 采用vim的操作方式</span>
setw -g mode-keys <span class="token function">vi</span>
<span class="token comment"># 窗口序号从1开始计数</span>
<span class="token builtin class-name">set</span> -g base-index <span class="token number">1</span>
<span class="token comment"># 开启鼠标模式</span>
set-option -g mouse off

<span class="token comment"># 通过前缀+KJHL快速切换pane</span>
<span class="token comment">#up</span>
bind-key k select-pane -U
<span class="token comment">#down</span>
bind-key j select-pane -D
<span class="token comment">#left</span>
bind-key h select-pane -L
<span class="token comment">#right</span>
bind-key l select-pane -R
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
