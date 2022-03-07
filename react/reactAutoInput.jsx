class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }
  // Change code above this line
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange}/>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
/*----------------*/
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event){
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    })
  }
  submitMessage(){
    this.setState({ 
      
      messages: [...this.state.messages, this.state.input],
      input:""
    });
  }

  render() {
    const items = this.state.messages.map((item,index) => <li key={index}>{item}</li>)
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange} value={this.state.input}/>
        <button onClick={this.submitMessage}>Add message</button>
        <ul>
          {items}
        </ul>
        
      </div>
    );
  }
};
