import r from '@moraj/react-hyper/r';
import helpers from '@moraj/react-hyper/helper';
import styles from './Code.style';
import Icon from '../Icon/Icon';
import ScrollBar from '../ScrollBar/ScrollBar';
import { takeRight, head } from 'lodash';
import { useState } from 'react';
import { Prism as PrismSyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const { div, span, a } = helpers;

const ToggleResult = ({ name, label, sharedState }: any) =>
  span(
    {
      onClick: () =>
        sharedState.resultState.showResult(
          !sharedState.resultState.displayResult
        ),
    },
    [r(Icon, { name }).class('mr-2'), label]
  ).class(['tag', 'is-warning', 'is-uppercase', 'is-clickable', 'mx-1']);

const RunButton = ({ sharedState }: any) =>
  ToggleResult({ name: 'angle-double-left', label: 'Result', sharedState });

const BackButton = ({ sharedState }: any) =>
  ToggleResult({ name: 'angle-double-right', label: 'Back', sharedState });

const PlayButton = ({ play }: any) =>
  span(
    a({ href: play }, [r(Icon, { name: 'play' }).class('mr-2'), 'Play']).class(
      'has-text-white'
    )
  ).class(['tag', 'mx-1', 'is-clickable', 'is-uppercase', 'is-info']);

const BottomButtons = ({ play, sharedState }: any) => {
  const child: any[] = [
    r(sharedState.resultState.displayResult ? BackButton : RunButton, {
      sharedState,
    }),
  ];

  if (play) {
    child.push(r(PlayButton, { play }));
  }

  return div(child).class(['bottom-buttons', 'p-3', 'has-text-right']);
};

const LanguageLabel = ({ language, result_language, sharedState }: any) =>
  div(
    span(
      result_language
        ? sharedState.resultState.displayResult
          ? result_language
          : language
        : language
    ).class(['tag', 'is-zIndex-10', 'is-uppercase', 'has-text-light'])
  ).class(['top-label', 'p-3', 'has-text-right']);

const SyntaxHighlighter = ({ language, children, hasBottomButtons }: any) =>
  r(
    ScrollBar,
    r(PrismSyntaxHighlighter, {
      language,
      style: dracula,
      showLineNumbers: true,
      children,
    }).class([hasBottomButtons ? 'has-bottom-buttons' : ''])
  ).class(['is-fullHeight', 'is-fullWidth']);

const ResultCode = ({ result, result_language, sharedState }: any) =>
  div(
    r(SyntaxHighlighter, {
      language: result_language,
      children: result,
      hasBottomButtons: true,
    })
  ).class([
    'result-code',
    'is-zIndex-5',
    sharedState.resultState.displayResult ? '' : 'is-invisible',
  ]);

const Code = ({
  children,
  language,
  result,
  play,
  result_language,
  ...rest
}: any) => {
  const sharedState = {};
  const child: any[] = [];
  const codeChild: any[] = [];
  let sortedChildArray: any[] = [];

  if (result) {
    const [displayResult, showResult] = useState(false);
    const resultState = { displayResult, showResult };

    Object.assign(sharedState, { resultState });

    child.push(r(BottomButtons, { play, sharedState }));
    codeChild.push(r(ResultCode, { result, result_language, sharedState }));
  }

  child.push(r(LanguageLabel, { language, result_language, sharedState }));
  codeChild.push(
    r(SyntaxHighlighter, { language, children, hasBottomButtons: result })
  );

  child.push(
    div(codeChild).class(['code-section', 'is-flex-grow-1', 'is-flex-shrink-1'])
  );

  sortedChildArray = child;

  if (child.length === 3) {
    sortedChildArray = takeRight(child, 2);
    sortedChildArray.push(head(child));
  }

  return div({ ...styles(), ...rest }, sortedChildArray).class([
    'rh-code-block',
    'is-flex',
    'is-flex-direction-column',
  ]);
};

export default Code;
