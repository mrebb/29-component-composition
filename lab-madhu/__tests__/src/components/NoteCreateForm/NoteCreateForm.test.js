import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import NoteCreateForm from '../../../../src/components/app/NoteCreateForm/NoteCreateForm';

describe('NotesCreateForm component', () => {
  it('is alive at application start', () => {
    let notesForm = shallow(<NoteCreateForm/>);
    expect(notesForm.find('form.notesForm').exists()).toBe(true);
  });
  it('renders a title input', () => {
    expect(shallow(<NoteCreateForm/>).find('#title').length).toEqual(1);
  });
  it('renders a content input', () => {
    expect(shallow(<NoteCreateForm/>).find('#content').length).toEqual(1);
  });
  describe('Title input', () => {
  
    it('should respond to change event and change the state of the NoteCreateForm Component', () => {
     
      const notesForm = shallow(<NoteCreateForm />);
      notesForm.find('#title').simulate('change', {target: {name: 'title', value: 'fruits'}});
     
      expect(notesForm.state('title')).toEqual('fruits');
    });
  });
   
  describe('Content input', () => {
    
    it('should respond to change event and change the state of the NoteCreateForm Component', () => {
     
      const notesForm = shallow(<NoteCreateForm />);
      notesForm.find('#content').simulate('change', {target: {name: 'content', value: 'buy fruits from store'}});
     
      expect(notesForm.state('content')).toEqual('buy fruits from store');
    });
  });
});


describe('<NotesCreateForm/> (Snapshot Test)', () => {
  it('renders right', () => {
    const component = renderer.create(
      <NoteCreateForm />
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

  });
});
