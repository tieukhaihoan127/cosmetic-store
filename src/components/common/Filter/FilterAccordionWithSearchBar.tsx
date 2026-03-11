import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckboxFilter from '../../ui/Checkbox/CheckboxFilter';
import SearchFilter from '../SearchBar/SearchFilter';
import { useState } from 'react';


const FilterAccordionWithSearchBar = () => {

  const filterOptions = [
    {
      item: 'LANEIGE',
      quantity: 7
    },
    {
      item: 'PERIPERA',
      quantity: 7
    },
    {
      item: 'CLUB CLIO',
      quantity: 7
    },
    {
      item: 'BBIA',
      quantity: 7
    },
    {
      item: 'CNP',
      quantity: 7
    },
    {
      item: 'MAC',
      quantity: 7
    },
    {
      item: 'SUGARPLUM',
      quantity: 7
    },
    {
      item: 'ESSANCE',
      quantity: 7
    },
    {
      item: 'CLUB CLIO',
      quantity: 7
    },
    {
      item: 'BBIA',
      quantity: 7
    },
    {
      item: 'CNP',
      quantity: 7
    },
    {
      item: 'MAC',
      quantity: 7
    },
    {
      item: 'SUGARPLUM',
      quantity: 7
    },
    {
      item: 'ESSANCE',
      quantity: 7
    },
    {
      item: 'CLUB CLIO',
      quantity: 7
    },
    {
      item: 'BBIA',
      quantity: 7
    },
    {
      item: 'CNP',
      quantity: 7
    },
    {
      item: 'MAC',
      quantity: 7
    },
    {
      item: 'SUGARPLUM',
      quantity: 7
    },
    {
      item: 'ESSANCE',
      quantity: 7
    },
    {
      item: 'CLUB CLIO',
      quantity: 7
    },
    {
      item: 'BBIA',
      quantity: 7
    },
    {
      item: 'CNP',
      quantity: 7
    },
    {
      item: 'MAC',
      quantity: 7
    },
    {
      item: 'SUGARPLUM',
      quantity: 7
    },
    {
      item: 'ESSANCE',
      quantity: 7
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const [numberItems, setNumberItems] = useState(5);

  const visibleItems = filterOptions.slice(0, numberItems);

  const updateItem = () => {
    setShowMore(true);
    setNumberItems(prev => prev + 5);
  }

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
            <SearchFilter />
            <div className={`${showMore ? "max-h-[300px] overflow-y-auto custom-scrollbar pl-[2px]" : ""} flex flex-col `}>
              {visibleItems.map((item) => (
                <FormControlLabel key={item.item} control={<CheckboxFilter />} label={<Typography fontSize="14px">{item.item} ({item.quantity})</Typography>} />
              ))}
              {numberItems < filterOptions.length && (
                <div
                  onClick={updateItem}
                  className="text-[12px] underline cursor-pointer py-[10px] hover:font-bold"
                >
                  Xem thêm
                </div>
              )}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

    </div>
  )
}

export default FilterAccordionWithSearchBar


