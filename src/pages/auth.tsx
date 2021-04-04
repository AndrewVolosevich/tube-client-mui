import React, {useState} from 'react';
import {AppBar, Tabs, Tab, Box, Container, Paper} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {indigo} from '@material-ui/core/colors';
import SignIn from "../components/forms/sign-in";
import SignUp from "../components/forms/sign-up";

const useStyles = makeStyles({
  tabs: {
    backgroundColor: indigo["400"]
  },
  tabsContent: {
    padding: "15px",
    marginTop: "1px",
  }
})


const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;
  const classes = useStyles()
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Paper className={classes.tabsContent}>
          <Box>{children}</Box>
        </Paper>
      )}
    </div>
  );
}

const Auth = () => {
  const classes = useStyles()
  const [value, setValue] = useState<number>(0)
  return (
    <>
      <br />
      <Container fixed maxWidth={"md"}>
        <AppBar position="static" className={classes.tabs}>
          <Tabs variant={"fullWidth"} value={value} onChange={(e, newValue) => {
            setValue(newValue)
          }} aria-label="simple tabs example">
            <Tab label="Войти" />
            <Tab label="Зарегестрироваться" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <SignIn />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUp />
        </TabPanel>
      </Container>
    </>
  );
};

export default Auth;