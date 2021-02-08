import { r, helpers } from '@react-hyper/react-hyper';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './Code.style';

const { div, span } = helpers;

const Code = ({ children, language, ...rest }: any) =>
  div({ className: 'rh-code-block', ...styles(), ...rest }, [
    r(SyntaxHighlighter, {
      language,
      style: dracula,
      showLineNumbers: true,
      wrapLongLines: true,
      children,
      className: 'is-fullHeight is-fullWidth',
    }),
    span({ className: 'tag is-light is-info is-uppercase' }, language),
  ]);

export default Code;
