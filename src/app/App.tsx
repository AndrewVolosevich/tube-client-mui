import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {ThemeProvider} from "@material-ui/core";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import theme from "../theme";
import {selectThemeMode} from "../store/features/theme/themeSlice";
import Home from "../pages/home";
import Products from "../pages/products";
import Order from '../pages/order';
import Contacts from "../pages/contacts";
import Auth from "../pages/auth";

const useStyles = makeStyles({
  main: {
    minHeight: "80vh"
  }
})

const App = () => {
  const classes = useStyles()
  const themeMode = useSelector(selectThemeMode)

  return (
    <>
      <ThemeProvider theme={theme({mode: themeMode})}>
        <Router>
          <Header/>
          <main className={classes.main}>
            <Switch>
              <Route path={'/'} exact>
                <Home />
              </Route>
              <Route path={'/products'} exact>
                <Products />
              </Route>
              <Route path={'/order'} exact>
                <Order />
              </Route>
              <Route path={'/contacts'} exact>
                <Contacts />
              </Route>
              <Route path={'/auth'} exact>
                <Auth />
              </Route>
              <Redirect to={'/'}>
                <Home />
              </Redirect>
            </Switch>
          </main>
          <Footer/>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
