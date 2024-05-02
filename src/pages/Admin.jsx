import { useState } from 'react';
import Sidebar from '../components/SideBar'

function Admin() {
    const [isSidebarExpanded, setSidebarExpanded] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
    const toggleSidebar = () => {
      setSidebarExpanded(!isSidebarExpanded);
    };
  return (
    <Sidebar 
    isExpanded={isSidebarExpanded} 
    toggleSidebar={toggleSidebar} 
    isDarkMode={isDarkMode} 
    toggleTheme={toggleTheme} 
  />
  )
}

export default Admin