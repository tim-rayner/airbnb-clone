'use client';

import { useState, useRef, useEffect } from 'react';

const ProfileDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const dropdownRef = useRef(null); // Step 1: Create a ref for the dropdown

  // Step 2: Add event listener to document to listen for clicks
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false); // Close dropdown if click is outside
      }
    }

    // Add when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // Remove event listener on cleanup
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]); // Empty dependency array means this effect will only run once at mount

  const shadowClass = showDropdown ? 'shadow-lg' : '';
  return (
    <div ref={dropdownRef}>
      <div className="relative">
        <div
          className={`dropdown-button | border border-smoke border-opacity-45 rounded-full flex p-3 content-center cursor-pointer hover:shadow-lg transition-shadow ${shadowClass}`}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="hamburger-wrapper mx-1">
            <i className="pi pi-bars" />
          </div>
          <div className="user-wrapper mx-1">
            <i className="pi pi-user" />
          </div>
        </div>
        {showDropdown && !authenticated && (
          <div className="dropdown-menu absolute -left-44 -bottom-80 border border-smoke border-opacity-25 bg-white rounded-xl w-[255px] shadow-lg transition-shadow ">
            <ul className="py-1">
              <li className="p-3 hover:bg-[rgba(0,0,0,0.054)] cursor-pointer">
                <a href="#" className="font-bold">
                  Sign up
                </a>
              </li>
              <li className="p-3 hover:bg-[rgba(0,0,0,0.054)] cursor-pointer">
                <a href="/sandbox">Log in</a>
              </li>
            </ul>
            <div className="border-t border-smoke border-opacity-15 p-2"> </div>
            <ul className="py-1">
              <li className="p-3 hover:bg-[rgba(0,0,0,0.054)] cursor-pointer">
                <a href="#"> Giftcards </a>
              </li>
              <li className="p-3 hover:bg-[rgba(0,0,0,0.054)] cursor-pointer">
                <a href="#"> Airbnb your home</a>
              </li>
              <li className="p-3 hover:bg-[rgba(0,0,0,0.054)] cursor-pointer">
                <a href="#"> Help centre</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
