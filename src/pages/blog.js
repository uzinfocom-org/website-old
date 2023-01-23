import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SEO from "../components/SEO";
import useBlogs from "../hooks/useBlogs";
import Bar from "../components/Bar";
import { useFadeIn } from "../components/Animation/useFadeIn";
import BlogCards from "../components/BlogCards";

const Blog = () => {
  const blogs = useBlogs();

  const [fadeIn, animated] = useFadeIn();

  return (
    <Fragment>
      <SEO title="Blog" />
      <Box clone pb={6}>
        <Grid
          style={fadeIn}
          component={animated.div}
          container
          justify="center"
        >
          <Grid item xs={12} sm={8} md={6}>
            <Typography variant="h3" paragraph>
              So'ngi Uzinfocom Open Source dagi habarlar
            </Typography>
            <Bar />
            <BlogCards blogs={blogs} />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Blog;
