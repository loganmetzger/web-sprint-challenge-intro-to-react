import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import { Container } from './components/Styles'

const apiUrl = 'https://swapi.dev/api/people/'

const App = () => {

  const [data, setData] = useState();

  useEffect(() => {
    axios.get(apiUrl)
    .then((res) => {
      setData(res.data.results);
    })
    .catch((err) => console.log(err));
  },[])


  console.log(data);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        data.map(char => {
          return <Character characters={data} />;
        })
      }
    </div>
  );
}

export default App;
