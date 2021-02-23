import helpers from '@moraj/react-hyper/helper';

const { footer, div, span, i, a } = helpers;

const Footer = () =>
  footer(
    div([
      span('Website created with'),
      i().class(['lni', 'has-text-danger', 'mx-1', 'lni-heart-filled']),
      span('by '),
      a({ href: '#!' }, 'Morteza Jamali').class('has-text-weight-bold'),
    ]).class(['content', 'has-text-centered'])
  ).class(['footer', 'p-3']);

export default Footer;
