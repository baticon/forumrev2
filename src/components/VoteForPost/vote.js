import { useMutation } from "@apollo/client";
import { VOTE_POST } from "../query/votePost";
import style from "./vote.module.css";

const VoteForPost = (props) => {
  const postId = props.props;
  const [likePost, { loading }] = useMutation(VOTE_POST);
  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <button
      className={style.voteBtn}
      onClick={() => {
        likePost({
          variables: {
            linkId: postId,
          },
        });
      }}
    >
      👍🏻
    </button>
  );
};

export default VoteForPost;
