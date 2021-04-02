import React from "react";
import {Container, Typography, Box} from "@material-ui/core";
import {useLocation} from "react-router-dom";
import {getMenuItems} from "../../static/getMenuItems";
import {makeStyles} from "@material-ui/core/styles";

const menuLinks = getMenuItems()
const useStyles = makeStyles((theme) => ({
  pageTitle: {
    padding: theme.spacing(1),
    fontStyle: "italic",
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  }
}));

const PageTitle = () => {
  const classes = useStyles()
  const {pathname} = useLocation();
  const currentLink = menuLinks.find(item => item.path === pathname)
  return (
    <>
      <section>
        <Box className={classes.pageTitle}>
          <Container fixed maxWidth={"md"}>
            <Typography variant={'h4'}>{currentLink?.title}</Typography>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default PageTitle;
