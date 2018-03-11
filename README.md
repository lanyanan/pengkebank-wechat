# 商业后台微信端 项目

## 目录
<!-- MarkdownTOC depth=4 autolink=true bracket=round -->

- [开发环境](#开发环境)
    - [开发环境搭建](#开发环境搭建)
- [项目开发](#项目开发)
	- [规范及约定](#规范及约定)
        - [目录规范](#目录规范)
        - [文件规范](#文件规范)
        - [注释规范](#注释规范)
    - [项目构建及发布](#项目构建及发布)
- [项目调试](#项目调试)
	- [项目的调试工具](#项目调试)
- [协作流程](#协作流程)
	- [](#项目调试)


<!-- /MarkdownTOC -->


****************

<span id="开发环境"></span>
## 开发环境
本项目采用react开发，构建工具是webpack，路由采用react-router 4.0，状态的管理采用redux，这些工具都是当前最新版本的，@dateTime 2018-02-07


<span id="开发环境搭建"></span>
### 开发环境搭建
* node.js安装
可以去[node.js官网](https://nodejs.org/en/download/){:target="_blank"}下载安装包进行安装。

* npm使用
安装了node.js以后，即可使用npm包管理器安装node.js模块。

* webpack全局安装
打开命令提示符，执行`npm install webpack -g`

* 初始化开发环境
在根目录下执行`npm install`即可自动安装构建工具, 需要用到的模块已在package.json配置好。也可根据自己需要自行安装其它模块。（注：如安装报错，可尝试直接再次执行`npm install`）

* 微信开发工具的下载
可以去微信公众号平台下载微信开发者工具[下载链接](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1455784140)下载微信开发者工具然后扫描登陆
在开发的时候需要在在公众号添加公众号开发者进行开发授权

<span id="项目开发"></span>
## 项目开发


<span id="规范及约定"></span>
### 规范及约定

为提高工作效率，减少重复造轮子的工作，本项目推崇组件化开发模式。另外，因项目参与人员过多，为便于维护管理，现做约定如下：

<span id="目录规范"></span>
#### 目录规范
##### I. 公共目录
项目有个公共文件夹 用于存放本项目相关的公共文件

1. ** /public/src ** 目录为公共文件源码目录，此目录下的文件可以通过更改webpack.public里面的配置编译压缩成static里面的静态文件

2. ** /public/static ** 目录为公共静态文件目录，用于存放编译过的公共文件和公共的组件等

##### II. 项目目录
项目目录位于** /src/ **。此处约定源文件目录规范（src目录），项目结构后面会提到

1. ** src/css ** 目录为样式表存放目录，所有的样式表均存放于此目录

2. ** src/js ** 目录为js文件存放目录。

3. ** src/img ** 目录为img文件存放目录。

<span id="文件规范"></span>
#### 文件规范
1. 项目文件命名统一采用驼峰式，如：lightBeauty.html。

2. **js入口文件必须命名为index.{js}，以便构建工具自动识别。示例：index.js。**

3. css文件可用@import导入公共文件，随后webpck构建工具将自动合并。

4. 组件开发时，尽可能考虑其复用性。对于通用性较高的组件，可提取为公共组件，并提升至** public/src/static **目录。

<span id="注释规范"></span>
#### 注释规范
1. 函数或方法的注释采用如下格式，用sublime的可以尝试DocBlockr插件。
	/**
	* [foo description]
	* @param  {[type]} arg1 [description]
	* @param  {[type]} arg2 [description]
	* @return {[type]}      [description]
	*/
	function foo(arg1, arg2){
	}

2. react组件的注释采用如下格式：
	/**
	* [MyComponent description]
	* @prop {[type]}  prop1  [description]
	* @prop {[type]}  prop2  [description]
	*/
	var MyComponent = React.createClass({
	});

<span id="项目构建及发布"></span>
### 项目构建及发布
1.项目的开发

	npm run start

这个是在浏览器自动打开需要复制链接到微信开发者工具

2.项目的构建

	npm run build

执行命令之后会有打包文件的在dist目录 这个就是前端的静态资源

3.项目的发布
可以打开目录下面的start.cmd文件输入3回车会在项目的同级目录生成静态资源文件
可以用于发布测试线上

4.对于项目的构建开发也可以打开项目的start.cmd文件根据提示输入对应的数字进行项目的开发构建发布

<span id="项目调试"></span>
## 项目调试

项目交付app实施后，可能还会存在许多意料外的bug。这些bug多数是由于数据与预期不一致造成。因此，我们需要一些手段来在真实app环境下进行调试。以下将介绍两款辅助工具。

#### Fiddler
目前有Fiddler2和Fiddler4两种版本，Fiddler2依赖的是.net2.0，Fiddler4则是.net4.0。可根据自己电脑上的.net框架进行选择安装。 [Fiddler官方网址](http://www.telerik.com/download/fiddler)
Fiddler本身其实是一款网络代理软件，当你启动它的时候，你电脑上的所有网络请求都将由它代理。所以，我们让它能够代理我们的手机网络，这样就能在电脑上进行远程调试了。
步骤如下：

1. 电脑端，启动Fiddler，依次选择 Tools > Fiddler Options.. > Connections ，然后勾选“Allow romote computers to connect”。如需要更改端口号，在“Fiddler listens on port:” 填写。最后点击OK即可。

2. 打开命令提示符，执行`ipconfig`确定本机局域网IP地址。如：192.168.1.100

3. 手机端，连入本地局域网wifi网络，进入当前连入wifi的设置页，代理模式选择手动，主机名填第2步查到的192.168.1.100，端口填8888（或你第1步修改的端口号）。

至此，已可以在手机上操作APP，然后在Fiddler里查看数据交互情况了。关于Fiddler的详细使用方法，请自行百度，本文不再赘述。


#### weinre
使用Fiddler可以帮我们追踪到app是否有从服务器取到数据，监听的是app到server的数据，却不能让我们监听到app到web的数据。对于我方开发人员来说，app到web的数据流是否正确，才是最重要的。因此，我们要借助另一款工具：weinre。

1. 执行`npm install weinre -g`安装weinre

2. 执行`weinre --boundHost -all-`开启weinre

3. 打开命令提示符，执行`ipconfig`确定本机局域网IP地址。如：192.168.1.100

4. 浏览器打开[192.168.1.100:8080](http://127.0.0.1:8080){:target="_blank"}

5. 在“Target Script”栏找到“Example”里的代码，并复制到项目html文件中

        <script src="http://192.168.1.100:8080/target/target-script-min.js#anonymous"></script>

6. 确保你的项目可以在局域网内通过`http://192.168.1.100/yourproject`访问到（可让同事帮忙测试）。如不能访问，可关闭防火墙并开启guest账户再试。

7. 将网址`http://192.168.1.100/yourproject`提供给app方打测试包

8. 在weinre浏览器界面“Access Points”栏找到“debug client user interface:”并点击，将会进入调试面板。切换到console选项卡，进入控制台

至此，你可以在本地编辑你的项目，在需要的地方打断点，然后在app里进行操作。weinre将提供输出你所需要的调试信息的能力。甚至，在“Elements”标签下，你还可以“遥控”界面。

<span id="协作流程"></span>
## 协作流程

本项目采用github进行项目代码的托管
在看这部分前，请先回顾阅读业界认可的成功的 Git Branch Work Flow 模型 [A Successful Git Branching Model](http://nvie.com/posts/a-successful-git-branching-model/) ，了解日常开发中的场景，有助于熟悉下面的使用过程。

1.添加合作者

- 用户在Setting下设置合作者Collaborators
- 可以直接搜索合作者的用户名称然后添加到Collaborators
- 复制邀请链接让合作者打开，然后accept 
- 到此新建的项目合作者会有change push merge权限

2.协作方式之Git-Develop 分支模式

![图片](images/branch_module.png)

Git-Develop 分支模式是基于 Git 代码库设计的一种需要严格控制发布质量和发布节奏的开发模式。
develop 作为固定的持续集成和发布分支，并且分支上的代码必须经过 CodeReview 后才可以提交到 Develop 分支。它的基本流程如下：

- 每一个需求/变更都单独从Master上创建一条Branch分支；
- 用户在这个Branch分支上进行Codeing活动；
- 代码达到发布准入条件后提交Codereview，Codereview通过后代码自动合并到Develop分支；
- 待所有计划发布的变更分支代码都合并到Develop后，系统再 rebase master 代码到Develop 分支，然后自行构建，打包，部署等动作。
- 应用发布成功后会基于Develop分支的发布版本打一个“当前线上版本Tag”基线；
- 应用发布成功后会把Develop分支的发布版本合并回master；
