import SearchIcon from '@mui/icons-material/Search';

interface SearchProductProps {
  isMobile?: boolean
}

const SearchProduct = ({ isMobile = false } : SearchProductProps) => {
  return (
    <div className={`relative w-full xl:max-w-sm lg:max-w-2xs md:max-w-2xs sm:max-w-full ${isMobile ? '' : 'pl-3'} flex items-center ${isMobile ? 'md:hidden sm:block' : 'block max-md:hidden'}`}>
        <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${isMobile ? '' : 'pl-2'}`}>
            <SearchIcon/>
        </div>  
        <input type="text" id={`${isMobile ? "search_mobile" : "search"}`} name='search' placeholder='Mua 1 Tặng 1 Kem Chống Nắng' className='w-full rounded-full border border-gray-300 text-sm focus:outline-none pr-10 pl-10 py-2'/>
    </div>
  )
}

export default SearchProduct