import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';


class Linux extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>linux</h1>
                <hr />
                <Link to='/linux/homework'>作业</Link>
                <Outlet />
            </React.Fragment>
        );
    }
}
 
export default Linux;