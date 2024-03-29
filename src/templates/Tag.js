import React, { Fragment } from "react";
import { graphql } from "gatsby";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SEO from "../components/SEO";
import Bar from "../components/Bar";
import BlogCards from "../components/BlogCards";
// import NavigationLink from "../components/NavigationLink";

export const data = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      count: totalCount
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date
          }
          excerpt(format: PLAIN, pruneLength: 50)
          fields {
            slug
          }
        }
      }
    }
  }
`;

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, count } = data.allMarkdownRemark;

  const tagHeader = `"${tag}" tegi bilan belgilangan ${count} post${
    count === 1 ? "" : "lar"
  } bor`;

  return (
    <Fragment>
      <SEO title={tagHeader} />
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h5" paragraph>
            {tagHeader}
          </Typography>
          <Bar />
          <BlogCards blogs={edges} />
          {/*<NavigationLink text="Hamma Teglar" type="previous" to="/tags" />*/}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Tags;
