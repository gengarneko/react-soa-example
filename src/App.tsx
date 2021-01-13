import React from "react";
import useAuthService, { AuthService } from "./Auth/useAuthService";
import Router from "./Router";
function App() {
  const authService = useAuthService();
  return (
    <AuthService.Provider value={authService}>
      <Router />
    </AuthService.Provider>
  );
}

export default App;
