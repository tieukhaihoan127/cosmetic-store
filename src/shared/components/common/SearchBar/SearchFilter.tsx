import SearchIcon from '@mui/icons-material/Search';

const SearchFilter = () => {
    return (
        <div className="relative mt-[12px] mb-[15px] w-[98%]">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <SearchIcon sx={{ color: "BFBFBF",  fontSize: "18px"}}/>
            </span>
            <input
                type="text"
                placeholder="Tìm"
                className="w-full text-[12px] pr-[11px] pl-[40px] py-[10.5px] border border-gray-300 hover:border-[#bf585b] rounded-[5px] h-[35px] focus:outline-none focus:shadow-[0_0_0_2px_rgb(234,199,200)] transition-all duration-200 ease-in-out whitespace-nowrap overflow-x-auto"
            />
        </div>
    );
};

export default SearchFilter;