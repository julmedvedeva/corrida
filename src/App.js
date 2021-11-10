import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Container} from 'react-bootstrap';
import './App.css';
import styled from 'styled-components'
import BootstrapTest from "./BootstrapTest";

class Form extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  
  componentDidMount() {
    this.myRef.current.focus()
  }
  
  render() {
    return (
      <Container>
        <form className="w-50 border mt-5 p-3 m-auto"
              style={{'overflow': 'hidden', 'position': 'relative'}}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input ref={this.myRef} type="email" className="form-control" id="exampleFormControlInput1"
                   placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        <Portal>
          <Message></Message>
        </Portal>
        </form>
      </Container>
    )
  }
}

const Portal = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);
  
  
  return ReactDOM.createPortal(props.children, node);
}

const Message = () => {
  return (
    <div
      style={{
        'width': '500px',
        'height': '150px',
        'backgroundColor': 'red',
        'position': 'absolute',
        'right': '0',
        'bottom': '0'
      }}>HI
    </div>
  )
}

const Wrapper = styled.div`
  width: auto;
  margin: 80px auto 0 auto;
  //background-color: lightgray;
`

// class Gratings extends Component {
//
//   render() {
//     return (
//       <div className={'mb-3 p-3 border border-' + this.props.color}>
//         {React.Children.map(this.props.children, child => {
//           return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounder'})
//         })}
//       </div>
//     )
//   }
// }
// const Message = (props) => {
//   return(<h2>The counter is {props.counter}</h2>)
// }
// class Counter extends Component {
//   state = {counter: 0}
//
//   changeCounter = () => {
//     this.setState(({counter}) => ({
//       counter: counter + 1
//     }))
//   }
//
//   render() {
//     return (
//       <>
//         <button
//           className={'btn btn-primary'}
//           onClick={this.changeCounter}>
//           Touch me
//         </button>
//         {this.props.render(this.state.counter)}
//       </>
//     )
//   }
// }

function App() {
  return (
    
    <Wrapper>
      {/*<Counter render={counter => (*/}
      {/*  <Message counter={counter}></Message>*/}
      {/*)}/>*/}
      {/*<BootstrapTest*/}
      {/*  left={<Gratings color={'alert'}>*/}
      {/*    <h1>World!</h1>*/}
      {/*    <h1>World!</h1>*/}
      {/*    <h1>World!</h1>*/}
      {/*    <h1>World!</h1>*/}
      {/*    <h1>World!</h1>*/}
      {/*    <h1>World!</h1>*/}
      {/*  </Gratings>}*/}
      {/*  right={<Gratings color={'primary'}>*/}
      {/*    <h1>Hello!</h1>*/}
      {/*  </Gratings>}/>*/}
      <Form/>
    </Wrapper>
  );
}

export default App;

