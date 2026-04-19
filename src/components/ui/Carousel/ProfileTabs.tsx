import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";


const TABS = [
    "Tài khoản",
    "Đơn hàng",
    "Địa chỉ giao nhận",
    "Ưu đãi của tôi",
    "Câu hỏi của tôi",
];

export default function ProfileTabs() {
    const [activeTab, setActiveTab] = useState(0);

    const swiperRef = useRef<SwiperType | null>(null);

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (swiperRef.current) {
                swiperRef.current.translateTo(
                    swiperRef.current.translate - e.deltaY * 1.5,
                    200
                );
            }
        };

        el.addEventListener("wheel", handleWheel, { passive: false });
        return () => el.removeEventListener("wheel", handleWheel);
    }, []);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const startTranslate = useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.clientX;
        startTranslate.current = swiperRef.current?.translate ?? 0;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !swiperRef.current) return;
        const diff = e.clientX - startX.current;
        swiperRef.current.translateTo(startTranslate.current + diff, 0);
    };

    const stopDrag = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        swiperRef.current?.updateProgress();
    };

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
}