import Slider from "react-slick";
import { testimonials } from "../../constants";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="p-2">
          <div className="bg-neutral-900 rounded-lg p-6 text-md border border-neutral-800 font-thin h-full">
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
    </Slider>
  );
};

export default TestimonialSlider;
