import {useSelector, VDom} from '@uif-js/core';
import Login from "./UserLogin";
import Register from "./UserRegister";
import {IAppState} from "../App";
import Logout from "./UserLogout";

export default function UserBar() {
  const user = useSelector((state: IAppState) => state.user);
  if (user) {
    return (
      <VDom.Fragment>
        <Logout />
      </VDom.Fragment>
    )
  } else {
    return (
      <VDom.Fragment>
        <Login />
        <Register />
      </VDom.Fragment>
    )
  }
}
