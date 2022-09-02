---
title: 前端设计模式
order: 6
group:
  order: 1
  title: js Basic
  path: /interview/js
nav:
  order: 3
  title: 'interview'
  path: /interview
---

## 访问者模式

visitor 模式（访问者模式）是 23 种经典设计模式中的一种。当被操作的对象结构比较稳定，而操作对象的逻辑经常变化的时候，通过分离逻辑和对象结构，使得他们能独立扩展。这就是 visitor 模式的思想。

特点：

- 操作对象的**结构稳定**
- 操作对象的**逻辑频繁变化**

意图：表示一个作用于某对象结构中的各元素的操作。它使你可以在**不改变各元素的类**的前提下定义作用于这些元素的新操作。

假设你用了访问者模式，会发现，每天因为迭代而新增的那几个方法，都会放到一个新 Visitor 文件下，比如一种纳米材料的门板在游戏 V1.5 版本被引进，它对材料的使用会体现在新增一个 Visitor 文件，资源本身的类不会被修改，这既不会引发协同问题，也使功能代码按照场景聚合，不论维护还是删除的心智负担都非常小。

访问者模式背后的思考本质还是，**基础的元素数量一般不会随着程序迭代产生太大变化，而对这些基础元素的使用方式或组合使用会随着程序迭代不断更新，我们将变化更快的通过 Visitor 打包提取出来，自然会更利于维护**。

使用场景：类结构很少发生改变，但是操作对象的逻辑经常发生变化

### babel 的 Visitor

对应到 **babel traverse** 的实现，就是 AST 和 visitor 分离，在 traverse（遍历）AST 的时候，调用注册的 **visitor** 来对其进行处理。

访问者模式其实是在把**对象结构**和**操作逻辑**分开，使得两者可以独立拓展。对应到 babel traverse 阶段的实现，就是将遍历 AST 和操作节点两部分逻辑分离，**在 traverse AST 的时候，调用注册的 visitor 来对其进行处理**。这样使得 AST 的结构和遍历算法固定，visitor 可以通过插件独立扩展。

babel 在遍历 AST 树的时候，处理一个节点时，是以访问者的形式获取节点信息，并进行相关操作，这种方式是通过一个 visitor 对象来完成的，在 visitor 对象中定义了对于各种节点的访问函数，这样就可以针对不同的节点做出不同的处理。我们编写的 Babel 插件其实也是通过定义一个实例化 visitor 对象处理一系列的 AST 节点来完成我们对代码的修改操作。

### 代码实现

## 观察者模式

观察者模式包含两种角色：

观察者（订阅者，我自己）被观察者（发布者，订阅号的主题，比如喜欢看的订阅号 code 秘密花园）

核心思想：订阅者只要订阅了发布者的事件，那么当发布者的状态改变时，发布者会主动去通知观察者，而无需关心订阅者得到事件后要去做什么，实际程序中可能是**执行订阅者中的回调函数**。

### 特点

- 支持简单的广播通信，当对象状态发生改变时，会自动通知已经订阅过的对象。
- 解耦, 发布者与订阅者耦合性降低，发布者只管发布一条消息出去，它不关心这条消息如何被订阅者使用，同时，订阅者只监听发布者的**事件名**，只要发布者的事件名不变，它不管发布者如何改变缺点：创建订阅者本身要**消耗一定的时间和内存**，订阅的处理函数不一定会被执行，驻留内存有性能开销，弱化了对象之间的联系，复杂的情况下可能会导致程序难以跟踪维护和理解(如果过多的使用发布订阅模式, 会增加维护的难度)

### 应用场景

- js 事件就是经典的发布-订阅模式的实现

```js
// 我们向某dom文档订阅了点击事件，当点击发生时，他会执行我们传入的callback
element.addEventListener(‘click’, callback2, false)
element.addEventListener(‘click’, callback2, false)
```

## 订阅发布

## 代理模式

## 单例模式

## 迭代模式

## 工厂模式

## 组合模式

## 装饰者模式

[如何理解装饰器的作用](https://mp.weixin.qq.com/s/FTtobh-wGylG1TQAkng8uw)

## 参考

- [了不起的 IoC 与 DI](https://mp.weixin.qq.com/s/fVwGIP3vJXqoQX9jK6NAVw)
- [黄子毅的技术博客](https://github.com/ascoders/weekly/tree/master/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F)