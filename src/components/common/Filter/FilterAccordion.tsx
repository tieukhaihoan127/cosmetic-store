import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckboxFilter from '../../ui/Checkbox/CheckboxFilter';

const FilterAccordion = () => {
  return (
    <div>
      <Accordion
        defaultExpanded
        sx={{
          borderRadius: 0,
          boxShadow: "none",

          "&:before": {
            display: "none",
          },

          "&.Mui-expanded": {
            margin: 0,
          },

          "&:first-of-type": {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },

          "&:last-of-type": {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
          p: "0"
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            p: "12px 16px 12px 0",
            minHeight: "auto",

            "&.Mui-expanded": {
              minHeight: "auto",
            },

            "& .MuiAccordionSummary-content": {
              margin: 0,
            },

            "& .MuiAccordionSummary-content.Mui-expanded": {
              margin: 0,
            },
          }}
        >
          <div className='text-[14px] font-bold'>Giá sản phẩm</div>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            p: "0 16px 12px 0",
          }}
        >
          <div className='flex flex-col'>
            <FormControlLabel control={<CheckboxFilter />} label={<Typography fontSize="14px">Dưới 500.000đ</Typography>} />
            <FormControlLabel control={<CheckboxFilter />} label={<Typography fontSize="14px">500.000đ - 1.000.000đ</Typography>} />
            <FormControlLabel control={<CheckboxFilter />} label={<Typography fontSize="14px">1.000.000đ - 1.500.000đ</Typography>} />
            <FormControlLabel control={<CheckboxFilter />} label={<Typography fontSize="14px">1.500.000đ - 2.000.000đ</Typography>} />
            <FormControlLabel control={<CheckboxFilter />} label={<Typography fontSize="14px">Trên 2.000.000đ</Typography>} />
          </div>
        </AccordionDetails>
      </Accordion>

    </div>
  )
}

export default FilterAccordion


