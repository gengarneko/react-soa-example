import React from "react";
import { Button, Form, Input } from "antd";
import useLoginFormService from "./useLoginFormService";

export default function LoginForm() {
  const loginFormService = useLoginFormService();
  return (
    <Form
      layout='vertical'
      form={loginFormService.form}
      onFinish={loginFormService.handleSubmit}
    >
      <Form.Item
        name='name'
        label='姓名'
        rules={[{ required: true, message: "此为必填项" }]}
      >
        <Input placeholder='请输入姓名' />
      </Form.Item>
      <Form.Item name='passsword' label='密码'>
        <Input placeholder='请输入密码' type='password' />
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          block
          loading={loginFormService.loading}
        >
          现在登录
        </Button>
      </Form.Item>
    </Form>
  );
}
