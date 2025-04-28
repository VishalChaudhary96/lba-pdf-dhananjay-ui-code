import React from "react";
import { Typography, Paper } from "@mui/material";

export const Header = () => {
  return (
    <header className="App-header">
      <Paper
        elevation={1}
        sx={{
          padding: "0 1rem 1rem 1rem",
          borderTop: "1px solid  rgb(229, 231, 235)", // Top border
          borderBottom: "1px solid  rgb(229, 231, 235)", // Bottom border
        }}
      >
        <Typography
          variant="h4"
          sx={{ margin: "1rem 1rem 0 1rem", fontWeight: "bold" }}
        >
          Report
        </Typography>
        <Typography variant="p" sx={{ margin: "0 1rem" }}>
          Easily manage reports for your customers.
        </Typography>
      </Paper>
    </header>
  );
};
