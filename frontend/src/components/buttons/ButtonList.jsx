import React from "react";
import IconButton from "./IconButton";
import GradientButton from "./GradientButton";

import { data } from "../../data/index";

const ButtonList = () => {
  return data.map(app => {
    if (app.colors) {
      return <GradientButton app={app} key={app.name}></GradientButton>
    } else {
      return <IconButton app={app} key={app.name}></IconButton>
    };
  });
};
export default ButtonList;