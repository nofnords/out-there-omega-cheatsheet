import { Box, Paper, Typography } from "@mui/material";

import Choice from "./Choice";
import events from "./data/adventures.json";

export default function EventCards({ searchTerm, language }) {
  const i18nText = (text, language) => {
    const { [language]: textBody } = text;
    return textBody;
  };

  return (
    <Box sx={{ mt: "5rem" }}>
      {events
        .filter((item) => {
          const { [language]: textBody } = item.text;
          return textBody.toLowerCase().includes(searchTerm.toLowerCase());
        })
        .map((item) => (
          <Paper key={item.id} elevation={4} sx={{ p: 1, m: 1 }}>
            <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
              Event {item.id}
            </Typography>
            <Box sx={{ p: 1, m: 1 }}>
              <Typography variant="subtitle1">Text:</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ whiteSpace: "pre-line", pl: 2 }}
              >
                {i18nText(item.text, language)}
              </Typography>
              <Typography variant="subtitle1">Choices:</Typography>
              <Box>
                {item.choices.map((choice) => (
                  <Choice
                    key={choice.button.en}
                    item={choice}
                    language={language}
                  />
                ))}
              </Box>
            </Box>
          </Paper>
        ))}
    </Box>
  );
}
