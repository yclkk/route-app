import React, { Component } from 'react';

import { Link, useSearchParams } from 'react-router-dom';


class WebContent extends Component {
    state = { 
        searchParams: this.props.Params[0],
        setSearchParams:this.props.Params[1],
    } 
    render() { 
        console.log(this.state.searchParams.get('chapter'));
        return (
             <React.Fragment>
                <h1>web - {this.state.searchParams.get('chapter')}</h1>
                <div>内容</div>
                <Link to='/web'>返回</Link>
            </React.Fragment>
        );
    }
}
 
export default  (props)  => (
    <WebContent
        Params={useSearchParams()}
    />
);

