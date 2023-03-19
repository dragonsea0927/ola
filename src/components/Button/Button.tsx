// create a rseuable button component that can be used in any component that needs a button

// import the button component from material ui
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

interface StyledButtonProps {
  theme: any;
  width?: string;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
}

const StyledButton = styled(Button)<StyledButtonProps>(({ theme, width, variant, color }) => ({
  width: width || 'auto',
  height: 'auto',
  padding: '8px 16px',
  borderRadius: '4px',
  textTransform: 'none',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '16px',
  letterSpacing: '0.25px',
  color: color === 'primary' ? theme.palette.primary.main : theme.palette.text.primary,
  backgroundColor: variant === 'contained' ? theme.palette.primary.main : 'transparent',
  border: variant === 'outlined' ? `1px solid ${theme.palette.primary.main}` : 'none',
  '&:hover': {
    backgroundColor: variant === 'contained' ? theme.palette.primary.light : 'transparent',
    border: variant === 'outlined' ? `1px solid ${theme.palette.primary.light}` : 'none',
  },
}));

export default function CustomButton(props: ButtonProps) {
  return <StyledButton
    variant={props.variant}
    color={props.color}
    size={props.size}
    onClick={props.onClick}
    theme={undefined}
  >
    {props.children}
  </StyledButton>;
}


