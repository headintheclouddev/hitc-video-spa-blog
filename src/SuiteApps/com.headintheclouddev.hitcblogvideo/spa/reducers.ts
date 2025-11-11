// Reducers take a state, apply an action, and return a new state

export default function appReducer(state: any, action: any) {
  return { ...state }; // We're not changing it, we're returning a new object composed of the old state
}
