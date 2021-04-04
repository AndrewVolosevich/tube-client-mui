import React from "react";
import {FeatureItem} from "../interfaces/utility-types";
import {
  Speed as SpeedIcon,
  Chat as ChatIcon,
  ShoppingBasket as ShoppingBasketIcon,
  BusinessCenter as BusinessCenterIcon,
} from '@material-ui/icons';

export const getOrderFeatures = (): FeatureItem[] => {
  return [
    {
      title: `Работаем быстрее конкурентов!`,
      description: `Расчет стоимости заказа за 1 день`,
      image: <SpeedIcon color={"primary"} fontSize={"large"} />,
    },
    {
      title: `Лёгкость в общении`,
      description: `С нами легче договориться чем с крупными компаниями`,
      image: <ChatIcon color={"primary"} fontSize={"large"} />,
    },
    {
      title: `Минимальный объём заказа от 100 штук`,
      description: `Это конечно можно обсудить...`,
      image: <ShoppingBasketIcon color={"primary"} fontSize={"large"} />,
    },
    {
      title: `Сотрудничество`,
      description: `Сотрудничаем с типографиями и рекламными агентствами`,
      image: <BusinessCenterIcon color={"primary"} fontSize={"large"} />,
    },
  ];
};