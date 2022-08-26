import { useState } from "react";
import style from "./replyComment.module.css";

export default function ReplyComment(commentId) {
  const [reply, setReply] = useState(false);
  const [replyValue, setValue] = useState("");
  return (
    <div className={style.reply}>
      <button className={style.replyBtn} onClick={() => setReply(!reply)}>
        Reply
      </button>
      {reply && (
        <div className={style.replyTextArea}>
          <textarea
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="What are your thoughts ?"
          ></textarea>
          <button
            className={style.sentReply}
            onClick={() => {
              alert(`You said ${replyValue}`);
            }}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}
