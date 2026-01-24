import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const HeaderMenuHover = () => {
  const brands = [
    "AHC",
    "CLIO",
    "GOODAL",
    "PERIPERA",
    "DERMATORY",
    "DEAR DAHLIA",
    "BANILA CO",
    "AMUSE",
    "THE FACE SHOP",
    "COSRX",
    "KLAVUU",
    "COCOON",
    "LA ROCHE POSAY",
    "CNP"
  ];

  return (
    <div
      className="w-full h-[290%] bg-white shadow-lg absolute left-0 top-37 z-[9999] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      onMouseEnter={(e) => e.stopPropagation()}
    >
      <div className="flex max-w-[92%] mx-auto">
        {/* Left */}
        <div className="w-1/3 pt-6 px-4">
          <Link to={"/"} className='flex items-center justify-between mb-6 '>
            <h3 className="text-md font-semibold text-gray-800">
              TẤT CẢ THƯƠNG HIỆU
            </h3>
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: 16 }}/>
          </Link>
          <Divider sx={{ mb: "20px" }} />
          <ul className="space-y-2">
            {brands.map((brand) => (
              <li key={`${brand}_1`} className='mb-4'>
                <Link
                  to={"/"}
                  className="block text-[var(--text_primary)] hover:text-[var(--muted-pink)] transition"
                >
                  {brand}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="flex-1 grid grid-cols-3 gap-4 pt-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-sm"
            >
              <Link to="/" className='block overflow-hidden rounded-sm'>
                <img
                  src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                  alt={`banner-${i}`}
                  className='w-full 2xl:h-[480px] xl:h-[440px] lg:h-[390px] [@media(max-width:1145px)]:h-[300px] [@media(max-width:900px)]:h-[280px] object-cover'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuHover;
