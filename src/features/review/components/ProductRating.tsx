import Rating from '@mui/material/Rating';
import ProductRatingBar from './ProductRatingBar';

const ProductRating = () => {
    return (
        <>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '32px', gap: '6px', marginBottom: '20px' }} />
            <div>
                <ProductRatingBar ratingNumber={5} ratingQuantity={37} total={40} />
                <ProductRatingBar ratingNumber={4} ratingQuantity={3} total={40} />
                <ProductRatingBar ratingNumber={3} ratingQuantity={0} total={40} />
                <ProductRatingBar ratingNumber={2} ratingQuantity={0} total={40} />
                <ProductRatingBar ratingNumber={1} ratingQuantity={0} total={40} />
            </div>
        </>
    );
};

export default ProductRating;