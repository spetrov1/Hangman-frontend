import Literal from "./Literal";

function Word(props) {
    const word = props.word;

    return word.split('').map( 
        (character, index) => 
            character === '_' ? <Literal key={index} gameId={props.gameId} index={index} data={props.data} /> : <span key={index}> {character} </span> );
}

export default Word;