import React, { Component } from "react";
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class List extends Component {
  render() {
    const { todo } = this.props
    return (
			<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{/* <!-- These are here just to show the structure of the list items -->
					<!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
					{todo.todos.map((item, index) => (
            <li className={item.completed ? "completed" : ""} key={item.name}>
              <div className="view">
                <input className="toggle" type="checkbox" onChange={(e) => todo.changeCompleted(index, e.target.checked)} />
                <label>{item.name}</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="Create a TodoMVC template" onChange={() => {}} />
            </li>
          ))}
				</ul>
			</section>
    )
  }
}

export default List
