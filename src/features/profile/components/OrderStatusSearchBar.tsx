import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const OrderStatusSearchBar = () => {
    return (
        <TextField
            fullWidth
            variant="outlined"
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: '#888', fontSize: '28px' }} />
                        </InputAdornment>
                    )
                },
            }}
            placeholder="Tìm kiếm"
            sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                    borderRadius: '999px',
                    backgroundColor: '#F6F6F6',
                    '& fieldset': {
                        border: '1px solid transparent',
                        transition: 'all 200ms ease-in-out',
                    },
                    '&:hover fieldset': {
                        borderColor: '#bf585b',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#bf585b',
                        boxShadow: '0 0 0 2px rgb(234,199,200)',
                    },
                },
                '& .MuiInputBase-input': {
                    py: '10.5px',
                    fontSize: '14px',
                },
            }}
        />
    );
};

export default OrderStatusSearchBar;