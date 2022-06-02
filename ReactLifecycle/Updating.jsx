class SampleComponent extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){   
    return (
      <h1> hi </h1>
      );
    
  }
  shouldComponentUpdate(){
    //return boolean that determines if a component should update upon state/props change
    if(props.name.length != 0)
       return true;
    else 
      return false;
  }
}
