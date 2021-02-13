import { css } from 'glamor';

const styles = () =>
  css({
    position: 'fixed !important',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    '& .content-section': {
      borderLeft: '1px solid #eeeeee',
    },
  });

export default styles;
