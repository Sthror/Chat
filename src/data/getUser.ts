import { collection, Firestore, getDocs, query, where } from "firebase/firestore";
import UserIprops from "../types/user";

export const GetUser = async (db: Firestore, login: string, pass: string) => {
  let users: UserIprops[] = [];

  const q = query(
    collection(db, "Users"),
    where("userName", "==", login),
    where("pass", "==", pass)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    users.push(doc.data() as UserIprops);
  });

  return users;
};
