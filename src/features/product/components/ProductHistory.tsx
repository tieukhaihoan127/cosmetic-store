import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from './ProductCard'
import { Navigation } from "swiper/modules"
import { useState } from 'react';
import type { Swiper as SwiperType } from "swiper";

const ProductHistory = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className="my-[10px]">
            <div className="mb-[20px] text-[24px] font-bold text-center">BẠN ĐÃ XEM GẦN ĐÂY</div>
            <div className='relative'>
                <Swiper
                    spaceBetween={20}
                    navigation={{
                        nextEl: '.history-next',
                        prevEl: '.history-prev',
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
                    className="mt-5"
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
                <div className={`history-prev absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white left-[-20px] top-[45%] shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] transition-opacity duration-300 ${isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 18 }} />
                </div>
                <div className={`history-next absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white right-[-20px] top-[45%] shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] transition-opacity duration-300 ${isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }} />
                </div>
            </div>
        </div>
    );
};

export default ProductHistory;