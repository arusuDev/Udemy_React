export const ColorfulMessage = (props) => {
  // 分割代入（引数の中でpropの分割代入をするパターンもある）
  const { color, children } = props;
  // 省略記法（項目名と一致する場合は省略できる）
  const contentStyle = {
    color,
    fontSize: "3rem",
  };
  return <p style={contentStyle}>{children}</p>;
};
