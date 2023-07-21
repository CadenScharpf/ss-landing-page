import CatchUp from "./Categories/CatchUp";
import Greet from "./Categories/Greet";
import Home from "./Categories/Home";
import Introduce from "./Categories/Introduce";
import Productivity from "./Categories/Productivity";
import Promote from "./Categories/Promote";

export interface ICategory {
  type: "Personal" | "Business";
  name: string;
  image?: string;
  component: React.FC;
}

export const Categories: ICategory[] = [
  {
    type: "Personal",
    name: "Productivity",
    component: Productivity,
  },
  {
    type: "Personal",
    name: "Home",
    component: Home,
  },
  {
    type: "Personal",
    name: "Catch Up",
    component: CatchUp,
  },

  {
    type: "Business",
    name: "Greet",
    component: Greet,
  },
  {
    type: "Business",
    name: "Introduce",
    component: Introduce,
  },
  {
    type: "Business",
    name: "Promote",
    component: Promote,
  },
];
