import { Grid, Typography } from "@mui/material";

import Result from "./Results";

export default function Choice({ item, language }) {
  const i18nText = (text, language) => {
    const { [language]: textBody } = text;
    return textBody;
  };

  return (
    <Grid sx={{ pl: 2 }}>
      <Typography variant="subtitle2">
        {i18nText(item.button, language)}
        {item.condition === null ? "" : " [" + item.condition.value + "]"}
      </Typography>
      <Result outcomes={item.result} />
    </Grid>
  );
}
