import React from 'react';
import './SideBar.css';
import NavHeader from '../components/NavHeader';
import NavLinks from '../components//NavLinks';
import ThemeSwitcher from '../components//ThemeSwitcher';
import Cards from '../components/Cards.jsx';

const Sidebar = ({ isExpanded, toggleSidebar, isDarkMode, toggleTheme }) => {
  return (
    <div className={`sidebar-wrapper ${isDarkMode ? 'dark' : ''}`}>
      <section className={`sidebar ${isExpanded ? 'expand' : ''}`}>
        <NavHeader toggleSidebar={toggleSidebar} isExpanded={isExpanded} />
        <NavLinks />
        <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </section>
    </div>
  );
};

export default Sidebar;
