import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
// import react things & axios
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';

function App() {
  const dispatch = useDispatch()

  // TODO - GET Book List from server
  const fetchBookList = () => {
    axios.get('/books').then((response) => {
      // update redux store with book list
      dispatch({
        type: 'SET_BOOK_LIST',
        payload: response.data
      });
    }).catch((err) => {
      console.log('error with get booklist:', err);
    });
  }






  useEffect(() => {
    fetchBookList();
  }, []);




  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm fetchBookList={fetchBookList}/>
        <BookList />
      </main>
    </div>
  );
}

export default App;