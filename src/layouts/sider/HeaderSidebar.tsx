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

interface MenuItem {
  key: string;
  label: string;
  children?: MenuItem[];
}


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
      children: [
        {
          key: "ahc",
          label: "AHC"
        },
        {
          key: "clio",
          label: "CLIO"
        },
        {
          key: "goodal",
          label: "GOODAL"
        },
        {
          key: "peripera",
          label: "PERIPERA"
        },
        {
          key: "dermatory",
          label: "DERMATORY"
        },
        {
          key: "dear-dahlia",
          label: "DEAR DAHLIA"
        },
        {
          key: "banila-co",
          label: "BANILA CO"
        },
        {
          key: "amuse",
          label: "AMUSE"
        },
        {
          key: "the-face-shop",
          label: "THE FACE SHOP"
        },
        {
          key: "cosrx",
          label: "COSRX"
        },
        {
          key: "klavuu",
          label: "KLAVUU"
        },
        {
          key: "dyson",
          label: "DYSON"
        },
        {
          key: "cocoon",
          label: "COCOON"
        },
        {
          key: "la-roche-posay",
          label: "LA ROCHE-POSAY"
        },
        {
          key: "cnp",
          label: "CNP"
        }
      ]
    },
    {
      key: "khuyen-mai",
      label: "Khuyến mãi hot",
      children: [
        {
          key: "sale-1",
          label: "MEGA SALE - SĂN NGAY DEAL HỜI | ÁP DỤNG WEBSITE"
        },
        {
          key: "sale-2",
          label: "ƯU ĐÃI 50% DEAL SIÊU HỜI | ÁP DỤNG WEBSITE & HTCH"
        },
        {
          key: "sale-3",
          label: "SĂN HÀNG XỊN CHỈ TỪ 99K | ÁP DỤNG WEBSITE"
        }
      ]
    },
    {
      key: "san-pham",
      label: "Sản phẩm cao cấp",
    },
    {
      key: "trang-diem",
      label: "Trang điểm",
      children: [
        {
          key: "trang-diem-mat",
          label: "TRANG ĐIỂM MẶT",
          children: [
            {
              key: "cushion",
              label: "Cushion"
            },
            {
              key: "kem-nen",
              label: "Kem Nền"
            },
            {
              key: "phan-phu",
              label: "Phấn Phủ"
            },
            {
              key: "che-khuyet-diem",
              label: "Che Khuyết Điểm"
            },
            {
              key: "kem-lot",
              label: "Kem Lót"
            },
            {
              key: "phan-ma-hong",
              label: "Phấn Má Hồng"
            },
            {
              key: "tao-khoi",
              label: "Tạo Khối"
            }
          ]
        },
        {
          key: "trang=diem-moi",
          label: "TRANG ĐIỂM MÔI",
          children: [
            {
              key: "son-thoi",
              label: "Son Thỏi"
            },
            {
              key: "son-kem-tint",
              label: "Son Kem - Tint"
            },
            {
              key: "son-duong-moi-dac-tri",
              label: "Son Dưỡng Môi - Đặc Trị"
            },
            {
              key: "son-bong",
              label: "Son Bóng"
            },
          ]
        },
        {
          key: "trang-diem-matt",
          label: "TRANG DIỂM MẮT",
          children: [
            {
              key: "phan-mat",
              label: "Phấn Mắt"
            },
            {
              key: "mascara",
              label: "Mascara"
            },
            {
              key: "ke-chan-may",
              label: "Kẻ Chân Mày"
            },
            {
              key: "ke-mat",
              label: "Kẻ Mắt"
            },
          ]
        },
        {
          key: "phu-kien-trang-diem",
          label: "PHỤ KIỆN TRANG ĐIỂM",
          children: [
            {
              key: "co-trang-diem",
              label: "Cọ Trang Điểm"
            },
            {
              key: "bong-mut-trang-diem",
              label: "Bông Mút Trang Điểm"
            },
            {
              key: "phu-kien-khac",
              label: "Phụ Kiện Trang Điểm Khác"
            },
          ]
        },
        {
          key: "trang-diem-thuan-chay",
          label: "TRANG ĐIỂM THUẦN CHAY"
        }
      ]
    },
    {
      key: "cham-soc-da",
      label: "Chăm Sóc Da",
      children: [
        {
          key: "duong-da",
          label: "DƯỠNG DA",
          children: [
            {
              key: "kem-duong-da",
              label: "Kem Dưỡng Da"
            },
            {
              key: "serum",
              label: "Serum"
            },
            {
              key: "toner",
              label: "Toner"
            },
            {
              key: "sua-duong",
              label: "Sữa Dưỡng"
            },
            {
              key: "bo-duong-cham-soc-da",
              label: "Bộ Dưỡng Chăm Sóc Da"
            },
          ]
        },
        {
          key: "lam-sach",
          label: "LÀM SẠCH",
          children: [
            {
              key: "sua-rua-mat",
              label: "Sữa Rửa Mặt"
            },
            {
              key: "tay-trang",
              label: "Tẩy Trang"
            },
            {
              key: "tay-te-bao-chet-da-mat",
              label: "Tẩy Tế Bào Chết Da Mặt"
            },
          ]
        },
        {
          key: "mat-na",
          label: "Mặt Nạ",
          children: [
            {
              key: "mat-na-giay",
              label: "Mặt Nạ Giấy"
            },
            {
              key: "mat-na-mat-moi",
              label: "Mặt Nạ Mắt & Môi"
            },
            {
              key: "mat-na-ngu",
              label: "Mặt Nạ Ngủ"
            },
          ]
        }
      ]
    },
    {
      key: "chong-nang-toan-dien",
      label: "CHỐNG NẮNG TOÀN DIỆN"
    },
    {
      key: "phu-kien-cham-soc-da-mat",
      label: "PHỤ KIỆN CHĂM SÓC DA MẶT",
      children: [
        {
          key: "phu-kien-lam-sach",
          label: "Phụ Kiện Làm Sạch"
        },
        {
          key: "phu-kien-tri-mun",
          label: "Phụ Kiện Trị Mụn"
        }
      ]
    },
    {
      key: "duong-da-thuan-chay",
      label: "DƯỠNG DA THUẦN CHAY"
    }
  ];

  const renderMenuItems = (items: MenuItem[], level = 0) => {
    return items.map((item) => (
      <React.Fragment key={item.key}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => level === 0 && item.children && handleToggle(item.key)} 
            disableRipple
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pl: `${24 + level * 16}px`,
              pr: "24px",
              py: "6px",
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&:hover .MuiTypography-root": {
                color: "var(--muted-pink) !important",
              },
            }}
          >
            <ListItemText
              primary={item.label}
              slotProps={{
                primary: {
                  sx: {
                    fontSize: "14px",
                    fontWeight: item.children && level !== 0 ? "bold" : "normal",
                    transition: "color 0.3s ease",
                    textTransform: item.children && level !== 0 ? "uppercase" : "none",
                  },
                },
              }}
            />
            {item.children && level === 0 && (
              <ExpandMoreIcon
                sx={{
                  transform: expanded[item.key] ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            )}
          </ListItemButton>
        </ListItem>

        {/* Nếu có children */}
        {item.children && (
          <Box>
            {/* Chỉ render đệ quy nếu: 
              - level = 0 => khi expand mở
              - level >= 1 => luôn hiển thị */}
            {(level === 0 && expanded[item.key]) || level >= 1 ? (
              <>
                {level < 1 && (
                  <Divider sx={{ mx: "40px", my: "10px" }} />
                )}
                {renderMenuItems(item.children, level + 1)}
                {level < 1 && (
                  <Divider
                    sx={{
                      height: "2px",
                      border: "none",
                      background:
                        "linear-gradient(to right, #FFD700, #FF4500, #FF1493, #8A2BE2)",
                      borderRadius: "2px",
                      marginTop: "10px",
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginBottom: "10px"
                    }}
                  />
                )}
              </>
            ) : null}
          </Box>
        )}
      </React.Fragment>
    ));
  };



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
          padding: "0"
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
              {renderMenuItems(menuItems)}
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