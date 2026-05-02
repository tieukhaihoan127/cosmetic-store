import useResponsiveBannerSrc from "../hooks/useResponsiveImageCard";

interface ProductImageCardProps {
    imageUrl: string
};

const ProductImageCard = ({ imageUrl }: ProductImageCardProps) => {

    const bannerSrc = useResponsiveBannerSrc();

    return (
        <div className='px-[5px]'>
            <img src={imageUrl} alt="" className="object-cover h-[50vh] mx-auto p-0 [@media(max-width:992px)]:h-[65vh] [@media(max-width:576px)]:!h-[50vh]" />
            <img src={bannerSrc} alt="" className='absolute bottom-0 object-contain [@media(max-width:992px)]:w-[85%]' />
            <div className='absolute top-[10px] right-[8%] [@media(max-width:576px)]:right-0'>
                <div className='bg-black text-white rounded-full w-[60px] h-[60px] flex items-center justify-center text-[22px] [@media(max-width:576px)]:w-[45px] [@media(max-width:576px)]:h-[45px] [@media(max-width:576px)]:text-[14px]'>20%</div>
            </div>
        </div>
    );
};

export default ProductImageCard;