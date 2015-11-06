// Mixins
import "../../../jspm_packages/npm/materialize-css@0.97.1/dist/css/materialize.css!css";
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link } from 'react-router'
import Books from "./Components/Book/BooksList.jsx!jsx";
import Book from "./Components/Book/Book.jsx!jsx";
import Wrapper from "./Components/MainLayoutWrapper/Wrapper.jsx!jsx";

const NoMatch = React.createClass({
    render() {
        return (
            <div>
                <h1>Meow! 404</h1>
            </div>
        )
    }
});

render((
    <Router>
        <Route path="/" component={Wrapper}>
            <Route path="books" component={Books}/>
            <Route path="books/:bookId" component={Book}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById("catalogue"));