import useLocationDialog from '../../../shared/hooks/useLocationDialog';

const StoreCard = () => {

    const { handleOpenShowroomDialog, handleOpenTimeDialog } = useLocationDialog();

    return (
        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
            <div className="flex items-center justify-between mb-1">
                <div>Hồ Chí Minh</div>
            </div>
            <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
            <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
            <div className="underline">18002004</div>
            <div className="flex items-center mt-[10px] underline gap-[10px]">
                <div onClick={handleOpenShowroomDialog}>Xem showroom</div>
                <div onClick={handleOpenTimeDialog}>Giờ mở cửa</div>
                <div>Chi tiết</div>
            </div>
        </div>
    );
};

export default StoreCard;