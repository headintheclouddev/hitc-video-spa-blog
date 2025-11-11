import {TextBox} from "@uif-js/component";

export default function Register() {
  function handleRegister() {
    console.log('handleRegister running');
  }

  return (
    <div>
      <label htmlFor="register-username">Username:</label>
      <TextBox type={TextBox.Type.TEXT} name="register-username" />
      <label htmlFor="register-password">Password:</label>
      <TextBox type={TextBox.Type.PASSWORD} name="register-password" />
      <label htmlFor="register-repeat-password">Repeat Password:</label>
      <TextBox type={TextBox.Type.PASSWORD} name="register-reeat-password" />
      <input type="button" value="Register" onClick={handleRegister} />
    </div>
  )
}
