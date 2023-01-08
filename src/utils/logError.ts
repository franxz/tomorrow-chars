export function logError(error: unknown, message?: string) {
  if (message)
    console.log(
      `%c ⚠️ ${message} `,
      "color: pink; font-weight: bold; background-color: black;"
    );
  console.error(error);
}
