import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import logo1 from "../../assets/images/logo1.webp";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


export default function HeaderSidebar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [expanded, setExpanded] = React.useState<{ [key: string]: boolean }>({});

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const handleToggle = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const menuItems = [
    {
      key: "thuong-hieu",
      label: "Thương hiệu",
      children: ["Thương hiệu A", "Thương hiệu B", "Thương hiệu C"],
    },
    {
      key: "khuyen-mai",
      label: "Khuyến mãi hot",
      children: [
        "MEGA SALE - SĂN NGAY DEAL HỜI | ÁP DỤNG WEBSITE",
        "ƯU ĐÃI 50% DEAL SIÊU HỜI | ÁP DỤNG WEBSITE & HTCH",
        "SĂN HÀNG XỊN CHỈ TỪ 99K | ÁP DỤNG WEBSITE",
      ],
    },
    {
      key: "san-pham",
      label: "Sản phẩm cao cấp",
      children: ["Kem dưỡng", "Serum", "Nước hoa"],
    },
  ];

  return (
    <div>
      <React.Fragment key={'left'}>
        <Button disableRipple onClick={toggleDrawer(true)} sx={{
          "color": "black",
          "&:hover": {
            background: "transparent"
          },
          minWidth: "max-content",
          "&:hover svg": {
            color: "var(--muted-pink)",
            transition: "color 0.3s ease",
          },
          padding:"0"
        }}>
          <MenuIcon sx={{ fontSize: 25 }} />
        </Button>
        <Drawer
          anchor={'left'}
          open={drawerOpen}
          onClose={toggleDrawer(false)}
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
              paddingLeft: "24px",
              paddingRight: "24px",
              paddingTop: "16px",
              paddingBottom: "16px"
            }}
          >
            <div className='flex-1 flex justify-center'>
              <img src={logo1} alt="Logo" style={{ height: "40px" }} />
            </div>
            <IconButton size="small" onClick={toggleDrawer(false)}>
              <CloseOutlinedIcon />
            </IconButton>
          </Box>
          <Box
            sx={{ width: "100%" }}
            role="presentation"
          >
            <List>
              {menuItems.map((item) => (
                <React.Fragment key={item.key}>
                  <ListItem disablePadding sx={{
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}>
                    <ListItemButton onClick={() => handleToggle(item.key)} disableRipple sx={{
                      display: "flex", justifyContent: "space-between", "&:hover": {
                        backgroundColor: "transparent",
                      }, "&:hover .MuiTypography-root": {
                        color: "var(--muted-pink) !important",
                      },
                      paddingLeft: "24px",
                      paddingRight: "24px",
                      paddingTop: "6px",
                      paddingBottom: "6px",
                      "&:hover svg": {
                        color: "var(--muted-pink)",
                        transition: "color 0.3s ease",
                      },
                    }}>
                      <ListItemText primary={item.label} slotProps={{
                        primary: {
                          sx: {
                            fontSize: "14px",
                            transition: "color 0.3s ease",
                          }
                        }
                      }} />
                      <ExpandMoreIcon />
                    </ListItemButton>
                  </ListItem>
                  {expanded[item.key] && (
                    <Box>
                      <Divider sx={{ marginRight: "40px", marginLeft: "40px", marginTop: "10px", marginBottom: "10px" }} />
                      {item.children.map((child, index) => (
                        <ListItem key={index} disablePadding>
                          <ListItemButton disableRipple sx={{
                            display: "flex", justifyContent: "space-between", "&:hover": {
                              backgroundColor: "transparent",
                            }, "&:hover .MuiTypography-root": {
                              color: "var(--muted-pink) !important",
                            },
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "40px",
                            paddingRight: "40px",
                            "&:hover svg": {
                              color: "var(--muted-pink)",
                              transition: "color 0.3s ease",
                            },
                          }}>
                            <ListItemText
                              primary={child}
                              slotProps={{
                                primary: {
                                  sx: {
                                    fontSize: "14px",
                                    transition: "color 0.3s ease",
                                  }
                                }
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                      <Divider
                        sx={{
                          height: "2px",
                          border: "none",
                          background:
                            "linear-gradient(to right, #FFD700, #FF4500, #FF1493, #8A2BE2)",
                          borderRadius: "2px",
                          marginTop: "10px",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                      />
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </List>
            <Divider />
            <List>
              <ListItem key={"Good Evening Tiêu"} disablePadding sx={{
                marginTop: "10px",
                marginBottom: "8px"
              }}>
                <ListItemButton disableRipple sx={{
                  display: "flex", justifyContent: "space-between", "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .MuiTypography-root": {
                    color: "var(--muted-pink)",
                  },
                  paddingRight: "24px",
                  paddingLeft: "24px",
                  paddingTop: "6px",
                  paddingBottom: "6px"
                }}>
                  <ListItemText primary={"Good Evening Tiêu"} slotProps={{
                    primary: {
                      sx: {
                        fontWeight: "bold",
                        transition: "color  0.3s ease",
                      }
                    }
                  }} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Thông tin tài khoản"} disablePadding sx={{
                marginTop: "10px",
                marginBottom: "8px"
              }}>
                <ListItemButton disableRipple sx={{
                  display: "flex", alignItems: "center", "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .MuiTypography-root": {
                    color: "var(--muted-pink)",
                  },
                  "&:hover svg": {
                    color: "var(--muted-pink)",
                    transition: "color 0.3s ease",
                  },
                  paddingRight: "24px",
                  paddingLeft: "24px",
                  paddingTop: "6px",
                  paddingBottom: "6px"
                }}>
                  <InboxIcon sx={{ mr: "10px" }} />
                  <ListItemText primary={"Thông tin tài khoản"} slotProps={{
                    primary: {
                      sx: {
                        fontSize: "14px",
                        transition: "color  0.3s ease",
                      }
                    }
                  }} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Thông tin tài khoản"} disablePadding sx={{
                marginTop: "10px",
                marginBottom: "8px"
              }}>
                <ListItemButton disableRipple sx={{
                  display: "flex", alignItems: "center", "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .MuiTypography-root": {
                    color: "var(--muted-pink)",
                  },
                  "&:hover svg": {
                    color: "var(--muted-pink)",
                    transition: "color 0.3s ease",
                  },
                  paddingRight: "24px",
                  paddingLeft: "24px",
                  paddingTop: "6px",
                  paddingBottom: "6px"
                }}>
                  <InboxIcon sx={{ mr: "10px" }} />
                  <ListItemText primary={"Thông tin tài khoản"} slotProps={{
                    primary: {
                      sx: {
                        fontSize: "14px",
                        transition: "color  0.3s ease",
                      }
                    }
                  }} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Thông tin tài khoản"} disablePadding sx={{
                marginTop: "10px",
                marginBottom: "8px"
              }}>
                <ListItemButton disableRipple sx={{
                  display: "flex", alignItems: "center", "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .MuiTypography-root": {
                    color: "var(--muted-pink)",
                  },
                  "&:hover svg": {
                    color: "var(--muted-pink)",
                    transition: "color 0.3s ease",
                  },
                  paddingRight: "24px",
                  paddingLeft: "24px",
                  paddingTop: "6px",
                  paddingBottom: "6px"
                }}>
                  <InboxIcon sx={{ mr: "10px" }} />
                  <ListItemText primary={"Thông tin tài khoản"} slotProps={{
                    primary: {
                      sx: {
                        fontSize: "14px",
                        transition: "color  0.3s ease",
                      }
                    }
                  }} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Thông tin tài khoản"} disablePadding sx={{
                marginTop: "10px",
                marginBottom: "8px"
              }}>
                <ListItemButton disableRipple sx={{
                  display: "flex", alignItems: "center", "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .MuiTypography-root": {
                    color: "var(--muted-pink)",
                  },
                  "&:hover svg": {
                    color: "var(--muted-pink)",
                    transition: "color 0.3s ease",
                  },
                  paddingRight: "24px",
                  paddingLeft: "24px",
                  paddingTop: "6px",
                  paddingBottom: "6px"
                }}>
                  <InboxIcon sx={{ mr: "10px" }} />
                  <ListItemText primary={"Thông tin tài khoản"} slotProps={{
                    primary: {
                      sx: {
                        fontSize: "14px",
                        transition: "color  0.3s ease",
                      }
                    }
                  }} />
                </ListItemButton>
              </ListItem>

            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}