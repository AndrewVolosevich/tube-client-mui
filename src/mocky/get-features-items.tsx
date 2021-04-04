import React from 'react';
import {
  Settings as SettingsIcon,
  Loop as LoopIcon,
  ThumbUp as ThumbUpIcon,
  Star as StarIcon,
  Group as GroupIcon,
  LocalShipping as LocalShippingIcon,
  CreditCard as CreditCardIcon,
  MoneyOff as MoneyOffIcon,
} from '@material-ui/icons';
import {FeatureItem} from "../interfaces/utility-types";

export const getFeatureItems1 = (): FeatureItem[] => {
  return [
    {
      title: `Собственное производство`,
      description: `Наличие всех необходимых станков для обеспечения полного цикла производства.`,
      image: <SettingsIcon color={"primary"} fontSize={"large"} />,
    },
    {
      title: `Полный цикл`,
      description: `Осуществляем полный цикл работ: от разработки дизайна до готового продукта.`,
      image: <LoopIcon color={"primary"} fontSize={"large"} />,
    },
    {
      title: `Качество`,
      description: `Высококачественный картон с высокими прочностными характеристиками.`,
      image: <ThumbUpIcon color={"primary"} fontSize={"large"} />,
    },
    {
      title: `Опыт и оборудование`,
      description: `Новое современное европейское оборудование и квалифицированный персонал. Опыт работы более 6 лет.`,
      image: <StarIcon color={"primary"} fontSize={"large"} />,
    },
  ];
};
export const getFeatureItems2 = (): FeatureItem[] => {
  return [
    {
      title: `Индивидуальный подход`,
      description: `Гибкие индивидуальные цены для каждого клиента`,
      image: <GroupIcon color={"primary"} fontSize={"large"} />,
    },
    {
      title: `Бесплатная доставка`,
      description: `100% экономия на доставке для клиентов СПб`,
      image: <LocalShippingIcon color={"primary"} fontSize={"large"} />,
    },
    {
      title: `Отсрочка платежей`,
      description: `Предоставляем отсрочку платежа уже после 3-й отгрузки!`,
      image: <CreditCardIcon color={"primary"} fontSize={"large"} />,
    },
    {
      title: `Выгода`,
      description: `Цены ниже, чем у крупных конкурентов при том же качестве`,
      image: <MoneyOffIcon color={"primary"} fontSize={"large"} />,
    },
  ];
};