import image1 from "../assets/main-slider/new-year1.jpg"
import image2 from "../assets/main-slider/new-year2.jpg"
import image3 from "../assets/main-slider/new-year3.jpg"

export const getGalleryImg = () => {
  return [
   {
     original: image1,
     description: "Title 1",
     path: "/page1",
   },
   {
     original: image2,
     description: "Title 2",
     path: "/page2",
   },
   {
     original: image3,
     description: "Title 3",
     path: "/page3",
   },
 ]
}