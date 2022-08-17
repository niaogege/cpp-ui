(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{ZSbA:function(e,n,l){"use strict";l.r(n);var t=l("q1tI"),a=l.n(t),r=l("dEAq"),c=l("H1Ra"),o=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("p",null,a.a.createElement(r["Link"],{to:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth"},"\u6df1\u5165\uff1a\u5fae\u4efb\u52a1\u4e0e Javascript \u8fd0\u884c\u65f6\u73af\u5883")," ",a.a.createElement("img",{src:"https://s2.loli.net/2022/05/08/f7lQt3xoyCcWv9B.jpg",alt:"microMacro.jpg"})),a.a.createElement("h2",{id:"\u8c03\u7528\u6808"},a.a.createElement(r["AnchorLink"],{to:"#\u8c03\u7528\u6808","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u8c03\u7528\u6808"),a.a.createElement("p",null,"JavaScript \u662f\u4e00\u79cd\u5355\u7ebf\u7a0b\u7f16\u7a0b\u8bed\u8a00\uff0c\u8fd9\u610f\u5473\u7740\u4e3b\u7ebf\u7a0b\u53ea\u6709\u4e00\u4e2a\u8c03\u7528\u5806\u6808\u3002\u56e0\u6b64\uff0c\u5b83\u4e00\u6b21\u53ea\u80fd\u505a\u4e00\u4ef6\u4e8b\u3002"),a.a.createElement("p",null,"\u8c03\u7528\u6808\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u8bb0\u5f55\u4e86\u6211\u4eec\u5728\u7a0b\u5e8f\u4e2d\u7684\u4f4d\u7f6e\u3002\u5982\u679c\u6211\u4eec\u8fd0\u884c\u5230\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u5c31\u4f1a\u5c06\u5176\u653e\u7f6e\u5230\u6808\u9876\uff0c\u5f53\u4ece\u8fd9\u4e2a\u51fd\u6570\u8fd4\u56de\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u5c06\u8fd9\u4e2a\u51fd\u6570\u4ece\u6808\u9876\u5f39\u51fa\uff0c\u8fd9\u5c31\u662f\u8c03\u7528\u6808\u505a\u7684\u4e8b\u60c5\u3002"),a.a.createElement(c["a"],{code:"function foo() {\n  throw new Error('stack help you resolve crashes:');\n}\nfunction boo() {\n  foo();\n}\nfunction start() {\n  boo();\n}\nstart();",lang:"js"}),a.a.createElement("p",null,"\u7136\u800c\uff0c\u5728\u67d0\u4e9b\u65f6\u5019\uff0c\u8c03\u7528\u5806\u6808\u4e2d\u7684\u51fd\u6570\u8c03\u7528\u6570\u91cf\u8d85\u8fc7\u4e86\u8c03\u7528\u5806\u6808\u7684\u5b9e\u9645\u5927\u5c0f\uff0c\u6d4f\u89c8\u5668\u51b3\u5b9a\u91c7\u53d6\u884c\u52a8\uff0c\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u5b83\u53ef\u80fd\u662f\u8fd9\u6837\u7684:"),a.a.createElement("p",null,"\u5728\u5355\u4e2a\u7ebf\u7a0b\u4e0a\u8fd0\u884c\u4ee3\u7801\u5f88\u5bb9\u6613\uff0c\u56e0\u4e3a\u4f60\u4e0d\u5fc5\u5904\u7406\u5728\u591a\u7ebf\u7a0b\u73af\u5883\u4e2d\u51fa\u73b0\u7684\u590d\u6742\u573a\u666f\u2014\u2014\u4f8b\u5982\u6b7b\u9501\u3002\u4f46\u662f\u5728\u4e00\u4e2a\u7ebf\u7a0b\u4e0a\u8fd0\u884c\u4e5f\u975e\u5e38\u6709\u9650\u5236\uff0c\u7531\u4e8e JavaScript \u53ea\u6709\u4e00\u4e2a\u8c03\u7528\u5806\u6808\uff0c\u5f53\u67d0\u6bb5\u4ee3\u7801\u8fd0\u884c\u53d8\u6162\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48?"),a.a.createElement("h2",{id:"javascript-\u6267\u884c\u4e0a\u4e0b\u6587"},a.a.createElement(r["AnchorLink"],{to:"#javascript-\u6267\u884c\u4e0a\u4e0b\u6587","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"JavaScript \u6267\u884c\u4e0a\u4e0b\u6587"),a.a.createElement("p",null,"\u5f53\u4e00\u6bb5 JavaScript \u4ee3\u7801\u5728\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u5b83\u5b9e\u9645\u4e0a\u662f\u8fd0\u884c\u5728\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d\u3002\u4e0b\u9762 3 \u79cd\u7c7b\u578b\u7684\u4ee3\u7801\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6267\u884c\u4e0a\u4e0b\u6587\uff1a"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5168\u5c40\u4e0a\u4e0b\u6587\u662f\u4e3a\u8fd0\u884c\u4ee3\u7801\u4e3b\u4f53\u800c\u521b\u5efa\u7684\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u4e5f\u5c31\u662f\u8bf4\u5b83\u662f\u4e3a\u90a3\u4e9b\u5b58\u5728\u4e8e JavaScript \u51fd\u6570\u4e4b\u5916\u7684\u4efb\u4f55\u4ee3\u7801\u800c\u521b\u5efa\u7684\u3002"),a.a.createElement("li",null,"\u6bcf\u4e2a\u51fd\u6570\u4f1a\u5728\u6267\u884c\u7684\u65f6\u5019\u521b\u5efa\u81ea\u5df1\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u3002\u8fd9\u4e2a\u4e0a\u4e0b\u6587\u5c31\u662f\u901a\u5e38\u8bf4\u7684 \u201c\u672c\u5730\u4e0a\u4e0b\u6587\u201d\u3002"),a.a.createElement("li",null,"\u4f7f\u7528 eval() \u51fd\u6570\u4e5f\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6267\u884c\u4e0a\u4e0b\u6587(\u8c28\u614e\u4f7f\u7528)")),a.a.createElement("p",null,"\u6bcf\u4e00\u4e2a\u4e0a\u4e0b\u6587\u5728\u672c\u8d28\u4e0a\u90fd\u662f\u4e00\u79cd\u4f5c\u7528\u57df\u5c42\u7ea7\u3002\u6bcf\u4e2a\u4ee3\u7801\u6bb5\u5f00\u59cb\u6267\u884c\u7684\u65f6\u5019\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4e0a\u4e0b\u6587\u6765\u8fd0\u884c\u5b83\uff0c\u5e76\u4e14\u5728\u4ee3\u7801\u9000\u51fa\u7684\u65f6\u5019\u9500\u6bc1\u6389\u3002\u770b\u770b\u4e0b\u9762\u8fd9\u6bb5 JavaScript \u7a0b\u5e8f\uff1a"),a.a.createElement(c["a"],{code:"let outputElem = document.getElementById('output');\n\nlet userLanguages = {\n  Mike: 'en',\n  Teresa: 'es',\n};\n\nfunction greetUser(user) {\n  function localGreeting(user) {\n    let greeting;\n    let language = userLanguages[user];\n\n    switch (language) {\n      case 'es':\n        greeting = `\xa1Hola, ${user}!`;\n        break;\n      case 'en':\n      default:\n        greeting = `Hello, ${user}!`;\n        break;\n    }\n    return greeting;\n  }\n  outputElem.innerHTML += localGreeting(user) + '<br>\\r';\n}\n\ngreetUser('Mike');\ngreetUser('Teresa');\ngreetUser('Veronica');",lang:"js"}),a.a.createElement("p",null,"\u8fd9\u6bb5\u7a0b\u5e8f\u4ee3\u7801\u5305\u542b\u4e86\u4e09\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u5176\u4e2d\u6709\u4e9b\u4f1a\u5728\u7a0b\u5e8f\u8fd0\u884c\u7684\u8fc7\u7a0b\u4e2d\u591a\u6b21\u521b\u5efa\u548c\u9500\u6bc1\u3002\u6bcf\u4e2a\u4e0a\u4e0b\u6587\u521b\u5efa\u7684\u65f6\u5019\u4f1a\u88ab\u63a8\u5165\u6267\u884c\u4e0a\u4e0b\u6587\u6808\u3002\u5f53\u9000\u51fa\u7684\u65f6\u5019\uff0c\u5b83\u4f1a\u4ece\u4e0a\u4e0b\u6587\u6808\u4e2d\u79fb\u9664\u3002"),a.a.createElement("p",null,"\u770b\u770b\u6267\u884c\u8fc7\u7a0b"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7a0b\u5e8f\u5f00\u59cb\u8fd0\u884c\u65f6\uff0c\u5168\u5c40\u4e0a\u4e0b\u6587\u5c31\u4f1a\u88ab\u521b\u5efa\u597d\u3002",a.a.createElement("ul",null,a.a.createElement("li",null,'\u5f53\u6267\u884c\u5230 greetUser("Mike") \u7684\u65f6\u5019\u4f1a\u4e3a greetUser() \u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u5b83\u7684\u4e0a\u4e0b\u6587\u3002\u8fd9\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\u4f1a\u88ab\u63a8\u5165\u6267\u884c\u4e0a\u4e0b\u6587\u6808\u4e2d\u3002',a.a.createElement("ul",null,a.a.createElement("li",null,"\u5f53 greetUser() \u8c03\u7528 localGreeting()\u7684\u65f6\u5019\u4f1a\u4e3a\u8be5\u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4e0a\u4e0b\u6587\u3002\u5e76\u4e14\u5728 localGreeting() \u9000\u51fa\u7684\u65f6\u5019\u5b83\u7684\u4e0a\u4e0b\u6587\u4e5f\u4f1a\u4ece\u6267\u884c\u6808\u4e2d\u5f39\u51fa\u5e76\u9500\u6bc1\u3002 \u7a0b\u5e8f\u4f1a\u4ece\u6808\u4e2d\u83b7\u53d6\u4e0b\u4e00\u4e2a\u4e0a\u4e0b\u6587\u5e76\u6062\u590d\u6267\u884c, \u4e5f\u5c31\u662f\u4ece greetUser() \u5269\u4e0b\u7684\u90e8\u5206\u5f00\u59cb\u6267\u884c\u3002"),a.a.createElement("li",null,"greetUser() \u6267\u884c\u5b8c\u6bd5\u5e76\u9000\u51fa\uff0c\u5176\u4e0a\u4e0b\u6587\u4e5f\u4ece\u6808\u4e2d\u5f39\u51fa\u5e76\u9500\u6bc1\u3002"))),a.a.createElement("li",null,'\u5f53 greetUser("Teresa") \u5f00\u59cb\u6267\u884c\u65f6\uff0c\u7a0b\u5e8f\u53c8\u4f1a\u4e3a\u5b83\u521b\u5efa\u4e00\u4e2a\u4e0a\u4e0b\u6587\u5e76\u63a8\u5165\u6808\u9876 ...'),a.a.createElement("li",null,'\u5f53 greetUser("Veronica") \u5f00\u59cb\u6267\u884c\u65f6\uff0c\u7a0b\u5e8f\u53c8\u4f1a\u4e3a\u5b83\u521b\u5efa\u4e00\u4e2a\u4e0a\u4e0b\u6587\u5e76\u63a8\u5165\u6808\u9876 ...'))),a.a.createElement("li",null,"\u4e3b\u7a0b\u5e8f\u9000\u51fa\uff0c\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\u4ece\u6267\u884c\u6808\u4e2d\u5f39\u51fa\u3002\u6b64\u65f6\u6808\u4e2d\u6240\u6709\u7684\u4e0a\u4e0b\u6587\u90fd\u5df2\u7ecf\u5f39\u51fa\uff0c\u7a0b\u5e8f\u6267\u884c\u5b8c\u6bd5\u3002")),a.a.createElement("p",null,"\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u6765\u4f7f\u7528\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u4f7f\u5f97\u6bcf\u4e2a\u7a0b\u5e8f\u548c\u51fd\u6570\u90fd\u80fd\u591f\u62e5\u6709\u81ea\u5df1\u7684\u53d8\u91cf\u548c\u5176\u4ed6\u5bf9\u8c61\u3002\u6bcf\u4e2a\u4e0a\u4e0b\u6587\u8fd8\u80fd\u591f\u989d\u5916\u7684\u8ddf\u8e2a\u7a0b\u5e8f\u4e2d\u4e0b\u4e00\u884c\u9700\u8981\u6267\u884c\u7684\u4ee3\u7801\u4ee5\u53ca\u4e00\u4e9b\u5bf9\u4e0a\u4e0b\u6587\u975e\u5e38\u91cd\u8981\u7684\u4fe1\u606f\u3002\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u6765\u4f7f\u7528\u4e0a\u4e0b\u6587\u548c\u4e0a\u4e0b\u6587\u6808\uff0c\u4f7f\u5f97\u6211\u4eec\u53ef\u4ee5\u5bf9\u7a0b\u5e8f\u8fd0\u884c\u7684\u4e00\u4e9b\u57fa\u7840\u90e8\u5206\u8fdb\u884c\u7ba1\u7406\uff0c\u5305\u62ec\u5c40\u90e8\u548c\u5168\u5c40\u53d8\u91cf\u3001\u51fd\u6570\u7684\u8c03\u7528\u4e0e\u8fd4\u56de\u7b49\u3002"),a.a.createElement("p",null,"\u5173\u4e8e\u9012\u5f52\u51fd\u6570\u2014\u2014\u5373\u591a\u6b21\u8c03\u7528\u81ea\u8eab\u7684\u51fd\u6570\uff0c\u9700\u8981\u7279\u522b\u6ce8\u610f\uff1a\u6bcf\u6b21\u9012\u5f52\u8c03\u7528\u81ea\u8eab\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4e0a\u4e0b\u6587\u3002\u8fd9\u4f7f\u5f97 JavaScript \u8fd0\u884c\u65f6\u80fd\u591f\u8ffd\u8e2a\u9012\u5f52\u7684\u5c42\u7ea7\u4ee5\u53ca\u4ece\u9012\u5f52\u4e2d\u5f97\u5230\u7684\u8fd4\u56de\u503c\uff0c\u4f46\u8fd9\u4e5f\u610f\u5473\u7740\u6bcf\u6b21\u9012\u5f52\u90fd\u4f1a\u6d88\u8017\u5185\u5b58\u6765\u521b\u5efa\u65b0\u7684\u4e0a\u4e0b\u6587\u3002"),a.a.createElement("h2",{id:"javascript-\u8fd0\u884c\u65f6"},a.a.createElement(r["AnchorLink"],{to:"#javascript-\u8fd0\u884c\u65f6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"JavaScript \u8fd0\u884c\u65f6"),a.a.createElement("p",null,"\u5728\u6267\u884c JavaScript \u4ee3\u7801\u7684\u65f6\u5019\uff0cJavaScript \u8fd0\u884c\u65f6\u5b9e\u9645\u4e0a\u7ef4\u62a4\u4e86\u4e00\u7ec4\u7528\u4e8e\u6267\u884c JavaScript \u4ee3\u7801\u7684\u4ee3\u7406\u3002\u6bcf\u4e2a\u4ee3\u7406\u7531\u4e00\u7ec4\u6267\u884c\u4e0a\u4e0b\u6587\u7684\u96c6\u5408\u3001\u6267\u884c\u4e0a\u4e0b\u6587\u6808\u3001\u4e3b\u7ebf\u7a0b\u3001\u4e00\u7ec4\u53ef\u80fd\u521b\u5efa\u7528\u4e8e\u6267\u884c worker \u7684\u989d\u5916\u7684\u7ebf\u7a0b\u96c6\u5408\u3001\u4e00\u4e2a\u4efb\u52a1\u961f\u5217\u4ee5\u53ca\u4e00\u4e2a\u5fae\u4efb\u52a1\u961f\u5217\u6784\u6210\u3002\u9664\u4e86\u4e3b\u7ebf\u7a0b\uff08\u67d0\u4e9b\u6d4f\u89c8\u5668\u5728\u591a\u4e2a\u4ee3\u7406\u4e4b\u95f4\u5171\u4eab\u7684\u4e3b\u7ebf\u7a0b\uff09\u4e4b\u5916\uff0c\u5176\u5b83\u7ec4\u6210\u90e8\u5206\u5bf9\u8be5\u4ee3\u7406\u90fd\u662f\u552f\u4e00\u7684\u3002"),a.a.createElement("h2",{id:"\u5b9e\u9645\u4ee3\u7801\u8868\u73b0"},a.a.createElement(r["AnchorLink"],{to:"#\u5b9e\u9645\u4ee3\u7801\u8868\u73b0","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u9645\u4ee3\u7801\u8868\u73b0"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u95ee\uff1a\u8bf4\u51fa\u4e00\u4e0b\u4ee3\u7801\u7684\u6267\u884c\u8fc7\u7a0b")),a.a.createElement(c["a"],{code:"console.log(1);\nsetTimeout(function () {\n  console.log(2);\n}, 0);\nconsole.log(3);",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"console.log(1)\u88ab\u538b\u5165\u6267\u884c\u6808\uff0c\u76f4\u63a5\u6267\u884c"),a.a.createElement("li",null,"setTimeout \u5728\u6267\u884c\u6808\u88ab\u8bc6\u522b\u4e3a\u5f02\u6b65\u4efb\u52a1\uff0c\u653e\u5165 webapis \u4e2d"),a.a.createElement("li",null,"console.log\uff083\uff09\u88ab\u538b\u5165\u6267\u884c\u6808\uff0c\u6b64\u65f6 setTimeout \u7684\u53ef\u6267\u884c\u4ee3\u7801\u8fd8\u5728\u56de\u8c03\u961f\u5217\u91cc\u7b49\u5f85"),a.a.createElement("li",null,"console.log\uff083)\u6267\u884c\u5b8c\u6210\u540e\uff0c\u6267\u884c\u6808\u6b64\u65f6\u5df2\u7ecf\u6e05\u7a7a\u4e86\uff0c\u4ece\u56de\u8c03\u961f\u5217\u5934\u90e8\u53d6\u51fa console.log(2)\uff0c\u653e\u5165\u6267\u884c\u6808"),a.a.createElement("li",null,"console.log(2)\u6267\u884c")),a.a.createElement("h3",{id:"\u56de\u8c03\u961f\u5217event-queue\u5148\u8fdb\u5148\u51fa"},a.a.createElement(r["AnchorLink"],{to:"#\u56de\u8c03\u961f\u5217event-queue\u5148\u8fdb\u5148\u51fa","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u56de\u8c03\u961f\u5217(event queue)\u5148\u8fdb\u5148\u51fa"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u95ee\u4e0b\u9762\u4ee3\u7801\u8f93\u51fa")),a.a.createElement(c["a"],{code:"console.log(1);\nsetTimeout(() => {\n  console.log(2);\n  setTimeout(() => {\n    console.log(3);\n  }, 0);\n}, 0);\nsetTimeout(() => {\n  console.log(4);\n}, 0);\nconsole.log(5);\n// output 1 5 2 4 3",lang:"js"}),a.a.createElement("p",null,"\u63cf\u8ff0\u4e0a\u8ff0\u7684\u8fc7\u7a0b 1\uff0c\u8f93\u51fa 1\uff0c\u5c06 2push \u8fdb webapis\uff0c\u5012\u8ba1\u65f6\u7ed3\u675f\u540e\u7684 setTimeout \u7684\u53ef\u6267\u884c\u51fd\u6570\uff0c\u88ab\u653e\u5165\u4e86\u56de\u8c03\u961f\u5217"),a.a.createElement("p",null,"2\uff0c\u5c06 4push \u8fdb\u56de\u8c03\u961f\u5217"),a.a.createElement("p",null,"3\uff0c\u8f93\u51fa 5"),a.a.createElement("p",null,"4\uff0c\u6e05\u7a7a\u4e86\u6267\u884c\u6808\uff0c\u8bfb\u53d6\u8f93\u51fa 2\uff0c\u53d1\u73b0\u6709 3\uff0c\u5c06 3push \u8fdb\u56de\u8c03\u961f\u5217"),a.a.createElement("p",null,"5\uff0c\u6e05\u7a7a\u4e86\u6267\u884c\u6808\uff0c\u8bfb\u53d6\u8f93\u51fa 4"),a.a.createElement("p",null,"6\uff0c\u6e05\u7a7a\u4e86\u6267\u884c\u6808\uff0c\u8bfb\u53d6\u8f93\u51fa 3"),a.a.createElement("h3",{id:"macrotask\u5b8f\u4efb\u52a1microtask\u5fae\u4efb\u52a1"},a.a.createElement(r["AnchorLink"],{to:"#macrotask\u5b8f\u4efb\u52a1microtask\u5fae\u4efb\u52a1","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Macrotask(\u5b8f\u4efb\u52a1)\u3001Microtask\uff08\u5fae\u4efb\u52a1\uff09"),a.a.createElement("blockquote",null,a.a.createElement("p",null,"\u5b8f\u4efb\u52a1\u961f\u5217\u548c\u5fae\u4efb\u52a1\u961f\u5217\u4e24\u4e2a\u961f\u5217\u6709\u4ec0\u4e48\u533a\u522b\uff1f")),a.a.createElement("p",null,"Microtask(\u5fae\u4efb\u52a1)\u540c\u6837\u662f\u4e00\u4e2a\u4efb\u52a1\u961f\u5217\uff0c\u8fd9\u4e2a\u961f\u5217\u7684\u6267\u884c\u65f6\u673a\u662f\u5728",a.a.createElement("strong",null,"\u6e05\u7a7a\u6267\u884c\u6808"),"\u4e4b\u540e"),a.a.createElement("p",null,"Microtask\uff08\u5fae\u4efb\u52a1\uff09\u867d\u7136\u662f\u961f\u5217\uff0c\u4f46\u5e76\u4e0d\u662f\u4e00\u4e2a\u4e00\u4e2a\u653e\u5165\u6267\u884c\u6808\uff0c\u800c\u662f\u5f53\u6267\u884c\u6808\u6e05\u7a7a\uff0c\u4f1a\u6267\u884c\u5168\u90e8 Microtask\uff08\u5fae\u4efb\u52a1\uff09\u961f\u5217\u4e2d\u7684\u4efb\u52a1\uff0c\u6e05\u7a7a\u6267\u884c\u6808\u4e4b\u540e\u6700\u540e\u624d\u662f\u53d6\u56de\u8c03\u961f\u5217\u7684\u7b2c\u4e00\u4e2a Macrotask(\u5b8f\u4efb\u52a1)"),a.a.createElement(c["a"],{code:"console.log(1);\nsetTimeout(() => {\n  console.log(2);\n}, 4000);\nvar p = new Promise((resolve, reject) => {\n  console.log(3);\n  resolve('\u6210\u529f');\n});\np.then(() => {\n  console.log(4);\n});\nconsole.log(5);\n// output: 1 3 5 4 2",lang:"js"}),a.a.createElement("p",null,"\u63cf\u8ff0\u4e0b\u4e0a\u8ff0\u8fc7\u7a0b"),a.a.createElement("ul",null,a.a.createElement("li",null,"console.log(1)\u63a8\u5165\u6267\u884c\u6808\u76f4\u63a5\u6267\u884c\uff0c\u8f93\u51fa 1"),a.a.createElement("li",null,"setTimeout \u63a8\u5165 webapi,4000 \u6beb\u79d2\u4e4b\u540e\u538b\u5165\u4e8b\u4ef6\u961f\u5217\u4e2d"),a.a.createElement("li",null,"p \u538b\u5165\u6267\u884c\u6808\uff0c\u6267\u884c\uff0c\u8f93\u51fa 3"),a.a.createElement("li",null,"p.then()\u63a8\u5165 webpai,\u7136\u540e\u8fdb\u5165\u4e8b\u4ef6\u961f\u5217"),a.a.createElement("li",null,"console.log(5)\u6267\u884c\uff0c\u8f93\u51fa 5"),a.a.createElement("li",null,"\u4e8b\u4ef6\u961f\u5217\u4e2d\u6709 setTimeout/new Promise"),a.a.createElement("li",null,"\u6267\u884c\u6808\u6b64\u65f6\u5df2\u7ecf\u6e05\u7a7a\uff0c\u5fae\u4efb\u52a1 new Promise \u63a8\u5165\u6267\u884c\u6808\uff0c\u6253\u5370 4"),a.a.createElement("li",null,"\u6267\u884c\u6808\u6b64\u65f6\u5df2\u7ecf\u6e05\u7a7a\uff0c\u5b8f\u4efb\u52a1 setTimeout \u63a8\u5165\u6267\u884c\u6808\uff0c\u6253\u5370 2")),a.a.createElement("h4",{id:"demo"},a.a.createElement(r["AnchorLink"],{to:"#demo","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"demo"),a.a.createElement(c["a"],{code:"setTimeout(() => {\n  console.log(1);\n});\nPromise.resolve().then(() => {\n  console.log(2);\n  Promise.resolve().then(() => {\n    console.log(3);\n  });\n});\nPromise.resolve().then(() => {\n  console.log(4);\n});\n// output: 2 4 3 1",lang:"js"}),a.a.createElement("p",null,"\u63cf\u8ff0\u4ee5\u4e0a\u8fc7\u7a0b"),a.a.createElement("ul",null,a.a.createElement("li",null,"setTimeout push \u5b8f\u4efb\u52a1"),a.a.createElement("li",null,"\u5c06 then(2)push \u8fdb\u5fae\u4efb\u52a1"),a.a.createElement("li",null,"\u5c06 then(4)push \u8fdb\u5fae\u4efb\u52a1"),a.a.createElement("li",null,"\u4efb\u52a1\u961f\u5217\u4e3a\u7a7a\uff0c\u53d6\u51fa\u5fae\u4efb\u52a1\u7b2c\u4e00\u4e2a then(2)\u538b\u5165\u6267\u884c\u6808"),a.a.createElement("li",null,"\u8f93\u51fa 2\uff0c\u5c06 then(3)push \u8fdb\u5fae\u4efb\u52a1"),a.a.createElement("li",null,"\u4efb\u52a1\u961f\u5217\u4e3a\u7a7a\uff0c\u53d6\u51fa\u5fae\u4efb\u52a1\u7b2c\u4e00\u4e2a then(4)\u538b\u5165\u6267\u884c\u6808"),a.a.createElement("li",null,"\u8f93\u51fa 4"),a.a.createElement("li",null,"\u4efb\u52a1\u961f\u5217\u4e3a\u7a7a\uff0c\u53d6\u51fa\u5fae\u4efb\u52a1\u7b2c\u4e00\u4e2a then(3)\u538b\u5165\u6267\u884c\u6808"),a.a.createElement("li",null,"\u8f93\u51fa 3"),a.a.createElement("li",null,"\u4efb\u52a1\u961f\u5217\u4e3a\u7a7a\uff0c\u5fae\u4efb\u52a1\u4e5f\u4e3a\u7a7a\uff0c\u53d6\u51fa\u5b8f\u4efb\u52a1\u4e2d\u7684 setTimeout\uff081\uff09"),a.a.createElement("li",null,"\u8f93\u51fa 1")),a.a.createElement("h3",{id:"\u4e3a\u4ec0\u4e48-then-\u662f\u5fae\u4efb\u52a1"},a.a.createElement(r["AnchorLink"],{to:"#\u4e3a\u4ec0\u4e48-then-\u662f\u5fae\u4efb\u52a1","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4e3a\u4ec0\u4e48 then \u662f\u5fae\u4efb\u52a1"),a.a.createElement("p",null,"\u8fd9\u548c\u6bcf\u4e2a\u6d4f\u89c8\u5668\u6709\u5173\uff0c\u6bcf\u4e2a\u6d4f\u89c8\u5668\u5b9e\u73b0\u7684 promise \u4e0d\u540c\uff0c\u6709\u7684 then \u662f\u5b8f\u4efb\u52a1\uff0c\u6709\u7684\u662f\u5fae\u4efb\u52a1\uff0cchrome \u662f\u5fae\u4efb\u52a1\uff0c\u666e\u904d\u90fd\u9ed8\u8ba4\u4e3a\u5fae\u4efb\u52a1\u9664\u4e86 then \u4ee5\u5916\uff0c\u8fd8\u6709\u51e0\u4e2a\u4e8b\u4ef6\u4e5f\u88ab\u8bb0\u4e3a\u5fae\u4efb\u52a1\uff1a"),a.a.createElement("ul",null,a.a.createElement("li",null,"process.nextTick"),a.a.createElement("li",null,"promises"),a.a.createElement("li",null,"Object.observe"),a.a.createElement("li",null,"MutationObserver")),a.a.createElement("h2",{id:"\u53c2\u8003"},a.a.createElement(r["AnchorLink"],{to:"#\u53c2\u8003","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(r["Link"],{to:"https://segmentfault.com/a/1190000017352941"},"JavaScript \u662f\u5982\u4f55\u5de5\u4f5c\u7684 01\uff1a\u5f15\u64ce\uff0c\u8fd0\u884c\u65f6\u548c\u8c03\u7528\u5806\u6808\u7684\u6982\u8ff0\uff01")),a.a.createElement("li",null,a.a.createElement(r["Link"],{to:"https://mp.weixin.qq.com/s/nxlrWyfRNhsTaERd4nPiKQ"},"JavaScript js \u8c03\u7528\u5806\u6808")),a.a.createElement("li",null,a.a.createElement(r["Link"],{to:"https://juejin.cn/post/6844903553031634952"},"\u56fe\u89e3\u641e\u61c2 JavaScript \u5f15\u64ce Event Loop")),a.a.createElement("li",null,a.a.createElement(r["Link"],{to:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth"},"\u6df1\u5165\uff1a\u5fae\u4efb\u52a1\u4e0e Javascript \u8fd0\u884c\u65f6\u73af\u5883")))))}));n["default"]=e=>{var n=a.a.useContext(r["context"]),l=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:l})}}}]);