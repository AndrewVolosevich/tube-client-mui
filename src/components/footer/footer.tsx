import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="mailto:volosevich1989@gmail.com">
        volosevich1989@gmail.com
      </Link>{' '}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  container: {
    textAlign: "center"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container className={classes.container} maxWidth="sm">
          <Typography variant="body1">Создание и поддержка сайта — </Typography>
          <Copyright />
        </Container>
      </footer>
    </>
  );
}

export default Footer