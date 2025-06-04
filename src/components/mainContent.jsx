import React from "react";
import { Container, Grid } from "@mui/material";
import { ReportCard } from "./index";

export const MainContent = () => {
  return (
    <Container sx={{ marginTop: "1rem" }}>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12} sm={3}>
          <ReportCard
            title={"Balance Sheet Report"}
            description={"Export the balance Sheet Report"}
            type={"balanceSheet"}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <ReportCard
            title={"Invoice"}
            description={"Generate Invoice"}
            type={"invoice"}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <ReportCard
            title={"Net P&L Report"}
            description={"Export the net profit and loss report"}
            type={"profitNLoss"}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
