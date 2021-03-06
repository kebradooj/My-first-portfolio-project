import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.jpg";

//Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#fff",
  },
  subtitle: {
    color: "#FF1493",
    marginBottom: "3rem",
  },
  TypedContainer: {
    background: "rgba(255,255,255,.1)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.TypedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Joseph Grey" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Joodarbek Jyldyzbekov"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Front End",
            "Web Design",
            "Web Development",
            "MERN Stack",
            "React JS",
            "Node JS",
            "Singer",
            "Marathon runner",
            "Vegeterian",
            "Doesn't a pro gamer",
            "Programmer",
            "Developer",
            "Dreamer",
            "And just family man ^_-"
          ]}
          typeSpeed={30}
          backSpeed={15}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
