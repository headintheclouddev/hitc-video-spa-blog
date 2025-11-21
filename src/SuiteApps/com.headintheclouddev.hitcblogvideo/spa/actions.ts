import query from "N/query";
import record from "N/record";

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
    // const posts = [
    //   { id: 1, author: 'Robbie', title: 'Test Post 1', content: 'It is a beautiful day to be a NetSuite developer!' },
    //   { id: 2, author: 'Robbie', title: 'Test Post 2', content: 'Looking forward to SuiteWorld 2026.' }
    // ];
    // return { type: ActionType.FETCH_POSTS, posts };
    return async (dispatch: any) => {
      const postsQuery = await query.runSuiteQL.promise({
        query: `
          SELECT id, name AS title, custrecord_blog_content AS content, BUILTIN.DF(owner) AS author
          FROM customrecord_blog_post
          WHERE isInactive = 'F'
          ORDER BY id DESC
        `
      });
      const posts = postsQuery.asMappedResults();
      dispatch({ type: ActionType.FETCH_POSTS, posts });
    }
  },
  userRegister(username: string, password: string) {
    // Create contact in NetSuite
    return async (dispatch: any) => {
      const contact = await record.create.promise({ type: 'contact' });
      contact.setValue('subsidiary', '1');
      contact.setValue('entityid', username);
      contact.setValue('custentity_blog_password', password);
      const contactId = await contact.save.promise();
      console.log("Successfully created contact", contactId);
      dispatch({ type: ActionType.USER_REGISTER, username });
    }
  },
  userLogin(username: string, password: string) {
    // TODO: Find contact with these credentials
    return { type: ActionType.USER_LOGIN, username };
  },
  userLogout() { // The reducer will clear the logged in user
    return { type: ActionType.USER_LOGOUT };
  }
}
