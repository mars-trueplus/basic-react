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

class Counter extends React.Component {

    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    };

    decrementScore = () => {
        this.setState({
            score: this.state.score - 1
        });
    };


    render() {
        return (
        <div className="counter">
            <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
            {/*This prefer to component instance (Counter)*/}
            <span className="counter-score">{ this.state.score }</span>
            <button className="counter-action increment" onClick={this.incrementScore}>+</button>
        </div>
    );
    }
}


const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>
            <Counter/>
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
