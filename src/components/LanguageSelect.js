import { styled, alpha } from "@mui/material/styles";
import { MenuItem, Select, FormControl } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const Language = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
}));

const LanguageIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

export default function LanguageSelect({ setLanguge }) {
  return (
    <Language>
      <LanguageIconWrapper>
        <LanguageIcon />
      </LanguageIconWrapper>
      <FormControl fullWidth>
        <StyledSelect
          defaultValue={"en"}
          onChange={(e) => setLanguge(e.target.value)}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"pt"}>Portuguese</MenuItem>
          <MenuItem value={"fr"}>French</MenuItem>
          <MenuItem value={"de"}>German</MenuItem>
          <MenuItem value={"es"}>Spanish</MenuItem>
          <MenuItem value={"ru"}>Russian</MenuItem>
          <MenuItem value={"cn"}>Chinese</MenuItem>
        </StyledSelect>
      </FormControl>
    </Language>
  );
}
