import { Box, Paper, Stack, Typography } from "@mui/material";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { STRINGS } from "../constants";
import LcdScreenBox from "./LcdScreenBox";

export default function Header(): JSX.Element {
  return (
    <Paper square>
      <Box p={2} pl={3} maxWidth={400}>
        <LcdScreenBox>
          <Stack direction="row" alignItems="center" spacing={1}>
            <KeyboardIcon />
            <Typography component="h1" variant="h5" fontWeight={500}>
              {STRINGS["header.title"]}
            </Typography>
          </Stack>
        </LcdScreenBox>
      </Box>
    </Paper>
  );
}
