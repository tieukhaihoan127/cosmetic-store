import Divider from "@mui/material/Divider";
import { ProductDescription, ProductHistory, ProductInformation, ProductMainSwiper, ProductRelated, ProductReview, ProductThumbnailSwiper } from "../../features/product";
import { ProductQnA } from "../../features/qna";
import useProductGallery from "../../features/product/hooks/useProductGallery";


const ProductDetailPage = () => {

    const { thumbsSwiper, setThumbsSwiper, handlePrev, handleNext, setMainSwiper } = useProductGallery();

    return (
        <div className="w-[90%] mx-auto">
            <div className="grid mt-[20px] [grid-template-columns:100px_1fr_50%] [@media(max-width:992px)]:[grid-template-columns:100px_1fr] [@media(max-width:992px)]:grid-rows-[auto_auto]">
                <ProductThumbnailSwiper thumbsSwiper={thumbsSwiper} setThumbsSwiper={setThumbsSwiper} handlePrev={handlePrev} handleNext={handleNext} />
                <ProductMainSwiper thumbsSwiper={thumbsSwiper} setMainSwiper={setMainSwiper} />
                <ProductInformation />
            </div>
            <Divider sx={{ marginY: '15px' }} />
            <ProductDescription />
            <Divider />
            <ProductReview />
            <Divider sx={{ marginTop: '50px' }} />
            <ProductQnA />
            <Divider sx={{ marginTop: '50px' }} />
            <ProductRelated />
            <Divider />
            <ProductHistory />
        </div>
    );
};

export default ProductDetailPage;