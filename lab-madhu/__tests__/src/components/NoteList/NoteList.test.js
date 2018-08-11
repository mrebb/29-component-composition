import React from 'react';
import renderer from 'react-test-renderer';
import { shallow,mount } from 'enzyme';
import NotesList from '../../../../src/components/app/NotesList/NotesList';
import NoteItem from '../../../../src/components/App/NotesList/NoteItem/NoteItem';

describe('NoteList component', () => {
  it('is alive at application start', () => {
    let wrapper = mount(<NotesList notes={[]}/>);
    expect(wrapper.find(NoteItem)).toBeDefined();
  });
  xit('should render list of notes', done => {
    const onRemove = id => {
      expect(id).toBe('1234');
      done();
    };

    const notes = [];
    notes.push({
      id: '1234',
      title: 'foo',
      content: 'bar',
      editing: false,
      completed: true,
    });
    const wrapper = shallow(<NotesList notes={notes} onRemove={onRemove} />);
    expect(wrapper.find(NoteItem)).toExist();
    const noteItem = wrapper.find(NoteItem).first();
    expect (noteItem).toHaveProp('note');
    const noteItemId = noteItem.prop('note').id;

    const removeHandler = noteItem.prop('onRemove');

    removeHandler(noteItemId);
  });
});

describe('<NoteList/> (Snapshot Test)', () => {
  it('renders right', () => {
    const component = renderer.create(
      <NotesList notes={[]}/>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

  });
});
