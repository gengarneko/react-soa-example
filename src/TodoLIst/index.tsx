import { Space, Table } from "antd";
import React, { Profiler, useContext } from "react";
import useTodoService, { TodoService, TodoData } from "./useTodoListService";
import TableHandler from "./TableHandler";
import CounterInput from "./CounterInput";

export default function Counter() {
  const todoService = useContext(TodoService);
  const newTodoService = useTodoService();
  return (
    <TodoService.Provider value={newTodoService}>
      <Profiler id='local' onRender={console.log}>
        <Space direction='vertical' style={{ width: "100%" }}>
          <CounterInput />
          <Table
            dataSource={todoService.todoList}
            columns={[
              { title: "标题", dataIndex: "title" },
              { title: "详情", dataIndex: "description" },
              {
                title: "操作",
                render: (res: TodoData) => {
                  return <TableHandler title={res.title} />;
                },
              },
            ]}
            rowKey='title'
          />
        </Space>
      </Profiler>
    </TodoService.Provider>
  );
}
