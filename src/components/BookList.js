import React, { useState, useEffect } from 'react';
import BookService from '../services/BookService';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        BookService.getBooks().then((response) => {
            setBooks(response.data);
        });
    }, []);

    return (
        <div className="container">
            <h2 className="text-center">Book List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;
