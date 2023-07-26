import React, { useEffect, useImperativeHandle, useRef } from "react";
import { Categories, ICategory } from "../Categories";
import { Box, Typography } from "@mui/material";
import { NavStateContext } from "../Section1";
import { AnimatePresence, motion } from "framer-motion";

interface iCategoryNavProps {
  categories: ICategory[];
  setCategory: React.Dispatch<React.SetStateAction<ICategory>>;
}

function CategoryNav(props: iCategoryNavProps) {
  const navStateContext = React.useContext(NavStateContext);
  const menuRefs = React.useRef<CategoryTypeMenuRefType[]>([]);
  

  const categoryTypeMap = Categories.reduce(
    (acc: Record<string, ICategory[]>, category: ICategory) => {
      if (!acc[category.type]) {
        acc[category.type] = [];
      }
      acc[category.type].push(category);
      return acc;
    },
    {}
  );

  const handleFinishedMenuAutoplay = (index: number) => {
    if (navStateContext.autoplay) {
      menuRefs.current[(index+1)%menuRefs.current.length].activate();
    }
  };

  React.useEffect(() => {
    menuRefs.current[0].activate();
  }, []);

  return (
    <Box
      id="CategoryNav"
      className="CategoryNav"
      sx={{
        display: "flex",
        justifyContent: {
          xs: "center",
          md: "left",
          height: "100%",
          alignItems: "flex-end",
        },
        marginLeft: 2,
        font: "400 16px/28px Roboto,Helvetica Neue,sans-serif",
      }}
    >
      {Object.keys(categoryTypeMap).map((categoryType, index) => {
        return (
          <CategoryTypeMenu
            key={categoryType + "-nav-menu"}
            index={index}
            finishedCallback={handleFinishedMenuAutoplay}
            categoryType={categoryType}
            categories={categoryTypeMap[categoryType]}
            ref={(el: CategoryMenuItemRefType) => {
              if (menuRefs.current.length < Object.keys(categoryTypeMap).length) {
                menuRefs.current.push(el);
              }
            }}
          />
        );
      })}
    </Box>
  );
}

interface ICategoryTypeMenuProps {
  categories: ICategory[];
  categoryType: string;
  finishedCallback: (index:number) => void;
  index: number; //ref index within parent
}

interface CategoryTypeMenuRefType {
  activate: () => void;
}

const CategoryTypeMenu = React.forwardRef(
  (props: ICategoryTypeMenuProps, ref) => {
    const [active, setActive] = React.useState(false);
    const itemRefs = React.useRef<CategoryMenuItemRefType[]>([]);
    const navStateContext = React.useContext(NavStateContext);

    const handleFinishedMenuItem = (index: number) => {

      if (index === itemRefs.current.length - 1) {
        setActive(false);
        props.finishedCallback(props.index);
      } else {
        if( navStateContext.autoplay){itemRefs.current[index + 1].activate();}
      }
    };

    useImperativeHandle(ref, () => ({
      activate() {
        setActive(true);
        itemRefs.current[0].activate();
      },
    }));
    return (
      <Box id="CategoryTypeMenu" className="CategoryTypeMenu" sx={{}}>
        <Box
          sx={{
            borderBottom: "2px solid white",
            borderColor: active ? "white" : "rgba(255,255,255,.2)",
            textAlign: "left",
            paddingBottom: 1.1,
            paddingLeft: 2,
            fontweight: active ? "bold" : "",
            color: active ? "white" : "rgba(255,255,255,.7)",
          }}
        >
          <Typography variant="h5">{props.categoryType}</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          {props.categories.map((category, index) => {
            return (
              <CategoryMenuItem
                key={category.name + "-nav-item"}
                index={index}
                ref={(el: CategoryMenuItemRefType) => {
                  if (itemRefs.current.length < props.categories.length) {
                    itemRefs.current.push(el);
                  }
                }}
                finishedCallback={handleFinishedMenuItem}
                category={category}
              />
            );
          })}
        </Box>
      </Box>
    );
  }
);

interface ICategoryMenuItemProps {
  category: ICategory;
  finishedCallback: (index: number) => void;
  index: number; //ref index within parent
}

interface CategoryMenuItemRefType {
  activate: () => void;
}

const CategoryMenuItem = React.forwardRef<
  CategoryMenuItemRefType,
  ICategoryMenuItemProps
>((props: ICategoryMenuItemProps, ref) => {
  const navStateContext = React.useContext(NavStateContext);
  const [active, setActive] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const finishedCallback = props.finishedCallback;
  const index = props.index;
  const autoplayRef = React.useRef(navStateContext.autoplay);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  

  useImperativeHandle(ref, () => ({
    activate() {
      navStateContext.setCategory(props.category);
      setActive(true);
    },
  }));

  useEffect(() => {
    // Function to handle the finishing logic
    const handleFinish = () => {
      setActive(false);
      if (navStateContext.autoplay) {
        props.finishedCallback(props.index);
      }
    };

    // Clear the previous timeout, if any, when active or navStateContext changes
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout only if active is true
    if (active) {
      timeoutRef.current = setTimeout(handleFinish, 6000);
    }

    // Clean up the timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [active, props.index, navStateContext.autoplay]);

  const variants = {
    initial: { width: 0, opacity: 1 },
    animate: { width: "100%", opacity:1, transition: { duration: 6 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };
  return (
    <AnimatePresence>
      <Box
        onClick={() => {
          setTouched(true);
          navStateContext.setAutoplay(false);
          navStateContext.setCategory(props.category);
        }}
        className="CategoryMenuItem"
        sx={{
          textAlign: "center",
          paddingRight: 5,
          py: 2.0,
          paddingLeft: 2,
          position: "relative",
        }}
      >
        {active && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            key={props.category.name + "-nav-item"}
            variants={variants}
            style={{
              position: "absolute",
              left: 0,
              top: '15%',
              height: "70%",
              background: "rgba(255,255,255,.2)",
            }}
          ></motion.div>
        )}
        <Typography variant="h6" style={{ fontSize: "16px" }}>
          {props.category.name}
        </Typography>
      </Box>
    </AnimatePresence>
  );
});

export default CategoryNav;
