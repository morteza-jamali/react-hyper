import { css } from 'glamor';

const styles = () =>
  css({
    position: 'relative',
    '&:hover': {
      '& span.tag': {
        opacity: '0.5',
        transition: 'all 0.3s',
      },
    },
    '& span.tag': {
      position: 'absolute',
      top: '5px',
      right: '5px',
    },
  });

export default styles;
