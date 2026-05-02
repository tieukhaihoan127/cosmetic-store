import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

interface PhoneTextfieldProps {
  country: string;
};

const PhoneTextfield = ({ country } : PhoneTextfieldProps) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder={country}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <span>+</span>
            </InputAdornment>
          ),
        },
      }}
      sx={{
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
  );
};

export default PhoneTextfield;