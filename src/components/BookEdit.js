import {useState} from 'react';

function BookEdit(props){
  const [book, setBook] = useState(props.bookToEdit);
  return <>
    {console.log(book)}
    <h2>Editer le livre {book.titre}</h2>
  </>

}

export default BookEdit;
