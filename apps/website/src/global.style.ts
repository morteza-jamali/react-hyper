import 'bulma/css/bulma.css';
import { css } from 'glamor';

const styles = () => {
  css.global('html', {
    overflowY: 'visible !important',
  });

  return css({});
};

export default styles;
