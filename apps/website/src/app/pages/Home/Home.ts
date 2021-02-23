import r from '@moraj/react-hyper/r';
import helpers from '@moraj/react-hyper/helper';
import styles from './Home.style';
import Page from '@websiteComponents/Page/Page';
import NavBar from '@websiteComponents/NavBar/NavBar';
import Header from '@websiteComponents/Header/Header';
import Footer from '@websiteComponents/Footer/Footer';
import Feature from '@websiteComponents/Feature/Feature';
import CodeComparison from '@websiteComponents/CodeComparison/CodeComparison';
//import dynamicTags from '@projectRoot/examples/dynamicTags';

const { section, h3 } = helpers;

const jsx = `const apple = <div>This is jsx tag</div>`;
const javascript = `const apple = () => {
  console.log('This is another console log')
}`;

/*const FeaturesSection = section([
  h3('React Hyper Features').class([
    'has-text-centered',
    'is-size-3',
    'has-text-weight-bold',
  ]),
  r(Feature, dynamicTags),
]).class(['section', 'features-section']);*/

const Home = () =>
  r(Page, { ...styles() }, [
    r(NavBar),
    r(Header),
    //FeaturesSection,
    r(CodeComparison, [
      { language: 'javascript', code: javascript },
      { language: 'jsx', code: jsx },
    ]),
    r(Footer),
  ]);

export default Home;
