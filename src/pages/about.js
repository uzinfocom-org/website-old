import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SEO from '../components/SEO';
import { useFadeIn } from '../components/Animation/useFadeIn';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [fadeIn, animated] = useFadeIn();
  const { t } = useTranslation();

  return (
    <Fragment>
      <SEO title="About" />
      <Box
        style={fadeIn}
        component={animated.div}
        height="100%"
        display="flex"
        alignItems={{
          xs: 'flex-start',
          md: 'center',
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
                xs: 'h3.fontSize',
                md: 'h1.fontSize',
              }}
              textAlign={{
                xs: 'left',
                md: 'center',
              }}
            >
              {t('helloworld')}
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
                {t('weareuzinfocom')}
              </Typography>
              <Typography gutterBottom>{t('about')}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default About;
