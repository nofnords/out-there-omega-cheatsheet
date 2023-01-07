import { Grid, Typography } from "@mui/material";

import Outcome from "./Outcome";

export default function Result({ outcomes }) {
  if (outcomes === undefined || outcomes === null) {
    return (
      <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
        (Nothing)
      </Typography>
    );
  }
  return (
    <Grid sx={{ pl: 2 }}>
      {outcomes.map((outcome, index) => (
        <Outcome
          key={index + outcome.action + ":" + outcome.key + ":" + outcome.value}
          item={outcome}
        />
      ))}
    </Grid>
  );
}
