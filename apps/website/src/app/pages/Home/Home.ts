import r from '@react-hyper/react-hyper/r';
import helpers from '@react-hyper/react-hyper/helpers';
import styles from './Home.style';
import Page from '@websiteComponents/Page/Page';
import NavBar from '@websiteComponents/NavBar/NavBar';
import Header from '@websiteComponents/Header/Header';
import Footer from '@websiteComponents/Footer/Footer';
import Feature from '@websiteComponents/Feature/Feature';
import CodeComparison from '@websiteComponents/CodeComparison/CodeComparison';
import dynamicTags from '@projectRoot/examples/dynamic-tags';

const { section, h3 } = helpers;

const jsx = `const apple = <div>This is jsx tag</div>`;
const javascript = `const apple = () => {
  console.log('This is another console log')
}`;

const FeaturesSection = section({ className: 'section features-section' }, [
  h3(
    { className: 'has-text-centered has-text-weight-bold is-size-3' },
    'React Hyper Features'
  ),
  r(Feature, dynamicTags),
]);

const Home = () =>
  r(Page, { ...styles() }, [
    r(NavBar),
    r(Header),
    FeaturesSection,
    r(CodeComparison, { jsx, javascript }),
    r(Footer),
  ]);

export default Home;
