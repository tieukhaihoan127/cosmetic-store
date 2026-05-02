import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ClearIcon from '@mui/icons-material/Clear';
import { useAppDispatch, useAppSelector } from "../../../shared/store/hook";
import { closeFloatingDrawer } from "../store/filter.slice";
import FilterAccordion from "./FilterAccordion";
import FilterAccordionWithSearchBar from "./FilterAccordion";



const FilterMenuDrawer = () => {

  const dispatch = useAppDispatch();

  const filterMenu = useAppSelector((state) => state.filterDrawer.isOpenFloatingDrawer);

  return (
    <Drawer
      anchor={"bottom"}
      open={filterMenu}
      onClose={() => dispatch(closeFloatingDrawer())}
      sx={{
        "& .MuiDrawer-paper": {
          height: "80vh",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }
      }}
    >
      <Box
        sx={{ width: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}
        role="presentation"
      >
        <div className="flex items-center justify-between px-[24px] py-[16px]">
          <div></div>
          <div className="font-bold">Bộ lọc</div>
          <div onClick={() => dispatch(closeFloatingDrawer())} className="cursor-pointer">
            <ClearIcon sx={{ fontSize: '20px' }} />
          </div>
        </div>
        <Divider />
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          <div>
            <div className="pl-[16px]">
              <FilterAccordion />
            </div>
            <Divider />
          </div>
          <div>
            <div className="pl-[16px]">
              <FilterAccordionWithSearchBar />
            </div>
            <Divider />
          </div>
          <div>
            <div className="pl-[16px]">
              <FilterAccordionWithSearchBar />
            </div>
            <Divider />
          </div>
          <div>
            <div className="pl-[16px]">
              <FilterAccordionWithSearchBar />
            </div>
            <Divider />
          </div>
          <div>
            <div className="pl-[16px]">
              <FilterAccordionWithSearchBar />
            </div>
            <Divider />
          </div>
        </div>
        <Divider />
        <div className="flex justify-between items-center px-[16px] py-[10px] ">
          <div className="text-[14px] px-[15px] py-[8px] text-[#3695ed] cursor-pointer">Xóa tất cả</div>
          <div className="rounded-[38px] px-[46px] py-[13px] bg-black text-white text-[14px] font-semibold cursor-pointer">Áp dụng</div>
        </div>
      </Box>
    </Drawer>
  );
};

export default FilterMenuDrawer;