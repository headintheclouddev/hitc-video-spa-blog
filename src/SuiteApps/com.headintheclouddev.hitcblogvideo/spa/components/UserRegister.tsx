import {Button, TextBox} from "@uif-js/component";
import {useDispatch, useState} from "@uif-js/core";
import {Action} from "../actions";

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const dispatch = useDispatch();

  const eventHandlers = {
    [TextBox.Event.TEXT_CHANGED]: ({text}) => {
      console.log('Login username changed to', text); // Runs on every keystroke
      setUsername(text);
    }
  }
  function handlePassword(evt: TextBox.TextChangedArgs) {
    setPassword(evt.text);
  }
  function handlePassword2(evt: TextBox.TextChangedArgs) {
    setPassword2(evt.text);
  }

  function handleRegister() {
    console.log('handleRegister running');
    dispatch(Action.userRegister(username, password));
  }

  return (
    <div>
      <label htmlFor="register-username">Username:</label>
      <TextBox type={TextBox.Type.TEXT} name="register-username" text={username} on={eventHandlers} />
      <label htmlFor="register-password">Password:</label>
      <TextBox type={TextBox.Type.PASSWORD} name="register-password" text={password} onTextChanged={handlePassword} />
      <label htmlFor="register-repeat-password">Repeat Password:</label>
      <TextBox type={TextBox.Type.PASSWORD} name="register-reeat-password" text={password2} onTextChanged={handlePassword2} />
      <Button label="Register" action={handleRegister} enabled={username.length > 0 && password.length > 0 && password == password2} />
    </div>
  )
}
