import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import Divider from '@mui/material/Divider';

export default function BlogMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='md:hidden'>
            <Button
                id="blog-button"
                aria-controls={open ? 'blog-menu' : undefined}
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
                <MoreHorizSharpIcon />
            </Button>
            <Menu
                id="blog-menu"
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
                        "aria-labelledby": "blog-button",
                    }
                }}
            >
                <div className='sm:hidden'>
                    <MenuItem onClick={handleClose} disableRipple sx={{
                        "&:hover": {
                            backgroundColor: "transparent"
                        }
                    }}>
                        <div className='text-[#818181] transition-colors duration-300 ease-in-out hover:font-semibold cursor-pointer hover:text-black text-[14px]'>Cách chăm sóc da</div>
                    </MenuItem>
                    <Divider />
                </div>
                <MenuItem onClick={handleClose} disableRipple sx={{
                    "&:hover": {
                        backgroundColor: "transparent"
                    }
                }}>
                    <div className='text-[#818181] transition-colors duration-300 ease-in-out hover:font-semibold cursor-pointer hover:text-black text-[14px]'>Xu hướng trang điểm</div>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} disableRipple sx={{
                    "&:hover": {
                        backgroundColor: "transparent"
                    }
                }}>
                    <div className='text-[#818181] transition-colors duration-300 ease-in-out hover:font-semibold cursor-pointer hover:text-black text-[14px]'>Bí quyết khỏe đẹp</div>
                </MenuItem>
            </Menu>
        </div>
    );
}
