import { Typography } from "@mui/material";

export default function Outcome({ item }) {
  const goodOutcome = new Set(["get", "learn", "heal"]);
  const badOutcome = new Set(["hit", "forget", "destroy", "lose", "break"]);
  const neutralOutcome = new Set(["warp"]);

  const formatedOutcome = (item) => {
    let outcomeColor = "text.disabled";
    if (goodOutcome.has(item.action)) {
      outcomeColor = "success.main";
    } else if (badOutcome.has(item.action)) {
      outcomeColor = "error.main";
    } else if (neutralOutcome.has(item.action)) {
      outcomeColor = "text.warning";
    }

    return (
      <Typography variant="body2" sx={{ color: outcomeColor }}>
        {item.action} {item.key} {item.value}
      </Typography>
    );
  };

  return <>{formatedOutcome(item)}</>;
}
