import React from 'react'
import { Link } from 'react-router-dom'

const ProfileQuestionDetailPage = () => {
    return (
        <div>
            <div className="flex items-center text-[#797979] gap-2 leading-relaxed [@media(max-width:792px)]:hidden">
                <Link to="/" className="text-[12px]">
                    Trang chủ
                </Link>
                <div className="text-[14px]">{">"}</div>
                <Link to="/" className="text-[12px]">
                    Câu hỏi của tôi
                </Link>
            </div>
            <div className='mb-[15px] text-[24px] font-bold leading[[1.5715] mt-[15px]'>
                Câu hỏi của tôi
            </div>
            <div className='mb-[15px] font-bold'>
                Thông tin sản phẩm
            </div>
            <div className='bg-[#efefef] rounded-[10px] p-[20px] flex items-center'>
                <img src="https://image.hsv-tech.io/100x100/bbx/common/53dd920f-cd75-45b8-bdd5-fd311def024c.webp" alt="" className='h-[50px] w-[50px] rounded-[5px]' />
                <div className='ml-[20px]'>
                    Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g
                </div>
            </div>
            <div className='my-[15px] flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className='text-[14px] leading-[1.5715] font-bold'>
                        Câu hỏi của tôi
                    </div>
                    <div className="text-[14px] mx-[8px]">{">"}</div>
                    <div className='text-[14px] leading-[1.5715]'>
                        ID 197
                    </div>
                </div>
                <div className='border-1 border-black rounded-[38px] px-[15px] py-[8px] text-[14px] leading-[1.5715] cursor-pointer'>
                    Trở về câu hỏi gốc
                </div>
            </div>
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
        </div>
    )
}

export default ProfileQuestionDetailPage