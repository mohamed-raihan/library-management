import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon} from '@fortawesome/free-solid-svg-icons'

const ThemeSwitcher = ({ isDarkMode, toggleTheme }) => {
    const handleToggle = () => {
      toggleTheme(); 
    };
    return (
      <div className="theme-wrapper" onClick={handleToggle}>
      <FontAwesomeIcon icon={faMoon} className='ico'/>
      <p>Dark Theme</p>
      <div className="theme-btn">
        <span className={`theme-ball ${isDarkMode ? 'dark' : ''}`}></span>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
