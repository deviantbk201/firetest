import { Button } from "@mui/material";
import UpgradeIcon from "@mui/icons-material/Upgrade";
export default function UpdateItemButton({ handler, text }) {
  return (
    <Button variant="contained" startIcon={<UpgradeIcon />} onClick={handler}>
      {text}
    </Button>
  );
}
