import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'flowbite-react';
import { HiArrowCircleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';


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
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center">
          {countries.map((country, index) => (
            <div key={index} className="p-2">
            <Link to={`/countries/${country}`}>
              <Card className="max-w-sm scale-110 hover:scale-105 hover:blur-sm" imgSrc="https://pics.craiyon.com/2023-11-01/b6267e26f11842ac8fa017e010f6e994.webp" horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {country}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Card>
            </Link>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Countries;
