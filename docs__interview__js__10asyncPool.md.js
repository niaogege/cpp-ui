(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"zRJ/":function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),r=a.n(t),l=a("dEAq"),i=a("H1Ra"),o=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("p",null,"\u5e76\u53d1\u9650\u5236\uff0c\u770b\u4e86 N \u7bc7\u6587\u7ae0\uff0c\u611f\u89c9\u90fd\u6ca1\u8bf4\u6e05\u695a\u5e76\u53d1\u9650\u5236\u7684\u5177\u4f53\u4e1a\u52a1\u573a\u666f\u4ee5\u53ca\u5b9e\u73b0\u5e76\u53d1\u9650\u5236\u4e4b\u540e\u600e\u4e48\u5728\u5b9e\u8df5\u5f53\u4e2d\u8fd0\u7528\uff0c\u7ed3\u5408\u81ea\u5df1\u5b9e\u9645\u7f16\u7801\u8fc7\u7a0b\u4e2d\uff0c\u6211\u60f3\u9650\u5236\u5e76\u53d1\u8bf7\u6c42\u76ee\u524d\u6709\u8fd9\u51e0\u79cd\u4e1a\u52a1\u573a\u666f"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u540c\u4e00\u4e2a\u8bf7\u6c42\u65b9\u6cd5\uff0curl \u53c2\u6570\u4e0d\u540c\uff0c\u6bd4\u5982\u51e0\u5341\u5f20\u56fe\u7247\u540c\u65f6\u53bb\u8bf7\u6c42"),r.a.createElement("li",null,"\u4e0d\u540c\u7684\u8bf7\u6c42\u65b9\u5f0f\u4ee5\u53ca\u903b\u8f91\u5904\u7406\uff0c\u6bd4\u5982 p1,p2 \u8fd9\u79cd\uff0c\u5229\u7528 Promise.all(promises)\u5bb9\u6613\u5bfc\u81f4\u5e76\u53d1\u8bf4\u8d85\u8fc7\u6d4f\u89c8\u5668\u5e76\u53d1\u9650\u5236"),r.a.createElement("li",null,"\u8fd8\u6709\u4e00\u79cd\u5c31\u662f\u8bf7\u6c42\u5e76\u53d1\u9650\u5236\u4e4b\u540e\uff0c\u4e0d\u9700\u8981\u5904\u7406\u540e\u7eed\u8bf7\u6c42\u4e4b\u540e\u7684\u7ed3\u679c")),r.a.createElement("p",null,"\u5e76\u53d1\u9650\u5236 \u4e0d\u662f\u6307\u53d1\u5b8c\u4e24\u4e2a\u8bf7\u6c42\u5728\u7ee7\u7eed\u53d1\u540e\u9762\u4e24\u4e2a\u8bf7\u6c42\uff0c\u8fd9\u662f\u7406\u89e3\u4e0a\u7684\u504f\u5dee\u5e76\u53d1\u9650\u5236 2 \u4e2a\uff0c\u4e3b\u8981\u662f\u6307\u540c\u65f6\u6267\u884c\u7684\u4efb\u52a1\u4e2a\u6570\uff0c\u4e00\u5f00\u59cb\u786e\u5b9e\u662f\u540c\u65f6\u53d1 2 \u4e2a\u8bf7\u6c42\uff0c\u4f46\u662f\u8fd9\u4fe9\u8bf7\u6c42\u4e0d\u4e00\u5b9a\u80fd\u540c\u65f6\u8fd4\u56de\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u7acb\u9a6c\u8fd4\u56de\u4e86\uff0c\u6240\u4ee5\u8981\u6700\u5927\u9650\u5ea6\u5229\u7528\u5e76\u53d1\u7684\u80fd\u529b\uff0c\u4e00\u65e6\u6709\u4e00\u4e2a\u4efb\u52a1\u5b8c\u6210(Promise.race()) \u8fd9\u65f6\u5019\u7acb\u9a6c\u4ece\u5019\u8865\u4efb\u52a1\u5217\u8868\u91cc\u6dfb\u52a0\uff0c\u4e0d\u65ad\u5faa\u73af\u5f80\u590d\uff0c\u76f4\u5230\u6240\u6709\u7684\u8bf7\u6c42\u7ed3\u675f,\u6240\u6709\u8bf7\u6c42\u7ed3\u675f\u540e\u8fd4\u56de\u4e00\u4e2a Promise,"),r.a.createElement("h3",{id:"\u5b9e\u73b0\u65b9\u6848\u4e00es7-asyncawait--promiserace--promiseall"},r.a.createElement(l["AnchorLink"],{to:"#\u5b9e\u73b0\u65b9\u6848\u4e00es7-asyncawait--promiserace--promiseall","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0\u65b9\u6848\u4e00\uff1aES7 async/await + Promise.race() + Promise.all"),r.a.createElement("p",null,"\u8f93\u5165\uff1a"),r.a.createElement(i["a"],{code:"{\n  max: 3; // \u5e76\u53d1\u9650\u5236\u4e2a\u6570\n  arr: []; // url\u5217\u8868\n  cb: () => {}; // \u6267\u884c\u56de\u8c03\u51fd\u6570\n}",lang:"js"}),r.a.createElement("p",null,"\u8f93\u51fa\uff1a Promise.all \u4fdd\u5b58\u6240\u6709 resolve \u7ed3\u679c\u5b9e\u73b0\u8fc7\u7a0b"),r.a.createElement(i["a"],{code:"const asyncPool = async (max, arr, cb) => {\n  var ret = []; // \u5b58\u50a8\u6240\u6709\u7684\u5f02\u6b65\u4efb\u52a1\n  var executing = new Set(); //  \u6b63\u5728\u6267\u884c\u7684promise\u5f02\u6b65\u4efb\u52a1\n  for (let item of arr) {\n    var p = Promise.resolve().then(() => {\n      cb(item);\n    });\n    ret.push(p); // \u6536\u96c6resolve\u503c\u8fd4\u56de\u7ed9\u8c03\u7528\u65b9\n    executing.add(p);\n    const clean = () => {\n      executing.delete(p);\n    };\n    p.then(clean).catch(clean);\n    // \u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u5f02\u6b65\u4efb\u52a1\u5927\u4e8e\u7b49\u4e8e\u5e76\u53d1\u7684\u65f6\u5019\n    if (executing.size >= max) {\n      await Promise.race(executing); // \u8f83\u5feb\u7684\u4efb\u52a1\u5148\u6267\u884c\n    }\n  }\n  return Promise.all(ret);\n};\n// \u6d4b\u8bd5\u4e0b\nvar request1 = (n) => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve();\n      console.log(n);\n    }, n);\n  });\n};\nvar arr = [6000, 1000, 2000, 5000, 2000];\nconst dealPool = async () => {\n  var p1 = await asyncPool(2, arr, request1);\n};\ndealPool();",lang:"js"}),r.a.createElement("h4",{id:"\u7f3a\u70b9"},r.a.createElement(l["AnchorLink"],{to:"#\u7f3a\u70b9","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7f3a\u70b9"),r.a.createElement("p",null,"\u53ea\u80fd\u662f\u540c\u4e00\u4e2a\u8bf7\u6c42\u5f02\u6b65\u65b9\u6cd5\u88ab\u4f20\u5165\uff0c\u8fd9\u79cd\u573a\u666f\u5c31\u9650\u5236\u4e86\u53ea\u80fd\u662f\u53c2\u6570\u7684\u4e0d\u540c\uff0c\u5176\u4ed6\u90fd\u662f\u4e1a\u52a1\u903b\u8f91\u90fd\u662f\u4e00\u6837\u7684\uff0c\u5047\u8bbe\u6709 2 \u4e2a\u4e0d\u540c\u7684\u5f02\u6b65\u8bf7\u6c42\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5c31\u4e0d\u80fd\u5f88\u597d\u7684\u517c\u5bb9"),r.a.createElement("h3",{id:"es6-\u5b9e\u73b0\u65b9\u5f0f"},r.a.createElement(l["AnchorLink"],{to:"#es6-\u5b9e\u73b0\u65b9\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"es6 \u5b9e\u73b0\u65b9\u5f0f"),r.a.createElement(i["a"],{code:"var timeOut = (i) =>\n  new Promise((resolve, reject) =>\n    setTimeout(() => {\n      resolve(i);\n      console.log(i, 'CPP');\n    }, i),\n  );\nvar arr = [6000, 1000, 2000, 5000, 2000];\ndealPool2(2, arr, timeOut);\nfunction dealPool2(max, arr, fn) {\n  let len = arr.length;\n  let ret = [];\n  const executing = new Set();\n  let i = 0;\n  const enqueue = () => {\n    // \u5faa\u73af\u7ec8\u6b62\n    if (i === len) {\n      return Promise.resolve();\n    }\n    const item = arr[i++];\n    const p = Promise.resolve(item).then(() => fn.call(null, item));\n    ret.push(p);\n    executing.add(p);\n    const clean = () => {\n      executing.delete(p);\n    };\n    p.then(clean).catch(clean);\n    var r = Promise.resolve();\n    if (max <= executing.size) {\n      r = Promise.race(executing);\n    }\n    return r.then(() => enqueue());\n  };\n  return enqueue().then(() => Promise.all(ret));\n}",lang:"js"}),r.a.createElement("h3",{id:"es9-\u65b9\u5f0f"},r.a.createElement(l["AnchorLink"],{to:"#es9-\u65b9\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"es9 \u65b9\u5f0f"),r.a.createElement(i["a"],{code:"async function* asyncPool(concurrency, iterable, iteratorFn) {\n  const executing = new Set();\n  async function consume() {\n    const [promise, value] = await Promise.race(executing);\n    executing.delete(promise);\n    return value;\n  }\n  for (const item of iterable) {\n    // Wrap iteratorFn() in an async fn to ensure we get a promise.\n    // Then expose such promise, so it's possible to later reference and\n    // remove it from the executing pool.\n    const promise = (async () => await iteratorFn(item, iterable))().then((value) => [\n      promise,\n      value,\n    ]);\n    executing.add(promise);\n    if (executing.size >= concurrency) {\n      yield await consume();\n    }\n  }\n  // \u786e\u4fdd\u6240\u6709\u6b63\u5728\u6267\u884c\u7684\u5f02\u6b65\u4efb\u52a1\u90fdresolve\u8c03\n  while (executing.size) {\n    yield await consume();\n  }\n}\n// \u4f7f\u7528\nvar timeOut = (i) =>\n  new Promise((resolve, reject) =>\n    setTimeout(() => {\n      resolve(i);\n    }, i),\n  );\nvar arr = [1000, 1000, 3000, 3000, 2000, 4000];\nfor await (const value of asyncPool(2, arr, timeOut)) {\n  console.log(value, 'value-CPP');\n}",lang:"js"}),r.a.createElement("h3",{id:"\u53c2\u8003"},r.a.createElement(l["AnchorLink"],{to:"#\u53c2\u8003","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l["Link"],{to:"https://github.com/rxaviers/async-pool"},"async-pool")),r.a.createElement("li",null,r.a.createElement(l["Link"],{to:"https://mp.weixin.qq.com/s/yWOPoef9ixuSBWApZQhjIg"},"JavaScript \u4e2d\u5982\u4f55\u5b9e\u73b0\u5e76\u53d1\u63a7\u5236\uff1f"))),r.a.createElement("h3",{id:"\u5176\u4ed6\u8bf7\u6c42\u65b9\u5f0f"},r.a.createElement(l["AnchorLink"],{to:"#\u5176\u4ed6\u8bf7\u6c42\u65b9\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ed6\u8bf7\u6c42\u65b9\u5f0f"),r.a.createElement(i["a"],{code:"function dealLimitQuest(urls, max, cb) {\n  const len = urls.length;\n  const queue = [];\n  const res = []; // \u5b58\u50a8\u7ed3\u679c\n  let i = 0;\n  const handleRequest = (url) => {\n    const req = fetch(url).then((res) => {\n      let length = res.push(res);\n      if (length < len && i + 1 < len) {\n        queue.shift();\n        handleRequest(urls[++i]);\n      } else {\n        if (typeof cb === 'function') {\n          cb(res);\n        }\n      }\n    });\n    if (res.push(req) < max) {\n      handleRequest(urls[++i]);\n    }\n  };\n  handleRequest(urls[++i]);\n}\nconst fetch = (url) =>\n  new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('123');\n    }, 2000);\n  });",lang:"js"})))}));n["default"]=e=>{var n=r.a.useContext(l["context"]),a=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:a})}}}]);