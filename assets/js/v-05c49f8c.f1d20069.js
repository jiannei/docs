"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[384],{1414:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-05c49f8c",path:"/packages/laravel-logger.html",title:"laravel-logger",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"社区讨论文章",slug:"社区讨论文章",children:[]},{level:2,title:"介绍",slug:"介绍",children:[]},{level:2,title:"概览",slug:"概览",children:[]},{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"配置",slug:"配置",children:[{level:3,title:"Laravel",slug:"laravel",children:[]},{level:3,title:"Lumen",slug:"lumen",children:[]},{level:3,title:".env 中配置启用",slug:"env-中配置启用",children:[]},{level:3,title:"其他",slug:"其他",children:[]}]},{level:2,title:"如何使用",slug:"如何使用",children:[{level:3,title:"使用",slug:"使用",children:[]}]},{level:2,title:"特别说明",slug:"特别说明",children:[]},{level:2,title:"License",slug:"license",children:[]}],filePathRelative:"packages/laravel-logger.md",git:{updatedTime:1632025054e3,contributors:[{name:"Jiannei",email:"longjian.huang@foxmail.com",commits:2}]}}},1949:(n,a,e)=>{e.r(a),e.d(a,{default:()=>rn});var s=e(6252);const t=(0,s._)("h1",{id:"laravel-logger",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#laravel-logger","aria-hidden":"true"},"#"),(0,s.Uk)(" laravel-logger")],-1),o=(0,s._)("img",{src:"https://github.com/Jiannei/laravel-logger/workflows/Test/badge.svg",alt:"Test"},null,-1),l={href:"https://github.styleci.io/repos/317144680?branch=main",target:"_blank",rel:"noopener noreferrer"},u=(0,s._)("img",{src:"https://github.styleci.io/repos/317144680/shield?branch=main",alt:"StyleCI"},null,-1),r={href:"https://packagist.org/packages/jiannei/laravel-logger",target:"_blank",rel:"noopener noreferrer"},p=(0,s._)("img",{src:"http://poser.pugx.org/jiannei/laravel-logger/v",alt:"Latest Stable Version"},null,-1),i={href:"https://packagist.org/packages/jiannei/laravel-logger",target:"_blank",rel:"noopener noreferrer"},c=(0,s._)("img",{src:"http://poser.pugx.org/jiannei/laravel-logger/downloads",alt:"Total Downloads"},null,-1),q={href:"https://packagist.org/packages/jiannei/laravel-logger",target:"_blank",rel:"noopener noreferrer"},m=(0,s._)("img",{src:"http://poser.pugx.org/jiannei/laravel-logger/d/monthly",alt:"Monthly Downloads"},null,-1),d={href:"https://packagist.org/packages/jiannei/laravel-logger",target:"_blank",rel:"noopener noreferrer"},b=(0,s._)("img",{src:"http://poser.pugx.org/jiannei/laravel-logger/v/unstable",alt:"Latest Unstable Version"},null,-1),g={href:"https://packagist.org/packages/jiannei/laravel-logger",target:"_blank",rel:"noopener noreferrer"},k=(0,s._)("img",{src:"http://poser.pugx.org/jiannei/laravel-logger/license",alt:"License"},null,-1),h=(0,s._)("h2",{id:"社区讨论文章",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#社区讨论文章","aria-hidden":"true"},"#"),(0,s.Uk)(" 社区讨论文章")],-1),_={href:"https://learnku.com/articles/45311",target:"_blank",rel:"noopener noreferrer"},v=(0,s.Uk)("是时候使用 Lumen 8 + API Resource 开发项目了！"),f={href:"https://learnku.com/articles/45526",target:"_blank",rel:"noopener noreferrer"},x=(0,s.Uk)("教你更优雅地写 API 之「路由设计」"),U={href:"https://learnku.com/articles/52784",target:"_blank",rel:"noopener noreferrer"},L=(0,s.Uk)("教你更优雅地写 API 之「规范响应数据」"),O={href:"https://learnku.com/articles/53015",target:"_blank",rel:"noopener noreferrer"},y=(0,s.Uk)("教你更优雅地写 API 之「枚举使用」"),E={href:"https://learnku.com/articles/53669",target:"_blank",rel:"noopener noreferrer"},G=(0,s.Uk)("教你更优雅地写 API 之「记录日志」"),D={href:"https://learnku.com/articles/58403",target:"_blank",rel:"noopener noreferrer"},S=(0,s.Uk)("教你更优雅地写 API 之「灵活地任务调度」"),A=(0,s._)("h2",{id:"介绍",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),(0,s.Uk)(" 介绍")],-1),M=(0,s._)("p",null,[(0,s._)("code",null,"laravel-logger"),(0,s.Uk)(" 主要用来扩展项目中的日志记录，使调试更加方便。")],-1),w=(0,s._)("h2",{id:"概览",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#概览","aria-hidden":"true"},"#"),(0,s.Uk)(" 概览")],-1),I=(0,s._)("li",null,[(0,s.Uk)("提供 "),(0,s._)("code",null,"logger_async"),(0,s.Uk)(" 辅助函数，通过异步 Job 方式来记录日志；")],-1),W=(0,s._)("li",null,[(0,s.Uk)("增加 RequestLog 中间件来记录 api 的请求和响应；对于单个请求关联 "),(0,s._)("code",null,"UNIQUE_ID"),(0,s.Uk)("，根据"),(0,s._)("code",null,"UNIQUE_ID"),(0,s.Uk)("可以跟踪请求执行过程")],-1),j=(0,s._)("li",null,"适配 MongoDB 驱动，支持记录日志到 MongoDB；collection 支持按天、按月和按年拆分；",-1),T=(0,s.Uk)("日志的 message 适配 "),B={href:"https://github.com/Jiannei/laravel-enum",target:"_blank",rel:"noopener noreferrer"},R=(0,s.Uk)("laravel-enum"),N=(0,s.Uk)("，来让所有的日志来源可以追溯"),P=(0,s._)("li",null,[(0,s.Uk)("提供 "),(0,s._)("code",null,"LOG_QUERY"),(0,s.Uk)("、"),(0,s._)("code",null,"LOG_REQUEST"),(0,s.Uk)(" 配置参数来开启关闭 sql 日志和 request 日志")],-1),J=(0,s._)("h2",{id:"安装",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),(0,s.Uk)(" 安装")],-1),H=(0,s.Uk)("支持 Laravel 8/Lumen 8 以上版本，自定义日志描述分依赖于 "),Q={href:"https://github.com/Jiannei/laravel-enum",target:"_blank",rel:"noopener noreferrer"},$=(0,s.Uk)("jiannei/laravel-enum"),C=(0,s.Uk)("，需要先进行安装。"),V=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">composer</span> require jiannei/laravel-enum -vvv\n$ <span class="token function">composer</span> require jiannei/laravel-logger -vvv\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>复制配置项到 <code>config/logging.php</code>中，参考：https://github.com/Jiannei/lumen-api-starter/blob/master/config/logging.php</p><h3 id="laravel" tabindex="-1"><a class="header-anchor" href="#laravel" aria-hidden="true">#</a> Laravel</h3><ul><li>添加中间件 RequestLog 来记录 API 请求日志</li></ul><p>在 <code>app/Http/Kernel.php</code> 的 $middlewareGroups 中添加</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$middlewareGroups</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string single-quoted-string">&#39;api&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>\n        <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Jiannei<span class="token punctuation">\\</span>Logger<span class="token punctuation">\\</span>Laravel<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Middleware<span class="token punctuation">\\</span>RequestLog</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span><span class="token comment">// 加在这个地方</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li></li></ul><h3 id="lumen" tabindex="-1"><a class="header-anchor" href="#lumen" aria-hidden="true">#</a> Lumen</h3><ul><li>加载配置</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// bootstrap/app.php</span>\n<span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;logging&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>添加中间件</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Jiannei<span class="token punctuation">\\</span>Logger<span class="token punctuation">\\</span>Laravel<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Middleware<span class="token punctuation">\\</span>RequestLog</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>注册服务容器</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Jiannei<span class="token punctuation">\\</span>Logger<span class="token punctuation">\\</span>Laravel<span class="token punctuation">\\</span>Providers<span class="token punctuation">\\</span>ServiceProvider</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="env-中配置启用" tabindex="-1"><a class="header-anchor" href="#env-中配置启用" aria-hidden="true">#</a> .env 中配置启用</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token constant">LOG_CHANNEL</span><span class="token operator">=</span>mongo\n<span class="token constant">LOG_SLACK_WEBHOOK_URL</span><span class="token operator">=</span>\n<span class="token constant">LOG_QUERY</span><span class="token operator">=</span><span class="token constant boolean">true</span>\n<span class="token constant">LOG_REQUEST</span><span class="token operator">=</span><span class="token constant boolean">true</span>\n\n<span class="token comment"># 如果使用的是 mongo channel 需要配置</span>\n<span class="token constant">LOG_MONGODB_SEPARATE</span><span class="token operator">=</span>daily\n<span class="token constant">LOG_MONGODB_LEVEL</span><span class="token operator">=</span>debug\n<span class="token constant">LOG_MONGODB_HOST</span><span class="token operator">=</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>\n<span class="token constant">LOG_MONGODB_PORT</span><span class="token operator">=</span><span class="token number">27017</span>\n<span class="token constant">LOG_MONGODB_DATABASE</span><span class="token operator">=</span>logs\n<span class="token constant">LOG_MONGODB_USERNAME</span><span class="token operator">=</span>\n<span class="token constant">LOG_MONGODB_PASSWORD</span><span class="token operator">=</span>\n<span class="token constant">LOG_MONGODB_AUTHENTICATION_DATABASE</span><span class="token operator">=</span>admin\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3>',18),Y=(0,s.Uk)("如果需要记录日志到 MongoDB，需要先安装并配置"),K={href:"https://github.com/jenssegers/laravel-mongodb",target:"_blank",rel:"noopener noreferrer"},z=(0,s.Uk)("laravel-mongodb"),Z=(0,s._)("h2",{id:"如何使用",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#如何使用","aria-hidden":"true"},"#"),(0,s.Uk)(" 如何使用")],-1),F=(0,s.Uk)("可以参考 "),X={href:"https://github.com/Jiannei/lumen-api-starter",target:"_blank",rel:"noopener noreferrer"},nn=(0,s.Uk)("lumen-api-starter"),an=(0,s.Uk)(" 中的实际使用示例。"),en=(0,s.uE)('<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><ul><li><code>app/Repositories/Enums/LogEnum.php</code> 中定义记录日志时的 message</li><li>通过 logger_async 方法记录日志</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">logger_async</span><span class="token punctuation">(</span><span class="token class-name static-context">LogEnum</span><span class="token operator">::</span><span class="token constant">SYSTEM_SQL</span><span class="token punctuation">,</span> <span class="token variable">$arrayData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>如果队列任务异步执行，则需要开启队列消费 <code>php artisan queue:work</code></p></li><li><p>记录到文件中的日志内容</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[2021-01-18 12:03:36] local.DEBUG: System sql {&quot;database&quot;:&quot;lumen-api&quot;,&quot;duration&quot;:&quot;11.08ms&quot;,&quot;sql&quot;:&quot;select `roles`.*, `model_has_roles`.`model_id` as `pivot_model_id`, `model_has_roles`.`role_id` as `pivot_role_id`, `model_has_roles`.`model_type` as `pivot_model_type` from `roles` inner join `model_has_roles` on `roles`.`id` = `model_has_roles`.`role_id` where `model_has_roles`.`model_id` = &#39;11&#39; and `model_has_roles`.`model_type` = &#39;App\\\\\\\\Repositories\\\\\\\\Models\\\\\\\\User&#39;&quot;} {&quot;url&quot;:&quot;/users&quot;,&quot;ip&quot;:&quot;172.22.0.1&quot;,&quot;http_method&quot;:&quot;get&quot;,&quot;server&quot;:&quot;lumen-api.test&quot;,&quot;referrer&quot;:null,&quot;unique_id&quot;:&quot;43f54ea9-4ad4-47cf-b9da-1d3aa150ff61&quot;}\n[2021-01-18 12:03:36] local.DEBUG: System request {&quot;request&quot;:[],&quot;response&quot;:{&quot;status&quot;:&quot;success&quot;,&quot;code&quot;:200,&quot;message&quot;:&quot;操作成功&quot;,&quot;data&quot;:{&quot;data&quot;:[{&quot;id&quot;:1,&quot;nickname&quot;:&quot;Evert Stracke DVM&quot;,&quot;email&quot;:&quot;aufderhar.kaden@example.net&quot;},{&quot;id&quot;:2,&quot;nickname&quot;:&quot;Milton Toy&quot;,&quot;email&quot;:&quot;keagan.eichmann@example.org&quot;},{&quot;id&quot;:3,&quot;nickname&quot;:&quot;Mrs. Alyce O&#39;Hara&quot;,&quot;email&quot;:&quot;cartwright.sidney@example.org&quot;},{&quot;id&quot;:4,&quot;nickname&quot;:&quot;Prof. Evalyn Windler I&quot;,&quot;email&quot;:&quot;bertram.bartoletti@example.org&quot;},{&quot;id&quot;:5,&quot;nickname&quot;:&quot;Brant Skiles&quot;,&quot;email&quot;:&quot;jane16@example.net&quot;},{&quot;id&quot;:6,&quot;nickname&quot;:&quot;Sage Rodriguez I&quot;,&quot;email&quot;:&quot;ryder50@example.org&quot;},{&quot;id&quot;:7,&quot;nickname&quot;:&quot;Ms. Angelica Wiegand DVM&quot;,&quot;email&quot;:&quot;kaelyn.mueller@example.net&quot;},{&quot;id&quot;:8,&quot;nickname&quot;:&quot;Newton Zieme&quot;,&quot;email&quot;:&quot;sipes.kip@example.com&quot;},{&quot;id&quot;:9,&quot;nickname&quot;:&quot;Natalia Ruecker&quot;,&quot;email&quot;:&quot;stroman.kiley@example.com&quot;},{&quot;id&quot;:10,&quot;nickname&quot;:&quot;Hallie Parisian&quot;,&quot;email&quot;:&quot;rosina74@example.net&quot;},{&quot;id&quot;:11,&quot;nickname&quot;:&quot;Jiannei&quot;,&quot;email&quot;:&quot;longjian.huang@foxmail.com&quot;}],&quot;meta&quot;:{&quot;pagination&quot;:{&quot;total&quot;:11,&quot;count&quot;:11,&quot;per_page&quot;:15,&quot;current_page&quot;:1,&quot;total_pages&quot;:1,&quot;links&quot;:[]}}},&quot;error&quot;:[]},&quot;start&quot;:1610942614.450748,&quot;end&quot;:1610942615.785696,&quot;duration&quot;:&quot;1.33s&quot;} {&quot;url&quot;:&quot;/users&quot;,&quot;ip&quot;:&quot;172.22.0.1&quot;,&quot;http_method&quot;:&quot;GET&quot;,&quot;server&quot;:&quot;lumen-api.test&quot;,&quot;referrer&quot;:null,&quot;unique_id&quot;:&quot;43f54ea9-4ad4-47cf-b9da-1d3aa150ff61&quot;}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>记录到 Mongodb 的日志内容</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* 1 */\n{\n    &quot;_id&quot; : ObjectId(&quot;60050999ee7d025d4c62c8c2&quot;),\n    &quot;message&quot; : &quot;System sql&quot;,\n    &quot;context&quot; : {\n        &quot;database&quot; : &quot;lumen-api&quot;,\n        &quot;duration&quot; : &quot;54.19ms&quot;,\n        &quot;sql&quot; : &quot;select count(*) as aggregate from `users`&quot;\n    },\n    &quot;level&quot; : 100,\n    &quot;level_name&quot; : &quot;DEBUG&quot;,\n    &quot;channel&quot; : &quot;mongo&quot;,\n    &quot;datetime&quot; : ISODate(&quot;2021-01-18T12:07:53.410+08:00&quot;),\n    &quot;extra&quot; : {\n        &quot;url&quot; : &quot;/users&quot;,\n        &quot;ip&quot; : &quot;172.22.0.1&quot;,\n        &quot;http_method&quot; : &quot;get&quot;,\n        &quot;server&quot; : &quot;lumen-api.test&quot;,\n        &quot;referrer&quot; : null,\n        &quot;unique_id&quot; : &quot;0cda1927-bf14-4acf-88e8-1d9ed67170b5&quot;\n    }\n}\n\n/* 2 */\n{\n    &quot;_id&quot; : ObjectId(&quot;60050999ee7d025d4c62c8c3&quot;),\n    &quot;message&quot; : &quot;System sql&quot;,\n    &quot;context&quot; : {\n        &quot;database&quot; : &quot;lumen-api&quot;,\n        &quot;duration&quot; : &quot;2.42ms&quot;,\n        &quot;sql&quot; : &quot;select * from `users` limit 15 offset 0&quot;\n    },\n    &quot;level&quot; : 100,\n    &quot;level_name&quot; : &quot;DEBUG&quot;,\n    &quot;channel&quot; : &quot;mongo&quot;,\n    &quot;datetime&quot; : ISODate(&quot;2021-01-18T12:07:53.500+08:00&quot;),\n    &quot;extra&quot; : {\n        &quot;url&quot; : &quot;/users&quot;,\n        &quot;ip&quot; : &quot;172.22.0.1&quot;,\n        &quot;http_method&quot; : &quot;get&quot;,\n        &quot;server&quot; : &quot;lumen-api.test&quot;,\n        &quot;referrer&quot; : null,\n        &quot;unique_id&quot; : &quot;0cda1927-bf14-4acf-88e8-1d9ed67170b5&quot;\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="特别说明" tabindex="-1"><a class="header-anchor" href="#特别说明" aria-hidden="true">#</a> 特别说明</h2>',8),sn=(0,s.Uk)("SQL 日志记录参考："),tn={href:"https://github.com/overtrue/laravel-query-logger",target:"_blank",rel:"noopener noreferrer"},on=(0,s.Uk)("laravel-query-logger"),ln=(0,s._)("h2",{id:"license",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#license","aria-hidden":"true"},"#"),(0,s.Uk)(" License")],-1),un=(0,s._)("p",null,"MIT",-1),rn={render:function(n,a){const e=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[o,(0,s._)("a",l,[u,(0,s.Wm)(e)]),(0,s._)("a",r,[p,(0,s.Wm)(e)]),(0,s._)("a",i,[c,(0,s.Wm)(e)]),(0,s._)("a",q,[m,(0,s.Wm)(e)]),(0,s._)("a",d,[b,(0,s.Wm)(e)]),(0,s._)("a",g,[k,(0,s.Wm)(e)])]),h,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",_,[v,(0,s.Wm)(e)])]),(0,s._)("li",null,[(0,s._)("a",f,[x,(0,s.Wm)(e)])]),(0,s._)("li",null,[(0,s._)("a",U,[L,(0,s.Wm)(e)])]),(0,s._)("li",null,[(0,s._)("a",O,[y,(0,s.Wm)(e)])]),(0,s._)("li",null,[(0,s._)("a",E,[G,(0,s.Wm)(e)])]),(0,s._)("li",null,[(0,s._)("a",D,[S,(0,s.Wm)(e)])])]),A,M,w,(0,s._)("ul",null,[I,W,j,(0,s._)("li",null,[T,(0,s._)("a",B,[R,(0,s.Wm)(e)]),N]),P]),J,(0,s._)("p",null,[H,(0,s._)("a",Q,[$,(0,s.Wm)(e)]),C]),V,(0,s._)("p",null,[Y,(0,s._)("a",K,[z,(0,s.Wm)(e)])]),Z,(0,s._)("p",null,[F,(0,s._)("a",X,[nn,(0,s.Wm)(e)]),an]),en,(0,s._)("ul",null,[(0,s._)("li",null,[sn,(0,s._)("a",tn,[on,(0,s.Wm)(e)])])]),ln,un],64)}}}}]);