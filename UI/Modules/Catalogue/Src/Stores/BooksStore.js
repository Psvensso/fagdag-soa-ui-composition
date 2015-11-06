import React from 'react';
import Reflux from "reflux";

const baseUrl = "http://localhost:9000";

export var BookActions = Reflux.createActions({
    "loadBooks": {children: ["completed","failed"]}
});

export var BookStore = Reflux.createStore({
    listenables: [BookActions],
    // Initial setup
    init: function() {

    },

    onLoadBooks: function() {
        console.log("Books ");
        return fetch(`${baseUrl}/sales/books/`)
            .then((response)=>{
                response.json().then((books) => {
                    this.trigger(books);
                });
            });
    }
});