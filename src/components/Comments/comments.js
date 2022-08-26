import { useState } from "react";
import ReplyComment from "../ReplyComment/replyComment";
import style from "./comments.module.css";

const Comments = (props) => {
  const [showComments, setShowCom] = useState(false);
  const [replyComment, setReply] = useState(false);
  return (
    <>
      <button className="comments" onClick={() => setShowCom(!showComments)}>
        Show Comments
      </button>
      {showComments && (
        <div className="commentsList">
          {props.props &&
            props.props.map((el, i) => {
              // console.log(el);
              if (el) {
                return (
                  <div className="comment" key={i}>
                    <div className="commentAuthor">
                      {i + 1}
                      {`)`} Name: {el.user.name} id:{el.user.id}
                    </div>
                    <div className="commentDescr">Super!</div>
                    <div className="commentNavigation">
                      <ReplyComment commentId={el.id} />
                    </div>
                  </div>
                );
              }
              return <></>;
            })}
        </div>
      )}
    </>
  );
};

export default Comments;
