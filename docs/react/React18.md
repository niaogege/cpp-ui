---
title: React18.0知识点堆积
order: 7
group:
  title: react生态
  order: 0
---

## concurrent mode 并发模式

有能力同时处理多个状态，且有紧急处理和次紧急处理区分

## 流式服务端渲染

## startTransition

## 自动批处理

## 新的 API

- useInsertionEffect

useInsertionEffect 的工作原理大致 useLayoutEffect 相同，只是此时无法访问 DOM 节点的引用。因此推荐的解决方案是使用这个 Hook 来插入样式表（或者如果你需要删除它们，可以引用它们）：

```js
function useCSS(rule) {
  useInsertionEffect(() => {
    if (!isInserted.has(rule)) {
      isInserted.add(rule);
      document.head.appendChild(getStyleForRule(rule));
    }
  });
  return rule;
}
function Component() {
  let className = useCSS(rule);
  return <div className={className} />;
}
```

- useId

useId 是一个 API，用于在客户端和服务器上生成唯一 ID，同时避免水合不匹配。使用示例：

```js
function Checkbox() {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>选择框</label>
      <input type="checkbox" name="sex" id={id} />
    </div>
  );
}
```