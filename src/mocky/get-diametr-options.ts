import {Option} from "../interfaces/utility-types";

export const getDiametrOptions = ():Option[] => {
  return [
    { value: "40 мм" },
    { value: "63 мм" },
    { value: "73,2 мм" },
    { value: "76 мм" },
    { value: "80,5 мм" },
    { value: "84 мм" },
    { value: "92 мм" },
    { value: "99 мм" },
    { value: "120 мм" },
    { value: "153 мм" },
  ];
}