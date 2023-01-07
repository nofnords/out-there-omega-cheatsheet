import { AppBar, Toolbar, Grid } from "@mui/material";

import SearchField from "./SearchField";
import LanguageSelect from "./LanguageSelect";

export default function TopAppbar({ setLanguge, setSearch }) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <SearchField setSearch={setSearch} />
          </Grid>
          <Grid item xs={2}>
            <LanguageSelect setLanguge={setLanguge} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
