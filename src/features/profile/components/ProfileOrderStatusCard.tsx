import Divider from "@mui/material/Divider";
import type { Dispatch, SetStateAction } from "react";

interface ProfileOrderStatusCardProps {
    date: string;
    id: string;
    method: string;
    quantity: number;
    total: string;
    address: string;
    status: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>
};

const ProfileOrderStatusCard = ({ date, id, method, quantity, total, address, status, setIsOpen } : ProfileOrderStatusCardProps) => {
    return (
        <div className="border-1 border-[#efefef] rounded-[5px] px-[20px] py-[15px] text-[14px] leading-[1.5715] mt-[20px]">
            <div className="flex items-center gap-[20px]">
                <div>{date}</div>
                <div className="text-[10px]">|</div>
                <div className="flex items-center gap-[10px]">
                    <div>Mã đơn hàng:</div>
                    <div>{id}</div>
                </div>
            </div>
            <div className="flex items-center gap-[20px] text-[14px] leading-[1.5715] mt-[5px]">
                <div className="flex items-center font-bold gap-[10px]">
                    <div>Hình thức:</div>
                    <div>{method}</div>
                </div>
                <div>
                    {quantity} Sản phẩm ({total})
                </div>
            </div>
            <div className="flex items-center mt-[10px] gap-[10px] text-[14px] leading-[1.5715]">
                <div>Giao đến:</div>
                <div>{address}</div>
            </div>
            <Divider sx={{ marginY: '15px' }} />
            <div className="flex items-center justify-between flex-wrap gap-y-3">
                <div className="flex items-center gap-[10px] font-bold text-[14px] leading-[1.5715]">
                    <div>Tình trạng:</div>
                    <div>{status}</div>
                </div>
                <div className='flex items-center gap-[8px] ml-auto'>
                    <div onClick={() => setIsOpen(true)} className='rounded-[38px] font-bold border-black border-1 py-[8px] px-[15px] text-[14px] cursor-pointer [@media(max-width:906px)]:mt-[15px]'>
                        Hủy
                    </div>
                    <div className='rounded-[38px] font-bold border-black border-1 py-[8px] px-[15px] text-[14px] cursor-pointer [@media(max-width:906px)]:mt-[15px]'>
                        Xem chi tiết
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileOrderStatusCard;