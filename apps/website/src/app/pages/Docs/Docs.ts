import r from '@moraj/react-hyper/r';
import helpers from '@moraj/react-hyper/helper';
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

const ContentSection = section([
  div(SideBar(SideBarItems)).class('px-5'),
  div({
    dangerouslySetInnerHTML: { __html: docs },
  }).class('is-flex-grow-1', 'markdown-body', 'px-5', 'is-flex-shrink-1'),
]).class([
  'section',
  'content-section',
  'is-flex-shrink-1',
  'is-flex-grow-1',
  'px-0',
  'is-flex',
]);

const Docs = () =>
  r(Page, { ...styles() }, [r(NavBar), ContentSection, r(Footer)]).class([
    'is-flex',
    'is-flex-direction-column',
  ]);

export default Docs;
