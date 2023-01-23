import React from "react";
import Box from "@mui/material/Box";
import { animated } from "react-spring";

const Im = (props) => {
  return (
    <Box
      className="text-uppercase"
      component={animated.div}
      fontSize={{
        xs: "h5.fontSize",
        sm: "h4.fontSize",
        md: "h3.fontSize",
      }}
      lineHeight={1}
      mb={3}
      letterSpacing={{
        sm: 1,
      }}
      {...props}
    >
      Biz
    </Box>
  );
};

export default Im;
