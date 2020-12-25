import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';

import theMovieAPI from './services/theMovieDB-api';

import s from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function App() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('alone');

  useEffect(() => {
    // if (films.length < 80) {
    //   makeFetchForTrending();
    // }
    // findForMovies(query);
    // makeFetchForMovieDetails(120);
    // makeFetchForMovieCredits(120);
    // makeFetchForMovieReviews(120);
  });

  const makeFetchForMovieReviews = id => {
    theMovieAPI
      .getMovieReviews(id)
      .then(console.log)
      .catch(error => {
        setError(error);
      });
  };

  const makeFetchForMovieCredits = id => {
    theMovieAPI
      .getMovieCredits(id)
      .then(console.log)
      .catch(error => {
        setError(error);
      });
  };

  const makeFetchForMovieDetails = id => {
    theMovieAPI
      .getMovieDetails(id)
      .then(console.log)
      .catch(error => {
        setError(error);
      });
  };

  const findForMovies = query => {
    theMovieAPI
      .serchMovies(query)
      .then(console.log)
      .catch(error => {
        setError(error);
      });
  };

  const makeFetchForTrending = () => {
    theMovieAPI
      .getTrending()
      .then(parsedResponse => {
        setFilms([...films, ...parsedResponse.results]);
      })
      .catch(error => {
        setError(error);
      });
  };

  return <div className={s.App}></div>;
}
