(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[150],{FPbo:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),c=t("H1Ra"),s=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u6982\u5ff5"},l.a.createElement(r["AnchorLink"],{to:"#\u6982\u5ff5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6982\u5ff5"),l.a.createElement("p",null,"\u6761\u4ef6\u7c7b\u578b\u7684\u8bed\u6cd5\u5b9e\u9645\u4e0a\u5c31\u662f\u4e09\u5143\u8868\u8fbe\u5f0f\uff0c\u5373 ",l.a.createElement("code",null,"T extends U ? X : Y"),",\u5927\u81f4\u7ffb\u8bd1\u5c31\u662f \u5f53\u7c7b\u578b T \u6ee1\u8db3 U \u7c7b\u578b\u7684\u65f6\u5019\u8fd4\u56de X \u7c7b\u578b\u5426\u5219\u8fd4\u56de Y \u7c7b\u578b"),l.a.createElement(c["a"],{code:"type isSting<T> = T extends string ? true : false;\ntype GetSomeType<T extends string | number> = T extends string ? 'a' : 'b';\n\nlet someTypeOne: GetSomeType<string>; // someTypeone \u7c7b\u578b\u4e3a 'a'\n\nlet someTypeTwo: GetSomeType<number>; // someTypeone \u7c7b\u578b\u4e3a 'b'\n\nlet someTypeThree1: GetSomeType<string | number>; // what ?  'a' | 'b'",lang:"ts"}),l.a.createElement("p",null,"\u5206\u53d1\uff0c\u7ed3\u5408\u4e0a\u8fb9\u7684 Demo \u6765\u8bf4\u6240\u8c13\u7684\u5206\u53d1\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u5206\u522b\u4f7f\u7528 string \u548c number \u8fd9\u4e24\u4e2a\u7c7b\u578b\u8fdb\u5165 GetSomeType \u4e2d\u8fdb\u884c\u5224\u65ad\uff0c\u6700\u7ec8\u8fd4\u56de\u4e24\u6b21\u7c7b\u578b\u7ed3\u679c\u7ec4\u6210\u7684\u8054\u5408\u7c7b\u578b\u3002"),l.a.createElement(c["a"],{code:"// \u4f60\u53ef\u4ee5\u8fd9\u6837\u7406\u89e3\u5206\u53d1\n// \u4f2a\u4ee3\u7801\uff1aGetSomeType<string | number> = GetSomeType<string> | GetSomeType<number>\nlet someTypeThree2: GetSomeType<string | number>;",lang:"ts"}),l.a.createElement("p",null,"\u90a3\u4e48\uff0c\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f1a\u4ea7\u751f\u5206\u53d1(\u8ddf\u4e0b\u6587\u7684\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b\u4e00\u6837)\u5462\uff1f\u6ee1\u8db3\u5206\u53d1\u9700\u8981\u4e00\u5b9a\u7684\u6761\u4ef6\uff0c\u6211\u4eec\u6765\u4e00\u8d77\u770b\u770b\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5206\u53d1\u4e00\u5b9a\u662f\u9700\u8981\u4ea7\u751f\u5728 extends \u4ea7\u751f\u7684\u7c7b\u578b\u6761\u4ef6\u5224\u65ad\u4e2d\uff0c\u5e76\u4e14\u662f\u524d\u7f6e\u7c7b\u578b,\u8fd9\u79cd\u5c31\u4e0d\u884c",l.a.createElement("code",null,"T extends string | number ? 'a' : 'b'")),l.a.createElement("li",null,"\u8981\u6ee1\u8db3\u6240\u8c13\u7684",l.a.createElement("strong",null,"\u88f8\u7c7b\u578b"),"\u4e2d\u624d\u4f1a\u4ea7\u751f\u6548\u679c(\u88f8\u7c7b\u578b \u6ca1\u6709\u88ab\u6570\u7ec4/\u5143\u7ec4/Promise \u5305\u88c5\u8fc7)")),l.a.createElement(c["a"],{code:"type Te11<T> = T extends number ? 'a' : 'b';\ntype te11 = Te11<11 | '111'>;",lang:"ts"}),l.a.createElement("p",null,"\u6761\u4ef6\u7c7b\u578b",l.a.createElement("code",null," a extends b ? c : d"),"\u4ec5\u4ec5\u652f\u6301\u5728 type \u5173\u952e\u5b57\u4e2d\u4f7f\u7528\u3002"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u5982\u679c\u4f60\u89c9\u5f97\u8fd9\u91cc\u7684 extends \u4e0d\u592a\u597d\u7406\u89e3\uff0c\u53ef\u4ee5\u6682\u65f6\u7b80\u5355\u7406\u89e3\u4e3a U \u4e2d\u7684\u5c5e\u6027\u5728 T \u4e2d\u90fd\u6709\u3002\u4e00\u5b9a\u6ce8\u610f\u8ddf\u8303\u578b\u4e2d\u5de6\u8fb9\u7684\u7ea6\u675f extends \u533a\u5206\u5f00")),l.a.createElement(c["a"],{code:"type FirstType<T extends unknown[]> = T extends [infer F, ...infer R] ? F : never;\ntype T12 = FirstType<[1, 2, 3, 4]>;\n// type T12 = 1",lang:"ts"}),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u7b2c\u4e00\u4e2a extends \u4e0d\u662f\u6761\u4ef6\uff0c\u6761\u4ef6\u7c7b\u578b\u662f extends ? :\uff0c\u8fd9\u91cc\u7684 extends \u662f\u7ea6\u675f\u7684\u610f\u601d\uff0c\u4e5f\u5c31\u662f\u7ea6\u675f\u7c7b\u578b\u53c2\u6570\u53ea\u80fd\u662f\u6570\u7ec4\u7c7b\u578b\u3002")),l.a.createElement(c["a"],{code:"type Name = 'b' | 'a' | 'c';\ntype Age = 'b';\ntype Excludes<T, U> = T extends U ? never : T;\ntype T13 = Excludes<Name, Age>; // \u4eceU\u4e2d\u6392\u9664T\u6709\u7684\u5c5e\u6027\u5373\u4eceName\u4e2d\u6392\u9664Age\u6709\u7684\u7c7b\u578b\n// type T13 = \"a\" | \"c\"\ntype Extracts<T, U> = T extends U ? T : never;\ntype T14 = Extracts<Name, Age>; // \u4ea4\u96c6\n// type T14 = \"b\"",lang:"ts"}),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u8bed\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement("p",null,l.a.createElement("code",null,"T extends U ? X : Y")," T/U/X/Y \u90fd\u662f",l.a.createElement("strong",null,"\u7c7b\u578b\u5360\u4f4d\u7b26")),l.a.createElement(c["a"],{code:"type IsString<T> = T extends string ? true : false;\ntype Demo1 = IsString<string>;\n\ntype TypeName<T> = T extends string\n  ? 'string'\n  : T extends number\n  ? 'number'\n  : T extends boolean\n  ? 'boolean'\n  : T extends undefined\n  ? 'undefined'\n  : T extends Function\n  ? 'function'\n  : 'object';\ntype T1 = TypeName<string | number>; // \u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b string | number\ntype T1112 = TypeName<undefined>;\ntype TestUnde<T> = T extends undefined ? 'undefined' : any;\ntype T1113 = TestUnde<undefined>; // type T1113 = \"undefined\"\ntype T1114 = TestUnde<111>; // type T1114 = any",lang:"ts"}),l.a.createElement("p",null,"TypeName \u5c5e\u4e8e\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b(\u5206\u53d1)\u3002\u5728\u6761\u4ef6\u7c7b\u578b\u4e2d\uff0c\u5982\u679c\u88ab\u68c0\u67e5\u7684\u7c7b\u578b\u662f\u4e00\u4e2a \u201c\u88f8\u201d \u7c7b\u578b\u53c2\u6570\uff0c\u5373\u6ca1\u6709\u88ab\u6570\u7ec4\u3001\u5143\u7ec4\u6216 Promise \u7b49\u5305\u88c5\u8fc7\uff0c\u5219\u8be5\u6761\u4ef6\u7c7b\u578b\u88ab\u79f0\u4e3a",l.a.createElement("strong",null,"\u5206\u5e03\u5f0f\u6761\u4ef6"),"\u7c7b\u578b\u3002",l.a.createElement("strong",null,"\u5bf9\u4e8e\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b\u6765\u8bf4\uff0c\u5f53\u4f20\u5165\u7684\u88ab\u68c0\u67e5\u7c7b\u578b\u662f\u8054\u5408\u7c7b\u578b\u7684\u8bdd\uff0c\u5728\u8fd0\u7b97\u8fc7\u7a0b\u4e2d\u4f1a\u88ab\u5206\u89e3\u6210\u591a\u4e2a\u5206\u652f"),"\u3002"),l.a.createElement("p",null,"\u5f53\u7c7b\u578b\u53c2\u6570\u4e3a\u8054\u5408\u7c7b\u578b\uff0c\u5e76\u4e14\u5728\u6761\u4ef6\u7c7b\u578b\u5de6\u8fb9\u76f4\u63a5\u5f15\u7528\u8be5\u7c7b\u578b\u53c2\u6570\u7684\u65f6\u5019\uff0cTypeScript \u4f1a\u628a\u6bcf\u4e00\u4e2a\u5143\u7d20\u5355\u72ec\u4f20\u5165\u6765\u505a\u7c7b\u578b\u8fd0\u7b97\uff0c\u6700\u540e\u518d\u5408\u5e76\u6210\u8054\u5408\u7c7b\u578b\uff0c\u8fd9\u79cd\u8bed\u6cd5\u53eb\u505a\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b\u3002"),l.a.createElement("p",null,"\u6761\u4ef6"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7c7b\u578b\u662f\u4e00\u4e2a \u201c\u88f8\u201d \u7c7b\u578b\u53c2\u6570\uff0c\u5373\u6ca1\u6709\u88ab\u6570\u7ec4\u3001\u5143\u7ec4\u6216 Promise \u7b49\u5305\u88c5\u8fc7")),l.a.createElement(c["a"],{code:"type Union = 'a' | 'b' | 'c';\ntype FirstCap<T> = T extends 'a' ? Capitalize<T> : T;\ntype Uinon = FirstCap<Union>; // type Uinon = \"b\" | \"c\" | \"A\"\ntype Test123 = Record<any, {}>;",lang:"ts"}),l.a.createElement("h3",{id:"\u5206\u53d1\u7684\u5e94\u7528\u5b9e\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u5206\u53d1\u7684\u5e94\u7528\u5b9e\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5206\u53d1\u7684\u5e94\u7528\u5b9e\u4f8b"),l.a.createElement(c["a"],{code:"type TypeA = string | number | boolean | symbol;\n\ntype MyExclude<T, K> = T extends K ? never : T;\n\n// ExcludeSymbolType \u7c7b\u578b\u4e3a string | number | boolean\uff0c\u6392\u9664\u4e86symbol\u7c7b\u578b\ntype ExcludeSymbolType = MyExclude<TypeA, symbol | boolean>;\n// NonNullable\ntype NonNullable1<T> = T extends null | undefined ? never : T;\ntype T0201 = NonNullable1<null>; // type T0201 = never\ntype T0202 = NonNullable1<123>; // type T0202 = 123",lang:"ts"}),l.a.createElement("h3",{id:"camelcaseunion"},l.a.createElement(r["AnchorLink"],{to:"#camelcaseunion","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CamelCaseUnion"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u5b57\u7b26\u4e32\u6a21\u5f0f\u5339\u914d \u4e00\u822c\u57fa\u672c\u4e0a\u4f1a\u7528\u5230$","{","}"," infer \u63d0\u53d6\u7279\u5b9a\u5b57\u7b26\u51fa\u5b57\u7b26\u7136\u540e\u5927\u5199")),l.a.createElement(c["a"],{code:'type TC1 = \'cpp_wmh\'; // type TC1 = "cpp_wmh"\ntype CamelCase<T extends string> = T extends `${infer F}_${infer M}${infer R}`\n  ? `${F}${Capitalize<M>}${CamelCase<R>}`\n  : T;\ntype TC2 = CamelCase<TC1>;\n// type TC2 = "cppWmh"',lang:"ts"}),l.a.createElement("p",null,"\u5982\u679c\u5bf9\u5b57\u7b26\u4e32\u6570\u7ec4\u505a CamelCase \u5462"),l.a.createElement(c["a"],{code:"type TC3 = ['cpp_wmh', 'cpp_cpp'];\ntype TC4 = CamelCaseUnion<TC3>; // ['cppWmh', 'cppCpp']\ntype CamelCaseUnion<T extends unknown[] = []> = T extends [infer F, ...infer R]\n  ? [CamelCase<F & string>, ...CamelCaseUnion<R>]\n  : T;",lang:"ts"}),l.a.createElement("p",null,"\u8054\u5408\u7c7b\u578b\u5462(\u8ddf CamelCase \u5199\u6cd5\u4e00\u6837)"),l.a.createElement(c["a"],{code:'type TC03 = \'cpp_wmh\' | \'cpp_cpp\';\ntype TC04 = CamelCaseUnion1<TC03>; // type TC04 = "cppWmh" | "cppCpp"\ntype TC05 = CamelCase<TC03>; // type TC05 = "cppWmh" | "cppCpp"\ntype CamelCaseUnion1<T extends string> = T extends `${infer F}_${infer M}${infer R}`\n  ? `${F}${Uppercase<M>}${CamelCaseUnion1<R>}`\n  : T;',lang:"ts"}),l.a.createElement("p",null,"\u5bf9\u8054\u5408\u7c7b\u578b\u7684\u5904\u7406\u548c\u5bf9\u5355\u4e2a\u7c7b\u578b\u7684\u5904\u7406\u6ca1\u4ec0\u4e48\u533a\u522b\uff0cTypeScript \u4f1a\u628a\u6bcf\u4e2a\u5355\u72ec\u7684\u7c7b\u578b\u62c6\u5f00\u4f20\u5165\u3002\u4e0d\u9700\u8981\u50cf\u6570\u7ec4\u7c7b\u578b\u90a3\u6837\u9700\u8981\u9012\u5f52\u63d0\u53d6\u6bcf\u4e2a\u5143\u7d20\u505a\u5904\u7406"),l.a.createElement("h3",{id:"isunion-\u5224\u65ad\u8054\u5408\u7c7b\u578b"},l.a.createElement(r["AnchorLink"],{to:"#isunion-\u5224\u65ad\u8054\u5408\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"IsUnion \u5224\u65ad\u8054\u5408\u7c7b\u578b"),l.a.createElement(c["a"],{code:'type TestUnion<A, B = A> = A extends A ? { a: A; b: B } : never;\ntype TC7 = TestUnion<\'a\' | \'b\' | \'c\'>;\n// type TC7 = {\n//     a: "a";\n//     b: "a" | "b" | "c";\n// } | {\n//     a: "b";\n//     b: "a" | "b" | "c";\n// } | {\n//     a: "c";\n//     b: "a" | "b" | "c";\n// }',lang:"ts"}),l.a.createElement("p",null,"\u5224\u65ad\u662f\u5426\u662f\u8054\u5408\u7c7b\u578b"),l.a.createElement(c["a"],{code:"type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never;\ntype TC5 = IsUnion<'a' | 'b'>; // type TC5 = true\ntype TC6 = IsUnion<['a' | 'b']>; // type TC6 = false\ntype TC8 = IsUnion<{ name: 'cpp' }>; // type TC8 = false",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"A extends A \u89e6\u53d1\u5206\u5e03\u5f0f\u6761\u4ef6\uff0c\u8ba9\u6bcf\u4e2a\u7c7b\u578b\u5355\u72ec\u4f20\u5165\u5904\u7406\u7684\uff0c"),l.a.createElement("li",null,"[B] extends [A] \u907f\u514d\u89e6\u53d1\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b\uff0c\u4e24\u8fb9\u90fd\u662f\u8054\u5408\u7c7b\u578b\uff0c\u53ea\u6709 extends \u5de6\u8fb9\u662f\u88f8\u7c7b\u578b\u53c2\u6570\u624d\u4f1a\u89e6\u53d1 \u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b")),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u91cd\u70b9\u7406\u89e3\u4e0b")),l.a.createElement("h3",{id:"\u6570\u7ec4\u8f6c\u8054\u5408\u7c7b\u578b"},l.a.createElement(r["AnchorLink"],{to:"#\u6570\u7ec4\u8f6c\u8054\u5408\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6570\u7ec4\u8f6c\u8054\u5408\u7c7b\u578b"),l.a.createElement(c["a"],{code:"type TC9 = ['a', 'b'];\ntype TC10 = TC9[number]; // type TC10 = \"a\" | \"b\"",lang:"ts"}),l.a.createElement("p",null,"\u53d6\u7d22\u5f15\u503c\uff0c\u6570\u7ec4\u7c7b\u578b\u53d6\u51fa\u6240\u6709\u7684\u6570\u5b57\u7d22\u5f15\u5bf9\u5e94\u7684\u503c\uff0c\u7136\u540e\u7ec4\u6210\u8054\u5408\u7c7b\u578b"),l.a.createElement("h3",{id:"bem"},l.a.createElement(r["AnchorLink"],{to:"#bem","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"BEM"),l.a.createElement("p",null,"bem \u662f css \u547d\u540d\u89c4\u8303\uff0c\u7528 block__element--modifier \u7684\u5f62\u5f0f\u6765\u63cf\u8ff0\u67d0\u4e2a\u533a\u5757\u4e0b\u9762\u7684\u67d0\u4e2a\u5143\u7d20\u7684\u67d0\u4e2a\u72b6\u6001\u7684\u6837\u5f0f\u3002"),l.a.createElement(c["a"],{code:"type TC11 = BEM<'cpp', ['aa', 'bb'], ['warning', 'success']>;\ntype BEM<\n  B extends string,\n  E extends string[],\n  M extends string[],\n> = `${B}__${E[number]}--${M[number]}`;\n\n// type TC11 = \"cpp__aa--warning\" | \"cpp__aa--success\" | \"cpp__bb--warning\" | \"cpp__bb--success\"",lang:"ts"}),l.a.createElement("h3",{id:"allcombinations"},l.a.createElement(r["AnchorLink"],{to:"#allcombinations","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"AllCombinations"),l.a.createElement("p",null,"\u5e0c\u671b\u4f20\u5165 'A' | 'B' \u7684\u65f6\u5019\uff0c\u80fd\u591f\u8fd4\u56de\u6240\u6709\u7684\u7ec4\u5408\uff1a 'A' | 'B' | 'BA' | 'AB'\u3002"),l.a.createElement(c["a"],{code:'type Combina<A extends string, B extends string> = A | B | `${A}${B}` | `${B}${A}`;\n\ntype TC12 = Combina<\'a\', \'b\'>;\n// type TC12 = "a" | "b" | "ab" | "ba"',lang:"ts"}),l.a.createElement("p",null,"\u8fd9\u79cd\u5168\u7ec4\u5408\u95ee\u9898\u7684\u5b9e\u73b0\u601d\u8def\u5c31\u662f\u4e24\u4e24\u7ec4\u5408\uff0c\u7ec4\u5408\u51fa\u7684\u5b57\u7b26\u4e32\u518d\u548c\u5176\u4ed6\u5b57\u7b26\u4e32\u4e24\u4e24\u7ec4\u548c\uff1a"),l.a.createElement("p",null,"\u6240\u4ee5\u5168\u7ec4\u5408\u7684\u9ad8\u7ea7\u7c7b\u578b\u5c31\u662f\u8fd9\u6837\uff1a"),l.a.createElement(c["a"],{code:'type AllCombinations<A extends string, B extends string = A> = A extends A\n  ? Combina<A, AllCombinations<Exclude<B, A>>>\n  : never;\ntype TC13 = AllCombinations<\'a\' | \'b\' | \'c\'>;\n// type TC13 = "a" | "b" | "c" | "ab" | "ba" | "bc" | "cb" | "ac" | "abc" | "acb" | "ca" | "bca" | "cba" | "bac" | "cab"',lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"A extends A \u7684\u610f\u4e49\u5c31\u662f\u8ba9\u8054\u5408\u7c7b\u578b\u6bcf\u4e2a\u7c7b\u578b\u5355\u72ec\u4f20\u5165\u505a\u5904\u7406"),l.a.createElement("li",null,l.a.createElement("strong",null,"Combina<A, AllCombinations<Exclude<B, A>>>")," A \u7684\u5904\u7406\u5c31\u662f A \u548c B \u4e2d\u53bb\u6389 A \u4ee5\u540e\u7684\u6240\u6709\u7c7b\u578b\u7ec4\u5408\uff0c\u4e5f\u5c31\u662f Combination<A, ",l.a.createElement("strong",null,"B \u53bb\u6389 A \u4ee5\u540e\u7684\u6240\u6709\u7ec4\u5408"),">\u3002")),l.a.createElement("h2",{id:"\u5b9e\u73b0\u5de5\u5177\u7c7b\u578b-functionproperties-\u548c-nonfunctionproperties-\u7b49\u5de5\u5177\u7c7b\u578b"},l.a.createElement(r["AnchorLink"],{to:"#\u5b9e\u73b0\u5de5\u5177\u7c7b\u578b-functionproperties-\u548c-nonfunctionproperties-\u7b49\u5de5\u5177\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0\u5de5\u5177\u7c7b\u578b FunctionProperties \u548c NonFunctionProperties \u7b49\u5de5\u5177\u7c7b\u578b"),l.a.createElement("p",null,"\u5b9e\u73b0 FunctionNames"),l.a.createElement(c["a"],{code:"interface User11 {\n  id: number;\n  name: string;\n  updateName(name: string): void;\n  getName(): void;\n}\ntype nameType = Pick<User11, 'name'>;\n// \u5f97\u5230\u63a5\u53e3\u4e2d\u7684\u51fd\u6570\u540d\ntype FunctionPropertyName<T> = {\n  [K in keyof T]: T[K] extends Function ? K : never;\n}[keyof T];\n// \u53e6\u5916\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\ntype FunName<T> = {\n  [K in keyof T as T[K] extends Function ? K : never]: T[K];\n};\ntype FunctionProperties<T> = Pick<T, FunctionPropertyName<T>>;\ntype T2 = FunctionProperties<User11>;\n// type T2 = {\n//     updateName: (name: string) => void;\n//     getName: () => void;\n// }\ntype T22 = FunName<User11>;\n// type T22 = {\n//     updateName: (name: string) => void;\n//     getName: () => void;\n// }\n// \u5f97\u5230\u975e\u51fd\u6570\u7c7b\u578b\u7684\u6570\u636e\u7c7b\u578b\ntype NonFunctionPropertyName<T> = {\n  [K in keyof T]: T[K] extends Function ? never : K;\n}[keyof T];\ntype T3 = NonFunctionPropertyName<User11>; // 'id' | 'name'\ntype NonFunctionProperties<T> = Pick<T, NonFunctionPropertyName<T>>;\ntype T4 = NonFunctionProperties<User11>;\n// {id: number,name: string}",lang:"ts"}),l.a.createElement("h2",{id:"\u518d\u6b21\u63a8\u8350\u963f\u5b9d\u54e5\u7684-ts-\u89c6\u9891\u5b66\u4e60"},l.a.createElement(r["AnchorLink"],{to:"#\u518d\u6b21\u63a8\u8350\u963f\u5b9d\u54e5\u7684-ts-\u89c6\u9891\u5b66\u4e60","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u518d\u6b21\u63a8\u8350\u963f\u5b9d\u54e5\u7684 TS \u89c6\u9891\u5b66\u4e60"),l.a.createElement("h2",{id:"\u5176\u4ed6\u793a\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u5176\u4ed6\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ed6\u793a\u4f8b"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4ee5\u4e00\u4e2a\u4f7f\u7528\u6761\u4ef6\u7c7b\u578b\u4f5c\u4e3a\u51fd\u6570\u8fd4\u56de\u503c\u7c7b\u578b\u7684\u4f8b\u5b50\uff1a")),l.a.createElement(c["a"],{code:"declare function strOrNum<T extends Boolean>(x: T): T extends true ? true : false;\nconst strReturnType = strOrNum(true);\nconst numReturnType = strOrNum(false);",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"https://mp.weixin.qq.com/s/y-N265ULBluzwnmRGNs2Xg"},"\u7528\u4e86 TS \u6761\u4ef6\u7c7b\u578b\uff0c\u540c\u4e8b\u76f4\u547c YYDS\uff01")))))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(s,{demos:t})}}}]);