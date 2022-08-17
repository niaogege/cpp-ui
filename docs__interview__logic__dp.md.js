(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{rMIc:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=a("dEAq"),i=a("H1Ra"),c=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("p",null,"dp \u4e94\u5927\u6b65\u9aa4"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u786e\u5b9a dp \u6570\u7ec4\u4ee5\u53ca\u4e0b\u6807\u7684\u542b\u4e49 dp[i]\u8fd8\u662f dp[i][j]"),l.a.createElement("li",null,"\u786e\u5b9a\u9012\u63a8\u516c\u5f0f,\u6bd4\u5982 dp[i] = dp[i - 2] + dp[i - 1]"),l.a.createElement("li",null,"dp \u6570\u7ec4\u521d\u59cb\u5316,\u6bd4\u5982 dp[0] = 0, dp[1] = 1;"),l.a.createElement("li",null,"\u786e\u5b9a\u904d\u5386\u987a\u5e8f,\u4ece\u524d\u5230\u540e\u6216\u8005\u4ece\u540e\u5f80\u524d"),l.a.createElement("li",null,"\u4e3e\u4f8b\u63a8\u5bfc dp \u6570\u7ec4")),l.a.createElement("h3",{id:"53-\u6700\u5927\u5b50\u6570\u7ec4\u548c"},l.a.createElement(r["AnchorLink"],{to:"#53-\u6700\u5927\u5b50\u6570\u7ec4\u548c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement(r["Link"],{to:"https://leetcode.cn/problems/maximum-subarray/"},"53. \u6700\u5927\u5b50\u6570\u7ec4\u548c")),l.a.createElement("p",null,"DP \u89e3\u6cd5\uff0c\u82e5\u524d\u4e00\u4e2a\u5143\u7d20\u7684\u548c\u5927\u4e8e 0\uff0c\u5219\u5c06\u5176\u52a0\u5230\u5f53\u524d\u5143\u7d20\u4e0a"),l.a.createElement(i["a"],{code:"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar maxSubArray = function (nums) {\n  if (!nums.length) return 0;\n  let max = nums[0];\n  let dp = [];\n  dp[0] = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    if (dp[i - 1] > 0) {\n      dp[i] = dp[i - 1] + nums[i];\n    } else {\n      dp[i] = nums[i];\n    }\n    max = Math.max(dp[i], max);\n  }\n  return max;\n};",lang:"js"}),l.a.createElement("h3",{id:"647-\u56de\u6587\u5b50\u4e32"},l.a.createElement(r["AnchorLink"],{to:"#647-\u56de\u6587\u5b50\u4e32","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement(r["Link"],{to:"https://leetcode.cn/problems/palindromic-substrings/"},"647. \u56de\u6587\u5b50\u4e32")),l.a.createElement(i["a"],{code:"/**\n * @param {string} s\n * @return {number}\n */\nvar countSubstrings = function (s) {\n  // \u6784\u9020\u56de\u6587\u6570\u7ec4\n  var len = s.length;\n  // [[false, false],[false, false]]\n  var dp = new Array(len).fill(0).map((_) => new Array(len).fill(false));\n  let count = 0;\n  for (let i = len - 1; i >= 0; i--) {\n    for (let j = i; j < len; j++) {\n      if (s[j] === s[i]) {\n        if (j - i <= 1) {\n          count = count + 1;\n          dp[i][j] = true;\n        } else if (dp[i + 1][j - 1]) {\n          count = count + 1;\n          dp[i][j] = true;\n        }\n      }\n    }\n  }\n  return count;\n};",lang:"js"}),l.a.createElement("h3",{id:"\u6700\u957f\u56de\u6587\u5b50\u4e32"},l.a.createElement(r["AnchorLink"],{to:"#\u6700\u957f\u56de\u6587\u5b50\u4e32","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement(r["Link"],{to:"https://leetcode.cn/problems/longest-palindromic-substring/"},"\u6700\u957f\u56de\u6587\u5b50\u4e32")),l.a.createElement(i["a"],{code:"/**\n * @param {string} s\n * @return {string}\n */\nvar longestPalindrome = function (s) {};",lang:"js"}),l.a.createElement("h3",{id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d"},l.a.createElement(r["AnchorLink"],{to:"#\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement(r["Link"],{to:"https://leetcode.cn/problems/regular-expression-matching/"},"\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d"))))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),a=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(c,{demos:a})}}}]);