import React, { useState } from 'react';


function Start (props) {
  const [error, setError] = useState(null);

  function onFileChange (event) {
    if (event.target.files[0].type === 'application/json') {
      const reader = new FileReader();

      reader.readAsText(event.target.files[0]);
      reader.onload = (evt) => {

        let result = {};
        try {
          result = JSON.parse(evt.target.result);
        } catch (e) {
          setError("Could not load this JSON file. "+e);
          return;
        }

        // Check if valid quiz file
        if (typeof result.characters !== 'undefined'
        && typeof result.questions !== 'undefined'
        && typeof result.settings !== 'undefined'
        ) {
          setError(null);
          props.setCharacters( result.characters );
          props.setQuestions( result.questions );
          props.setSettings( result.settings );
          props.setBase( "edit" );
        } else {
          setError("This is not a valid quiz file.");
        }
      }
    } else {
      setError("You must use a JSON file.");
      event.target.value = null;
    }
  }

  function createNew() {
    props.setBase( "edit" );
  }

  return(
    <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg m-2">

      <div className="text-center">
        Hello! Welcome to Quiz Overkill!<br/>
        This is online software to help you create <b>complex</b> and <b>interesting</b> personality quizzes.<br/>

      </div>

      { error !== null && (
        <div className="text-red-700 bg-red-200 p-2 rounded-lg text-center mt-2 max-w-lg" >
          {error}
        </div>
      )}
      <label className="w-64 flex flex-col items-center p-4 mt-4 bg-white border cursor-pointer text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white rounded-lg transition-colors duration-200">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-upload" className="max-h-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"/>
        </svg>
        <span className="font-bold">
          Select a Quiz Overkill File
        </span>
        <span className="text-gray-400">
          (Typically ends in JSON)
        </span>
        <input type="file" className="hidden" accept="json" onChange={onFileChange} />
      </label>
      <label 
        onClick={createNew}
        className="w-64 flex flex-col items-center p-4 mt-4 bg-white border cursor-pointer text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white rounded-lg transition-colors duration-200"
      >
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-square" className="max-h-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/>
        </svg>
        <span className="font-bold">
          Create a new Quiz
        </span>
      </label>
    </div>
  )
}

export default Start;