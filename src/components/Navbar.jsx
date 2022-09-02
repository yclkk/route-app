import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/">Navbar</a> */}
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/linux">Linux</Link>
                            <Link className="nav-link" to="/django">Django</Link>
                            <Link className="nav-link" to="/web">Web</Link>
                            {/* <Link className="nav-link disabled">Disabled</Link> */}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;