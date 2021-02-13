import { r, helpers } from '@react-hyper/react-hyper';
import styles from './Docs.style';
import Page from '../../components/Page/Page';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';
import docs from '../../../../../../documents/docs.md';

const { section, div } = helpers;

const SideBarItems = [
  {
    label: 'Overview',
    items: ['Install'],
  },
];

const ContentSection = section(
  { className: 'section is-flex px-0 is-flex-grow-1 is-flex-shrink-1' },
  [
    div({ className: 'px-5' }, SideBar(SideBarItems)),
    div({
      className: 'is-flex-grow-1 is-flex-shrink-1 px-5 content-section',
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
