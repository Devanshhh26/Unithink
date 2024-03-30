import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.jpg';
import { Label, TextInput, Button, Alert,Select } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import heroimage from '../assets/hero_image_demo.png'
import Booking from '../pages/Booking';
import { Link } from 'react-router-dom';


function BookNow() {
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
        <div className="bg-[#F0F4F6]">
        <div className=" mx-auto max-w-[1600px]">
          {/* wrapper */}
          <div className="mx-auto lg:flex">
            {/* left */}
            <div className="lg:w-2/3 w-full flex flex-col justify-center lg:mx-0 md:mx-4 px-2">
              <div className="mx-auto">
                <div className="mt-5">
                  <h6 className="font-popsemi lg:text-2xl md:text-xl text-xl font-extrabold">
                    Study Abroad
                  </h6>
                </div>
                <div className="mt-6">
                  <h1 className=" font-poppinsBold capitalize lg:text-8xl md:text-2xl text-5xl font-extrabold">
                    UniTh<span className="text-red-500">i</span>nk <br />
                    Boundless learning
                  </h1>
                </div>
                <div className="mt-5">
                  <p className="text-[#737373] lg:text-xl">
                    Discover answers to all your questions in a free consultation.
                  </p>
                </div>
                <div className="mt-10">
                <Link to='/booking' element={<Booking/>}>
                  <Button className="bg-black text-white py-3 px-6 hover:bg-red-500">
                    Book Now!
                  </Button>
                </Link>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="">
              <img src={heroimage} alt="" />
            </div>
          </div>
          {/*bottom part */}
          <div className=""></div>
        </div>
      </div>

    );
}

export default BookNow;
