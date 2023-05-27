import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";

// ==========================================================================================================\
// ============================================================================================

// =================================================================================>

export default function BasicTable({ data }) {
  return (
    <TableContainer component={Paper} sx={{ height: "80vh" }}>
      <Table sx={{ maxWidth: "80vw" }} stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow sx={{ fontWeight: "700" }}>
            <TableCell align="left">Item No.</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Price&nbsp;(USD)</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              hover
              selected
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                {row.rating ? row.rating.rate : "none"}
              </TableCell>
              <TableCell align="right">
                <Avatar
                  sx={{
                    "&:hover": { transform: "scale(1.6)", objectFit: "cover" },
                    width: "100%",
                    height: "100%",
                    display: "block",
                  }}
                  varient="square"
                  src={row.image}
                  alt={`${row.titles}'s photo`}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
