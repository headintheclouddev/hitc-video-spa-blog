import {TextBox} from "@uif-js/component";

export default function Login() {
  function handleLogin() {
    console.log('handleLogin running');
  }

  return (
    <div>
      <label htmlFor="login-username">Username:</label>
      <TextBox type={TextBox.Type.TEXT} name="login-username" />
      <label htmlFor="login-password">Password:</label>
      <TextBox type={TextBox.Type.PASSWORD} name="login-password" />
      <input type="button" value="Login" onClick={handleLogin} />
    </div>
  )
}
