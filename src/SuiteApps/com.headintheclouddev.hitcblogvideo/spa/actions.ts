// This is a list of possible actions. The reducer(s) takes a state, applies one of these actions, and returns a new state.
export const ActionType = {
  CREATE_POST: Symbol('createPost'),
  FETCH_POSTS: Symbol('fetchPosts'),
  USER_REGISTER: Symbol('userRegister'),
  USER_LOGIN: Symbol('userLogin'),
  USER_LOGOUT: Symbol('userLogout')
}

// Action creator functions handle possible side effects (such as CRUD operations), so that the reducer function can be pure.
export const Action = {
  createPost(title: string, content: string, author: string) {
    // TODO: create post record
    const id = Date.now();
    return { type: ActionType.CREATE_POST, id, title, content, author };
  },
  fetchPosts() {
    // TODO: Look up blog posts in NetSuite
    const posts = [ // TODO: Get this from the app state
      { id: 1, author: 'Robbie', title: 'Test Post 1', content: 'It is a beautiful day to be a NetSuite developer!' },
      { id: 2, author: 'Robbie', title: 'Test Post 2', content: 'Looking forward to SuiteWorld 2026.' }
    ];
    return { type: ActionType.FETCH_POSTS, posts };
  },
  userRegister(username: string, password: string) {
    // TODO: Create contact in NetSuite
    return { type: ActionType.USER_REGISTER, username };
  },
  userLogin(username: string, password: string) {
    // TODO: Find contact with these credentials
    return { type: ActionType.USER_LOGIN, username };
  },
  userLogout() { // The reducer will clear the logged in user
    return { type: ActionType.USER_LOGOUT };
  }
}
