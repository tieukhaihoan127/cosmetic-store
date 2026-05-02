import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import NavigateBreadcrumb from '../../shared/components/common/Breadcrumb/NavigateBreadcrumb';
import { openReviewDialog } from '../../features/review/store/review.slice';
import { ProductRating, ReviewDialog, ReviewProductBanner, UserReview } from '../../features/review';

const ReviewPage = () => {

  return (
    <div className='w-[90%] mx-auto mt-[15px]'>
      <div className='flex items-center'>
        <div className='flex text-[12px] mr-[20px] items-center cursor-pointer'>
          <ArrowBackIosNewOutlinedIcon sx={{ fontSize: '14px' }} />
          <div className='ml-[10px]'>
            Trở về
          </div>
        </div>
        <NavigateBreadcrumb mainCategory='Trang chủ' subCategory='Sản phẩm'/>
      </div>
      <div className='uppercase text-[36px] leading-[36px] my-[15px] font-medium'>
        Tất cả đánh giá
      </div>
      <ReviewProductBanner />
      <div className="grid grid-cols-12 mt-[50px]">
        <div className="col-span-4 w-[90%] pr-[20px] [@media(max-width:1199px)]:pr-0 [@media(max-width:1199px)]:col-span-12 [@media(max-width:1199px)]:mb-[30px]">
          <div className="flex items-center justify-between mb-[10px]">
            <div className="text-[24px] font-bold leading-[35px]">39 đánh giá</div>
            <div onClick={() => openReviewDialog()} className="underline leading-[1.5715] font-semibold text-[14px] cursor-pointer">VIẾT ĐÁNH GIÁ</div>
          </div>
          <ReviewDialog />
          <ProductRating />
        </div>
        <div className="col-span-8 px-[10px] [@media(max-width:1199px)]:col-span-12">
          <div>
            <UserReview />
            <UserReview />
            <UserReview />
            <UserReview />
            <UserReview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;