import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import {Box, Button, IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {getMenuItems} from "../../../static/getMenuItems";
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import {changeTheme, selectThemeMode} from "../../../store/features/theme/themeSlice";

const webLinks = getMenuItems();

const useStyles = makeStyles({
  container: {
    display: "flex",
    margin: "0px",
    padding: "0px",
    height: "100%"
  },
})

const WebLinks = () => {
  const classes = useStyles()
  const themeMode = useSelector(selectThemeMode)
  const dispatch = useDispatch()
  return (
    <>
      <Box className={classes.container} component={"ul"}>
        {
          webLinks.map((link) => {
            return (
              <Button
                key={link.title}
                color={"inherit"}
                to={link.path}
                component={RouterLink}
                // startIcon={link.image}
              >
                {link.title}
              </Button>
            )
          })
        }
        <IconButton
          color="inherit"
          aria-label="theme color"
          onClick={() => {
            dispatch(changeTheme())
          }}
        >
          {
            themeMode === 'dark' ? <DarkIcon /> : <LightIcon />
          }
        </IconButton>
      </Box>
    </>
  );
};

export default WebLinks;