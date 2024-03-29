import React, { useState, Fragment, useCallback, memo } from "react";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import { navigate } from "gatsby";
import BaseDrawer from "./Drawer/Drawer";
import DrawerButton from "./Drawer/DrawerButton";
import Logo from "./Icons/Logo";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [show, setShow] = useState(false);

  const showDrawer = (f) =>
    typeof f === "boolean" ? setShow(f) : setShow((v) => !v);

  const handleClick = useCallback(
    (link, flag) => (ev) => {
      ev.preventDefault();
      showDrawer(flag);
      navigate(link);
    },
    []
  );

  return (
    <Fragment>
      <Box
        component="header"
        position="fixed"
        width="100%"
        zIndex="tooltip"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={{
          xs: 2.5,
          md: 3.5,
        }}
        px={{
          xs: 2.5,
          md: 4,
        }}
      >
        <MuiLink
          underline="none"
          href="/"
          color="secondary"
          onClick={handleClick("/", false)}
        >
          <Box
            clone
            height={{
              xs: 44,
              md: 50,
            }}
          >
            <Logo />
          </Box>
        </MuiLink>
        <Box display="flex" alignItems="center">
          <ThemeToggle />
          <DrawerButton onClick={showDrawer} />
        </Box>
      </Box>
      <BaseDrawer open={show} onTap={handleClick} />
    </Fragment>
  );
};

export default memo(Header);
