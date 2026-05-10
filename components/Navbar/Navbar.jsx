'use client';
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { navItems } from "../../constants";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileDrawerOpen]);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-xl bg-gray-900/50 border-b border-neutral-700/80">
        <div className="container px-10 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center flex-shrink-0">
              <img className="h-10 w-auto" src="/logo.png" alt="Logo" />
              <span className="text-xl font-bold tracking-tight text-white ml-2">Otical</span>
            </Link>
            <ul className="hidden lg:flex ml-10 space-x-8">
              {navItems.map((item, index) => (
                <li 
                  key={index} 
                  className="relative"
                  onMouseEnter={item.children ? handleMouseEnter : undefined}
                  onMouseLeave={item.children ? handleMouseLeave : undefined}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center text-neutral-300 hover:text-white transition-colors duration-300 ${pathname === item.href ? 'text-white' : ''}`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={16} className="ml-1" />}
                  </Link>
                  {item.children && dropdownOpen && (
                    <div 
                      className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.children.map((child, childIndex) => (
                        <Link 
                          key={childIndex} 
                          href={child.href}
                          className="block px-4 py-2 text-sm text-neutral-300 hover:bg-gray-700 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-4 items-center">
              <Link
                href="/contact"
                style={{ backgroundColor: '#ff3131' }}
                className="text-white py-2 px-4 rounded-md font-semibold hover:opacity-90 transition-all duration-300"
              >
                Get a Free Consultation
              </Link>
            </div>
            <div className="lg:hidden flex items-center">
              <button onClick={toggleNavbar} className="text-white">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-lg lg:hidden">
          <div className="absolute top-5 right-5">
            <button onClick={toggleNavbar} className="text-white">
              <X size={28} />
            </button>
          </div>
          <div className="h-full flex flex-col justify-center items-center overflow-y-auto">
            <ul className="text-center">
              {navItems.map((item, index) => (
                <li key={index} className="py-3">
                  {item.children ? (
                    <div className="relative">
                      <button 
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-center text-xl text-neutral-300 hover:text-white transition-colors duration-300 w-full"
                      >
                        {item.label}
                        {mobileServicesOpen ? <ChevronUp size={20} className="ml-2" /> : <ChevronDown size={20} className="ml-2" />}
                      </button>
                      {mobileServicesOpen && (
                        <div className="mt-2 flex flex-col items-center">
                          {item.children.map((child, childIndex) => (
                            <Link 
                              key={childIndex} 
                              href={child.href}
                              className="text-lg text-neutral-400 py-2 hover:text-white transition-colors duration-300"
                              onClick={() => setMobileDrawerOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-xl ${pathname === item.href ? 'text-white' : 'text-neutral-300'} hover:text-white transition-colors duration-300`}
                      onClick={() => setMobileDrawerOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center space-y-5 mt-8">
              <Link
                href="/contact"
                style={{ backgroundColor: '#ff3131' }}
                className="text-white py-2.5 px-5 rounded-md text-base font-semibold"
                onClick={() => setMobileDrawerOpen(false)}
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
