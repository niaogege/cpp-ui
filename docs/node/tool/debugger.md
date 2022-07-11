---
title: debugger调试
order: 1
group:
  title: 工具
  order: 6
  path: /node/tool
nav:
  order: 1
  title: 'node'
  path: /node
---

> 狼叔说过，是否会使用 debugger 是区分一个程序员 nodejs 水平的重要标志。

面试官问： debugger 调试原理？应聘者：

啥原理？不懂

nodejs debugger 的原理:

js V8 引擎会启动 **debugger server**（websocket），等待客户端连接，我们可以通过各种 debugger client 连上来进行调试，比如 **chrome devtools**、**vscode debugger**，debugger server 和 debugger client 之间是通过 **v8 debugger protocol** 来通信的,

## chrome devtool

我们如果是启动 node.js 的调试模式，需要加上 **--inspect** 或者 **--inspect-brk**（在首行断住）参数，之后会启动一个 websocket server，等待客户端链接。

手动连接的话可以打开 **chrome://inspect** 页面，可以用 chrome devtools 的 debugger client 连上来调试。

Debugger listening on ws://127.0.0.1:9229/dfffef7b-2113-4943-8a88-7e8eb68111c3

在 chrome 地址栏输入 chrome://inspect，然后点击 configure 来配置目标端口：比如 9229

## Vscode debugger

vscode debugger 的使用主要是在 **.vscode/launch.json** 里面添加调试配置。

- launch：把 nodejs 代码跑起来，启动 debugger server，然后用 client 来连接
- attach：已经有了 debugger server，只需要启动一个 debugger client 连接上就行

```js
{
  "configurations": [
    {
      "name": "Auto Ubt 自动埋点",
      "program": "${workspaceFolder}/plugin/autoUbt/test.js",
      "request": "launch",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node"
    },
    {
      "name": "Change Function 改变函数入參",
      "program": "${workspaceFolder}/plugin/changeArguments/test.js",
      "request": "launch",
      "type": "node",
      "sourceMap": true,
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
    },
  ]
}
```

具体的配置项常用的有：

- **outFiles** 指定 sourcemap 的位置，用来调试 ts 源码等需要编译的代码
- stopOnEntry 在首行停住
- args 来指定一些命令行参数
- **runtimeExecutable** 当运行时不是 nodejs 的时候需要指定，比如 vscode 或者其他的一些运行时

## 参考

- [让你 nodejs 水平暴增的 debugger 技巧](https://juejin.cn/post/6981820158046109703#heading-1)