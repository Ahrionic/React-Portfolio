import React from 'react';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import {
  BrowserRouter as 
  Link
} from "react-router-dom";

const {Content} = Layout;


const Home = props => {

  return (
    <>
      <Content className="home">
        <span className="home-helper"></span>
        <Link to='/about'>
          <img src="kl.png" alt="" className="home-logo" />
        </Link>
      </Content>
    </>
  )
}

export default Home