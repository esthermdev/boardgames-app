import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Col, Container } from 'reactstrap';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { addScore } from './scoresSlice';
import { validateScoreForm } from '../../utils/validateScoreForm'

const ScoreForm = ({ gameId, gameType, scoringType }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const score = {
            date: values.date,
            gameId: gameId,
            gameType: gameType,
            scoringType: scoringType,
            playerScores: values.playerScores,
            teamScores: values.teamScores
        };
        dispatch(addScore(score));
        setModalOpen(false);
    };

    return (
        <>
            <Container className='text-center'>
                <Button outline style={{ marginTop: '15px' }} onClick={() => {setModalOpen(true)}}>
                    <FontAwesomeIcon icon={faPenToSquare} /> Add Score
                </Button>
            </Container>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => {setModalOpen(false)}}>Add Score</ModalHeader>
                <ModalBody>
                    <Formik 
                        initialValues={{
                            date: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
                            playerScores: [{ name: '', score: '', result: '' }],
                            teamScores: [{ team: '', score: '', result: '' }]
                        }}
                        onSubmit={handleSubmit}
                        validate={(values) => validateScoreForm(values, gameType, scoringType)}
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

                            {gameType === 'individual' && scoringType === 'points' && (
                                <FieldArray name='playerScores'>
                                    {({ remove, push, form }) => (
                                        <div>
                                            {form.values.playerScores.length > 0 && form.values.playerScores.map((player, index) => (
                                                <div key={index} className='d-flex'>
                                                    <FormGroup className='flex-grow-1'>
                                                        <Label htmlFor={`playerScores.${index}.name`}>Player Name</Label>
                                                        <Field name={`playerScores.${index}.name`} type='text' placeholder='e.g. John Doe' className='form-control'/>
                                                        <ErrorMessage name={`playerScores.${index}.name`} component='div' className="text-danger" />
                                                    </FormGroup>
                                                    <FormGroup className='mx-2'>
                                                        <Label htmlFor={`playerScores.${index}.score`}>Player Score</Label>
                                                        <Field name={`playerScores.${index}.score`} type='number' placeholder='e.g. 42' className='form-control'/>
                                                        <ErrorMessage name={`playerScores.${index}.score`} component='div' className="text-danger" />
                                                    </FormGroup>
                                                    <Button type='button' onClick={() => { if (index > 0) remove(index) }} size='sm' className='btn-danger align-self-center'>-</Button>                                   
                                                </div>
                                            ))}
                                            <div className='d-flex justify-content-end'>
                                                <Button type='button' size='sm' onClick={() => push({ name: '', score: '' })}>Add Player</Button>
                                            </div>
                                        </div>
                                    )}
                                </FieldArray>
                            )}
                            
                            {gameType === 'individual' && scoringType === 'win-lose-draw' && (
                                <FieldArray name='playerScores'>
                                    {({ remove, push, form }) => (
                                        <div>
                                            {form.values.playerScores.map((player, index) => (
                                                <div key={index} className='d-flex'>
                                                    <FormGroup className='flex-grow-1'>
                                                        <Label htmlFor={`playerScores.${index}.name`}>Player Name</Label>
                                                        <Field name={`playerScores.${index}.name`} type='text' placeholder='e.g. John Doe' className='form-control'/>
                                                        <ErrorMessage name={`playerScores.${index}.name`} component="div" className="text-danger" />
                                                    </FormGroup>
                                                    <FormGroup className='mx-2'>
                                                        <Label htmlFor={`playerScores.${index}.result`}>Result</Label>
                                                        <Field name={`playerScores.${index}.result`} as='select'  className='form-control'>
                                                            <option value='' disabled>Select a result</option>
                                                            <option value='Win'>Win</option>
                                                            <option value='Lose'>Lose</option>
                                                            <option value='Draw'>Draw</option>
                                                        </Field>
                                                        <ErrorMessage name={`playerScores.${index}.result`} component="div" className="text-danger" />
                                                    </FormGroup>
                                                    <Button type='button' size='sm' className='btn-danger align-self-center' onClick={() => { if (index > 0) remove(index) }}>-</Button>
                                                </div>
                                            ))}
                                            <div className='d-flex justify-content-end'>
                                                <Button type='button' onClick={() => push({ name: '', score: '' })}>Add Player</Button>
                                            </div>
                                        </div>
                                    )}
                                </FieldArray>
                            )}

                            {gameType === 'team' && scoringType === 'points' && (
                                <FieldArray name='teamScores'>
                                    {({ remove, push, form }) => (
                                        <div>
                                            {form.values.teamScores.map((team, index) => (
                                                <div key={index} className='d-flex'>
                                                        <FormGroup className='flex-grow-1'>
                                                            <Label htmlFor={`teamScores.${index}.team`}>Team Name</Label>
                                                            <Field name={`teamScores.${index}.team`} type='text' placeholder='e.g. Team A' className='form-control'/>
                                                            <ErrorMessage name={`teamScores.${index}.team`} component="div" className="text-danger" />
                                                        </FormGroup>
                                                        <FormGroup className='mx-2'>
                                                            <Label htmlFor={`teamScores.${index}.score`}>Team Score</Label>
                                                            <Field name={`teamScores.${index}.score`} type='number' placeholder='e.g. 42' className='form-control'/>
                                                            <ErrorMessage name={`teamScores.${index}.score`} component="div" className="text-danger" />
                                                        </FormGroup>
                                                        <Button type='button' size='sm' className='btn-danger align-self-center' onClick={() => { if (index > 0) remove(index) }}>-</Button>                                                       
                                                    </div>
                                            ))}
                                            <div className='d-flex justify-content-end'>
                                                <Button type='button' size='sm' onClick={() => push({ team: '', score: '' })}>Add Team</Button>
                                            </div>
                                        </div>
                                    )}
                                </FieldArray>
                            )}

                            {gameType === 'team' && scoringType === 'win-lose-draw' && (
                                <FieldArray name='teamScores'>
                                    {({ remove, push, form }) => (
                                        <div>
                                            {form.values.teamScores.map((team, index) => (
                                                <div key={index} className='d-flex'>
                                                        <FormGroup className='flex-grow-1'>
                                                            <Label htmlFor={`teamScores.${index}.team`}>Team Name</Label>
                                                            <Field name={`teamScores.${index}.team`} type='text' placeholder='e.g. Team A' className='form-control'/>
                                                            <ErrorMessage name={`teamScores.${index}.team`} component="div" className="text-danger" />
                                                        </FormGroup>
                                                        <FormGroup className='mx-2'>
                                                            <Label htmlFor={`playerScores.${index}.result`}>Result</Label>
                                                            <Field name={`teamScores.${index}.result`} as='select' className='form-control'>
                                                                <option value='' disabled>Select a result</option>
                                                                <option value='Win'>Win</option>
                                                                <option value='Lose'>Lose</option>
                                                                <option value='Draw'>Draw</option>
                                                            </Field>
                                                            <ErrorMessage name={`teamScores.${index}.result`} component="div" className="text-danger" /> 
                                                        </FormGroup>
                                                        <Button type='button' size='sm' className='btn-danger align-self-center' onClick={() => { if (index > 0) remove(index) }}>-</Button>                                                      
                                                </div>
                                            ))}
                                            <div className="d-flex justify-content-end">
                                                <Button type='button' size='sm' onClick={() => push({ team: '', result: '' })}>Add Team</Button>
                                            </div>
                                        </div>
                                    )}
                                </FieldArray>
                            )}
                            <Button type='submit' style={{ display: 'block', marginRight: 'auto' }} color='primary'>Submit</Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
}

export default ScoreForm;