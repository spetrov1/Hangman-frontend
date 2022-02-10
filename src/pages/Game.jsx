import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useSWR from 'swr';
import Word from '../components/Word';

const Game = () => {

    const history = useHistory();

    // send POST request using useSwr
    const initEndpointURL = "http://localhost:8080/games";
    const fetcher = (url) => fetch(url, {
            method: 'POST'
        }).then(
            data => data.json()
        );

    const { data, error } = useSWR(initEndpointURL, fetcher, {
        revalidateOnFocus: false,
        revalidateOnMount: true,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0
      });

    if (data && data.lives === 0) {
        history.replace('/displayResult?res=loss');
    }
    if (data && !data.word.includes('_')) {
        history.replace('/displayResult?res=win');
    }

    if (error) {
        return <main> An error ocurred while sending request... </main>
    }
    if (!data) {
        return <main> Loading... </main>;
    }

    return (
        <main>
            <h2> The Game started! </h2>

            <Word gameId={data.id} data={data} word={data.word} />

            <p> Lives - {data.lives} </p>

        </main>);
};

export default Game;