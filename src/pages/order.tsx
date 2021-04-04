import React from 'react';
import {Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import OrderForm from "../components/forms/order-form";
import {getOrderFeatures} from "../mocky/get-order-features";
import {makeStyles} from "@material-ui/core/styles";

const orderFeatures = getOrderFeatures();
const useStyles = makeStyles(theme => {
  return {
    itemWrapper: {
      padding: theme.spacing(3)
    },
    featureWrapper: {
      padding: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    featureTitle: {
      textAlign: "center"
    }
  }
})
const Order = () => {
  const classes = useStyles()
  return (
    <>
      <Container fixed maxWidth={"md"}>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.itemWrapper}>
            <OrderForm />
          </Grid>
          <Grid item xs={12} md={6} className={classes.featureWrapper}>
            <Typography variant={"h5"} color={"primary"} className={classes.featureTitle}>
              Отправьте заявку на бесплатный расчет заказа и получите скидку 10%
            </Typography>
            <Typography variant={"subtitle1"} >
              Наш менеджер свяжется с вами в течение 20 минут.
            </Typography>
            <List>
              {
                orderFeatures.map(feature => {
                  return (
                    <ListItem key={feature.title}>
                      <ListItemIcon>
                        {feature.image}
                      </ListItemIcon>
                      <ListItemText primary={feature.title} secondary={feature.description} />
                    </ListItem>
                  )
                })
              }
            </List>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Order;