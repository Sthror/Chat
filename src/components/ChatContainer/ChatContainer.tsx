import Message from "../Message/Message";
import { useEffect } from "react";
import { AddMessage } from "../AddMessage/AddMessage";
import { Authorization } from "../Authorization/Authorization";
import "./ChatContainer.scss";
import { GetMessages } from "../../data/getMessages";

interface ChatContainerIprops {
  userId: number;
}

export const ChatContainer = ({ userId }: ChatContainerIprops) => {
  const messagesList = GetMessages();

  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, []);

  return (
    <>
      <Authorization />
      <article className="chat-block">
        {messagesList.map((message) => (
          <Message text={message.message} modification={message.userID === userId ? "right" : "left"} time={message.date} />
        ))}
      </article>
      <AddMessage user={userId} />
    </>
  );
};
