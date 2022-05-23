![RNG](rng.jpg "ROYAL NEVER GIVE UP")

# 必看！！！🧨🧨🧨

## 1、安装 [git](https://git-scm.com/)

1. [安装 Git](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)

2. [配置 Git](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%88%9D%E6%AC%A1%E8%BF%90%E8%A1%8C-Git-%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE)

   1. 需要额外配置一下 `git config --global core.autocrlf false` ，解决 endOfLine 在不同操作系统下的统一问题

3. [git clone 仓库](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E8%8E%B7%E5%8F%96-Git-%E4%BB%93%E5%BA%93)
   1. 仓库地址 `https://github.com/yxb94616/frontend-project.git`

## 2、安装 [nodejs](https://nodejs.org/)

1. 选择 `LTS` 版本下载并安装 nodejs

2. 在终端验证安装成功与否，成功输出版本号即安装成功

```sh
node -v
npm -v
```

3. 国内的话，建议切换 npm 源为 [淘宝源](https://npmmirror.com/)

```sh
npm config set registry https://registry.npmmirror.com
```

## 3、安装 [pnpm](https://github.com/pnpm/pnpm)

1. pnpm 是什么，为什么要用 pnpm，[了解 pnpm](https://zhuanlan.zhihu.com/p/404784010)

2. [了解基本使用](https://juejin.cn/post/7037480024106074148)

3. 安装 pnpm

```sh
npm install -g pnpm
```

4. 在终端验证安装成功与否，成功输出版本号即安装成功

```
pnpm -v
```

## 安装 [VsCode](https://code.visualstudio.com/)

1. 使用 vscode 打开项目目录
2. 使用 vscode 终端 或者系统自带终端进行操作
3. 安装完项目依赖后，建议配置默认使用 `prettier` 格式化代码

```json
{
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

#### 启动开发

```sh
pnpm run dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
pnpm run prettier
```
