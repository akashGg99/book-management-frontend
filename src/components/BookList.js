import { useState } from "react"
// import { BookCard } from "./BookCard"

export function BookList() {

    let [bookData, setBookdata] = useState()
 
    fetch("http://localhost:3001/books")
        .then((response)=>console.log(response))
        .then((response) => console.log(response))
        .then((data)=>setBookdata(data))  
    
    return(
        <div>
        {
            bookData.map((x)=>
            { 
                return (   
                    <div>{x.title}</div>
                )  
            }
            )
        }
        </div>   
        )  

}