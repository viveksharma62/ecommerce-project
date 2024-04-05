import React from 'react'
import MainCrosel from '../../components/HomeCarousel/MainCrosel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import mens_kurta from '../../../Data/Men/men_kurta';
import mens_shoes from '../../../Data/shoes.js';
import mens_shirt from '../../../Data/Men/men_shirt.json';
import Women_saree from '../../../Data/Saree/page1.js';
import women_dress from '../../../Data/Women/women_dress.json';





const HomePage = () => {
  return (
    <div>
      <MainCrosel />

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
       <HomeSectionCarousel data={mens_kurta} sectionName={"Men's kurta"}/>
       <HomeSectionCarousel data={mens_shoes} sectionName={"Mens's Shoes"}/>
       <HomeSectionCarousel data={mens_shirt} sectionName={"Men's Shirt"}/>
       <HomeSectionCarousel data={Women_saree} sectionName={"Women's Saree"}/>
       <HomeSectionCarousel data={women_dress} sectionName={"Woman's Dress"}/>
      </div>
    </div>
  )
}

export default HomePage
