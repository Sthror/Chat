import "./Message.scss";

interface IProps {
  text: string;
  modification: "left" | "right";
  time: {
    nanoseconds: number;
    seconds: number;
  };
  name?: string;
}

function Message({ text, modification, time, name }: IProps) {
  const classMsg = `msg msg--${modification}`;
  return (
    <div className={classMsg}>
      <div>
        <span className="msg__time">{new Date(time.seconds*1000).toLocaleString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}</span>
        {name && <span className="msg__user-name">{name}</span>}
      </div>
      <div>{text}</div>
    </div>
  );
}

export default Message;
