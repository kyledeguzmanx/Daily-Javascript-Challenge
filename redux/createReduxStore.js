const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer)

/*------------------------------------*/
const store = Redux.createStore(
  (state = 5) => state
);
