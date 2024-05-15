const GameDetail = ({ game }) => {
    const { name, 
            category, 
            rating, 
            players, 
            duration,
            complexity, 
            description } = game;

    return (
        <div>
            <h3>{ name }</h3>
            <h5>{ category }</h5>
            <p>Rating: { rating }</p>
            <p>Players: { players }</p>
            <p>Complexity: { complexity }</p>
            <p>Duration: { duration }</p>

            <p>Description: { description }</p>
        </div>
    );
};

export default GameDetail;