'use client';
import React from 'react';
import { services } from "../../constants";
import { motion } from "framer-motion";

function Services() {
  return (
    <div className="relative py-20 border-b border-neutral-800 bg-neutral-900/50">
      <div className="text-center max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-orange-500/10 text-orange-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-8 tracking-tight text-white">
            Services we’re offering
            <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
              {" "}
              to our customers
            </span>
          </h2>
        </motion.div>
      </div>
      <div className="flex flex-wrap mt-20 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
          >
            <motion.div 
              className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 h-full transition-all duration-300 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/15 transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start">
                <div className="flex h-12 w-12 p-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white justify-center items-center rounded-full shrink-0">
                  {service.icon}
                </div>
                <div className="ml-5">
                  <h5 className="mt-1 mb-4 text-xl text-white">{service.text}</h5>
                  <p className="text-md text-neutral-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
