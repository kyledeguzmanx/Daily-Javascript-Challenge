//store creation
const store = Redux.createStore(
  (state = {login: false}) => state
);

//action creator
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action to redux store:
//pass in action created in action creator
store.dispatch(loginAction());
store.dispatch({type: "LOGIN"});
