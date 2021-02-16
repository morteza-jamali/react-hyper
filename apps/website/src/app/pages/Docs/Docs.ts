import r from '@react-hyper/react-hyper/r';
import helpers from '@react-hyper/react-hyper/helpers';
import Page from '@websiteComponents/Page/Page';
import NavBar from '@websiteComponents/NavBar/NavBar';
import Footer from '@websiteComponents/Footer/Footer';
import SideBar from '@websiteComponents/SideBar/SideBar';
import docs from '@projectRoot/documents/docs.md';
import styles from './Docs.style';

const { section, div } = helpers;

const SideBarItems = [
  {
    label: 'Getting Started',
    items: ['Introduction', 'Install', 'Examples', 'Development'],
  },
  {
    label: 'API',
    items: ['r()', 'helper()'],
  },
];

const ContentSection = section(
  {
    className:
      'section is-flex px-0 is-flex-grow-1 is-flex-shrink-1 content-section',
  },
  [
    div({ className: 'px-5' }, SideBar(SideBarItems)),
    div({
      className: 'is-flex-grow-1 is-flex-shrink-1 px-5 markdown-body',
      dangerouslySetInnerHTML: { __html: docs },
    }),
  ]
);

const Docs = () =>
  r(Page, { className: 'is-flex is-flex-direction-column', ...styles() }, [
    r(NavBar),
    ContentSection,
    r(Footer),
  ]);

export default Docs;
