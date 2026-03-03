import ClearIcon from '@mui/icons-material/Clear';

const CategoryChips = ({ categoryName }: { categoryName: string }) => {
  return (
    <div className="flex items-center cursor-pointer border rounded-[18px] px-[11px] py-[3px] mr-[14px] mb-[15px]">
      <div className="text-[12px] leading-[20px]">{categoryName}</div>
      <ClearIcon sx={{ fontSize: "12px", marginLeft: "5px" }} />
    </div>
  )
}

export default CategoryChips