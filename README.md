![cf](http://i.imgur.com/7v5ASc8.png) 29: To Do
===
#### Documentation  
This is a simple react app that creates notes using a user input form and adds it to DOM for rendering. User can click on any note to view, update existing note by double clicking on content and also can delete using 'delete' button displayed on the note details or 'x' mark provided right next to list of notes after you create atleast one note.

###### NoteUpdateForm 
Created a NoteUpdateForm component that inherits a note through props and onSubmit is able to update the App's state with an updated note.

###### NoteItem has following behavior
If the user double clicks on the notes content it switches to the Edit View  
* Default view  
  * Display the notes content and a delete button
  * Display a delete button that will remove the Note from the application's state
* Edit View 
  * Shows the NoteUpdateForm and a Cancel Button
    * onSubmit or click of the cancel button in NoteUpdateForm it should switch back to the default view

###### App Component Tree
components layout  
``` 
App
  NoteCreateForm
  NoteList
    NoteItem
      NoteUpdateForm
```

#### Tests
* Tested NoteCreateForm
  * Tested your onChange handler
  * Tested your onSubmit handler
* Tested NoteItem
  * Tested the NoteItem's ability to remove a note from the App's state
* Tested NoteUpdateForm
  * Tested the NoteUpdatesForm's ability to update a note in the App's state

###### Technologies used
  * React & React component architecture
  * Node.js
  * Webpack
  * Enzyme & Jest test libraries