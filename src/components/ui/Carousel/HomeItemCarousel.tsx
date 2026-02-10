import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ProductCard from '../Card/ProductCard';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import ViewAllButton from '../Button/ViewAllButton';

const HomeItemCarousel = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className='mt-10'>
            <div className='font-bold text-center text-[25px]'>
                MIFFY
            </div>
            <div className='relative'>
                <Swiper
                    spaceBetween={20}
                    navigation={{
                        nextEl: '.banner-next',
                        prevEl: '.banner-prev',
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2
                        },
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 4
                        },
                        1280: {
                            slidesPerView: 5
                        },
                    }}
                    modules={[Navigation]}
                    className="mt-5 w-[91%]"
                    onSlideChange={handleSlideChange}
                    onInit={handleSlideChange}
                >
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                </Swiper>
                <div className={`banner-prev absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white left-[50px] top-[45%] [@media(max-width:1120px)]:left-[30px]  [@media(max-width:1020px)]:left-[25px] [@media(max-width:950px)]:left-[20px] [@media(max-width:768px)]:left-[15px] [@media(max-width:576px)]:left-0 shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] transition-opacity duration-300 ${isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 18 }} />
                </div>
                <div className={`banner-next absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white right-[50px] top-[45%] [@media(max-width:1120px)]:right-[30px]  [@media(max-width:1020px)]:right-[25px] [@media(max-width:950px)]:right-[20px] [@media(max-width:768px)]:right-[15px] [@media(max-width:576px)]:right-0 shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] transition-opacity duration-300 ${isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }} />
                </div>
            </div>
            <div className='w-full text-center'>
                <ViewAllButton/>
            </div>
        </div>
    )
}

export default HomeItemCarousel