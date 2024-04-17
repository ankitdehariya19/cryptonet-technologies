import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; 

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className={`bg-${darkMode ? 'black' : 'black'} text-white p-4 flex justify-between items-center`}>
      <h1 className="text-2xl font-bold gap-x-1">
        <span className='text-violet-600'>C</span>
        ryptonet 
        <span className='text-violet-600'>T</span>
        echnologies
      </h1>
      <button className="bg-violet-500 border  rounded-full p-3 cursor-pointer hover:bg-violet-700 transition-colors duration-300" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
};

export default Header;
