import {ActionType} from './actions';
import {IPost} from './components/Post';
import {IAppState} from "./App";

// Reducers take a state, apply an action, and return a new state

export default function appReducer(state: IAppState, action: any): IAppState {
  return {
    user: userReducer(state.user, action),
    posts: postsReducer(state.posts, action),
    error: '' // TODO: Do we really need this??
  }
}

// Here, state is the currently logged-in user and action is Register, Login, or Logout, along with the new username
function userReducer(state: string, action: { type: Symbol, user: string }): string {
  switch (action.type) {
    case ActionType.USER_LOGIN: // User will have been authenticated by the action function, here we're just returning the user for the app state
      return action.user;
    case ActionType.USER_REGISTER:
      return action.user;
    case ActionType.USER_LOGOUT:
      return '';
    default:
      return state;
  }
}

// Here, the state is the current set of posts, and the action is create or fetch, along with the associated data returned from the action creator function
function postsReducer(state: IPost[], action: { type: Symbol, title?: string, content?: string, author?: string, posts?: IPost[] }): IPost[] {
  if (action.type == ActionType.CREATE_POST) {
    const newPost: IPost = { title: action.title, content: action.content, author: action.author };
    return [newPost, ...state];
  } else if (action.type == ActionType.FETCH_POSTS) {
    return action.posts;
  } else {
    return state;
  }
}
