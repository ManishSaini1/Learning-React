import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//  class Clock extends React.Component
//  {
//    constructor(props)
//    {
//      super(props);
//      this.state={date: new Date() }
//    }
   
//    componentDidMount()
//    {
//      this.timerID=setInterval(
//        ()=>
//        {
//          this.tick() 
//        },1000
//      )
//       }
//      compnonentWillUnmount()
//      {
//        clearInterval(this.timerID);
//      }
//      tick()
//      {
//        this.setState(
//          {
//            date: new Date()
//          });
//      }
//     //  this.setState={date: Date.now()}
   
//    render()
//    {
//      return(
//       <div>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//      );
//    }
  
//  }
class Toggle extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      isToggleOn: true
    }
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick()
  {
    this.setState(state=>({
      isToggleOn : !state.isToggleOn
    })
    )
  }
  render()
  {
      return(
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "Yes"  : "NO"}
        </button>
      )
  }
}

 ReactDOM.render(
  // <Clock />,
  <Toggle/>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
