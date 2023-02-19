import { useContext, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Context } from "../index";
import MessageIprops from "../types/message";

export const GetUser = (user: string, pass: string) => {
  const [messagesList, setMessagesList] = useState<MessageIprops[]>([]);
  const { db } = useContext(Context);
  const q = query(collection(db, "Users"), where("user", "==", user));
  const querySnapshot = getDocs(q);
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
