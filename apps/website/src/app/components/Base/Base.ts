import helpers from '@react-hyper/react-hyper/helpers';

const Base = ({ children, ...rest }: any) =>
  helpers.section({ ...rest }, children).class(['section', 'p-0', 'm-0']);

export default Base;
