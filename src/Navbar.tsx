import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Navbar.css';

const logo = require('./logo.svg');

class Navbar extends React.Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} height="50px" width="50px" />
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNavDropdown" 
                    aria-controls="navbarNavDropdown" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                  {/* <span className="navbar-toggler-icon" /></span> */}
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a  
                                className="nav-link dropdown-toggle" 
                                href="#" 
                                id="navbarDropdownMenuLink" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                // tslint:disable-next-line:jsx-alignment
                                aria-expanded="false">PRODUCTS</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                               <img src={logo} alt="logo" className="img-responsive text-center"/>
                                <a className="dropdown-item" href="#">Gels</a>
                                <a className="dropdown-item" href="#">Sprays</a>
                                <a className="dropdown-item" href="#">Garbage</a>
                                <a className="dropdown-item" href="#">Penetrator</a>
                                <a className="dropdown-item" href="#">Mists</a>
                                <a className="dropdown-item" href="#">Pet</a>
                                <a className="dropdown-item" href="#">Sports</a>
                                <a className="dropdown-item" href="#">Waste Odor Control</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="#" 
                                id="navbarDropdownMenuLink" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false"
                            >
                                ODOR GUIDE
                            </a>
                                <li className="dropdown">
                                    <ul className="dropdown-menu multi-column columns-3">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <ul className="multi-column-dropdown">
                                                    <img src={logo} alt="logo" className="img-responsive text-center"/>
                                                    <li>
                                                        <a href="#">
                                                            <img src={logo} width="24px" height="24px" />
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src={logo} width="24px" height="24px" />
                                                        Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                             <img src={logo} width="24px" height="24px" />
                                                            Something else here
                                                        </a>
                                                    </li>
                                                    
                                                    <li>
                                                        <a href="#">
                                                            <img src={logo} width="24px" height="24px" />
                                                            Separated link
                                                        </a>
                                                    </li>
                                                   
                                                    <li>
                                                        <a href="#">
                                                        <img src={logo} width="24px" height="24px" />
                                                        One more separated link
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-4">
                                                <ul className="multi-column-dropdown">
                                                    <img src={logo} alt="logo" className="img-responsive text-center"/>
                                                  <li>
                                                        <a href="#">
                                                            <img src={logo} width="24px" height="24px" />
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src={logo} width="24px" height="24px" />
                                                        Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                             <img src={logo} width="24px" height="24px" />
                                                            Something else here
                                                        </a>
                                                    </li>
                                                    
                                                    <li>
                                                        <a href="#">
                                                            <img src={logo} width="24px" height="24px" />
                                                            Separated link
                                                        </a>
                                                    </li>
                                                   
                                                    <li>
                                                        <a href="#">
                                                        <img src={logo} width="24px" height="24px" />
                                                        One more separated link
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-4">
                                                <ul className="multi-column-dropdown">
                                                    <img src={logo} alt="logo" className="img-responsive text-center"/>
                                                   <li>
                                                        <a href="#">
                                                            <img src={logo} width="24px" height="24px" />
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <img src={logo} width="24px" height="24px" />
                                                        Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                             <img src={logo} width="24px" height="24px" />
                                                            Something else here
                                                        </a>
                                                    </li>
                                                    
                                                    <li>
                                                        <a href="#">
                                                            <img src={logo} width="24px" height="24px" />
                                                            Separated link
                                                        </a>
                                                    </li>
                                                   
                                                    <li>
                                                        <a href="#">
                                                        <img src={logo} width="24px" height="24px" />
                                                        One more separated link
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">WHY POWAIR</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">WHERE TO BUY</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        );
    }
}

export default Navbar;