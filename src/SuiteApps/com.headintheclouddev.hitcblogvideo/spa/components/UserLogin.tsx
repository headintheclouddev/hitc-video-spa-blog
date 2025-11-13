import {TextBox} from "@uif-js/component";
import {useDispatch, useState} from "@uif-js/core";
import {Action} from "../actions";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const usernameEventHandlers = {
    [TextBox.Event.TEXT_CHANGED]: ({ text }) => {
      setUsername(text);
    }
  }

  function handlePassword(evt: TextBox.TextChangedArgs) {
    setPassword(evt.text);
  }

  function handleLogin() {
    console.log('handleLogin running');
    if (username && password) dispatch(Action.userLogin(username, password));
  }

  return (
    <div>
      <label htmlFor="login-username">Username:</label>
      <TextBox type={TextBox.Type.TEXT} name="login-username" text={username} on={usernameEventHandlers} />
      <label htmlFor="login-password">Password:</label>
      <TextBox type={TextBox.Type.PASSWORD} name="login-password" text={password} onTextChanged={handlePassword} />
      <input type="button" value="Login" onClick={handleLogin} />
    </div>
  )
}
