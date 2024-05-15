import { Col, Row, Container } from 'reactstrap';
import TrendingGames from '../features/trending/TrendingGames';
import FeaturedEvents from '../features/events/FeaturedEvents';
import { useSpring, animated } from 'react-spring';

const HomePage = () => {

    const animatedStyle = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 } // Specify the duration (in milliseconds),
    });

    return (
        <>
            <div className='homepage-background p-5'>
                <animated.div style={animatedStyle}>
                    <h2 style={{ fontSize: '2.5rem', textShadow: '1px 1px 1px white' }}>Welcome to</h2>
                    <h1 style={{ fontSize: '4rem', color: '#fff', textShadow: '1px 1px 1px black' }}>The Boardgame Shelf</h1>
                </animated.div>
            </div>
            <div style={{ backgroundColor: '#891652', textShadow: '1px 1px 1px black' }}>
                <Container className='py-5'>
                    <Row>
                        <Col className='p-4'>
                            <h1 style={{ color: '#fff' }}>Trending Games</h1>
                            <p style={{ color: '#fff', fontSize: '1.2rem' }} className='mt-3'>These games not only push the boundaries of their respective genres but also offer engaging experiences that keep players returning for more. Whether you're exploring dark fantasy landscapes, surviving in dystopian environments, or battling in tactical shootouts, each game presents a unique adventure.</p>
                        </Col>
                        <Col className='p-4'>
                            <TrendingGames />
                        </Col>
                    </Row>                    
                </Container>
            </div>
            <div className='featured-events-background'>
                <Container className='py-5'>
                    <FeaturedEvents />
                </Container>
            </div>
        </>
    );
};

export default HomePage;