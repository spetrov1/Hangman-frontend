
const Game = () => {

    // send POST request using useSwr
    const fetcher = () => {
        const endpointURL = "http://localhost:8080/games";
        fetch(endpointURL, {
            method: 'POST'
        }).then(
            data => data.json()
        ).then(
            data => console.log(data)
        )
    };

    fetcher();


    return (
        <main>
            <h2> The Game started </h2>

            <p> Word element should be placed here </p>

            <p> Lives - 5 </p>

        </main>);
};

export default Game;