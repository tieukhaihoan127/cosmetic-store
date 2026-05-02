import { useState, useRef, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";

const useOrderStatusCarousel = () => {

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
    
    return { wrapperRef, handleMouseDown, handleMouseMove, stopDrag, swiperRef, activeTab, setActiveTab };

};

export default useOrderStatusCarousel;