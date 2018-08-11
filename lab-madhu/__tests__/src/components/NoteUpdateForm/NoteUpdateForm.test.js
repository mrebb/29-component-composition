import React from 'react';
import renderer from 'react-test-renderer';
import { shallow,mount } from 'enzyme';
import NoteUpdateForm from '../../../../src/components/App/NotesList/NoteItem/NoteUpdateForm/NoteUpdateForm';

describe('NoteUpdateForm component', () => {
  it('should have initial state', () => {
    const note = {
      editing: false,
      completed: false,
      content: 'sample content',
      title: 'test title',
      id:1234,
    };
    const wrapper = mount(<NoteUpdateForm note={note}/>);
    expect(wrapper).toHaveState({
      editing: false,
      completed: false,
      content: 'sample content',
      title: 'test title',
    });
  });
  it('should handle form changes', () => {
    const note = {
      editing: false,
      completed: false,
      content: 'sample content',
      title: 'test title',
    };
    const wrapper = mount(<NoteUpdateForm note={note}/>);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: 'title',
        value: 'Hello world',
        type: 'text',
      },
    };
    instance.onChange(event);

    expect(wrapper.state('title')).toBe('Hello world');
  });

  it('should update existing note', done => {
    const note = {
      editing: false,
      completed: false,
      content: 'sample content',
      title: 'test title',
      id:1234,
    };
    const onUpdate = note => {
      expect(note.id).toBe(1234);
      expect(note.title).toBe('Hello world');
      done();
    };
    const wrapper = mount(<NoteUpdateForm onUpdate={onUpdate} showComponentMethod={()=>{return true;}}note={note}/>);
    const instance = wrapper.instance();
    const e = {
      target: {
        name: 'title',
        value: 'Hello world',
        type: 'text',
      },
    };
    instance.onChange(e);
    const event = {
      preventDefault: () => {},
    };

    instance.onUpdate(event);
  });
});

describe('<NoteUpdateForm/> (Snapshot Test)', () => {
  it('renders right', () => {
    const note = {
      editing: false,
      completed: false,
      content: 'sample content',
      title: 'test title',
    };
    const component = renderer.create(
      <NoteUpdateForm note={note}/>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

  });
});
