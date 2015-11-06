import React from 'react';
import Reflux from "reflux";
import {BookStore, BookActions} from "../../Stores/BooksStore";

export default React.createClass({
    mixins: [Reflux.connect(BookStore, "books")],
    getInitialState: function() {
        return {
            books: []
        };
    },
    componentDidMount(){
        BookActions.loadBooks();
    },

    render() {
        return (
            <div>
                <h1>Books</h1>
                {this.state["books"].map((book)=>{
                    return <div key={book.id}>{JSON.stringify(book)}</div>
                })}
            </div>
        )
    }
});