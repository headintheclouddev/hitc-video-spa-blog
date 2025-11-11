import { VDom } from '@uif-js/core';
import Login from "./UserLogin";
import Register from "./UserRegister";

export default function UserBar() {
  // TODO: If user is logged in, show LogOut, otherwise:
  return (
    <VDom.Fragment>
      <Login />
      <Register />
    </VDom.Fragment>
  )
}
