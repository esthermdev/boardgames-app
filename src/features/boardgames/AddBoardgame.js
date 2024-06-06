import { Container, Row, Col, Input } from 'reactstrap';
import { useState } from 'react';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    FormGroup, 
    Label, 
} from 'reactstrap';
import { 
    Formik, 
    Field, 
    Form,
    FieldArray
} from 'formik';
import { addBoardgame } from './gamesSlice';
import { useDispatch } from 'react-redux';

const AddBoardgame = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const initialValues = {
        duration: '',
        complexity: '',
        image: '',
        players: '',
        name: '',
        rating: '',
        description: '',
        category: '',
        expansions: [''],
        type: '',
        scoring: ''
    }

    const handleSubmit = (values) => {
        const boardgame = {
            name: values.name,
            duration: values.duration,
            complexity: values.complexity,
            rating: parseInt(values.rating),
            players: values.players,
            category: values.category,
            expansions: values.expansions,
            type: values.type,
            scoring: values.scoring,
            description: values.description,
            image: values.image
        };
        dispatch(addBoardgame(boardgame));
        setModalOpen(false);
    };

    return (
        <Container className='d-flex mb-4' onClick={() => setModalOpen(true)}>
            <Row>
                <Button>
                    + Add Boardgame
                </Button>
            </Row>
            <Modal isOpen={modalOpen} >
                <ModalHeader toggle={() => (setModalOpen(false))}>Add Boardgame</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label htmlFor="name">Name</Label>
                                        <Field name="name" type="text" className="form-control" />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label htmlFor="duration">Duration</Label>
                                        <Field name="duration" type="text" className="form-control" placeholder='e.g. 30-60 minutes'/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
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
                            </Row>
                            <Row>
                                <FormGroup>
                                    <Label htmlFor='category'>Category</Label>
                                    <Field name="category" type="text" className="form-control" placeholder='e.g. Strategy' />
                                </FormGroup>
                            </Row>
                            <Row>
                                <Label htmlFor='expansions'>Expansions</Label>
                                <FieldArray 
                                    name='expansions' 
                                    render={arrayHelpers => (
                                        <>
                                        {arrayHelpers.form.values.expansions.map((expansion, index) => (
                                            <Row className='mb-2' key={index}>
                                                <Col className='col-10'>
                                                    <Field
                                                            name={`expansions.${index}`}
                                                            type='text'
                                                            as={Input}
                                                    />
                                                </Col>
                                                <Col>
                                                    <Button onClick={() => arrayHelpers.remove(index)}>-</Button>
                                                </Col>
                                            </Row>
                                        ))}
                                        <Col className='mb-3'>
                                            <Button onClick={() => arrayHelpers.push('')}>+</Button>
                                        </Col>
                                        </>
                                    )}
                                />
                            </Row>
                            <Row>
                                <FormGroup>
                                    <Row><Label htmlFor='type'>Game Type</Label></Row>
                                        <Label htmlFor='type' className='mx-3'>
                                            <Field name="type" type="radio" value="individual" className="form-check-input" />
                                            {' '}Individual
                                        </Label>
                                        <Label htmlFor='type'>
                                            <Field name="type" type="radio" value="team" className="form-check-input" />
                                            {' '}Team
                                        </Label>                                    
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup>
                                    <Row><Label htmlFor='scoring'>Scoring Type</Label></Row>
                                        <Label htmlFor='scoring' className='mx-3'>
                                            <Field name="scoring" type="radio" value="points" className="form-check-input" />
                                            {' '}Points
                                        </Label>
                                        <Label htmlFor='scoring'>
                                            <Field name="scoring" type="radio" value="win-lose-draw" className="form-check-input" />
                                            {' '}Win-Lose-Draw
                                        </Label>                                    
                                </FormGroup>
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
                            <Row>
                                <FormGroup>
                                    <Label htmlFor='image'>Upload Image</Label>
                                    <Field name='image' type='file' as={Input}/>
                                </FormGroup>
                            </Row>
                            <Button type='submit' color='primary'>Add Boardgame</Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </Container>
    );
};

export default AddBoardgame;