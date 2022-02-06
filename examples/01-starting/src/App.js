import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchMovies = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://swapi.dev/api/films/');

            if (!response.ok) {
                throw new Error('HTTP Error');
            }

            const data = await response.json();

            const transformedData = data?.results.map(item => ({
                id: item.episode_id,
                title: item.title,
                openingText: item.opening_crawl,
                releaseDate: item.release_date
            }));

            setMovies(transformedData ?? []);
        } catch (e) {
            setError(e);
        }

        setLoading(false);
    }, []);
    const onClickHandler = async () => {
        await fetchMovies();
    };

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    let content = <p>Loading...</p>;
    if (!loading && error) {
        content = <p>Error during data load.</p>
    } else if (!loading && movies.length === 0) {
        content = <p>No data...</p>;
    } else if (!loading) {
        content = <MoviesList movies={movies}/>;
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={onClickHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
