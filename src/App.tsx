import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChatContainer } from "./components/ChatContainer/ChatContainer";
import { Authorization } from "./components/Authorization/Authorization";

function App() { 
  const userName = sessionStorage.getItem("userName");
  const userId = sessionStorage.getItem("userId");
  const currentUser = userName !== null && userId !== null 
  ? {
    userId: +(userId),
    userName: userName,
  } : null
  const [user, setUser] = useState(currentUser);
  if (user !== null && user.userId !== null && user.userName !== null) {
    return <ChatContainer user={user} />;
  }

  return <Authorization setUser={setUser} />;
}

export default App;
