import { css } from 'glamor';
import theme from '../../theme/theme';

const styles = () =>
  css({
    backgroundColor: theme.brand.dark,
    '& img': {
      width: '15%',
    },
  });

export default styles;
