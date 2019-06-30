import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";

import { saveToLocalStorage } from "../utils/storage";

import { useStyles } from "../styles/movie";

const Movie = ({ details }) => {
  const classes = useStyles();

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center"
  });

  const { vertical, horizontal, open } = snackbarState;

  const { poster_path, title } = details;
  const poster = `http://image.tmdb.org/t/p/w300/${poster_path}`;

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={poster} title={title} />
          <CardContent>
            <Typography align="center" gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
            {overview}
          </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              saveToLocalStorage("movies", details);
              setSnackbarState({
                vertical: "top",
                horizontal: "center",
                open: true
              });
            }}
          >
            Add To Collection
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={() => setSnackbarState({ open: false })}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">Added To Collection</span>}
      />
    </React.Fragment>
  );
};

export { Movie };
