'use client';
import { resourcesLinks, platformLinks, communityLinks } from "../../constants";
import { Facebook, Instagram, Twitter, Github, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";
import Link from 'next/link';

const Footer = () => {
  return (
    <motion.footer 
      className="mt-20 py-10 bg-neutral-900/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className='flex items-center flex-shrink-0'>
              <img className='h-10 w-auto' src="/logo.png" alt='logo' />
              <span className='text-xl tracking-tight text-white font-bold ml-2'>Otical</span>
            </Link>
            <p className="text-neutral-400 mt-4">Otical is an IT development company that provides a wide range of services to help you build and grow your business.</p>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 text-white uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-orange-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 text-white uppercase tracking-wider">Platform</h3>
            <ul className="space-y-3">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-orange-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 text-white uppercase tracking-wider">Community</h3>
            <ul className="space-y-3">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-orange-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-neutral-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Otical™ All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="https://www.linkedin.com/company/oticalofficial" className="text-neutral-400 hover:text-orange-500 transition-transform duration-300 transform hover:scale-125">
              <Facebook size={20} />
            </a>
            <a href="https://www.linkedin.com/company/oticalofficial" className="text-neutral-400 hover:text-orange-500 transition-transform duration-300 transform hover:scale-125">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/oticalofficial" className="text-neutral-400 hover:text-orange-500 transition-transform duration-300 transform hover:scale-125">
              <Twitter size={20} />
            </a>
             <a href="https://www.linkedin.com/company/oticalofficial" className="text-neutral-400 hover:text-orange-500 transition-transform duration-300 transform hover:scale-125">
              <Linkedin size={20} />
            </a>
             <a href="https://www.linkedin.com/company/oticalofficial" className="text-neutral-400 hover:text-orange-500 transition-transform duration-300 transform hover:scale-125">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
