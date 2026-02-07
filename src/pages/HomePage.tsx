import AdvertisementCarousel from '../components/ui/Carousel/AdvertisementCarousel'
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
        <HomeItemCarousel/>
        <div className='mt-10'>
          <div className='font-bold text-center text-[25px] mb-[20px]'>TOP TREND HÔM NAY</div>
          <div className='flex w-full justify-center text-center flex-wrap gap-[10px]'>
            <div className='rounded-[38px] bg-[#f6f6f6] px-[20px] py-[10px] text-sm'>son peripera</div>
            <div className='rounded-[38px] bg-[#f6f6f6] px-[20px] py-[10px] text-sm'>cushion clio</div>
            <div className='rounded-[38px] bg-[#f6f6f6] px-[20px] py-[10px] text-sm'>mặt nạ</div>
            <div className='rounded-[38px] bg-[#f6f6f6] px-[20px] py-[10px] text-sm'>sữa rửa mặt</div>
            <div className='rounded-[38px] bg-[#f6f6f6] px-[20px] py-[10px] text-sm'>kem chống nắng</div>
          </div>
        </div>
        <AdvertisementCarousel/>
    </div>
  )
}

export default HomePage