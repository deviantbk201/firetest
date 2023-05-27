import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";

export default function DeleteItemButton({ handler, text }) {
  return (
    <Button variant="contained" startIcon={<RemoveIcon />} onClick={handler}>
      {text}
    </Button>
  );
}
