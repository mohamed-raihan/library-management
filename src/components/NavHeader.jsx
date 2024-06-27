import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavHeader = ({ toggleSidebar, isExpanded }) => {
    return (
        <div className="nav-header ">
        <div className="logo-and-menu">
          <FontAwesomeIcon icon={faBars} className='icon' onClick={toggleSidebar} />
        </div>
      </div>
  );
};

export default NavHeader;
