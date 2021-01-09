import { useCallback, useContext } from "react";
import { Form, message } from "antd";
import { useRequest } from "ahooks";
import { mockRequestData } from "../../../Tools/mockRequest";
import { AuthService } from "../../useAuthService";
import { useHistory } from "react-router-dom";

export default function useLoginFormService() {
  // 注入上层服务
  const authService = useContext(AuthService);
  const history = useHistory();
  // 表格
  const [form] = Form.useForm();
  // 请求
  const requestLogin = useRequest(
    (formData) =>
      mockRequestData({
        token: "this is token",
        userInfo: { name: "im og", formData },
      }),
    {
      manual: true,
      debounceInterval: 300,
      onSuccess: (res) => {
        message.success("登录成功");
        authService.setToken(res.token);
        authService.setUserInfo(res.userInfo);
        history.push("/dash/home");
      },
    }
  );
  // 约束依赖，request 是以 data 为变更标识，run 则不会
  const runRequestLogin = requestLogin.run;
  // 发送请求
  const handleSubmit = useCallback(
    (formData) => {
      runRequestLogin(formData);
    },
    [runRequestLogin]
  );
  return {
    form,
    loading: requestLogin.loading,
    handleSubmit,
  };
}
