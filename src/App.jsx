
import Addbook from './components/AddbookForm'
import BookCard from './components/BookCard'
import BookList from './components/Booklist'
import Navbar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookCard />} />
          <Route path="/addBook" element={<Addbook />} />
          <Route path="/addList" element={<BookList />} />

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
