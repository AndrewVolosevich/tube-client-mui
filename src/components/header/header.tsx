import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
  Container,
  useTheme,
  Box,
  Hidden
} from "@material-ui/core";
import {Menu} from '@material-ui/icons';
import Drawer from "./drawer/drawer";
import WebLinks from "./web-links/web-links";
import PageTitle from "../page-title/page-title";

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
  const theme = useTheme()
  console.log(theme)
  return (
    <>
      <AppBar position="static">
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
      <PageTitle />
    </>
  );
};

export default Header;