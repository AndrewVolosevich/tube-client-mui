import React, {useState} from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {Button, IconButton} from "@material-ui/core";
import {Menu, Close} from "@material-ui/icons";
import DrawerList from "./drawer-list";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  closeBtn: {
    position: "absolute",
    bottom: '20px',
    right: '20px'
  }
})

const Drawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = useStyles()
  const toggleDrawer = () => {
     setIsOpen(old => !old)
  };

  return (
    <div>
      {
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <Menu />
          </IconButton>
          <SwipeableDrawer
            anchor={"right"}
            open={isOpen}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
          >
            <DrawerList onToggle={toggleDrawer} />
            <Button onClick={toggleDrawer} className={classes.closeBtn} endIcon={<Close />}>
              Закрыть
            </Button>
          </SwipeableDrawer>
        </>
      }
    </div>
  );
}

export default Drawer