(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[121],{X2g3:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),r=a.n(t),l=a("dEAq"),o=a("H1Ra"),s=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("blockquote",null,r.a.createElement("p",null,"\u672c\u6765\u5bf9 webpack \u662f\u4e0d\u62b1\u4ec0\u4e48\u5e0c\u671b\uff0c\u4f46\u662f\u5e02\u9762\u4e0a webpack \u6253\u5305\u8fd8\u662f\u5360\u591a\u5927\u6570\uff0c\u53ea\u5e0c\u671b\u539f\u7406\u5c42\u9762\u4e86\u89e3\u70b9\u76ae\u6bdb")),r.a.createElement("h2",{id:"webpack-\u6253\u5305\u57fa\u672c\u539f\u7406"},r.a.createElement(l["AnchorLink"],{to:"#webpack-\u6253\u5305\u57fa\u672c\u539f\u7406","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"webpack \u6253\u5305\u57fa\u672c\u539f\u7406"),r.a.createElement("h2",{id:"\u6253\u5305\u8fc7\u7a0b"},r.a.createElement(l["AnchorLink"],{to:"#\u6253\u5305\u8fc7\u7a0b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6253\u5305\u8fc7\u7a0b"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5206\u6790\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb"),r.a.createElement("li",null,"ES6 \u8f6c ES5"),r.a.createElement("li",null,"\u5904\u7406 exports \u548c require \u8bed\u6cd5")),r.a.createElement("h3",{id:"\u5904\u7406\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb"},r.a.createElement(l["AnchorLink"],{to:"#\u5904\u7406\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5904\u7406\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb"),r.a.createElement("p",null,"\u5728\u6253\u5305\u8fc7\u7a0b\u4e2d\uff0cWebpack \u8fd8\u5904\u7406\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u3002\u5b83\u751f\u6210\u7684\u4f9d\u8d56\u5173\u7cfb\u56fe\u5982\u4e0b\u6240\u793a\uff1a"),r.a.createElement(o["a"],{code:'{\n  "./src/index.js": {\n    "deps": { "./add.js": "./src/add.js" },\n    "code": "....."\n  },\n  "./src/add.js": {\n    "deps": {},\n    "code": "......"\n  }\n}',lang:"js"}),r.a.createElement("h3",{id:"\u5904\u7406-es6-\u8f6c-es5babel-\u7684\u5929\u4e0b"},r.a.createElement(l["AnchorLink"],{to:"#\u5904\u7406-es6-\u8f6c-es5babel-\u7684\u5929\u4e0b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5904\u7406 ES6 \u8f6c ES5(babel \u7684\u5929\u4e0b)"),r.a.createElement("h3",{id:"\u5904\u7406-exports-\u548c-require-\u8bed\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u5904\u7406-exports-\u548c-require-\u8bed\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5904\u7406 exports \u548c require \u8bed\u6cd5"),r.a.createElement("h4",{id:"\u5904\u7406-exports"},r.a.createElement(l["AnchorLink"],{to:"#\u5904\u7406-exports","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5904\u7406 exports"),r.a.createElement("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u52a0\u8f7d\u4e00\u4e2a\u6a21\u5757\uff0c\u6211\u4eec\u53ea\u9700\u8981\u4e24\u4e2a\u6b65\u9aa4\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u8bfb\u53d6\u6587\u4ef6\u7684\u5185\u5bb9"),r.a.createElement("li",null,"\u7136\u540e\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u53ef\u6267\u884c\u4ee3\u7801(eval), \u5728\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u7c7b\u4f3c ",r.a.createElement("strong",null,"fs.readfileSync"),"()\u7684 API\u3002\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 eval \u51fd\u6570\u5c06\u6587\u4ef6\u4e2d\u7684\u5b57\u7b26\u4e32\u4f5c\u4e3a\u4ee3\u7801\u6267\u884c\u3002")),r.a.createElement(o["a"],{code:"// before\nexports.default = function test(a, b) {\n  return a + b;\n};\n\n// after\nvar exports = {}(function (exports, code) {\n  eval(code);\n})(exports, 'exports.default = function (a, b) {return a + b');",lang:"js"}),r.a.createElement("h4",{id:"\u5904\u7406-require-\u51fd\u6570"},r.a.createElement(l["AnchorLink"],{to:"#\u5904\u7406-require-\u51fd\u6570","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5904\u7406 require \u51fd\u6570"),r.a.createElement("p",null,"require \u51fd\u6570\u9700\u8981\u505a\u7684\u4e8b\u60c5\u975e\u5e38\u7b80\u5355\uff0c\u5373",r.a.createElement("strong",null,"\u53d6\u51fa exports \u4e2d\u7684\u5185\u5bb9"),"\u3002\u6211\u4eec\u53ef\u4ee5\u7b80\u5316\u8fd9\u4e2a\u95ee\u9898\uff0c\u5047\u8bbe\u6211\u4eec\u53ea\u9700\u8981\u5728 add \u4e2d\u52a0\u8f7d\u5185\u5bb9\u3002require \u51fd\u6570\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a"),r.a.createElement(o["a"],{code:"function require(file) {\n  var exports = {};\n  (function (exports, code) {\n    eval(code);\n  })(exports, 'exports.default = function test(a, b){return a + b}');\n  return exports;\n}\nvar add = require('add.js');\nadd(1, 2);",lang:"js"}),r.a.createElement("p",null,"\u4f46\u5b9e\u9645\u573a\u666f\u662f\u4f1a\u6709\u591a\u4e2a\u6587\u4ef6\u7684\u5bfc\u5165\uff0c\u6240\u4ee5\u53ef\u4ee5\u8fd9\u4e48\u8bbe\u8ba1\uff0c\u6587\u4ef6\u540d\u662f key,\u6587\u4ef6\u5185\u5bb9\u662f value"),r.a.createElement(o["a"],{code:"let moduleList = {\n  'index.js': `\n    var add = require('add.js').default\n    console.log(add(1 , 2))\n        `,\n  'add.js': `exports.default = function(a,b){return a + b}`,\n}(function (list) {\n  function require(file) {\n    var exports = {}(function test(exports, code) {\n      eval(code);\n    })(exports, list[file]);\n  }\n  require('index.js');\n})(moduleList);",lang:"js"}),r.a.createElement("h2",{id:"\u7b80\u5355\u660e\u767d\u8bf4\u6e05\u695a"},r.a.createElement(l["AnchorLink"],{to:"#\u7b80\u5355\u660e\u767d\u8bf4\u6e05\u695a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7b80\u5355\u660e\u767d\u8bf4\u6e05\u695a"),r.a.createElement(o["a"],{code:"const fs = require('fs');\nconst path = require('path');\n// es6 code transform ast\nconst parser = require('@babel/parser');\n// traverse \u4f9d\u8d56\u8def\u5f84\nconst traverse = require('@babel/traverse');\n// paser transformFromAst es5\u4ee3\u7801\nconst babel = require('@babel/core');\nconst getModuleInfo = (file) => {\n  const body = fs.readFileSync(file, 'utf-8');\n  const ast = parser.parse(body, {\n    sourceType: 'module', // \u89e3\u6790\u7684\u662fes\u6a21\u5757 default sourceType: 'script'\n  });\n  // \u6536\u96c6\u4f9d\u8d56\u8def\u5f84 win10\u7cfb\u7edf\u4e0b\n  const deps = {};\n  traverse.default(ast, {\n    ImportDeclaration({ node }) {\n      const dirname = path.dirname(file);\n      const depsPath = node.source.value;\n      const abspath = './' + path.join(dirname, depsPath);\n      deps[depsPath] = abspath;\n    },\n  });\n  const { code } = babel.transformFromAst(ast, null, {\n    presets: ['@babel/preset-env'],\n  });\n  return {\n    file,\n    deps,\n    code,\n  };\n};\n// \u89e3\u6790\u6a21\u5757\u6df1\u5c42\u6b21\u904d\u5386\u6a21\u5757 \u8f93\u51fa\u5b57\u7b26\u4e32\nconst parseModules = (file) => {\n  const entry = getModuleInfo(file);\n  const temp = [entry];\n  for (let i = 0; i < temp.length; i++) {\n    const deps = temp[i].deps;\n    if (deps) {\n      for (const key in deps) {\n        if (deps.hasOwnProperty(key)) {\n          temp.push(getModuleInfo(deps[key]));\n        }\n      }\n    }\n  }\n  // \u5b58\u50a8\u683c\u5f0f add.js: {deps: '', code: ''}\n  const depsGraph = {};\n  temp.forEach((moduleInfo) => {\n    depsGraph[moduleInfo.file] = {\n      deps: moduleInfo.deps,\n      code: moduleInfo.code,\n    };\n  });\n  return depsGraph;\n};\n// \u8f93\u51fabundle\nconst bundle = (file) => {\n  const depsGraph = JSON.stringify(parseModules(file));\n  return `\n    (function (graph) {\n      function require(file) {\n        var exports = {};\n        function absRequire(relPath) {\n          return require(graph[file].deps[relPath])\n        }\n        // \n        (function(require, exports, code){\n          console.log(require, exports, code)\n          eval(code)\n        })(absRequire, exports, graph[file].code);\n        return exports;\n      }\n      require('${file}')\n    })(${depsGraph})`;\n};\n// \u6309\u7167\u8def\u5f84\u751f\u6210\u6587\u4ef6\nfunction emit(path) {\n  const content = bundle(path);\n  const distPath = './dist';\n  const bundlePath = './dist/bundle.js';\n  fs.unlinkSync(bundlePath);\n  fs.rmdirSync(distPath);\n  fs.mkdirSync(distPath);\n  fs.writeFileSync(bundlePath, content);\n}\nemit('./src/index.js');",lang:"js"}),r.a.createElement("h2",{id:"loader-\u548c-plugin"},r.a.createElement(l["AnchorLink"],{to:"#loader-\u548c-plugin","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"loader \u548c plugin"),r.a.createElement("p",null,"loader: \u5bf9\u6e90\u6587\u4ef6\u8fdb\u884c\u8f6c\u6362\uff0c\u6bd4\u5982\u5bf9.vue \u683c\u5f0f\u6587\u4ef6\u8fdb\u884c\u8f6c\u6362"),r.a.createElement("p",null,"plugin: \u6269\u5c55 webpack \u529f\u80fd\uff0c\u6bd4\u5982\u4ee3\u7801\u538b\u7f29\u548c\u4ee3\u7801\u5206\u5272"),r.a.createElement("h2",{id:"\u819c\u62dc\u5927\u4f6c"},r.a.createElement(l["AnchorLink"],{to:"#\u819c\u62dc\u5927\u4f6c","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u819c\u62dc\u5927\u4f6c"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l["Link"],{to:"https://mp.weixin.qq.com/s/gUgWEg_z6e0ZR06q5WAGjQ"},"\u3010Webpack\u30111362- \u901a\u8fc7\u63d2\u56fe\u6765\u7406\u89e3 webpack")))))}));n["default"]=e=>{var n=r.a.useContext(l["context"]),a=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(s,{demos:a})}}}]);