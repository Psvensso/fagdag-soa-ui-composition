import Reflux from "reflux";

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