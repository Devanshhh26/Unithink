import React from 'react'
import homebg from '../assets/homebg.png'
import { Label,TextInput } from 'flowbite-react'
import { Button } from 'flowbite-react'
function BookNow() {

    const handleSubmit=async()=>{

    }
    const handleChange=()=>{

    }

  return (
<div>
  <div style={{ backgroundImage: `url(${homebg})` }} className="h-screen bg-cover bg-center bg-no-repeat pt-2 pb-10 flex justify-center items-center mt-10 md:mt-0">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-5">
      <div className="flex-1">
        <div className='font-bold text-3xl md:text-5xl tracking-wide text-center md:text-left'>
          A Stop for all your needs.
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
            <span className="relative text-white">Enroll</span>
          </span>
          now and achieve what's yours!!
        </div>
        <p className='text-sm mt-5 text-center md:text-left'>Select Countries based on your preferences, not on your relatives' choices!</p>
        <Button outline size='lg' className='mt-5 mx-auto md:mx-0' gradientDuoTone='pinkToOrange'>Explore</Button>
      </div>
      <div className='flex-1 p-5 bg-gradient-to-b from-orange-100 to-amber-100 border rounded-2xl shadow-lg m-1'>
        <p className='text-lg text-center md:text-left'>Book a session now! Dw! We won't charge you for anything...</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label value='Name'/>
            <TextInput 
              type='text'
              placeholder='Enter your name'
              id='name'
              onChange={handleChange}/>
          </div>
          <div>
            <Label value='Email'/>
            <TextInput 
              type='email'
              placeholder='Enter your email'
              id='email'
              onChange={handleChange} />
          </div>
          <div>
            <Label value='Phone'/>
            <TextInput 
              type='number'
              placeholder='Enter your number'
              id='number'
              onChange={handleChange} />
          </div>
          <Button gradientDuoTone='pinkToOrange' type='submit'>Book Now!</Button>
        </form>
      </div>
    </div>
  </div>
</div>


  )
}

export default BookNow