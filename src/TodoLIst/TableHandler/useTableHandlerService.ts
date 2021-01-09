import { useCallback, useContext, useMemo, useState } from "react";
import getServiceToken from "../../Tools/getServiceToken";
import { TodoService } from "../useTodoListService";

// 聚焦逻辑 —— 只暴露当前已选中项给子组件，当前模块只修改这部分逻辑
export const TableHandlerService = getServiceToken(useTableHandlerService);

export default function useTableHandlerService() {
  const [title, setTitle] = useState("");
  const todoService = useContext(TodoService);
  const currentItem = useMemo(
    () =>
      todoService.todoList.find((el) => el.title === title) || {
        title: "",
        description: "",
      },
    [title, todoService]
  );
  const setCurrentItemWithDescription = useCallback(
    (description: string) => {
      todoService.setTodoList((res) => {
        return res.map((el) => {
          if (el.title === title) {
            return { ...el, description };
          }
          return el;
        });
      });
    },
    [todoService, title]
  );
  const deleteCurrentItem = useCallback(() => {
    todoService.setTodoList((res) => res.filter((el) => el.title !== title));
  }, [title, todoService]);
  return {
    title,
    setTitle,
    currentItem,
    setCurrentItemWithDescription,
    deleteCurrentItem,
  };
}
