import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  // useStateは関数コンポーネントの一番上の階層でしか呼び出せない。
  const [num, setNum] = useState(0);
  const [isShowChar, setIsShowChar] = useState(true);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowChar(!isShowChar);
  };

  // useEffectは第二引数の配列の値が変更かかった場合のみ実行される。
  useEffect(() => {
    if (num % 3 === 0 && num > 0) {
      isShowChar || setIsShowChar(true);
    } else {
      isShowChar && setIsShowChar(false);
    }
  }, [num]);

  // Too many re-renders.
  // if (num % 3 === 0) {
  //   setIsShowChar(true);
  // } else {
  //   setIsShowChar(false);
  // }

  return (
    <div>
      <ColorfulMessage color="red"> This is Children </ColorfulMessage>
      <ColorfulMessage color="blue"> Hello,React </ColorfulMessage>
      <ColorfulMessage color="green"> Hello,React! </ColorfulMessage>
      <button onClick={onClickCountUp}>CountUp</button>
      <p>State:{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowChar && <p>moji</p>}
    </div>
  );
};
