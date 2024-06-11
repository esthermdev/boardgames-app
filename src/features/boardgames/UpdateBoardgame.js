import { useState } from 'react';
import { Row, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label } from 'reactstrap';
import { 
    Formik, 
    Field, 
    Form
} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateBoardgameThunk } from './gamesSlice';
import { selectToken } from '../user/userSlice';

const UpdateBoardgame = ({ game }) => {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const toggle = () => setModal(!modal);

    const { 
        id, 
        name, 
        category, 
        rating, 
        players, 
        duration,
        complexity, 
        description } = game;

    const initialValues = {
        category: category || '',
        rating: rating || '',
        players: players || '',
        duration: duration || '',
        complexity: complexity || '',
        description: description || ''
    };

    const handleSubmit = (values) => {
        const updatedBoardgame = {
            category: values.category,
            rating: parseInt(values.rating),
            players: values.players,
            duration: values.duration,
            complexity: values.complexity,
            description: values.description
        };
        console.log(updatedBoardgame);
        dispatch(updateBoardgameThunk({ boardgameId: id, boardgame: updatedBoardgame, token }));
        toggle();
    };

    return (
        <>
            <Button color='info' onClick={toggle}>
                <i class="fa-solid fa-pencil"/>
                {' '}Edit Details 
            </Button>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Modal size='lg' isOpen={modal} toggle={toggle}>
                    <Form>
                        <ModalHeader toggle={toggle}>{name}</ModalHeader>
                        <ModalBody>
                            <Row>
                                <FormGroup>
                                    <Label htmlFor='category'>Category</Label>
                                    <Field name="category" type="text" className="form-control" placeholder='e.g. Strategy' />
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup>
                                    <Label htmlFor="duration">Duration</Label>
                                    <Field name="duration" type="text" className="form-control" placeholder='e.g. 30-60 minutes'/>
                                </FormGroup>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label htmlFor="rating">Rating</Label>
                                        <Field name="rating" type="text" className="form-control" placeholder='/ 10' />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label htmlFor='players'>No. of Players</Label>
                                        <Field name='players' type='text' className='form-control' placeholder='e.g. 1-3' />
                                    </FormGroup>                                    
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label htmlFor="complexity">Complexity</Label>
                                        <Field name="complexity" as='select' className="form-control" placeholder='e.g. 30-60 minutes'>
                                            <option value='' label='Select level'/>
                                            <option value='Easy' label='Easy'/>
                                            <option value='Medium' label='Medium'/>
                                            <option value='Hard' label='Hard'/>
                                            <option value='Very Hard' label='Very Hard'/>
                                        </Field>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <FormGroup>
                                    <Label htmlFor='description'>Description</Label>
                                    <Field 
                                        name='description'
                                        type='textarea'
                                        bsSize='sm'
                                        placeholder='Type here'
                                        rows='4'
                                        as={Input}
                                    />
                                </FormGroup>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button type='submit' color='primary'>Save</Button>
                            <Button onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </Formik>
        </>
    );
}

export default UpdateBoardgame;