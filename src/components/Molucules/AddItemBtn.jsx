import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddItemButton({ handler, text }) {
  return (
    <Button variant="contained" startIcon={<AddIcon />} onClick={handler}>
      {text}
    </Button>
  );
}
