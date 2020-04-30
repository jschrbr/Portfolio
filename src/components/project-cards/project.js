import React, { useEffect } from "react";
import clsx from "clsx";

import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";

import {
  Avatar,
  Grid,
  Paper,
  Link,
  Fab,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Container,
  CssBaseline,
  Grow,
  Slide,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  ButtonBase,
  useMediaQuery
} from "@material-ui/core";

import DashboardIcon from "@material-ui/icons/Dashboard";
import BuildIcon from "@material-ui/icons/Build";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";

import { secondaryListItems } from "../menu/items";
import RecipeReviewCard from "../about-card/card";
import SimplePaper from "../contact-form/contact";

import placeImg from "../static/placeholder-image.jpg";
import binImg from "../static/simple-bin.png";
import homerImg from "../static/homer-computer.gif";
import planImg from "../static/Work Day Scheduler.gif";
import pwImg from "../static/Password Generator.gif";
import nodeImg from "../static/Node1.jpg";
import simImg from "../static/sim.gif";
import foodImg from "../static/Food Hound.gif";
import weaImg from "../static/weather.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  containerTop: {
    paddingTop: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    textAlign: "center"
  },
  paper2: {
    padding: theme.spacing(2),
    margin: "auto"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    shadows: theme.shadows[10]
  }
}));

// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

export default function ProjectComp() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Container disableGutters={!matches}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={3}
        wrap="nowrap"
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Container className={classes.container}>
              <Typography noWrap variant="h3">
                Achievements
              </Typography>
              <Container className={classes.container}>
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="top"
                  spacing={3}
                >
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6">
                      New Product Introduction
                    </Typography>
                    <Typography variant="body1">
                      I succesfully migrated a product from R&D to Production.
                      The project was finished within a year and one the first
                      to succesfully implement eletronic work instructions.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6">Customer Support</Typography>

                    <Typography variant="body1">
                      I have provided on-site and remote technical support for a
                      variety of systems owned by clients like Leonardo
                      Helicopters and the New Zealand Defence Force.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6">
                      Python Professional Certificate
                    </Typography>
                    <Typography variant="body1">
                      I have a accomplished the Google IT Automation with Python
                      course available on coursera. The course enstiled some of
                      the fundamentals of Python, Bash, Git, Troubleshooting and
                      the Google Cloud Platform (As well as codelabs and jupyter
                      notebooks, which are great!)
                    </Typography>

                    <Link href="https://www.coursera.org/account/accomplishments/specialization/CCCNFQDNPXGU">
                      Certificate
                    </Link>
                  </Grid>
                </Grid>
              </Container>
            </Container>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} md={4} lg={3}>
          <div className={classes.root}>
            <Paper className={classes.paper2}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase
                    className={classes.image}
                    href="https://jschrbr.github.io/simple-bin/"
                  >
                    <img className={classes.img} alt="complex" src={binImg} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Simple binary calculator app
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Just a simple project to convert binary to decimal
                        numbers, with some bells and whistles.
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Built using Materializecss and jQuery
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <Link href="https://jschrbr.github.io/simple-bin/">
                        Demo
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
        <Grid item md={8}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <div className={classes.root}>
                <Paper className={classes.paper2}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase
                        className={classes.image}
                        href="https://github.com/jschrbr/pw-generator"
                      >
                        <img
                          className={classes.img}
                          alt="complex"
                          src={pwImg}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            Password generator
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            A password generating app with validation.
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Built using bootstrap.
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          <Link href="https://github.com/jschrbr/pw-generator">
                            Documentation
                          </Link>
                          <br />
                          <Link href="https://jschrbr.github.io/pw-generator/">
                            Demo
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Grid>
            <Grid item>
              <div className={classes.root}>
                <Paper className={classes.paper2}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase
                        className={classes.image}
                        href="https://github.com/jschrbr/the-daily-planner"
                      >
                        <img
                          className={classes.img}
                          alt="complex"
                          src={planImg}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            The daily planner
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            A simple daily planner page. Events are saved even
                            if you close your browser, and reset every day.
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Built using bootstrap and jQuery.
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          <Link href="https://github.com/jschrbr/the-daily-planner">
                            Documentation
                          </Link>
                          <br />
                          <Link href="https://jschrbr.github.io/the-daily-planner/">
                            Demo
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} xl={10}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <div className={classes.root}>
                <Paper className={classes.paper2}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase
                        className={classes.image}
                        href="https://github.com/jschrbr/weather-report"
                      >
                        <img
                          className={classes.img}
                          alt="complex"
                          src={weaImg}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            Weather report
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            A simple application that request weather infomation
                            via.
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Built using bootstrap.
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          <Link href="https://github.com/jschrbr/weather-report">
                            Documentation
                          </Link>
                          <br />
                          <Link href="https://jschrbr.github.io/weather-report/">
                            Demo
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={3}
              >
                <Grid item md={6}>
                  <div className={classes.root}>
                    <Paper className={classes.paper2}>
                      <Grid container spacing={2}>
                        <Grid item>
                          <ButtonBase
                            className={classes.image}
                            href="https://jschrbr.github.io/2fat2work/"
                          >
                            <img
                              className={classes.img}
                              alt="complex"
                              src={homerImg}
                            />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid
                            item
                            xs
                            container
                            direction="column"
                            spacing={2}
                          >
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                2 Fat 2 Work
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                A little something for the Simpsons fans
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                Built for fun
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle1">
                              <Link href="https://jschrbr.github.io/2fat2work/">
                                Demo
                              </Link>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div className={classes.root}>
                    <Paper className={classes.paper2}>
                      <Grid container spacing={2}>
                        <Grid item>
                          <ButtonBase
                            className={classes.image}
                            href="https://github.com/jschrbr/SocketIONodeMCU"
                          >
                            <img
                              className={classes.img}
                              alt="complex"
                              src={nodeImg}
                            />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid
                            item
                            xs
                            container
                            direction="column"
                            spacing={2}
                          >
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                SocketIONodeMCU
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                An arduino library for SocketIO.
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                Forked from a project that didn't do what I
                                wanted.
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle1">
                              <Link href="https://github.com/jschrbr/SocketIONodeMCU">
                                Documentation
                              </Link>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} lg={6}>
          <div className={classes.root}>
            <Paper className={classes.paper2}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase
                    className={classes.image}
                    href="https://github.com/jschrbr/"
                  >
                    <img className={classes.img} alt="complex" src={simImg} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Archived Portfolio
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        The first portfolio I made following the gestalt node
                        open source project and my time in CNC. Still WIP...
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Built using...
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <Link href="https://github.com/jschrbr/jschrbr.github.io">
                        Documentation
                      </Link>
                      <br />
                      <Link href="https://jschrbr.github.io/">Demo</Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
        <Grid item md={12} lg={6}>
          <div className={classes.root}>
            <Paper className={classes.paper2}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase
                    className={classes.image}
                    href="https://github.com/jschrbr/food-hound"
                  >
                    <img className={classes.img} alt="complex" src={foodImg} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Food hound
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Managed my first project using git as a collaboration
                        tool with 4 contributors. With a healthy exposure to
                        pull requests and reviews.
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Built using materializecss, spoonacular and
                        free-currency-converter.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <Link href="https://github.com/jschrbr/food-hound">
                        Documentation
                      </Link>
                      <br />
                      <Link href="https://jschrbr.github.io/food-hound/">
                        Demo
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
