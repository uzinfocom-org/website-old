import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { animated, useTrail, config } from "react-spring";
import AnimatedText from "../AnimatedText";

const links = [
  {
    text: "Asosiy",
    to: "/",
  },
  {
    text: "Guruhimiz",
    to: "/about",
  },
  {
    text: "Loyihalar",
    to: "/projects",
  },
  {
    text: "Yangiliklar",
    to: "/blog",
  },
  {
    text: "Bog'lanish",
    to: "/contact",
  },
  {
    text: "Xinux",
    to: "https://xinux.uz/",
  },
];

export default ({ open, onTap }) => {
  const trails = useTrail(links.length, {
    config: config.stiff,
    from: {
      opacity: 0,
      xy: [-50, -200],
    },
    to: {
      opacity: open ? 1 : 0,
      xy: open ? [0, 0] : [-50, -200],
    },
  });

  return trails.map(({ xy, opacity }, $i) => {
    const curr = links[$i];
    return (
      <Box
        key={curr.text}
        component={animated.div}
        fontWeight="fontWeightBold"
        lineHeight={1}
        my={2}
        color="text.primary"
        fontSize={{
          xs: "h3.fontSize",
          md: "h2.fontSize",
        }}
        className="text-uppercase"
        style={{
          opacity: opacity.to([0, 0.7, 1], [0, 0.3, 1]),
          transform: xy.to((_x, _y) => `translate3d(${_x}%,${_y}px,0)`),
        }}
      >
        {curr.text === "Xinux" ? (
          <Link
            color="inherit"
            underline="none"
            rel="noopener noreferrer"
            href={curr.to}
            target="_blank"
          >
            <AnimatedText text={curr.text} />
          </Link>
        ) : (
          <Link
            color="inherit"
            underline="none"
            onClick={onTap(curr.to)}
            data-href={curr.to}
            href={curr.to}
          >
            <AnimatedText text={curr.text} />
          </Link>
        )}
      </Box>
    );
  });
};
