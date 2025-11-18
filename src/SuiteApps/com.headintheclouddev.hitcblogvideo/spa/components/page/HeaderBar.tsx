import ChangeTheme, {ITheme} from "../ChangeTheme";
import UserBar from "../UserBar";
import CreatePost from "../CreatePost";

export default function HeaderBar(props: { setTheme: (theme: ITheme) => void, theme: ITheme }) {
  return (
    <div>
      <h1 style={{ color: props.theme.primaryColor }}>NetSuite Blog</h1>
      <ChangeTheme theme={props.theme} setTheme={props.setTheme} />
      <UserBar />
      <CreatePost />
    </div>
  )
}
