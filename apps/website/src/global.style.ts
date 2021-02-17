import 'bulma/css/bulma.css';
import '@morteza-jamali/lineicons/WebFont/font-css/LineIcons.css';
import 'gfm.css/gfm.css';
import 'simplebar/dist/simplebar.css';
import { css } from 'glamor';

const styles = () => {
  css.insert(`
  html {
    overflow: unset !important;
  }

  .is-fullWidth {
    width: 100%;
  }

  .is-fullHeight {
    height: 100%;
  }

  .is-zIndex-10 {
    z-index: 10;
  }

  .is-zIndex-5 {
    z-index: 5;
  }
`);

  return css({});
};

export default styles;
