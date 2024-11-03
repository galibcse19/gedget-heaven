import Posts from '../Posts';
import Banner from './Banner';

const Home = () => {
    
    return (
        <div className='lg:mx-10'>
            <Banner></Banner>
            <Posts></Posts>
        </div>
    );
};

export default Home;