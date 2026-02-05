import BrandCarousel from '../components/ui/Carousel/BrandCarousel'
import FlashSaleCarousel from '../components/ui/Carousel/FlashSaleCarousel'
import HomeBannerCarousel from '../components/ui/Carousel/HomeBannerCarousel'
import HomeCarousel from '../components/ui/Carousel/HomeCarousel'

const HomePage = () => {
  return (
    <div>
        <HomeCarousel/>
        <BrandCarousel/>
        <FlashSaleCarousel/>
        <HomeBannerCarousel/>
    </div>
  )
}

export default HomePage