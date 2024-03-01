import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://unithink-corp.onrender.com/api/country/');
        const responseData = response.data;
        setCountries(responseData);
      } catch (error) {
        console.log(error); 
      }
    };
    fetchData();
  }, []);
  return (
    <div className='pt-20 px-8'>
      <h1 className="text-3xl font-bold mt-10 mb-5 text-center pb-2">List Of Countries</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center">
        {countries && countries.map((country) =>(
          <div key={country._id} className="p-2 pb-10 ">
            <Link to={`/countries/${country.c_id}`}>
              <Card className="max-w-sm scale-110 hover:scale-105 shadow-lg" imgSrc="https://pics.craiyon.com/2023-11-01/b6267e26f11842ac8fa017e010f6e994.webp" horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {country.c_name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {country.c_about}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className='font-bold'>World Rank:</span> {country.c_worldrank}
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
