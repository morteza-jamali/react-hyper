import { helpers } from '@react-hyper/react-hyper';

const { div } = helpers;

const Page = ({ children, ...rest }: any) =>
  div({ className: 'container is-fullhd', ...rest }, children);

export default Page;
