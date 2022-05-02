import React from 'react';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import {Link} from "react-router-dom";

const { Sider } = Layout;

const Navbar = ({ pages, setpageState }) => {

  return (
    <Sider width="80" className="menu">
      <nav className="navigation section-0 work">
        <ul className="navlink-items">

          {/* Navbar Brand */}
          <li className="navlink-brand">
            <Link className="navlink navlink-home" to='/'>
              HOME
            </Link>
          </li>

          {[{
            page: 'About',
            classes: 'navlink navlink-about',
            link: '/about'
          }, {
            page: 'Work',
            classes: 'navlink navlink-work',
            link: '/work'
          }, {
            page: 'Connect',
            classes: 'navlink navlink-contact',
            link: '/contact'
          }].map(column => (
            <>
              {/* Work */}
              <li>
                <Link className={column.classes} to={column.link}>
                  <span className="navlink-text">{column.page}</span>
                </Link>
              </li>
            </>
          ))}

        </ul>
      </nav>
    </Sider>
  )
}

export default Navbar