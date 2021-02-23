import { css } from 'glamor';

const styles = () =>
  css({
    '& .simplebar-scrollbar::before': {
      background: '#eeeeee',
    },
    '& .simplebar-content, & .simplebar-offset, & .simplebar-content-wrapper': {
      width: '100% !important',
      height: '100% !important',
    },
  });

export default styles;
