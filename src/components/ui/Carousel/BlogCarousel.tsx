import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import BlogCard from '../Card/BlogCard';
import Divider from '@mui/material/Divider';

import { useTheme } from '@mui/material/styles';
import BlogMenu from '../Menu/BlogMenu';
import ViewAllButton from '../Button/ViewAllButton';

const BlogCarousel = () => {
    const theme = useTheme();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className='mt-10 mx-auto'>
            <div className='font-bold text-center text-[25px] mb-[10px]'>GÓC ĐẸP BEAUTY BOX</div>
            <div className='flex justify-center gap-8 items-center'>
                <div className='text-[#818181] transition-colors duration-300 ease-in-out hover:font-semibold py-[12px] cursor-pointer hover:text-black text-[14px]'>Tin tức</div>
                <div className='text-[#818181] transition-colors duration-300 ease-in-out hover:font-semibold py-[12px] cursor-pointer hover:text-black text-[14px]'>Góc review</div>
                <div className='text-[#818181] transition-colors duration-300 ease-in-out hover:font-semibold py-[12px] cursor-pointer hover:text-black text-[14px] max-sm:hidden'>Cách chăm sóc da</div>
                <div className='text-[#818181] transition-colors duration-300 ease-in-out hover:font-semibold py-[12px] cursor-pointer hover:text-black text-[14px] max-md:hidden'>Xu hướng trang điểm</div>
                <div className='text-[#818181] transition-colors duration-300 ease-in-out hover:font-semibold py-[12px] cursor-pointer hover:text-black text-[14px] max-md:hidden'>Bí quyết khỏe đẹp</div>
                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{
                        height: "25px",
                        alignSelf: "center",
                        display: "block",
                        [theme.breakpoints.up(768)]: {
                            display: "none",
                        },
                    }}
                />
                <BlogMenu/>
            </div>
            <div className='relative blogSwiper'>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={15}
                    navigation={{
                        nextEl: '.blog-next',
                        prevEl: '.blog-prev',
                    }}
                    breakpoints={{
                        1280: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2.2,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: "auto",
                        },
                    }}
                    modules={[Navigation]}
                    className="mt-4 w-[90%]"
                    onSlideChange={handleSlideChange}
                    onInit={handleSlideChange}
                >
                    <SwiperSlide>
                        <BlogCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogCard />
                    </SwiperSlide>
                </Swiper>
                <div
                    className={`blog-prev absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white left-[40px] top-[40%] [@media(max-width:1020px)]:left-[25px] [@media(max-width:768px)]:left-[15px] [@media(max-width:576px)]:left-0 shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] transition-opacity duration-300 ${isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 18 }} />
                </div>

                <div
                    className={`blog-next absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white right-[40px] top-[40%] [@media(max-width:1020px)]:right-[25px] [@media(max-width:768px)]:right-[15px] [@media(max-width:576px)]:right-0 shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] transition-opacity duration-300 ${isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }} />
                </div>
            </div>
            <div className='w-full text-center mt-[20px]'>
                <ViewAllButton/>
            </div>
        </div>

    )
}

export default BlogCarousel