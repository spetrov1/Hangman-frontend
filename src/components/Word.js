import Literal from "./Literal";

function Word(props) {
    const word = props.word;

    return word.split('').map(character => character === '_' ? <Literal data={props.data} /> : <span> {character} </span> );
}

export default Word;