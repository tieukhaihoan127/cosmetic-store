import { Link } from 'react-router-dom';
import ReviewDialog from '../../review/components/ReviewDialog';
import UserReview from '../../review/components/UserReview';
import ProductRating from '../../review/components/ProductRating';

const ProductReview = () => {
    return (
        <div className="grid grid-cols-12 mt-[50px]">
            <div className="col-span-4 w-[90%] pr-[20px] [@media(max-width:1199px)]:pr-0 [@media(max-width:1199px)]:col-span-12 [@media(max-width:1199px)]:mb-[30px]">
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
                <Link to='/products/son-nuoc-bong-thuan-chay-amuse-dew-tint-4g/reviews' >
                    <div className="underline text-[14px] leading-[1.5715] mt-[40px]">
                        Tải thêm bình luận
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProductReview;