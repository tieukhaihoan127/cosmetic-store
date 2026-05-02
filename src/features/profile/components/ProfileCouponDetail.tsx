import Dialog from '@mui/material/Dialog';
import { QRCodeSVG } from 'qrcode.react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import type { Dispatch, SetStateAction } from 'react';

interface ProfileCouponDetailProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
};

const ProfileCouponDetail = ({ isOpen, setIsOpen } : ProfileCouponDetailProps) => {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            maxWidth="sm"
            fullWidth
            slotProps={{
                paper: {
                    sx: {
                        overflow: 'visible', '@media (max-width: 576px)': {
                            width: '100%',
                            maxWidth: '100% !important',
                            marginX: '25px',
                        },
                    }
                }
            }}
            sx={{
                borderBottomColor: '10px'
            }}
        >
            <div onClick={() => setIsOpen(false)} className='absolute -right-[20px] -top-[20px] z-999 h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center cursor-pointer'>
                <CloseOutlinedIcon sx={{ fontSize: '18px' }} />
            </div>
            <div className='bg-[#94c83d] p-[30px] relative'>
                <div className='flex relative voucher-notch'>
                    <div className='p-[15px] bg-white flex flex-col items-center'>
                        <QRCodeSVG value='26APR40' size={100} bgColor='#ffffff' fgColor='#000000' level='H' />
                        <div className='bg-[#f6f6f6] rounded-[18px] mt-[10px] text-center px-[20px] py-[5px] text-[14px]'>
                            26APR40
                        </div>
                    </div>
                    <div className='p-[20px] bg-[#efefef] rounded-r-[5px] flex flex-col justify-center'>
                        <div className='leading-[30px] break-words mb-[10px] text-[26px] font-bold'>
                            26APR40 - Voucher 5% đơn 599k cap 40k
                        </div>
                        <div className='text-[14px] leading-[1.5715]'>
                            Tất cả hình thức thanh toán
                        </div>
                        <div className='font-bold text-[14px] leading-[1.5715] break-words mt-1'>
                            5% (tối đa 40.000đ)
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-[30px] '>
                <div>
                    <div className='text-[14px] font-bold'>Thanh toán</div>
                    <div className='text-[14px] text-[#777777] mt-0.5'>
                        Áp dụng cho toàn bộ sản phẩm
                    </div>
                </div>
                <div className='mt-[30px]'>
                    <div className='text-[14px] font-bold'>Có hiệu lực</div>
                    <div className='text-[14px] text-[#777777] mt-0.5'>
                        03/04/2026 - 30/04/2026
                    </div>
                </div>
                <div className='mt-[30px]'>
                    <div className='text-[14px] font-bold'>Thanh toán</div>
                    <div className='text-[14px] text-[#777777] mt-0.5'>
                        Tất cả hình thức thanh toán
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ProfileCouponDetail;