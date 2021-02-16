import helpers from '@react-hyper/react-hyper/helpers';

const Icon = ({ name, ...rest }: any) =>
  helpers.i({
    className: `lni lni-${name} ${rest.className ?? ''}`.trimRight(),
  });

export default Icon;
