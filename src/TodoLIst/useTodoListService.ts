import { useLocalStorageState, useMount } from "ahooks";
import { useEffect, useState } from "react";
import getServiceToken from "../Tools/getServiceToken";

export const TodoService = getServiceToken(useTodoService);

export interface TodoData {
  title: string;
  description: string;
}

export default function useTodoService() {
  // 存储的编辑列表

  const [todoList, setTodoList] = useState<TodoData[]>([]);
  const [stored, setStored] = useLocalStorageState<TodoData[]>("todoList", []);
  useMount(() => {
    if (stored) {
      setTodoList(stored);
    }
  });
  useEffect(() => {
    if (todoList !== stored) {
      setStored(todoList);
    }
  }, [todoList, setStored, stored]);

  // 测试服务变更是否会影响 update
  // 同时在两个跨层级注入，如果两者时间相差不大
  // 比较 renderContext 和 local 观察耗时
  // 如果相差在 ns 级，说明只是运行函数耗时
  // 如果相差在 ms 级，说明有比较运算过程

  // 结果 —— 有比较运算
  // react context 是真的 傻！
  const [checkUpdate, setCheckUpdate] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setCheckUpdate("checked");
    }, 1000);
  }, []);
  return {
    todoList,
    setTodoList,
    checkUpdate,
  };
}
