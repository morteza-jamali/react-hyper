import { helpers } from '@react-hyper/react-hyper';
import styles from './Base.style';

const { section } = helpers;

const Base = ({ children }: any) =>
  section({ className: 'section m-0 p-0', ...styles() }, children);

export default Base;
