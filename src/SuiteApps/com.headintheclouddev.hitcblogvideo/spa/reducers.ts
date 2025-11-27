import {ActionType} from './actions';
import {IPost} from './components/Post';
import {IAppState} from "./App";

// Reducers take a state, apply an action, and return a new state

export default function appReducer(state: IAppState, action: any): IAppState {
  return {
    user: userReducer(state.user, action),
    posts: postsReducer(state.posts, action),
    error: errorReducer(state.error, action)
  }
}

// Here, state is the currently logged-in user and action is Register, Login, or Logout, along with the new username
function userReducer(state: string, action: { type: Symbol, username: string, error?: string }): string {
  switch (action.type) {
    case ActionType.USER_LOGIN: // User will have been authenticated by the action function, here we're just returning the user for the app state
      return action.username;
    case ActionType.USER_REGISTER:
      return action.username;
    case ActionType.USER_LOGOUT:
      return '';
    default:
      return state;
  }
}

// Here, the state is the current set of posts, and the action is create or fetch, along with the associated data returned from the action creator function
function postsReducer(state: IPost[], action: { type: Symbol, title?: string, content?: string, author?: string, posts?: IPost[], id?: number }): IPost[] {
  if (action.type == ActionType.CREATE_POST) {
    const newPost: IPost = { title: action.title, content: action.content, author: action.author, id: action.id };
    return [newPost, ...state];
  } else if (action.type == ActionType.FETCH_POSTS) {
    return action.posts;
  } else {
    return state;
  }
}

function errorReducer(state: string, action: { type: Symbol, error: string }) {
  if (action.type == ActionType.LOGIN_ERROR) {
    return action.error;
  } else {
    return state;
  }
}
