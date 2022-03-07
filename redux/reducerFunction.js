const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  if(action.type == "LOGIN"){
    return{
      login: true
    }
  }
  else{
    return state;
  }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

/*----------------------------*/
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch(action.type){
    case "LOGIN":
      return {
        authenticated: true
      }
    break;
    case "LOGOUT":
      return {
        authenticated: false
      }
    break;
    default:
      return state;
    break;
  }
}

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
/*----------------------*/
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch(action.type){
    case "LOGIN":
      return {
        authenticated: true
      }
    break;
    case "LOGOUT":
      return {
        authenticated: false
      }
    break;
    default:
      return state;
    break;
  }
}

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
/*-----------------*/
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
        return action.text
      break;
    default:
      return state;
  }
};

const addNoteText = (note) => {
    return {
      type: ADD_NOTE,
      text: note
    }
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
