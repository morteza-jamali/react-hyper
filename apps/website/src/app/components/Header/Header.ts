import { helpers } from '@react-hyper/react-hyper';
import styles from './Header.style';

const { header } = helpers;

const Header = () => header({ ...styles() }, 'This is header');

export default Header;
