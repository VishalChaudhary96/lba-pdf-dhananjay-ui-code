import React from "react";
import { Typography, Paper } from "@mui/material";

export const Header = () => {
  return (
    <header className="App-header">
      <Paper
        elevation={1}
        sx={{
          borderTop: "1px solid  rgb(229, 231, 235)", // Top border
          borderBottom: "1px solid  rgb(229, 231, 235)", // Bottom border
          padding: { xs: "1rem", md: "1rem" },
          textAlign: { xs: "center" },
        }}
      >
        <Typography
          variant="h4"
          margin={{
            xs: "0 0 0 0.5rem",
            sm: "0 1rem 0 1rem",
          }}
          sx={{
            fontWeight: "bold",
          }}
        >
          Reports
        </Typography>
        <Typography
          variant="p"
          margin={{
            xs: "0 0 0 0.5rem",
            sm: "0 0 0 1rem",
          }}
          sx={{
            xs: {
              fontSize: "0.1rem",
            },
          }}
        >
          Easily manage reports for your customers.
        </Typography>
      </Paper>
    </header>
  );
};
