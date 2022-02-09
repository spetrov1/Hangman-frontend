import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import Word from '../components/Word';

const Game = () => {

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

    if (error) {
        return <main> An error ocurred while sending request... </main>
    }
    if (!data) {
        return <main> Loading... </main>;
    }

    return (
        <main>
            <h2> The Game started </h2>

            <Word gameId={data.id} data={data} word={data.word} />
            <br /> <br />
            <Link to=''><Button variant="success"> Try </Button></Link>

            <p> Lives - {data.lives} </p>

        </main>);
};

export default Game;