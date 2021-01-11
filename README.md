# webpack 打包模板

- 支持 react+typescript 技术栈

### webpack 打包优化

- 使用 happypack 并发执行任务
- 启用 css modules
- 公共代码单独打包，按需加载
- MiniCssExtractPlugin单独抽取 css 文件，提高页面加载效率
- 生产环境代码压缩
- alias对文件路径优化,@对应src文件夹

### eslint
- 使用ts+airbn规范

## 用法

### 安装

```js
npm i
```

### dev 开发

```js
npm run dev
```

### 构建

```js
npm run build
```

### 预览

- 打开 http://localhost:3000/

## 脚手架

- [生成项目脚手架工具](https://github.com/yklydxtt/mycli)
