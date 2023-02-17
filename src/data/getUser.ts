import { useContext, useState } from "react";
import { Context } from "../index";
export const GetMessages = (id: number) => {
  const [user, setUser] = useState(0);
  const { db } = useContext(Context);
  const userRef = db.collection("Users");
  const snapshot = userRef.where("UserID", "==", id).get();
  snapshot.then((data) => data.forEach((doc: any) => {
    console.log(doc.id, "=>", doc.data());
  });

  return user;
};
