import { JSX, VDom } from "@uif-js/core";
import Post, {IPost} from "./Post";

export default function PostList() {
  // const postsJSON: IPost[] = [ // TODO: Get this from the app state
  //   { author: 'Robbie', title: 'Test Post 1', content: 'It is a beautiful day to be a NetSuite developer!' },
  //   { author: 'Robbie', title: 'Test Post 2', content: 'Looking forward to SuiteWorld 2026.' }
  // ];
  const postsList: JSX.Element[] = [];
  for (const post of postsJSON) {
    postsList.push(
      <VDom.Fragment>
        <Post {...post} />
        <hr />
      </VDom.Fragment>
    )
  }
  return (<div>{postsList}</div>);
}
