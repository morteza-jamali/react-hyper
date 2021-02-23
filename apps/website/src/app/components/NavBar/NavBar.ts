import r from '@moraj/react-hyper/r';
import helpers from '@moraj/react-hyper/helper';
import Logo from '../Logo/Logo';
import styles from './NavBar.style';

const { a, div, nav, span, section, i } = helpers;

const NavBarBurger = a(
  {
    role: 'button',
    'aria-label': 'menu',
    'aria-expanded': 'false',
    'data-target': 'navbarBasicExample',
  },
  span({ 'aria-hidden': 'true' }).repeat(3)
).class('navbar-burger');

const NavBarBrand = a(
  {
    href: '/',
  },
  [
    r(Logo).class(['is-fullHeight', 'mr-3']),
    span('React Hyper').class('is-flex-shrink-0'),
  ]
).class(['navbar-item', 'p-0', 'has-text-weight-bold']);

const NavBarEnd = div([
  a('Playground').class('navbar-item'),
  a({ href: '/docs' }, 'Docs').class('navbar-item'),
  div(
    div([
      a([
        span(i().class(['lni', 'lni-github-original'])).class('icon'),
        span('Github'),
      ]).class('button'),
    ]).class('buttons')
  ).class('navbar-item'),
]).class('navbar-end');

const NavBar = () =>
  div(
    { ...styles() },
    section(
      nav(
        {
          role: 'navigation',
          'aria-label': 'main navigation',
        },
        [
          div([NavBarBrand, NavBarBurger]).class('navbar-brand'),
          div({ id: 'navbarBasicExample' }, NavBarEnd).class('navbar-menu'),
        ]
      ).class('navbar')
    ).class(['section', 'py-0'])
  ).class(['is-fullWidth', 'is-zIndex-10']);

export default NavBar;
