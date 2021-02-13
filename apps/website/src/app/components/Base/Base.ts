import { helpers } from '@react-hyper/react-hyper';

const { section } = helpers;

const Base = ({ children, ...rest }: any) =>
  section({ className: 'section m-0 p-0', ...rest }, children);

export default Base;
