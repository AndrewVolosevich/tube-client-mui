import React from 'react';
import {Container, Divider, Grid, List, ListItemIcon, ListItemText, ListItem} from "@material-ui/core";
import Gallery from '../components/UI/gallery/gallery';
import {getGalleryImg} from "../mocky/get-gallery-img";
import {makeStyles} from "@material-ui/core/styles";
import img1 from "../assets/main-page-img/img1.jpg"
import img2 from "../assets/main-page-img/img2.jpg"
import {getFeatureItems1, getFeatureItems2} from "../mocky/get-features-items";

const useStyles = makeStyles(theme => {
  return {
    slider: {
      marginTop: theme.spacing(3)
    },
    contentImg: {
      height: "100%",
      width: "100%",
    }
  }
})

const features1 = getFeatureItems1();
const features2 = getFeatureItems2();

const Home = () => {
  const images = getGalleryImg()
  const classes = useStyles()

  return (
    <>
      <Container fixed maxWidth={"md"}>
        <Gallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={false}
          slideDuration={450}
          additionalClass={classes.slider}
        />
        <br />
        <Divider />
        <br />
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src={img1} className={classes.contentImg} alt={'content'} />
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              {
                features1.map(feature => {
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
        <br />
        <Grid container>
          <Grid item xs={12} md={6}>
            <List>
              {
                features2.map(feature => {
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
          <Grid item xs={12} md={6}>
            <img src={img2} className={classes.contentImg} alt={'content'} />
          </Grid>
        </Grid>
      </Container>

    </>
  );
}

export default Home;