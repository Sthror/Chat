import { addDoc, collection, Firestore, serverTimestamp } from "firebase/firestore";

export const AddNewMessage = (
  db: Firestore,
  userId: number,
  userName: string,
  message: string
) => {
  addDoc(collection(db, "messages"), {
    date: serverTimestamp(),
    userId: userId,
    userName: userName,
    message: message,
  });
};
