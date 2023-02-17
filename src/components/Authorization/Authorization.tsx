import "./Authorization.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Authorization.scss";

export function Authorization() {
  return (
    <section className="login">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" placeholder="Введите имя" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}
