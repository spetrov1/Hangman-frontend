import './Literal.css';
import { useSWRConfig } from 'swr'

function Literal(props) {
    const { mutate } = useSWRConfig();
    function updateData() {
        mutate('http://localhost:8080/games', { ...props.data, word: 'test' }, false);
    }

    return <input onChange={ updateData } type="text" minLength={1} maxLength={1} />;
}

export default Literal;