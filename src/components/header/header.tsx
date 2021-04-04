import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Container,
  Box,
  Hidden
} from "@material-ui/core";
import Drawer from "./drawer/drawer";
import WebLinks from "./web-links/web-links";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Container fixed maxWidth={"md"} className={classes.container}>
            <Typography variant="h4" className={classes.title}>
              Logo
            </Typography>
            <Box>
              <Hidden mdUp >
                <Drawer />
              </Hidden>
              <Hidden smDown>
                <WebLinks />
              </Hidden>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;