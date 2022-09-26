import React from 'react';
import Box from '@material-ui/core/Box';
import { animated } from 'react-spring';

import useSiteMetadata from '../../hooks/useSiteMetadata';
import { useTranslation } from 'react-i18next';
const Title = (props) => {
  const { t } = useTranslation();
  return (
    <Box display="flex" alignItems="center" component={animated.div} {...props}>
      <Box
        width={{
          xs: 30,
          md: 50,
        }}
        height={3}
        bgcolor="text.primary"
        mr={2}
        borderRadius="borderRadius"
      />
      <Box
        fontSize={{
          xs: 'body1.fontSize',
          sm: 'h5.fontSize',
          md: 'h4.fontSize',
        }}
        lineHeight={1}
        letterSpacing={1}
      >
        {t('tagline')}
      </Box>
    </Box>
  );
};

export default Title;
