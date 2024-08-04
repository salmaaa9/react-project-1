// import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return <>

<nav className="border-gray-200 bg-gray-800 z-40 p-4">

  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

  <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">START FRAMEWORK</span>
  </Link>

    <button onClick={()=>console.log('clicked')} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium text-xl flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 text-white">
        <li>
          <Link to="about" className="block py-2 focus:bg-green-600 px-2 rounded-md  md:border-0">About</Link>
        </li>
        <li>
          <Link to="portfolio" className="block py-2 px-2 focus:bg-green-600 rounded-md  md:border-0">Portfolio</Link>
        </li>
        <li>
          <Link to="contact" className="block py-2 px-2 focus:bg-green-600 rounded-md  md:border-0">Contact</Link>
        </li>
      </ul>
    </div>

  </div>

</nav>
  </>
}

export default NavBar;