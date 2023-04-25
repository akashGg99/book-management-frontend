import { useEffect, useState } from "react";


const BookList = () => {

    const [users, setUsers] = useState([])



    const fetchUserData = () => {
        fetch("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
            .then(data => console.log(data))
    }



    useEffect(fetchUserData
        , [])


    return (
        <div>
            <h1>Book List</h1>
            <div>
                <ul>
                    {users.map(book => (
                        <li key={book.id}>{book.title}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default BookList;