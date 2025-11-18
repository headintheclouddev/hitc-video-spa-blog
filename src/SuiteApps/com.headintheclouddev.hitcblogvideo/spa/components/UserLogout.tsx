import {Button} from "@uif-js/component";
import {useDispatch, useSelector} from "@uif-js/core";
import {IAppState} from "../App";
import {Action} from "../actions";

export default function Logout() {
  const user = useSelector((state: IAppState) => state.user);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(Action.userLogout());
  }

  return (
    <div>
      Logged in as: <b>{user}</b> <Button label="Logout" action={handleLogout} />
    </div>
  )
}
