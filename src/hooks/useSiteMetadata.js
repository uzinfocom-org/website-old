import { useStaticQuery, graphql } from "gatsby";

function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          author
          title
          description
          social {
            github
            telegram
            email
            discord
          }
        }
      }
    }
  `);

  return site.siteMetadata;
}

export default useSiteMetadata;
