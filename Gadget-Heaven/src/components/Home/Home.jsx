import { Helmet } from 'react-helmet';
import Posts from '../Posts';
import Banner from './Banner';

const Home = () => {
    
    return (
        <div className='lg:mx-10'>
            <Helmet>
                <title>Gadget Heaven | Home</title>
            </Helmet>
            <Banner></Banner>
            <Posts></Posts>
        </div>
    );
};

export default Home;