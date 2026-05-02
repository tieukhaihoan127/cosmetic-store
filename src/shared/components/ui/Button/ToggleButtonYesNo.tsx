import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface ToggleButtonYesNoProps {
    value: boolean | null;
    setValue: (value : boolean) => void;
};

const ToggleButtonYesNo = ({ value, setValue } : ToggleButtonYesNoProps) => {
    return (
        <ToggleButtonGroup
            value={value}
            exclusive
            onChange={(_, newValue) => { if (newValue !== null) setValue(newValue) }}
            sx={{
                borderRadius: '999px',
                border: '1px solid #e0e0e0',
                overflow: 'hidden',
                '& .MuiToggleButton-root': {
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: '700',
                    padding: '7px 15px',
                    textTransform: 'none',
                    transition: 'background-color 300ms ease, color 300ms ease, border-radius 300ms ease',
                },
                '& .MuiToggleButton-root.Mui-selected': {
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '999px',
                    '&:hover': {
                        backgroundColor: '#333',
                    }
                },
                '& .MuiToggleButton-root:not(.Mui-selected)': {
                    backgroundColor: 'white',
                    color: 'black',
                },
            }}
        >
            <ToggleButton value={true} disableRipple>Có</ToggleButton>
            <ToggleButton value={false} disableRipple>Không</ToggleButton>
        </ToggleButtonGroup>
    );
};

export default ToggleButtonYesNo;