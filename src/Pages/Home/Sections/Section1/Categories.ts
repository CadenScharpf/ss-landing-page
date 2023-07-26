import CatchUp from "./Categories/CatchUp";
import Greet from "./Categories/Greet";
import Home from "./Categories/Home";
import Introduce from "./Categories/Introduce";
import Productivity from "./Categories/Productivity";
import Promote from "./Categories/Promote";

import officeImageLrg from "./assets/dba/digital-home-wallpaper-calendar.jpg";
import libImageLrg from "./assets/dba/digital-signage-meeting-room-01.jpg";
import tool from "./assets/dba/digital-signage-restaurant.jpg";
import coffee from "./assets/dba/digital-signage-waiting-room.jpg";
import mac from "./assets/dba/personal-dashboard-for-production.jpg";
import meeting from "./assets/dba/presentboard-mobile-app.jpg";



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
