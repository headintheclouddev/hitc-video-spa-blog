import { VDom } from '@uif-js/core';
import Login from "./UserLogin";

export default function UserBar() {
  // TODO: If user is logged in, show LogOut, otherwise:
  return (
    <VDom.Fragment>
      <Login />
      <div>Register</div>
    </VDom.Fragment>
  )
}
