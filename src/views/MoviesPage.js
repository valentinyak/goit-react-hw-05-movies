import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import theMovieAPI from '../services/theMovieDB-api';
import FilmList from '../components/Film/FilmList';
import SerchForm from '../components/SerchForm/SerchForm';
import Error from '../components/Error/Error';
import Spiner from '../components/Spiner/Spiner';

export default function MoviesPage() {
  const [findFilms, setFindFilms] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      setStatus('pending');

      findForMovies(new URLSearchParams(location.search).get('query'));
    }
  }, [location.search]);

  const findForMovies = query => {
    theMovieAPI
      .serchMovies(query)
      .then(({ results }) => {
        setFindFilms(results);
      })
      .then(() => {
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  };

  return (
    <main>
      <SerchForm />

      {status === 'pending' && <Spiner />}

      {status === 'resolved' && findFilms.length > 0 && (
        <FilmList films={findFilms} />
      )}

      {status === 'resolved' && findFilms.length === 0 && (
        <h2>We can't find films by your request</h2>
      )}

      {status === 'rejected' && <Error error={error} />}
    </main>
  );
}
