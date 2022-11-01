
function BookList(props){
  return (
    <>
    <h2>Liste des livres</h2>
    <button className="btn btn-success">Ajouter un livre</button>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col">Editer</th>
          <th scope="col">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        {
          props.livres.map(
            livre => <tr key={livre.id}>
                        <th scope="row">{livre.id}</th>
                        <td>{livre.titre}</td>
                        <td>{livre.auteur}</td>
                        <td>{livre.prix}</td>
                        <td><button className="btn btn-primary">Editer</button></td>
                        <td><button className="btn btn-danger">Supprimer</button></td>
                      </tr>
          )

        }
      </tbody>
    </table>
    </>
  )
}

export default BookList;
