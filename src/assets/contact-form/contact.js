import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  TextField,
  Container,
  Grid,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  containerTop: {
    paddingTop: theme.spacing(4)
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Container className={classes.containerTop}>
          <Typography component="h3" variant="h3" color="inherit">
            Contact me
          </Typography>
        </Container>
        <Container className={classes.container}>
          <form>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Grid>

              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                  multiline
                  fullWidth
                  rows="4"
                />
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    </div>
  );
}
