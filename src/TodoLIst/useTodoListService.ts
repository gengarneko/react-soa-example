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
  return {
    todoList,
    setTodoList,
  };
}
