import {useSelector} from "@uif-js/core";
import {IAppState} from "../App";
import {TextArea, TextBox} from "@uif-js/component";

export default function CreatePost() {
  const user = useSelector((state: IAppState) => state.user);
  if (!user) return <p>Please log in to create a post.</p>;
  // Otherwise user is logged in, so they can create a post:
  return (
    <div>
      <div>Author: <b>{user}</b></div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <TextBox type={TextBox.Type.TEXT} name="create-title" />
      </div>
      <TextArea />
      <input type="button" value="Create" />
    </div>
  )
}
