import React, { Component, Fragment } from 'react';
export default class NoteUpdateForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      editing: this.props.note.editing,
      completed: this.props.note.completed,
      content: this.props.note.content,
      title: this.props.note.title,
    };
  }
  onUpdate = event => {
    event.preventDefault();
    this.props.onUpdate({ ...this.state, id: this.props.note.id });
    this.props.showComponentMethod(false);
  };
  onChange = event => {
    let changedVal =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    const changedBit = { [event.target.name]: changedVal };
    this.setState(changedBit);
  };
  onCancel = event => {
    event.preventDefault();
    this.props.showComponentMethod(false);
  };
  render() {
    return (
      <Fragment>
        <form
          className="updateForm"
          onSubmit={this.onUpdate}
          onChange={this.onChange}
        >
          <input
            name="title"
            defaultValue={this.props.note.title}
            type="text"
            placeholder="title"
          />
          <textarea
            name="content"
            defaultValue={this.props.note.content}
            placeholder="content"
          />
          <label>
            <span>editing</span>
            <input
              defaultChecked={this.props.note.editing}
              name="editing"
              type="checkbox"
            />
          </label>
          <label>
            <span>completed</span>
          </label>
          <input
            defaultChecked={this.props.note.completed}
            name="completed"
            type="checkbox"
          />
          <button>update note</button>
          <button onClick={this.onCancel}>cancel</button>
        </form>
      </Fragment>
    );
  }
}
