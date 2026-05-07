import { testimonials } from "../../constants";
import Animated from "../animation/Animated";

const Testimonials = () => {
  return (
    <Animated>
      <div className="mt-20 tracking-wide py-12 border-t border-neutral-800">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-white">
          What People
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            are saying
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="bg-neutral-900 rounded-lg p-6 text-md border border-neutral-800 font-thin h-full transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg hover:shadow-orange-500/10 transform hover:-translate-y-2">
                <p className="text-neutral-300">{testimonial.text}</p>
                <div className="flex mt-8 items-center">
                  <img
                    className="w-12 h-12 mr-6 rounded-full border-2 border-orange-500"
                    src={testimonial.image}
                    alt={testimonial.user}
                  />
                  <div>
                    <h6 className="font-semibold text-white">{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-500">
                      {testimonial.company}
                    </span>
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

export default Testimonials;
