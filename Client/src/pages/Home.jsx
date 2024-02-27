import React from 'react'
import BookNow from '../components/BookNow'
import Categories from '../components/Categories'
import AboutUs from '../components/AboutUs'
import PopularCountriesImages from '../components/PopularCountriesImages'
import Articles from '../components/Articles'

function Home() {

  return (
    <div className='overflow-x-hidden'>
        <BookNow/>
        <Categories/>
        <AboutUs/>
        <PopularCountriesImages/>
        <Articles/>
    </div>
  )
}

export default Home