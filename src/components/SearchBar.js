import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { 
    Input, 
    InputGroup,
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem } from 'reactstrap';
import { selectAllBoardgames } from '../features/boardgames/gamesSlice';

const SearchBar = () => {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const gamesList = useSelector(selectAllBoardgames);

    const filteredGames = gamesList.filter((game) => game.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
        if (event.target.value !== '') {
            setDropdownOpen(true);
        } else {
            setDropdownOpen(false);
        }
    }


    return (
        <InputGroup size='sm' style={{ width: '200px', margin: '10px' }}>
            <Input
                name='search'
                placeholder='Search'
                type='search'
                value={searchQuery}
                onChange={handleInputChange}
                autoComplete='off'
            />
            {dropdownOpen && (
                <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)} direction='down'>
                    <DropdownToggle tag='span' data-toggle='dropdown' aria-expanded={dropdownOpen}/>
                    <DropdownMenu style={{ width: '100%' }}>
                        {filteredGames.length > 0 ? (
                            filteredGames.map(game => (
                                <DropdownItem key={game.id} onClick={() => setSearchQuery('')}>
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={"/games/" + game.id}>{game.name}</Link>
                                </DropdownItem>
                            ))
                        ) : (
                            <DropdownItem disabled>No games found</DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            )}
        </InputGroup> 
    )
}

export default SearchBar;