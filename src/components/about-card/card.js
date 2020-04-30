import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Grid, Container, Box } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import backgroundImg from "../static/background.jpg";
import solderImg from "../static/soldering.jpg";
import sparksImg from "../static/sparks.jpg";
import codeImg from "../static/code.jpeg";
import roboImg from "../static/robo.jpg";
import meImg from "../static/me.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: 10
  },
  left: {
    float: "left"
  },
  right: {
    float: "right"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="name" className={classes.avatar} src={meImg}>
            JS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="James Schreiber"
        subheader="a bit about me"
      />
      <CardMedia className={classes.media} image={backgroundImg} title="Me" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          I'm a Mechanical Engineer with a strong aptitude for problem solving
          across multiple disciplines. Particularly, technology based. I have
          demonstrated abilities in mechanical design and assembly, electrical
          assembly and programming for both embedded and web.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Container>
            <Box display={{ xs: "none", sm: "block" }}>
              <Avatar
                src={sparksImg}
                className={`${classes.large} ${classes.right}`}
              ></Avatar>
            </Box>
            <Typography paragraph>
              {
                "I was born in England, grew up in Melbourne and studied in the Gold Coast. During my studies, I gained working experience in carpentry and construction, as well as a few agricultural projects."
              }
            </Typography>
          </Container>
          <Container>
            <Box display={{ xs: "none", sm: "block" }}>
              <Avatar
                src={solderImg}
                className={`${classes.large} ${classes.left}`}
              ></Avatar>
            </Box>

            <Typography paragraph>
              {
                "My off time during this period was spent learning electronics through the use of arduino, as well as my first exposure to web development and working with open source projects and Git!"
              }
            </Typography>
          </Container>
          <Container>
            <Box display={{ xs: "none", sm: "block" }}>
              <Avatar
                src={codeImg}
                className={`${classes.large} ${classes.right}`}
              ></Avatar>
            </Box>
            <Typography paragraph>
              {
                "I began working in the aeropace industry. First working with process documentation used in the production line, later taking on technical work in production, R&D and customer support."
              }
            </Typography>
          </Container>
          <Container>
            <Box display={{ xs: "none", sm: "block" }}>
              <Avatar
                src={roboImg}
                className={`${classes.large} ${classes.left}`}
              ></Avatar>
            </Box>
            <Typography paragraph>
              {
                "My work has taken me to New Zealand, Israel and Italy, where I've worked with robotics firms, Leonardo helicopters and the New Zealand Defence Force."
              }
            </Typography>
          </Container>
        </CardContent>
      </Collapse>
    </Card>
  );
}
