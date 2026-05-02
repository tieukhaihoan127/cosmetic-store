const ProductDetailPrice = () => {
    return (
        <div className="flex gap-[10px] items-center">
            <div className="text-[20px] font-bold">289.000đ</div>
            <div className="text-[14px] line-through opacity-50">399.000đ</div>
            <div className="w-auto h-[19px] bg-[#c73130] rounded-tl-[3px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[3px] text-[10px] text-white font-bold px-[10px] ml-[12px] flex items-center" style={{ clipPath: "polygon(8px 0%, 100% 0%, 100% 100%, 8px 100%, 0% 50%)" }}>-28%</div>
        </div>
    );
};

export default ProductDetailPrice;