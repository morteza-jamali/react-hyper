import r from '@moraj/react-hyper/r';
import helpers from '@moraj/react-hyper/helper';
import Logo from '../Logo/Logo';
import styles from './Header.style';

const { h1, h2, div, p, section, a } = helpers;

const Buttons = div([
  p(
    a(
      {
        href: '/docs',
      },
      'get started'
    ).class([
      'button',
      'is-primary',
      'is-light',
      'has-text-weight-bold',
      'is-capitalized',
    ])
  ).class('control'),
  p(
    a(
      {
        href: '/',
      },
      'Playground'
    ).class(['button', 'is-light', 'has-text-weight-bold', 'is-capitalized'])
  ).class('control'),
]).class(['field', 'is-grouped', 'is-justify-content-center']);

const Text = r([
  h1('React Hyper').class(['title', 'my-6', 'has-text-light', 'is-1']),
  h2('create your react application like a pro 😎').class([
    'subtitle',
    'mb-6',
    'has-text-light',
    'is-capitalized',
  ]),
]);

const Header = () =>
  section(
    { ...styles() },
    div([r(Logo, { white: true }), Text, Buttons]).class([
      'hero-body',
      'is-align-items-center',
      'is-justify-content-center',
      'is-flex-direction-column',
      'is-flex',
    ])
  ).class(['hero', 'is-medium']);

export default Header;
