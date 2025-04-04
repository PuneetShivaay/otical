import { CheckCircle2 } from "lucide-react";
import { recentProjects } from "../../constants";
import { Link } from "react-router-dom";
import { ourClients } from "../../constants";

function Team(){
    return <>

<div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
            We are group of
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              {" "}
              awesome people
            </span>
          </h2>
        </div>
        <div className="mt-20">
          <div className="flex flex-wrap">
            {recentProjects.map((option, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="p-10 border border-neutral-700 rounded-xl">
                  <div className="flex mt-2 items-start ">
                    <img
                      className="rounded-lg border border-orange-700 shadow-orange-400 mx-2 my-4 h-48 w-96 object-cover"
                      src={option.image}
                      alt={option.title}
                    />
                  </div>
                  <p className="text-2xl mb-2">{option.title}</p>
                  <p className="mb-">
                    <span className="text-neutral-400 tracking-tight">
                      {option.category}
                    </span>
                  </p>

                  {/* <Link
                    to="https://otical.in/projects-gird/"
                    className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                  >
                    Know More
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
}

export default Team;