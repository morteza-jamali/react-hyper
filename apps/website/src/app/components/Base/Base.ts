import helpers from '@react-hyper/react-hyper/helpers';

const Base = ({ children, ...rest }: any) =>
  helpers.section({ className: 'section m-0 p-0', ...rest }, children);

export default Base;
