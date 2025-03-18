import { Button as MuiButton, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  color?: 'primary' | 'secondary' | 'warning';
}

const Button = ({ children, color = 'primary', ...props }: CustomButtonProps) => {
  return (
    <MuiButton
      variant="contained"
      className="font-raleway"
      sx={{
        backgroundColor: color === 'primary' ? '#FF4D7D' : color === 'secondary' ? '#FFD700' : '#3B82F6',
        '&:hover': {
          backgroundColor: color === 'primary' ? '#FF6B94' : color === 'secondary' ? '#FFE34D' : '#60A5FA',
        },
        borderRadius: '8px',
        padding: '10px 20px',
        textTransform: 'none',
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;