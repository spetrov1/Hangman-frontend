import './Literal.css';
import { useSWRConfig } from 'swr'

function Literal(props) {
    const { mutate } = useSWRConfig();

    const fetcher = (url, literalPosition, literalToSuggest) => fetch(url, {
        method: 'POST',
        body: JSON.stringify(
            {
                position: literalPosition,
                literal: literalToSuggest
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        data => data.json()
    );
    
    function updateData(event) {
        const endpointUrl = `http://localhost:8080/games/${props.gameId}/try`;
        const literalPosition = props.index;
        const literalToSuggest = event.target.value;
        
        // TODO DO IT with useSWR ... and read more about it
        fetcher(endpointUrl, literalPosition, literalToSuggest)
            .then(
                data => mutate('http://localhost:8080/games', data, false)
        );
    }

    return <input onChange={ updateData } type="text" minLength={1} maxLength={1} />;
}

export default Literal;