import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductRelated = () => {
    return (
        <div className="grid grid-cols-12 my-[60px]">
            <div className="col-span-4 [@media(max-width:1199px)]:col-span-12 [@media(max-width:1199px)]:mb-[30px]">
                <div className="text-[24px] font-bold leading-[35px]">
                    Sản phẩm liên quan
                </div>
                <Link to="/">
                    <div className="underline font-bold text-[14px] cursor-pointer my-[15px]">
                        XEM TẤT CẢ CÁC SẢN PHẨM LIÊN QUAN
                    </div>
                </Link>
            </div>
            <div className="col-span-8 [@media(max-width:1199px)]:col-span-12">
                <div className="grid grid-cols-3 [@media(max-width:576px)]:grid-cols-2">
                    <div className="px-[5px]">
                        <ProductCard />
                    </div>
                    <div className="px-[5px]">
                        <ProductCard />
                    </div>
                    <div className="px-[5px]">
                        <ProductCard />
                    </div>
                    <div className="px-[5px]">
                        <ProductCard />
                    </div>
                    <div className="px-[5px]">
                        <ProductCard />
                    </div>
                    <div className="px-[5px]">
                        <ProductCard />
                    </div>
                    <div className="px-[5px]">
                        <ProductCard />
                    </div>
                    <div className="px-[5px]">
                        <ProductCard />
                    </div>
                    <div className="px-[5px]">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductRelated;