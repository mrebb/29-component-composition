import React from 'react';
import renderer from 'react-test-renderer';
import { shallow,mount } from 'enzyme';
import NoteCreateForm from '../../../../src/components/app/NoteCreateForm/NoteCreateForm';

describe('NoteCreateForm component', () => {
  it('should render', () => {
    shallow(<NoteCreateForm/>);
  });
  it('should have initial state', () => {
    const wrapper = mount(<NoteCreateForm/>);
    expect(wrapper).toHaveState({
      editing: false,
      completed: false,
      content: '',
      title: '',
    });
  });
  it('should handle form changes', () => {
    const wrapper = mount(<NoteCreateForm />);
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

  it('should submit a new note', done => {
  
    const onSubmit = note => {
      expect(note.id).not.toBe('');
      expect(note.title).toBe('Hello world');
      done();
    };
    const wrapper = mount(<NoteCreateForm onSubmit={onSubmit} />);
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

    instance.onSubmit(event);
  });
});

describe('<NoteCreateForm/> (Snapshot Test)', () => {
  it('renders right', () => {
    const component = renderer.create(
      <NoteCreateForm/>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

  });
});
