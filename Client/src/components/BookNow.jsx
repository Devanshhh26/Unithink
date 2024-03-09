import React, { useState } from 'react';
import axios from 'axios';
import homebg from '../assets/homebg.png';
import { Label, TextInput, Button, Alert,Select } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function BookNow() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        phonenumber: '',
        degree: ''
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
        <div>
            <div style={{ backgroundImage: `url(${homebg})` }} className="h-screen bg-cover bg-center bg-no-repeat pt-32 pb-10 flex justify-center items-center mt-10 md:mt-0">
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
                                <Label value='Name' />
                                <TextInput
                                    type='text'
                                    placeholder='Enter your name'
                                    id='name'
                                    value={formData.name}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <Label value='Email' />
                                <TextInput
                                    type='email'
                                    placeholder='Enter your email'
                                    id='email'
                                    value={formData.email}
                                    onChange={handleChange} rightIcon={HiMail} />
                            </div>
                            <div>
                                <Label value='Phone' />
                                <TextInput
                                    type='number'
                                    placeholder='Enter your number'
                                    id='phonenumber'
                                    value={formData.phonenumber}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <Label htmlFor="degree" value="Select your degree" />
                                <Select id="degree" value={formData.degree} onChange={handleChange} required>
                                    <option value="Masters">Masters</option>
                                    <option value="Bachelors">Bachelors</option>
                                    <option value="PhD">PhD</option>
                                </Select>
                            </div>
                            <div>
                                <Label value='Country' />
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
            </div>
        </div>
    );
}

export default BookNow;
