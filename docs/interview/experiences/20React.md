---
title: React 面试相关汇总
order: 20
group:
  order: 0
  title: interview
nav:
  order: 3
  title: 'interview'
  path: /interview
---

react 在面试中举足轻重，列举几个有代表性的问题，背一背. 参考文档

- [前端面试通关宝典：解析 44 道 React 测试题（上）](https://mp.weixin.qq.com/s/0EtJvTTZJFYZJOPDxLiAbw)
- [前端面试通关宝典：解析 44 道 React 测试题（下）](https://mp.weixin.qq.com/s/H8TrhzBQpjJbz6A2oJ14UA)

列表如下

- 0.fiber
- 1.你常用的 hooks 有哪些
- 2.虚拟 DOM 是什么?
- 3.受控组件与非受控组件之间有何区别？
- 4.基于类的 React 组件，与函数式 React 组件之间有何区别?
- 5.类组件生命周期的各个阶段
- 6.Redux 中的 reducer 是什么，它会用到哪些参数？
- 7. Redux 实现的是哪种模式?以及 Mobx 实现的是哪种模式。两者之间有什么区别？
- 8.什么是 JSX?
- 9.userMemo 的用途是什么？它是如何起效的?

## 0.fiber

### 总结

fiber 是 react16 中引入的一种新的协调算法。v16 之前，react 使用的是名为 Stack Reconciler 的旧调和算法，Stack Reconciler 核心是递归遍历组件树，把数据保存在递归调用栈中，使用 DFS。递归遍历组件问题：a.阻塞主线程 b.调度没有优先级之分

为了解决上面 2 个问题，react16 引入了 fiber Reconciler，Fiber 的一个关键优点：能够处理异步渲染，这意味着 react 阔以在事件发生时**暂停和恢复渲染过程**，例如用户输入或网络请求，而不会阻塞主线程。

### 面试版，什么 fiber

1.从架构角度看，是 react 对调和算法的重写。v16 之前，react 使用的是名为 Stack Reconciler 的旧调和算法，V16 之后改成 fiber Reconciler，实现虚拟 DOM 增量渲染,让 react 在更新过程变得可控(适时让出 CPU 执行权，将控制器交给浏览器，让位给高优先级任务，等浏览器空闲也就是 idleCallback 时在恢复渲染)

2.从编码角度看，fiber 是一种数据结构，是 Fiber 树结构的节点单位，也就是 React 16 新架构下的"虚拟 DOM"。一个 fiber 就是一个 JavaScript 对象，包含 child/return/sibling 等属性

### React Fiber 是如何实现更新过程可控？

1.任务拆分在 React Fiber 机制中，它采用"化整为零"的思想，将调和阶段（Reconciler）递归遍历 VDOM 这个大任务分成若干小任务，每个任务只负责一个节点的处理。

2.任务具备优先级 React Fiber 除了通过挂起，恢复和终止来控制更新外，还给每个任务分配了优先级。具体点就是在创建或者更新 FiberNode 的时候，通过算法给每个任务分配一个到期时间（**expirationTime**）。在每个任务执行的时候除了判断剩余时间，如果当前处理节点已经过期，那么无论现在是否有空闲时间都必须执行该任务。过期时间的大小还代表着任务的优先级

### from https://yiyan.baidu.com/

React Fiber 是 React v16 开始引入的一个新的协调引擎，用于实现 Virtual DOM 的增量渲染,

在 React 决定要加载或更新一颗组件树之前，会大致做出如下一系列动作：调用各组件的生命周期函数 --> 计算和对比 Virtual DOM --> 更新真实的 DOM 树。 这个过程是同步的，也就是说，一旦这个过程开始，它就会一鼓作气跑完，一直到真实 DOM 树更新完毕。 在这期间，假如用户在一个输入框敲了几个字，页面上也不会有任何反应，因为渲染按键输入结果也需要主线程来做，然而此时主线程正忙着更新组件树呢。 等到 300ms 结束了，浏览器主线程有空了，才把刚刚敲的那几个字渲染到 input 输入框内。 太卡了，真的。 输入了却没有响应，或者说响应来的很慢，也就是我们常常说的“卡顿”。

React Fiber 架构的引入解决了这个问题。通过 Fiber 可以把一些渲染任务进行拆分，均匀到每一帧里面去执行，实现增量渲染。同时，Fiber 还支持暂停、终止、复用渲染任务，以及不同更新的优先级。高优先级的任务比如键盘输入事件、点击事件等会优先执行，以保证用户交互的及时性。低优先级的任务如**网络请求**则会稍后执行。此外，React Fiber 还提供了并发模式，可以暂停高消耗非紧急的组件的渲染，并聚焦再更加紧迫的任务中，如 UI 渲染始终保持应用和响应,避免白屏卡顿等现象 。

总之，React Fiber 架构的引入为 React 应用程序的**性能和交互体验**带来了重大改进。它通过增量渲染、优先级处理、并发能力等技术手段，提高了 React 应用程序的响应速度和用户体验

## 1.你常用的 hooks 有哪些

useState: 用于管理函数组件中的状态。

useEffect: 用于在函数组件中执行 side effects，例如获取数据或订阅事件。

useContext: 用于访问函数组件当中 React 上下文的值。

useRef: 当该需要持久化的数据不会跟 UI 变化产生关系时，我们就需要用到 useRef。useRef 是一个返回**可变引用对象**的函数。该对象 **.current** 属性的初始值为 useRef 传入的参数 initialValue，**返回的对象将在组件整个生命周期中持续存在**。

> 返回可变引用对象的函数

useCallback: 用于记忆函数，以防止不必要的重新渲染。

useMemo: 用于记忆值，即将成本高昂的计算结果缓存起来以提高性能。

useReducer: 负责使用 reducer 函数管理状态，原理类似于 Redux。

useLayoutEffect: 与 useEffect 类似，但效果会在所有 DOM 更改之后再*同步运行*。

这些 hooks 提供强大的工具，可用于管理状态、处理 side effects 和重用 React 函数组件当中的逻辑。

## 2. 虚拟 DOM 是什么?

虚拟 DOM 是 React 中提出的概念，用于为实际 DOM（文档对象模型）创建一个轻量化虚拟表示，并将其存储在内存当中。这是一种用于优化 Web 应用程序性能的编程技术。

当 React 组件的数据或状态发生变更时，虚拟 DOM 也会随之更新，而非直接操作实际 DOM。此后，虚拟 DOM 计算组件先前状态与更新状态之间差异的过程，被称为“diffing”。

一旦发现存在差异，React 将仅更新实际 DOM 当中的必要部分，借此高效反映变更内容。这种方式最大限度减少了实际 DOM 上的操作数量，进而提高了应用程序的整体性能。

通过使用虚拟 DOM，React 在提供交互式用户界面创建方法的同时，也保证应用程序始终拥有最佳效率和渲染速度。

### 更新流程

- 真实的 DOM 首先会映射为虚拟 DOM；

- 当虚拟 DOM 发生变化后，就会根据差距计算生成 patch 补丁，这个 patch 是一个结构化的数据，内容包含了增加、更新、移除等；

- 根据 patch 去更新真实的 DOM，反馈到用户的界面上

### [diff 策略](https://fe.ecool.fun/topic/212673c7-7ea1-460a-b44f-2e3fe20f3397?orderBy=updateTime&order=desc&titleKey=diff)

- 同一层级的子节点，可以通过标记 **key** 的方式进行列表对比。（基于节点进行对比）
- 如果组件的 类型 一致，则默认为**相似的树结构**，否则默认为不同的树结构。（基于组件进行对比）
- 忽略节点跨层级操作场景，提升比对效率。（基于树进行对比）

### React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的

Keys 是 React 用于**追踪哪些列表中元素被修改、被添加或者被移除的辅助标识**。在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。

在 React Diff 算法中 React 会借助元素的 Key 值来判断该元素是**新近创建的还是被移动**而来的元素，从而减少不必要的元素重复渲染。此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系。

### react 与 vue 的 diff 算法比对

diff 算法是指生成更新补丁的方式，主要应用于虚拟 DOM 树变化后，更新真实 DOM。所以 diff 算法一定存在这样一个过程：**触发更新** → **生成补丁** → **应用补丁**。

## 3.受控组件与非受控组件之间有何区别？

受控组件与非受控组件之间的最大区别，在于如何**管理和更新自身状态**。

受控组件的状态由 React 负责控制，该组件接受其当前值并通过 props 进行更新。当值发生改变时，它会触发回调函数，也就是说该组件不会存储自己的内部状态。相反，由父组件管理该值并将其传递给受控组件。

```js
import { useState } from 'react';
function App() {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3>Controlled Component</h3>
      <input name="name" value={name} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => console.log(value)}>Get Value</button>
    </div>
  );
}
```

另一方面，非受控组件则使用 **refs** 或其他方法在内部管理自身状态。这类组件独立存储并更新其状态，不依赖于 props 或回调。父组件对非受控组件的状态控制能力较弱。

```js
import { useRef } from 'react';
function App() {
  const inputRef = useRef(null);
  return (
    <div className="App">
      <h3>Uncontrolled Component</h3>
      <input type="text" name="name" ref={inputRef} />
      <button onClick={() => console.log(inputRef.current.value)}>Get Value</button>
    </div>
  );
}
```

## 4.基于类的 React 组件，与函数式 React 组件之间有何区别?

基于类的组件和函数组件之间的主要区别，在于二者的**定义方式和所用语法**不同。

基于类的组件被定义为 ES6 类，属于 **React.Component** 类的扩展。它们使用 render 方法返回定义组件输出的 JSX（JavaScript XML）。类组件可以通过 this.state 和 **this.setState()** 访问其生命周期方法和状态管理。

```js
class App extends React.Component {
  state = {
    value: 0,
  };
  handleAgeChange = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  render() {
    return (
      <>
        <p>Value is {this.state.value}</p>
        <button onClick={this.handleAgeChange}>Increment value</button>
      </>
    );
  }
}
```

另一方面，函数组件被定义为简单的 JavaScript 函数。它们**接受 props 作为参数并直接返回 JSX**。函数组件无权访问生命周期方法或者状态。但随着 React 16.8 中 React hooks 机制的出现，函数组件现在也可以管理状态并使用其他功能，例如上下文和效果。

```js
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState(0);
  const handleAgeChange = () => {
    setValue(value + 1);
  };
  return (
    <>
      <p>Value is {value}</p>
      <button onClick={handleAgeChange}>Increment value</button>
    </>
  );
};
```

## 5.类组件生命周期的各个阶段

生命周期方法，属于一种钩入组件生命周期各个阶段的方法，允许开发者在特定时间执行特定的代码。

以下是几种主要生命周期方法：

constructor: 这也是创建组件时调用的第一个方法，用于初始化状态并绑定事件处理程序。在函数组件中，我们可以使用 useState hook 来实现类似的效果。

render: 此方法负责渲染 JSX 标记，并返回要在屏幕上显示的内容。

componentDidMount: 此方法将在组件于 DOM 中渲染后被立即调用，通常用于初始化任务，例如 API 调用或设置事件侦听器。

componentDidUpdate: 此方法会在组件的 props 或 state 发生变更时被调用，允许开发者执行 side effects、根据变更更新组件或者触发其他 API 调用。

componentWillUnmount: 此方法会在组件从 DOM 中删除之前被调用，用于清理 conponentDidMount 中设置的一切资源，例如删除事件侦听器或取消计时器。

某些生命周期方法（例如 componentWillMount、componentWillReceiveProps 和 componentWillUpdate）现已被弃用，或者被其他方法或 hooks 所替代。

至于“this”方法，是指类组件的当前实例。我们可以用它访问组件内的属性和方法。在函数组件中不需要使用“this”，因为函数不会绑定至特定实例。

## 6.Redux 中的 reducer 是什么，它会用到哪些参数？

Reducer 属于纯函数，并将**状态和操作**作为参数。在 reducer 内部，我们会跟踪接收到的 action 类型，再根据它修改状态并返回一个**新的状态对象**。

```js
export default function appReducer(state = init, action) {
  switch (action.type) {
    case '11':
      break;
    default:
      return state;
    // 如果此reducer无法识别action类型
    // 或者此action不重要，则直接返回现有状态
  }
}
```

## 7. Redux 实现的是哪种模式?以及 Mobx 实现的是哪种模式。两者之间有什么区别？

Redux 实现的是 Flux 模式，即应用程序的**可预测状态管理**模式。它通过引入**单向数据流**与应用程序状态的集中存储机制，帮助管理应用程序状态。

Mobx 实现的是 Observer 模式，也被称为**发布 - 订阅**模式。

Redux 是一种更简单也更严格的状态管理库，要求遵循单向数据流和不变性原则。它需要用到更多的样板代码和显式更新，但与 React 的集成效果非常出色。另一方面，Mobx 则提供更加灵活、直观的 API，而且样板代码也更少。它允许开发者直接修改状态并自动跟踪变更，借此获得更好的应用程序性能。具体选择 Redux 还是 Mobx，要视实际需求和开发偏好而定。

## 8.什么是 JSX?

默认情况下，可以使用以下语法在 React 中创建元素：

```js
var someElement = React.createElement('div', { className: 'cpp' }, 'This is Value');
```

但我们在实际开发中，往往更习惯用以下形式：

```js
var someElement = () => {
  return <div className="cpp">This is Value</div>;
};
```

这就是所谓 JSX，是一种用于简化代码理解和开发表达的语言扩展。

## 9.userMemo 的用途是什么？它是如何起效的?

useMemo 用于缓存和记忆计算结果。

传递创建函数和依赖项数组。只有当任意依赖项的值发生变更时，useMemo 才会重新计算记忆值。这种优化方式能**避免每次渲染都引发昂贵的计算过程**。

使用首个参数，该函数将接受执行计算的回调；使用第二个依赖项数组，则仅当至少一个依赖项发生更改时，该函数才会重新执行计算。

```js
const memoValue = useMemo(() => computeFunc(paramA, paramB), [paramA, paramB]);
```

## 10.useMemo 和 useCallback 之间有什么区别?

useCallback hook 将返回回调的一个记忆版本，且仅当依赖项之一的值发生更改时该版本才会随之更改。其主要作用，就是在将回调传递给依赖于链接等效性的子组件时，避免触发不必要的渲染。

```js
const callbackValue = useCallback(() => computeFunc(paramA, paramB), [paramA, paramB]);
```

两者区别

- useMemo 用于记忆计算结果，而 useCallback 用于记忆函数本体。
- useMemo 缓存的是计算值，如果依赖项未更改，则在后续渲染时直接返回该值
- useCallback 缓存的是函数，只要依赖项未发生更改，则直接返回同一函数体

## 11.React Context 是什么?

React Context 是一项功能，提供一种通过组件树传递数据的方法，避免在每个层次上手动传递 props。它允许我们创建一个全局状态，树中的任何组件无论位置如何、均可以访问该状态。当我们需要在未通过 props 直接连接的多个组件之间共享数据时，就可以使用 Context。

React Context API 包含以下三个主要部分：

- createContext: 此函数用于创建一个新的 context 上下文对象。

- Context.Provider: 此组件用于向 context 提供值，其中打包有需要访问该值的组件。

- Context.Consumer 或 useContext hook: 此组件或 hook 负责使用 context 中的值。它可以在上下文提供方内的任意组件中使用。

通过使用 React Context，我们可以避免 prop 钻取（即在多个层次的组件间传递项目）并轻松管理更高级别的状态，保证代码更具组织性的执行效率。

```js
// 1. create context
import { createContext } from 'react';
export const LevelContext = createContext(1);

// 2.use context
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  // ...
}

// 3.provide this context 提供上下文
import { LevelContext } from './LevelContext.js';

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
```

> [useContext](https://react.dev/learn/passing-data-deeply-with-context)

## 12. useContext 的用途是什么，它是如何起效的?

在典型的 React 应用程序当中，数据使用 props 以自上而下（从父组件到子组件）的方式传递。但是，这样的方式对于某些特定类型的 props（例如选定的语言、UI 主题）来说可能过于繁琐，因为需要将其传递给应用程序中的多个组件。Context 上下文提供一种在组件之间共享此类数据的方法，而无需通过树结构中的各个层次显式传递 props。

当 context 的值改变时，调用 useContext 的组件也将随之进行重新渲染。如果重新渲染组件的成本很高，这里可以使用记忆机制进行优化。

## 13.useRef 的用途是什么，它是如何起效的?

useRef 返回一个可修改的 ref 对象，即一个属性。其中的当前值由传递的参数进行初始化。返回的对象将在组件的整个生命周期之内持续存在，且不会因渲染而发生改变。

其常见用法是以命令的形式访问后代，例如使用 ref，我们可以显式引用 DOM 元素。

```js
const App = () => {
  const inputRef = useRef(null);
  const buttonClick = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={buttonClick}>Focus on input tag</button>
    </>
  );
};
```

> forwardref

```js
const inputRef = useRef(null);
return <MyInput ref={inputRef} />;
```

> Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()? 会得到上面的报错

By default, your own components don’t expose refs to the DOM nodes inside them.

To fix this, find the component that you want to get a ref to:

```js
import { forwardRef } from 'react';
const MyInput = forwardRef(({ value, onChange }, ref) => {
  return <input value={value} onChange={onChange} ref={ref} />;
});

export default MyInput;
```

## 14.你了解 Next.js 中的哪些主要函数?

1.getStaticProps: 此方法用于在构建过程中获取数据，并将页面**预渲染为静态 HTML**。它能确保构建时的数据可用性，且不会因后续请求而发生更改。(SSG)

```js
export const getStaticProps = async ({ params: { slug } }) => {
  const currentPage = +slug;
  const post = await getAllPosts({});
  const totalPages = Math.ceil(post.length / PAGE);
  return {
    props: {
      post: post.slice((currentPage - 1) * PAGE, currentPage * PAGE),
    },
  };
};
```

2. getServerSideProps: 此方法用于根据每个请求获取数据，并在服务器端预渲染页面。如果需要获取经常更改、或者仅供特定用户使用的数据，则可以使用此方法。(SSR)
3. getStaticPaths: 此方法用于在动态路由当中，指定需要在构建时预渲染的路径列表，常用于获取带有参数的动态路由数据。

```js
export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags();
  const paths = Object.keys(tags).map((e) => {
    return {
      params: {
        slug: e,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
```

## 15.如何在 Redux Thunk 中处理异步操作??

> 还是没有理解这个中间件干嘛用的

要使用 Redux Thunk，我们需要将其作为中间件导入。操作创建者不仅需要返回一个对象，还应返回一个以 dispatch 调度为参数的函数。如何使用 Redux Thunk？

## 16.自定义的 hooks 有哪些

```js
// useEvent
// useFetch
// useEventListener
// useDebounce
// useRerender
// useWindowsize
import { useCallback, useRef, useLayoutEffect } from 'react';
// 保持引用
function useEvent(cb) {
  var ref = useRef();
  useLayoutEffect(() => {
    ref.current = cb;
  }, []);
  return useCallback((...arg) => {
    ref.current && ref.current(...arg);
  }, []);
}
// 是否首次渲染
function useRerender() {
  var ref = useRef(false);
  useEffect(() => {
    ref.current = true;
  }, []);
  return ref.current;
}
```