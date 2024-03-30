import React from "react";
import verti1 from "../assets/vertical1.png";


function Categories() {
  return (
    <div className="bg-white lg:mt-14 mt-5">
      <div className="max-w-[1600px] mx-auto py-10">
        <div className="w-full mx-auto  flex justify-center px-3">
          <h1 className="font-bold  lg:text-6xl text-2xl">
            Unlock Your Potential: Education, Careers & Business Success
          </h1>
        </div>
        {/* cards */}
        <div className="w-full mx-auto lg:px-3 px-1 lg:flex items-center gap-14 lg:mt-10 mt-2">
          <div className="hover:bg-[#EEE4E4] bg-white  duration-700 flex flex-col items-center gap-5 py-2 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
            <div className=" lg:2/4  w-full flex items-center justify-center py-2 rounded-full">
              <img src={verti1} alt="" />
            </div>
            <h4 className="font-heebo text-2xl">Study Abroad</h4>
            <p className="text-center p-4 font-semibold text-[#4c0f0f] text-lg">
              Embark on a life-changing adventure with study abroad programs
              tailored to your academic passions and career goals. Explore
              emerging destinations, discover scholarships, and navigate program
              selection with our expert guidance. We'll ensure your
              international education is smooth, enriching, and sets you on the
              path to success.
            </p>
          </div>
          <div className="hover:bg-[#EEE4E4] bg-white  duration-700 flex flex-col items-center gap-5 py-2 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
            <div className=" lg:2/4  w-full flex items-center justify-center py-2 rounded-full">
              <img src={verti1} alt="" />
            </div>
            <h4 className="font-heebo text-2xl">Study Abroad</h4>
            <p className="text-center p-4 font-semibold text-[#4c0f0f] text-lg">
              Embark on a life-changing adventure with study abroad programs
              tailored to your academic passions and career goals. Explore
              emerging destinations, discover scholarships, and navigate program
              selection with our expert guidance. We'll ensure your
              international education is smooth, enriching, and sets you on the
              path to success.
            </p>
          </div>
          <div className="hover:bg-[#EEE4E4] bg-white  duration-700 flex flex-col items-center gap-5 py-2 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
            <div className=" lg:2/4  w-full flex items-center justify-center py-2 rounded-full">
              <img src={verti1} alt="" />
            </div>
            <h4 className="font-heebo text-2xl">Study Abroad</h4>
            <p className="text-center p-4 font-semibold text-[#4c0f0f] text-lg">
              Embark on a life-changing adventure with study abroad programs
              tailored to your academic passions and career goals. Explore
              emerging destinations, discover scholarships, and navigate program
              selection with our expert guidance. We'll ensure your
              international education is smooth, enriching, and sets you on the
              path to success.
            </p>
          </div>
          <div className="hover:bg-[#EEE4E4] bg-white  duration-700 flex flex-col items-center gap-5 py-2 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
            <div className=" lg:2/4  w-full flex items-center justify-center py-2 rounded-full">
              <img src={verti1} alt="" />
            </div>
            <h4 className="font-heebo text-2xl">Study Abroad</h4>
            <p className="text-center p-4 font-semibold text-[#4c0f0f] text-lg">
              Embark on a life-changing adventure with study abroad programs
              tailored to your academic passions and career goals. Explore
              emerging destinations, discover scholarships, and navigate program
              selection with our expert guidance. We'll ensure your
              international education is smooth, enriching, and sets you on the
              path to success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;