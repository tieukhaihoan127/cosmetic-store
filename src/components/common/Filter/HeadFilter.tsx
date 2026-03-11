import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useState } from "react"
import CategoryChips from "./CategoryChips";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppDispatch } from "../../../store/hooks";
import { openDrawer } from "../../../store/slices/clickFilterButtonSlice";
import FilterCommonDrawer from "../Drawer/FilterCommonDrawer";

const HeadFilter = () => {

  const FILTER_OPTIONS = [
    "Tất cả",
    "Giá tăng dần",
    "Giá giảm dần",
    "% giảm"
  ]

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedFilter, setSelectedFilter] = useState(FILTER_OPTIONS[0]);
  
  const dispatch = useAppDispatch();

  const isMaxMd = useMediaQuery("(max-width: 768px)");

  const open = Boolean(anchorEl) && !isMaxMd;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isMaxMd) {
      dispatch(openDrawer());
    }
    else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: string) => {
    setSelectedFilter(value);
    handleClose();
  };

  return (
    <div className="grid grid-cols-12 items-end mt-[35px] [@media(max-width:768px)]:block pb-[20px]">
      <div className="col-span-3 text-[18px] font-bold mb-[15px] [@media(max-width:991px)]:hidden">BỘ LỌC</div>
      <div className="col-span-4 [@media(max-width:991px)]:col-span-6">
        <div className="flex flex-wrap items-center">
          <CategoryChips categoryName="Bông cotton" />
          <CategoryChips categoryName="Che khuyết điểm" />
          <CategoryChips categoryName="Chì kẻ mắt" />
          <CategoryChips categoryName="Chì kẻ mày" />
          <CategoryChips categoryName="Cọ trang điểm" />
          <CategoryChips categoryName="Dưỡng môi" />
          <CategoryChips categoryName="ELC" />
          <CategoryChips categoryName="Highlighter" />
          <CategoryChips categoryName="Kẻ mắt nước" />
          <CategoryChips categoryName="Kem lót" />
          <div className="text-[14px] mb-[15px] px-[15px] py-[8px] underline cursor-pointer">Xóa tất cả</div>
        </div>
      </div>
      <div className="col-span-5 flex items-center justify-end gap-[10px] mb-[15px] [@media(max-width:991px)]:col-span-6">
        <div className="text-[14px]">
          784 Kết quả
        </div>
        <div className="text-[14px]">Lọc theo</div>
        <div>
          <Button
            id="filter-button"
            aria-controls={open ? 'filter-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            disableRipple
            sx={{
              all: "unset",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "700",
              alignItems: "center",
            }}
          >
            {selectedFilter}
            <ExpandMoreIcon sx={{ fontSize: "20px", marginLeft: "5px" }} />
          </Button>
          <Menu
            id="filter-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            slotProps={{
              paper: {
                sx: {
                  width: "160px",
                  minWidth: "740x",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                  marginTop: "15px"
                },
              },
              list: {
                "aria-labelledby": "filter-button",
              }
            }}
          >
            {FILTER_OPTIONS.map((option) => (
              <MenuItem key={option} onClick={() => handleSelect(option)} disableRipple sx={{
                "&:hover": {
                  transition: "all 0.3s ease",
                  backgroundColor: "var(--pink-pearl)",
                  color: "white",
                },
                backgroundColor: selectedFilter === option ? "var(--pink-pearl)" : "transparent",
                color: selectedFilter === option ? "white" : "inherit",
                paddingX: "12px",
                paddingY: "5px",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "22px"
              }}>
                {option}
              </MenuItem>
            ))}
          </Menu>
          <FilterCommonDrawer />
        </div>
      </div>
    </div>
  )
}

export default HeadFilter