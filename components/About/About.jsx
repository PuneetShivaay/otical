import React from "react";
import Team from "./Team";

function About() {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        
      <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">About Us</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide text-white" >Pioneering Digital Solutions with a 
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> Passion for Innovation</span>
            </h2>
        </div>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        At Otical, we&apos;re more than just an IT development company; we are architects of the digital future. Based in Lucknow, we are an ISO-certified firm dedicated to crafting bespoke web solutions and harnessing the transformative power of Artificial Intelligence and Machine Learning. Our mission is to empower businesses by creating new opportunities through cutting-edge technology. We believe in building lasting relationships with our clients, treating every project with the utmost priority and responsibility. From initial concept to final deployment, we deliver quality and excellence, ensuring your vision becomes a reality.
        </p>

        <div className="text-center mt-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-10 lg:mt-20 tracking wide text-white">Our Mission</h3>
          <p className="mt-4 text-lg text-center text-neutral-500 max-w-2xl">
            Our mission is to empower businesses by creating new opportunities through cutting-edge technology. We believe in building lasting relationships with our clients, treating every project with the utmost priority and responsibility.
          </p>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-10 lg:mt-20 tracking wide text-white">Our Vision</h3>
          <p className="mt-4 text-lg text-center text-neutral-500 max-w-2xl">
            Our vision is to be a global leader in IT development, recognized for our innovation, quality, and commitment to client success. We aim to be at the forefront of technological advancements, shaping the digital landscape for a better future.
          </p>
        </div>

        <div className="flex justify-center my-10">
          <a
            href="/contact"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Start Now
          </a>
          <a href="/services" className="py-3 px-4 mx-3 rounded-md border">
            Know More
          </a>
        </div>
      </div>
      <Team />
    </>
  );
}

export default About;
