import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { HiArrowCircleRight } from 'react-icons/hi';

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/');
        const responseData = response.data;
        setCountries(responseData.data.map(country => country.country));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='pt-20'>
      <h1 className="text-3xl font-bold mt-10 mb-5 text-center">List of Countries</h1>
      <div className="flex flex-wrap">
        {countries.map((country, index) => (
          <div key={index} className="w-10 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2 hover:scale-105">
            <div className="bg-gray-200 rounded p-4 text-center">{country}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countries;
