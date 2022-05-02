import 'antd/dist/antd.css'
import './App.css'
import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import { Layout} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const {Content} = Layout;

export default class App extends React.Component {


  render() {

    return (
      <Router>
        <Switch>
        <Layout style={{ minHeight: '100vh' }}>
          <Navbar />
          <Layout className="site-layout">
            {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
            
              <Route exact path="/">
                <Home 
                  page='Home'
                />
              </Route>
              <Route path="/about">
                <Content>
                <About 
                  page='About'
                />
                </Content>
              </Route>
              <Route path="/work">
                <Portfolio
                  page='Work'
                />
              </Route>
              <Route path="/contact">
                <Contact
                  page='Contact'
                />
              </Route>

            
          </Layout>
          {/* <Footer style={{ textAlign: 'center', fontSize: 10 }}> &hearts; Made by Korey Luu</Footer> */}
        </Layout>
        </Switch>
      </Router>
    );
  }
}