export const App = () => {
  const onClickButton = () => alert();
  // CSS インラインスタイル
  // Reactで記載する場合はcamelCaseで書くこと。
  // fontsize -> fontSize
  // 数値は数値として記載できるが、オブジェクトとして使うため、
  // colorコードなどは文字列として定義する。
  const contentStyle = {
    color: "blue",
    fontSize: "3rem",
  };

  return (
    <div>
      <h1 style={contentStyle}>Hello React!</h1>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};
