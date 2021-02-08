import { helpers } from '@react-hyper/react-hyper';

const { footer, div, p } = helpers;

const Footer = () =>
  footer(
    { className: 'footer' },
    div({ className: 'content has-text-centered' }, p('This is a testing text'))
  );

export default Footer;
