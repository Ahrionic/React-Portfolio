import React from 'react';
import 'antd/dist/antd.css'
import {Breadcrumb} from 'antd';



const About = props => {

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>KL</Breadcrumb.Item>
        <Breadcrumb.Item>{props.page}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <h1 className="line">Korey Luu</h1>

        <h2 className="text">Full-stack developer<br /> Runs on late nights and caffeine honestly </h2>
        <p>This is a Responsive portfolio made be me to show case my current and past projects. I am an aspiring junior developer hoping to land a career in coding. I am hard working and learn very easily! I've developed skills like learning html/css, React, MySql, and MongoDB. I hope you enjoy my portfolio and apps! Please contact me and feel free to give feedback on my projects. There are links to my socials and linkdIn page at the bottom of the page. Thank you!
        </p>
      </div>
    </>
  )
}

export default About