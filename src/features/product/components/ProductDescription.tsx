import { useState } from 'react'

const ProductDescription = () => {

    const [expanded, setExpanded] = useState(false);
    
    const handleClickExpanded = () => {
        setExpanded(prev => !prev);
    };

    return (
        <div className="grid grid-cols-12 mb-[40px]">
            <div className="col-span-4 text-[24px] font-bold leading-[35px] [@media(max-width:1199px)]:col-span-12">
                Giới thiệu
            </div>
            <div className="col-span-8 p-[10px] [@media(max-width:1199px)]:col-span-12">
                <div className={` ${expanded ? 'max-h-[100000000px]' : 'max-h-[110px]'} overflow-hidden relative`}>
                    <div className="p-[10px] text-[14px] italic">
                        <p className="mt-[16px] pb-[16px]">
                            <b className="mr-1">Công dụng chính:</b> Son tint với công thức Jel-fit độc đáo vừa giúp duy trì màu sắc lâu trôi suốt 12h, đồng thời tạo hiệu ứng môi căng mướt, tươi tắn đầy sức sống.
                        </p>
                        <p><b className="mr-1">Hiệu ứng:</b> bóng</p>
                    </div>
                    <img src="https://image.hsv-tech.io/bbx/common/14d384ff-977c-4bff-a60d-9ff156068ab3.webp" alt="" />
                    <img src="https://image.hsv-tech.io/bbx/common/d585c1bd-d5c5-49aa-afee-a90183aec6eb.webp" alt="" />
                    <img src="https://image.hsv-tech.io/bbx/common/45fc73d7-62e1-4219-9bb4-975575737241.webp" alt="" className="mx-[20px]" />
                    <img src="https://image.hsv-tech.io/bbx/common/c8c01d4a-f4ff-456f-bb10-30a139d342ba.webp" alt="" />
                    <img src="https://image.hsv-tech.io/bbx/common/c8c01d4a-f4ff-456f-bb10-30a139d342ba.webp" alt="" className="mx-[20px]" />
                    <img src="https://image.hsv-tech.io/bbx/common/7ec322c8-cea5-4951-9951-2863fa23b605.webp" alt="" />
                    <img src="https://image.hsv-tech.io/bbx/common/ce8cd9fd-d6b5-4edc-b001-273d6b146159.webp" alt="" />
                    <img src="https://image.hsv-tech.io/bbx/common/e91f6da4-9af6-4bf0-844c-8845b8836712.webp" alt="" />
                    <img src="https://image.hsv-tech.io/bbx/common/4185ba7f-732f-42b6-b3b6-70f20564a9cc.webp" alt="" />
                    <img src="https://image.hsv-tech.io/bbx/common/0fc29b7f-a5cd-417c-b8c7-c18b7269b263.webp" alt="" />
                    <div className="text-[14px] p-[10px]">
                        <p className="mt-[16px] pb-[16px]">Son tint bóng Amuse Jel-fit Tint dạng thạch thuần chay, kết hợp được ưu điểm của son tint lâu trôi và son bóng cùng lớp gel dưỡng ẩm, tạo nên một sản phẩm hoàn hảo cho làn môi luôn căng mịn và tươi mới. Cơ chế Triple Glow - kết cấu gel bóng mượt và dưỡng ẩm từ bên trong, chứa dầu nhẹ và màng film khóa màu, giúp son bám chặt vào môi và tạo lớp phủ mềm mịn như thạch. Nhờ kết cấu dạng thạch đặc biệt này giúp son Jel-fit Tint giảm độ dính, tránh khô môi và giữ màu, độ bóng lẫn độ ẩm suốt 12 giờ.</p>
                        <p className="pb-[16px] mb-[16px]">Với 8 màu son lâu trôi và trong suốt, Amuse Jel-fit Tint tạo cảm giác nhẹ nhàng như thoa một lớp gel mượt mà lên môi, mang đến đôi môi căng mọng và rạng rỡ. Thiết kế mới với bao bì trong suốt và kích thước tiện lợi dễ mang theo, thể hiện rõ màu sắc thương hiệu.</p>
                    </div>
                    <div className="p-[10px] text-[14px]">
                        <h2 className="text-[30px] font-bold mt-[36px]">Điểm nổi bật của son tint thuần chay Amuse Jel-Fit Tint</h2>
                        <p className="my-[16px]">- Khả năng lên màu & duy trì màu sắc đến 12 tiếng với công nghệ Jel-fit</p>
                        <p className="my-[16px]">- Bổ sung độ ẩm với thành phần vitamin E & hyaluronic acid giúp chăm sóc đôi môi không khô, nứt nẻ, duy trì sắc môi rực rỡ cùng đôi môi khỏe khoắn</p>
                        <p className="my-[16px]">- Son tint tạo lớp dầu và màng phim mỏng bao phủ lên môi giống lớp thạch, tạo hiệu ứng môi căng mọng và đầy đặn sức sống</p>
                        <p className="my-[16px]">- Kết cấu dạng thạch bám dính độc đáo, giúp giảm độ lem, độ dính và khô, đồng thời giữ màu, độ sáng và độ ẩm trong 12 giờ. Ngoài ra, công thức dạng tint thạch giúp giảm độ chuyển màu, màu son khô nhanh và giữ màu lâu hơn.</p>
                        <p className="my-[16px]">- Sở hữu bảng màu sắc mới, tươi tắn, phù hợp với giới trẻ. Đặc biệt là thiết kế độc đáo của Muse với vỏ ngoài nhỏ nhắn, nắp trong suốt có thể nhìn rõ màu sắc bên trong của son môi</p>
                        <h2 className="text-[30px] font-bold mt-[36px]">Bảng màu son bóng Jel-Fit Tint</h2>
                        <p className="my-[16px]">01 Boksoonga Jelly: hồng </p>
                        <p className="my-[16px]">02 Healthy Salmon: hồng san hô</p>
                        <p className="my-[16px]">05 Oat Fig: hồng đấ</p>
                        <p className="my-[16px]">06 Seoul Girl: hồng ánh tím</p>
                        <p className="my-[16px]">07 Caramel: cam caramel</p>
                        <p className="my-[16px]">08 Gorgeous Mauve: tím</p>
                        <div className="p-[10px] italic">*Màu son lên môi sẽ khác nhau, tùy vào sắc độ môi của mỗi người. Đối với các dòng son Amuse, màu son thực tế sẽ có màu khác (nhạt hơn, vì kết cấu dạng tint cho sắc thái trong trẻo, tự nhiên hơn) so với màu vỏ son bên ngoài. Do đó, khách hàng cần tham khảo kỹ trước khi chọn mua </div>
                        <h2 className="text-[30px] font-bold mt-[36px]">Hướng dẫn sử dụng</h2>
                        <p className="my-[16px]">Thoa trực tiếp lên môi, theo sở thích tô lòng môi hoặc full môi.</p>
                    </div>
                    {!expanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    )}
                </div>
                <div onClick={handleClickExpanded} className="text-black mt-[20px] font-bold text-[14px] inline-block cursor-pointer trasition-all duration-300 hover:underline px-[15px] py-[8px] w-full text-center">
                    {expanded ? 'ẨN BỚT NỘI DUNG' : 'XEM THÊM NỘI DUNG'}
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;