import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function BasicAppBar({ children }) {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "4rem" }}>
      <AppBar position="static">
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Box>
  );
}
