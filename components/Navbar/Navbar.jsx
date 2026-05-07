'use client';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../../constants";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-xl bg-gray-900/50 border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center flex-shrink-0">
            <img className="h-10 w-auto" src="/logo.png" alt="Logo" />
            <span className="text-xl font-bold tracking-tight text-white ml-2">Otical</span>
          </Link>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`relative text-neutral-300 hover:text-orange-500 transition-colors duration-300 ${pathname === item.href ? 'text-orange-500' : ''}`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <div className="absolute -bottom-3 left-0 w-full h-0.5 bg-orange-500" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <Link
              href="/contact"
              className="py-2 px-4 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-2 px-4 rounded-full font-semibold shadow-lg hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Consultation
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
            <div className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-lg lg:hidden">
              <div className="h-full flex flex-col justify-center items-center">
                <ul className="text-center">
                  {navItems.map((item, index) => (
                    <li key={index} className="py-4">
                      <Link
                        href={item.href}
                        className={`text-2xl ${pathname === item.href ? 'text-orange-500' : 'text-neutral-300'} hover:text-orange-500 transition-colors duration-300`}
                        onClick={toggleNavbar}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-center space-y-6 mt-10">
                  <Link
                    href="/contact"
                    className="py-3 px-6 border border-orange-500 text-orange-500 rounded-full text-lg"
                    onClick={toggleNavbar}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-3 px-6 rounded-full text-lg font-semibold"
                    onClick={toggleNavbar}
                  >
                    Get a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
