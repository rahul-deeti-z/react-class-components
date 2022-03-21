import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: 'react'
      }
    }
    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
          comments: event.target.value,
        });
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit =  (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        //this will disable the default form behavior
        event.preventDefault()
    }
  render() {
      const { username, comments, topic } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={this.handleUserNameChange}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={comments}
              onChange={this.handleCommentsChange}
            />
          </div>
          <div>
            <label>Topics</label>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form

// Note:
// Default html form behavior is: browsing to new page when submit button is clicked