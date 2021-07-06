import React, {useState, useEffect} from "react";
import {menu as data} from "../utils/data";
import Item from "./item";
import {Row} from "react-bootstrap";

const Menu = ({selectedCategory}) => {
  const [menu, setMenu] = useState(data);

  // filter out items based on selected category when component renders or re-renders
  useEffect(() => {
    let filteredMenu = [];
    if (selectedCategory !== "All") {
      filteredMenu = data.filter((item) => item.category === selectedCategory.toLowerCase());
    } else {
      filteredMenu = [...data];
    }
    setMenu(filteredMenu);
  }, [selectedCategory]);

  // render items
  const renderMenuItems = () => {
    return menu.map((item, index) => {
      return <Item {...item} key={index} />;
    });
  };

  return <Row>{renderMenuItems()}</Row>;
};

export default Menu;
