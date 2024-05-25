import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const ScoresDropdown = ({ boardgames }) => {

    return (
        <UncontrolledDropdown>
            <DropdownToggle caret size='lg' color='primary'>
                Select a game
            </DropdownToggle>
            <DropdownMenu>
                {boardgames.map((game) => (
                    <DropdownItem key={game.id} tag={Link} to={`/scoreboards/${game.id}`}>
                        {game.name}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default ScoresDropdown;