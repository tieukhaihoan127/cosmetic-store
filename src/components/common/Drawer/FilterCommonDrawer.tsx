import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ClearIcon from '@mui/icons-material/Clear';
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { closeDrawer } from "../../../store/slices/clickFilterButtonSlice";

const FilterCommonDrawer = () => {
  
  const dispatch = useAppDispatch();
  
  const filterMenu = useAppSelector((state) => state.filterDrawer);

  return (
    <Drawer
            anchor={"bottom"}
            open={filterMenu.isOpen}
            onClose={() => dispatch(closeDrawer())}
            sx={{
              "& .MuiDrawer-paper": {
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }
            }}
          >
            <Box
              sx={{ width: 'auto' }}
              role="presentation"
            >
              <div className="flex items-center justify-between px-[24px] py-[16px]">
                <div></div>
                <div className="font-bold">Sắp xếp</div>
                <div onClick={() => dispatch(closeDrawer())} className="cursor-pointer">
                  <ClearIcon sx={{ fontSize: '20px' }} />
                </div>
              </div>
              <Divider />
              <RadioGroup
                aria-labelledby="filter-radio-group-label"
                defaultValue="all"
                name="radio-buttons-group"
                sx={{ px: "16px", py: "8px" }}
              >
                <FormControlLabel value="all" control={<Radio disableRipple sx={{ '& .MuiSvgIcon-root': { fontSize: 20, color: '#bf585b' }, '& .MuiTouchRipple-root': { display: 'none' } }} />} label="Tất cả" sx={{ "& .MuiFormControlLabel-label": { fontSize: "16px" } }}/>
                <FormControlLabel value="price-asc" control={<Radio disableRipple sx={{ '& .MuiSvgIcon-root': { fontSize: 20, color: '#bf585b' }, '& .MuiTouchRipple-root': { display: 'none' } }} />} label="Giá tăng dần" sx={{ "& .MuiFormControlLabel-label": { fontSize: "16px" } }}/>
                <FormControlLabel value="price-desc" control={<Radio disableRipple sx={{ '& .MuiSvgIcon-root': { fontSize: 20, color: '#bf585b' }, '& .MuiTouchRipple-root': { display: 'none' } }} />} label="Giá giảm dần" sx={{ "& .MuiFormControlLabel-label": { fontSize: "16px" } }}/>
                <FormControlLabel value="price-percent" control={<Radio disableRipple sx={{ '& .MuiSvgIcon-root': { fontSize: 20, color: '#bf585b' }, '& .MuiTouchRipple-root': { display: 'none' } }} />} label="% giảm" sx={{ "& .MuiFormControlLabel-label": { fontSize: "16px" } }}/>
              </RadioGroup>
            </Box>
          </Drawer>
  )
}

export default FilterCommonDrawer