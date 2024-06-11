import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser, loginUser, selectToken, logoutUser } from './userSlice';
import {
    Modal,
    ModalHeader, 
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import defaultAvatar from '../../app/assets/img/kitten.png';
import { validateUserLoginForm } from '../../utils/validateUserLoginForm';

const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    const handleLogin = async (values) => {
        try {
            const currentUser = {
                username: values.username,
                password: values.password,
                avatar: defaultAvatar
            }
            await dispatch(loginUser(values)).unwrap();
            dispatch(setCurrentUser(currentUser));
            setLoginModalOpen(false);
        } catch (error) {
            console.error('Failed to login: ', error);
        }
    }

    const handleLogout = async () => {
        try {
            dispatch(logoutUser());
            setLogoutModalOpen(false);
        } catch (error) {
            console.log(error)
        }
    };

    console.log('Token: ', token)
    console.log('Current User:', currentUser);

    return (
        <>
            <span className='navbar-text ml-auto'>
                {currentUser ? (
                    <Button 
                        className="d-flex align-items-center" 
                        style={{ width: '3rem', height: '3rem', padding: 0, borderRadius: 100 }}
                        onClick={() => setLogoutModalOpen(true)}
                    >
                            <img 
                                src={currentUser.avatar}
                                alt='user'
                                style={{ width: '100%', height: '100%', borderRadius: '100%'}}
                            />
                    </Button>
                ) : (
                    <Button 
                        onClick={() => setLoginModalOpen(true)}
                        style={{ color: 'gray', fontSize: "15px" }}
                        color='light'
                        size='sm'
                    >
                        <i className='fa fa-sign-in fa-lg' /> Login
                    </Button>
                )}
            </span>

            <Modal isOpen={logoutModalOpen}>
                <ModalHeader toggle={() => (setLogoutModalOpen(false))}>Logout</ModalHeader>
                <ModalBody>You sure you want to logout?</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleLogout}>
                        Yes
                    </Button>{' '}
                </ModalFooter>
            </Modal>

            <Modal isOpen={loginModalOpen}>
                <ModalHeader toggle={() => (setLoginModalOpen(false))}>Login</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        onSubmit={handleLogin}
                        validate={validateUserLoginForm}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Field 
                                    id='username'
                                    name='username'
                                    placeholder='Username'
                                    className='form-control'
                                />
                                <ErrorMessage name='username'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Field 
                                    id='password'
                                    name='password'
                                    placeholder='Password'
                                    type='password'
                                    className='form-control'
                                />
                                <ErrorMessage name='password'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button type='submit' color='primary'>Login</Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default UserLoginForm;
