import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import Linux from './linux';
import Django from './django';
import Web from './web';
import WebContent from './webContent';
import NotFound from './notFound';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div className='container'>
                    <Routes>
                    {/* 会去从前往后匹配，匹配到了就会渲染出来，如果没匹配到就不渲染 */}
                        <Route path="/"  element={<Home />} />
                        <Route path="/linux"  element={<Linux />} >
                            {/* 这里就是类似https://www.acwing.com/activity/content/1150/里的内容，只改变页面部分内容但是又是新链接 */}
                            <Route path='homework' element={<h4>homework的内容</h4>}></Route>
                            <Route path='terminal' element={<h4>terminal的内容</h4>}></Route>
                        </Route>
                        <Route path="/django"  element={<Django />} />
                        <Route path="/web"  element={<Web />} />
                        {/* 如果是链接又很多个，那么可以使用:chapter接收变量，然后在函数组件可以使用useParams()可以 */}
                        {/* <Route path='/web/content/:chapter' element={<WebContent />}></Route> */}
                        <Route path='/web/content' element={<WebContent />}></Route>
                        <Route path='/404' element={<NotFound />}></Route>
                        <Route path='*' element={<Navigate replace to='/404' />}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;