import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChatContainer } from "./components/ChatContainer/ChatContainer";
import { Authorization } from "./components/Authorization/Authorization";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const messagesList = GetMessages();
  return isAuth ? <ChatContainer userId={2} /> : <Authorization />;
}

export default App;
