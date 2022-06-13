import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import ReactDOM from "react-dom";
import { Message } from "./Message";

const Portal = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);


  return ReactDOM.createPortal(props.children, node);
}

export class Form extends Component {
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
          style={{ 'overflow': 'hidden', 'position': 'relative' }}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input ref={this.myRef} type="email" className="form-control" id="exampleFormControlInput1"
              placeholder="name@example.com" />
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
