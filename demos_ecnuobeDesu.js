(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"+3ct":function(e,t,a){"use strict";a.r(t);var n=a("tJVT"),c=a("q1tI"),r=a.n(c);function u(e,t){var a=Object(c["useState"])(e),r=Object(n["a"])(a,2),u=r[0],i=r[1];return Object(c["useEffect"])((()=>{var a=setTimeout((()=>{i(e)}),t);return()=>{clearTimeout(a)}}),[e,t]),u}var i=u;function l(){var e=Object(c["useState"])(""),t=Object(n["a"])(e,2),a=t[0],u=t[1],l=Object(c["useState"])([]),s=Object(n["a"])(l,2),b=s[0],v=s[1],m=Object(c["useState"])(!1),d=Object(n["a"])(m,2),j=d[0],O=d[1],f=i(a,500);return Object(c["useEffect"])((()=>{f?(O(!0),o(f).then((e=>{v(e),O(!1)}))):v([])}),[f]),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Search Marvel Comics",onChange:e=>u(e.target.value)}),j&&r.a.createElement("div",null,"Searching ..."),b.map((e=>r.a.createElement("div",{key:e.id},r.a.createElement("h4",null,null===e||void 0===e?void 0:e.title)))))}function o(e){return new Promise(((t,a)=>{setTimeout((()=>{t([e])}),300)}))}t["default"]=l}}]);