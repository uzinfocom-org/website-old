import React, { Fragment, memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import ArrayIcon from "@mui/icons-material/PlayArrowTwoTone";
import { Link } from "gatsby";
import CustomFab from "./CustomFab";
import { useFadeIn } from "./Animation/useFadeIn";

const Footer = () => {
  const [fadeIn, animated] = useFadeIn();

  return (
    <Fragment>
      <Box
        style={fadeIn}
        component={animated.header}
        position="fixed"
        bottom={0}
        left={0}
        width="100%"
        display="flex"
        justifyContent="flex-end"
        py={{
          xs: 2.5,
          md: 3.5,
        }}
        px={{
          xs: 2.5,
          md: 4,
        }}
      >
        <Box clone display="flex" alignItems="center">
          <MuiLink component={Link} to="/blog" color="textPrimary">
            <Box lineHeight={1} px={1}>
              <Typography variant="body2">So'ngi yangiliklar</Typography>
            </Box>
            <CustomFab size="small">
              <ArrayIcon color="primary" fontSize="small" />
            </CustomFab>
          </MuiLink>
        </Box>
      </Box>
    </Fragment>
  );
};

export default memo(Footer);
