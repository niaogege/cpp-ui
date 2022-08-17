(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{SQps:function(e,n,r){"use strict";r.r(n);var a=r("q1tI"),t=r.n(a),o=r("dEAq"),l=r("H1Ra"),c=t.a.memo((e=>{e.demos;return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("p",null,"\u9762\u8bd5\u5b98\u95ee\uff1a \u5b9e\u73b0\u4e00\u4e2a node \u5f02\u6b65\u51fd\u6570\u7684 ",t.a.createElement("strong",null,"promisify")),t.a.createElement("p",null,"promisify \u4f5c\u7528\u662f\u628a\u56de\u8c03\u51fd\u6570\u8f6c\u6210 promise \u5f62\u5f0f\uff1f\u5373\u8c03\u7528\u8be5\u56de\u8c03\u51fd\u6570\u7684\u65f6\u5019\u6709 2 \u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u662f\u9519\u8bef\u4fe1\u606f\uff0c\u5176\u6b21\u624d\u662f\u771f\u6b63\u8981\u8fd4\u56de\u7684\u5185\u5bb9\uff0cPromisify \u5c31\u662f\u628a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u8f6c\u5316\u4e3a promise"),t.a.createElement("blockquote",null,t.a.createElement("p",null,"\u6ca1\u592a\u7406\u89e3\uff0c\u5177\u4f53\u4e1a\u52a1\u573a\u666f\u662f\u5565 0520 \u770b\u4e0b\u793a\u4f8b\u5c31\u660e\u767d\u4e86\u82e5\u5ddd\u5927\u4f6c\u7684\u6587\u7ae0\u5f88\u597d\u7406\u89e3 \u6d45\u663e\u6613\u61c2 0528")),t.a.createElement("h3",{id:"\u629b\u7816"},t.a.createElement(o["AnchorLink"],{to:"#\u629b\u7816","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u629b\u7816"),t.a.createElement(l["a"],{code:"// \u8f93\u5165\uff1a\n// \u539f\u6709\u7684callback\u8c03\u7528\nfs.readFile('test.js', function (err, data) {\n  if (!err) {\n    console.log(data);\n  } else {\n    console.log(err);\n  }\n});\n// \u8f93\u51fa\uff1a\n// promisify\u540e\nvar readFileAsync = promisify(fs.readFile);\nreadFileAsync('test.js').then(\n  (data) => {\n    console.log(data);\n  },\n  (err) => {\n    console.log(err);\n  },\n);",lang:"js"}),t.a.createElement("h2",{id:"\u5f15\u7389-\u624b\u5199-promisify"},t.a.createElement(o["AnchorLink"],{to:"#\u5f15\u7389-\u624b\u5199-promisify","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5f15\u7389 \u624b\u5199 promisify"),t.a.createElement("p",null,"\u624b\u5199\u4e4b\u524d\u5199\u770b\u4e00\u4e2a\u5b9e\u9645\u6848\u4f8b\uff0c(\u90fd\u662f\u6458\u6284\u82e5\u5ddd\u5927\u4f6c\u7684\u6587\u7ae0) \u6211\u4eec\u77e5\u9053 Node.js \u5929\u751f\u5f02\u6b65\uff0c\u4ee5\u9519\u8bef\u56de\u8c03\u7684\u5f62\u5f0f\u4e66\u5199\u4ee3\u7801\u3002\u56de\u8c03\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u9519\u8bef\u4fe1\u606f\u3002\u4e5f\u5c31\u662f\u9519\u8bef\u4f18\u5148\u3002"),t.a.createElement("h2",{id:"\u5b9e\u9645\u573a\u666f"},t.a.createElement(o["AnchorLink"],{to:"#\u5b9e\u9645\u573a\u666f","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u9645\u573a\u666f"),t.a.createElement("p",null,"\u6709\u4e2a\u52a0\u8f7d\u56fe\u7247\u8d44\u6e90\u7684\u573a\u666f"),t.a.createElement(l["a"],{code:"var imgSrc = 'http://xx/jpg';\nfunction loadImg(src, cb) {\n  console.log(process, 'PROCESS');\n  if (process !== undefined) return;\n  const img = document.createElement('img');\n  img.src = src;\n  img.onload = () => cb(null, img);\n  img.onerror = () => {\n    cb('img error');\n  };\n  document.appendChild(img);\n}\n// \u8c03\u7528\nloadImg(imgSrc, (err, content) => {\n  if (err) {\n    console.log(err, 'err');\n  }\n  console.log(content);\n});",lang:"js"}),t.a.createElement("p",null,"\u56de\u8c03\u51fd\u6570\u6709\u56de\u8c03\u5730\u72f1\u7b49\u95ee\u9898\uff0c\u6211\u4eec\u63a5\u7740\u7528 promise \u6765\u4f18\u5316\u4e0b"),t.a.createElement("h3",{id:"promise-\u4f18\u5316"},t.a.createElement(o["AnchorLink"],{to:"#promise-\u4f18\u5316","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"Promise \u4f18\u5316"),t.a.createElement(l["a"],{code:"function loadImgPromise(src) {\n  return new Promise((resolve, reject) => {\n    loadImg(src, function (err, con) {\n      if (err) {\n        reject(err);\n      }\n      resolve(con);\n    });\n  });\n}\nloadImgPromise(imgSrc)\n  .then((res) => {\n    console.log(res, 'res');\n  })\n  .catch((err) => {\n    console.log(err);\n  });",lang:"js"}),t.a.createElement("p",null,"\u4e0d\u901a\u7528\u3002\u6211\u4eec\u9700\u8981\u5c01\u88c5\u4e00\u4e2a\u6bd4\u8f83\u901a\u7528\u7684 ",t.a.createElement("strong",null,"promisify")," \u51fd\u6570\uff0c\u4f46\u662f\u8fd9\u4e00\u6b65\u57fa\u672c\u4e5f\u52fe\u51fa\u4e86 promisify \u51fd\u6570\u7684\u5927\u81f4\u6846\u67b6"),t.a.createElement(l["a"],{code:"function loadPromise(src) {\n  return new Promise((resolve, reject) => {\n    loadImg(src, function (err, con) {\n      // \u91cd\u70b9\u662f\u8fd9\u90e8 \u8fd9\u8c03\u7528\u5916\u90e8\u7684\u51fd\u6570\uff0c\u5982\u679c\u6211\u4eec\u4f20\u5165\u4e00\u4e2a\u53c2\u6570\u5462\n      if (err) {\n        reject(err);\n      }\n      resolve(con);\n    });\n  });\n}",lang:"js"}),t.a.createElement("h3",{id:"\u5c01\u88c5-promisify"},t.a.createElement(o["AnchorLink"],{to:"#\u5c01\u88c5-promisify","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5c01\u88c5 promisify"),t.a.createElement("p",null,"\u5b89\u88c5\u4e0a\u9762\u7684\u793a\u4f8b\u57fa\u672c\u4e0a\u9614\u4ee5\u5c01\u88c5\u6210"),t.a.createElement(l["a"],{code:"function promisify(fn) {\n  return (...arg) =>\n    new Promise((resolve, reject) => {\n      fn(args[0], function (err, con) {\n        // fn\u5bf9\u5e94\u4e0a\u6587\u7684loadImg\n        if (err) {\n          reject(err);\n        } else {\n          resolve(con);\n        }\n      });\n    });\n}",lang:"js"}),t.a.createElement("p",null,"\u7b80\u5316\u4e0b"),t.a.createElement(l["a"],{code:"function promisify(fn) {\n  return (...args) => {\n    return new Promise((resolve, reject) => {\n      args.push(function (err, ...val) {\n        if (err) {\n          reject(err);\n        }\n        resolve(val);\n      });\n      // fn.apply(this, args);\n      Reflect.apply(fn, this, args);\n    });\n  };\n}",lang:"js"}),t.a.createElement("p",null,"\u4f7f\u7528\u7684\u8bdd"),t.a.createElement(l["a"],{code:"// promisify\u540e\nvar readFileAsync = promisify(fs.readFile);\nasync function dealAsync() {\n  try {\n    await readFileAsync('test.js');\n  } catch (err) {\n    console.log(err);\n  }\n}\ndealAsync();",lang:"js"}),t.a.createElement("h2",{id:"\u53c2\u8003"},t.a.createElement(o["AnchorLink"],{to:"#\u53c2\u8003","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement(o["Link"],{to:"https://juejin.cn/post/7028731182216904740#heading-8"},"\u4ece 22 \u884c\u6709\u8da3\u7684\u6e90\u7801\u5e93\u4e2d\uff0c\u6211\u5b66\u5230\u4e86 callback promisify \u5316\u7684 Node.js \u6e90\u7801\u5b9e\u73b0"))),t.a.createElement("h2",{id:"\u5e76\u53d1\u8bf7\u6c42\u9650\u5236"},t.a.createElement(o["AnchorLink"],{to:"#\u5e76\u53d1\u8bf7\u6c42\u9650\u5236","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5e76\u53d1\u8bf7\u6c42\u9650\u5236"),t.a.createElement(l["a"],{code:"function request(url) {\n  return new Promise((resove, reject) => {\n    setTimeout(() => {\n      resolve('ccc');\n    });\n  });\n}\n// \u5df2\u5931\u8d25\nfunction asyncPool(max, urls, fn) {\n  var res = [];\n  var temp = [];\n  var next = () => {\n    for (let item of urls) {\n      var p1 = Promise.resolve(item).then((res) => fn(res));\n      temp.push(p1);\n      if (urls.length >= max) {\n        var index = temp.indexOf(p1);\n        temp.splice(index, 1);\n        if (temp.length >= max) {\n          res.push(Promise.race(temp));\n        }\n      }\n    }\n  };\n  return res;\n}",lang:"js"})))}));n["default"]=e=>{var n=t.a.useContext(o["context"]),r=n.demos;return t.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),t.a.createElement(c,{demos:r})}}}]);