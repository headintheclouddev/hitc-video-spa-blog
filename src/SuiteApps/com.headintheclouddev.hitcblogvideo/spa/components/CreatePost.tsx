import {useDispatch, useSelector, useState} from "@uif-js/core";
import {IAppState} from "../App";
import {TextArea, TextBox} from "@uif-js/component";
import {Action} from "../actions";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((state: IAppState) => state.user);
  if (!user) return <p>Please log in to create a post.</p>;

  // Otherwise user is logged in, so they can create a post:

  function handleTitle(evt: TextBox.TextChangedArgs) {
    console.log('handleTitle');
    setTitle(evt.text);
  }

  function handleContent(evt: TextBox.TextChangedArgs) {
    console.log('handleContent');
    setContent(evt.text);
  }

  function handleCreate() {
    if (title && content) dispatch(Action.createPost(title, content, user));
  }

  return (
    <div>
      <div>Author: <b>{user}</b></div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <TextBox type={TextBox.Type.TEXT} name="create-title" text={title} onTextChanged={handleTitle} />
      </div>
      <TextArea text={content} onTextChanged={handleContent} />
      <input type="button" value="Create" onClick={handleCreate} />
    </div>
  )
}
