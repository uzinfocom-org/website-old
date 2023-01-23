import React, { memo } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SandGlassIcon from "./Icons/SandGlassIcon";

const TimeToRead = ({ time }) => {
  return (
    <Box display="flex" alignItems="center" mr={1}>
      <Box mr={0.5} lineHeight={1}>
        <SandGlassIcon fontSize="small" />
      </Box>
      <Typography variant="caption">{time} daqiqada o'qiladi</Typography>
    </Box>
  );
};

export default memo(TimeToRead);
