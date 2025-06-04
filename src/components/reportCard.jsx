import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { fetchReport } from "../utils";

export const ReportCard = ({ title, description, type }) => {
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [errors, setErrors] = useState({ from: false, to: false });
  const [hideButton, setHideButton] = useState(false);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const showVehicleNumberInput = type === "profitNLoss" ? true : false;

  const handleDateChange = (e) => {
    const { name, value } = e.target;

    // Reset errors for the field being changed
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));

    setDateRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlevehicleNumberChange = (e) =>
    setVehicleNumber(e.target.value.toUpperCase());

  const validateDates = () => {
    const { from, to } = dateRange;
    let valid = true;

    // Validation for empty fields
    if (!from) {
      setErrors((prev) => ({ ...prev, from: true }));
      valid = false;
    }
    if (!to) {
      setErrors((prev) => ({ ...prev, to: true }));
      valid = false;
    }

    // Validation for logical range
    if (from && to && new Date(from) > new Date(to)) {
      setErrors((prev) => ({ ...prev, to: true }));
      valid = false;
      alert("The 'From' date must be earlier than the 'To' date.");
    }

    return valid;
  };

  const handleSubmit = () => {
    if (validateDates()) {
      setHideButton(true);
      // alert(`Date range selected: From ${dateRange.from} to ${dateRange.to}`);
      switch (title) {
        case "Balance Sheet Report":
          fetchReport(
            "/report/download/balance-sheet",
            dateRange,
            "Balance Sheet Report"
          )
            .then(() => setHideButton(false))
            .catch((error) => console.log("error", error));
          break;
        case "Invoice":
          fetchReport("/report/download/trips", dateRange, "Trips Report").then(
            () =>
              setHideButton(false).catch((error) => console.log("error", error))
          );
          break;
        case "Net P&L Report":
          fetchReport(
            "/report/download/net-profit-n-loss",
            { ...dateRange, vehicleNumber },
            "Net P&L Report"
          )
            .then(() => setHideButton(false))
            .catch((error) => console.log("error", error));
          break;
        default:
          return;
      }
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: {
          xs: "21rem",
          sm: "22rem",
        },
        margin: "auto auto",
        position: "relative",
        minHeight: {
          xs: "20rem",
          sm: "20rem",
          md: "26rem",
        },
      }}
    >
      <CardContent>
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>

        <Box mt={2} mb={4}>
          <Typography variant="body2" color="textPrimary">
            Pick a date range
          </Typography>
          {/* "From" Date */}
          <TextField
            variant="outlined"
            error={errors.from}
            helperText={errors.from ? "Select a valid 'From' date." : ""}
            fullWidth
            label="From"
            type="date"
            name="from"
            value={dateRange.from}
            onChange={handleDateChange}
            margin="normal"
            slotProps={{
              inputLabel: {
                shrink: true, // Prevents overlap with the date value
              },
            }}
          />
          {/* "To" Date */}
          <TextField
            variant="outlined"
            error={errors.to}
            helperText={errors.to ? "Select a valid 'To' date." : ""}
            fullWidth
            label="To"
            type="date"
            name="to"
            value={dateRange.to}
            onChange={handleDateChange}
            margin="normal"
            slotProps={{
              inputLabel: {
                shrink: true, // Prevents overlap with the date value
              },
            }}
          />
          {/* "Vehicle Number" */}
          {showVehicleNumberInput ? (
            <TextField
              variant="outlined"
              fullWidth
              label="Vehicle number"
              type="text"
              name="vehicleNumber"
              value={vehicleNumber}
              onChange={handlevehicleNumberChange}
              margin="normal"
            />
          ) : (
            ""
          )}
        </Box>
        <Button
          disabled={hideButton}
          sx={{
            position: "absolute",
            bottom: "0.7rem", // Positioning from the bottom edge
            right: "1rem", // Positioning from the right edge
          }}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </CardContent>
    </Card>
  );
};
