import helpers from '@moraj/react-hyper/helper';
import r from '@moraj/react-hyper/r';
import Code from '../Code/Code';

const { section, article, div, span, i } = helpers;

const Description = ({ icon, title, content }: any) =>
  article([
    div(
      span([i().class(['lni', `lni-${icon}`, 'lni-32', 'mr-3']), title]).class([
        'is-flex',
        'is-align-items-center',
      ])
    ).class(['message-header', 'p-5']),
    div(content).class('message-body'),
  ]).class(['message', 'p-0', 'box', 'is-link']);

const CodeBox = ({ language, code, result, result_language, play }: any) =>
  r(Code, {
    language,
    children: code,
    result,
    result_language,
    play,
  }).class(['is-fullHeight', 'p-0', 'box', 'm-0']);

const Feature = ({
  language,
  code,
  title,
  content,
  icon,
  play,
  result,
  result_language,
}: any) =>
  section(
    div([
      div([r(Description, { icon, title, content })]).class('column'),
      div([
        r(CodeBox, { language, code, play, result, result_language }),
      ]).class('column'),
    ]).class('columns')
  ).class('section');

export default Feature;
