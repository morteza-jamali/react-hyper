import { r, helpers } from '@react-hyper/react-hyper';
import Code from '../Code/Code';

const { div, section } = helpers;

const CodeComparison = ({ jsx, javascript }: any) =>
  section(
    { className: 'section' },
    div({ className: 'columns' }, [
      div(
        { className: 'column' },
        r(Code, {
          language: 'jsx',
          children: jsx,
          className: 'is-fullHeight m-0',
        })
      ),
      div(
        { className: 'column' },
        r(Code, {
          language: 'javascript',
          children: javascript,
          className: 'is-fullHeight m-0',
        })
      ),
    ])
  );

export default CodeComparison;
