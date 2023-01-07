import { useTransition, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import EventCards from "./components/EventCards";
import TopAppbar from "./components/TopAppbar";

function App() {
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("en");

  const setSearch = (term) => {
    startTransition(() => {
      setSearchTerm(term);
    });
  };

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopAppbar setLanguge={setLanguage} setSearch={setSearch} />
        {/* <SearchAppBar setSearch={setSearch} /> */}
        <EventCards
          searchTerm={searchTerm}
          language={language}
          isPending={isPending}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
