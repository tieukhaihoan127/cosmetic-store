import FlashOnIcon from '@mui/icons-material/FlashOn';

const FlashSaleBanner = () => {
    return (
        <div className="py-[8px] px-[15px] mt-[15px] mb-[20px] rounded-[10px] flex items-center justify-between" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
            <div className="flex items-center min-w-0 flex-1 mr-[10px]">
                <span>
                    <FlashOnIcon sx={{ fontSize: '30px', color: 'white' }} />
                </span>
                <span className="italic  text-white font-bold truncate min-w-0">
                    SIÊU DEAL CHỚP NHOÁNG | ĐỘC QUYỀN ONLINE
                </span>
            </div>
            <div className="flex items-center">
                <div className="text-[14px] bg-white ml-[7px] w-[35px] h-[35px] rounded-[5px] flex items-center justify-center font-bold">00</div>
                <span className="ml-[8px] text-white">:</span>
                <div className="text-[14px] bg-white ml-[7px] w-[35px] h-[35px] rounded-[5px] flex items-center justify-center font-bold">00</div>
                <span className="ml-[8px] text-white">:</span>
                <div className="text-[14px] bg-white ml-[7px] w-[35px] h-[35px] rounded-[5px] flex items-center justify-center font-bold">22</div>
                <span className="ml-[8px] text-white">:</span>
                <div className="text-[14px] bg-white ml-[7px] w-[35px] h-[35px] rounded-[5px] flex items-center justify-center font-bold">40</div>
            </div>
        </div>
    );
};

export default FlashSaleBanner;