import helpers from '@react-hyper/react-hyper/helpers';

const Logo = ({ white, ...rest }: any) =>
  helpers.img({ src: `assets/logo${white ? 'white' : ''}.svg`, ...rest });

export default Logo;
