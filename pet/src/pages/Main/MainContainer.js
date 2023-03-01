import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import { Keyboard } from 'swiper';

import './MainContainer.css'
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';

import MainPage1 from '../../assets/images/1.png';
import MainPage2 from '../../assets/images/2.png';
import MainPage3 from '../../assets/images/3.png';

const MainContainer=()=>{

    return(
        <div>
  
        <Swiper className="mySwiper"
          direction={'vertical'}
          mousewheel
          keyboard
  
          modules={[Keyboard, Mousewheel]}
          speed={1000} 
          slidesPerView={1}
          threshold={500000}
          resistance={true}
  
          breakpoints={720}
  
          onSlideChange={() => console.log('slide change')}
          onActiveIndexChange={(swiper) => {
            console.log(swiper.activeIndex);
          }}
        >
=
        <SwiperSlide>
          <img src={`${MainPage1}`} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${MainPage2}`} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${MainPage3}`} alt=""/>
        </SwiperSlide>
  
      </Swiper>
      </div>
    )
}
export default MainContainer;