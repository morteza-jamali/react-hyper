import helpers from '@moraj/react-hyper/helper';

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
