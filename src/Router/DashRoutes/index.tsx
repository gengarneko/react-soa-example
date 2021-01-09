import { Alert, Space } from "antd";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DashLayout from "./DashLayout";
import TodoList from "../../TodoLIst";

export default function DashRoutes() {
  const { path } = useRouteMatch();
  return (
    <DashLayout>
      <Switch>
        <Route path={`${path}/home`}>
          <Space direction='vertical' style={{ width: "100%" }}>
            <Alert message='来，我们演示一下怎么实现 TODO LIst' />
            <TodoList />
          </Space>
        </Route>
        <Route path={`${path}/test`}>
          <Alert message='这是一个测试页面' type='warning' />
        </Route>
      </Switch>
    </DashLayout>
  );
}
