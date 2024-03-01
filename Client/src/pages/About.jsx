import React from 'react'
import boardmeeting from '../assets/boardmeeting.jpg'
import aboutusperson from '../assets/aboutusperson.jpg'
import boardmeet from '../assets/boardmeet.jpg'

function About() {
  return (
  <div className="flex flex-col items-center justify-center">
  <img src={boardmeet} alt="" className="max-w-full mb-8 pb-10 md:max-h-96 md:mb-0" />
  <div className="mx-4 md:mx-20 text-gray-600 text-lg">
    <p className=''>
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem laudantium harum molestias repellendus. Vero, minus! Maxime enim architecto nobis id magnam ducimus. Voluptatibus pariatur, maiores labore aperiam nihil ut fuga.
    </p>
    <p className='pt-5 text-lg'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque fugiat, eius, facere modi cupiditate labore tenetur ex, similique cumque saepe porro quae? Nemo eius, veniam quis natus ad mod.
    </p>
    <h1 className="text-center mt-8 font-bold text-2xl underline text-black">MISSION</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nisi mollitia quia atque quisquam beatae obcaecati quibusdam explicabo quis, quod, repellat nemo culpa cumque consequatur. Atque earu</p>
    <h1 className="text-center mt-8 font-bold text-2xl underline text-black">VISION</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptates explicabo omnis provident, accusamus ipsa, magni architecto doloremque ab perferendis consequuntur illum sit et obcaecati</p>
    <h1 className="text-center mt-8 font-bold text-2xl underline pb-5 text-black">MEET THE FOUNDER</h1>
    <div className="flex flex-col md:flex-row items-center justify-center">
      <img src={aboutusperson} alt="" className="max-h-96 mx-auto rounded-xl md:mr-10 mb-8 md:mb-0" />
      <div className="md:w-1/2">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde faccia Unde faccia cUnde faccia c consequatur vero quidem?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae recusandae ipsa, incidunt aliquid quod ipsam, ut, hic inventore </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque explicabo placeat perspiciatis quod. Itaque minus assumenda</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus architecto ipsam doloremque illo consequuntur ad, et ea aper=</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default About