import {useState} from 'react';

function BookAdd(){
  const [livre, setLivre] = useState({titre : "", auteur : "", prix : ""});

  /*const onTitreChange = (event)=>{
    setLivre({...livre, titre : event.target.value})
  }

  const onAuteurChange = (event)=>{
    setLivre({...livre, auteur : event.target.value})
  }

  const onPrixChange = (event)=>{
    setLivre({...livre, prix : event.target.value})
  }*/

  const onInputChange = ({target})=>{
    setLivre({...livre, [target.name] : target.value})
  }

  return (
    <div className="row">
      <h2>Ajouter un livre</h2>
      <form>
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
  )
}

export default BookAdd;
