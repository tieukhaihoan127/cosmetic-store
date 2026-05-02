import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import useBreakpoint from "../../../shared/hooks/useBreakpoint";

const SLIDES_PER_VIEW = 4;

const images = [
    'https://image.hsv-tech.io/0x1920/bbx/common/53dd920f-cd75-45b8-bdd5-fd311def024c.webp',
    'https://image.hsv-tech.io/0x1920/bbx/common/e643a59e-b3e1-4966-acab-a3dba2a03234.webp',
    'https://image.hsv-tech.io/0x1920/bbx/common/9969b9c9-2479-4ec1-9f0d-9090365d8da4.webp',
    'https://image.hsv-tech.io/0x1900/bbx/common/c4d00bb8-6829-4c55-90e4-339f3b1d7d99.webp',
    'https://image.hsv-tech.io/0x1920/bbx/common/0bd5e5da-7e37-4188-8408-ad4cc2f733c6.webp',
    'https://image.hsv-tech.io/0x1920/bbx/common/f38ab282-7dd1-45cc-abc3-02b0efc143b0.webp',
    'https://image.hsv-tech.io/0x1900/bbx/common/45359be5-16ad-4799-8d34-257a15a29ae0.webp',
    'https://image.hsv-tech.io/0x1900/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp',
    'https://image.hsv-tech.io/0x1900/bbx/common/5cf8f15d-a0b1-4621-ab80-9721e18e429e.webp',
    'https://image.hsv-tech.io/0x1900/bbx/common/bf8a3fb7-7c2b-432d-ac5b-8dd525a95c1b.webp',
];

const useProductGallery = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

    const isSyncing = useRef(false);

    const paddedImages = [
        ...images,
        ...Array(SLIDES_PER_VIEW - 1).fill(null)
    ];

    const { isXS } = useBreakpoint();

    const handlePrev = () => {
        if (!thumbsSwiper || !mainSwiper) return
        const prevIndex = mainSwiper.activeIndex - 1
        const targetIndex = prevIndex < 0 ? images.length - 1 : prevIndex
        isSyncing.current = true
        mainSwiper.slideTo(targetIndex)
        thumbsSwiper.slideTo(targetIndex)
        isSyncing.current = false
    };

    const handleNext = () => {
        if (!thumbsSwiper || !mainSwiper) return
        const nextIndex = mainSwiper.activeIndex + 1
        const targetIndex = nextIndex >= images.length ? 0 : nextIndex
        isSyncing.current = true
        mainSwiper.slideTo(targetIndex)
        thumbsSwiper.slideTo(targetIndex)
        isSyncing.current = false
    };

    return { images, isXS, paddedImages, thumbsSwiper, mainSwiper, setThumbsSwiper, setMainSwiper, handlePrev, handleNext };
};

export default useProductGallery;