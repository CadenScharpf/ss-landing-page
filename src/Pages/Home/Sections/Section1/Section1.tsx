import Productivity from "./Categories/Productivity";
import { Categories, ICategory } from "./Categories";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import officeImageLrg from "./assets/pexels-burst-374147.jpg";
import { LayoutContext } from "../../../../App";
import CategoryNav from "./CategoryNav/CategoryNav";

var DEFAULT_STYLES: Record<string, React.CSSProperties> = {
  imgLarge: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "cen",
  },
  content: {
    flexGrow: 1,
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

interface NavStateContextType {
  category: ICategory | null;
  autoplay: boolean;
  setCategory: (category: ICategory) => void;
  setAutoplay: (state: boolean) => void;
}

export var NavStateContext = createContext<NavStateContextType>({
  category: null,
  autoplay: true,
  setCategory: (category: ICategory) => {},
  setAutoplay: (autoplay: boolean) => {},
});

function LandingSection1() {
  const [category, setCategory] = useState(Categories[0]);
  const [autoplay, setAutoplay] = React.useState<boolean>(true);
  const lcp = useContext(LayoutContext);

  DEFAULT_STYLES.imgLarge.backgroundImage = category.image;

  function handleCategoryChange(category: ICategory) {
    setCategory(category);
  }

  return (
    <NavStateContext.Provider
      value={{
        category: category,
        autoplay: autoplay,
        setCategory: handleCategoryChange,
        setAutoplay: setAutoplay,
      }}
    >
      <div id="imgLarge" style={{ ...DEFAULT_STYLES.imgLarge }} />
      <div
        id="Section1Content"
        className="ContentRow"
        style={{ flexGrow: 4, width: "100%", display: "flex" }}
      >
        {React.createElement(category.component)}
      </div>
      <div style={{ flexGrow: 1, width: "100%", maxHeight: 120 }}>
        <CategoryNav categories={Categories} setCategory={setCategory} />
      </div>
    </NavStateContext.Provider>
  );
}

export default LandingSection1;
