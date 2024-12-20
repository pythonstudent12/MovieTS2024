import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { NoImage } from "../utils";
import Rating from "@mui/material/Rating";

const RatedMovieCard = ({ movie }: any) => {
  return (
    <div className="cardZoom">
      <Card
        sx={{
          maxWidth: 345,
          height: "100%",
          ":hover": {
            boxShadow: 20,
          },
          borderRadius: "2%",
        }}
        elevation={10}
      >
        <CardMedia
          component="img"
          height="400"
          image={movie.Poster === "N/A" ? NoImage : movie.Poster}
          alt={movie.Title}
        />

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <Rating name="read-only" value={movie?.Rating} readOnly />
        </CardContent>
      </Card>
    </div>
  );
};

export default RatedMovieCard;
