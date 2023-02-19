import { useContext, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Context } from "../index";
import MessageIprops from "../types/message";

export const GetUser = () => {
  const [messagesList, setMessagesList] = useState<MessageIprops[]>([]);
  const { db } = useContext(Context);

  const querySnapshot = getDocs(collection(db, "Users"));
  querySnapshot.then((doc: any) => {
    let messages: MessageIprops[] = [];
    doc.forEach((element: any) => {
      messages.push(element.data());
    });
    setMessagesList(messages);
    console.log(messages);    
  });

  return messagesList;
};
