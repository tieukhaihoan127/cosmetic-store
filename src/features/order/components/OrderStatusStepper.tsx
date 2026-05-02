import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import type { StepIconProps } from '@mui/material/StepIcon';
import ReceiptIcon from '@mui/icons-material/ReceiptLong';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckIcon from '@mui/icons-material/Check';
import useMediaQuery from '@mui/material/useMediaQuery';

const CustomConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: '#E0E0E0',
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundColor: '#AB2328',
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundColor: '#AB2328',
  },
}))

const CustomVerticalConnector = styled(StepConnector)(() => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderLeft: '2px solid #E0E0E0', 
    minHeight: '24px',
    marginLeft: '0px',
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    borderLeftColor: '#AB2328', 
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    borderLeftColor: '#AB2328',
  },
}))

const CustomStepIconRoot = styled('div')<{ ownerState: { active?: boolean; completed?: boolean } }>(
  ({ ownerState }) => ({
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: '2px solid #E0E0E0',
    backgroundColor: '#fff',
    ...(ownerState.active && {
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, #ffd400, #c73130, #663695)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      color: '#000000',
    }),
    ...(ownerState.completed && {
      border: '2px solid #C73130',
      color: '#000000',
    }),
  })
)

const CustomStepIcon = (props: StepIconProps) => {
  const { active, completed, className, icon } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <ReceiptIcon fontSize="small" />,
    2: <AttachMoneyIcon fontSize="small" />,
    3: <InventoryIcon fontSize="small" />,
    4: <LocalShippingIcon fontSize="small" />,
    5: <CheckIcon fontSize="small" />,
  }

  return (
    <CustomStepIconRoot ownerState={{ active, completed }} className={className}>
      {icons[String(icon)]}
    </CustomStepIconRoot>
  )
}

const steps = [
  { label: 'Đã đặt đơn hàng', sublabel: '8 minutes ago' },
  { label: 'Xác nhận thanh toán', sublabel: '8 minutes ago' },
  { label: 'Đang chuẩn bị đơn hàng', sublabel: '8 minutes ago' },
  { label: 'Đang vận chuyển' },
  { label: 'Giao hàng thành công' },
]

const OrderStatusStepper = () => {
  const activeStep = 2;
  
  const isXS = useMediaQuery('(max-width: 576px)');

  return (
    <Stepper
      alternativeLabel={!isXS}
      activeStep={activeStep}
      orientation={isXS ? 'vertical' : 'horizontal'} 
      connector={isXS ? <CustomVerticalConnector /> : <CustomConnector />}
      sx={{ py: 5, width: '100%' }}
    >
      {steps.map((step, index) => (
        <Step key={step.label}>
          <StepLabel
            slots={{ stepIcon: CustomStepIcon }}
            optional={
              step.sublabel
                ? <span className={`text-[12px] ${index === activeStep ? 'text-[#000000]' : 'text-[#999999]'}`}>{step.sublabel}</span>
                : null
            }
            sx={{
              '& .MuiStepLabel-label': {
                fontSize: '14px',
                color: '#999',        
                lineHeight: 1.5715,
                mt: '8px !important',
              },
              '& .MuiStepLabel-label.Mui-active': {
                color: '#000000',   
                fontWeight: 400,
              },
              '& .MuiStepLabel-label.Mui-completed': {
                color: '#000000',    
                fontWeight: 400,
              }
            }}
          >
            {step.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default OrderStatusStepper;