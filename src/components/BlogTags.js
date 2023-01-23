import React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { Link } from "gatsby";
import { kebabCase } from "../utils/string.utils";

const BlogTags = ({ tags = [] }) => {
  let tagList = null;

  if (tags) {
    tagList = tags.map((tag, $i) => {
      return (
        <Box key={$i} clone m={0.5}>
          <Chip
            component={Link}
            to={`/tags/${kebabCase(tag)}`}
            size="small"
            label={`#${kebabCase(tag)}`}
            clickable
          />
        </Box>
      );
    });
  }

  return (
    <Box py={2.5}>
      <Typography gutterBottom variant="body2">
        Mavzular:
      </Typography>
      {tagList}
    </Box>
  );
};

export default BlogTags;
