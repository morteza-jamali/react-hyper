import helpers from '@react-hyper/react-hyper/helpers';

const Icon = ({ name, ...rest }: any) =>
  helpers.i().class(['lni', `lni-${name}`, rest.className ?? '']);

export default Icon;
