import r from '@react-hyper/react-hyper/r';
import helpers from '@react-hyper/react-hyper/helpers';
import styles from './Code.style';
import Icon from '../Icon/Icon';
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
  ).class([
    'tag',
    'is-light',
    'is-primary',
    'is-uppercase',
    'is-clickable',
    'mx-1',
  ]);

const RunButton = ({ sharedState }: any) =>
  ToggleResult({ name: 'angle-double-left', label: 'Run', sharedState });

const BackButton = ({ sharedState }: any) =>
  ToggleResult({ name: 'angle-double-right', label: 'Back', sharedState });

const PlayButton = ({ play }: any) =>
  span(
    a({ href: play }, [r(Icon, { name: 'play' }).class('mr-2'), 'Play'])
  ).class([
    'tag',
    'mx-1',
    'is-clickable',
    'run-code',
    'is-uppercase',
    'is-light',
  ]);

const BottomButtons = ({ play, sharedState }: any) => {
  const child: any[] = [
    r(sharedState.resultState.displayResult ? BackButton : RunButton, {
      sharedState,
    }),
  ];

  if (play) {
    child.push(r(PlayButton, { play }));
  }

  return div(child).class(['bottom-buttons', 'is-zIndex-10']);
};

const LanguageLabel = ({ language, result_language, sharedState }: any) =>
  span(
    result_language
      ? sharedState.resultState.displayResult
        ? result_language
        : language
      : language
  ).class(['tag', 'is-zIndex-10', 'is-uppercase', 'is-info', 'is-light']);

const SyntaxHighlighter = ({ language, children, hasBottomButtons }: any) =>
  r(PrismSyntaxHighlighter, {
    language,
    style: dracula,
    showLineNumbers: true,
    children,
  }).class([
    'is-fullHeight',
    'is-fullWidth',
    hasBottomButtons ? 'has-bottom-buttons' : '',
  ]);

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

  if (result) {
    const [displayResult, showResult] = useState(false);
    const resultState = { displayResult, showResult };

    Object.assign(sharedState, { resultState });

    child.push(
      r(ResultCode, { result, result_language, sharedState }),
      r(BottomButtons, { play, sharedState })
    );
  }

  child.push(
    r(SyntaxHighlighter, { language, children, hasBottomButtons: result }),
    r(LanguageLabel, { language, result_language, sharedState })
  );

  return div({ ...styles(), ...rest }, child).class('rh-code-block');
};

export default Code;
