import React, { useEffect } from "react";
import useAuthService, { AuthService } from "./Auth/useAuthService";
import Router from "./Router";
function App() {
  const authService = useAuthService();
  useEffect(() => {
    setTimeout(() => {
      authService.setCheckUpdate("change the context");
    }, 1000);
  }, [authService]);
  return (
    <AuthService.Provider value={authService}>
      <Router />
    </AuthService.Provider>
  );
}

export default App;
