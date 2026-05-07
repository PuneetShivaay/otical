import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../../constants";
import Animated from "../animation/Animated";

const Workflow = () => {
  return (
    <Animated>
      <div className="mt-20 py-12 border-t border-neutral-800">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide text-white">
            Streamline Your Business with
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              {" "}
              Our Expertise
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center mt-10 lg:mt-20 items-center">
          <div className="lg:w-1/2 p-4">
              <video
                  autoPlay
                  loop
                  muted
                  className="rounded-lg w-full border border-orange-700 shadow-orange-400"
              >
                  <source src="/videos/video1.mp4" type="video/mp4" />
                  Your Browser does not support the video tag
              </video>
          </div>
          <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-8 p-4 rounded-lg hover:bg-neutral-900 transition-all duration-300">
                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full shrink-0">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl font-semibold text-white">{item.title}</h5>
                  <p className="text-md text-neutral-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default Workflow;
