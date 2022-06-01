import React, { Fragment, useMemo } from "react";

import SEO from "../components/SEO";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import useSiteMetadata from "../hooks/useSiteMetadata";
import { useFadeIn } from "../components/Animation/useFadeIn";
import TwitterLogo from "../components/Icons/TwitterIcon";
import GithubLogo from "../components/Icons/GithubIcon";
import TelegramIcon from "../components/Icons/TelegramIcon";
import MailIcon from "../components/Icons/MailIcon";

const Contact = () => {
  const { social } = useSiteMetadata();
  const [fadeIn, animated] = useFadeIn();

  const socialLinks = useMemo(
    () => [
      {
        url: `https://twitter.com/${social.twitter}`,
        text: "twitter",
        icon: TwitterLogo
      },
      {
        url: `https://github.com/${social.github}`,
        text: "github",
        icon: GithubLogo
      },
      // {
      //   url: `https://t.me/${social.telegram}`,
      //   text: "telegram",
      //   icon: TelegramIcon
      // }
    ],
    [social]
  );

  return (
    <Fragment>
      <SEO title="Contact" />
      <Box
        style={fadeIn}
        component={animated.div}
        height="100%"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box mb={8}>
          <Typography variant="h5" paragraph>
            Bizni shu yerdan qidiring...
          </Typography>
          {socialLinks.map(link => (
            <Box key={link.text} mb={2} display="flex" alignItems="center">
              <MuiLink
                href={link.url}
                color="textPrimary"
                target="_blank"
                rel="noopener noreferrer"
                variant="body1"
              >
                {link.text}
              </MuiLink>
              <Box clone ml={1}>
                <link.icon fontSize="small" />
              </Box>
            </Box>
          ))}
          <Typography align="center" paragraph>
            -- yoki --
          </Typography>
          <Typography paragraph variant="h5">
            Shu yerga emaylingizni yollang...
          </Typography>
          <Box mb={2} display="flex" alignItems="center">
            <MuiLink
              href={`mailto:${social.email}`}
              variant="body1"
              color="textPrimary"
            >
              {social.email}
            </MuiLink>
            <Box clone ml={1}>
              <MailIcon fontSize="small" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Contact;
