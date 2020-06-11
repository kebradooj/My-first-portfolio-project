import React from 'react'
import {makeStyles} from "@material-ui/styles"  
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import Github from "@material-ui/icons/GitHub"
import Twitter from "@material-ui/icons/Twitter"
import LinkedIn from "@material-ui/icons/LinkedIn"
import Telegram from "@material-ui/icons/Telegram"

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root":{
      minWidth: 0,
      maxWidth: "250px",
    },
    "& .MuiSvgIcon-root": {
      "&:hover":{
        fill: "#393e46"
      }
    },
    "& .MuiBottomNavigationAction": {
      "&:hover": "#eee"
    }
  }
})

const Footer = () => {
  const classes = useStyles()
  return (
    (<BottomNavigation width="auto" style={{nackground: "#fefea1"}}>
      <BottomNavigationAction
        style={{padding: 0}}
        icon={<Telegram/>}
        className={classes.root}
        href="https://t.me/kebradooj"
      />
      <BottomNavigationAction
        style={{padding: 0}}
        icon={<Twitter/>}
        className={classes.root}
        href="https://twitter.com/kebradooj"
      />
      <BottomNavigationAction
        style={{padding: 0}}
        icon={<Github />}
        className={classes.root}
        href="https://github.com/kebradooj"
      />
      <BottomNavigationAction
        style={{padding: 0}}
        icon={<LinkedIn/>}
        className={classes.root}
        href="https://www.linkedin.com/in/kebradooj/"
      />
    </BottomNavigation>)
  )
}

export default Footer
