import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TheatersIcon from "@material-ui/icons/Theaters";
import AlarmIcon from "@material-ui/icons/Alarm";
import StarIcon from "@material-ui/icons/Star";

import { MoviesContext } from "../context/movies-context";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "50px",
    padding: theme.spacing(3, 2)
  }
}));

const Filters = () => {
  const {
    state: { category },
    dispatch
  } = useContext(MoviesContext);

  const handleChange = (event, newValue) => {
    dispatch({
      type: "CHANGE_CATEGORY",
      payload: newValue
    });
  };

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Tabs
          centered
          value={category}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab
            icon={<TheatersIcon />}
            value="IN THEATERS"
            label="In theaters"
          />
          <Tab icon={<AlarmIcon />} value="COMING SOON" label="Coming Soon" />
          <Tab icon={<StarIcon />} value="COLLECTION" label="Collection" />
        </Tabs>
      </Paper>
    </div>
  );
};

export { Filters };
