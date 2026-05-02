import { BlogCarousel } from "../../features/blog";
import { BrandCarousel } from "../../features/brand";
import { AdvertisementCarousel, FlashSaleCarousel, HomeBannerCarousel, HomeCarousel, HomeItemCarousel, TopTrending } from "../../features/home";

const HomePage = () => {
  return (
    <div>
        <HomeCarousel/>
        <BrandCarousel/>
        <FlashSaleCarousel/>
        <HomeBannerCarousel/>
        <HomeItemCarousel/>
        <HomeItemCarousel/>
        <TopTrending />
        <AdvertisementCarousel/>
        <BlogCarousel/>
    </div>
  );
};

export default HomePage;