import { Link } from "react-router-dom"
import BrandCarousel from "../../features/brand/components/BrandCarousel"


const BrandPage = () => {

  const brands = [
    {
      letter: "A",
      items: [
        "ACNES",
        "A'DDICT",
        "AESTURIA",
        "AHC",
        "ALBA",
        "ALTRUIST",
        "AMUSE",
        "ANESSA",
        "AROMATICA",
        "ARTDECO",
        "ASEPSO",
        "ASTALIFT",
        "AVENE",
        "AXE",
        "AZZARO"
      ]
    },
    {
      letter: "F",
      items:[
        "F.O.X",
        "FAROSON",
        "FELINA",
        "FEMFRESH",
        "FINO",
        "FLAWSOME",
        "FREEPLUS",
        "FRESHIAN",
        "FRUDIA"
      ]
    },
    {
      letter: "H",
      items:[
        "HADALABO",
        "HAIRBURST",
        "HALIO",
        "HAPPYSKIN",
        "HASI",
        "HATOMUGI",
        "HEAD & SHOULDERS",
        "HOLIKEY",
        "HUGO BOSS"
      ]
    }
  ];

  return (
    <div>
      <BrandCarousel />
      <div className="text-center font-bold mt-3 text-[22px] mb-[30px]">TẤT CẢ THƯƠNG HIỆU</div>
      <div className="w-[90%] mx-auto">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 font-semibold text-[17px]">
          <Link to='/a'>A</Link>
          <Link to='/a'>B</Link>
          <Link to='/a'>C</Link>
          <Link to='/a'>D</Link>
          <Link to='/a'>E</Link>
          <Link to='/a'>F</Link>
          <Link to='/a'>G</Link>
          <Link to='/a'>H</Link>
          <Link to='/a'>I</Link>
          <Link to='/a'>J</Link>
          <Link to='/a'>K</Link>
          <Link to='/a'>L</Link>
          <Link to='/a'>M</Link>
          <Link to='/a'>N</Link>
          <Link to='/a'>O</Link>
          <Link to='/a'>P</Link>
          <Link to='/a'>Q</Link>
          <Link to='/a'>R</Link>
          <Link to='/a'>S</Link>
          <Link to='/a'>T</Link>
          <Link to='/a'>U</Link>
          <Link to='/a'>V</Link>
          <Link to='/a'>W</Link>
          <Link to='/a'>X</Link>
          <Link to='/a'>Y</Link>
          <Link to='/a'>Z </Link>
          <Link to='/a'>#</Link>
        </div>
        {brands.map((brand, index) => (
          <div className="flex py-[40px] border-b-1 border-[#EFEFEF] max-md:flex-col" key={`${brand}_${index}`}>
          <div className="w-[20%] pr-[15px] text-[25px] font-bold leading-[18px]">{brand.letter}</div>
          <div className="w-[80%] grid lg:grid-cols-4 grid-cols-3 gap-[20px] max-md:grid-cols-1 max-md:mt-[30px] max-md:text-[14px]">
            {brand.items.map((item) => (
              <Link to='/a' key={item}>
                {item}
              </Link>
            ))}
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;