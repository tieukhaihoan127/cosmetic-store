import NavigateBreadcrumb from "../../../shared/components/common/Breadcrumb/NavigateBreadcrumb";
import { ShowroomDialog, StoreDialog, TimeDialog } from "../../location";
import { FundinBanner } from "../../payment";
import FlashSaleBanner from "./FlashSaleBanner";
import ProductBuying from "./ProductBuying";
import ProductColorPicker from "./ProductColorPicker";
import ProductDetailAppBar from "./ProductDetailAppBar";
import ProductDetailAttribute from "./ProductDetailAttribute";
import ProductDetailPrice from "./ProductDetailPrice";
import ProductSelectMethod from "./ProductSelectMethod";
import ProductSelectMethodDrawer from "./ProductSelectMethodDrawer";
import ProductSubDetail from "./ProductSubDetail";


const ProductInformation = () => {
    return (
        <div className="min-w-0 [@media(max-width:992px)]:col-span-full [@media(max-width:992px)]:mt-[15px]">
            <NavigateBreadcrumb mainCategory='Trang chủ' subCategory='Trang điểm' />
            <div className="my-[5px] font-bold text-[14px] leading-[20px] text-[#b0100f]">
                AMUSE
            </div>
            <div className="font-bold p-0 text-[20px]">
                Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g
            </div>
            <ProductSubDetail />
            <ProductDetailPrice />
            <FundinBanner />
            <FlashSaleBanner />
            <ProductColorPicker />
            <div className="mt-[20px]">
                <ProductSelectMethod hideOnMobile={true}/>
            </div>
            <StoreDialog />
            <ShowroomDialog />
            <TimeDialog />
            <ProductBuying />
            <ProductDetailAppBar />
            <ProductSelectMethodDrawer />
            <ProductDetailAttribute />
        </div>
    );
};

export default ProductInformation;