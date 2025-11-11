import {Heading} from '@uif-js/component';
import {JSX, Store, VDom, useMemo, useState, useEffect} from '@uif-js/core';
import PostList from "./components/PostList";
import {ThemeContext} from "./contexts";
import ChangeTheme from "./components/ChangeTheme";
import UserBar from "./components/UserBar";
import {IPost} from "./components/Post";
import appReducer from "./reducers";

export default function App(): JSX.Element {
  const initialState: IAppState = { user: '', posts: [], error: '' };
  const [state, setState] = useState(initialState);
  const store = useMemo(() => {
    return Store.create({
      reducer: appReducer,
      state,
      onStateChanged: ({ currentState }) => setState(currentState),
    });
  });

  useEffect(() => { // Keeps the state hook in sync with the redux store state
    return store.subscribe(() => setState(store.getState()));
  }, []);

  const [theme, setTheme] = useState({ primaryColor: 'deepskyblue', secondaryColor: 'coral' });
  const context = {
    // [StateContext]: { state, dispatch }, // This doesn't work
    [ThemeContext]: theme
  }
  return (
    <VDom.Context value={context}>
      <div>
        <h1 style={{ color: theme.primaryColor }}>NetSuite Blog</h1>
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <UserBar />
        <Heading>(When logged in) Create New Post</Heading>
        <PostList />
      </div>
    </VDom.Context>
  );
}

export interface IAppState {
  user: string;
  posts: IPost[];
  error: string;
}
