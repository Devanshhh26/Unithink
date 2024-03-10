import React from 'react'
import boardmeeting from '../assets/boardmeeting.jpg'
import aboutusperson from '../assets/aboutusperson.jpg'
import boardmeet from '../assets/about3.png'

function About() {
  return (
    <div className="max-w-[1560px] mx-auto opacity-100">
      <div className="relative w-full lg:mt-28 mt-28">
        <div class="lg:pt-16 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
          <div className="w-full border-b border-black">
            <h1 className="text-black lg:text-9xl md:text-6xl text-4xl text-center">About us</h1>
          </div>
          <div className="">
            <p className="w-full lg:pt-10 lg:pb-2 lg:text-base text-[10px] pt-2 text-center">UEI: Bridging education and business realms, fostering collaboration for optimized processes and resource development."</p>
          </div>
          <div className="w-18 border border-black bg-[#F05252] rounded-full flex items-center justify-center">
            <button className="text-xs px-2 py-2">Meet us at</button>
          </div>
        </div>
        <div className="w-full opacity-20">
          <img src={boardmeet} alt="" className="max-w-full" />
        </div>
      </div>
      {/* main content page */}
      <div className="w-full mx-auto mt-10">
        {/* heading */}
        <div className="w-1/2 border-b border-black mx-auto">
          <h1 className="uppercase lg:text-6xl md:text-4xl text-2xl text-center lg:p-4 p-2">who we are</h1>
        </div>
        <div className="w-11/12 mx-auto mt-5">
          <p className="lg:text-3xl md:2xl text-center text-neutral-500 font-medium">
            UniThink Education International is dedicated to the education and business for helping them set their processes, developing their human resources, manage the entire supply chain end to end. It's a network connecting top leaders of education and industry and establish the dialogue for capturing the opportunities which are amicable for both.
          </p>
        </div>
      </div>
      {/* VISIONS */}
      <div className="w-full mx-auto mt-10">
        {/* heading */}
        <div className="w-1/2 border-b border-black mx-auto">
          <h1 className="capitalize lg:text-6xl md:text-4xl text-2xl text-center lg:p-4 p-2">UEI envisions</h1>
        </div>
        <div className="w-11/12 mx-auto mt-7">
          <ul className="w-full list-disc px-auto">
            <li className="lg:text-2xl text-neutral-500"><span className="font-bold">Global Leadership:</span> Being a global leader in empowering individuals for unparalleled career growth.</li>
            <li className=" text-2xl text-neutral-500
            "><span className="font-bold
            ">Seamless Integration:</span> Seamlessly integrating tailored education choices with unique cultural identities and personal aspirations.</li>
            <li className=" text-2xl text-neutral-500
            "><span className="font-bold
            ">Executive Development Catalyst:</span> Catalyzing professionals at all levels for personal growth and organizational success.</li>
            <li className=" text-2xl text-neutral-500
            "><span className="font-bold
            ">Innovation and Transformation:</span> Leading continuous innovation and positive transformations in education and business.</li>
            <li className=" text-2xl text-neutral-500
            "><span className="font-bold
            ">Collaborative Excellence:</span> Creating a world where education and business collaborate seamlessly, contributing to global excellence</li>
          </ul>
        </div>
      </div>
      {/* FOUNDER */}
      <div className="w-full mx-auto mt-10">
        {/* heading */}
        <div className="w-1/2 border-b border-black mx-auto">
          <h1 className="uppercase lg:text-6xl md:text-4xl text-2xl text-center lg:p-4 p-2">Meet the Founder</h1>
        </div>

        <div className="w-1/2">
          <img src={aboutusperson} alt="" />
        </div>
      </div>

    </div>
  )
}

export default About