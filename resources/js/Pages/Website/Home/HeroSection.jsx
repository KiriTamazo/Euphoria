import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
  
const HeroSection = () => {
    const sliderRef = useRef();

    return (
        <section className='bg-primary h-screen max-w-[1400px] mx-auto'>
            <Swiper className='relative min-h-[90vh]'
                loop={true}
                modules={[Navigation, Pagination,EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation={true}
                pagination={{ clickable: true }}
                onSwiper={swiper => (sliderRef.current = swiper)} 
                onSlideChange={() => console.log('slide change')}
          
            >
                <div onClick={() => sliderRef.current?.slidePrev()}
                    className='absolute z-[50] cursor-pointer top-[50%]'>Prev</div>
                <SwiperSlide className='h-[500px]'>Slide 1</SwiperSlide>
                <SwiperSlide className='h-[500px]'>Slide 2</SwiperSlide>
                <SwiperSlide className='h-[500px]'>Slide 3</SwiperSlide>
                <SwiperSlide className='h-[500px]'>Slide 4</SwiperSlide>
                <div onClick={() => sliderRef.current?.slideNext()}
                    className='absolute z-[50] cursor-pointer top-[50%] right-0'>Next</div>

            </Swiper>

        </section>
    )
}
export default HeroSection