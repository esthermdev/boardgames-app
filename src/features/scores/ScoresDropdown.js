import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ScoresDropdown = ({ onGameSelect, boardgames }) => {

    const handleGameSelect = (gameId) => {
        onGameSelect(gameId);
    };

    return (
        <UncontrolledDropdown>
            <DropdownToggle caret size='lg' color='primary'>
                Select a game
            </DropdownToggle>
            <DropdownMenu>
                {boardgames.map((game) => (
                    <DropdownItem key={game.id} onClick={() => handleGameSelect(game.id)}>{game.name}</DropdownItem>
                ))}
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default ScoresDropdown;