import { Container, Grid, Box } from "@mui/material";
import RatedMovieCard from "../components/RatedMovieCard";
import NoContentFound from "../components/NoContentFound";
import { getAllRatedMovies } from "../store/ratingSlice/ratingSlice";
import { useAppSelector } from "../store";

const RatingsPage = () => {
  const { ratedMovies } = useAppSelector(getAllRatedMovies);

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          paddingY: 8,
          marginY: "40px 0px",
        }}
      >
        {ratedMovies?.length ? (
          <Grid container alignItems="stretch" spacing={4}>
            {ratedMovies
              .filter((movie) => movie.Deleted === false)
              .map((movie) => (
                <Grid item xs={6} md={3} key={movie.imdbID}>
                  <RatedMovieCard movie={movie} />
                </Grid>
              ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", paddingY: 4 }}>
            <NoContentFound />
          </Box>
        )}
      </Container>
    </div>
  );
};

export default RatingsPage;
