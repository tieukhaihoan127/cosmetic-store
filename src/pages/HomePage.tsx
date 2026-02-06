import BrandCarousel from '../components/ui/Carousel/BrandCarousel'
import FlashSaleCarousel from '../components/ui/Carousel/FlashSaleCarousel'
import HomeBannerCarousel from '../components/ui/Carousel/HomeBannerCarousel'
import HomeCarousel from '../components/ui/Carousel/HomeCarousel'
import HomeItemCarousel from '../components/ui/Carousel/HomeItemCarousel'

const HomePage = () => {
  return (
    <div>
        <HomeCarousel/>
        <BrandCarousel/>
        <FlashSaleCarousel/>
        <HomeBannerCarousel/>
        <HomeItemCarousel/>
    </div>
  )
}

export default HomePage