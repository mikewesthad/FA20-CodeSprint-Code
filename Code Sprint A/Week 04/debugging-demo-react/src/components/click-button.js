import React, { useState } from "react";

function ClickButton(props) {
  const { onClick } = props;
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(count + 1);
    onClick();
  };

  return (
    <div>
      <button onClick={onButtonClick}>Clicks: {count}</button>
    </div>
  );
}

export default ClickButton;
