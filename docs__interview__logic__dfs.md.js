(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{wtep:function(n,e,r){"use strict";r.r(e);var l=r("q1tI"),t=r.n(l),a=r("dEAq"),o=r("H1Ra"),d=t.a.memo((n=>{n.demos;return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"dfs"},t.a.createElement(a["AnchorLink"],{to:"#dfs","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"DFS"),t.a.createElement("p",null,"depth First Search"),t.a.createElement("p",null,"\u6d4b\u8bd5\u6848\u4f8b"),t.a.createElement(o["a"],{code:"var node = {\n  val: 1,\n  left: {\n    val: 2,\n    left: {\n      val: 4,\n      left: null,\n      right: null,\n    },\n    right: {\n      val: 5,\n      left: null,\n      right: null,\n    },\n  },\n  right: {\n    val: 3,\n    left: {\n      val: 6,\n      left: null,\n      right: null,\n    },\n    right: {\n      val: 7,\n      left: null,\n      right: null,\n    },\n  },\n};",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u524d\u5e8f\u904d\u5386 ",t.a.createElement("strong",null,"\u6839\u5de6\u53f3"))),t.a.createElement(o["a"],{code:"var preTraversal = (root) => {\n  var arr = [];\n  var preorder = (node) => {\n    if (node !== null) {\n      arr.push(node.val);\n      preorder(node.left);\n      preorder(node.right);\n    }\n  };\n  preorder(root);\n  return arr;\n};\npreTraversal(node);\ninput: [1, 2, 3, 4, 5, 6, 7];\noutput: [1, 2, 4, 5, 3, 6, 7];",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u4e2d\u5e8f\u904d\u5386 ",t.a.createElement("strong",null,"\u5de6\u6839\u53f3"))),t.a.createElement(o["a"],{code:"function inorderTraversal(root) {\n  var arr = [];\n  let num = 1;\n  var inorder = (node) => {\n    if (node) {\n      console.log(node, num++);\n      inorder(node.left);\n      arr.push(node.val);\n      debugger;\n      inorder(node.right);\n    }\n  };\n  inorder(root);\n  return arr;\n}\ninput: [1, 2, 3, 4, 5, 6, 7];\noutput: [4, 2, 5, 1, 6, 3, 7];",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u540e\u5e8f\u904d\u5386 ",t.a.createElement("strong",null,"\u5de6\u53f3\u6839"))),t.a.createElement(o["a"],{code:"var postorderTraversal = function (root) {\n  var arr = [];\n  var postorder = (node) => {\n    if (node) {\n      postorder(node.left);\n      postorder(node.right);\n      arr.push(node.val);\n    }\n  };\n  postorder(root);\n  return arr;\n};\ninput: [1, 2, 3, 4, 5, 6, 7];\noutput: [4, 5, 2, 6, 7, 3, 1];",lang:"js"}),t.a.createElement("h3",{id:"\u56f0\u96be\u9898-\u5c9b\u5c7f\u6570\u91cf"},t.a.createElement(a["AnchorLink"],{to:"#\u56f0\u96be\u9898-\u5c9b\u5c7f\u6570\u91cf","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u56f0\u96be\u9898 ",t.a.createElement(a["Link"],{to:"https://leetcode.cn/problems/number-of-islands/"},"\u5c9b\u5c7f\u6570\u91cf")),t.a.createElement("p",null,"20220513 \u9898\u610f\u7b2c\u4e00\u6b21\u770b\u90fd\u6ca1\u7406\u89e3\uff0cnnp\uff0c\u6570\u636e\u7ed3\u6784\u610f\u8bc6\u592a\u5dee"),t.a.createElement(o["a"],{code:"/**\n * @param {character[][]} grid\n * @return {number}\n */\nvar numIslands = function (grid) {\n  var dfs = (grid, row, column) => {\n    var nr = grid.length;\n    var nc = grid[0].length;\n    // \u5f53\u524d\u7684\u503c\u8bbe\u4e3a0\u8868\u793a\u5df2\u7ecf\u904d\u5386\u8fc7\n    grid[row][column] = '0';\n    // \u904d\u5386\u4e0a\u4e0b\u5de6\u53f3\n    if (row - 1 >= 0 && grid[row - 1][column] === '1') dfs(gird, row - 1, column);\n    if (row + 1 < nr && grid[row + 1][column] === '1') dfs(grid, row + 1, column);\n    if (column - 1 >= 0 && grid[column - 1][row] === '1') dfs(grid, row, column - 1);\n    if (column + 1 < nc && grid[column + 1][row] === '1') dfs(grid, row, column + 1);\n  };\n  // \u884c\u6570\n  let nr = grid.length;\n  if (!nr) return 0;\n  let nc = grid[0].length;\n  let num = 0;\n  for (let i = 0; i < nr; i++) {\n    for (let j = 0; j < nc; j++) {\n      if (grid[i][j] === '1') {\n        num++;\n        dfs(grid, i, j);\n      }\n    }\n  }\n  return num;\n};",lang:"js"})))}));e["default"]=n=>{var e=t.a.useContext(a["context"]),r=e.demos;return t.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&a["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),t.a.createElement(d,{demos:r})}}}]);