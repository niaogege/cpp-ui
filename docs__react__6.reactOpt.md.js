(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[131],{Enq3:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=a("dEAq"),c=a("H1Ra"),o=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("p",null,"\u7b80\u5386\u4e0a\u5199\u719f\u7ec3\u8fd0\u7528 react \u6846\u67b6\uff0c\u90a3\u57fa\u672c\u4e0a react \u6027\u80fd\u4f18\u5316\u662f\u9003\u4e0d\u6389\u7684\uff0c\u5982\u679c\u8fdb\u884c\u6df1\u5ea6\u6027\u80fd\u4f18\u5316\u4e14\u5728\u5b9e\u8df5\u4e2d\u8fd0\u7528\u5462\uff0c\u505a\u597d\u603b\u7ed3\u548c\u601d\u8003\uff0c\u4e14\u5148\u770b\u770b\u5927\u4f6c\u4eec\u600e\u6837\u53bb\u505a\u7684\u3002\u3002\u3002"),l.a.createElement("h2",{id:"\u6e32\u67d3\u8fc7\u7a0b"},l.a.createElement(r["AnchorLink"],{to:"#\u6e32\u67d3\u8fc7\u7a0b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6e32\u67d3\u8fc7\u7a0b"),l.a.createElement("p",null,"\u4e86\u89e3 React \u6e32\u67d3\u7684\u57fa\u672c\u539f\u7406\u3002\u5728 v16 \u540e React \u7ec4\u4ef6\u6e32\u67d3\u4f1a\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff0c\u5373 render \u548c commit \u9636\u6bb5\u3002"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"render \u9636\u6bb5")," \u51b3\u5b9a\u9700\u8981\u8fdb\u884c\u54ea\u4e9b\u53d8\u66f4\u3002\u8fd9\u4e2a\u9636\u6bb5 React \u4f1a\u8c03\u7528 ",l.a.createElement("strong",null,"render")," \u51fd\u6570\uff0c\u5e76\u5c06\u7ed3\u679c\u548c\u4e0a\u4e00\u6b21 render \u7684\u7ed3\u679c\u8fdb\u884c diff, \u8ba1\u7b97\u51fa\u9700\u8981\u8fdb\u884c\u53d8\u66f4\u7684\u64cd\u4f5c\u961f\u5217"),l.a.createElement("li",null,l.a.createElement("strong",null,"commit \u9636\u6bb5")," \u6216\u8005\u79f0\u4e3a\u63d0\u4ea4\u9636\u6bb5, \u5728\u8fd9\u4e2a\u9636\u6bb5\u4f1a\u6267\u884c render \u9636\u6bb5 diff \u51fa\u6765\u7684\u53d8\u66f4\u8bf7\u6c42\u3002\u6bd4\u5982 DOM \u63d2\u5165\u3001\u66f4\u65b0\u3001\u5220\u9664\u3001\u6392\u5e8f\u7b49\u7b49\u3002\u5728\u8fd9\u4e2a\u9636\u6bb5 React \u8fd8\u4f1a\u8c03\u7528 ",l.a.createElement("strong",null,"componentDidMount \u548c componentDidUpdate")," \u751f\u547d\u5468\u671f\u51fd\u6570.")),l.a.createElement("h2",{id:"\u6982\u62ec\u8d77\u6765"},l.a.createElement(r["AnchorLink"],{to:"#\u6982\u62ec\u8d77\u6765","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6982\u62ec\u8d77\u6765"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u51cf\u5c11\u91cd\u65b0 Render \u7684\u6b21\u6570"),l.a.createElement("li",null,"\u51cf\u5c11\u6e32\u67d3\u7684\u8282\u70b9"),l.a.createElement("li",null,"\u964d\u4f4e\u6e32\u67d3\u8ba1\u7b97\u91cf"),l.a.createElement("li",null,"\u5408\u7406\u8bbe\u8ba1\u7ec4\u4ef6")),l.a.createElement("h2",{id:"\u51cf\u5c11\u91cd\u65b0-render-\u7684\u6b21\u6570"},l.a.createElement(r["AnchorLink"],{to:"#\u51cf\u5c11\u91cd\u65b0-render-\u7684\u6b21\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u51cf\u5c11\u91cd\u65b0 Render \u7684\u6b21\u6570"),l.a.createElement("h3",{id:"purecomponent"},l.a.createElement(r["AnchorLink"],{to:"#purecomponent","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"PureComponent"),l.a.createElement("h3",{id:"shouldcomponentupdate"},l.a.createElement(r["AnchorLink"],{to:"#shouldcomponentupdate","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"ShouldComponentUpdate"),l.a.createElement("p",null,"\u53ef\u4ee5\u5229\u7528\u6b64\u4e8b\u4ef6\u6765\u51b3\u5b9a\u4f55\u65f6\u9700\u8981\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u3002\u5982\u679c\u7ec4\u4ef6 Props \u66f4\u6539\u6216\u8c03\u7528 setState\uff0c\u5219\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a Boolean \u503c\uff0c\u4e3a true \u5219\u4f1a\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\uff0c\u53cd\u4e4b\u5219\u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u3002\u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\u7ec4\u4ef6\u90fd\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u4e8b\u4ef6\u4e2d\u653e\u7f6e\u4e00\u4e2a\u81ea\u5b9a\u4e49\u903b\u8f91\uff0c\u4ee5\u51b3\u5b9a\u662f\u5426\u8c03\u7528\u7ec4\u4ef6\u7684 Render \u51fd\u6570"),l.a.createElement("h3",{id:"reactmemo"},l.a.createElement(r["AnchorLink"],{to:"#reactmemo","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"React.memo"),l.a.createElement("p",null,"React.memo \u4ec5\u68c0\u67e5 Props \u53d8\u66f4\u3002\u5982\u679c\u51fd\u6570\u7ec4\u4ef6\u88ab React.memo \u5305\u88f9\uff0c\u4e14\u5176\u5b9e\u73b0\u4e2d\u62e5\u6709 useState\uff0cuseReducer \u6216 useContext \u7684 Hook\uff0c\u5f53 State \u6216 Context \u53d1\u751f\u53d8\u5316\u65f6\uff0c\u5b83\u4ecd\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002"),l.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5176\u53ea\u4f1a\u5bf9\u590d\u6742\u5bf9\u8c61\u505a\u6d45\u5c42\u5bf9\u6bd4\uff0c\u5982\u679c\u4f60\u60f3\u8981\u63a7\u5236\u5bf9\u6bd4\u8fc7\u7a0b\uff0c\u90a3\u4e48\u8bf7\u5c06\u81ea\u5b9a\u4e49\u7684\u6bd4\u8f83\u51fd\u6570\u901a\u8fc7\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165\u6765\u5b9e\u73b0\u3002"),l.a.createElement(c["a"],{code:"function MyComponent(props) {\n  /* \u4f7f\u7528 props \u6e32\u67d3 */\n}\nfunction areEqual(prevProps, nextProps) {\n  /*\n  \u5982\u679c\u628a nextProps \u4f20\u5165 render \u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\u4e0e\n  \u5c06 prevProps \u4f20\u5165 render \u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\u4e00\u81f4\u5219\u8fd4\u56de true\uff0c\u4e0d\u6e32\u67d3\n  \u5426\u5219\u8fd4\u56de false \u91cd\u65b0\u6e32\u67d3\n  */\n}\nexport default React.memo(MyComponent, areEqual);",lang:"js"}),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u4e0e Class \u7ec4\u4ef6\u4e2d shouldComponentUpdate() \u65b9\u6cd5\u4e0d\u540c\u7684\u662f\uff0c\u5982\u679c Props \u76f8\u7b49\uff0careEqual \u4f1a\u8fd4\u56de true, \u5219\u4e0d\u91cd\u65b0\u6e32\u67d3\uff1b\u5982\u679c Props \u4e0d\u76f8\u7b49\uff0c\u5219\u8fd4\u56de false\uff0c \u91cd\u65b0\u6e32\u67d3\u3002\u8fd9\u4e0e shouldComponentUpdate \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u76f8\u53cd\u3002")),l.a.createElement("h3",{id:"\u5408\u7406\u4f7f\u7528-context"},l.a.createElement(r["AnchorLink"],{to:"#\u5408\u7406\u4f7f\u7528-context","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5408\u7406\u4f7f\u7528 Context"),l.a.createElement("p",null,"Context \u63d0\u4f9b\u4e86\u4e00\u4e2a\u65e0\u9700\u4e3a\u6bcf\u5c42\u7ec4\u4ef6\u624b\u52a8\u6dfb\u52a0 Props\uff0c\u5c31\u80fd\u5728\u7ec4\u4ef6\u6811\u95f4\u8fdb\u884c\u6570\u636e\u4f20\u9012\u7684\u65b9\u6cd5\u3002\u6b63\u662f\u56e0\u4e3a\u5176\u8fd9\u4e2a\u7279\u70b9\uff0c\u5b83\u662f\u53ef\u4ee5\u7a7f\u900f React.memo \u6216\u8005 shouldComponentUpdate \u7684\u6bd4\u5bf9\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u65e6 Context \u7684 Value \u53d8\u52a8\uff0c\u6240\u6709\u4f9d\u8d56\u8be5 Context \u7684\u7ec4\u4ef6\u4f1a\u5168\u90e8 forceUpdate.\u8fd9\u4e2a\u548c Mobx \u548c Vue \u7684\u54cd\u5e94\u5f0f\u7cfb\u7edf\u4e0d\u540c\uff0cContext API \u5e76\u4e0d\u80fd\u7ec6\u7c92\u5ea6\u5730\u68c0\u6d4b\u54ea\u4e9b\u7ec4\u4ef6\u4f9d\u8d56\u54ea\u4e9b\u72b6\u6001\u3002"),l.a.createElement("h2",{id:"\u51cf\u5c11\u6e32\u67d3\u7684\u8282\u70b9"},l.a.createElement(r["AnchorLink"],{to:"#\u51cf\u5c11\u6e32\u67d3\u7684\u8282\u70b9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u51cf\u5c11\u6e32\u67d3\u7684\u8282\u70b9"),l.a.createElement("h3",{id:"\u7ec4\u4ef6\u61d2\u52a0\u8f7d"},l.a.createElement(r["AnchorLink"],{to:"#\u7ec4\u4ef6\u61d2\u52a0\u8f7d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7ec4\u4ef6\u61d2\u52a0\u8f7d"),l.a.createElement("p",null,"\u7ec4\u4ef6\u61d2\u52a0\u8f7d\u53ef\u4ee5\u8ba9 React \u5e94\u7528\u5728\u771f\u6b63\u9700\u8981\u5c55\u793a\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u65f6\u5019\u518d\u53bb\u5c55\u793a\uff0c\u53ef\u4ee5\u6bd4\u8f83\u6709\u6548\u7684\u51cf\u5c11\u6e32\u67d3\u7684\u8282\u70b9\u6570\u63d0\u9ad8\u9875\u9762\u7684\u52a0\u8f7d\u901f\u5ea6"),l.a.createElement("p",null,"React \u5b98\u65b9\u5728 16.6 \u7248\u672c\u540e\u5f15\u5165\u4e86\u65b0\u7684\u7279\u6027\uff1aReact.lazy \u548c React.Suspense,\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u7684\u914d\u5408\u4f7f\u7528\u53ef\u4ee5\u6bd4\u8f83\u65b9\u4fbf\u8fdb\u884c\u7ec4\u4ef6\u61d2\u52a0\u8f7d\u7684\u5b9e\u73b0\uff1b"),l.a.createElement("h3",{id:"\u865a\u62df\u5217\u8868"},l.a.createElement(r["AnchorLink"],{to:"#\u865a\u62df\u5217\u8868","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u865a\u62df\u5217\u8868"),l.a.createElement("p",null,"\u865a\u62df\u5217\u8868\u662f\u4e00\u79cd\u6839\u636e\u6eda\u52a8\u5bb9\u5668\u5143\u7d20\u7684\u53ef\u89c6\u533a\u57df\u6765\u6e32\u67d3\u957f\u5217\u8868\u6570\u636e\u4e2d\u67d0\u4e00\u4e2a\u90e8\u5206\u6570\u636e\u7684\u6280\u672f\uff0c\u5728\u5f00\u53d1\u4e00\u4e9b\u9879\u76ee\u4e2d\uff0c\u4f1a\u9047\u5230\u4e00\u4e9b\u4e0d\u662f\u76f4\u63a5\u5206\u9875\u6765\u52a0\u8f7d\u5217\u8868\u6570\u636e\u7684\u573a\u666f\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u4ee5\u8003\u8651\u7ed3\u5408\u865a\u62df\u5217\u8868\u6765\u8fdb\u884c\u4f18\u5316\uff0c\u53ef\u4ee5\u8fbe\u5230\u6839\u636e\u5bb9\u5668\u5143\u7d20\u7684",l.a.createElement("strong",null,"\u9ad8\u5ea6"),"\u4ee5\u53ca\u5217\u8868\u9879\u5143\u7d20\u7684\u9ad8\u5ea6\u6765\u663e\u793a\u957f\u5217\u8868\u6570\u636e\u4e2d\u7684\u67d0\u4e00\u4e2a\u90e8\u5206\uff0c\u800c\u4e0d\u662f\u53bb\u5b8c\u6574\u5730\u6e32\u67d3\u957f\u5217\u8868\uff0c\u4ee5\u63d0\u9ad8\u65e0\u9650\u6eda\u52a8\u7684\u6027\u80fd\u3002"),l.a.createElement("h2",{id:"\u964d\u4f4e\u6e32\u67d3\u8ba1\u7b97\u91cf"},l.a.createElement(r["AnchorLink"],{to:"#\u964d\u4f4e\u6e32\u67d3\u8ba1\u7b97\u91cf","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u964d\u4f4e\u6e32\u67d3\u8ba1\u7b97\u91cf"),l.a.createElement("h3",{id:"usememo"},l.a.createElement(r["AnchorLink"],{to:"#usememo","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useMemo"),l.a.createElement("h3",{id:"\u904d\u5386\u5c55\u793a\u89c6\u56fe\u65f6\u4f7f\u7528-key"},l.a.createElement(r["AnchorLink"],{to:"#\u904d\u5386\u5c55\u793a\u89c6\u56fe\u65f6\u4f7f\u7528-key","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u904d\u5386\u5c55\u793a\u89c6\u56fe\u65f6\u4f7f\u7528 key"),l.a.createElement("h2",{id:"\u5408\u7406\u8bbe\u8ba1\u7ec4\u4ef6"},l.a.createElement(r["AnchorLink"],{to:"#\u5408\u7406\u8bbe\u8ba1\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5408\u7406\u8bbe\u8ba1\u7ec4\u4ef6"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7b80\u5316 Props"),l.a.createElement("li",null,"\u7b80\u5316 State"),l.a.createElement("li",null,"\u51cf\u5c11\u7ec4\u4ef6\u5d4c\u5957\u4e00\u822c\u4e0d\u5fc5\u8981\u7684\u8282\u70b9\u5d4c\u5957\u90fd\u662f\u6ee5\u7528\u9ad8\u9636\u7ec4\u4ef6/ RenderProps \u5bfc\u81f4\u7684\u3002\u6240\u4ee5\u8fd8\u662f\u90a3\u53e5\u8bdd\u2018\u53ea\u6709\u5728\u5fc5\u8981\u65f6\u624d\u4f7f\u7528 xxx\u2019\u3002\u6709\u5f88\u591a\u79cd\u65b9\u5f0f\u6765\u4ee3\u66ff\u9ad8\u9636\u7ec4\u4ef6/ RenderProps\uff0c\u4f8b\u5982\u4f18\u5148\u4f7f\u7528 Props\u3001React Hooks")),l.a.createElement("h2",{id:"\u53c2\u8003"},l.a.createElement(r["AnchorLink"],{to:"#\u53c2\u8003","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"https://mp.weixin.qq.com/s/RG0ANLwfrhU_2_5nbhIEDw"},"React \u6027\u80fd\u4f18\u5316\u603b\u7ed3")),l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"https://mp.weixin.qq.com/s/_SafpFkho1omGWdvx6DMvg"},"React \u6027\u80fd\u4f18\u5316\u6307\u5357\u4e4b\u6027\u80fd\u5206\u6790\u4e0e 16 \u79cd\u4f18\u5316\u65b9\u6cd5\u5927\u603b\u7ed3")))))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),a=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:a})}}}]);