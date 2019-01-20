const players = [
    {
        name: 'Mars',
        score: 77,
        id: 1
    },
    {
        name: 'Mercy',
        score: 11,
        id: 2
    },
    {
        name: 'Jupiter',
        score: 99,
        id: 3
    },
    {
        name: 'Venus',
        score: 66,
        id: 1
    }
];


{/* pass properties list (props) to Component */}
const  Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            {/*use JavaScript attribute instead of html attirbute in JSX*/}
            {/* className (JSX) ~ class (HTML)*/}
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
};

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">{ props.score }</span>
            <button className="counter-action increment">+</button>
        </div>
    );
};

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>
            <Counter score={props.score}/>
        </div>
    );
};

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={props.initialPlayers.length}/>
            {/* Player list */}
            {props.initialPlayers.map( player =>
                <Player
                    name={player.name}
                    score={player.score}
                    key={player.id.toString()}
                />
            )}
        </div>
    );
};
{ /*Capital component name to differentiate custom components from native DOM elements*/}
{ /*Player tag will matched with Player() function*/ }
ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
);
