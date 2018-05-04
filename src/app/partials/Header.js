import React from 'react';
import {Link} from 'react-router-dom';

const Header = props => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo center">{props.title}</Link>
                {(props.buttonDisplay)?
                <ul className="right hide-on-med-and-down">
                    <li onClick={props.refreshUsers}><a><i className="material-icons">refresh</i></a></li>
                    <li onClick={props.changeView}><a><i className="material-icons">{props.viewButton}</i></a></li>
                    <li><Link to="/about">About</Link></li>
                </ul>:
                <React.Fragment/>}
            </div>
        </nav>
    )
}

export default Header;