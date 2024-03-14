import React from 'react'
import aboutusperson from '../assets/aboutusperson.jpg'
import boardmeet from '../assets/about3.png'
import { Label, TextInput, Button, Alert,Select } from 'flowbite-react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { HiMail } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {

  
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      country: '',
      phonenumber: '',
      degree: 'Masters'
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.country || !formData.phonenumber || !formData.degree) {
          return setErrorMessage('Please fill all the details');
      }
      try {
          setLoading(true);
          const response = await axios.post('https://unithink-corp.onrender.com/api/SessShort/', formData);
          console.log('Data sent successfully:', response.data);
          setLoading(false);
          setSuccessMessage('Form submitted successfully!');
          toast.success('Form submitted successfully!');
          setFormData({
              name: '',
              email: '',
              country: '',
              phonenumber: '',
              degree: ''
          });
          setErrorMessage(null);
      } catch (error) {
          console.error('Error sending data:', error);
          setLoading(false);
          setErrorMessage('Failed to submit form. Please try again later.');
          toast.error('You have already Registered once');
      }
  };

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  return (
    <div className='mt-10 md:mt-20 lg:mt-32 mx-auto justify-items-center'>
  <h1 className='text-center text-3xl md:text-5xl lg:text-5xl pb-5 md:pb-10 underline lg:pt-10 md:pt-12 pt-20'>Request Free Consultation</h1>
  <div className='p-3 md:p-5 lg:p-10 mx-3 sm:mx-auto lg:mx-auto max-w-md md:max-w-lg lg:max-w-3xl mb-10'>
    <p className='text-base md:text-lg text-center md:text-left'>Book a session now! Don't worry, we won't charge you for anything...</p>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Label value='Name*' />
        <TextInput
          type='text'
          placeholder='Enter your name'
          id='name'
          value={formData.name}
          onChange={handleChange} />
      </div>
      <div>
        <Label value='Email*' />
        <TextInput
          type='email'
          placeholder='Enter your email'
          id='email'
          value={formData.email}
          onChange={handleChange} rightIcon={HiMail} />
      </div>
      <div>
        <Label value='Phone*' />
        <TextInput
          type='number'
          placeholder='Enter your number'
          id='phonenumber'
          value={formData.phonenumber}
          onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="degree" value="Select your degree*" />
        <Select id="degree" value={formData.degree} onChange={handleChange} required>
          <option value="Masters">Masters</option>
          <option value="Bachelors">Bachelors</option>
          <option value="PhD">PhD</option>
        </Select>
      </div>
      <div>
        <Label value='Country*' />
        <TextInput
          type='text'
          placeholder='Enter your preferred country'
          id='country'
          value={formData.country}
          onChange={handleChange} />
      </div>
      <Button gradientDuoTone='pinkToOrange' type='submit' disabled={loading}>{loading ? 'Booking...' : 'Book Now!'}</Button>
    </form>
  </div>
</div>

  )
}

export default Contact