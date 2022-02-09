import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import Literal from '../components/Literal';
import Word from '../components/Word';

const Game = () => {

    // send POST request using useSwr
    const endpointURL = "http://localhost:8080/games";
    const fetcher = (url) => fetch(url, {
            method: 'POST'
        }).then(
            data => data.json()
        );

    const { data, error } = useSWR(endpointURL, fetcher);
    
    if (error) {
        return <main> An error ocurred while sending request... </main>
    }
    if (!data) {
        return <main> Loading... </main>;
    }
    console.log(data);
    return (
        <main>
            <h2> The Game started </h2>

            <Word word={data.word} />
            <br /> <br />
            <Link to=''><Button variant="success"> Try </Button></Link>

            <p> Lives - 5 </p>

        </main>);
};

export default Game;