import { css } from 'glamor';

const styles = () =>
  css({
    position: 'relative',
    '& .result-code': {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    },
    '& pre': {
      margin: '0 !important',
      '&.has-bottom-buttons': {
        paddingBottom: '4em !important',
      },
    },
    '&:hover': {
      '& span.tag:not(.bottom-buttons span)': {
        opacity: '0.5',
        transition: 'all 0.3s',
      },
    },
    '& span.tag:not(.bottom-buttons span)': {
      position: 'absolute',
      top: '5px',
      right: '5px',
    },
    '& div.bottom-buttons': {
      position: 'absolute',
      bottom: '5px',
      right: '5px',
    },
  });

export default styles;
