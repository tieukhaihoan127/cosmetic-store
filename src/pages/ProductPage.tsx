import Fab from "@mui/material/Fab"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CollectionBreadcrumb from "../components/common/Breadcrumb/CollectionBreadcrumb"
import HeadFilter from "../components/common/Filter/HeadFilter"
import SidebarFilter from "../components/common/Filter/SidebarFilter"
import ProductList from "../components/common/List/ProductList"
import ProductPagination from "../components/common/Pagination/ProductPagination"
import FilterMenuDrawer from "../components/common/Drawer/FilterMenuDrawer";
import { useAppDispatch } from "../store/hooks";
import { openDrawer } from "../store/slices/clickFilterFloatingButton";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductPage = () => {
  const dispatch = useAppDispatch();

  const isMaxMd = useMediaQuery("(max-width: 768px)");

  return (
    <div className="w-[90%] mx-auto">
      <CollectionBreadcrumb mainCategory="Trang chủ" subCategory="Trang điểm" categoryName="Trang điểm" />
      <HeadFilter />
      <div className="grid grid-cols-12 [@media(max-width:768px)]:block">
        <div className="col-span-3 [@media(max-width:991px)]:col-span-4 [@media(max-width:768px)]:hidden">
          <SidebarFilter />
        </div>
        <div className="col-span-9 [@media(max-width:991px)]:col-span-8">
          <ProductList />
          <ProductPagination />
        </div>
      </div>
      {isMaxMd &&
        <>
          <Fab
            variant="extended"
            disableRipple
            sx={{
              position: "fixed",
              bottom: 30,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1000,
              bgcolor: "black",
              color: "white",
              paddingX: 2,
              paddingY: 0.8,
              "&:hover": {
                bgcolor: 'black',
              }
            }}
            onClick={() => dispatch(openDrawer())}
          >
            <FilterAltOutlinedIcon sx={{ mr: 1, fontSize: '25px' }} />
            <div className="text-[14px] mr-[8px]">
              Bộ lọc
            </div>
          </Fab>
          <FilterMenuDrawer />
        </>
      }
    </div>
  )
}

export default ProductPage