import { Container } from "@mui/system";
import {
  Box,
  Card,
  Button,
  CardContent,
  CardMedia,
  Input,
  Stack,
} from "@mui/material";
import { NoImage } from "../utils";
import { useAppDispatch } from "../store";
import { addRatedMovies } from "../store/ratingSlice/ratingSlice";
import { useNavigate } from "react-router-dom";
import { RatedMovie } from "../types";
import uuid from "react-uuid";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "Rambo: First blood",
      genre: "Action",
      year: 1982,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title is required")
        .max(16, "Title must not be more than 16 characters")
        .min(2, "Title must not be less than 2 characters"),
      genre: Yup.string()
        .required("Genre is required")
        .max(16, "Genre must not be more than 16 characters")
        .min(2, "Genre must not be less than 2 characters"),
      year: Yup.number()
        .required("Year is required")
        .min(4, "Year must not be less than 4 characters"),
    }),
    onSubmit(values) {
      let UUID = parseInt(uuid().replace(/[^0-9]/g, ""));
      const newMovie: RatedMovie = {
        imdbID: UUID,
        Title: values.title,
        Poster: "N/A",
        Year: values.year,
        Genre: values.genre,
        Type: "movie",
        Rating: 5,
        Deleted: false,
      };
      dispatch(addRatedMovies(newMovie));
    },
  });

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginY: "35px",
        marginX: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100vw",
        height: "100%",
      }}
    >
      <Button
        sx={{ width: "10%" }}
        onClick={() => navigate(-1)}
        variant="contained"
        size="large"
      >
        Go Back
      </Button>
      <Box
        sx={{
          display: "flex",
          marginTop: "30px",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            height="440"
            width="300"
            image={NoImage}
            sx={{ objectFit: "contain", marginTop: "30px" }}
            alt={"Movie"}
          />
        </Card>
        <Card
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <div>
                  <Input
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                  {formik.submitCount > 0 && formik.errors.title && (
                    <p>{formik.errors.title}</p>
                  )}
                </div>
                <div>
                  <Input
                    name="genre"
                    value={formik.values.genre}
                    onChange={formik.handleChange}
                  />
                  {formik.submitCount > 0 && formik.errors.genre && (
                    <p>{formik.errors.genre}</p>
                  )}
                </div>
                <div>
                  <Input
                    name="year"
                    value={formik.values.year}
                    onChange={formik.handleChange}
                  />
                  {formik.submitCount > 0 && formik.errors.year && (
                    <p>{formik.errors.year}</p>
                  )}
                </div>
                <Button
                  sx={{ width: "10%" }}
                  variant="contained"
                  size="large"
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CreateProductPage;
