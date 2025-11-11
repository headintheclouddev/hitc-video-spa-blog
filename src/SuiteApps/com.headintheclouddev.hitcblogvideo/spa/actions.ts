// This is a list of possible actions. The reducer(s) takes a state, applies one of these actions, and returns a new state.
export const ActionType = {
  CREATE_POST: Symbol('createPost'),
  FETCH_POSTS: Symbol('fetchPosts'),
  USER_REGISTER: Symbol('userRegister'),
  USER_LOGIN: Symbol('userLogin')
}

// Action creator functions handle possible side effects (such as CRUD operations), so that the reducer function can be pure.
export const Action = {
  createPost(title: string, content: string) {
    // TODO: create post record
    const id = 0;
    return { type: ActionType.CREATE_POST, id, title, content };
  },
  fetchPosts() {
    // TODO: Look up blog posts in NetSuite
    const posts = [ // TODO: Get this from the app state
      { author: 'Robbie', title: 'Test Post 1', content: 'It is a beautiful day to be a NetSuite developer!' },
      { author: 'Robbie', title: 'Test Post 2', content: 'Looking forward to SuiteWorld 2026.' }
    ];
    return { type: ActionType.FETCH_POSTS, posts };
  },
  userRegister(username: string, password: string) {
    // TODO: Create contact in NetSuite
    const newContactId = 0;
    return { type: ActionType.USER_REGISTER, username, id: newContactId };
  },
  userLogin(username: string, password: string) {
    // TODO: Find contact with these credentials
    let loggedInContactId = 0;
    return { type: ActionType.USER_LOGIN, username, id: loggedInContactId };
  }
}
