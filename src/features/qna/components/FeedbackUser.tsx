const FeedbackUser = () => {
    return (
        <div className="my-[20px]">
            <div className="flex items-center text-[14px]">
                <div className="mr-[5px]">KH</div>
                <div className="font-bold">Hoan Tieu</div>
            </div>
            <div className="my-[10px] text-[12px]">
                Thời gian nhận hàng sau khi đặt hàng trong vòng bao lâu?
            </div>
            <div className="flex items-center text-[14px]">
                <div className="mr-[10px] font-bold">TRẢ LỜI</div>
                <div className="opacity-[0.5]">3 hours ago</div>
            </div>
            <div className="relative max-w-[100%] py-[30px] px-[26px] my-[20px] rounded-[5px] border-1 border-[#dfdfdf] before:content-[''] before:absolute before:w-0 before:h-0 before:bottom-full before:left-[1.5em] before:border-r-[0.75rem] before:border-r-transparent before:border-b-[0.75rem] before:border-b-white before:border-l-[0.75rem] before:border-l-transparent before:border-t-0 before:[filter:drop-shadow(rgba(0,0,0,0.1)_0px_-0.0625rem_0.0625rem)]">
                <div className="text-[#b0100f] font-semibold text-[14px]">Beauty Box Vietnam</div>
                <div className="text-[12px] mt-[10px] mb-[15px]">Chào bạn, BEAUTY BOX rất vui khi được hỗ trợ bạn, bạn vui lòng nhắn về fanpage chính hãng Beauty Box có dấu tick xanh để được hỗ trợ thêm nhé ạ : https://www.facebook.com/BeautyBoxOfficialVN BEAUTY BOX cảm ơn bạn đã liên hệ</div>
                <div className="text-[14px] opacity-[0.5] ">36 minutes ago</div>
            </div>
        </div>
    );
};

export default FeedbackUser;