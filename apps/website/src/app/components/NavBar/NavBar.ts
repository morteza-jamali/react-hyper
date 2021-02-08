import { helpers } from '@react-hyper/react-hyper';

const { a, div, nav, img, span } = helpers;

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
  { className: 'navbar-item', href: 'https://bulma.io' },
  img({
    src: 'https://bulma.io/images/bulma-logo.png',
    width: '112',
    height: '28',
  })
);

const NavBarStart = div({ className: 'navbar-start' }, [
  a({ className: 'navbar-item' }, 'Home'),
  a({ className: 'navbar-item' }, 'Documentation'),
]);

const NavBarEnd = div(
  { className: 'navbar-end' },
  div(
    { className: 'navbar-item' },
    div({ className: 'buttons' }, [
      a({ className: 'button is-primary' }, 'Sign up'),
      a({ className: 'button is-light' }, 'Login'),
    ])
  )
);

const NavBar = () =>
  nav(
    {
      className: 'navbar',
      role: 'navigation',
      'aria-label': 'main navigation',
    },
    [
      div({ className: 'navbar-brand' }, [NavBarBrand, NavBarBurger]),
      div({ className: 'navbar-menu', id: 'navbarBasicExample' }, [
        NavBarStart,
        NavBarEnd,
      ]),
    ]
  );

export default NavBar;
