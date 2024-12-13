import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

// Landing Page Component
function LandingPage({ onLogin }: { onLogin: () => void }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Our Application</h1>
      <p>Explore the amazing features of our app.</p>
      <button onClick={onLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Get Started
      </button>
    </div>
  );
}

function RootComponent() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleLogin = () => {
    setShowLandingPage(false);
  };

  return showLandingPage ? (
    <LandingPage onLogin={handleLogin} />
  ) : (
    <Authenticator>
      <App />
    </Authenticator>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
