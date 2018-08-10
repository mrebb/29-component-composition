import React, { Component, Fragment } from 'react';
import uuid from 'uuid/v4';

export default class NoteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      completed: false,
      content: '',
      title: '',
    };
  }
  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state, id: uuid() });
    this.setState({ title: '', content: '' });
  };
  onChange = event => {
    let changedVal =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    const changedBit = { [event.target.name]: changedVal };
    this.setState(changedBit);
  };
  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} onChange={this.onChange}>
          <input
            name="title"
            value={this.state.title}
            type="text"
            placeholder="title"
          />
          <textarea
            name="content"
            value={this.state.content}
            placeholder="content"
          />
          <label>
            <span>editing</span>
            <input name="editing" type="checkbox" />
          </label>
          <label>
            <span>completed</span>
          </label>
          <input name="completed" type="checkbox" />
          <button>create note</button>
        </form>
      </Fragment>
    );
  }
}
