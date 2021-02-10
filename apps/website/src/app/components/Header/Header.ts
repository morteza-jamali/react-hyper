import { r, helpers } from '@react-hyper/react-hyper';
import Logo from '../Logo/Logo';
import styles from './Header.style';

const { h1, h2, button, div, p, section } = helpers;

const Header = () =>
  section(
    { className: 'hero', ...styles() },
    div(
      {
        className:
          'hero-body is-flex is-flex-direction-column is-justify-content-center is-align-items-center',
      },
      [
        r(Logo, { white: true }),
        h1({ className: 'title is-1 has-text-light my-6' }, 'React Hyper'),
        h2(
          { className: 'subtitle is-capitalized has-text-light mb-6' },
          'create your react application like a pro 😎'
        ),
        div({ className: 'field is-grouped is-justify-content-center' }, [
          p(
            { className: 'control' },
            button(
              {
                className:
                  'button is-primary is-light is-capitalized has-text-weight-bold',
              },
              'get started'
            )
          ),
          p(
            { className: 'control' },
            button(
              {
                className:
                  'button is-light is-capitalized has-text-weight-bold',
              },
              'Playground'
            )
          ),
        ]),
      ]
    )
  );

export default Header;
