(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[103],{zWSR:function(e,l,n){"use strict";n.r(l);var t=n("q1tI"),a=n.n(t),r=n("dEAq"),u=n("H1Ra"),o=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("ul",null,a.a.createElement("li",null,"rollup \u6574\u4f53\u6784\u5efa\u9636\u6bb5\uff0cbuild \u9636\u6bb5\u548c output \u9636\u6bb5\u4e3b\u8981\u505a\u4e86\u4ec0\u4e48"),a.a.createElement("li",null,"\u63d2\u4ef6\u4e2d\u4e24\u4e2a\u9636\u6bb5\u90fd\u6709\u54ea\u4e9b\u94a9\u5b50\u51fd\u6570"),a.a.createElement("li",null,"\u94a9\u5b50\u51fd\u6570\u90fd\u6709\u54ea\u4e9b\u7c7b\u578b"),a.a.createElement("li",null,"vite \u5982\u4f55\u517c\u5bb9 rollup \u63d2\u4ef6\u7684")),a.a.createElement("h2",{id:"rollup-\u6253\u5305\u57fa\u672c\u6982\u5ff5"},a.a.createElement(r["AnchorLink"],{to:"#rollup-\u6253\u5305\u57fa\u672c\u6982\u5ff5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"rollup \u6253\u5305\u57fa\u672c\u6982\u5ff5"),a.a.createElement("p",null,"Rollup \u7684\u6253\u5305\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5b9a\u4e49\u4e00\u5957\u5b8c\u6574\u7684\u6784\u5efa\u751f\u547d\u5468\u671f\uff0c\u4ece\u5f00\u59cb\u6253\u5305\u5230\u4ea7\u7269\u8f93\u51fa\uff0c\u4e2d\u9014\u4f1a\u7ecf\u5386\u4e00\u4e9b",a.a.createElement("strong",null,"\u6807\u5fd7\u6027"),"\u7684\u9636\u6bb5\uff0c\u5e76\u4e14\u5728\u4e0d\u540c\u9636\u6bb5\u4f1a\u81ea\u52a8\u6267\u884c\u5bf9\u5e94\u7684\u63d2\u4ef6\u94a9\u5b50\u51fd\u6570(Hook)\u3002\u5bf9 Rollup \u63d2\u4ef6\u6765\u8bb2\uff0c\u6700\u91cd\u8981\u7684\u90e8\u5206\u662f\u94a9\u5b50\u51fd\u6570\uff0c\u4e00\u65b9\u9762\u5b83\u5b9a\u4e49\u4e86\u63d2\u4ef6\u7684",a.a.createElement("strong",null,"\u6267\u884c\u903b\u8f91"),'\uff0c\u4e5f\u5c31\u662f"\u505a\u4ec0\u4e48"\uff1b\u53e6\u4e00\u65b9\u9762\u4e5f\u58f0\u660e\u4e86\u63d2\u4ef6\u7684',a.a.createElement("strong",null,"\u4f5c\u7528\u9636\u6bb5"),'\uff0c\u5373"\u4ec0\u4e48\u65f6\u5019\u505a"\uff0c\u8fd9\u4e0e Rollup \u672c\u8eab\u7684\u6784\u5efa\u751f\u547d\u5468\u671f\u606f\u606f\u76f8\u5173\u3002'),a.a.createElement("h3",{id:"output-\u81ea\u5b9a\u4e49\u8f93\u51fa\u914d\u7f6e"},a.a.createElement(r["AnchorLink"],{to:"#output-\u81ea\u5b9a\u4e49\u8f93\u51fa\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"output \u81ea\u5b9a\u4e49\u8f93\u51fa\u914d\u7f6e"),a.a.createElement(u["a"],{code:"output: {\n    // \u4ea7\u7269\u8f93\u51fa\u76ee\u5f55\n  dir: path.resolve(__dirname, 'dist'),\n  // \u4ee5\u4e0b\u4e09\u4e2a\u914d\u7f6e\u9879\u90fd\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u5360\u4f4d\u7b26:\n  // 1. [name]: \u53bb\u9664\u6587\u4ef6\u540e\u7f00\u540e\u7684\u6587\u4ef6\u540d\n  // 2. [hash]: \u6839\u636e\u6587\u4ef6\u540d\u548c\u6587\u4ef6\u5185\u5bb9\u751f\u6210\u7684 hash \u503c\n  // 3. [format]: \u4ea7\u7269\u6a21\u5757\u683c\u5f0f\uff0c\u5982 es\u3001cjs\n  // 4. [extname]: \u4ea7\u7269\u540e\u7f00\u540d(\u5e26`.`)\n  // \u5165\u53e3\u6a21\u5757\u7684\u8f93\u51fa\u6587\u4ef6\u540d\n  entryFileNames: `[name].js`,\n  // \u975e\u5165\u53e3\u6a21\u5757(\u5982\u52a8\u6001 import)\u7684\u8f93\u51fa\u6587\u4ef6\u540d\n  chunkFileNames: 'chunk-[hash].js',\n  // \u9759\u6001\u8d44\u6e90\u6587\u4ef6\u8f93\u51fa\u6587\u4ef6\u540d\n  assetFileNames: 'assets/[name]-[hash][extname]',\n  // \u4ea7\u7269\u8f93\u51fa\u683c\u5f0f\uff0c\u5305\u62ec`amd`\u3001`cjs`\u3001`es`\u3001`iife`\u3001`umd`\u3001`system`\n  format: 'cjs',\n  // \u662f\u5426\u751f\u6210 sourcemap \u6587\u4ef6\n  sourcemap: true,\n  // \u5982\u679c\u662f\u6253\u5305\u51fa iife/umd \u683c\u5f0f\uff0c\u9700\u8981\u5bf9\u5916\u66b4\u9732\u51fa\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\uff0c\u901a\u8fc7 name \u914d\u7f6e\u53d8\u91cf\u540d\n  name: 'MyBundle',\n  // \u5168\u5c40\u53d8\u91cf\u58f0\u660e\n  globals: {\n    // \u9879\u76ee\u4e2d\u53ef\u4ee5\u76f4\u63a5\u7528`$`\u4ee3\u66ff`jquery`\n    jquery: '$'\n  }\n}",lang:"json"}),a.a.createElement("h3",{id:"\u6392\u9664\u4f9d\u8d56-external"},a.a.createElement(r["AnchorLink"],{to:"#\u6392\u9664\u4f9d\u8d56-external","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6392\u9664\u4f9d\u8d56 external"),a.a.createElement("p",null,"\u5bf9\u4e8e\u67d0\u4e9b\u7b2c\u4e09\u65b9\u5305\uff0c\u6709\u65f6\u5019\u6211\u4eec\u4e0d\u60f3\u8ba9 Rollup \u8fdb\u884c\u6253\u5305\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 external \u8fdb\u884c\u5916\u90e8\u5316:"),a.a.createElement(u["a"],{code:"external: ['react', 'react-dom'];",lang:"js"}),a.a.createElement("h3",{id:"\u63d2\u4ef6"},a.a.createElement(r["AnchorLink"],{to:"#\u63d2\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u63d2\u4ef6"),a.a.createElement("p",null,"\u867d\u7136 rollup \u80fd\u8f93\u51fa commonjs \u7684\u4ea7\u7269\uff0c\u4f46\u5bf9\u4e8e\u8f93\u5165\u7ed9 rollup \u7684\u4ee3\u7801\u5e76\u4e0d\u652f\u6301 ",a.a.createElement("strong",null,"commonjs")," ,\u4ec5\u4ec5\u652f\u6301 ESM\uff0c\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u5f15\u5165\u989d\u5916\u7684\u63d2\u4ef6\u53bb\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),a.a.createElement(u["a"],{code:"pnpm i @rollup/plugin-node-resolve @rollup/plugin-commonjs",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,"@rollup/plugin-node-resolve \u662f\u4e3a\u4e86",a.a.createElement("strong",null,"\u5141\u8bb8\u6211\u4eec\u52a0\u8f7d\u7b2c\u4e09\u65b9\u4f9d\u8d56"),"\uff0c\u5426\u5219\u50cf import React from 'react' \u7684\u4f9d\u8d56\u5bfc\u5165\u8bed\u53e5\u5c06\u4e0d\u4f1a\u88ab Rollup \u8bc6\u522b")),a.a.createElement("li",null,a.a.createElement("p",null,"@rollup/plugin-commonjs \u7684\u4f5c\u7528\u662f\u5c06 ",a.a.createElement("strong",null,"CommonJS \u683c\u5f0f\u7684\u4ee3\u7801\u8f6c\u6362\u4e3a ESM \u683c\u5f0f")))),a.a.createElement("p",null,"\u7136\u540e\u8ba9\u6211\u4eec\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u5bfc\u5165\u8fd9\u4e9b\u63d2\u4ef6:"),a.a.createElement(u["a"],{code:"// rollup.config.js\nimport resolve from '@rollup/plugin-node-resolve';\nimport commonjs from '@rollup/plugin-commonjs';\n\n/**\n * @type { import('rollup').RollupOptions }\n */\nexport default {\n  input: ['src/index.js'],\n  output: [\n    {\n      dir: 'dist/es',\n      format: 'esm',\n    },\n    {\n      dir: 'dist/cjs',\n      format: 'cjs',\n    },\n  ],\n  // \u901a\u8fc7 plugins \u53c2\u6570\u6dfb\u52a0\u63d2\u4ef6\n  plugins: [resolve(), commonjs()],\n};",lang:"js"}),a.a.createElement("p",null,"\u5176\u4ed6\u573a\u666f\u7684\u63d2\u4ef6\u5e93\uff1a"),a.a.createElement("ul",null,a.a.createElement("li",null,"@rollup/plugin-json\uff1a \u652f\u6301.json \u7684\u52a0\u8f7d\uff0c\u5e76\u914d\u5408 rollup \u7684 Tree Shaking \u673a\u5236\u53bb\u6389\u672a\u4f7f\u7528\u7684\u90e8\u5206\uff0c\u8fdb\u884c\u6309\u9700\u6253\u5305\u3002"),a.a.createElement("li",null,"@rollup/plugin-babel\uff1a\u5728 Rollup \u4e2d\u4f7f\u7528 Babel \u8fdb\u884c JS \u4ee3\u7801\u7684\u8bed\u6cd5\u8f6c\u8bd1\u3002"),a.a.createElement("li",null,"@rollup/plugin-typescript: \u652f\u6301\u4f7f\u7528 TypeScript \u5f00\u53d1\u3002"),a.a.createElement("li",null,"@rollup/plugin-alias\uff1a\u652f\u6301\u522b\u540d\u914d\u7f6e\u3002"),a.a.createElement("li",null,"@rollup/plugin-replace\uff1a\u5728 Rollup \u8fdb\u884c\u53d8\u91cf\u5b57\u7b26\u4e32\u7684\u66ff\u6362\u3002"),a.a.createElement("li",null,"rollup-plugin-visualizer: \u5bf9 Rollup \u6253\u5305\u4ea7\u7269\u8fdb\u884c\u5206\u6790\uff0c\u81ea\u52a8\u751f\u6210\u4ea7\u7269\u4f53\u79ef\u53ef\u89c6\u5316\u5206\u6790\u56fe\u3002")),a.a.createElement("h3",{id:"javascript-api-\u65b9\u5f0f\u8c03\u7528"},a.a.createElement(r["AnchorLink"],{to:"#javascript-api-\u65b9\u5f0f\u8c03\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"JavaScript API \u65b9\u5f0f\u8c03\u7528"),a.a.createElement("p",null,a.a.createElement("strong",null,"rollup.rollup"),"\uff0c\u7528\u6765\u4e00\u6b21\u6027\u5730\u8fdb\u884c Rollup \u6253\u5305"),a.a.createElement(u["a"],{code:"// build.js\nimport { rollup as rollupAs } from 'rollup';\nconst inputOptions = {\n  input: './src/index.js',\n};\n\nconst outputOptionsList = [\n  {\n    dir: 'dist/es',\n    format: 'esm',\n    entryFileNames: '[name].[hash].cpp.js',\n    chunkFileNames: 'chunk-[hash].cpp.js',\n    assetFileNames: 'assets/[name]-[hash][extname]',\n  },\n  {\n    dir: 'dist/cjs',\n    format: 'cjs',\n    entryFileNames: '[name].[hash].js',\n    chunkFileNames: 'chunk-[hash].js',\n    assetFileNames: 'assets/[name]-[hash][extname]',\n  },\n];\n\nbuild();\n\nasync function build() {\n  let bundle;\n  let buildFailed = false;\n  try {\n    // create a bundle\n    const bundle = await rollupAs(inputOptions);\n    console.log(bundle, 'BUNDLE');\n    await generateOutputs(bundle);\n  } catch (error) {\n    buildFailed = true;\n    console.error(error);\n  }\n  if (bundle) {\n    await bundle.close();\n  }\n  process.exit(buildFailed ? 1 : 0);\n}\n\nasync function generateOutputs(bundle) {\n  for (const outputOptions of outputOptionsList) {\n    const { output } = await bundle.generate(outputOptions);\n    console.log(output, 'output');\n    // for (const chunkOrAsset of output) {\n    //   if (chunkOrAsset.type === \"asset\") {\n    //     console.log(\"Asset\", chunkOrAsset);\n    //   } else {\n    //     console.log(\"Chunk\", chunkOrAsset.modules);\n    //   }\n    // }\n    await bundle.write(outputOptions);\n  }\n}",lang:"js"}),a.a.createElement("p",null,"\u6267\u884c\u6b65\u9aa4"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u901a\u8fc7 ",a.a.createElement("strong",null,"rollup.rollup"),"\u65b9\u6cd5\uff0c\u4f20\u5165 inputOptions\uff0c\u751f\u6210 bundle \u5bf9\u8c61\uff1b"),a.a.createElement("li",null,"\u8c03\u7528 bundle \u5bf9\u8c61\u7684 ",a.a.createElement("strong",null,"generate \u548c write")," \u65b9\u6cd5\uff0c\u4f20\u5165 outputOptions\uff0c\u5206\u522b\u5b8c\u6210\u4ea7\u7269\u548c\u751f\u6210\u548c\u78c1\u76d8\u5199\u5165\u3002"),a.a.createElement("li",null,"\u8c03\u7528 bundle \u5bf9\u8c61\u7684 close \u65b9\u6cd5\u6765\u7ed3\u675f\u6253\u5305\u3002")),a.a.createElement("h2",{id:"rollup-\u6574\u4f53\u6784\u5efa\u8fc7\u7a0b"},a.a.createElement(r["AnchorLink"],{to:"#rollup-\u6574\u4f53\u6784\u5efa\u8fc7\u7a0b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"rollup \u6574\u4f53\u6784\u5efa\u8fc7\u7a0b"),a.a.createElement(u["a"],{code:"// Build \u9636\u6bb5\nconst bundle = await rollup.rollup(inputOptions);\n\n// Output \u9636\u6bb5\nawait Promise.all(outputOptions.map(bundle.write));\n\n// \u6784\u5efa\u7ed3\u675f\nawait bundle.close();",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"Build \u9636\u6bb5\u4e3b\u8981\u8d1f\u8d23\u521b\u5efa\u6a21\u5757\u4f9d\u8d56\u56fe\uff0c\u521d\u59cb\u5316\u5404\u4e2a\u6a21\u5757\u7684 AST \u4ee5\u53ca\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb"),a.a.createElement("li",null,"output \u9636\u6bb5: \u771f\u6b63\u8fdb\u884c\u6253\u5305\u7684\u8fc7\u7a0b\u4f1a\u5728 Output \u9636\u6bb5\u8fdb\u884c\uff0c\u5373\u5728 bundle \u5bf9\u8c61\u7684 generate \u6216\u8005 write \u65b9\u6cd5\u4e2d\u8fdb\u884c")),a.a.createElement("p",null,"\u5bf9\u4e8e\u4e00\u6b21\u5b8c\u6574\u7684\u6784\u5efa\u8fc7\u7a0b\u800c\u8a00\uff0c Rollup \u4f1a\u5148\u8fdb\u5165\u5230 Build \u9636\u6bb5\uff0c\u89e3\u6790\u5404\u6a21\u5757\u7684\u5185\u5bb9\u53ca\u4f9d\u8d56\u5173\u7cfb\uff0c\u7136\u540e\u8fdb\u5165 Output \u9636\u6bb5\uff0c\u5b8c\u6210\u6253\u5305\u53ca\u8f93\u51fa\u7684\u8fc7\u7a0b\u3002\u5bf9\u4e8e\u4e0d\u540c\u7684\u9636\u6bb5\uff0cRollup \u63d2\u4ef6\u4f1a\u6709\u4e0d\u540c\u7684\u63d2\u4ef6\u5de5\u4f5c\u6d41\u7a0b\uff0c"),a.a.createElement("h2",{id:"\u63d2\u4ef6\u5de5\u4f5c\u6d41\u7a0b"},a.a.createElement(r["AnchorLink"],{to:"#\u63d2\u4ef6\u5de5\u4f5c\u6d41\u7a0b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u63d2\u4ef6\u5de5\u4f5c\u6d41\u7a0b"),a.a.createElement("h3",{id:"hook-\u7c7b\u578b"},a.a.createElement(r["AnchorLink"],{to:"#hook-\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Hook \u7c7b\u578b"),a.a.createElement("p",null,"\u4e0d\u540c hook \u4ee3\u8868\u4e0d\u540c\u63d2\u4ef6\u7684",a.a.createElement("strong",null,"\u6267\u884c\u7279\u70b9"),"\uff0c\u63d2\u4ef6\u7684\u5404\u79cd Hook \u53ef\u4ee5\u6839\u636e\u8fd9\u4e24\u4e2a\u6784\u5efa\u9636\u6bb5\u5206\u4e3a\u4e24\u7c7b: ",a.a.createElement("strong",null,"Build Hook")," \u4e0e ",a.a.createElement("strong",null,"Output Hook")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,"Build Hook \u5373\u5728 Build \u9636\u6bb5\u6267\u884c\u7684\u94a9\u5b50\u51fd\u6570\uff0c\u5728\u8fd9\u4e2a\u9636\u6bb5\u4e3b\u8981\u8fdb\u884c\u6a21\u5757\u4ee3\u7801\u7684\u8f6c\u6362\u3001AST \u89e3\u6790\u4ee5\u53ca\u6a21\u5757\u4f9d\u8d56\u7684\u89e3\u6790\uff0c\u90a3\u4e48\u8fd9\u4e2a\u9636\u6bb5\u7684 Hook \u5bf9\u4e8e\u4ee3\u7801\u7684\u64cd\u4f5c\u7c92\u5ea6\u4e00\u822c\u4e3a\u6a21\u5757\u7ea7\u522b\uff0c\u4e5f\u5c31\u662f",a.a.createElement("strong",null,"\u5355\u6587\u4ef6\u7ea7\u522b"))),a.a.createElement("li",null,a.a.createElement("p",null,"Ouput Hook(\u5b98\u65b9\u79f0\u4e3a Output Generation Hook)\uff0c\u5219\u4e3b\u8981\u8fdb\u884c\u4ee3\u7801\u7684\u6253\u5305\uff0c\u5bf9\u4e8e\u4ee3\u7801\u800c\u8a00\uff0c\u64cd\u4f5c\u7c92\u5ea6\u4e00\u822c\u4e3a chunk \u7ea7\u522b(\u4e00\u4e2a ",a.a.createElement("strong",null,"chunk")," \u901a\u5e38\u6307\u5f88\u591a\u6587\u4ef6\u6253\u5305\u5230\u4e00\u8d77\u7684\u4ea7\u7269)\u3002"))),a.a.createElement("p",null,"\u9664\u4e86\u6839\u636e",a.a.createElement("strong",null,"\u6784\u5efa\u9636\u6bb5"),"\u53ef\u4ee5\u5c06 Rollup \u63d2\u4ef6\u8fdb\u884c\u5206\u7c7b\uff0c\u6839\u636e\u4e0d\u540c\u7684 Hook ",a.a.createElement("strong",null,"\u6267\u884c\u65b9\u5f0f")," \u4e5f\u4f1a\u6709\u4e0d\u540c\u7684\u5206\u7c7b\uff0c\u4e3b\u8981\u5305\u62ec Async\u3001Sync\u3001Parallel\u3001Squential\u3001First \u8fd9\u4e94\u79cd\u3002\u5728\u540e\u6587\u4e2d\u6211\u4eec\u5c06\u63a5\u89e6\u5404\u79cd\u5404\u6837\u7684\u63d2\u4ef6 Hook\uff0c\u4f46\u65e0\u8bba\u54ea\u4e2a Hook \u90fd\u79bb\u4e0d\u5f00\u8fd9\u4e94\u79cd\u6267\u884c\u65b9\u5f0f"),a.a.createElement("h3",{id:"hook-\u6267\u884c\u65b9\u5f0f"},a.a.createElement(r["AnchorLink"],{to:"#hook-\u6267\u884c\u65b9\u5f0f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Hook \u6267\u884c\u65b9\u5f0f"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,"Async/Sync \u5f02\u6b65\u548c\u540c\u6b65\u7684\u94a9\u5b50\uff0c\u6700\u5927\u7684\u533a\u522b\u662f\u540c\u6b65\u7684\u94a9\u5b50\u4e0d\u80fd\u6709\u5f02\u6b65\u7684\u903b\u8f91\uff0c\u5f02\u6b65\u9614\u4ee5\u6709\u540c\u6b65\u7684\u903b\u8f91,\u8fd4\u56de Promise")),a.a.createElement("li",null,a.a.createElement("p",null,"Parallel \u8fd9\u91cc\u6307\u5e76\u884c\u7684\u94a9\u5b50\u51fd\u6570\u3002\u5982\u679c\u6709\u591a\u4e2a\u63d2\u4ef6\u5b9e\u73b0\u4e86\u8fd9\u4e2a\u94a9\u5b50\u7684\u903b\u8f91\uff0c\u4e00\u65e6\u6709\u94a9\u5b50\u51fd\u6570\u662f\u5f02\u6b65\u903b\u8f91\uff0c\u5219\u5e76\u53d1\u6267\u884c\u94a9\u5b50\u51fd\u6570\uff0c\u4e0d\u4f1a\u7b49\u5f85\u5f53\u524d\u94a9\u5b50\u5b8c\u6210(\u5e95\u5c42\u4f7f\u7528 Promise.all)\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"Squential \u4e32\u884c\u6267\u884c\uff0c\u8fd9\u79cd Hook \u5f80\u5f80\u9002\u7528\u4e8e\u63d2\u4ef6\u95f4\u5904\u7406\u7ed3\u679c\u76f8\u4e92\u4f9d\u8d56\u7684\u60c5\u51b5\uff0c\u524d\u4e00\u4e2a\u63d2\u4ef6 Hook \u7684\u8fd4\u56de\u503c\u4f5c\u4e3a\u540e\u7eed\u63d2\u4ef6\u7684\u5165\u53c2\uff0c\u8fd9\u79cd\u60c5\u51b5\u5c31\u9700\u8981\u7b49\u5f85\u524d\u4e00\u4e2a\u63d2\u4ef6\u6267\u884c\u5b8c Hook\uff0c\u83b7\u5f97\u5176\u6267\u884c\u7ed3\u679c\uff0c\u7136\u540e\u624d\u80fd\u8fdb\u884c\u4e0b\u4e00\u4e2a\u63d2\u4ef6\u76f8\u5e94 Hook \u7684\u8c03\u7528\uff0c\u5982 transform")),a.a.createElement("li",null,a.a.createElement("p",null,"First \u5982\u679c\u591a\u4e2a\u63d2\u4ef6\u90fd\u5b9e\u73b0\u4e86\u8fd9\u4e2a\u94a9\u5b50\uff0c\u90a3\u4e48\u8fd9\u4e9b\u94a9\u5b50\u4f1a\u4f9d\u6b21\u8fd0\u884c\uff0c\u76f4\u5230\u4e00\u4e2a\u94a9\u5b50\u8fd4\u56de\u7684\u4e0d\u662f null \u6216 undefined \u7684\u503c\u4e3a\u6b62\u3002\u5178\u578b\u7684 hook \u6bd4\u5982 resolved,\u4e00\u65e6\u63d2\u4ef6\u7684 resolved \u8fd4\u56de\u4e86\u4e00\u4e2a\u8def\u5f84\uff0c\u5c06\u505c\u6b62\u6267\u884c\u540e\u7684 resolved \u7684\u903b\u8f91"))),a.a.createElement("p",null,"\u8fd8\u6709\u7684\u94a9\u5b50\u540c\u65f6\u662f\u591a\u79cd\u7c7b\u578b\u7684\u94a9\u5b50\uff0c options \u94a9\u5b50\uff0c\u662f async \u548c sequential \u7c7b\u578b\uff0coptions \u94a9\u5b50\u53ef\u4ee5\u662f\u5f02\u6b65\u7684\uff0c\u4e14\u662f\u4e32\u884c\u6267\u884c\u7684\uff0c\u56e0\u4e3a\u914d\u7f6e\u4f1a\u6309\u987a\u5e8f\u4f9d\u6b21\u88ab\u8986\u76d6\u4fee\u6539\uff0c\u5982\u679c\u662f\u5e76\u884c\u6267\u884c options\uff0c\u90a3\u4e48\u6700\u7ec8\u7684\u914d\u7f6e\u5c31\u4f1a\u4e0d\u53ef\u63a7"),a.a.createElement("h3",{id:"build-\u6784\u5efa\u6d41\u7a0b"},a.a.createElement(r["AnchorLink"],{to:"#build-\u6784\u5efa\u6d41\u7a0b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Build \u6784\u5efa\u6d41\u7a0b"),a.a.createElement("p",null,a.a.createElement("img",{src:"https://s2.loli.net/2022/07/13/PmuW9hAvlqFwOnd.jpg",alt:"build.jpeg"})),a.a.createElement("p",null,"\u6b65\u9aa4(options -> buildStart -> resolved -> load -> transform -> moduleParsed -> buildEnd)"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,"1.\u9996\u5148\u7ecf\u5386 ",a.a.createElement("strong",null,"options")," \u94a9\u5b50\u8fdb\u884c\u914d\u7f6e\u7684\u8f6c\u6362\uff0c\u5f97\u5230\u5904\u7406\u540e\u7684\u914d\u7f6e\u5bf9\u8c61\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"2.\u968f\u4e4b Rollup \u4f1a\u8c03\u7528 ",a.a.createElement("strong",null,"buildStart")," \u94a9\u5b50\uff0c\u6b63\u5f0f\u5f00\u59cb\u6784\u5efa\u6d41\u7a0b\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"3.Rollup \u5148\u8fdb\u5165\u5230 ",a.a.createElement("strong",null,"resolveId")," \u94a9\u5b50\u4e2d\u89e3\u6790\u6587\u4ef6\u8def\u5f84\u3002(\u4ece input \u914d\u7f6e\u6307\u5b9a\u7684\u5165\u53e3\u6587\u4ef6\u5f00\u59cb)\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"4.Rollup \u901a\u8fc7\u8c03\u7528 ",a.a.createElement("strong",null,"load")," \u94a9\u5b50\u52a0\u8f7d\u6a21\u5757\u5185\u5bb9\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"5.\u7d27\u63a5\u7740 Rollup \u6267\u884c\u6240\u6709\u7684 ",a.a.createElement("strong",null,"transform")," \u94a9\u5b50\u6765\u5bf9\u6a21\u5757\u5185\u5bb9\u8fdb\u884c\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u8f6c\u6362\uff0c\u6bd4\u5982 babel \u8f6c\u8bd1\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"6.\u73b0\u5728 Rollup \u62ff\u5230\u6700\u540e\u7684\u6a21\u5757\u5185\u5bb9\uff0c\u8fdb\u884c AST \u5206\u6790\uff0c\u5f97\u5230\u6240\u6709\u7684 import \u5185\u5bb9\uff0c\u8c03\u7528 ",a.a.createElement("strong",null,"moduleParsed")," \u94a9\u5b50:"),a.a.createElement("ul",null,a.a.createElement("li",null,"6.1 \u5982\u679c\u662f\u666e\u901a\u7684 import\uff0c\u5219\u6267\u884c ",a.a.createElement("strong",null,"resolveId")," \u94a9\u5b50\uff0c\u7ee7\u7eed\u56de\u5230\u6b65\u9aa4 3\u3002"),a.a.createElement("li",null,"6.2 \u5982\u679c\u662f\u52a8\u6001 import\uff0c\u5219\u6267\u884c ",a.a.createElement("strong",null,"resolveDynamicImport")," \u94a9\u5b50\u89e3\u6790\u8def\u5f84\uff0c\u5982\u679c\u89e3\u6790\u6210\u529f\uff0c\u5219\u56de\u5230\u6b65\u9aa4 4 \u52a0\u8f7d\u6a21\u5757\uff0c\u5426\u5219\u56de\u5230\u6b65\u9aa4 3 \u901a\u8fc7 resolveId \u89e3\u6790\u8def\u5f84\u3002",a.a.createElement("blockquote",null,a.a.createElement("p",null,"\u52a8\u6001 import \u662f\u6307\u4ec0\u4e48"))))),a.a.createElement("li",null,a.a.createElement("p",null,"7.\u76f4\u5230\u6240\u6709\u7684 import \u90fd\u89e3\u6790\u5b8c\u6bd5\uff0cRollup \u6267\u884c ",a.a.createElement("strong",null,"buildEnd")," \u94a9\u5b50\uff0cBuild \u9636\u6bb5\u7ed3\u675f\u3002"))),a.a.createElement("p",null,"\u5f53\u7136\uff0c\u5728 Rollup \u89e3\u6790\u8def\u5f84\u7684\u65f6\u5019\uff0c\u5373\u6267\u884c resolveId \u6216\u8005 resolveDynamicImport \u7684\u65f6\u5019\uff0c\u6709\u4e9b\u8def\u5f84\u53ef\u80fd\u4f1a\u88ab\u6807\u8bb0\u4e3a external(\u7ffb\u8bd1\u4e3a\u6392\u9664)\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e0d\u53c2\u52a0 Rollup \u6253\u5305\u8fc7\u7a0b\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u4e0d\u4f1a\u8fdb\u884c",a.a.createElement("strong",null,"load\u3001transform"),"\u7b49\u7b49\u540e\u7eed\u7684\u5904\u7406\u4e86\u3002"),a.a.createElement("p",null,"\u5728\u6d41\u7a0b\u56fe\u6700\u4e0a\u9762\uff0c\u4e0d\u77e5\u9053\u5927\u5bb6\u6709\u6ca1\u6709\u6ce8\u610f\u5230 watchChange \u548c closeWatcher \u8fd9\u4e24\u4e2a Hook\uff0c\u8fd9\u91cc\u5176\u5b9e\u662f\u5bf9\u5e94\u4e86 rollup \u7684 watch \u6a21\u5f0f\u3002\u5f53\u4f60\u4f7f\u7528 rollup --watch \u6307\u4ee4\u6216\u8005\u5728\u914d\u7f6e\u6587\u4ef6\u914d\u6709 watch: true \u7684\u5c5e\u6027\u65f6\uff0c\u4ee3\u8868\u5f00\u542f\u4e86 Rollup \u7684 watch \u6253\u5305\u6a21\u5f0f\uff0c\u8fd9\u4e2a\u65f6\u5019 Rollup \u5185\u90e8\u4f1a\u521d\u59cb\u5316\u4e00\u4e2a watcher \u5bf9\u8c61\uff0c\u5f53\u6587\u4ef6\u5185\u5bb9\u53d1\u751f\u53d8\u5316\u65f6\uff0cwatcher \u5bf9\u8c61\u4f1a\u81ea\u52a8\u89e6\u53d1 watchChange \u94a9\u5b50\u6267\u884c\u5e76\u5bf9\u9879\u76ee\u8fdb\u884c\u91cd\u65b0\u6784\u5efa\u3002\u5728\u5f53\u524d\u6253\u5305\u8fc7\u7a0b\u7ed3\u675f\u65f6\uff0cRollup \u4f1a\u81ea\u52a8\u6e05\u9664 watcher \u5bf9\u8c61\u8c03\u7528 closeWacher \u94a9\u5b50\u3002"),a.a.createElement("h3",{id:"output-\u8f93\u51fa\u9636\u6bb5"},a.a.createElement(r["AnchorLink"],{to:"#output-\u8f93\u51fa\u9636\u6bb5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Output \u8f93\u51fa\u9636\u6bb5"),a.a.createElement("p",null,a.a.createElement("img",{src:"https://s2.loli.net/2022/07/13/Fc932oldqrwnM47.jpg",alt:"output.jpeg"})),a.a.createElement("p",null,"\u6b65\u9aa4(\u5341\u6b65)"),a.a.createElement("p",null,"outputOptions -> renderStart -> banner/footer/intro/outro ->"),a.a.createElement("p",null,"renderDynamicImport -> augmentChunkHash -> renderChunk ->"),a.a.createElement("p",null,"generateBundle -> writeBundle -> closeBundle"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,"1.\u6267\u884c\u6240\u6709\u63d2\u4ef6\u7684 ",a.a.createElement("strong",null,"outputOptions")," \u94a9\u5b50\u51fd\u6570\uff0c\u5bf9 output \u914d\u7f6e\u8fdb\u884c\u8f6c\u6362\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"2.\u6267\u884c ",a.a.createElement("strong",null,"renderStart"),"\uff0c\u5e76\u53d1\u6267\u884c renderStart \u94a9\u5b50\uff0c\u6b63\u5f0f\u5f00\u59cb\u6253\u5305\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"3.\u5e76\u53d1\u6267\u884c\u6240\u6709\u63d2\u4ef6\u7684 ",a.a.createElement("strong",null,"banner\u3001footer\u3001intro\u3001outro")," \u94a9\u5b50(\u5e95\u5c42\u7528 Promise.all \u5305\u88f9\u6240\u6709\u7684\u8fd9\u56db\u79cd\u94a9\u5b50\u51fd\u6570)\uff0c\u8fd9\u56db\u4e2a\u94a9\u5b50\u529f\u80fd\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u5f80\u6253\u5305\u4ea7\u7269\u7684\u56fa\u5b9a\u4f4d\u7f6e(\u6bd4\u5982\u5934\u90e8\u548c\u5c3e\u90e8)\u63d2\u5165\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\u534f\u8bae\u58f0\u660e\u5185\u5bb9\u3001\u9879\u76ee\u4ecb\u7ecd\u7b49\u7b49\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"4.\u4ece\u5165\u53e3\u6a21\u5757\u5f00\u59cb\u626b\u63cf\uff0c\u9488\u5bf9\u52a8\u6001 import \u8bed\u53e5\u6267\u884c ",a.a.createElement("strong",null,"renderDynamicImport")," \u94a9\u5b50\uff0c\u6765\u81ea\u5b9a\u4e49\u52a8\u6001 import \u7684\u5185\u5bb9\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"5.\u5bf9\u6bcf\u4e2a\u5373\u5c06\u751f\u6210\u7684 chunk\uff0c\u6267\u884c ",a.a.createElement("strong",null,"augmentChunkHash")," \u94a9\u5b50\uff0c\u6765\u51b3\u5b9a\u662f\u5426\u66f4\u6539 chunk \u7684\u54c8\u5e0c\u503c\uff0c\u5728 watch \u6a21\u5f0f\u4e0b\u5373\u53ef\u80fd\u4f1a\u591a\u6b21\u6253\u5305\u7684\u573a\u666f\u4e0b\uff0c\u8fd9\u4e2a\u94a9\u5b50\u4f1a\u6bd4\u8f83\u9002\u7528\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"6.\u5982\u679c\u6ca1\u6709\u9047\u5230 ",a.a.createElement("strong",null,"import.meta")," \u8bed\u53e5\uff0c\u5219\u8fdb\u5165\u4e0b\u4e00\u6b65\uff0c\u5426\u5219:"),a.a.createElement("ul",null,a.a.createElement("li",null,"6.1 \u5bf9\u4e8e import.meta.url \u8bed\u53e5\u8c03\u7528 ",a.a.createElement("strong",null,"resolveFileUrl")," \u6765\u81ea\u5b9a\u4e49 url \u89e3\u6790\u903b\u8f91"),a.a.createElement("li",null,"6.2 \u5bf9\u4e8e\u5176\u4ed6 import.meta \u5c5e\u6027\uff0c\u5219\u8c03\u7528 ",a.a.createElement("strong",null,"resolveImportMeta")," \u6765\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u89e3\u6790\u3002"))),a.a.createElement("li",null,a.a.createElement("p",null,"7.\u63a5\u7740 Rollup \u4f1a\u751f\u6210\u6240\u6709 chunk \u7684\u5185\u5bb9\uff0c\u9488\u5bf9\u6bcf\u4e2a chunk \u4f1a\u4f9d\u6b21\u8c03\u7528\u63d2\u4ef6\u7684 ",a.a.createElement("strong",null,"renderChunk")," \u65b9\u6cd5\u8fdb\u884c\u81ea\u5b9a\u4e49\u64cd\u4f5c\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728\u8fd9\u91cc\u65f6\u5019\u4f60\u53ef\u4ee5\u76f4\u63a5\u64cd\u4f5c\u6253\u5305\u4ea7\u7269\u4e86\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"8.\u968f\u540e\u4f1a\u8c03\u7528 ",a.a.createElement("strong",null,"generateBundle")," \u94a9\u5b50\uff0c\u8fd9\u4e2a\u94a9\u5b50\u7684\u5165\u53c2\u91cc\u9762\u4f1a\u5305\u542b\u6240\u6709\u7684\u6253\u5305\u4ea7\u7269\u4fe1\u606f\uff0c\u5305\u62ec chunk (\u6253\u5305\u540e\u7684\u4ee3\u7801)\u3001asset(\u6700\u7ec8\u7684\u9759\u6001\u8d44\u6e90\u6587\u4ef6)\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u5220\u9664\u4e00\u4e9b chunk \u6216\u8005 asset\uff0c\u6700\u7ec8\u8fd9\u4e9b\u5185\u5bb9\u5c06\u4e0d\u4f1a\u4f5c\u4e3a\u4ea7\u7269\u8f93\u51fa\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"9.\u524d\u9762\u63d0\u5230\u4e86 rollup.rollup \u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a bundle \u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u662f\u5305\u542b generate \u548c write \u4e24\u4e2a\u65b9\u6cd5\uff0c\u4e24\u4e2a\u65b9\u6cd5\u552f\u4e00\u7684\u533a\u522b\u5728\u4e8e\u540e\u8005\u4f1a\u5c06\u4ee3\u7801\u5199\u5165\u5230\u78c1\u76d8\u4e2d\uff0c\u540c\u65f6\u4f1a\u89e6\u53d1 writeBundle \u94a9\u5b50\uff0c\u4f20\u5165\u6240\u6709\u7684\u6253\u5305\u4ea7\u7269\u4fe1\u606f\uff0c\u5305\u62ec chunk \u548c asset\uff0c\u548c generateBundle \u94a9\u5b50\u975e\u5e38\u76f8\u4f3c\u3002\u4e0d\u8fc7\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e2a\u94a9\u5b50\u6267\u884c\u7684\u65f6\u5019\uff0c\u4ea7\u7269\u5df2\u7ecf\u8f93\u51fa\u4e86\uff0c\u800c generateBundle \u6267\u884c\u7684\u65f6\u5019\u4ea7\u7269\u8fd8\u5e76\u6ca1\u6709\u8f93\u51fa\u3002\u987a\u5e8f\u5982\u4e0b\u56fe\u6240\u793a:"))),a.a.createElement("p",null,a.a.createElement("strong",null,"generateBundle -> \u8f93\u51fa\u4ea7\u7269\u5230\u78c1\u76d8 -> writeBundle")),a.a.createElement("ul",null,a.a.createElement("li",null,"10.\u5f53\u4e0a\u8ff0\u7684 bundle \u7684 close \u65b9\u6cd5\u88ab\u8c03\u7528\u65f6\uff0c\u4f1a\u89e6\u53d1",a.a.createElement("strong",null,"closeBundle"),"\u94a9\u5b50\uff0c\u5230\u8fd9\u91cc Output \u9636\u6bb5\u6b63\u5f0f\u7ed3\u675f\u3002")),a.a.createElement("blockquote",null,a.a.createElement("p",null,"\u7b2c\u4e00\u6b21\u770b\u8fd9\u4e9b\u94a9\u5b50\u548c\u6b65\u9aa4 \u6839\u672c\u8bb0\u4e0d\u4f4f")),a.a.createElement("h3",{id:"\u819c\u62dc"},a.a.createElement(r["AnchorLink"],{to:"#\u819c\u62dc","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u819c\u62dc"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(r["Link"],{to:"https://rollupjs.org/guide/en/#build-hooks"},"Output Generation Hooks")))))}));l["default"]=e=>{var l=a.a.useContext(r["context"]),n=l.demos;return a.a.useEffect((()=>{var l;null!==e&&void 0!==e&&null!==(l=e.location)&&void 0!==l&&l.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:n})}}}]);