class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits/>
        <Vegetables/>
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood/>, document.getElementById("challenge-node"));
//-------------

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
