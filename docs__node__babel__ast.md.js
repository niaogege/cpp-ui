(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[91],{"+qpu":function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=a("dEAq"),i=a("H1Ra"),c=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("p",null,l.a.createElement("img",{src:"https://s2.loli.net/2022/06/22/N7Rhz9UsBLpwGlQ.png",alt:"babel APi.png"})),l.a.createElement("h2",{id:"ast"},l.a.createElement(r["AnchorLink"],{to:"#ast","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"AST"),l.a.createElement("p",null,"\u6807\u8bc6\u7b26 Identifer\u3001\u5404\u79cd\u5b57\u9762\u91cf xxLiteral\u3001\u5404\u79cd\u8bed\u53e5 xxStatement\uff0c\u5404\u79cd\u58f0\u660e\u8bed\u53e5 xxDeclaration\uff0c\u5404\u79cd\u8868\u8fbe\u5f0f xxExpression\uff0c\u4ee5\u53ca Class\u3001Modules\u3001File\u3001Program\u3001Directive\u3001Comment \u8fd9\u4e9b AST \u8282\u70b9"),l.a.createElement("h3",{id:"literal"},l.a.createElement(r["AnchorLink"],{to:"#literal","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Literal"),l.a.createElement("p",null,"Literal \u662f\u5b57\u9762\u91cf\u7684\u610f\u601d\uff0c\u6bd4\u5982 let name = 'guang'\u4e2d\uff0c'guang'\u5c31\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u5b57\u9762\u91cf StringLiteral\uff0c\u76f8\u5e94\u7684\u8fd8\u6709\u6570\u5b57\u5b57\u9762\u91cf NumericLiteral(11)\uff0c\u5e03\u5c14\u5b57\u9762\u91cf BooleanLiteral(false)\uff0c\u5b57\u7b26\u4e32\u5b57\u9762\u91cf StringLiteral('chendapeng')\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u5b57\u9762\u91cf RegExpLiteral(/^[a-z]+/) \u7b49"),l.a.createElement("h3",{id:"identifier-\u6807\u8bc6\u7b26"},l.a.createElement(r["AnchorLink"],{to:"#identifier-\u6807\u8bc6\u7b26","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Identifier \u6807\u8bc6\u7b26"),l.a.createElement("p",null,"Identifer \u662f\u6807\u8bc6\u7b26\u7684\u610f\u601d\uff0c",l.a.createElement("strong",null,"\u53d8\u91cf\u540d\u3001\u5c5e\u6027\u540d\u3001\u53c2\u6570\u540d"),"\u7b49\u5404\u79cd\u58f0\u660e\u548c\u5f15\u7528\u7684\u540d\u5b57\uff0c\u90fd\u662f Identifer\u3002\u6211\u4eec\u77e5\u9053\uff0cJS \u4e2d\u7684\u6807\u8bc6\u7b26\u53ea\u80fd\u5305\u542b\u5b57\u6bcd\u6216\u6570\u5b57\u6216\u4e0b\u5212\u7ebf\uff08\u201c_\u201d\uff09\u6216\u7f8e\u5143\u7b26\u53f7\uff08\u201c$\u201d\uff09\uff0c\u4e14\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\u3002\u8fd9\u662f Identifier \u7684\u8bcd\u6cd5\u7279\u70b9\u3002"),l.a.createElement(i["a"],{code:"const name = 'guang'; // name\nfunction say(name) {\n  // say name\n  console.log(name); // console log name\n}\nconst obj = {\n  // obj\n  name: 'guang', // name\n};",lang:"js"}),l.a.createElement("h3",{id:"statement"},l.a.createElement(r["AnchorLink"],{to:"#statement","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Statement"),l.a.createElement("p",null,"statement \u662f\u8bed\u53e5\uff0c\u5b83\u662f\u53ef\u4ee5\u72ec\u7acb\u6267\u884c\u7684\u5355\u4f4d\uff0c\u6bd4\u5982 break\u3001continue\u3001debugger\u3001return \u6216\u8005 if \u8bed\u53e5\u3001while \u8bed\u53e5\u3001for \u8bed\u53e5\uff0c\u8fd8\u6709\u58f0\u660e\u8bed\u53e5\uff0c\u8868\u8fbe\u5f0f\u8bed\u53e5\u7b49\u3002\u6211\u4eec\u5199\u7684\u6bcf\u4e00\u6761\u53ef\u4ee5\u72ec\u7acb\u6267\u884c\u7684\u4ee3\u7801\u90fd\u662f\u8bed\u53e5\u3002"),l.a.createElement("p",null,"\u8bed\u53e5\u672b\u5c3e\u4e00\u822c\u4f1a\u52a0\u4e00\u4e2a\u5206\u53f7\u5206\u9694\uff0c\u6216\u8005\u7528\u6362\u884c\u5206\u9694\u3002"),l.a.createElement("p",null,"\u4e0b\u9762\u8fd9\u4e9b\u6211\u4eec\u7ecf\u5e38\u5199\u7684\u4ee3\u7801\uff0c\u6bcf\u4e00\u884c\u90fd\u662f\u4e00\u4e2a Statement\uff1a"),l.a.createElement(i["a"],{code:"break;\ncontinue;\nreturn;\ndebugger;\nthrow Error();\n{}\ntry {} catch(e) {} finally{}\nfor (let key in obj) {}\nfor (let i = 0;i < 10;i ++) {}\nwhile (true) {}\ndo {} while (true)\nswitch (v){case 1: break;default:;}\nlabel: console.log();\nwith (a){}",lang:"js"}),l.a.createElement("h3",{id:"declaration"},l.a.createElement(r["AnchorLink"],{to:"#declaration","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Declaration"),l.a.createElement("p",null,"\u58f0\u660e\u8bed\u53e5\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u8bed\u53e5\uff0c\u5b83\u6267\u884c\u7684\u903b\u8f91\u662f\u5728\u4f5c\u7528\u57df\u5185\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\u3001\u51fd\u6570\u3001class\u3001import\u3001export \u7b49\u3002\u58f0\u660e\u8bed\u53e5\u7528\u4e8e\u5b9a\u4e49\u53d8\u91cf\uff0c\u53d8\u91cf\u58f0\u660e\u4e5f\u662f\u4ee3\u7801\u4e2d\u4e00\u4e2a\u57fa\u7840\u7684\u90e8\u5206\u3002"),l.a.createElement(i["a"],{code:"const a = 1; // VariableDeclaration\nfunction b() {} // FunctionD\nclass C {} // ClassD\n\nimport d from 'e'; // ImportD\n\nexport default e = 1; // ExportDefaultD\nexport { e }; // ExportName\nexport * from 'e'; // ExportAll",lang:"js"}),l.a.createElement("h3",{id:"expression"},l.a.createElement(r["AnchorLink"],{to:"#expression","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"expression"),l.a.createElement("p",null,"expression \u662f\u8868\u8fbe\u5f0f\uff0c\u7279\u70b9\u662f\u6267\u884c\u5b8c\u4ee5\u540e\u6709\u8fd4\u56de\u503c\uff0c\u8fd9\u662f\u548c\u8bed\u53e5 (statement) \u7684\u533a\u522b\u3002"),l.a.createElement(i["a"],{code:"[1,2,3] // ArrayExpression // \u6570\u7ec4\u8868\u8fbe\u5f0f\na = 1 // Assignment \u8d4b\u503c\u8868\u8fbe\u5f0f\n1 + 2; // Binary \u4e8c\u5143\u8868\u8fbe\u5f0f\n-1; // Unary \u4e00\u5143\u8868\u8fbe\u5f0f\nfunction(){}; // Function\n() => {}; // ArrowFunction\nclass{}; // Class\na; // Indentifier\nthis; // This\nsuper; // Super\na::b; // BindExporess \u7ed1\u5b9a\u8868\u8fbe\u5f0f",lang:"js"}),l.a.createElement("h2",{id:"\u53c2\u8003\u6587\u6863"},l.a.createElement(r["AnchorLink"],{to:"#\u53c2\u8003\u6587\u6863","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003\u6587\u6863"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"https://mp.weixin.qq.com/s/miey_S-cBElyxOiAnMVOmw"},"\u6700\u8be6\u7ec6\u3001\u6700\u5168\u9762\u7684 Babel \u5c0f\u6284")),l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"https://mp.weixin.qq.com/s/ZVWffh-MWcRNl2rDp0cKiQ"},"\u4fdd\u59c6\u7ea7\u6559\u5b66\uff01\u8fd9\u6b21\u4e00\u5b9a\u5b66\u4f1a babel \u63d2\u4ef6\u5f00\u53d1\uff01")))))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),a=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(c,{demos:a})}}}]);