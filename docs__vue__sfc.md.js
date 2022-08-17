(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[169],{rC9R:function(e,l,t){"use strict";t.r(l);var a=t("q1tI"),n=t.n(a),c=t("dEAq"),r=n.a.memo((e=>{e.demos;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,"SFC: \u5355\u6587\u4ef6\u7ec4\u4ef6 single File Component"),n.a.createElement("ul",null,n.a.createElement("li",null,"h() \u51fd\u6570\u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efa VNode \u7684\u5b9e\u7528\u7a0b\u5e8f,\u51c6\u786e\u7684\u547d\u540d\u6210 createVNode(),\u5982\u4f55\u7b80\u79f0\u4e3a h()"),n.a.createElement("li",null,"\u5982\u679c\u8ba9\u4f60\u8bbe\u8ba1\u7c7b\u4f3c\u7684.cpp \u6587\u4ef6\uff0c\u5982\u4f55\u8bbe\u8ba1\uff1f\u4e00\u4e2a sfc \u4e3b\u8981\u5305\u542b\u4e09\u4e2a\u6a21\u5757",n.a.createElement("ul",null,n.a.createElement("li",null,"template"),n.a.createElement("li",null,"script"),n.a.createElement("li",null,"style")))),n.a.createElement("p",null,"\u8981\u5206\u522b\u5c06\u8fd9\u4e09\u90e8\u5206\uff0c\u8f6c\u6362\u6210 js \u5e76\u7ec4\u5408\u6210\u4e00\u4e2a Vue \u5bf9\u8c61\uff0c\u7f16\u8bd1\u6210 js \u5bf9\u8c61\u5f62\u5f0f\u7684 Vue \u7ec4\u4ef6\u5bf9\u8c61"),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u50cf\u662f\u5feb\u5e94\u7528\u91cc\u7684 ux \u6587\u4ef6\u4ee5\u53ca\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u91cc\u7684 wxml \u90fd\u662f\u4e00\u6837\u7684\u5957\u8def\u8bf4\u5230\u5e95\u8fd8\u662f\u8fd0\u7528 nodejs \u64cd\u4f5c\u6587\u4ef6\u7684\u80fd\u529b\uff0c\u5bf9\u6587\u4ef6\u8fdb\u884c\u589e\u5220\u6539\uff0c\u7136\u540e\u62fc\u63a5\u6210 js \u5bf9\u8c61\u7684\u65b9\u5f0f\u7ec4\u6210 vue \u7ec4\u4ef6")),n.a.createElement("p",null,"\u8fd9\u91cc\u4e3b\u8981\u8fd0\u7528\u5230@vue/compiler-sfc \u8fd9\u4e2a\u5e93\uff0c\u4e13\u95e8\u7528\u4e8e Vue \u6587\u4ef6\u7684\u9884\u7f16\u8bd1, \u53f3\u5927\u4f6c\u5c31\u662f\u592a\u5389\u5bb3\u4e86\uff0cvue \u751f\u6001\u7684\u6bcf\u4e00\u4e2a\u7ec6\u8282\u90fd\u80fd\u5355\u72ec\u6210 package"),n.a.createElement("h2",{id:"vue-\u6587\u4ef6\u7f16\u8bd1\u6574\u4f53\u6d41\u7a0b"},n.a.createElement(c["AnchorLink"],{to:"#vue-\u6587\u4ef6\u7f16\u8bd1\u6574\u4f53\u6d41\u7a0b","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"vue \u6587\u4ef6\u7f16\u8bd1\u6574\u4f53\u6d41\u7a0b"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u5229\u7528@vue/compiler-sfc \u7684\u9884\u7f16\u8bd1\u80fd\u529b\uff0c\u5bf9 vue \u6587\u4ef6\u89e3\u6790\uff0c\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9"),n.a.createElement("li",null,"\u7f16\u8bd1 script, \u5904\u7406 script setup \u4ee3\u7801\u4ee5\u53ca\u5408\u5e76 script\uff0c\u5904\u7406 css \u53d8\u91cf\u6ce8\u5165"),n.a.createElement("li",null,"\u7f16\u8bd1 template,\u7f16\u8bd1 template\uff0c\u76ee\u7684\u662f\u5c06 template \u8f6c\u6210 render \u51fd\u6570"),n.a.createElement("li",null,"\u7ec4\u5408 script \u548c render \u51fd\u6570"),n.a.createElement("li",null,"\u5229\u7528 esbuild \u6253\u5305\u4ee3\u7801"),n.a.createElement("li",null,"\u7f16\u8bd1 style \u4ea7\u7269")),n.a.createElement("h2",{id:"\u53c2\u8003\u5927\u4f6c"},n.a.createElement(c["AnchorLink"],{to:"#\u53c2\u8003\u5927\u4f6c","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003\u5927\u4f6c"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(c["Link"],{to:"https://mp.weixin.qq.com/s/buEAaIpiP57MP6dEjODDzQ"},"\u6ca1\u60f3\u5230\u8fd9\u4e48\u7b80\u5355\uff01\u624b\u628a\u624b\u6559\u4f60\u5904\u7406 Vue \u6587\u4ef6\u5e76\u6e32\u67d3\u5230\u9875\u9762~")),n.a.createElement("li",null,n.a.createElement(c["Link"],{to:"https://www.php.cn/js-tutorial-482802.html"},"node \u7aef\u8c03\u8bd5 js")))))}));l["default"]=e=>{var l=n.a.useContext(c["context"]),t=l.demos;return n.a.useEffect((()=>{var l;null!==e&&void 0!==e&&null!==(l=e.location)&&void 0!==l&&l.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(r,{demos:t})}}}]);