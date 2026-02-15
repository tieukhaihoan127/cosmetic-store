import Divider from "@mui/material/Divider";
import logo1 from "../../../assets/images/logo1.webp";

const FooterClient = () => {
  return (
    <div className="text-center mt-[60px] max-w-[90%] mx-auto ">
      <div className="flex justify-between items-center px-[100px] max-md:px-[40px] max-sm:px-[20px] py-[24px] bg-[var(--pink-pearl)] rounded-2xl mb-[56px] flex-wrap max-[1199px]:justify-center">
        <div className="text-start max-[1179px]:text-center">
          <div className="text-[25px] max-sm:text-[18px] leading-9 font-bold text-white mb-1">
            NHẬN BẢN TIN LÀM ĐẸP
          </div>
          <div className="text-[15px] max-sm:text-[12px] leading-5 text-white">
            Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn
          </div>
        </div>
        <div className="flex items-center w-full max-w-[400px] max-sm:max-w-[350px] max-[1199px]:justify-center max-[1199px]:mt-[24px]">
          <input
            type="text"
            placeholder="Điền email của bạn"
            className="bg-white focus:outline-none text-black flex-1 px-[20px] py-[11.5px] max-sm:py-[10px] rounded-l-[42px] text-[14px] min-w-0"
          />
          <button className="bg-white px-[20px] py-[10px] rounded-r-[42px] cursor-pointer font-semibold text-[16px] max-sm:text-[14px] whitespace-nowrap">
            THEO DÕI
          </button>
        </div>
        {/* <div className="flex items-center max-[1199px]:mt-[24px]">
          <input type="text" placeholder="Điền email của bạn" className="bg-white focus:outline-none text-black min-w-[300px] px-[20px] py-[11.5px] max-sm:py-[10px] max-sm:min-w-[250px] rounded-l-[42px] text-[14px]" />
          <button className="bg-white px-[20px] py-[10px] rounded-r-[42px] cursor-pointer font-semibold text-[16px] max-sm:text-[14px]  max-[459px]:pl-0">
            THEO DÕI
          </button>
        </div> */}
      </div>
      <div className="grid grid-cols-5 max-md:grid-cols-2 mb-[60px] flex-wrap">
        <div>
          <img src={logo1} alt="" className="max-w-[75%] max-sm:max-w-[60%]" />
          <div className="flex items-center mt-[30px] gap-[17px]">
            <img src="https://image.hsv-tech.io/24x0/bbx/common/d41b06c0-5ef5-46f4-ac1d-41aa955b23fb.webp" alt="" />
            <img src="https://image.hsv-tech.io/24x0/bbx/common/d9884d82-b389-4c6f-beaa-429c032cb2c0.webp" alt="" />
            <img src="https://image.hsv-tech.io/24x0/bbx/common/d507bd2a-5d6b-4ebd-823e-bdeb742a6ecd.webp" alt="" />
          </div>
          <img src="https://beautybox.com.vn/images/verified.png" alt="" className="h-[46px] mt-[30px]" />
        </div>
        <div className="md:hidden"></div>
        <div className="text-start text-[14px] px-[15px] max-md:px-0 max-md:mt-10">
          <div className="font-semibold">VỀ BEAUTY BOX</div>
          <div className="flex flex-col gap-[12px] mt-[15px]">
            <div>Câu chuyện thương hiệu</div>
            <div>Về chúng tôi</div>
            <div>Liên hệ</div>
          </div>
        </div>
        <div className="text-start text-[14px] px-[15px] max-md:px-0 max-md:mt-10">
          <div className="font-semibold">CHÍNH SÁCH</div>
          <div className="flex flex-col gap-[12px] mt-[15px]">
            <div>Chính sách và quy định chung</div>
            <div>Chính sách và giao nhận thanh toán</div>
            <div>Chính sách đổi sản phẩm</div>
            <div>Chính sách bảo mật thông tin cá nhân</div>
            <div>Điều khoản sử dụng</div>
          </div>
        </div>
        <div className="text-start text-[14px] px-[15px] max-md:px-0 max-md:mt-10">
          <div className="font-semibold">MY BEAUTY BOX</div>
          <div className="flex flex-col gap-[12px] mt-[15px]">
            <div>Quyền lợi thành viên</div>
            <div>Thông tin thành viên</div>
            <div>Theo dõi đơn hàng</div>
            <div>Hướng dẫn mua hàng online</div>
          </div>
        </div>
        <div className="text-start text-[14px] px-[15px] max-md:px-0 max-md:mt-10">
          <div className="font-semibold">ĐỐI TÁC - LIÊN KẾT</div>
          <div className="mt-[15px]">THE FACE SHOP Vietnam</div>
        </div>
      </div>
      <Divider />
      <div className="grid grid-cols-2 mt-[35px] items-center mb-[40px] max-md:grid-cols-1">
        <div className="text-start text-[14px]">®beautybox.com.vn thuộc quyền sở hữu của Công ty CP TMDV Tổng Hợp Hoàn Vũ GPKD số 0309802418 cấp ngày 11/02/2010 tại Sở Kế hoạch & Đầu tư TP HCM | VP Miền Nam Lầu 1, G Tower 3 - 196A, Nguyễn Văn Hưởng, Phường Thảo Điền, Thành Phố Thủ Đức, TP.HCM--- Chi nhánh Công ty CP TMDV Tổng Hợp Hoàn Vũ tại Hà Nội GPKD chi nhánh số 0309802418-004 cấp ngày 22/11/2017 | Tầng 4 tháp 2, Times Tower, 35 Lê Văn Lương, Phường Nhân Chính, Q. Thanh Xuân, TP.Hà Nội, Việt Nam.</div>
        <div className="flex justify-end max-md:justify-start max-md:mt-5">
          <div className="flex flex-col">
            <div className="text-start text-[14px] font-semibold">PHƯƠNG THỨC THANH TOÁN</div>
            <div className="flex items-center gap-[15px] mt-[10px] flex-wrap">
              <img src="https://image.hsv-tech.io/0x24/bbx/common/06414657-24ed-4da4-8a54-f207d45ab1be.webp" alt="" />
              <img src="https://image.hsv-tech.io/0x24/bbx/common/afebded0-f4e7-4c5f-aee3-aa01271174c3.webp" alt="" />
              <img src="https://image.hsv-tech.io/0x24/bbx/common/64102078-db30-4f18-a473-2582467505fd.webp" alt="" />
              <img src="https://image.hsv-tech.io/0x24/bbx/common/a19ac3f9-5d5e-43c3-aa84-49576cad1102.webp" alt="" />
              <img src="https://image.hsv-tech.io/0x24/bbx/common/3e4a7882-d755-4110-83b5-6496bf5e689c.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterClient