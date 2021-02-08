import { r } from '@react-hyper/react-hyper';
import Page from '../../components/Page/Page';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CodeComparison from '../../components/CodeComparison/CodeComparison';

const jsx = `const apple = <div>This is jsx tag</div>`;
const javascript = `const apple = () => {
  console.log('This is another console log')
}`;

const Home = r(Page, [
  r(NavBar),
  r(Header),
  r(CodeComparison, { jsx, javascript }),
  r(Footer),
]);

export default Home;
