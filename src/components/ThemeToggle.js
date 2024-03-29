import React, { useMemo, useCallback } from "react";
import IconButton from "@mui/material/IconButton";
import DarkIcon from "@mui/icons-material/Brightness2TwoTone";
import LightIcon from "@mui/icons-material/FlareRounded";
import Box from "@mui/material/Box";
import { useThemeDispatch, useThemeContext } from "./ThemeContext";
import { useToggleAnimation } from "./Animation/useToggleAnimation";

const ThemeToggle = () => {
  const { paletteType } = useThemeContext();
  const dispatch = useThemeDispatch();

  const isDark = useMemo(() => paletteType === "dark", [paletteType]);
  const changeTheme = useCallback(() => {
    dispatch({ type: isDark ? "light" : "dark" });
  }, [isDark, dispatch]);

  const [transition, animated] = useToggleAnimation(isDark);

  return (
    <Box
      position="relative"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      p={2}
    >
      {transition.map(({ item, __, props }) => {
        return item ? (
          <IconButton
            key="light-toggle-icon"
            component={animated.button}
            style={props}
            onClick={changeTheme}
            size="small"
            color="inherit"
          >
            <LightIcon />
          </IconButton>
        ) : (
          <IconButton
            key="dark-toggle-icon"
            component={animated.button}
            style={props}
            onClick={changeTheme}
            size="small"
            color="inherit"
          >
            <DarkIcon />
          </IconButton>
        );
      })}
    </Box>
  );
};

export default ThemeToggle;
