import useCart from '../hooks/useCart';

const CartPrice = () => {

    const { handlePayment } = useCart();

    return (
        <div className="pt-[15px] pb-[20px] px-[23px]">
            <div className="flex items-center justify-between mb-[5px] font-bold text-[14px]">
                <div>Giao hàng</div>
                <div>1.442.700đ</div>
            </div>
            <div className="flex items-center justify-between mb-[16px] opacity-50 text-[14px]">
                <div>Click & Collect</div>
                <div>458.000đ</div>
            </div>
            <div onClick={handlePayment} className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                Tiếp tục với hình thức giao hàng
            </div>
        </div>
    );
};

export default CartPrice;