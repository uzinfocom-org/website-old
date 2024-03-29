import React, { memo } from "react";
import Typography from "@mui/material/Typography";
import DateIcon from "@mui/icons-material/DateRangeTwoTone";
import Box from "@mui/material/Box";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const DateFormat = ({ date }) => {
  const formatted = new Date(date).toLocaleDateString("en-US", options);

  return (
    <Box display="flex" alignItems="center" mr={1}>
      <Box mr={0.5} lineHeight={1}>
        <DateIcon fontSize="small" />
      </Box>
      <Typography variant="caption">{formatted}</Typography>
    </Box>
  );
};

export default memo(DateFormat);
