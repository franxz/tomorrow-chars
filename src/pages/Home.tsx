import { useState } from "react";
import { Grid } from "@mui/material";
import Layout from "../components/Layout";
import CharButton from "../components/CharButton";
import { CHARS, ERRORS, SUCCESS_EMOJIS } from "../constants";
import CharToast from "../components/CharToast";
import { getRandomElement } from "../utils";
import { useToast } from "../hooks/useToast";
import { logError } from "../utils";

type ToastContent = {
  selectedChar: string;
  successEmojis: string;
};

export default function Home(): JSX.Element {
  const [toastContent, setToastContent] = useState<ToastContent>({
    selectedChar: "",
    successEmojis: getRandomElement(SUCCESS_EMOJIS),
  });
  const [isOpen, openToast, handleClose] = useToast();

  async function handleClick(char: string) {
    try {
      await navigator.clipboard.writeText(char);
      setToastContent({
        selectedChar: char,
        successEmojis: getRandomElement(SUCCESS_EMOJIS),
      });
      openToast();
    } catch (error) {
      logError(error, ERRORS.clipboard);
    }
  }

  return (
    <>
      <Layout>
        <Grid container spacing={2}>
          {CHARS.map((char) => (
            <Grid item>
              <CharButton onClick={() => handleClick(char)}>{char}</CharButton>
            </Grid>
          ))}
        </Grid>
      </Layout>
      <CharToast
        char={toastContent.selectedChar}
        emojis={toastContent.successEmojis}
        open={isOpen}
        onClose={handleClose}
      />
    </>
  );
}
