import { useState } from "react";
import style from "./search.module.css";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { GET_SEARCH } from "../query/search";
import Comments from "../Comments/comments";
import VoteForPost from "../VoteForPost/vote";

const Search = () => {
  const [search, setSearch] = useState("");
  //   const { data, loading, error } = useQuery(GET_SEARCH);
  //   const { data, loading, error } = useQuery(GET_SEARCH(search));

  async function getResource(data) {
    const link = createHttpLink({
      uri: "https://api.vrmarketing.guru",
    });

    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: link,
    });

    return await client
      .query({
        query: data,
      })
      .then((result) => console.log(result.data));
  }

  const { data, loading, error } = (search) => getResource(GET_SEARCH(search));

  return (
    <div classNaemt={style.container}>
      <input
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      {search && data
        ? data.feed.links.map((elem, i) => {
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
          })
        : ""}
    </div>
  );
};

export default Search;
