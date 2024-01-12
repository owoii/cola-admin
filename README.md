# Cola-Admin

学习 vben-admin 的设计

项目搭建是真的难受啊😣,好复杂的感觉  
要成六边形战士了 QAQ

### 项目使用的包:
从 vben-admin 的 package.json 中可以看到,他安装了非常多的依赖,就表示这是一个非常大的项目了... QAQ

#### 规范 git 提交
首先是关于 git 提交,在 vben 的文档中可以看到,他们题到了 [CommitLint](https://doc.vvbin.cn/dep/lint.html#commitlint) 这个工具  
这个工具是用来保证项目的代码提交规范的 (在我写代码的前期可能就是没有啥规范,ps: 我的规矩就是规矩 XD)  
接着查看 `package.json` 中,可以看到还配置了一个 config

```json
{
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git"
    }
  }
}
```

这个配置让 `commitizen` 使用 `cz-git` 这个适配器,看官网的意思就是说它是工程性更强,更轻量的一个适配器  
因为我之前并没有用过 `commitizen` 这个工具,所以是很懵逼的,看了下它的仓库的 README.md,也安装用了下,大概给我的感觉就是:  
> 一个很方便的 cli 工具,可以使用很简单的命令,比如 `cz` 来使用它,然后但我添加/修改了一个文件后我可以很方便的输入 `cz` 命令,然后它就会出现一系列的提示
> 因为有了它的文字提示,我就可以很方便的选择我这次的 commit 属于什么

### 增加了一些和 vben 不同的东西

比如 cypress  
> 这是一个端到端测试工具,这个是用 vite 创建项目时选择了,然后想了想要不也加进来,顺带学习下 (不过估计要鸽)