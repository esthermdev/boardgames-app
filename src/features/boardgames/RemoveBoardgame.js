import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllBoardgames, removeBoardgameThunk } from './gamesSlice';
import { selectToken } from '../user/userSlice';

const RemoveBoardgame = () => {
    const boardgames = useSelector(selectAllBoardgames);
    const token = useSelector(selectToken);
    const [modal, setModal] = useState(false);

    const handleRemove = (selectedBoardgameId) => {
        dispatch(removeBoardgameThunk({ boardgameId: selectedBoardgameId, token }));
    };

    const dispatch = useDispatch();
  
    const toggle = () => setModal(!modal);

    return (
        <>
            <Button className='m-2' color='danger' onClick={toggle}>- Remove Boardgame</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Remove a boardgame</ModalHeader>
                <ModalBody>
                    <ListGroup>
                        {boardgames.map(g => (
                            <>
                            <ListGroupItem className='d-flex justify-content-between'>
                                {g.name}
                                <Button size='sm' color="danger" onClick={() => handleRemove(g.id)}>
                                    Remove
                                </Button>
                            </ListGroupItem>
                            </>
                        ))}
                    </ListGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Done
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default RemoveBoardgame