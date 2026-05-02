  import Divider from "@mui/material/Divider"
  import ProductPage from "./ProductPage"
  import { useState } from "react"

  const CollectionPage = () => {

    const [expanded, setExpanded] = useState(false);

    const handleClickExpanded = () => {
      setExpanded(prev => !prev);
    };

    return (
      <div>
        <div className="w-[90%] mx-auto">
          <img src="https://image.hsv-tech.io/1920x0/bbx/common/b99fedb1-7436-49f2-8d6c-f72598c9f993.webp" className="w-full h-full object-cover rounded-[10px]"/>
          <div className="text-center mt-[40px]">
            <div className="text-[22px] font-bold">MIFFY</div>
            <div className="flex items-center text-[14px] gap-[8px] justify-center">
              <div>15 sản phẩm</div>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  mx: "10px",
                  height: "15px",
                  alignSelf: "center",
                  display: "block",
                }}
              />
              <div>1.7K lượt mua</div>
            </div>
          </div>
          <div className={`text-[14px] prose prose-h2:mt-0 leading-[1.5715] max-w-[998px] w-[90%] mx-auto relative ${expanded ? 'max-h-[2000px]' : 'max-h-[50px]'} overflow-hidden`}>
            <p>Miffy kỷ niệm 70 năm ra đời, với hình ảnh hiền lành, dễ thương và luôn lan tỏa niềm vui. Beauty Box mong bạn kết nối cùng Miffy qua những sản phẩm đáng yêu, mang lại trải nghiệm ngọt ngào và gần gũi mỗi ngày. Hãy để Miffy làm bạn đồng hành trong cuộc sống của bạn.</p>
            <h2>Sản phẩm nổi bật</h2>
            <p>MINI BAG KEYCHAIN BLINDBOX – móc khóa bí ẩn ra mắt năm 2025, mang đến trải nghiệm mở hộp đầy thú vị với 6 phiên bản độc đáo cùng 1 phiên bản secret hiếm có.</p>
            <h2>Ưu điểm</h2>
            <ul>
              <li>Bất ngờ thú vị: Mở hộp và khám phá phiên bản Miffy khác biệt</li>
              <li>Dễ thương, phong cách: Móc khóa xinh xắn, tô điểm cho túi xách, balo hay chìa khóa.</li>
              <li>Quà tặng ý nghĩa: Hoàn hảo cho fan Miffy và những ai yêu thích đồ sưu tập.</li>
            </ul>
            <h2>Đối tượng sử dụng</h2>
            <ul>
              <li>Chất liệu an toàn phù hợp với tất cả độ tuổi.</li>
              <li>Những sản phẩm móc khóa vì có móc kim loại phù hợp từ 3+</li>
              <li>Đồ chơi nhồi bông từ 0+</li>
            </ul>
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>
          <div onClick={handleClickExpanded} className="text-black mt-[20px] font-bold text-[14px] inline-block cursor-pointer trasition-all duration-300 hover:underline px-[15px] py-[8px] w-full text-center">
            {expanded ? 'ẨN BỚT NỘI DUNG' : 'XEM THÊM NỘI DUNG'}
          </div>
        </div>
        <ProductPage />
      </div>
    );
  };

  export default CollectionPage;