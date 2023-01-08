import './App.css';
import { AddBookForm } from './components/AddBookForm';
import { BookDetail } from './components/bookdetail';
// import { BookList } from './components/BookList';
import { Login } from './components/loginPage';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar/>
      <hr/>
      <Login></Login>
      <hr/>
      <AddBookForm/>
      <hr/>
      <BookDetail/>
      <hr/>
      {/* <BookList/> */}
    </>
  );
}

export default App;
