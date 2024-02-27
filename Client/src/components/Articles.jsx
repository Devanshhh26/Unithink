import React from 'react'
import { Button, Card } from 'flowbite-react';
import topbg from '../assets/homebg.svg'
import course1 from '../assets/course-1.jpg'
import course2 from '../assets/course-2.jpg'
import course3 from '../assets/course-3.jpg'
import rotated from '../assets/rotated.svg'
import { HiArrowCircleRight } from "react-icons/hi";

function Articles() {
  return (
    <div>
        <div>
            <div  style={{ backgroundImage: `url(${rotated})` }} className=' p-2 pb-28 bg-cover bg-center bg-no-repeat'>
                <div className="flex items-center mt-5">
                    <div className="text-center mx-auto pt-5">
                        <p className="mb-4 mt-10 pt-5 text-gray-500 font-medium ">LATEST ARTICLES</p>
                        <h1 className="mb-4 text-5xl font-bold sm:text-lg md:text-4xl">Get News With UniThink</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center pt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        <Card className="max-w-sm relative hover:scale-105 shadow-xl " imgSrc={course3}>
                            <Button pill gradientDuoTone='pinkToOrange' outline className="absolute top-48 right-2 z-1 border border-red-500 p-0 m-0"><HiArrowCircleRight size={30}/></Button>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </Card>
                        <Card className="max-w-sm relative hover:scale-105 shadow-xl " imgSrc={course2}>
                        <Button pill gradientDuoTone='pinkToOrange' outline className="absolute top-48 right-2 z-1 border border-red-500 p-0 m-0"><HiArrowCircleRight size={30}/></Button>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </Card>
                        <Card className="max-w-sm relative hover:scale-105 shadow-xl " imgSrc={course1}>
                        <Button pill gradientDuoTone='pinkToOrange' outline className="absolute top-48 right-2 z-1 border border-red-500 p-0 m-0"><HiArrowCircleRight size={30}/></Button>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </Card>
                    </div>
                </div>


            </div>
            
        </div>
    </div>
  )
}

export default Articles