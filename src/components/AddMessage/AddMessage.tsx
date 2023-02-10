import "./AddMessage.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { SyntheticEvent, useContext, useState } from "react";
import { Context } from "../../index";

interface AddMessageIProps {
  user: number;
}

export function AddMessage({ user }: AddMessageIProps) {
  const [newMessage, setNewMessage] = useState("");
  const { db } = useContext(Context);
  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    addDoc(collection(db, "messages"), {
      date: serverTimestamp(),
      userID: user,
      message: newMessage,
    });
  };
  return (
    <Form
      className="add-message"
      onSubmit={(e) => {
        submitForm(e);
        setNewMessage("");
      }}
    >
      <Form.Group className="add-message__field" controlId="formBasicMessage">
        <Form.Control type="text" placeholder="Сообщение" onChange={(e) => setNewMessage(e.currentTarget.value)} value={newMessage} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={newMessage.length === 0}>
        Отправить
      </Button>
    </Form>
  );
}
