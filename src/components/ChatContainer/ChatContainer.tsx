import Message from "../Message/Message";
import { useEffect, useState } from "react";
import { AddMessage } from "../AddMessage/AddMessage";
import "./ChatContainer.scss";
import { GetMessages } from "../../data/getMessages";
import MessageIprops from "../../types/message";

interface ChatContainerIprops {
  userId: number;
}

export const ChatContainer = ({ userId }: ChatContainerIprops) => {
  const [messagesList, setMessagesList] = useState<MessageIprops[]>(GetMessages());

  return (
    <>
      <article className="chat-block">
        {messagesList.map((message) => (
          <Message
            text={message.message}
            modification={message.userID === userId ? "right" : "left"}
            time={message.date}
          />
        ))}
      </article>
      <AddMessage user={userId} />
    </>
  );
};
