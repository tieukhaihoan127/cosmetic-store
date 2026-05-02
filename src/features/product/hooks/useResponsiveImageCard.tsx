import { useEffect, useState } from "react";

const DESKTOP_BREAKPOINT = 992;

const BANNER_URLS = {
    desktop: "https://image.hsv-tech.io/400x0/bbx/common/9d0ffd41-19f9-4c1f-9aab-31c7662f058e.webp",
    mobile: "https://image.hsv-tech.io/0x0/bbx/common/9d0ffd41-19f9-4c1f-9aab-31c7662f058e.webp",
};

const getUrl = () =>
    window.innerWidth > DESKTOP_BREAKPOINT ? BANNER_URLS.desktop : BANNER_URLS.mobile;

const useResponsiveBannerSrc = () => {
    const [bannerSrc, setBannerSrc] = useState(getUrl);

    useEffect(() => {
        const handleResize = () => setBannerSrc(getUrl());

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return bannerSrc;
};

export default useResponsiveBannerSrc;