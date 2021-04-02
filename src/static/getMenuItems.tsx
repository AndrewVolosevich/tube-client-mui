import React from "react";
import {MenuItem} from "../interfaces/utility-types";
import {
  Home as HomeIcon,
  Build as BuildIcon,
  ShoppingCart as ShoppingCartIcon,
  PhoneIphone as PhoneIphoneIcon,
  Person as PersonIcon,
} from '@material-ui/icons';

export const getMenuItems = (): MenuItem[] => {
  return [
    {
      title: `Главная`,
      path: "/",
      image: <HomeIcon />,
    },
    {
      title: `Наша продукция`,
      path: "/products",
      image: <BuildIcon />,
    },
    {
      title: `Заказать`,
      path: "/order",
      image: <ShoppingCartIcon />,
    },
    {
      title: `Контакты`,
      path: "/contacts",
      image: <PhoneIphoneIcon />,
    },
    {
      title: `Вход`,
      path: "/auth",
      image: <PersonIcon />,
    },
  ];
};
