import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
function Header({ isDarkMode, setIsDarkMode, bodyDarkMode }){
  const handleMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('user-mode', JSON.stringify(isDarkMode))
  };
  return (
    <header className="header">
      <h1>Notty Notes</h1>
      {isDarkMode ? (
        <MdDarkMode className="dark_class" onClick={handleMode} size="3em" />
      ) : (
        <MdLightMode onClick={handleMode} size="3em" />
      )}
    </header>
  );
};

export default Header;
