import helpers from '@moraj/react-hyper/helper';

const Logo = ({ white, ...rest }: any) =>
  helpers.img({ src: `assets/logo${white ? 'white' : ''}.svg`, ...rest });

export default Logo;
