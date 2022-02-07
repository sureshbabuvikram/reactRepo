import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
//5/2/22
/*class Myclass1 extends React.Component
{
  render()
  {
    return <h1>KARUNA MOORTHY SIR IS MY{this.props.var}</h1> 
  }
}

class Myclass2 extends React.Component
{
  render()
  {
    const c="ROLE MODEL"
    return <Myclass1 var={c} /> 
  }
}
ReactDOM.render(<Myclass2 />,document.getElementById('root'));*/


// Date:7/2/22 EXERCISES
/*class Mystate extends React.Component
{
  constructor()
  {
    super();
    this.state={initialvalue:"welcome",name:"to INFINIJITH TECHNOLOGY"}
  }
  changevalue = () =>
  {
    this.setState({initialvalue:"LEARN",name:" ReactJS"});
  }
  render()
  {
    return <div>
      <h1>{this.state.initialvalue}{this.state.name}</h1>
       <br/>
       <button type="button" onClick={this.changevalue}>Exit</button>
      </div>  }
}
ReactDOM.render(<Mystate />,document.getElementById('root'));*/

//LIFECYCLE 
/*class Lifecycle extends React.Component
{
  constructor()
  {
    super();
    this.state={value:"Welcome",name:"to INFINIJITH TECHNOLOGY"}
  }
  changevalue = () =>
  {
    this.setState({value:"THANKYOU",name:" SIR"});
  }
  componentWillMount()
  {
    alert("BEFORE RENDER METHOD");
  }
  render()
  {
    return <div>
    <h1>{this.state.value}{this.state.name}</h1>
     <br/>
     <button type="button" onClick={this.changevalue}>Exit</button>
    </div>
  }
  componentDidMount()
  {
    setTimeout(()=>{
      this.setState({value:"LEARN",name:" Reactjs"})},5000)
    
  }
  componentWillUpdate()
  {
    alert("DO YOU WANT UPDATE A NEW VALUES");
  }
 } 
ReactDOM.render(<Lifecycle />,document.getElementById('root'));*/

//Event handling
/*class Eventhand extends React.Component
{
  constructor()
  {
    super();
    this.state={msg:"Welcome to INFINIJITH TECHNOLOGY"}
  }
  changevalue = (x) =>
  {
    this.setState({msg:x})
  }
   render()
  {
    return <div>
    <h1>{this.state.msg}</h1>
     <br/>
     <button type="button" onClick={()=>this.changevalue("SURESH")}>CLICK</button>
     <button type="button" onMouseOver={()=>this.changevalue("SOFTWARE ENGINEER")}>MOUSEOVER</button>
    </div>
  }
  } 
ReactDOM.render(<Eventhand />,document.getElementById('root'));*/

//React CSS 
class Reactcss extends React.Component
{
  render()
  {
    const Mystyle={color:"red",fontFamily:"Arial"};
    return <div>
    <h1 style={{color:"blue",textAlign:"center"}}>INFINIJITH TECHNOLOGIES</h1>  
     <h2 style={Mystyle}>COO</h2>

    </div>
  }
}
ReactDOM.render(<Reactcss />,document.getElementById("root"));










