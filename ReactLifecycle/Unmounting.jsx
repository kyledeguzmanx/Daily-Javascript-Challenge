class SampleComponent extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){   
    return (
      <h1> hi </h1>
      );
    
  }
  componentWillUnmount(){
    //this will execute when the component is about to unmount
  }

}
