import { Col } from 'reactstrap';

const Error = ({ errMsg }) => {
    return (
        <Col className='mt-5 text-center'>
            <h4>{errMsg}</h4>
        </Col>
    );
};

export default Error;
