import { r } from '@react-hyper/react-hyper';
import styles from './Home.style';
import Page from '../../components/Page/Page';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';

const Home = r(Page, { ...styles() }, [r(NavBar), r(Header)]);

export default Home;
