import { css } from 'glamor';
import theme from '../../theme/theme';

const styles = () =>
  css({
    position: 'fixed',
    top: '0',
    background: 'white',
    '& .navbar-brand': {
      '& img': {
        maxHeight: '2.5rem',
      },
      '& a:hover': {
        color: theme.brand.light,
      },
    },
  });

export default styles;
