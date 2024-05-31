import { Col } from 'reactstrap';

const Loading = () => {
    return (
        <Col className='mt-5 text-center'>
            <i className='fa fa-spinner fa-spin fa-3x' />
            <p className='mt-2 fs-2'>Loading...</p>
        </Col>
    );
};

export default Loading;
