import React from "react";
import Card from "./Card";
import { data } from "../../data/index";

const CardList = () => {
  return data.map(app => {
    return(
      <Card {...app} key={app.name}></Card>
    )
  });
};
export default CardList;