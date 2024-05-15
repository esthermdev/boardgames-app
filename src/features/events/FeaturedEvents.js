import { useSelector } from 'react-redux';
import { selectEventsByFeatured } from './eventsSlice';
import { Card, CardBody, CardSubtitle, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

const FeaturedEvents = () => {
    const featuredEvents = useSelector(selectEventsByFeatured);

    return(
        <>
        <h1 style={{ color: '#fff', textShadow: '1px 1px 1px black' }} className='text-center'>Featured Events</h1>
            <Card className='m-5'>
                <ListGroup>
                    {featuredEvents.map((event) => (
                        <ListGroupItem key={event.id} className='d-flex align-items-start'>
                            <img alt='Card cap' src={event.image} width='100px' height='100px' style={{margin: '20px'}}/>
                            <CardBody>
                                <CardTitle tag='h5'>{event.name}</CardTitle>
                                <CardSubtitle className='mb-2 text-muted' tag='h6'>{event.dates}</CardSubtitle>
                                <CardSubtitle className='mb-2 text-muted' tag='p'>{event.description}</CardSubtitle>
                            </CardBody>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Card>
        </>
    );
}

export default FeaturedEvents;