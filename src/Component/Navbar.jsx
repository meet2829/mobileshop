import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import logo from '../assets/images/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Blog", href: "blog" },
    { name: "Offers", href: "offers" },
    { name: "ContactUs", href: "contact" },
  ];

  return (
    <nav className="w-full shadow-md fixed top-0 left-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-red-600"><img src={logo} height={30} width={30}></img>Krishna Mobile</div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-70} // Adjust for fixed navbar height
                className="text-gray-900 hover:text-red-600 transition font-medium cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <ScrollLink
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust for fixed navbar height
                  className="block text-gray-700 hover:text-red-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;