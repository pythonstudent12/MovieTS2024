import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
  Chip,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import { NoImage } from "../utils";
import { useAppDispatch, useAppSelector } from "../store";
import { addRatedMovies } from "../store/ratingSlice/ratingSlice";
import { addMovies, getAllMovies } from "../store/movieSlice/movieSlice";
import { RatedMovie } from "../types";
import { getSingleMovieData } from "../API/MovieCardAPI";

const MovieCard = ({ movie }: any, { movies }: any) => {
  const [value, setValue] = React.useState<number | null>(1);
  const [alert, setAlert] = useState(false);
  const [like, setLike] = useState(false);
  const dispatch = useAppDispatch();
  const AllMovies = useAppSelector(getAllMovies);

  const addRatingHandler = async (value: number | null) => {
    setValue(value);
    const gen = await getSingleMovieData(movie.imdbID);

    const newMovie: RatedMovie = {
      imdbID: movie.imdbID,
      Title: movie.Title,
      Poster: movie.Poster,
      Year: movie.Year,
      Genre: gen,
      Type: movie.Type,
      Rating: value,
      Deleted: false,
    };
    dispatch(addRatedMovies(newMovie));
    setAlert(true);
  };

  const handleDelete = () => {
    const newMovie: RatedMovie = {
      imdbID: movie.imdbID,
      Title: movie.Title,
      Poster: movie.Poster,
      Year: movie.Year,
      Genre: movie.imdbID,
      Type: movie.Type,
      Rating: movie.Rating,
      Deleted: true,
    };
    dispatch(
      addMovies(AllMovies.filter((mov) => mov.imdbID !== newMovie.imdbID))
    );
  };

  const addLikeHandler = () => {
    setLike(true);
  };

  const removeLikeHandler = () => {
    setLike(false);
  };

  return (
    <div className="cardZoom">
      <Card
        sx={{
          maxWidth: 345,
          height: "100%",
          ":hover": {
            boxShadow: 40,
          },
          borderRadius: "2%",
        }}
        elevation={20}
      >
        <CardActionArea>
          <Link to={`/products/${movie.imdbID}`}>
            <CardMedia
              component="img"
              height="400"
              image={movie.Poster === "N/A" ? NoImage : movie.Poster}
              alt={movie.Title}
            />
          </Link>
        </CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to={`/products/${movie.imdbID}`}>
            <Typography gutterBottom variant="h6" component="div">
              {movie.Title}
            </Typography>

            <Typography
              sx={{ fontFamily: "Open Sans" }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {movie?.Year}
            </Typography>
          </Link>
          {!alert ? (
            <Rating
              name="simple-controlled"
              value={value}
              size="large"
              onChange={(e, newValue) => addRatingHandler(newValue)}
            />
          ) : (
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "14px",
              }}
              gutterBottom
              variant="overline"
              component="div"
            >
              Thank you for Rating!
            </Typography>
          )}
          <Chip
            size="small"
            sx={{
              ":hover": {
                cursor: "pointer",
              },
            }}
            label="Delete"
            onDelete={() => handleDelete()}
            color="primary"
          />
          {!like ? (
            <ThumbUpOffAltIcon
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => addLikeHandler()}
            />
          ) : (
            <ThumbUpAltIcon
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => removeLikeHandler()}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieCard;
