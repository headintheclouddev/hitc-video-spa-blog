import {Heading} from '@uif-js/component';
import {JSX, VDom, useState} from '@uif-js/core';
import PostList from "./components/PostList";
import {ThemeContext} from "./contexts";

export default function App(): JSX.Element {
  const [theme, setTheme] = useState({ primaryColor: 'deepskyblue', secondaryColor: 'coral' });
  const context = {
    // [StateContext]: { state, dispatch }, // This doesn't work
    [ThemeContext]: theme
  }
  return (
    <VDom.Context value={context}>
      <div>
        <h1 style={{ color: theme.primaryColor }}>NetSuite Blog</h1>
        <Heading>Theme control</Heading>
        <Heading>User bar - login and registration</Heading>
        <Heading>(When logged in) Create New Post</Heading>
        <PostList />
      </div>
    </VDom.Context>
  );
}
