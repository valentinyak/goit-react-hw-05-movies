import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Cast from './views/Cast';
import HomePage from './views/HomePage';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
import Reviews from './views/Reviews';

import theMovieAPI from './services/theMovieDB-api';
// import { ToastContainer, toast } from 'react-toastify';
// import Loader from 'react-loader-spinner';

// import 'react-toastify/dist/ReactToastify.css';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function App() {
  // const [films, setFilms] = useState([]);
  // const [error, setError] = useState(null);
  // const [query, setQuery] = useState('alone');

  // useEffect(() => {
  // if (films.length < 80) {
  //   makeFetchForTrending();
  // }
  // findForMovies(query);
  // makeFetchForMovieDetails(120);
  // makeFetchForMovieCredits(120);
  // makeFetchForMovieReviews(120);
  // });

  // const makeFetchForMovieReviews = id => {
  //   theMovieAPI
  //     .getMovieReviews(id)
  //     .then(console.log)
  //     .catch(error => {
  //       setError(error);
  //     });
  // };

  // const makeFetchForMovieCredits = id => {
  //   theMovieAPI
  //     .getMovieCredits(id)
  //     .then(console.log)
  //     .catch(error => {
  //       setError(error);
  //     });
  // };

  // const findForMovies = query => {
  //   theMovieAPI
  //     .serchMovies(query)
  //     .then(console.log)
  //     .catch(error => {
  //       setError(error);
  //     });
  // };

  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        {/* <Route>
          <MoviesPage path="/movies" />
        </Route> */}

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        {/* <Route>
          <Cast path="/movies/:movieId/cast" />
        </Route> */}

        {/* <Route>
          <Reviews path="/movies/:movieId/reviews" />
        </Route> */}
      </Switch>
    </>
  );
}
