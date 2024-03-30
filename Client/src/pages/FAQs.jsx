import React from 'react'
import { Accordion } from 'flowbite-react';
import faqsimagebg from '../assets/faqs.png'
import homebgsm from '../assets/homebgsm.png'
import axios from 'axios';
import { useState,useEffect } from 'react';

function FAQs() {

  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('https://unithink-corp.onrender.com/api/faq/');
        setFaqs(response.data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };
    fetchFaqs();
  }, []);

  return (
<div className=''>
  <div style={{ backgroundImage: `url(${homebgsm})` }} className="pr-0 md:pr-52 bg-cover bg-center bg-no-repeat flex justify-center items-center pb-16">
   <div className='flex flex-col md:flex-row md:ml-52 items-center text-center'>
    <h1 className='text-5xl'>
      <span>We are here to </span> 
      <br />
      <span >help. Ask us </span> 
      <br/>
      <span >anything!</span>
    </h1>
    <img src={faqsimagebg} alt="" className='max-h-96 mx-auto mt-5' />
  </div>
  </div>
    <h1 className='mx-auto text-3xl font-bold  text-center p-5'>Frequently Asked Questions</h1>
      <Accordion collapseAll className='mr-5 ml-5'>
      {faqs.map((faq, index) => (
          <Accordion.Panel key={index}>
            <Accordion.Title>{faq.faq_ques}</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-700">{faq.faq_ans}</p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
    </Accordion>
    </div>
  )
}

export default FAQs