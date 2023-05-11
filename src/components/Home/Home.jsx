import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  MoviesPopItem,
  MoviesPopItemImg,
  MoviesPopItemPrg,
  MoviesPopList,
  PageTitle,
} from './Home.styled';
const API_KEY = '4bc6cd41da8136f9d881653d0e323d21';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getPopMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
        );
        const data = response.data.results;
        const filteredData = data.map(({ id, title, name, poster_path }) => ({
          id,
          title: title || name,
          poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
        }));

        setMovies(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    getPopMovies();
  }, []);

  return (
    <Container>
      <PageTitle>Tranding today</PageTitle>
      <MoviesPopList>
        {movies.map(({ id, title, poster }) => {
          return (
            <MoviesPopItem key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <MoviesPopItemImg src={poster} alt={title} />
                <MoviesPopItemPrg>{title}</MoviesPopItemPrg>
              </Link>
            </MoviesPopItem>
          );
        })}
      </MoviesPopList>
    </Container>
  );
};

export default Home;