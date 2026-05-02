import { PreviewOrderDrawer, PreviewOrderExpandedButton, PreviewOrderMobileAppbar, PreviewProductCard, PreviewProductCheckout, RecommendProductCard } from '../../features/order';
import NavigateBreadcrumb from '../../shared/components/common/Breadcrumb/NavigateBreadcrumb';


const PreviewOrderPage = () => {

    return (
        <div className='max-w-[1220px] mx-auto mt-[15px] px-[5%]'>
            <NavigateBreadcrumb mainCategory='Trang chủ' subCategory='Thanh toán' />
            <div className='font-bold text-[24px] leading-[26px] my-[10px]'>
                Giỏ hàng giao tận nơi
            </div>
            <div className='grid grid-cols-12 gap-[20px] mt-[25px] [@media(max-width:800px)]:block'>
                <div className='col-span-8 [@media(max-width:992px)]:col-span-7'>
                    <div className='rounded-[15px] border-1 border-[#dfdfdf] py-[20px] px-[30px]'>
                        <div className='text-[16px] leading-[26px] font-bold'>
                            AHC
                        </div>
                        <RecommendProductCard />
                        <RecommendProductCard />
                        <RecommendProductCard />
                        <PreviewOrderExpandedButton />
                    </div>
                    <div className='rounded-[15px] border-1 border-[#dfdfdf] py-[20px] px-[30px] mt-[16px]'>
                        <div className='text-[16px] leading-[26px] font-bold mb-[20px]'>
                            CLUB CLIO
                        </div>
                        <div className='grid grid-cols-3 [@media(max-width:992px)]:grid-cols-2 gap-[10px]'>
                            <PreviewProductCard />
                            <PreviewProductCard />
                            <PreviewProductCard />
                            <PreviewProductCard />
                            <PreviewProductCard />
                            <PreviewProductCard />
                        </div>
                    </div>
                </div>
                <PreviewProductCheckout />
                <PreviewOrderMobileAppbar />
            </div>
            <PreviewOrderDrawer />
        </div>
    );
};

export default PreviewOrderPage;