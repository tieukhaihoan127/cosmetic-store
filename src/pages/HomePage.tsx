import BrandCarousel from '../components/ui/Carousel/BrandCarousel'
import FlashSaleCarousel from '../components/ui/Carousel/FlashSaleCarousel'
import HomeCarousel from '../components/ui/Carousel/HomeCarousel'

const HomePage = () => {
  return (
    <div>
        <HomeCarousel/>
        <BrandCarousel/>
        <FlashSaleCarousel/>
    </div>
  )
}

export default HomePage