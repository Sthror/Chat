import "./Authorization.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Authorization.scss";
import { SyntheticEvent, useContext, useState } from "react";
import { GetUser } from "../../data/getUser";
import { Context } from "../../index";
import { AddNewMessage } from "../../data/AddMessage";
import { USERS_STATUS } from "../../constants";
import UserIprops from "../../types/user";

interface IProps {
  setUser: (value: UserIprops) => void;
}

export function Authorization({ setUser }: IProps) {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const { db } = useContext(Context);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    GetUser(db, name, pass).then((data) => {
      if (data.length) {
        const user = data[0];
        AddNewMessage(db, user.userId, user.userName, USERS_STATUS.COME_IN);
        setUser(user);
        sessionStorage.setItem("userName", user.userName);
        sessionStorage.setItem("userId", String(user.userId));
        sessionStorage.setItem(
          "sessionTimeStart",
          String(new Date().getTime())
        );
        return;
      }
      setError("Ошибка авторизации, проверте логин/пароль");
    });
  };
  return (
    <section className="login">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите имя"
            name="name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Пароль"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.currentTarget.value)}
          />
        </Form.Group>

        {error.length > 0 && <div className="login__error">{error}</div>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}
