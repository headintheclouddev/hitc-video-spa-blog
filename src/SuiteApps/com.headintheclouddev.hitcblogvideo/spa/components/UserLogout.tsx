import {Button} from "@uif-js/component";
import {useSelector} from "@uif-js/core";
import {IAppState} from "../App";

export default function Logout() {
  const user = useSelector((state: IAppState) => state.user);

  function handleLogout() {
    alert('Coming soon');
  }

  return (
    <div>
      Logged in as: <b>{user}</b> <Button label="Logout" action={handleLogout} />
    </div>
  )
}
