import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import CheckIcon from '@mui/icons-material/Check';

const CartCheckbox = () => {
    return (
        <Checkbox
            disableRipple
            sx={{ paddingRight: '0px', paddingLeft: '0px' }}
            icon={
                <Box
                    sx={{
                        width: 16,
                        height: 16,
                        border: "1px solid #ab2328",
                        borderRadius: "4px",
                    }}
                />
            }
            checkedIcon={
                <Box
                    sx={{
                        width: 16,
                        height: 16,
                        borderRadius: "4px",
                        backgroundColor: "#ab2328",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CheckIcon sx={{ fontSize: 14, color: "#fff" }} />
                </Box>
            }
        />
    );
};

export default CartCheckbox;
