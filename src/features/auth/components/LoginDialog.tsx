import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import useLogin from '../hooks/useLogin';
import PhoneTextfield from '../../../shared/components/common/Textfield/PhoneTextfield';
import CommonTextfield from '../../../shared/components/common/Textfield/CommonTextfield';


const LoginDialog = () => {
    
    const { isOpenLogin, isXS, authenticationStep, second, resend, handleResend, handleClose } = useLogin();

    return (
        <Dialog
            open={isOpenLogin}
            onClose={handleClose}
            fullScreen={isXS}
            fullWidth
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: '10px',
                        padding: '24px',
                        width: '500px',
                        maxWidth: '100%'
                    }
                }
            }}
        >
            <DialogTitle sx={{ padding: '0' }}>
                <div className="flex items-center justify-between">
                    <div ></div>
                    <IconButton disableRipple onClick={handleClose} sx={{ transition: '300ms ease', '&:hover': { color: 'black' }, padding: 0 }}>
                        <CloseIcon sx={{ fontSize: '30px', }} />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent sx={{ textAlign: 'center', width: '320px', margin: 'auto', paddingY: '30px', paddingX: '0' }}>
                {authenticationStep === 'login' && (
                    <div className="mb-[30px]">
                        <div className="text-[24px] font-bold mb-[15px]">
                            ĐĂNG NHẬP
                        </div>
                        <div className="font-medium text-[14px] leading-[17px] px-[1px]">
                            Bạn chưa có tài khoản? Không cần đăng ký. Đăng nhập nhanh với Beauty Box bằng số điện thoại.
                        </div>
                    </div>
                )}
                {authenticationStep === 'otp' && (
                    <div className="mb-[30px]">
                        <div className="text-[24px] font-bold mb-[15px]">
                            NHẬP MÃ OTP
                        </div>
                        <div className="font-medium text-[14px] leading-[17px] px-[5px]">
                            Mã xác thực (OTP) sẽ được gửi qua tin nhắn Zalo của số điện thoại của bạn để đăng nhập
                        </div>
                    </div>
                )}
                {authenticationStep === 'login' && (
                    <PhoneTextfield country='84' />
                )}
                {authenticationStep === 'otp' && (
                    <CommonTextfield placeholder='Nhập mã OTP 6 chữ số' />
                )}
                {authenticationStep === 'otp' && (
                    <div className="mt-[15px] text-[13px] text-center">
                        {resend ? (
                            <span
                                className="text-[#858585] text-[14px] cursor-pointer hover:text-[#bf585b] transition-all duration-300"
                                onClick={handleResend}
                            >
                                Gửi lại mã OTP
                            </span>
                        ) : (
                            <span className="text-[#858585] text-[14px]">
                                Gửi lại mã sau{' '}
                                <span className="text-[#bf585b] font-bold ml-[2px] text-[14px]">{second}s</span>
                            </span>
                        )}
                    </div>
                )}
                <div onClick={handleResend} className="text-white h-[40px] px-[20px] py-[6px] mt-[25px] rounded-[40px] flex items-center justify-center cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                    ĐĂNG NHẬP
                </div>
                {authenticationStep === 'login' && (
                    <div>
                        <div className="mt-[20px] text-[12px] font-medium">
                            *Vui lòng không hủy đơn hàng khi đã thanh toán*
                        </div>
                        <div className="mt-[20px] px-[9px] text-[13px] text-[#5aa000] leading-[17px]">
                            Đăng nhập ngay để mua sắm dễ dàng hơn, sử dụng những tiện ích mới nhất và tận hưởng thêm nhiều ưu đãi độc quyền dành riêng cho thành viên Beauty Box.
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default LoginDialog;