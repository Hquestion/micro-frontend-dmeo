# 微前端框架Demo

## Demo1

由portal应用和两个子应用组成，portal作为主应用，内嵌两个子应用。

对应仓库为：
+ portal：/portal
+ vue子应用： /micro-vue
+ react子应用： /micor-react

### 启动

```shell
cd portal
npm start

cd micro-vue
npm run serve

cd micor-react
npm start
```

## Demo2

由一个子应用（作为微前端主应用）和两个应用部件（非完整应用）组成。在子应用内
集成两个应用部件。

对应仓库为：
+ portal: /portal-sub-app
+ 头部部件应用： /micro-header
+ 底部部件应用： /micro-footer

### 启动

```shell
cd portal-sub-app
npm start

cd micro-header
npm run serve

cd micro-footer
npm start
```

## Demo3
模块联邦，基于Webpack5。编译后也可运行。

对应仓库：
module-federation

### 启动

```shell
cd module-federation/w5mf/app1
npm start


cd module-federation/w5mf/app2
npm start
```
