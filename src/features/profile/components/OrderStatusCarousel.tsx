import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import { TABSPROFILE } from "../../../shared/constants/data.constant";
import useOrderStatusCarousel from "../hooks/useOrderStatusCarousel";

const OrderStatusCarousel = () => {

    const { wrapperRef, handleMouseDown, handleMouseMove, stopDrag, swiperRef, activeTab, setActiveTab } = useOrderStatusCarousel();

    return (
        <div
            ref={wrapperRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            className="cursor-grab active:cursor-grabbing select-none"
        >
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView="auto"
                freeMode={true}
                simulateTouch={false}
                modules={[FreeMode]}
                className="w-full"
            >
                {TABSPROFILE.map((tab, index) => (
                    <SwiperSlide key={index} className="!w-auto">
                        <button
                            onClick={() => setActiveTab(index)}
                            className={[
                                "px-4 py-2 text-sm whitespace-nowrap border-b-2 transition-colors cursor-pointer",
                                activeTab === index
                                    ? "text-black font-medium border-black"
                                    : "text-gray-500 border-transparent hover:text-black",
                            ].join(" ")}
                        >
                            {tab}
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OrderStatusCarousel;