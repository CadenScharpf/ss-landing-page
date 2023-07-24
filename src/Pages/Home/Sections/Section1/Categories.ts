import CatchUp from "./Categories/CatchUp";
import Greet from "./Categories/Greet";
import Home from "./Categories/Home";
import Introduce from "./Categories/Introduce";
import Productivity from "./Categories/Productivity";
import Promote from "./Categories/Promote";

import officeImageLrg from "./assets/pexels-burst-374147.jpg";
import libImageLrg from "./assets/pexels-element-digital-1370296.jpg";
import tool from "./assets/pexels-suntorn-somtong-1029243.jpg";
import coffee from "./assets/pexels-pixabay-414579.jpg";
import mac from "./assets/pexels-negative-space-160107.jpg";
import meeting from "./assets/pexels-fauxels-3184306.jpg";

export interface ICategory {
  type: string;
  name: string;
  image: string;
  component: React.FC;
}

export const Categories: ICategory[] = [
  {
    type: "Personal",
    name: "Productivity",
    image: `url(${officeImageLrg})`,
    component: Productivity,
  },
  {
    type: "Personal",
    name: "Home",
    image: `url(${libImageLrg})`,
    component: Home,
  },
  {
    type: "Personal",
    name: "Catch Up",
    image: `url(${tool})`,
    component: CatchUp,
  },
  {
    type: "Business",
    name: "Greet",
    image: `url(${coffee})`,
    component: Greet,
  },
  {
    type: "Business",
    name: "Introduce",
    image: `url(${mac})`,
    component: Introduce,
  },
  {
    type: "Business",
    name: "Promote",
    image: `url(${meeting})`,
    component: Promote,
  },
];
