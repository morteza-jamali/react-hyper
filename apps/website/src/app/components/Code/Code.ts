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
      className:
        'tag is-light is-primary is-uppercase run-code is-clickable mx-1',
      onClick: () =>
        sharedState.resultState.showResult(
          !sharedState.resultState.displayResult
        ),
    },
    [r(Icon, { name, className: 'mr-2' }), label]
  );

const RunButton = ({ sharedState }: any) =>
  ToggleResult({ name: 'angle-double-left', label: 'Run', sharedState });

const BackButton = ({ sharedState }: any) =>
  ToggleResult({ name: 'angle-double-right', label: 'Back', sharedState });

const PlayButton = ({ play }: any) =>
  span(
    {
      className: 'tag is-light is-uppercase run-code is-clickable mx-1',
    },
    a({ href: play }, [r(Icon, { name: 'play', className: 'mr-2' }), 'Play'])
  );

const BottomButtons = ({ play, sharedState }: any) => {
  const child: any[] = [
    r(sharedState.resultState.displayResult ? BackButton : RunButton, {
      sharedState,
    }),
  ];

  if (play) {
    child.push(r(PlayButton, { play }));
  }

  return div({ className: 'bottom-buttons is-zIndex-10' }, child);
};

const LanguageLabel = ({ language, result_language, sharedState }: any) =>
  span(
    { className: 'tag is-light is-info is-uppercase is-zIndex-10' },
    result_language
      ? sharedState.resultState.displayResult
        ? result_language
        : language
      : language
  );

const SyntaxHighlighter = ({ language, children, hasBottomButtons }: any) =>
  r(PrismSyntaxHighlighter, {
    language,
    style: dracula,
    showLineNumbers: true,
    children,
    className: `is-fullHeight is-fullWidth ${
      hasBottomButtons ? 'has-bottom-buttons' : ''
    }`.trimRight(),
  });

const ResultCode = ({ result, result_language, sharedState }: any) =>
  div(
    {
      className: `result-code is-zIndex-5 ${
        sharedState.resultState.displayResult ? '' : 'is-invisible'
      }`.trimRight(),
    },
    r(SyntaxHighlighter, { language: result_language, children: result })
  );

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

  return div({ className: 'rh-code-block', ...styles(), ...rest }, child);
};

export default Code;
