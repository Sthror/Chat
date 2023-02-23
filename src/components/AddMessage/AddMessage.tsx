import "./AddMessage.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SyntheticEvent, useContext, useState, useRef } from "react";
import { Context } from "../../index";
import UserIprops from "../../types/user";
import { AddNewMessage } from "../../data/AddMessage";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { EmojiIcon } from "../Icons/emoji";

export function AddMessage({ userId, userName }: UserIprops) {
  const [newMessage, setNewMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const { db } = useContext(Context);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    AddNewMessage(db, userId, userName, newMessage);
  };
  const addEmoji = (emoji: any) => {
    const newText = newMessage + emoji.native;
    setShowEmoji(false);
    if (inputRef.current !== null) {
      inputRef?.current.focus();
    }
    setNewMessage(newText);
  };
  return (
    <div className="add-message">
      <Form
        className="add-message__form"
        onSubmit={(e) => {
          submitForm(e);
          setNewMessage("");
        }}
      >
        <Form.Group className="add-message__field" controlId="formBasicMessage">
          <Form.Control
            ref={inputRef}
            type="text"
            placeholder="Сообщение"
            onChange={(e) => setNewMessage(e.currentTarget.value)}
            value={newMessage}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={newMessage.length === 0}
        >
          Отправить
        </Button>
      </Form>
      <div className="add-message__emoji-wrapper">
        <button
          className="add-message__emoji-btn"
          onClick={() => setShowEmoji(!showEmoji)}
        >
          <EmojiIcon />
        </button>
        {showEmoji && (
          <div className="add-message__emoji">
            <Picker data={data} onEmojiSelect={addEmoji} />
          </div>
        )}
      </div>
    </div>
  );
}
