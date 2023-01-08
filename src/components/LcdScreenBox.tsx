import { ReactNode } from "react";
import { Box, useTheme } from "@mui/material";
import { BoxProps } from "@mui/material/Box";

export type LcdScreenBoxTheme = {
  LcdScreenBox: {
    color: string;
    bgColor: string;
  };
};

type LcdScreenBoxProps = {
  children: ReactNode;
} & BoxProps;

export default function LcdScreenBox({ children, ...rest }: LcdScreenBoxProps) {
  const theme = useTheme();
  const { color, bgColor } = theme.myComponents.LcdScreenBox;

  return (
    <Box color={color} bgcolor={bgColor} p={1} pl={1.5} {...rest}>
      {children}
    </Box>
  );
}
