import { helpers } from '@react-hyper/react-hyper';

const { div } = helpers;

const Page = ({ children, className, ...rest }: any) =>
  div(
    {
      className: `container is-fullhd ${className ?? ''}`.trimRight(),
      ...rest,
    },
    children
  );

export default Page;
