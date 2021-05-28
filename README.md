# eslint-config-rc

1. 支持 `TypeScript` 和 `JavaScript` 
2. 自动格式化代码，无需手动
3. script 脚本支持 lint 和 lint-fix 两个命令

# 安装

### eslint 插件安装

```js
$ npm install eslint-config-rc eslint --save--dev 
```

### git-pre-hooks 安装

```js
$ npm install git-pre-hooks --save-dev
```

### eslint-formatter-pretty 插件安装（将eslint错误显示到终端）

```js
$ npm install eslint-formatter-pretty --save-dev
```

# 配置

### vscode settings.json 添加以下配置(保存会自动按照eslint格式化)

```jso
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
},
"eslint.format.enable": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "html",
    "typescript",
    "typescriptreact"
],
```

### package.json 添加以下配置（commit的时候触发检测钩子）

```json
"scripts": {
  "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
  "lint-fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix --cache"
},
"git-pre-hooks": {
  "pre-commit": "npm run lint"
}
```

### webpack 添加以下配置（注意loader放置顺序）

```js
// js使用
const eslintFormatterPretty = require('eslint-formatter-pretty');
rules: [{
  test: /\.(js|jsx|ts|tsx)$/,
  loader: 'eslint-loader',
  exclude: /(node_modules)/,
  include: path.resolve(__dirname, '../src'), // 精确指定要处理的目录
  options: {
    formatter: eslintFormatterPretty,
    emitError: true,
    failOnError: true
  }
}],
// ts使用
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
plugins: [
  new ForkTsCheckerWebpackPlugin({
    tsconfig: path.resolve(__dirname, '../tsconfig.json'),
    async: false,
    silent: true,
    eslint: true,
  }),
]
```

> 修改devServer overlay属性 不然eslint报错会阻塞代码编译.

```js
devServer: {
  overlay: false, // 不在浏览器页面上显示错误
}
```

# 使用

### JavaScript

- 根目录创建 `.eslintrc.js` 写入一下配置

```js
module.exports = {
  extends: 'eslint-config-rc',
};
```

- 根目录创建 `.eslintignore`

```js
/node_modules/ //忽略xxxx文件
```

### TypeScript

- 根目录创建 `.eslintrc.js` 写入一下配置

```js
module.exports = {
  extends: 'eslint-config-rc/typescript',
  parserOptions: {
    project: './tsconfig.json', // tsconfig配置看个人
  },
};
```

- 根目录创建 `.eslintignore`

```js
/node_modules/ // 忽略xxxx文件
```