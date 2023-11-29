import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  // useStateは関数コンポーネントの一番上の階層でしか呼び出せない。
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };
  return (
    <div>
      <ColorfulMessage color="red"> This is Children </ColorfulMessage>
      <ColorfulMessage color="blue"> Hello,React </ColorfulMessage>
      <ColorfulMessage color="green"> Hello,React! </ColorfulMessage>
      <button onClick={onClickCountUp}>CountUp</button>
      <p>State:{num}</p>
    </div>
  );
};
