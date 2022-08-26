import style from "./feed.module.css";
import { useQuery } from "@apollo/client";
import { GET_FEED } from "../query/feed";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../query/addPost";
import Comments from "../Comments/comments";
import VoteForPost from "../VoteForPost/vote";

const FeedPage = () => {
  const token = sessionStorage.getItem("ACCESS_TOKEN");
  const { data, loading, error } = useQuery(GET_FEED);
  const [addPost, options] = useMutation(ADD_POST);
  const [isNeedToOpenModal, setModal] = useState(false);
  const [url, setUri] = useState();
  const [description, setDescr] = useState();

  return (
    <div className={style.FeedPage}>
      {loading && <div className={style.loading}></div>}
      <div className={style.Feeds}>
        {token && (
          <button
            className={style.addPostBtn}
            onClick={() => {
              setModal(!isNeedToOpenModal);
            }}
          >
            +
          </button>
        )}
        {data &&
          data.feed.links.map((elem, i) => {
            return (
              <div className={style.post} key={i}>
                <div className={style.postDescription}>
                  Desc : {elem.description}
                </div>
                <div className={style.postURL}>Link: {elem.url}</div>
                <div className={style.postFooter}>
                  <div className={style.postAuthor}>
                    Author: {elem.postedBy.name} <br />
                    id: {elem.postedBy.id}
                  </div>
                  <div className={style.postVotes}>
                    Votes : {elem.votes.length}
                    <VoteForPost props={elem.id} />
                  </div>
                </div>

                <Comments props={elem.votes} />
              </div>
            );
          })}
      </div>
      {isNeedToOpenModal && (
        <div className={style.overlay}>
          <div className={style.modal}>
            <div className={style.modalHeader}>
              Add Post{" "}
              <button
                className={style.closeBtn}
                onClick={() => {
                  setModal(!isNeedToOpenModal);
                }}
              >
                x
              </button>
            </div>

            <div className={style.modalBody}>
              {options.loading && <div className={style.loading}></div>}
              <form className={style.modalForm}>
                URL :{" "}
                <input
                  placeholder="Link"
                  onChange={(e) => {
                    setUri(e.target.value);
                  }}
                />
                Description :{" "}
                <input
                  placeholder="Ignition is the first tool that..."
                  onChange={(e) => {
                    setDescr(e.target.value);
                  }}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addPost({
                      variables: {
                        url: url,
                        description: description,
                      },
                    }).then((data) => {
                      if (data) {
                        // console.log(options);
                        setModal(false);
                      }
                    });
                  }}
                >
                  Post
                </button>
              </form>
            </div>
            {/* <div className="modalFooter"></div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedPage;
