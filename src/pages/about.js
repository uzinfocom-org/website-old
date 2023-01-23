import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SEO from "../components/SEO";
import { useFadeIn } from "../components/Animation/useFadeIn";

const About = () => {
  const [fadeIn, animated] = useFadeIn();

  return (
    <Fragment>
      <SEO title="About" />
      <Box
        style={fadeIn}
        component={animated.div}
        height="100%"
        display="flex"
        alignItems={{
          xs: "flex-start",
          md: "center",
        }}
        pb={{ xs: 0, lg: 3 }}
      >
        <Grid container alignItems="center">
          <Grid item xs={12} md={5}>
            <Box
              component="p"
              lineHeight={1}
              m={0}
              fontSize={{
                xs: "h3.fontSize",
                md: "h1.fontSize",
              }}
              textAlign={{
                xs: "left",
                md: "center",
              }}
            >
              Salom Dunyo
            </Box>
          </Grid>
          <Grid item>
            <Box
              height={{ xs: 2, md: 200 }}
              width={{ xs: 100, md: 2 }}
              bgcolor="text.primary"
              borderRadius="borderRadius"
              my={3}
              mr={{
                md: 8,
              }}
            />
          </Grid>
          <Grid item xs={12} md>
            <Box
              pb={{
                xs: 5,
                md: 0,
              }}
              pr={{
                md: 4,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Biz Uzinfocom Open Source Jamiyatimiz!
              </Typography>
              <Typography gutterBottom>
                Avvalambor shuni aytib o'tish joizki, bu jamiyat yaralishidan
                maqsad bu Open Source ni{" "}
                <span role="img" aria-labelledby="uzbekistan">
                  🇺🇿
                </span>{" "}
                O'zbekistonda keng miqyosda rivojlantirish va unga hammani o'z
                hissasini qo'shishga chorlashdir.{" "}
                <span role="img" aria-labelledby="geek">
                  🤓
                </span>{" "}
                Bizning jamiyatimiz hamma yo'nalishlarni qamrab olgan hisoblanib{" "}
                <span role="img" aria-label="information">
                  📝
                </span>
                , o'zbek open source ni qayta tiriltirish, uni sayqallash va
                rivojlantirishga o'z e'tiborini qaratadi.{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default About;
