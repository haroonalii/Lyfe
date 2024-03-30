import React, { useState } from 'react';
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from '../constants';

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger icon for mobile devices */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} onClick={toggleNav} />
        </div>
      </nav>
      {/* Side navigation menu */}
      {showNav && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50" onClick={closeNav}>
          <div className="absolute top-0 right-0 bottom-0 bg-white w-64 p-4 shadow" onClick={(e) => e.stopPropagation()}>
            <ul>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="block py-2 text-gray-800 hover:bg-gray-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;