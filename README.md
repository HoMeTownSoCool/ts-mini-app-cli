## 项目说明
### 概述
**ts-mini-app-cli** 是一个基于 TypeScript、Scss、Wxml以及微信开放API开发的微信小程序，它使用了严谨的TypeScript，注入配置`Eslint`代码校验工具、`Prettier`代码格式化工具以及`Husky`Git hook提交钩子，项目具有极高的代码规范。

### 开发工具
+ 调试层： 微信开发者工具
+ 开发层： VsCode

### 技术栈
+ `TypeScript` 
+ `Wxml` 
+ `Less`
+ `Vant Weapp`
+ `Eslint`
+ `Prettier`

### 目录结构
```
├── .eslintignore // eslint代码校验忽略文件
├── .eslintrc.js // eslint代码校验配置文件
├── .gitignore // git忽略文件文件
├── .husky // git钩子目录（pre-commit）
├── .lintstagedrc.js // lintstaged配置（仅处理暂存）
├── .prettierignore // 代码格式化忽略文件
├── .prettierrc.js // 代码格式化配置文件
├── .vscode // vscode ide配置文件
├── miniprogram // 小程序主体文件
|  ├── app.json // 小程序全局配置json文件
|  ├── app.scss // 小程序全局scss文件
|  ├── app.ts // 小程序入口
|  ├── assets // 静态资源目录
|  ├── components // 自定义组件目录
|  ├── config // 配置目录（env）
|  ├── constants // 常量管理目录
|  ├── enum // 枚举值目录
|  ├── hooks // 逻辑钩子目录
|  ├── libs // 三方插件资源目录
|  ├── pages // 页面目录
|  ├── service // 服务目录（api）
|  ├── sitemap.json // 站点信息文件
|  ├── styles // 样式目录
|  └── utils // 工具目录
├── package-lock.json // npm版本锁定文件
├── package.json // npm项目管理文件
├── project.config.json // 项目配置文件
├── readme.md // 项目说明文件
├── tsconfig.json // ts配置json文件
└── typings // type管理文件
```

### 项目进展

| 名称 | 状态 |
| --- | --- |
| 架构设计&搭建 | In progress |

### 创建者
[HoMeTown](https://github.com/HoMeTownSoCool)
