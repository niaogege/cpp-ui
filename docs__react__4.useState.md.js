(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[129],{"71GL":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),s=n("dEAq"),c=n("H1Ra"),o=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("p",null,"\u672c\u6587\u4e86\u89e3\u5230\u7684\u77e5\u8bc6"),l.a.createElement("ul",null,l.a.createElement("li",null,"useState \u540c\u6b65\u8fd8\u662f\u5f02\u6b65(18.0 \u7248\u672c\u4e4b\u524d\u8ddf\u4e4b\u540e)"),l.a.createElement("li",null,"useState \u4e2d\u7684\u95ed\u5305\u9677\u8fdb"),l.a.createElement("li",null,"useState \u4e2d\u7684\u6e90\u7801")),l.a.createElement("h2",{id:"usestate"},l.a.createElement(s["AnchorLink"],{to:"#usestate","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useState"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"state \u4f7f\u7528\u6d45\u6bd4\u8f83\u5bf9\u6bd4\u65b0\u65e7\u6570\u636e\u3002\u4e5f\u5c31\u610f\u5473\u7740\uff0c\u5f53 state \u4e3a\u5f15\u7528\u6570\u636e\u7c7b\u578b\u65f6\uff0c\u5982\u679c\u4f60\u7684\u65b0\u6570\u636e\u4e0e\u65e7\u6570\u636e\u5f15\u7528\u76f8\u540c\uff0c\u90a3\u4e48 React \u65e0\u6cd5\u611f\u77e5\u5230\u4f60\u7684\u6570\u636e\u53d1\u751f\u4e86\u53d8\u5316")),l.a.createElement("h2",{id:"usestate-\u5f02\u6b65\u8fd8\u662f\u540c\u6b65"},l.a.createElement(s["AnchorLink"],{to:"#usestate-\u5f02\u6b65\u8fd8\u662f\u540c\u6b65","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useState \u5f02\u6b65\u8fd8\u662f\u540c\u6b65"),l.a.createElement("p",null,l.a.createElement("strong",null,"\u7ed3\u8bba\uff1a")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728\u6b63\u5e38\u7684 react \u7684\u4e8b\u4ef6\u6d41\u91cc\uff08\u5982 onClick \u7b49\u5408\u6210\u4e8b\u4ef6\u548c\u94a9\u5b50\u51fd\u6570\uff09")),l.a.createElement("p",null,"setState \u548c useState \u662f\u5f02\u6b65\u6267\u884c\u7684\uff08\u4e0d\u4f1a\u7acb\u5373\u66f4\u65b0 state \u7684\u7ed3\u679c\uff09\u591a\u6b21\u6267\u884c setState \u548c useState\uff0c\u53ea\u4f1a\u8c03\u7528\u4e00\u6b21\u91cd\u65b0\u6e32\u67d3 render"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u4e0d\u540c\u7684\u662f\uff0csetState \u4f1a\u8fdb\u884c state \u7684\u5408\u5e76,\u591a\u6b21\u8c03\u7528\u4e00\u4e2a state\uff0csetState \u53ea\u4f1a\u5904\u7406\u6700\u540e\u4e00\u4e2a\uff0c\u800c useState \u5219\u4e0d\u4f1a\uff0cuseState \u4f1a\u9010\u4e2a\u8fdb\u884c\u5904\u7406\uff0c\u5f53\u7136\u6e32\u67d3\u90fd\u662f\u4e00\u6b21")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728 setTimeout\uff0cPromise.then \u7b49\u539f\u751f\u5f02\u6b65\u4e8b\u4ef6\u4e2d")),l.a.createElement("p",null,"setState \u548c useState \u662f\u540c\u6b65\u6267\u884c\u7684\uff08\u7acb\u5373\u66f4\u65b0 state \u7684\u7ed3\u679c\uff09\u591a\u6b21\u6267\u884c setState \u548c useState\uff0c\u6bcf\u4e00\u6b21\u7684\u6267\u884c setState \u548c useState\uff0c\u90fd\u4f1a\u8c03\u7528\u4e00\u6b21 render"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"state \u662f\u88ab\u76d1\u63a7\u7684\u6570\u636e\uff0c\u5b83\u4e0e UI \u7684\u53d8\u5316\u606f\u606f\u76f8\u5173\u3002\u5728\u5b9e\u8df5\u4e2d\uff0c\u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u7684\u6570\u636e\u4e0e UI \u53d8\u5316\u65e0\u5173\uff0c\u4ed6\u4eec\u4e0d\u5e94\u8be5\u653e\u5728 state \u4e2d\u6765\u7ba1\u7406\uff0c\u800c\u5e94\u8be5\u60f3\u5176\u4ed6\u529e\u6cd5\u3002")),l.a.createElement("p",null,"\u4f7f\u7528\u51fd\u6570\u521b\u5efa\u7ec4\u4ef6\u65f6\uff0c\u5185\u90e8\u6570\u636e state \u901a\u8fc7 useState \u5b9a\u4e49\u3002"),l.a.createElement(c["a"],{code:"function F() {\n  // \u5229\u7528\u6570\u7ec4\u7ed3\u6784\u5f97\u5230\u4e24\u4e2a\u53d8\u91cf\n  // count\uff1a\u8868\u793a\u5b9a\u4e49\u7684\u6570\u636e\n  // setCount\uff1a\u4fee\u6539\u8be5\u6570\u636e\u7684\u65b9\u6cd5\n  // useState\uff1a\u4ece\u95ed\u5305\u6570\u636e\u4e2d\u53d6\u51fa count \u7684\u503c\uff0c0 \u4ec5\u8868\u793a\u9ed8\u8ba4\u503c\n  const [A, setA] = useState(0);\n  return (\n    <>\n      <div> A: {A}</div>\n    </>\n  );\n}",lang:"js"}),l.a.createElement("h2",{id:"usestate-\u4e2d\u7684\u95ed\u5305\u9677\u9631"},l.a.createElement(s["AnchorLink"],{to:"#usestate-\u4e2d\u7684\u95ed\u5305\u9677\u9631","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useState \u4e2d\u7684\u95ed\u5305\u9677\u9631"),l.a.createElement("p",null,"\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\uff0c\u5982\u679c\u6211\u4eec\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u4f7f\u7528\u4e86 state \u7684\u503c\uff0c\u90a3\u4e48\u95ed\u5305\u5c31\u4f1a\u4ea7\u751f\u3002\u95ed\u5305\u5728\u51fd\u6570\u521b\u5efa\u65f6\u4ea7\u751f\uff0c\u4ed6\u4f1a\u7f13\u5b58\u521b\u5efa\u65f6\u7684 state \u7684\u503c\u3002"),l.a.createElement("p",null,"\u5728\u5f88\u591a\u6587\u7ae0\u4e2d\uff0c\u628a\u8fd9\u79cd\u73b0\u8c61\u79f0\u4e3a\u201c\u95ed\u5305\u9677\u9631\u201d\uff0c\u5b83\u662f\u4e00\u79cd\u6b63\u5e38\u73b0\u8c61\uff0c\u4f46\u662f\u5982\u679c\u4f60\u5728\u4f7f\u7528\u65f6\u65e0\u6cd5\u6b63\u786e\u8bc6\u522b\u5b83\uff0c\u90a3\u4e48\u4f1a\u7ed9\u4f60\u5e26\u6765\u9ebb\u70e6\u3002"),l.a.createElement(c["a"],{code:"export default () => {\n  const [count, setCount] = useState(1);\n  const [a, setA] = useState(1);\n  const handle = () => {\n    // \u95ed\u5305\u9677\u9631\n    setCount(count + 1); // \u4e00\u6b21\u6e32\u67d3\n    setCount(count + 1); // \u8ddf\u4e0a\u4e00\u884c\u4ee3\u7801\u4e00\u540c\u6e32\u67d3 \u5408\u5e76\u6e32\u67d3\u4e00\u6b21\n  };\n  console.log('render'); // \u6e32\u67d3\u4e00\u6b21\n  return (\n    <>\n      <div>Count: {count}</div>\n      <div>A: {a}</div>\n      <button onClick={handle}>\u9012\u589e</button>\n    </>\n  );\n};",lang:"js"}),l.a.createElement("p",null,"\u89e3\u51b3\u4e4b\u9053\uff1a"),l.a.createElement(c["a"],{code:"export default () => {\n  const [count, setCount] = useState(1);\n  const [a, setA] = useState(1);\n  const handle = () => {\n    /** \u6279\u5904\u7406 \u56de\u8c03\u51fd\u6570\u4e2d\u4e00\u6b21\u6e32\u67d3 18.0Before**/\n    setCount((count) => count + 1);\n    setCount((count) => count + 1);\n\n    /**\u4e24\u6b21\u6e32\u67d3 18.0Before**/\n    // setTimeout(() => {\n    //   setCount(count => count + 1); // \u4e00\u6b21\u6e32\u67d3\n    //   setCount(count => count + 1); // \u4e00\u6b21\u6e32\u67d3\n    // }, 0)\n  };\n  console.log('render'); // \u4f1a\u6e32\u67d31\u6b21\n  return (\n    <>\n      <div>Count: {count}</div>\n      <div>A: {a}</div>\n      <button onClick={handle}>\u9012\u589e</button>\n    </>\n  );\n};",lang:"js"}),l.a.createElement("h2",{id:"react180-\u4e2d\u7684\u81ea\u52a8\u6279\u5904\u7406-automatic-batching"},l.a.createElement(s["AnchorLink"],{to:"#react180-\u4e2d\u7684\u81ea\u52a8\u6279\u5904\u7406-automatic-batching","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"React18.0 \u4e2d\u7684\u81ea\u52a8\u6279\u5904\u7406 Automatic Batching"),l.a.createElement("p",null,"\u6279\u5904\u7406\u662f\u6307 react \u5c06\u591a\u4e2a\u72b6\u6001\u66f4\u65b0\uff0c\u805a\u5408\u5230\u4e00\u6b21\u6e32\u67d3 render \u6267\u884c\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd"),l.a.createElement(c["a"],{code:"class ClassIndex extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      a: 0,\n    };\n  }\n  handle = () => {\n    /**\u4e24\u6b21\u5408\u4e3a\u4e00\u6b21\u6e32\u67d3**/\n    this.setState({ a: this.state.a + 1 });\n    this.setState({ a: this.state.a + 1 });\n    // \u8fd9\u91cc\u8ddfuseState\u4e0d\u540c\uff0c\u540c\u6b65\u6267\u884c\u65f6useState\u4e5f\u4f1a\u5bf9state\u8fdb\u884c\u9010\u4e2a\u5904\u7406\uff0c\n    // \u800csetState\u5219\u53ea\u4f1a\u5904\u7406\u6700\u540e\u4e00\u6b21\n  };\n  handleWithPromise = () => {\n    // 2\u6b21\u6e32\u67d3 \u5206\u522b\u6253\u5370 1 2\n    Promise.resolve().then(() => {\n      this.setState({ a: this.state.a + 1 });\n      this.setState({ a: this.state.a + 1 });\n    });\n  };\n  render() {\n    const A = this.state.a;\n    return (\n      <div>\n        <h2>A: {A}</h2>\n        <button onClick={this.handle}>\u540c\u6b65\u6267\u884c\u9012\u589e</button>\n        <button onClick={this.handleWithPromise}>\u5f02\u6b65\u6267\u884c\u9012\u589e</button>\n      </div>\n    );\n  }\n}",lang:"js"}),l.a.createElement("p",null,"\u5728 React 18 \u4e2d\uff0c",l.a.createElement("strong",null,"\u6240\u6709\u7684\u72b6\u6001\u66f4\u65b0\uff0c\u90fd\u4f1a\u81ea\u52a8\u4f7f\u7528\u6279\u5904\u7406\uff0c\u4e0d\u5173\u5fc3\u573a\u666f"),"\u3002"),l.a.createElement(c["a"],{code:"handleWithPromise = () => {\n  // 18.0 \u65391\u6b21\u6e32\u67d3 \u76f4\u63a5\u6253\u53702 \u6279\u5904\u7406\n  Promise.resolve().then(() => {\n    this.setState({ a: this.state.a + 1 });\n    this.setState({ a: this.state.a + 1 });\n  });\n};",lang:"js"}),l.a.createElement("p",null,"\u5982\u679c\u4f60\u5728\u67d0\u79cd\u573a\u666f\u4e0b\u4e0d\u60f3\u4f7f\u7528\u6279\u5904\u7406\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",l.a.createElement("strong",null,"flushSync",l.a.createElement("r",null,"(fn: () => R): R"))," \u6765\u5f3a\u5236\u540c\u6b65\u6267\u884c\uff08\u6bd4\u5982\uff1a\u4f60\u9700\u8981\u5728\u72b6\u6001\u66f4\u65b0\u540e\uff0c\u7acb\u523b\u8bfb\u53d6\u65b0 DOM \u4e0a\u7684\u6570\u636e\u7b49\u3002\uff09\uff0cflushSync \u4f1a\u4ee5\u51fd\u6570\u4e3a\u4f5c\u7528\u57df\uff0c\u51fd\u6570\u5185\u90e8\u7684\u591a\u4e2a setState \u4ecd\u662f\u6279\u5904\u7406\uff0c\u9614\u4ee5\u66f4\u52a0\u7cbe\u51c6\u7684\u63a7\u5236\u54ea\u4e9b\u4e0d\u9700\u8981\u7684\u6279\u91cf\u66f4\u65b0"),l.a.createElement("p",null,"Demo1:"),l.a.createElement(c["a"],{code:"handleWithPromise = () => {\n  // 18.0 \u65391\u6b21\u6e32\u67d3 \u76f4\u63a5\u6253\u53702 \u6279\u5904\u7406\n  Promise.resolve().then(() => {\n    ReactDom.flushSync(() => {\n      this.setState({ a: this.state.a + 1 });\n    });\n    this.setState({ a: this.state.a + 1 });\n  });\n};",lang:"js"}),l.a.createElement("p",null,"Demo2:"),l.a.createElement(c["a"],{code:"function handleClick() {\n  flushSync(() => {\n    setCount(3);\n    setFlag(true);\n  });\n  // setCount \u548c setFlag \u4e3a\u6279\u91cf\u66f4\u65b0\uff0c\u7ed3\u675f\u540e\n  setLoading(false);\n  // \u6b64\u65b9\u6cd5\u4f1a\u89e6\u53d1\u4e24\u6b21 render\n}",lang:"js"}),l.a.createElement("p",null,"React 18 \u7684\u6279\u5904\u7406\u5728\u7edd\u5927\u90e8\u5206\u573a\u666f\u4e0b\u662f\u6ca1\u6709\u5f71\u54cd\uff0c\u4f46\u5728 Class \u7ec4\u4ef6\u4e2d\uff0c\u5982\u679c\u4f60\u5728\u4e24\u6b21 setState \u4e2d\u95f4\u8bfb\u53d6\u4e86 state \u503c\uff0c\u4f1a\u51fa\u73b0\u4e0d\u517c\u5bb9\u7684\u60c5\u51b5\uff0c\u5982\u4e0b\u793a\u4f8b\u3002"),l.a.createElement(c["a"],{code:"handleClick = () => {\n  setTimeout(() => {\n    this.setState(({ count }) => ({ count: count + 1 }));\n    // \u5728 React17 \u53ca\u4e4b\u524d\uff0c\u6253\u5370\u51fa\u6765\u662f { count: 1, flag: false }\n    // \u5728 React18\uff0c\u6253\u5370\u51fa\u6765\u662f { count: 0, flag: false }\n    console.log(this.state);\n    this.setState(({ flag }) => ({ flag: !flag }));\n  });\n};",lang:"js"}),l.a.createElement("p",null,"\u901a\u8fc7 ",l.a.createElement("strong",null,"flushSync")," \u6765\u4fee\u6b63\u5b83"),l.a.createElement(c["a"],{code:"handleClick = () => {\n  setTimeout(() => {\n    ReactDOM.flushSync(() => {\n      this.setState(({ count }) => ({ count: count + 1 }));\n    });\n    // \u5728 React18\uff0c\u6253\u5370\u51fa\u6765\u662f { count: 1, flag: false }\n    console.log(this.state);\n    this.setState(({ flag }) => ({ flag: !flag }));\n  });\n};",lang:"js"}),l.a.createElement("p",null,"But \u8bf7\u6ce8\u610f\u7684\u662f,\u4e0b\u9762\u8fd9\u79cd\u60c5\u51b5 React18.0 \u4f9d\u7136\u6e32\u67d3 2 \u6b21\uff0c\u53ea\u6709\u5728\u5f02\u6b65\u91cc\u7684\u591a\u4e2a setState \u624d\u4f1a\u6267\u884c\u6279\u5904\u7406"),l.a.createElement(c["a"],{code:"handleClick = () => {\n  setTimeout(() => {\n    ReactDOM.flushSync(() => {\n      this.setState(({ count }) => ({ count: count + 1 }));\n    });\n  }); // 1\u6b21\n  this.setState(({ flag }) => ({ flag: !flag })); // 1\u6b21\n};",lang:"js"}),l.a.createElement("h2",{id:"\u6e90\u7801"},l.a.createElement(s["AnchorLink"],{to:"#\u6e90\u7801","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6e90\u7801"),l.a.createElement("h2",{id:"usestate-\u5176\u4ed6"},l.a.createElement(s["AnchorLink"],{to:"#usestate-\u5176\u4ed6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useState \u5176\u4ed6"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s["Link"],{to:"https://react.docschina.org/docs/hooks-rules.html"},"\u4e3a\u4ec0\u4e48 useState \u4e0d\u80fd\u5728\u5224\u65ad\u8bed\u53e5\u4e2d\u58f0\u660e"))),l.a.createElement("h2",{id:"\u9762\u8bd5\u4e2d\u7684\u5176\u4ed6\u95ee\u9898"},l.a.createElement(s["AnchorLink"],{to:"#\u9762\u8bd5\u4e2d\u7684\u5176\u4ed6\u95ee\u9898","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9762\u8bd5\u4e2d\u7684\u5176\u4ed6\u95ee\u9898"),l.a.createElement(c["a"],{code:"class Example extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      val: 0,\n    };\n  }\n  componentDidMount() {\n    this.setState({ val: this.state.val + 1 });\n    console.log(this.state.val); // \u7b2c 1 \u6b21 log\n\n    this.setState({ val: this.state.val + 1 });\n    console.log(this.state.val); // \u7b2c 2 \u6b21 log\n\n    setTimeout(() => {\n      this.setState({ val: this.state.val + 1 });\n      console.log(this.state.val); // \u7b2c 3 \u6b21 log\n\n      this.setState({ val: this.state.val + 1 });\n      console.log(this.state.val); // \u7b2c 4 \u6b21 log\n    }, 0);\n  }\n  render() {\n    return null;\n  }\n}",lang:"js"}),l.a.createElement("h2",{id:"\u53c2\u8003\u6587\u6863"},l.a.createElement(s["AnchorLink"],{to:"#\u53c2\u8003\u6587\u6863","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003\u6587\u6863"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s["Link"],{to:"https://mp.weixin.qq.com/s/t3dYc3Md1dpiv1vaFa5plA"},"React18.0")),l.a.createElement("li",null,l.a.createElement(s["Link"],{to:"https://juejin.cn/post/6959885030063603743#heading-6"},"React useState \u548c setState \u5230\u5e95\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u5462\uff1f")),l.a.createElement("li",null,l.a.createElement(s["Link"],{to:"https://juejin.cn/post/6875115591154270221#heading-4"},"setState \u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65")),l.a.createElement("li",null,l.a.createElement(s["Link"],{to:"https://mp.weixin.qq.com/s/cYNRcKi1CFpFyLxPBGJmIA"},"React \u7cbe\u9ad3\uff1a\u6df1\u5165\u4e86\u89e3 useState")))))}));t["default"]=e=>{var t=l.a.useContext(s["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&s["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:n})}}}]);