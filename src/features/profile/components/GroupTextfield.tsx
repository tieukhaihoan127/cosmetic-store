import TextField from "@mui/material/TextField";

interface GroupTextfieldProps {
    id: string;
    label: string;
    placeholder: string;
};

const GroupTextfield = ({ id, label, placeholder } : GroupTextfieldProps) => {
    return (
        <div className='group'>
            <label htmlFor={id} className='text-[14px] cursor-pointer'>{label} <span className="text-red-500">*</span></label>
            <TextField
                id={id}
                fullWidth
                variant="outlined"
                placeholder={placeholder}
                sx={{
                    marginTop: '10px',
                    '& .MuiOutlinedInput-root': {
                        padding: '11px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        '& fieldset': {
                            border: '1px solid #b7b6c2',
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
                    '.group:hover & .MuiOutlinedInput-root fieldset': {
                        borderColor: '#bf585b',
                    },
                    '& .MuiInputBase-input': {
                        padding: '0px !important',
                    },
                    '& .MuiAutocomplete-input': {
                        padding: '0px !important',
                        cursor: 'pointer',
                    },
                    '& input::placeholder': {
                        fontSize: '14px',
                        color: '#858585',
                        opacity: 1,
                    },
                }}
            />
        </div>
    );
};

export default GroupTextfield;