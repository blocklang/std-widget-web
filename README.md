# std-widget-web

[![npm version](https://badge.fury.io/js/std-widget-web.svg)](https://badge.fury.io/js/std-widget-web)

UI 组件 web 版，是 BlockLang 标准库。

注意：**当前仅支持基于类的部件，不支持基于函数的部件**。

## Widgets

* [Page](./src/page/README.md)

## Build

本项目使用 dojo 的 `cli-build-widget` 命令构建。

```sh
dojo build widget --mode dist --target lib

# 或
npm run build:widget
```
