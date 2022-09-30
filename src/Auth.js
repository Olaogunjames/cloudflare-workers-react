import React from "react";
import { AuthProvider } from "oidc-react";
import "./App.css";
const oidcConfig = {
  onSignIn: async (response) => {
    alert(
      "You logged in :" + response.profile.given_name 
    );
    window.location.hash = "";
  },
  authority: "replace with your instance url",
  clientId: "replace with your client ID",
  responseType: "code",
  redirectUri: "replace with your redirect url",
  scope: "openid profile email",
};

function Dashboard() {
  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <header className="App-header">
          <p>Hello World</p>
        </header>
      </div>
    </AuthProvider>
  );
}

export default Dashboard;