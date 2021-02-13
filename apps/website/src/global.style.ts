import 'bulma/css/bulma.css';
import '@morteza-jamali/lineicons/WebFont/font-css/LineIcons.css';
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
`);

  return css({});
};

export default styles;
