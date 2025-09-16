import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import LocalActivitySharpIcon from '@mui/icons-material/LocalActivitySharp';
import QuestionAnswerSharpIcon from '@mui/icons-material/QuestionAnswerSharp';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import HeaderMenuActionItem from './HeaderMenuActionItem';
import Divider from '@mui/material/Divider';

export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='ml-[10px] max-md:hidden'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        disableRipple
        sx={{
            all: "unset", 
            cursor: "pointer",
        }}
        className='text-[var(--text_primary)]'
      >
        <MoreHorizSharpIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: "top", 
            horizontal: "center", 
        }}
        slotProps={{
            paper: {
                sx: {
                    minWidth: 195,         
                    borderRadius: "0.75rem",
                    overflow: "hidden", 
                    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                    marginTop: "15px"
                },
            },
            list: {
                "aria-labelledby": "basic-button",
            }
        }}
      >
        <MenuItem onClick={handleClose} disableRipple sx={{
            "&:hover": {
            backgroundColor: "transparent" 
            }
        }}>
            <HeaderMenuActionItem icon={<QuestionAnswerSharpIcon sx={{ fontSize: 30 }}/>} label="Trung tâm hỗ trợ" to="/help-center"/>
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose} disableRipple sx={{
            "&:hover": {
            backgroundColor: "transparent" 
            }
        }}>
            <HeaderMenuActionItem icon={<LocationSearchingOutlinedIcon sx={{ fontSize: 30 }}/>} label="Tra cứu đơn hàng" to="/order-tracking"/>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} disableRipple sx={{
            "&:hover": {
            backgroundColor: "transparent" 
            }
        }}>
            <HeaderMenuActionItem icon={<LocalActivitySharpIcon sx={{ fontSize: 30 }}/>} label="Sự kiện tại store" to="/events"/>
        </MenuItem>
      </Menu>
    </div>
  );
}
