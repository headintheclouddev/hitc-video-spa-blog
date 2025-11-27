import {JSX, useSelector, VDom} from "@uif-js/core";
import Post from "./Post";
import {IAppState} from "../App";

export default function PostList() {
  const postsJSON = useSelector((state: IAppState) => state.posts);

  const postsList: JSX.Element[] = [];
  for (const post of postsJSON) {
    postsList.push(
      <VDom.Fragment>
        <Post {...post} short={true} />
        <hr />
      </VDom.Fragment>
    )
  }
  return (<div>{postsList}</div>);
}
