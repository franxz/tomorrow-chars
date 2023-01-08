import {
  Paper,
  Slide,
  SlideProps,
  Snackbar,
  SnackbarProps,
  Stack,
  Typography,
} from "@mui/material";
import { STRINGS, TOAST_DURATION } from "../constants";
import LcdScreenBox from "./LcdScreenBox";

type CharToastProps = {
  char: string;
  emojis: string;
} & SnackbarProps;

export default function CharToast({
  char,
  emojis,
  open,
  onClose,
  ...rest
}: CharToastProps): JSX.Element {
  return (
    <Snackbar
      open={open}
      autoHideDuration={TOAST_DURATION}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      TransitionComponent={SlideTransition}
      key={char}
      {...rest}
    >
      <Paper square>
        <LcdScreenBox minWidth="300px">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>
              <Typography fontWeight={600} component="span">
                "{char}"
              </Typography>
              {` ${STRINGS["toast.message"]}`}
            </Typography>
            {emojis}
          </Stack>
        </LcdScreenBox>
      </Paper>
    </Snackbar>
  );
}

function SlideTransition(props: SlideProps): JSX.Element {
  return <Slide {...props} direction="up" />;
}
