import helpers from '@react-hyper/react-hyper/helpers';

const { footer, div, span, i, a } = helpers;

const Footer = () =>
  footer(
    { className: 'footer p-3' },
    div({ className: 'content has-text-centered' }, [
      span('Website created with'),
      i({
        className: 'lni lni-heart-filled mx-1 has-text-danger',
      }),
      span('by '),
      a({ className: 'has-text-weight-bold', href: '#!' }, 'Morteza Jamali'),
    ])
  );

export default Footer;
