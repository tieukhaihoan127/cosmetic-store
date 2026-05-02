import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface AddressAutocompleteProps {
    options: string[];
    placeholder: string;
};

const AddressAutocomplete = ({ options, placeholder } : AddressAutocompleteProps) => {
    return (
        <Autocomplete
            options={options}
            slotProps={{
                popper: {
                    placement: 'bottom',
                    modifiers: [
                        {
                            name: 'flip',
                            enabled: false,
                        }
                    ]
                },
                paper: {
                    sx: {
                        '& .MuiAutocomplete-option': {
                            fontSize: '14px',
                        },
                        '& .MuiAutocomplete-option[aria-selected="true"]': {
                            backgroundColor: '#EAC7C8 !important',
                            color: 'white',
                        },
                        '& .MuiAutocomplete-option.Mui-focused': {
                            backgroundColor: '#EAC7C8 !important',
                            color: 'white',
                        },
                    }
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder={placeholder}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            padding: '11px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            '& fieldset': {
                                border: '1px solid #d9d9d9',
                                transition: 'all 200ms ease-in-out',
                            },
                            '&.Mui-focused fieldset': {
                                border: '1px solid black !important',
                            },
                        },
                        '& .MuiAutocomplete-input': {
                            padding: '0 !important',
                            cursor: 'pointer',
                        },
                        '& input::placeholder': {
                            fontSize: '14px',
                        },
                    }}
                />
            )}
        />
    );
};

export default AddressAutocomplete;