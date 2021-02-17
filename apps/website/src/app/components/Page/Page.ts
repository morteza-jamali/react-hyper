import helpers from '@react-hyper/react-hyper/helpers';

const Page = ({ children, className, ...rest }: any) =>
  helpers
    .div(
      {
        ...rest,
      },
      children
    )
    .class(['container', 'is-fullhd', className ?? '']);

export default Page;
