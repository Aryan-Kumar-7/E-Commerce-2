import React from 'react'
import { mainCaroselData } from './MainCaroselData'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel'

const MainCarosel = () => {
    const items = mainCaroselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt=''/>)


  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
}

export default MainCarosel
