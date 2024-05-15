import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Container,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Row
} from 'reactstrap';
import { selectAllTrendingGames } from './trendingSlice';

const TrendingGames = () => {
    const trendingGames = useSelector(selectAllTrendingGames);

    const [hotGames, setHotGames] = useState([])
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const topGames = trendingGames.filter(game => game.rank <= 5);
        setHotGames(topGames)
    }, [trendingGames]);
    
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === hotGames.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? hotGames.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }


    const slides = hotGames.map((game, index) => {

        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <img src={game.thumbnail} alt={game.name} style={{ width: '200px'}}/>
            </CarouselItem>
        );
    });



    return (
        <Container>
            <Row>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    ride="carousel"
                    style={{
                        width: '600px',
                        height: '280px',
                        margin: 'auto',
                        background: 'linear-gradient(to top, #EABE6C 30%, #FFEDD8 100%)',
                        padding: '20px',
                        textAlign: 'center',
                        boxShadow: '7px 7px 7px 0px rgba(0, 0, 0, 0.4)'
                    }}
                >
                    <CarouselIndicators 
                        items={hotGames.map((game, index) => ({ id: index }))}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                    />

                    {slides}
                    
                    <CarouselControl 
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                    />
                    <CarouselControl 
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                    />
                </Carousel>
            </Row>
            
        </Container>
    );

}

export default TrendingGames;