import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ReviewsList, ReviewsItemPrg, ReviewsItem } from './Reviews.styled';
const API_KEY = '4bc6cd41da8136f9d881653d0e323d21';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviewsById = async () => {
      try {
        const respons = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
        );

        const data = respons.data.results;

        const filteredData = data.map(({ author, content, id }) => ({
          id,
          author,
          content,
        }));
        setReviews(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieReviewsById();
  }, [movieId]);

  return (
    <>
      {reviews !== null && reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <ReviewsItem key={id}>
                <h3>Author: {author}</h3>
                <ReviewsItemPrg>{content}</ReviewsItemPrg>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <div>Sorry, but we don't have any reviews for this movie.</div>
      )}
    </>
  );
};