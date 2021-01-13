import React from "react";
import LoginWrapper from "./LoginWrapper";
import LoginForm from "./LoginForm";

export default function Login() {
  const loginForm = <LoginForm />;
  console.log(
    "当前子组件 loginform 的更新队列",
    (loginForm as any)._owner.updateQueue
  );
  return (
    <LoginWrapper>
      <h2>登录验证</h2>
      {loginForm}
    </LoginWrapper>
  );
}
