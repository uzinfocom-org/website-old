import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { Link } from "gatsby";
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
          md: "center"
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
                md: "h1.fontSize"
              }}
              textAlign={{
                xs: "left",
                md: "center"
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
                md: 8
              }}
            />
          </Grid>
          <Grid item xs={12} md>
            <Box
              pb={{
                xs: 5,
                md: 0
              }}
              pr={{
                md: 4
              }}
            >
              <Typography variant="h5" gutterBottom>
                Biz Xinux Jamiyatimiz!
              </Typography>
              <Typography gutterBottom>
                Avvalambor shuni aytib o'tiz joizki, bu jamiyat yaralishidan maqsad bu Linux ni{" "}
                <span role="img" aria-labelledby="uzbekistan">
                  🇺🇿
                </span>{" "}
                O'zbekistonda keng miqyosda rivojlantirish va undan foydalanishni hammaga o'rgatishdir.{" "}
                <span role="img" aria-labelledby="geek">
                  🤓
                </span>{" "}
                Bizning jamiyatimiz hamma Linux va uning distributlarini qamrab olgan hisoblanib Linuxdagi hamma ma'lumotlar{" "}
                <span role="img" aria-label="information">
                  📝
                </span>
                , yechimlar va ulardagi foydalanish usuliyu sirlarini bo'lishishga va ularni boshqalar bilan birgalikda o'rganib chiqishga qaratilgan.{" "}
              </Typography>
              <Typography>
                Xinux jamiyati UwUssimo tomonidan yaratilgan hisoblanib, Xinux jamiyati O'zbekistondagi Linuxga bo'lgan munosabatlarni yaxshilashni ko'zlagan. Masalan, Linux paketlarini{" "}
                <span role="img" aria-labelledby="web">
                  🕸
                </span>{" "}
                yuklash O'zbekistondagi ichki tarmoqlar orqali amalga oshirish imkoniyatlari{" "}
                <span role="img" aria-labelledby="robot">
                  🤖
                </span>{" "}
                yoki O'zbekcha tarjimayu O'zbek tiliga moslangan interfeys ko'tarib olib chiqish va uni rivojlantirishni ham o'z ichiga oladi.{" "}
                <span role="img" aria-labelledby="snake">
                  🐍
                </span>
                . Biz bilan birgalikda bo'ling va bizni ushbu{" "}
                <MuiLink
                  component={Link}
                  to="/blog"
                  underline="always"
                  color="textPrimary"
                >
                  blogimizda
                </MuiLink>{" "}
                kuzatib boring. Biz bilan birgalikda ushbu jamiya va linux{" "}
                <span role="img" aria-labelledby="ladybug">
                  🐞
                </span>{" "}
                ni rivojlantiring{" "}
                <span role="img" aria-labelledby="virus">
                  👾
                </span>
                .
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default About;
