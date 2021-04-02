import React from 'react';
import {Divider, List, ListItem, ListItemIcon, ListItemText, Switch} from '@material-ui/core';
import {getMenuItems} from "../../../static/getMenuItems";
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import {changeTheme, selectThemeMode} from "../../../store/features/theme/themeSlice";
import { useHistory } from 'react-router-dom';

const menuItems = getMenuItems()

const DrawerList = (props: {
  onToggle: () => void
}) => {
  let history = useHistory();
  const themeMode = useSelector(selectThemeMode)
  const dispatch = useDispatch()
  return (
    <>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={item.title} onClick={() => {
            history.push(item.path)
            props.onToggle()
          }}>
            <ListItemIcon>{item.image}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            {themeMode === 'dark'
            ? <DarkIcon />
            : <LightIcon />
            }
          </ListItemIcon>
          <Switch
            checked={themeMode === 'dark'}
            onChange={() => {
              dispatch(changeTheme())
            }}
            name="theme"
            inputProps={{ 'aria-label': 'theme checkbox' }}
          />
        </ListItem>
      </List>

    </>
  );
};

export default DrawerList;