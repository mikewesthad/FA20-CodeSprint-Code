import React, { useState } from "react";
import ClickButton from "./click-button";

function ClickButtons(props) {
  const { numButtons } = props;

  const [totalClicks, setTotalClicks] = useState(0);

  const onClick = () => {
    setTotalClicks((state) => state + 1);
  };

  const buttons = [...Array(numButtons)].map((value, i) => (
    <ClickButton key={i} onClick={onClick} />
  ));

  return (
    <div>
      <h1>Total Clicks: {totalClicks}</h1>
      {buttons}
    </div>
  );
}

export default ClickButtons;
