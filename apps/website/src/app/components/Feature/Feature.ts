import helpers from '@react-hyper/react-hyper/helpers';
import r from '@react-hyper/react-hyper/r';
import Code from '../Code/Code';

const { section, article, div, span, i } = helpers;

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
    { className: 'section' },
    div({ className: 'columns' }, [
      div({ className: 'column' }, [
        article({ className: 'message is-link box p-0' }, [
          div(
            { className: 'message-header p-5' },
            span({ className: 'is-flex is-align-items-center' }, [
              i({ className: `lni lni-${icon} lni-32 mr-3` }),
              title,
            ])
          ),
          div({ className: 'message-body' }, content),
        ]),
      ]),
      div(
        { className: 'column' },
        r(Code, {
          language,
          children: code,
          result,
          result_language,
          play,
          className: 'is-fullHeight m-0 box p-0',
        })
      ),
    ])
  );

export default Feature;
