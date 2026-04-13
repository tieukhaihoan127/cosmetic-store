import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Barcode from 'react-barcode';
import { Outlet } from 'react-router-dom';

const ProfileLayout = () => {
    return (
        <div className='max-w-[1024px] mx-auto grid grid-cols-12 mt-[20px]'>
            <div className='pr-[25px] pl-[20px] col-span-4'>
                <div className="rounded-[10px] border-[#dfdfdf] shadow-[0px_0px_10px_rgba(57,105,179,0.25)] pb-[20px]">
                    <div className="flex items-center gap-[10px] text-left p-[15px]">
                        <AccountCircleOutlinedIcon sx={{ fontSize: '55px' }} />
                        <div className='text-[16px] text-black leading-[18px] font-bold break-all'>
                            Hoan Tieu
                        </div>
                    </div>
                    <div className='mt-[10px] px-[20px]'>
                        <div className='flex items-center justify-center'>
                            <Barcode
                                value="1775997334444"
                                format="CODE128"
                                width={1.3}
                                height={45}
                                displayValue={false}
                                margin={0}
                            />
                        </div>
                        <div className='flex items-center justify-between text-[12px] leading-1.5715 mt-[10px]'>
                            <div className='font-bold'>SĐT tích điểm</div>
                            <div>84704582784</div>
                        </div>
                    </div>
                    <div className='mt-[15px] rounded-[10px] px-[20px]'>
                        <div className='p-[10px] bg-[linear-gradient(90deg,rgb(240,201,141)_0%,rgb(160,123,89)_50.52%,rgb(72,53,38)_99.61%)] rounded-t-[10px]'>
                            <div className='flex items-center text-[14px] leading-[1.5715] text-white mb-[10px]'>
                                <div className='font-bold'>BRONZE</div>
                                <div className='mx-[10px] text-[12px]'>|</div>
                                <div>0 HSVPoint</div>
                            </div>
                            <div className="relative flex items-center h-[5px] rounded-full bg-[linear-gradient(90deg,#EBD1A9_0%,#8D7D6F_100%)]">
                                <div className="absolute right-0 p-[3px] rounded-full bg-[#86786D] flex items-center justify-center">
                                    <DiamondOutlinedIcon sx={{ color: 'white', fontSize: '16px' }} />
                                </div>
                            </div>
                            <div className='text-[12px] leading-1.5715 text-white mt-[15px] pb-[10px]'>
                                Nhận thêm <span className='font-bold'>100 điểm</span> nữa để nâng hạng lên SILVER
                            </div>
                        </div>
                        <div className='group opacity-100 p-[10px] bg-[linear-gradient(90deg,rgb(240,201,141)_-16.67%,rgb(160,123,89)_44.84%,rgb(72,53,38)_104.6%)] flex items-center justify-between z-10 cursor-pointer rounded-b-[10px]'>
                            <div className='text-white text-[14px] leading-[1.5715] opacity-50 group-hover:opacity-100 group-hover:font-semibold transition-all ease-in-out duration-300'>
                                Xem tất cả quyền lợi
                            </div>
                            <div className='rounded-full bg-white opacity-50 flex items-center justify-center group-hover:opacity-100 transition-all ease-in-out duration-500'>
                                <ChevronRightOutlinedIcon sx={{ color: 'black', fontSize: '18px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[20px]'>
                    <div className='py-[8px] pl-[10px] pr-[24px] text-[16px] font-semibold'>
                        Tài khoản
                    </div>
                    <div className='py-[8px] pl-[10px] pr-[24px] text-[16px]'>
                        Đơn hàng
                    </div>
                    <div className='py-[8px] pl-[10px] pr-[24px] text-[16px]'>
                        Địa chỉ giao nhận
                    </div>
                    <div className='py-[8px] pl-[10px] pr-[24px] text-[16px]'>
                        Ưu đãi của tôi
                    </div>
                    <div className='py-[8px] pl-[10px] pr-[24px] text-[16px]'>
                        Câu hỏi của tôi
                    </div>
                    <div className='py-[8px] pl-[10px] pr-[24px] text-[16px]'>
                        Sự kiện của tôi
                    </div>  
                </div>
            </div>
            <div className='col-span-8'>
                <Outlet />
            </div>
        </div>
    )
}

export default ProfileLayout