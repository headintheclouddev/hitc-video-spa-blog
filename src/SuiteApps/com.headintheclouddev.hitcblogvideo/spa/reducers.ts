import {ActionType} from './actions';
import {IPost} from './components/Post';
import {IAppState} from "./App";

// Reducers take a state, apply an action, and return a new state

export default function appReducer(state: IAppState, action: any): IAppState {
  return {
    user: userReducer(state.user, action),
    posts: postsReducer(state.posts, action),
    error: '' // TODO: ?
  }
}

function userReducer(state: string, action: { type: Symbol, user: string}) { // Here, state is the current user and action is Register, Login, or Logout
  if (action.type == ActionType.USER_LOGIN) {

  } else if (action.type == ActionType.USER_REGISTER) {

  } else if (action.type == ActionType.USER_LOGOUT) {

  } else {
    return state;
  }
}

function postsReducer(state: IPost[], action: { type: Symbol,  }) { // Here, posts is the current set of posts, and the action is create or fetch
  return state;
}
