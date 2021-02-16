import helpers from '@react-hyper/react-hyper/helpers';

const Page = ({ children, className, ...rest }: any) =>
  helpers.div(
    {
      className: `container is-fullhd ${className ?? ''}`.trimRight(),
      ...rest,
    },
    children
  );

export default Page;
