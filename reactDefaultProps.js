const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <p>Number of items: {props.items} </p>
    </div>
  )
};
// Change code below this line

ShoppingCart.defaultProps = {
  items:0
}

//-------------------------------
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10}/>
    { /* Change code above this line */ }
  }
};
