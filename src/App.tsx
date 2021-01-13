import React, { Profiler } from "react";
import useAuthService, { AuthService } from "./Auth/useAuthService";
import Router from "./Router";
import useTodoService, { TodoService } from "./TodoLIst/useTodoListService";
function App() {
  const authService = useAuthService();
  const todoService = useTodoService();
  return (
    <AuthService.Provider value={authService}>
      <TodoService.Provider value={todoService}>
        <Profiler id='renderContext' onRender={console.log}>
          <Router />
        </Profiler>
      </TodoService.Provider>
    </AuthService.Provider>
  );
}

export default App;
