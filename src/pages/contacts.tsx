import React from 'react';
import {Container, Grid, ListItem, ListItemAvatar, ListItemText, ListItemIcon, List} from '@material-ui/core';
import {
  Room as RoomIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
} from '@material-ui/icons';
import {makeStyles} from "@material-ui/core/styles";
import ContactForm from "../components/forms/contact-form";

const useStyles = makeStyles(theme => {
  return {
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: "wrap"
  },
  telephone: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  listItem: {
    [theme.breakpoints.up('xs')]: {
      width: "100%",
    },
    [theme.breakpoints.up('sm')]: {
      width: "50%",
    },
    [theme.breakpoints.up('md')]: {
      width: "33%",
    },
  },
}})

const Contacts = () => {
  const classes = useStyles()
  return (
    <>
      <Container fixed maxWidth={"md"}>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <RoomIcon color={"primary"} fontSize={"large"}/>
            </ListItemIcon>
            <ListItemText primary="Офис и Производство:" secondary="194021, Минск, Институтский пер, д.3"/>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <PhoneIcon color={"primary"} fontSize={"large"}/>
            </ListItemAvatar>
            <ListItemText>
              <a className={classes.telephone} href={"tel:+375 29 568 16 64"}>+375 29 568 16 64</a>
            </ListItemText>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <MailIcon color={"primary"} fontSize={"large"}/>
            </ListItemAvatar>
            <ListItemText>
              <a className={classes.telephone} href={"mailto:test@gmail.com"}>test@gmail.com</a>
            </ListItemText>
          </ListItem>
        </List>
        <Grid container>
          <Grid item xs={12} md={6}>
            <iframe
              title={'yandex maps'}
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A0887d24463875e33c0f03c6a657dbb4b0c686e5d571f026ada396b0270bd9963&amp;source=constructor"
              width="100%"
              height="500"
              frameBorder="0"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contacts;