import { Carousel } from '@mantine/carousel'
import React from 'react'
import Home from './Slides/Home'
import Contact from './Slides/Contact'
import About from './Slides/About'



const Landing = () => {
  return (
    <div className="text-white h-full w-full " > 
        <Carousel  
            mx="auto" 
            withIndicators 
            className={"h-screen w-full"} 
            dragFree 
            draggable={false}
            initialSlide={1}
            speed={5}
            styles={{
                control: {
                  '&[data-inactive]': {
                    opacity: 0,
                    cursor: 'default',
                  },
                },
              }}
        >
        <Carousel.Slide className={"h-full w-full"}><Contact/></Carousel.Slide>
        <Carousel.Slide className={"h-full w-full"}><Home/></Carousel.Slide>
        <Carousel.Slide className={"h-full w-full"}><About/></Carousel.Slide>
        {/* ...other slides */}
        </Carousel>
    </div> 
  )
}

export default Landing