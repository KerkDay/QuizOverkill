import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import '/index.css';

import Start from './Start.jsx';
import Edit from './Edit.jsx';

import Error from './extra/Error.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState({});

  // Which base app to use
  // start, edit
  const [base, setBase] = useState("start");

  let mainElement = <Error message="🤦 Looks like we've got trouble." />;
  
  switch (base) {
    case "start":
      mainElement = <Start setCharacters={setCharacters} setQuestions={setQuestions} setOptions={setOptions} setBase={setBase}/>
      break;
    case "edit":
      mainElement = <Edit characters={characters} questions={questions} options={options} setCharacters={setCharacters} setQuestions={setQuestions} setOptions={setOptions} setBase={setBase}/>
      break;
  }
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-purple-500">
      {mainElement}
    </div>
  )
}


export default App;

ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);