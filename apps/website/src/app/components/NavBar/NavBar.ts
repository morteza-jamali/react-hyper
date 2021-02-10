import { r, helpers } from '@react-hyper/react-hyper';
import Logo from '../Logo/Logo';
import styles from './NavBar.style';

const { a, div, nav, span, section, i } = helpers;

const NavBarBurger = a(
  {
    className: 'navbar-burger',
    role: 'button',
    'aria-label': 'menu',
    'aria-expanded': 'false',
    'data-target': 'navbarBasicExample',
  },
  [Array(3).forEach(() => span({ 'aria-hidden': 'true' }))]
);

const NavBarBrand = a(
  {
    className: 'navbar-item p-0 has-text-weight-bold',
    href: 'https://bulma.io',
  },
  [
    r(Logo, {
      className: 'is-fullHeight mr-3',
    }),
    span({ className: 'is-flex-shrink-0' }, 'React Hyper'),
  ]
);

const NavBarEnd = div({ className: 'navbar-end' }, [
  a({ className: 'navbar-item' }, 'Playground'),
  a({ className: 'navbar-item' }, 'Docs'),
  div(
    { className: 'navbar-item' },
    div({ className: 'buttons' }, [
      a({ className: 'button' }, [
        span(
          { className: 'icon' },
          i({ className: 'lni lni-github-original' })
        ),
        span('Github'),
      ]),
    ])
  ),
]);

const NavBar = () =>
  section(
    { className: 'section py-0', ...styles() },
    nav(
      {
        className: 'navbar',
        role: 'navigation',
        'aria-label': 'main navigation',
      },
      [
        div({ className: 'navbar-brand' }, [NavBarBrand, NavBarBurger]),
        div({ className: 'navbar-menu', id: 'navbarBasicExample' }, NavBarEnd),
      ]
    )
  );

export default NavBar;
