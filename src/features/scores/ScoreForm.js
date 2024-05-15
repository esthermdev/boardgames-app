import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Col, Container } from 'reactstrap';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { addScore } from './scoresSlice';
import { validateScoreForm } from '../../utils/validateScoreForm'

const ScoreForm = ({ gameId }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const score = {
            date: values.date,
            gameId: parseInt(gameId),
            playerScores: values.playerScores
        };

        dispatch(addScore(score));
        setModalOpen(false);
    }

    return (
        <>
            <Container className='text-center'>
                <Button outline style={{ marginTop: '20px' }} onClick={() => {setModalOpen(true)}}>
                    <FontAwesomeIcon icon={faPenToSquare} /> Add Score
                </Button>
            </Container>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => {setModalOpen(false)}}>Add Score</ModalHeader>
                <ModalBody>
                    <Formik 
                        initialValues={{
                            date: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
                            playerScores: [
                                { name: '', score: '' }
                            ]
                        }}
                        onSubmit={handleSubmit}
                        validate={validateScoreForm}
                    >
                        <Form>
                            <FormGroup row>
                                <Label for='date'>Date</Label>
                                <Col>
                                    <Field 
                                        type='date'
                                        name='date'
                                        className='form-control'
                                    />
                                </Col>
                            </FormGroup>

                            <FieldArray name='playerScores'>
                                    {({ remove, push, form }) => (
                                        <div>
                                            {form.values.playerScores.length > 0 && form.values.playerScores.map((player, index) => (
                                                <div key={index}>
                                                    <div className='d-flex justify-content-between'>
                                                        <FormGroup>
                                                            <Label htmlFor={`playerScores.${index}.name`}>Name</Label>
                                                            <Field name={`playerScores.${index}.name`} type='text' placeholder='e.g. John Doe' className='form-control'/>
                                                            <ErrorMessage name={`playerScores.${index}.name`} component="div" className="text-danger" />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label htmlFor={`playerScores.${index}.score`}>Score</Label>
                                                            <Field name={`playerScores.${index}.score`} type='number' placeholder='e.g. 42' className='form-control'/>
                                                            <ErrorMessage name={`playerScores.${index}.score`} component="div" className="text-danger" />
                                                        </FormGroup>                                                       
                                                    </div>
                                                    <div className="d-flex justify-content-end my-2">
                                                        <Button type='button' size='sm' className='mx-2' onClick={() => push({ name: '', score: '' })}>Add Player</Button>
                                                        <Button type='button' size='sm' className='btn btn-danger'  onClick={() => { if (index > 0) remove(index) }}>Remove</Button>
                                                    </div>
                                                </div>
                                            ))}
                                        
                                        </div>
                                    )}
                            </FieldArray>

                            <Button type='submit' style={{ display: 'block', marginRight: 'auto' }} color='btn btn-primary'>Submit</Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
}

export default ScoreForm;