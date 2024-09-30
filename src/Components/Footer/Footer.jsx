import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

function Footer() {
  return (
<footer>
  <div className="w-full p-2 mb-4">
    <div className="sm:flex sm:items-center sm:justify-between">
    <Link to='/' className="flex items-center space-x-3 ">
          <span className="self-center text-[200px]">
            .Store
          </span>
        </Link>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500">
        <li>
          <a href="#" className="hover:underline me-4 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2024{" "} 
        Developed by{" "} 
        <a href="https://github.com/webdevsaqib" className='underline font-bold'>webdevsaqib</a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

  )
}

export default Footer