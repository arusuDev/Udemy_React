export const App = () => {
  const onClickButton = () => alert();

  return (
    <div>
      <h1>Hello React!</h1>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};
