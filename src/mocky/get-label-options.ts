import {Option} from "../interfaces/utility-types";

export const getLabelOptions = (): Option[] => {
  return [
    { value: "Наклейка" },
    { value: "Без этикетки (Крафт)" },
    { value: "Стандартная этикетка" },
  ]
} ;