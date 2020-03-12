# iconfont

[![NPM version](https://img.shields.io/npm/v/iconfont.svg?style=flat)](https://npmjs.org/package/iconfont)
[![NPM downloads](http://img.shields.io/npm/dm/iconfont.svg?style=flat)](https://npmjs.org/package/iconfont)

在打包umi项目的时候,将iconfont.js打包到本地使用.

## Install

```bash
# or yarn
$ npm install
```

```bash
$ npm run build --watch
$ npm run start
```

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-iconfont', options],
  ],
}
```

## Options

``` js
{
    scriptSrc:'//at.alicdn.com/t/font_xxx_xxxx.js',
    fontPath:''
}
```

## Iconfont

同时提供了Iconfont组件

``` js
import Iconfont from 'umi-plugin-iconfont/lib/Iconfont';

<Iconfont type={'icon-shenhetongguo1'}/>
```


## LICENSE

MIT
