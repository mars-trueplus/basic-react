
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
        this.setState( prevState => {
            return {
                score: prevState.score + 1
            };
        });
    };

    decrementScore = () => {
        this.setState(prevState => {
            return {
                score: prevState.score - 1
            };
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
                <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>x</button>
            </span>
            <Counter/>
        </div>
    );
};

class App extends React.Component {

    state = {
        players: [
            {
                name: 'Mars',
                id: 1
            },
            {
                name: 'Mercy',
                id: 2
            },
            {
                name: 'Jupiter',
                id: 3
            },
            {
                name: 'Venus',
                id: 1
            }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
           return {
               players: prevState.players.filter( p => p.id != id)
           };
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={this.state.players.length}/>
                {/* Player list */}
                {this.state.players.map( player =>
                    <Player
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    }
}


{ /*Capital component name to differentiate custom components from native DOM elements*/}
{ /*Player tag will matched with Player() function*/ }
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
