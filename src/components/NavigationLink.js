import React from "react";
import { Link } from "gatsby";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import PreviousIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import NextIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const NavigationLink = ({ text, type, to, ...props }) => {
  return (
    <Box
      clone
      display="flex"
      alignItems="center"
      lineHeight={1}
      fontWeight="fontWeightBold"
      {...props}
    >
      <MuiLink component={Link} to={`/blog/${to}`} color="textPrimary">
        {type === "previous" && <PreviousIcon />}
        {text}
        {type === "next" && <NextIcon />}
      </MuiLink>
    </Box>
  );
};

export default NavigationLink;
