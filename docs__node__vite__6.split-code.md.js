(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[118],{"L+I/":function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),c=t("dEAq"),r=t("H1Ra"),i=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u524d\u7f6e\u77e5\u8bc6\u70b9"},a.a.createElement(c["AnchorLink"],{to:"#\u524d\u7f6e\u77e5\u8bc6\u70b9","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u524d\u7f6e\u77e5\u8bc6\u70b9"),a.a.createElement("ul",null,a.a.createElement("li",null,"bundle \u6307\u7684\u662f\u6574\u4f53\u7684\u6253\u5305\u4ea7\u7269\uff0c\u5305\u542b JS \u548c\u5404\u79cd\u9759\u6001\u8d44\u6e90\u3002"),a.a.createElement("li",null,"chunk \u6307\u7684\u662f\u6253\u5305\u540e\u7684 JS \u6587\u4ef6\uff0c\u662f bundle \u7684\u5b50\u96c6\u3002"),a.a.createElement("li",null,"vendor \u662f\u6307\u7b2c\u4e09\u65b9\u5305\u7684\u6253\u5305\u4ea7\u7269(node_modules)\uff0c\u662f\u4e00\u79cd\u7279\u6b8a\u7684 chunk\u3002")),a.a.createElement("p",null,"code split \u9700\u8981\u89e3\u51b3\u7684\u4efb\u52a1"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u65e0\u6cd5\u505a\u5230",a.a.createElement("strong",null,"\u6309\u9700\u52a0\u8f7d"),"\uff0c\u5373\u4f7f\u662f\u5f53\u524d\u9875\u9762\u4e0d\u9700\u8981\u7684\u4ee3\u7801\u4e5f\u4f1a\u8fdb\u884c\u52a0\u8f7d"),a.a.createElement("li",null,"\u7ebf\u4e0a\u7f13\u5b58\u590d\u7528\u7387\u6781\u4f4e\uff0c\u6539\u52a8\u4e00\u884c\u4ee3\u7801\u5373\u53ef\u5bfc\u81f4\u6574\u4e2a ",a.a.createElement("strong",null,"bundle")," \u4ea7\u7269\u7f13\u5b58\u5931\u6548")),a.a.createElement("p",null,"\u9996\u5148\u8bf4\u7b2c\u4e00\u4e2a\u95ee\u9898\uff0c\u4e00\u822c\u800c\u8a00\uff0c\u4e00\u4e2a\u524d\u7aef\u9875\u9762\u4e2d\u7684 JS \u4ee3\u7801\u53ef\u4ee5\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206: ",a.a.createElement("strong",null,"Initital Chunk \u548c Async Chunk"),"\uff0c\u524d\u8005\u6307\u9875\u9762\u9996\u5c4f\u6240\u9700\u8981\u7684 JS \u4ee3\u7801\uff0c\u800c\u540e\u8005\u5f53\u524d\u9875\u9762\u5e76\u4e0d\u4e00\u5b9a\u9700\u8981\uff0c\u4e00\u4e2a\u5178\u578b\u7684\u4f8b\u5b50\u5c31\u662f \u8def\u7531\u7ec4\u4ef6\uff0c\u4e0e\u5f53\u524d\u8def\u7531\u65e0\u5173\u7684\u7ec4\u4ef6\u5e76\u4e0d\u7528\u52a0\u8f7d\u3002\u800c\u9879\u76ee\u88ab\u6253\u5305\u6210",a.a.createElement("strong",null,"\u5355 bundle")," \u4e4b\u540e\uff0c\u65e0\u8bba\u662f Initial Chunk \u8fd8\u662f Async Chunk\uff0c\u90fd\u4f1a\u6253\u5305\u8fdb\u540c\u4e00\u4e2a\u4ea7\u7269\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u6d4f\u89c8\u5668\u52a0\u8f7d\u4ea7\u7269\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u4f1a\u5c06\u4e24\u8005\u4e00\u8d77\u52a0\u8f7d\uff0c\u5bfc\u81f4\u8bb8\u591a\u5197\u4f59\u7684\u52a0\u8f7d\u8fc7\u7a0b\uff0c\u4ece\u800c\u5f71\u54cd\u9875\u9762\u6027\u80fd\u3002\u800c\u901a\u8fc7 Code Splitting \u6211\u4eec\u53ef\u4ee5\u5c06\u6309\u9700\u52a0\u8f7d\u7684\u4ee3\u7801\u62c6\u5206\u51fa\u5355\u72ec\u7684 chunk\uff0c\u8fd9\u6837\u5e94\u7528\u5728\u9996\u5c4f\u52a0\u8f7d\u65f6\u53ea\u9700\u8981\u52a0\u8f7d Initial Chunk \u5373\u53ef\uff0c\u907f\u514d\u4e86\u5197\u4f59\u7684\u52a0\u8f7d\u8fc7\u7a0b\uff0c\u4f7f\u9875\u9762\u6027\u80fd\u5f97\u5230\u63d0\u5347\u3002"),a.a.createElement("p",null,"\u5176\u6b21\uff0c\u7ebf\u4e0a\u7684\u7f13\u5b58\u547d\u4e2d\u7387\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u6027\u80fd\u8861\u91cf\u6807\u51c6\u3002\u5bf9\u4e8e\u7ebf\u4e0a\u7ad9\u70b9\u800c\u8a00\uff0c\u670d\u52a1\u7aef\u4e00\u822c\u5728\u54cd\u5e94\u8d44\u6e90\u65f6\u52a0\u4e0a\u4e00\u4e9b HTTP \u54cd\u5e94\u5934\uff0c\u6700\u5e38\u89c1\u7684\u54cd\u5e94\u5934\u4e4b\u4e00\u5c31\u662f cache-control\uff0c\u5b83\u53ef\u4ee5\u6307\u5b9a\u6d4f\u89c8\u5668\u7684\u5f3a\u7f13\u5b58\uff0c\u6bd4\u5982\u8bbe\u7f6e\u4e3a\u4e0b\u9762\u8fd9\u6837:"),a.a.createElement(r["a"],{code:"cache-control: max-age=315360000",lang:"js"}),a.a.createElement("h2",{id:"vite-\u9ed8\u8ba4\u7684\u62c6\u5305\u7b56\u7565"},a.a.createElement(c["AnchorLink"],{to:"#vite-\u9ed8\u8ba4\u7684\u62c6\u5305\u7b56\u7565","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"vite \u9ed8\u8ba4\u7684\u62c6\u5305\u7b56\u7565"),a.a.createElement("ul",null,a.a.createElement("li",null,"css \u81ea\u52a8\u4ee3\u7801\u5206\u5272")),a.a.createElement("p",null,"Vite \u5b9e\u73b0\u4e86",a.a.createElement("strong",null,"\u81ea\u52a8 CSS \u4ee3\u7801\u5206\u5272"),"\u7684\u80fd\u529b\uff0c\u5373\u5b9e\u73b0\u4e00\u4e2a chunk \u5bf9\u5e94\u4e00\u4e2a css \u6587\u4ef6\uff0c\u6bd4\u5982\u4e0a\u9762\u4ea7\u7269\u4e2d index.js \u5bf9\u5e94\u4e00\u4efd index.css\uff0c\u800c\u6309\u9700\u52a0\u8f7d\u7684 chunk Danamic.js \u4e5f\u5bf9\u5e94\u5355\u72ec\u7684\u4e00\u4efd Danamic.css \u6587\u4ef6\uff0c\u4e0e JS \u6587\u4ef6\u7684\u4ee3\u7801\u5206\u5272\u540c\u7406\uff0c\u8fd9\u6837\u505a\u4e5f\u80fd\u63d0\u5347 CSS \u6587\u4ef6\u7684\u7f13\u5b58\u590d\u7528\u7387\u3002"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,"Vite \u57fa\u4e8e Rollup \u7684 ",a.a.createElement("strong",null,"manualChunksAPI")," \u5b9e\u73b0\u4e86\u5e94\u7528\u62c6\u5305\u7684\u7b56\u7565"),a.a.createElement("p",null,"1.\u5bf9\u4e8e Initital Chunk \u800c\u8a00\uff0c\u4e1a\u52a1\u4ee3\u7801\u548c\u7b2c\u4e09\u65b9\u5305\u4ee3\u7801\u5206\u522b\u6253\u5305\u4e3a\u5355\u72ec\u7684 chunk\uff0c\u5728\u4e0a\u8ff0\u7684\u4f8b\u5b50\u4e2d\u5206\u522b\u5bf9\u5e94 index.js \u548c vendor.js\u3002\u9700\u8981\u8bf4\u660e\u7684\u662f\uff0c\u8fd9\u662f Vite 2.9 \u7248\u672c\u4e4b\u524d\u7684\u505a\u6cd5\uff0c\u800c\u5728 Vite 2.9 \u53ca\u4ee5\u540e\u7684\u7248\u672c\uff0c\u9ed8\u8ba4\u6253\u5305\u7b56\u7565\u66f4\u52a0\u7b80\u5355\u7c97\u66b4\uff0c\u5c06\u6240\u6709\u7684 js \u4ee3\u7801\u5168\u90e8\u6253\u5305\u5230 index.js \u4e2d\u3002"),a.a.createElement("p",null,"2.\u5bf9\u4e8e Async Chunk \u800c\u8a00 \uff0c\u52a8\u6001 import \u7684\u4ee3\u7801\u4f1a\u88ab\u62c6\u5206\u6210\u5355\u72ec\u7684 chunk\uff0c\u5982\u4e0a\u8ff0\u7684 Dynacmic \u7ec4\u4ef6\u3002"))),a.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u62c6\u5305\u7b56\u7565"},a.a.createElement(c["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u62c6\u5305\u7b56\u7565","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u62c6\u5305\u7b56\u7565"),a.a.createElement("p",null,"\u9488\u5bf9\u66f4\u7ec6\u7c92\u5ea6\u7684\u62c6\u5305\uff0cVite \u7684\u5e95\u5c42\u6253\u5305\u5f15\u64ce Rollup \u63d0\u4f9b\u4e86 ",a.a.createElement("strong",null,"manualChunks"),"\uff0c\u8ba9\u6211\u4eec\u80fd\u81ea\u5b9a\u4e49\u62c6\u5305\u7b56\u7565\uff0c\u5b83\u5c5e\u4e8e Vite \u914d\u7f6e\u7684\u4e00\u90e8\u5206\uff0c\u793a\u4f8b\u5982\u4e0b:"),a.a.createElement(r["a"],{code:"export default {\n  build: {\n    rollupOptions: {\n      output: {\n        manualChunks: {\n          // \u5c06react\u76f8\u5173\u7684\u5355\u72ec\u6253\u5305\n          'react-cpp': ['react', 'react-dom'],\n          // \u5c06\u7ec4\u4ef6\u5e93\u7684\u4ee3\u7801\u6253\u5305\n          library: ['antd', '@arco-design/web-react'],\n        },\n      },\n    },\n  },\n};",lang:"js"}),a.a.createElement("p",null,"\u53ef\u80fd\u4f1a\u51fa\u73b0\u5faa\u73af\u5f15\u7528\u7684\u9519\u8bef\uff0c\u5bfc\u81f4\u6a21\u5757\u7684\u95f4\u63a5\u4f9d\u8d56\u6ca1\u6709\u6253\u8fdb\u53bb"),a.a.createElement("h2",{id:"\u7ec8\u6781\u65b9\u6848-vite-plugin-chunk-split"},a.a.createElement(c["AnchorLink"],{to:"#\u7ec8\u6781\u65b9\u6848-vite-plugin-chunk-split","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u7ec8\u6781\u65b9\u6848 vite-plugin-chunk-split"),a.a.createElement(r["a"],{code:"import { chunkSplitPlugin } from 'vite-plugin-chunk-split';\n\nexport default {\n  chunkSplitPlugin({\n    // \u6307\u5b9a\u62c6\u5305\u7b56\u7565\n    customSplitting: {\n      // 1. \u652f\u6301\u586b\u5305\u540d\u3002`react` \u548c `react-dom` \u4f1a\u88ab\u6253\u5305\u5230\u4e00\u4e2a\u540d\u4e3a`render-vendor`\u7684 chunk \u91cc\u9762(\u5305\u62ec\u5b83\u4eec\u7684\u4f9d\u8d56\uff0c\u5982 object-assign)\n      'react-vendor': ['react', 'react-dom'],\n      // 2. \u652f\u6301\u586b\u6b63\u5219\u8868\u8fbe\u5f0f\u3002src \u4e2d components \u548c utils \u4e0b\u7684\u6240\u6709\u6587\u4ef6\u88ab\u4f1a\u88ab\u6253\u5305\u4e3a`component-util`\u7684 chunk \u4e2d\n      'components-util': [/src\\/components/, /src\\/utils/]\n    }\n  })\n}",lang:"ts"}),a.a.createElement("p",null,"\u76f8\u6bd4\u4e8e\u624b\u52a8\u64cd\u4f5c\u4f9d\u8d56\u5173\u7cfb\uff0c\u4f7f\u7528\u63d2\u4ef6\u53ea\u9700\u51e0\u884c\u914d\u7f6e\u5c31\u80fd\u5b8c\u6210\uff0c\u975e\u5e38\u65b9\u4fbf\u3002\u5f53\u7136\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u8fd8\u53ef\u4ee5\u652f\u6301\u591a\u79cd\u6253\u5305\u7b56\u7565\uff0c\u5305\u62ec unbundle \u6a21\u5f0f\u6253\u5305\uff0c\u4f60\u53ef\u4ee5\u53bb \u4f7f\u7528\u6587\u6863 \u63a2\u7d22\u66f4\u591a\u4f7f\u7528\u59ff\u52bf")))}));n["default"]=e=>{var n=a.a.useContext(c["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(i,{demos:t})}}}]);