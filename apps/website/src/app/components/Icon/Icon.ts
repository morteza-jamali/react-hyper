import helpers from '@moraj/react-hyper/helper';

const Icon = ({ name, ...rest }: any) =>
  helpers.i().class(['lni', `lni-${name}`, rest.className ?? '']);

export default Icon;
