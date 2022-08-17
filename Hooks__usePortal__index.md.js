(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"9kvl":function(e,n,t){"use strict";var a=t("FfOG");t.d(n,"a",(function(){return a["b"]}));t("bCY9")},"L/s7":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),r=t("dEAq"),l=t("Zxc8"),c=t("H1Ra"),d=o.a.memo((e=>{var n=e.demos,t=n["hooks-useportal"].component;return o.a.createElement(o.a.Fragment,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"demo"},o.a.createElement(r["AnchorLink"],{to:"#demo","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"Demo"),o.a.createElement("p",null,o.a.createElement(r["Link"],{to:"https://www.30secondsofcode.org/react/s/use-portal"},"usePortal"))),o.a.createElement(l["default"],n["hooks-useportal"].previewerProps,o.a.createElement(t,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"code"},o.a.createElement(r["AnchorLink"],{to:"#code","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"Code"),o.a.createElement(c["a"],{code:"import React from 'react';\nimport usePortal from './usePortal';\nlet container: Element;\nconst TestPortal = () => {\n  if (!container) {\n    container = document.createElement('div');\n    container.setAttribute('id', 'cpp-ui');\n    document.body.appendChild(container);\n  } else {\n    document.body.appendChild(container);\n  }\n  const Portal = container && usePortal(container);\n  return (\n    <>\n      <h2>\n        \u5143\u7d20\u67e5\u770b<code>document.getElementById('cpp-ui')</code>\n      </h2>\n      <Portal> Hello UsePortal</Portal>\n    </>\n  );\n};\nexport default TestPortal;",lang:"ts"}),o.a.createElement("h2",{id:"source-code"},o.a.createElement(r["AnchorLink"],{to:"#source-code","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"Source Code"),o.a.createElement(c["a"],{code:"import { useEffect, useCallback, useState } from 'react';\nimport type { ReactNode, ReactPortal } from 'react';\nimport { createPortal, unmountComponentAtNode } from 'react-dom';\n\ninterface UsePortal {\n  render: ({ children }: { children: ReactNode | null }) => ReactPortal | null;\n  remove: () => null | boolean;\n}\nconst useProtal = (el: Element) => {\n  if (!el) {\n    return () => null;\n  }\n  const [portal, setPortal] = useState<UsePortal>({\n    render: () => null,\n    remove: () => null,\n  });\n\n  const CreatePortal = useCallback((el: Element) => {\n    const Portal = ({ children }: any) => createPortal(children, el);\n    const remove = () => unmountComponentAtNode(el);\n    return {\n      render: Portal,\n      remove,\n    };\n  }, []);\n\n  useEffect(() => {\n    if (el && portal) {\n      portal.remove();\n    }\n    const newPortal = el && CreatePortal(el);\n    //@ts-ignore\n    setPortal(newPortal);\n    return () => {\n      el && newPortal.remove();\n      el.parentNode && el.parentNode.removeChild(el);\n    };\n  }, [el]);\n  return portal && portal.render;\n};\nexport default useProtal;",lang:"ts"}))))}));n["default"]=e=>{var n=o.a.useContext(r["context"]),t=n.demos;return o.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(d,{demos:t})}}}]);