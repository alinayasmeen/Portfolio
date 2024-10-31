
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex bg-gray-200 min-w-full justify-between max-w-6xl text-[24px] px-6 align-top">
      <div className="text-xl font-bold">ma.</div>
      <nav>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <Link href="/work" aria-label="Work" className="hover:text-blue-500 transition duration-200">
              Work
            </Link>
          </li>
          <li>
            <Link href="# Hi I’m Mehmet Akif Karasu, <br /> 3D artist & sculptor." aria-label="About" className="hover:text-blue-500 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/playground" aria-label="Playground" className="hover:text-blue-500 transition duration-200">
              Playground
            </Link>
          </li>
          <li>
            <Link href="/contact" aria-label="Contact" className="hover:text-blue-500 transition duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
