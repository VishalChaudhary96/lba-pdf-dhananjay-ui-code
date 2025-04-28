import React from "react";
import { Container, Grid } from "@mui/material";
import { ReportCard } from "./index";

export const MainContent = () => {
  return (
    <Container sx={{ margin: "1rem" }}>
      <Grid container spacing={2}>
        {/* First Row */}
        <Grid item xs={6}>
          <ReportCard
            title={"Trips Report"}
            description={"Export the trips report"}
          />
        </Grid>
        <Grid item xs={6}>
          <ReportCard
            title={"Net P&L Report"}
            description={"Export the net profit and loss report"}
          />
        </Grid>

        {/* Second Row */}
        <Grid item xs={6}>
          <ReportCard
            title={"Income Report"}
            description={"Export the income Report"}
          />
        </Grid>
        <Grid item xs={6}>
          <ReportCard
            title={"Expense Report"}
            description={"Export the expense Report"}
          />
        </Grid>
        <Grid item xs={6}>
          <ReportCard
            title={"Balance Sheet Report"}
            description={"Export the balance Sheet Report"}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
