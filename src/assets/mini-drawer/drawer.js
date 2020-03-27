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
import ProjectComp from "../project-cards/project";

import meImg from "../static/me.jpg";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  root2: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },

  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    textAlign: "center"
  },
  landColor: {
    background: theme.palette.primary.light,
    height: "100%",
    maxHeight: 400
  },
  fixedHeight: {
    height: 240
  },
  imgBox: {
    margin: 30,
    backgroundSize: "cover",
    overflow: "hidden",
    style: { width: "5rem", height: "5rem" },
    borderColor: theme.palette.background.paper
  },

  bigAvatar: {
    marginTop: "10%",
    width: "80%",
    height: "80%",
    maxWidth: 400,
    border: 10,
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: theme.palette.background.paper,
    boxShadow: theme.shadows[20]
  },
  landingContent: {
    marginTop: "5%"
  }
}));

function Stamp() {
  return (
    <Typography variant="body2" color="inherit">
      {"Created by "}
      <Link color="primary" href="https://jschrbr.github.io/portfolio/">
        James Schreiber
      </Link>{" "}
      {/* {new Date().getFullYear()} */}
      {"2020"}
      {"."}
    </Typography>
  );
}

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const matches = useMediaQuery("(min-width:600px)");

  const [showLan, setLan] = React.useState("block");
  const [showAbout, setAbout] = React.useState("none");
  const [showProject, setProject] = React.useState("none");
  const [showContact, setContact] = React.useState("none");
  const [about, About] = React.useState(false);
  const [aboutCard, AboutCard] = React.useState(false);
  const [contactCard, ContactCard] = React.useState(false);
  const [projectCard, ProjectCard] = React.useState(false);
  const [project, Project] = React.useState(false);
  const [contact, Contact] = React.useState(false);
  const [welcome, Welcome] = React.useState(false);
  const [load, setLoad] = React.useState(true);
  const [sel, setSel] = React.useState("home");

  const showLand = () => {
    setLan("block");
    Welcome(true);
    setTimeout(() => About(true), 1000);
    setTimeout(() => Project(true), 1500);
    setTimeout(() => Contact(true), 1000);
  };

  const showAboutCard = () => {
    setAbout("block");
    AboutCard(true);
  };
  const showProjectCard = () => {
    setProject("block");
    ProjectCard(true);
  };
  const showContactCard = () => {
    setContact("block");
    ContactCard(true);
  };

  const showSel = () => {
    switch (sel) {
      case "home":
        showLand();
        break;
      case "about":
        showAboutCard();
        break;
      case "proj":
        showProjectCard();
        break;
      case "contact":
        showContactCard();
        break;
      default:
        break;
    }
  };

  const hideAll = () => {
    ProjectCard(false);
    About(false);
    Project(false);
    Contact(false);
    Welcome(false);
    AboutCard(false);
    ContactCard(false);
  };

  const hideLan = () => {
    setLan("none");
    setTimeout(() => showSel(), 0);
  };
  const hideAbout = () => {
    setAbout("none");
    setTimeout(() => showSel(), 0);
  };
  const hideProject = () => {
    setProject("none");
    setTimeout(() => showSel(), 0);
  };
  const hideContact = () => {
    setContact("none");
    setTimeout(() => showSel(), 0);
  };
  useEffect(() => {
    if (load) {
      showLand();
      setLoad(false);
    }
  }, [load]);
  const Menu = () => {
    return (
      <List>
        <div>
          <ListItem
            button
            onClick={() => {
              hideAll();
              setSel("home");
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              hideAll();
              setSel("about");
            }}
          >
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="About me" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              hideAll();
              setSel("proj");
            }}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              hideAll();
              setSel("contact");
            }}
          >
            <ListItemIcon>
              <VolumeUpIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </div>
      </List>
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            James Schreiber
          </Typography>
          <IconButton
            compondnent="a"
            color="inherit"
            href="https://github.com/jschrbr/portfolio/tree/master"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Typography
            component="h2"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Menu
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Menu />
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container
          maxWidth="lg"
          className={classes.container}
          disableGutters={!matches}
        >
          <div className={classes.root2}>
            <Box display={showLan}>
              <Container maxWidth="lg" className={classes.container}>
                <Grow in={welcome} timeout={1000}>
                  <Paper className={classes.landColor}>
                    <Grid
                      container
                      direction="row"
                      justify="space-evenly"
                      alignItems="center"
                    >
                      <Slide
                        direction="down"
                        in={welcome}
                        timeout={1500}
                        mountOnEnter
                        unmountOnExit
                        onExited={hideLan}
                      >
                        <Avatar
                          alt="James Schreiber"
                          src={meImg}
                          className={classes.bigAvatar}
                        />
                      </Slide>
                    </Grid>
                  </Paper>
                </Grow>
              </Container>
              <Container
                maxWidth="lg"
                className={`${classes.container} ${classes.landingContent}`}
              >
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item xs={12} sm={7}>
                    <Slide
                      direction="right"
                      timeout={500}
                      in={welcome}
                      mountOnEnter
                      unmountOnExit
                    >
                      <Paper className={classes.paper}>
                        <ThemeProvider theme={theme}>
                          <Typography variant="h2">Welcome!</Typography>
                        </ThemeProvider>
                      </Paper>
                    </Slide>
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                  spacing={3}
                >
                  <Slide
                    direction="right"
                    timeout={1000}
                    in={welcome}
                    mountOnEnter
                    unmountOnExit
                  >
                    <Grid item xs={12} sm={4}>
                      <Paper className={classes.paper}>
                        <Typography
                          variant="h6"
                          color="inherit"
                          className={classes.para}
                        >
                          This is my portolio website.
                        </Typography>
                      </Paper>
                    </Grid>
                  </Slide>
                  <Slide
                    direction="left"
                    timeout={1000}
                    in={welcome}
                    mountOnEnter
                    unmountOnExit
                  >
                    <Grid item xs={12} sm={4}>
                      <Paper className={classes.paper}>
                        <Typography
                          variant="h6"
                          color="inherit"
                          className={classes.para}
                        >
                          A place for me to document and share some of my
                          projects.
                        </Typography>
                      </Paper>
                    </Grid>
                  </Slide>
                </Grid>
                <Grid container spacing={3}>
                  <Slide
                    direction="right"
                    timeout={1000}
                    in={about}
                    mountOnEnter
                    unmountOnExit
                  >
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <Typography
                          variant="h6"
                          color="inherit"
                          className={classes.para}
                        >
                          And a place for you to see what I'm about.
                        </Typography>
                        {/* <Fab color="secondary">
                          <BuildIcon />
                        </Fab> */}
                      </Paper>
                    </Grid>
                  </Slide>
                  <Grow in={project} timeout={1000}>
                    <Grid item xs={12} sm={4} md={6}>
                      <Paper className={classes.paper}>
                        <Typography
                          variant="h6"
                          color="inherit"
                          className={classes.para}
                        >
                          Or have a look at some of my projects
                        </Typography>
                        {/* <Fab color="secondary">
                          <DashboardIcon />
                        </Fab> */}
                      </Paper>
                    </Grid>
                  </Grow>
                  <Slide
                    direction="left"
                    timeout={1000}
                    in={contact}
                    mountOnEnter
                    unmountOnExit
                  >
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <Typography
                          variant="h6"
                          color="inherit"
                          className={classes.para}
                        >
                          And get in touch
                        </Typography>
                        {/* <Fab color="secondary">
                          <VolumeUpIcon />
                        </Fab> */}
                      </Paper>
                    </Grid>
                  </Slide>
                </Grid>
              </Container>
            </Box>
            <Grow in={aboutCard} onExited={hideAbout}>
              <Box display={showAbout}>
                <Container maxWidth="lg" className={classes.container}>
                  <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                  >
                    <RecipeReviewCard />
                  </Grid>
                </Container>
              </Box>
            </Grow>
            <Grow in={projectCard} onExited={hideProject}>
              <Box display={showProject}>
                <ProjectComp />
              </Box>
            </Grow>
            <Grow in={contactCard} onExited={hideContact}>
              <Box display={showContact}>
                <Container>
                  <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                  >
                    <SimplePaper />
                  </Grid>
                </Container>
              </Box>
            </Grow>
          </div>
        </Container>
        <footer>
          <Paper className={classes.footer}>
            <Container>
              <Typography variant="body1">
                {"Built with "}{" "}
                <Link color="primary" href="https://reactjs.org/">
                  React
                </Link>
                {" and "}{" "}
                <Link color="primary" href="https://material-ui.com/">
                  Material-UI
                </Link>
                .
              </Typography>
              <Stamp />
            </Container>
          </Paper>
        </footer>
      </main>
    </div>
  );
}
