import React from 'react';
import {
  Card,
  Grid,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  makeStyles
} from "@material-ui/core";
import {getProductsItems} from "../mocky/get-products";
import {ProductItem} from "../interfaces/utility-types";

const products: ProductItem[] = getProductsItems();
const useStyles = makeStyles({
  container: {
    justifyContent: "center",
    marginTop: "40px",
    marginBottom: "40px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  media: {
    height: 160,
  },
});

const Products = () => {
  const classes = useStyles()

  return (
    <>
      <Container fixed maxWidth={"md"} >
        <Grid container spacing={4}>
          {
            products.map((product: ProductItem) => {
              return (
                <Grid item xs={12} sm={6} md={4} className={classes.container} key={product.title}>
                  <Card className={classes.card}>
                    <div>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={product.src}
                          title={product.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {product.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {product.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </div>
                    <CardActions>
                      <Button size="small" color="primary" variant={"outlined"}>
                        В корзину
                      </Button>
                      <Button size="small" color="secondary" variant={"outlined"}>
                        Подробнее
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </>
  );
};

export default Products;