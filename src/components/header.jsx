import React from "react";
import {categories} from "../utils/data";
import {Nav} from "react-bootstrap";

const Header = ({activeNavKey, onNavClick}) => {
  // render nav items
  const renderCategories = () => {
    return categories.map((category, index) => {
      return (
        <Nav.Item key={index} onClick={() => onNavClick(category)}>
          <Nav.Link eventKey={category}>{category}</Nav.Link>
        </Nav.Item>
      );
    });
  };

  return (
    <>
      <h2>Menu</h2>
      <Nav variant="pills" activeKey={activeNavKey}>
        {renderCategories()}
      </Nav>
    </>
  );
};

export default Header;
