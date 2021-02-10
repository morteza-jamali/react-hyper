import { helpers } from '@react-hyper/react-hyper';

const { img } = helpers;

const Logo = ({ white, ...rest }: any) =>
  img({ src: `assets/logo${white ? 'white' : ''}.svg`, ...rest });

export default Logo;
