import Message from "../Message/Message";
import { useContext, useState } from "react";
import { AddMessage } from "../AddMessage/AddMessage";
import "./ChatContainer.scss";
import MessageIprops from "../../types/message";
import { Context } from "../../index";
import UserIprops from "../../types/user";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { USERS_STATUS } from "../../constants";

interface ChatContainerIProps {
  user: UserIprops;
}

export const ChatContainer = ({ user }: ChatContainerIProps) => {
  const sessionTimeStart = sessionStorage.getItem("sessionTimeStart");
  const [date] = useState(
    sessionTimeStart !== null ? new Date(+sessionTimeStart) : new Date()
  );

  const [messages, setMessages] = useState<MessageIprops[]>([]);

  const { db } = useContext(Context);

  const q = query(
    collection(db, "messages"),
    where("date", ">=", date),
    orderBy("date", "asc")
  );

  onSnapshot(q, (querySnapshot) => {
    let messagesFromQuery: MessageIprops[] = [];
    querySnapshot.forEach((doc) => {
      messagesFromQuery.push(doc.data() as MessageIprops);
    });
    if (messages.length !== messagesFromQuery.length) {
      setMessages(messagesFromQuery);
    }
  });

  return (
    <>
      <article className="chat-block">
        {messages.map((message, index) => {
          const unique = `message-${index}`;
          const userComeIn = message.message === USERS_STATUS.COME_IN;
          const modification =
            message.userId === user.userId ? "right" : "left";
          return (
            <Message
              key={unique}
              text={userComeIn ? `${message.userName} в чате` : message.message}
              modification={userComeIn ? "come-in" : modification}
              date={message.date}
              name={message.userName}
            />
          );
        })}
      <AddMessage {...user} />
      </article>
    </>
  );
};
