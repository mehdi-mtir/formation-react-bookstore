import {useState, useEffect} from 'react';

function BookEdit(props){
  const [livre, setLivre] = useState({});

  useEffect(
    ()=>{
      setLivre(props.bookToEdit);
    }, [props.bookToEdit]);

  const onInputChange = ({target})=>{
    setLivre({...livre, [target.name] : target.value})
  }

  const editBook = (event)=>{
    event.preventDefault();
    props.editBookRef(livre);
  }

  return <div className="row">
  <h2>Editer le livre</h2>
  <form onSubmit={ event => editBook(event)}>
    <div className="mb-3">
      <label htmlFor="titre" className="form-label">Titre</label>
      <input type="text" className="form-control" id="titre" value={livre.titre} name="titre" onChange={(event)=>onInputChange(event)} />
    </div>
    <div className="mb-3">
      <label htmlFor="auteur" className="form-label">Auteur</label>
      <input type="text" className="form-control" id="auteur" value={livre.auteur} name="auteur" onChange={(event)=>onInputChange(event)} />
    </div>
    <div className="mb-3">
      <label htmlFor="prix" className="form-label">Prix</label>
      <input type="text" className="form-control" id="prix" value={livre.prix} name="prix" onChange={(event)=>onInputChange(event)} />
    </div>

    <button type="submit" className="btn btn-primary">Valider</button>
  </form>
</div>

}

export default BookEdit;
