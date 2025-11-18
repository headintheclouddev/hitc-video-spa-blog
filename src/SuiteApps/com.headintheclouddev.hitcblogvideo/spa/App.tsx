import {JSX, Router, Store, VDom, useMemo, useState, useEffect,} from '@uif-js/core';
import {ThemeContext} from "./contexts";
import {IPost} from "./components/Post";
import appReducer from "./reducers";
import {Action} from "./actions";
import {RootRoute} from "./BlogAppRoute";
import HeaderBar from "./components/page/HeaderBar";
import HomePage from "./components/page/HomePage";
import PostPage from "./components/page/PostPage";

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

  useEffect(() => {
    console.log('useEffect - fetchPosts', new Date());
    store.dispatch(Action.fetchPosts());
  }, []);

  const [theme, setTheme] = useState({ primaryColor: 'deepskyblue', secondaryColor: 'coral' });
  const context = {
    // [StateContext]: { state, dispatch }, // This doesn't work
    [ThemeContext]: theme
  }

  return (
    <Router.Hash>
      <Store.Provider store={store}>
        <VDom.Context value={context}>
          <div>
            <HeaderBar setTheme={setTheme} theme={theme} />
            <hr />
            <Router.Routes>
              <Router.Route path={RootRoute.HOMEPAGE} exact={true}>
                <HomePage />
              </Router.Route>
              <Router.Route path={RootRoute.POST} exact={true}>
                <PostPage />
              </Router.Route>
            </Router.Routes>
          </div>
        </VDom.Context>
      </Store.Provider>
    </Router.Hash>
  );
}

export interface IAppState {
  user: string;
  posts: IPost[];
  error: string;
}
