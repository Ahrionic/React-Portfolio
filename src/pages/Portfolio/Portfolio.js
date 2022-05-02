import React from 'react';
import 'antd/dist/antd.css'
import {Breadcrumb } from 'antd';



const Portfolio = props => {

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>KL</Breadcrumb.Item>
        <Breadcrumb.Item>{props.page}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <h1 className="line">My Projects</h1>

        <h2 className="text"> Links to my projects will be provided here</h2>
        <p>My finished products, please feel free to use them. I would love some feedback as well! </p>
        <a href="https://wreising.github.io/Kills-to-Killers/" >Project 1(Kills to Killers)</a>
        <div><a href="https://icardcreator.herokuapp.com/" >Project 2(iCard)</a></div>
      
      </div>
    </>
  )
}

export default Portfolio