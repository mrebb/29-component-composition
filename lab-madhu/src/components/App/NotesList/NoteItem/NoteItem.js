import React from 'react';
import NoteUpdateForm from './NoteUpdateForm/NoteUpdateForm';
export default class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showComponent: false,
    };
  }

  onDoubleClick = e => {
    e.preventDefault();
    let showComponent = true;
    this.setState({ showComponent });
  };
  updateComponent = show => {
    let showComponent = show;
    this.setState({ showComponent });
  };
  render() {
    return (
      <React.Fragment>
        <li>
          <h2>{this.props.note.title}</h2>
          <p onDoubleClick={this.onDoubleClick}>{this.props.note.content}</p>
          {this.state.showComponent && (
            <NoteUpdateForm
              note={this.props.note}
              showComponentMethod={this.updateComponent}
              {...this.props}
            />
          )}
          <button onClick={() =>{ if (window.confirm('Are you sure you wish to delete this item?')) this.props.onRemove(this.props.note.id);}}>
            X
          </button>
        </li>
      </React.Fragment>
    );
  }
}
