# nfbudo

## 目录结构

```
nfbudo
├── build                     # webpack相关配置
│   ├── base.js
│   ├── config.js
│   ├── dev.js
│   └── prod.js
├── dist                      # 生产环境资源目录
│   ├── assets
│   ├── css                    
│   ├── js
│   ├── manifest.json
│   └── pages
├── package-lock.json         # npm版本锁
├── package.json
├── readme.md
└── src                       # 开发目录
    ├── assets                # 图片等资源目录
    ├── commons               # 通用资源目录
    │   ├── js                # 通用js
    │   └── style             # 通用scss
    └── pages                 # 入口文件及相关资源
        └── demo
            ├── assets        # 图片等资源
            ├── components    # 私有组件
            ├── index.ejs     # ejs模版，命名需要和入口文件js相同
            ├── index.js      # 入口文件
            └── index.vue     # vue组件
```

## 依赖安装
> 请勿使用cnpm package，部分依赖使用公司内部仓库发布，需要设置registry后通过npm获取   
> npm-team需要配置host:120.132.70.128

```
npm set registry https://npm-team.smzdm.com
npm install
```

## 开发环境

执行以下命令即可启动 webpack 开发调试服务器，可在浏览器输入http://localhost:8080 预览项目文件：

```
npm run dev
```

服务端口默认为8080，如果因为8080端口被占用而希望启用其他端口，需要追加端口参数配置，如下：

```
npm run dev --port=8082
```

修改代码后保存，会根据代码的修改情况进行自动热替换／刷新页面。

## 生产环境

```
npm run build        # 打包后无sourceMap，资源压缩
npm run build:debug  # 打包后包含sourceMap，资源未压缩
```