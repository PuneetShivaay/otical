import { features } from "../../constants";
import Animated from "../animation/Animated";

const FeatureSection = () => {
  return (
    <Animated>
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] py-12">
        <div className="text-center">
          <div>
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase">
              Features
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-white">
            Build, Launch, and Scale
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              {" "}
              Your Digital Products
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20 justify-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-neutral-900 rounded-lg p-6 h-full transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg hover:shadow-orange-500/10">
                <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                  <div className="flex h-12 w-12 p-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white justify-center items-center rounded-full shrink-0">
                    {feature.icon}
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-4">
                    <h5 className="mt-1 mb-2 text-xl text-white">{feature.text}</h5>
                    <p className="text-md text-neutral-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Animated>
  );
};

export default FeatureSection;