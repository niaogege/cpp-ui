(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{XAIP:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),r=a.n(t),m=a("dEAq"),s=a("H1Ra"),o=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"53-\u6700\u5927\u5b50\u6570\u7ec4\u548c"},r.a.createElement(m["AnchorLink"],{to:"#53-\u6700\u5927\u5b50\u6570\u7ec4\u548c","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),r.a.createElement(m["Link"],{to:"https://leetcode.cn/problems/maximum-subarray/"},"53. \u6700\u5927\u5b50\u6570\u7ec4\u548c")),r.a.createElement("p",null,"\u8d2a\u5fc3\u89e3\u6cd5\uff0c\u82e5\u5f53\u524d\u6307\u9488\u6240\u6307\u5143\u7d20\u7684\u548c sum \u5c0f\u4e8e 0\uff0c\u5219\u4e22\u5f03\u5f53\u524d\u5143\u7d20\u7684\u548c"),r.a.createElement(s["a"],{code:"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar maxSubArray = function (nums) {\n  let res = nums[0];\n  let sum;\n  for (let num of nums) {\n    if (sum > 0) {\n      sum = sum + num;\n    } else {\n      sum = num;\n    }\n    res = Math.max(res, sum);\n  }\n  return res;\n};",lang:"js"})))}));n["default"]=e=>{var n=r.a.useContext(m["context"]),a=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&m["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:a})}}}]);