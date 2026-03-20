import Radio, { type RadioProps } from "@mui/material/Radio";

const ProductDetailRadio = (props: RadioProps) => {
  return (
    <Radio
      {...props}
      disableRipple
      disableFocusRipple
      disableTouchRipple
      sx={{
        "& .MuiSvgIcon-root": {
          fontSize: 20,
          color: "#000",
        },
        "&.Mui-checked": {
          color: "#000",
        },
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    />
  );
}

export default ProductDetailRadio