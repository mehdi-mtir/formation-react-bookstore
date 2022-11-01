import './App.css';
import BookAdd from './components/BookAdd';
import BookList from './components/BookList';
import {useState} from 'react';

function App() {
  const [action, setAction] = useState("");
  const [livres, setLivres] = useState([
    {
      id : 1,
      titre : "The slight edge",
      auteur : "jeff Olsen",
      prix : 12.50
    },
    {
      id : 2,
      titre : "Power of habits",
      auteur : "Charles Duhigg",
      prix : 18.00},
    {
      id : 3,
      titre : "Atomic habits",
      auteur : "James Clear",
      prix : 20.00
    }
  ]);

  const addBook = (livre)=>{
    const newLivre = {...livre, id : livres[livres.length-1].id + 1};
    setLivres([...livres, newLivre]);
    changeAction("");
  }

  const changeAction = (newAction)=>{
    setAction(newAction);
  }

  return (
    <div className="container">
      <h1>Gestion des livres</h1>
        <BookList livres={livres} changeActionRef = {changeAction} />
        {action === "add"?<BookAdd addBookRef = {addBook} />:""}
    </div>
  );
}

export default App;
