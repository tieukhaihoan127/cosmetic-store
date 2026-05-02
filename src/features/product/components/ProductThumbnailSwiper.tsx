import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useProductGallery from '../hooks/useProductGallery';
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Thumbs } from "swiper/modules";

interface ProductThumbnailSwiperProps {
    thumbsSwiper: SwiperType | null;
    setThumbsSwiper: (swiper: SwiperType) => void;
    handlePrev: () => void;
    handleNext: () => void;
};

const ProductThumbnailSwiper = ({ thumbsSwiper, setThumbsSwiper, handlePrev, handleNext } : ProductThumbnailSwiperProps) => {

    const { paddedImages } = useProductGallery();

    return (
        <div className="flex flex-col items-center px-[5px] w-[100px] self-start sticky top-[150px] [@media(max-width:992px)]:relative [@media(max-width:992px)]:top-0 [@media(max-width:576px)]:hidden">
            <div onClick={handlePrev} className="thumb-prev z-10 cursor-pointer mb-[12px]">
                <KeyboardArrowUpIcon sx={{ fontSize: 28 }} />
            </div>
            <div className="flex-1 w-full overflow-hidden">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    direction="vertical"
                    slidesPerView={4}
                    slidesPerGroup={1}
                    rewind={true}
                    allowTouchMove={false}
                    watchSlidesProgress
                    modules={[Thumbs]}
                    className="!h-[50vh]"
                >
                    {paddedImages.map((src, i) => (
                        <SwiperSlide key={i} className="!h-auto">
                            {({ isActive }) => {
                                return src && (
                                    <img src={src}
                                        alt={`thumbnail-${i}`}
                                        onClick={() => thumbsSwiper?.slideTo(i)}
                                        className={`w-[90px] h-[90px] mb-[12px] object-cover rounded cursor-pointer transition-all duration-200
                                    ${isActive
                                                ? "border-2 border-black"
                                                : "border-2 border-transparent opacity-60 hover:opacity-100"
                                            }`}
                                    />
                                )
                            }}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div onClick={handleNext} className="thumb-next z-10 cursor-pointer mt-[12px]">
                <KeyboardArrowDownIcon sx={{ fontSize: 28 }} />
            </div>
        </div>
    );
};

export default ProductThumbnailSwiper;