import Message from "../Message/Message";
import { messagesData } from "../../data/Messages";
import { useContext, useEffect } from "react";
import { AddMessage } from "../AddMessage/AddMessage";
import { Authorization } from "../Authorization/Authorization";
import { doc, setDoc } from "firebase/firestore";
import "./ChatContainer.scss";
import { Context } from "../../index";

export const ChatContainer = () => {
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, []);

  const { db } = useContext(Context);

  setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  });

  return (
    <>
      <Authorization />
      <article className="chat-block">
        {messagesData.map((message) => (
          <Message text={message.text} modification={message.modifaction as "left" | "right"} time={message.time} name={message.user} />
        ))}
      </article>
      <AddMessage user={1} />
    </>
  );
};
