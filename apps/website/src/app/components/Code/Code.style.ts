import { css } from 'glamor';

const styles = () =>
  css({
    position: 'relative',
    borderRadius: '0 !important',
    '& .bottom-buttons, & .top-label': {
      background: '#36394a',
    },
    '& .top-label': {
      borderTopLeftRadius: '0.3em',
      borderTopRightRadius: '0.3em',
      '& .tag': {
        background: 'transparent',
      },
    },
    '& .bottom-buttons': {
      borderBottomLeftRadius: '0.3em',
      borderBottomRightRadius: '0.3em',
    },
    '& .result-code': {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    },
    '& pre': {
      overflow: 'hidden !important',
      display: 'inline-block',
      margin: '0 !important',
      minWidth: '100%',
      minHeight: '100%',
      float: 'left',
      borderRadius: '0 !important',
    },
    '& .code-section': {
      position: 'relative',
    },
  });

export default styles;
