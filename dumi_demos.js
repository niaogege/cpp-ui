(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[170],{"9kvl":function(e,t,n){"use strict";var r=n("FfOG");n.d(t,"a",(function(){return r["b"]}));n("bCY9")},F4QJ:function(e,t,n){"use strict";function r(){const e=c(n("q1tI"));return r=function(){return e},e}function o(){const e=n("dEAq");return o=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const a=e=>e.render();var p=(e,t)=>{let n=[];const c=e.match.params.uuid,i=void 0===e.location.query.wrapper,s=t[c];if(s){const t=u(u({},s.previewerProps),{},{hideActions:(s.previewerProps.hideActions||[]).concat(["EXTERNAL"])});void 0!==e.location.query.capture&&(t.motions=(t.motions||[]).slice(),t.motions.unshift("autoplay"),t.motions.every((e=>!e.startsWith("capture")))&&t.motions.push("capture:[id|=root]")),n=i?[r().default.createElement(a,{render:()=>((0,o().useMotions)(t.motions||[],"undefined"!==typeof window?document.documentElement:null),r().default.createElement("div",{},r().default.createElement(s.component)))})]:[t,r().default.createElement(s.component)]}return n};t.default=p}}]);