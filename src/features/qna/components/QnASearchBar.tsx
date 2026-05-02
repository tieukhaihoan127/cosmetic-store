import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const QnASearchBar = () => {
    return (
        <div className="rounded-full min-w-[650px] [@media(max-width:919px)]:min-w-[570px] [@media(max-width:780px)]:!min-w-[95%]">
            <TextField
                fullWidth
                variant="outlined"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#888', fontSize: '28px' }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button
                                    onClick={() => console.log('submit')}
                                    sx={{
                                        borderRadius: '999px',
                                        backgroundColor: 'white',
                                        textTransform: 'none',
                                        color: 'black',
                                        border: '0',
                                        px: 0,
                                        fontSize: '14px',
                                        fontWeight: 700
                                    }}
                                >
                                    Tìm kiếm
                                </Button>
                            </InputAdornment>
                        ),
                    },
                }}
                sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '999px',
                        backgroundColor: '#fff',
                        px: '25px',
                        '& fieldset': { border: 'none' },
                        '&:hover fieldset': { border: 'none' },
                        '&.Mui-focused fieldset': { border: 'none' },
                    },
                    '& .MuiInputBase-input': {
                        py: '10.5px',
                        fontSize: '0.9rem',
                    },
                }}
            />
        </div>
    );
};

export default QnASearchBar;