
function BookAdd(){
  return (
    <div className="row">
      <h2>Ajouter un livre</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">Titre</label>
          <input type="text" className="form-control" id="titre" />
        </div>
        <div className="mb-3">
          <label htmlFor="auteur" className="form-label">Auteur</label>
          <input type="text" className="form-control" id="auteur" />
        </div>
        <div className="mb-3">
          <label htmlFor="prix" className="form-label">Prix</label>
          <input type="text" className="form-control" id="prix" />
        </div>

        <button type="submit" className="btn btn-primary">Valider</button>
      </form>
    </div>
  )
}

export default BookAdd;
