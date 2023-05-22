import { Avatar } from "@mui/material";

export default function ProfilePic({ alt, src }) {
  return <Avatar alt={alt} src={src} sx={{ width: 50, height: 50 }} />;
}
