import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-20 lg:mt-28 max-w-7xl mx-auto px-4">
      <div className="w-full lg:w-1/2 lg:pr-10">
        
        <div className="mb-6">
          <Link href="/services/ai-machine-learning" className="inline-block bg-transparent text-neutral-400 py-1 px-4 rounded-full text-sm border border-neutral-700 hover:bg-neutral-900 transition-colors duration-300">
            Now Offering: AI & Machine Learning <span style={{ color: '#ff3131' }}>&rarr;</span>
          </Link>
        </div>

        <h1 
          className="text-5xl sm:text-6xl lg:text-7xl text-left tracking-tighter"
          style={{ fontFamily: '\'Lora\', serif' }}
        >
          <span style={{ fontWeight: 400 }}>AI-Powered</span> <br />
          <span style={{ fontWeight: 700 }}>Web Development</span>
        </h1>

        <p className="mt-8 text-xl text-left text-neutral-400 max-w-2xl leading-8">
          Leverage the power of AI to automate processes, gain insights from data, and create intelligent web applications that drive growth.
        </p>
        
        <div className="flex justify-start my-10 space-x-6 items-center">
          <Link href="/contact" className="bg-white text-black py-3 px-5 rounded-md font-semibold hover:bg-neutral-200 transition-all duration-300">
            Get started
          </Link>
          <Link href="/projects" className="text-neutral-400 hover:text-white transition-colors duration-300">
            Documentation
          </Link>
        </div>

      </div>
      
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full"
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
          Your Browser does not support the video tag
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
