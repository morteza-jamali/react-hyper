import helpers from '@moraj/react-hyper/helper';

const Base = ({ children, ...rest }: any) =>
  helpers.section({ ...rest }, children).class(['section', 'p-0', 'm-0']);

export default Base;
