import HelpIcon from '@mui/icons-material/Help';

const FundinBanner = () => {
    return (
        <div className="flex items-center justify-between rounded-[10px] border-1 px-[20px] py-[10px] mt-[10px] border-[#efefef]">
            <div >
                <b className="font-semibold text-[14px] mr-[5px]">Từ</b>
                <span className="text-[18px] text-[#0045ca] font-bold">96.333đ</span>
            </div>
            <div className="flex items-center">
                <div className="flex items-center gap-[6px]">
                    <div className="text-[14px] text-[#777777]">với</div>
                    <img src="https://image.hsv-tech.io/400x0/bbx/common/3a4054ce-a218-4fbb-bfab-944b6c226ff7.webp" alt="" className="max-w-[100%] h-[11px]" />
                    <HelpIcon sx={{ fontSize: '12px', color: '#777777' }} />
                </div>
                <div className="ml-[20px] bg-[#0045ca] rounded-[6px] text-white text-[10px] px-[10px] py-[5px]">
                    Giảm 70K (*)
                </div>
            </div>
        </div>
    );
};

export default FundinBanner;