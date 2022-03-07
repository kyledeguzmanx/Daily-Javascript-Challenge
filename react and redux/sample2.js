// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";

const addMessage = (text) => {
  return {
    type: ADD,
    message: text
  }
}

const messageReducer = (state =[],action) => {
  if(action.type == ADD){
    return state.concat(action.message)
  }
  else{
    return state;
  }
}

const store = Redux.createStore(messageReducer);
