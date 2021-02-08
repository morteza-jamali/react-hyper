import { helpers } from '@react-hyper/react-hyper';

const { section } = helpers;

const Base = ({ children }: any) =>
  section({ className: 'section m-0 p-0' }, children);

export default Base;
