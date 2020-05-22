import React from "react";
import ReactDom from "react-dom";
import Home from "./../home";
import Item from "../../../components/item/item";

Item("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Home></Home>, div)
})