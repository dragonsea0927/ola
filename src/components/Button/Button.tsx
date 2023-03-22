import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { StyledButtonProps, ButtonProps } from "@/types";

const StyledButton = styled(Button)<StyledButtonProps>(({ theme, width, variant }) => ({
  width: variant === 'text' ? 'auto' : width,
  height: '45px',
  padding: '10px 20px',
  borderRadius: '50px',
  textTransform: 'none',
  lineHeight: '16px',
  letterSpacing: '0.25px',
  color: variant === 'outlined' ? theme.text.primary : variant === 'text' ? theme.palette.secondary.main : theme.white.main,
  backgroundColor: variant === 'contained' ? theme.palette.secondary.main : 'transparent',
  border: variant === 'outlined' ? `1px solid ${theme.palette.secondary.main}` : 'none',
  '&:hover': {
    backgroundColor: variant === 'contained' ? theme.white.main : '',
    color: theme.palette.secondary.main,
    border: variant === 'contained' ? `1px solid ${theme.palette.secondary.main}` : variant === 'text' ? `1px solid ${theme.palette.secondary.main}` : 'none',
  },
}));

export default function CustomButton(props: ButtonProps) {
  return <StyledButton
    variant={props.variant}
    color={props.color}
    size={props.size}
    onClick={props.onClick}
    width={props.width}
  >
    {props.children}
  </StyledButton>;
}


