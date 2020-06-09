import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core"
import Navbar from './Navbar'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "rgba(0,0,0,.3)",
    height: "100vh"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before":{
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]:{
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    background: "rgba(255,255,255,.1)",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#faeee7 #faeee7 transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin:"1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #faeee7 #faeee7"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "#ea907a",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "#ea907a",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading:{
    color: "#FF1493",
    padding: "0",
    textTransform: "uppercase"
  }
}))

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar/>
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Education and Working experince
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2016-2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              banking
            </Typography>
            <Typography variant="body1" align="center" style={{color: "lightGrey"}}>
            Bishkek Financial Economic Technical School named after A.Toktonaliev
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "#faeee7"}}>
            In college, I received good knowledge in finance, management, financialliteracy.
            </Typography>
          </Box>
          <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2019-2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              html & CSS & JS
            </Typography>
            <Typography variant="body1" align="center" style={{color: "lightGrey"}}>
              Makers Coding bootcamp
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "#faeee7"}}>
            The bootсamp lasted 3 months, then I learned the good of site layout,solving tasks in Javascript & learned React js.
            </Typography>
          </Box>
          <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              React JS & Node JS
            </Typography>
            <Typography variant="body1" align="center" style={{color: "lightGrey"}}>
              TDTS
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "#faeee7"}}>
              Have a good day
            </Typography>
          </Box>
          
        </Box>
      </Box>
    </>
  )
}

export default Resume

