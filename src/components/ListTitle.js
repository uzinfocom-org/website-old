import React, { memo } from "react";
import Box from "@mui/material/Box";

const ListTitle = ({ children, ...props }) => {
  return (
    <Box
      fontSize={{
        xs: "h6.fontSize",
        md: "h5.fontSize",
      }}
      color="primary.main"
      fontWeight="fontWeightBold"
      {...props}
    >
      {children}
    </Box>
  );
};

export default memo(ListTitle);
