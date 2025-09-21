import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import logo1 from "../../assets/images/logo1.webp";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function HeaderSidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={"thuong-hieu"} disablePadding sx={{
          marginTop: "4px",
          marginBottom: "4px",
        }}>
          <ListItemButton sx={{
            display: "flex", justifyContent: "space-between", "&:hover .MuiTypography-root": {
              color: "var(--muted-pink) !important",
            },
            "&:hover svg": {
              color: "var(--muted-pink)", 
              transition: "color 0.3s ease",
            },
          }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ListItemText primary={"Thương Hiệu"} slotProps={{
                primary: {
                  sx: {
                    fontSize: "16px",
                    transition: "color 0.3s ease",
                  }
                }
              }} />
            </Box>
            <ExpandMoreIcon />
          </ListItemButton>
        </ListItem>
        <ListItem key={"thuong-hieu-2"} disablePadding sx={{
          marginTop: "4px",
          marginBottom: "4px",
        }}>
          <ListItemButton sx={{
            display: "flex", justifyContent: "space-between", "&:hover .MuiTypography-root": {
              color: "var(--muted-pink) !important",
            },
            "&:hover svg": {
              color: "var(--muted-pink)", 
              transition: "color 0.3s ease",
            },
          }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ListItemText primary={"Thương Hiệu"} slotProps={{
                primary: {
                  sx: {
                    fontSize: "16px",
                    transition: "color 0.3s ease",
                  }
                }
              }} />
            </Box>
            <ExpandMoreIcon />
          </ListItemButton>
        </ListItem>
        <ListItem key={"thuong-hieu-3"} disablePadding sx={{
          marginTop: "4px",
          marginBottom: "4px",
        }}>
          <ListItemButton sx={{
            display: "flex", justifyContent: "space-between", "&:hover .MuiTypography-root": {
              color: "var(--muted-pink) !important",
            },
            "&:hover svg": {
              color: "var(--muted-pink)", 
              transition: "color 0.3s ease",
            },
          }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ListItemText primary={"Thương Hiệu"} slotProps={{
                primary: {
                  sx: {
                    fontSize: "16px",
                    transition: "color 0.3s ease",
                  }
                }
              }} />
            </Box>
            <ExpandMoreIcon />
          </ListItemButton>
        </ListItem>
        <ListItem key={"thuong-hieu-4"} disablePadding sx={{
          marginTop: "4px",
          marginBottom: "4px",
        }}>
          <ListItemButton sx={{
            display: "flex", justifyContent: "space-between", "&:hover .MuiTypography-root": {
              color: "var(--muted-pink) !important",
            },
            "&:hover svg": {
              color: "var(--muted-pink)", 
              transition: "color 0.3s ease",
            },
          }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ListItemText primary={"Thương Hiệu"} slotProps={{
                primary: {
                  sx: {
                    fontSize: "16px",
                    transition: "color 0.3s ease",
                  }
                }
              }} />
            </Box>
            <ExpandMoreIcon />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={"Good Evening Tiêu"} disablePadding sx={{
          marginTop: "4px",
          marginBottom: "4px",
          "&:hover .MuiTypography-root": {
            color: "var(--muted-pink)",
          },
        }}>
          <ListItemButton sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ListItemText primary={"Good Evening Tiêu"} slotProps={{
                primary: {
                  sx: {
                    fontWeight: "bold",
                    transition: "color  0.3s ease",
                  }
                }
              }} />
            </Box>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Thông tin tài khoản"} disablePadding sx={{
          marginTop: "4px",
          marginBottom: "4px",
          "&:hover .MuiTypography-root": {
            color: "var(--muted-pink)",
          },
          "&:hover svg": {
              color: "var(--muted-pink)", 
              transition: "color 0.3s ease",
            }
        }}>
          <ListItemButton className='flex items-center'>
            <InboxIcon sx={{ mr: "10px" }} />
            <ListItemText primary={"Thông tin tài khoản"} slotProps={{
              primary: {
                sx: {
                  fontSize: "16px",
                  transition: "color  0.3s ease",
                }
              }
            }} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Thông tin tài khoản1"} disablePadding sx={{
          marginTop: "4px",
          marginBottom: "4px",
          "&:hover .MuiTypography-root": {
            color: "var(--muted-pink)",
          },
          "&:hover svg": {
              color: "var(--muted-pink)", 
              transition: "color 0.3s ease",
            }
        }}>
          <ListItemButton className='flex items-center'>
            <InboxIcon sx={{ mr: "10px" }} />
            <ListItemText primary={"Thông tin tài khoản"} slotProps={{
              primary: {
                sx: {
                  fontSize: "16px",
                  transition: "color  0.3s ease",
                }
              }
            }} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Thông tin tài khoản2"} disablePadding sx={{
          marginTop: "4px",
          marginBottom: "4px",
          "&:hover .MuiTypography-root": {
            color: "var(--muted-pink)",
          },
          "&:hover svg": {
              color: "var(--muted-pink)", 
              transition: "color 0.3s ease",
            }
        }}>
          <ListItemButton className='flex items-center'>
            <InboxIcon sx={{ mr: "10px" }} />
            <ListItemText primary={"Thông tin tài khoản"} slotProps={{
              primary: {
                sx: {
                  fontSize: "16px",
                  transition: "color  0.3s ease",
                }
              }
            }} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Thông tin tài khoản3"} disablePadding sx={{
          marginTop: "4px",
          marginBottom: "4px",
          "&:hover .MuiTypography-root": {
            color: "var(--muted-pink)",
          },
          "&:hover svg": {
              color: "var(--muted-pink)", 
              transition: "color 0.3s ease",
            }
        }}>
          <ListItemButton className='flex items-center'>
            <InboxIcon sx={{ mr: "10px" }} />
            <ListItemText primary={"Thông tin tài khoản"} slotProps={{
              primary: {
                sx: {
                  fontSize: "16px",
                  transition: "color  0.3s ease",
                }
              }
            }} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Thông tin tài khoản3"} disablePadding sx={{
          marginTop: "4px",
          marginBottom: "4px",
          "&:hover .MuiTypography-root": {
            color: "var(--muted-pink)",
          },
          "&:hover svg": {
              color: "var(--muted-pink)", 
              transition: "color 0.3s ease",
            }
        }}>
          <ListItemButton className='flex items-center'>
            <InboxIcon sx={{ mr: "10px" }} />
            <ListItemText primary={"Thông tin tài khoản"} slotProps={{
              primary: {
                sx: {
                  fontSize: "16px",
                  transition: "color  0.3s ease",
                }
              }
            }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}>
          <MenuIcon sx={{ fontSize: 25 }} />
        </Button>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          slotProps={{
            paper: {
              sx: {
                width: '100vw',
                height: '100vh',
                maxWidth: '100%',
                margin: 0,
                inset: 0,
                borderRadius: 0,
              },
            },
          }}
        >
          <Box
            sx={{
              position: "sticky",
              top: 0,
              left: 0,
              width: "100%",
              height: 62,
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #eee",
              bgcolor: "white",
              zIndex: 1,
              paddingLeft: "16px",
              paddingRight: "16px"
            }}
          >
            <div className='flex-1 flex justify-center'>
              <img src={logo1} alt="Logo" style={{ height: "40px" }} />
            </div>
            <IconButton size="small">
              <CloseOutlinedIcon />
            </IconButton>
          </Box>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}