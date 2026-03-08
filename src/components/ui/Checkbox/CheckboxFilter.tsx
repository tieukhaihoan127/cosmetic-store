import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import CheckIcon from '@mui/icons-material/Check';

export default function CheckboxFilter() {
    return (
        <Checkbox
            disableRipple
            icon={
                <Box
                    sx={{
                        width: 19,
                        height: 19,
                        border: "1px solid #333",
                        borderRadius: "6px",
                    }}
                />
            }
            checkedIcon={
                <Box
                    sx={{
                        width: 19,
                        height: 19,
                        borderRadius: "6px",
                        backgroundColor: "#333",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CheckIcon sx={{ fontSize: 16, color: "#fff" }} />
                </Box>
            }
        />
    );
}
