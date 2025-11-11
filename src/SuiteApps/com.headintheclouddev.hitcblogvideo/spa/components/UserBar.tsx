import { VDom } from '@uif-js/core';

export default function UserBar() {
  // TODO: If user is logged in, show LogOut, otherwise:
  return (
    <VDom.Fragment>
      <div>Log In</div>
      <div>Register</div>
    </VDom.Fragment>
  )
}
