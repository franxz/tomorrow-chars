import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Header from "./Header";

type LayoutProps = {
  children?: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Box>
      <Header />
      <Box p={3}>{children}</Box>
    </Box>
  );
}
