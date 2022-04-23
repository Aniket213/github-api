import './App.css';
import {useState} from 'react'
import Container from './Components/Container';
import Random from './Components/Random';
import Searchbar from './Components/Searchbar';

function App() {
  const [query, setquery] = useState('');
  const [popup, setpopup] = useState(false);

  const childtoparent = (a)=>{
    setquery(a);
  }

  return (
    <div className="App light" >
      <Searchbar fun={childtoparent} setpopup={setpopup} />
      <Container query={query} setpopup={setpopup} popup={popup}/>
      <Random/>
    </div>
  );
}

export default App;

