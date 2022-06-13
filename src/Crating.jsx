import React, { Component } from "react"
export class Gratings extends Component {

  render() {
    return (
      <div className={'mb-3 p-3 border border-' + this.props.color}>
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, { className: 'shadow p-3 m-3 border rounder' })
        })}
      </div>
    )
  }
}

export const Message = (props) => {
  return (<h2>The counter is {props.counter}</h2>)
}
export class Counter extends Component {
  state = { counter: 0 }

  changeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }))
  }

  render() {
    return (
      <>
        <button
          className={'btn btn-primary'}
          onClick={this.changeCounter}>
          Touch me
        </button>
        <Message  />
        <div>
          {this.props.render(this.state.counter)}
        </div>
      </>
    )
  }
}
