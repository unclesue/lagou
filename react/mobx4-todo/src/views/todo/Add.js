import React, { Component } from "react";
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class Add extends Component {
  render() {
    const { todo } = this.props
    return (
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" onKeyDown={e => todo.add(e)} />
			</header>
    )
  }
}

export default Add
