const Wrapper = React.createClass({
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#books">Books</a></li>
                        </ul>
                    </div>
                </nav>
                <h1>Zie app</h1>
                {this.props.children}
            </div>
        )
    }
});