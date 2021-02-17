import r from '@react-hyper/react-hyper/r';
import helpers from '@react-hyper/react-hyper/helpers';
import Code from '../Code/Code';

const { div, section } = helpers;

const CodeComparison = ({ children }: any) =>
  section(
    div([
      div()
        .class('column')
        .loop(
          children.map(({ language, code }) => ({
            children: r(Code, {
              language,
              children: code,
            }).class(['is-fullHeight', 'm-0']),
          }))
        ),
    ]).class('columns')
  ).class('section');

export default CodeComparison;
