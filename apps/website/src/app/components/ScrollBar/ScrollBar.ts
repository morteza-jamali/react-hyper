import r from '@moraj/react-hyper/r';
import SimpleBar from 'simplebar-react';
import styles from './ScrollBar.style';

const ScrollBar = ({ children, ...rest }: any) =>
  r(SimpleBar, { ...styles() }, children).class(rest.className ?? '');

export default ScrollBar;
