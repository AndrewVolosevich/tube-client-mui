import { ProductItem } from "../interfaces/utility-types";
import DrinksImg from '../assets/products/drinks.jpg'
import HolidayImg from '../assets/products/holiday.jpg'
import LooseImg from '../assets/products/loose.jpg'

export const getProductsItems = (): ProductItem[] => {
  return [
    {
      title: `Тубусы для алкоголя`,
      description: `Картонные тубусы обладают особым шармом и приятным дизайном, что чрезвычайно важно для правильной подачи и презентации ароматного напитка.`,
      src: DrinksImg,
    },
    {
      title: `Тубусы для праздничной продукции`,
      description: `Замечательная упаковка для придания особого шарма вашим подаркам`,
      src: HolidayImg,
    },
    {
      title: `Тубусы для бытовой химии и сыпучих продуктов`,
      description: `Картонные упаковочные тубусы можно использовать для упаковки различной насыпной продукции.`,
      src: LooseImg,
    },
    {
      title: `Тубусы для алкоголя копия`,
      description: `Картонные тубусы обладают особым шармом и приятным дизайном, что чрезвычайно важно для правильной подачи и презентации ароматного напитка.`,
      src: DrinksImg,
    },
    {
      title: `Тубусы для праздничной продукции копия`,
      description: `Замечательная упаковка для придания особого шарма вашим подаркам`,
      src: HolidayImg,
    },
    {
      title: `Тубусы для бытовой химии и сыпучих продуктов копия`,
      description: `Картонные упаковочные тубусы можно использовать для упаковки различной насыпной продукции.`,
      src: LooseImg,
    },
  ];
};