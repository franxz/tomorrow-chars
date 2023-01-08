import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledCharButton = styled(Button)<ButtonProps>({
  width: 64,
  height: 64,
  fontSize: "1.5rem",
  textTransform: "none",
});

export default function CharButton(props: ButtonProps): JSX.Element {
  return (
    <StyledCharButton
      variant="contained"
      color="primary"
      size="large"
      {...props}
    />
  );
}
