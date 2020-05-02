import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [updateColor, setUpdateColor] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get('/colors')
      .then(responseColors => {
        // console.log('get colors: BubblePage.js: responseColors: ', responseColors);
        setColorList(responseColors.data)
      })
      .catch(error => {
        console.log('error', error);
      })
  }, [updateColor])

  const updatingColor = () => {
    setUpdateColor(!updateColor);
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} update={updatingColor} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
