import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import useProfileTabs from "../hooks/useProfileTabs";
import { TABS } from "../../../shared/constants/data.constant";

const ProfileTabs = () => {

    const { activeTab, setActiveTab, swiperRef, wrapperRef, handleMouseDown, handleMouseMove, stopDrag } = useProfileTabs();

    return (
        <div className="w-full">
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
                    spaceBetween={15}
                    className="w-full"
                >
                    {TABS.map((tab, index) => (
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
        </div>
    );
};

export default ProfileTabs;