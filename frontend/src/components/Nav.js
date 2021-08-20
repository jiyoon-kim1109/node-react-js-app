import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/*<a className="navbar-brand" href="#">Navbar</a>*/}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tweets">Tweet</Link>
                    </li>
                    {/*<li className="nav-item dropdown">*/}
                    {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"*/}
                    {/*       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                    {/*        Dropdown link*/}
                    {/*    </a>*/}
                    {/*    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">*/}
                    {/*        <Link to='' className="">Home</Link>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;