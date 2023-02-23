import "./Message.scss";
interface IProps {
  text: string;
  modification: "left" | "right" | "come-in";
  date: {
    nanoseconds: number;
    seconds: number;
  };
  name?: string;
}

function Message({ text, modification, date, name }: IProps) {
  const classMsg = `msg msg--${modification}`;

  return (
    <div className={classMsg}>
      <div>
        {modification !== "come-in" && (
          <>
            <span className="msg__time">
              {new Date(date.seconds * 1000).toLocaleString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            {name && <span className="msg__user-name">{name}</span>}
          </>
        )}
      </div>
      <div>{text}</div>
    </div>
  );
}

export default Message;
