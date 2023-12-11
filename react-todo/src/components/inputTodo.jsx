const style = {
  backgroundColor: "#82dfc0",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, onActive } = props;
  return (
    <div style={style}>
      <input
        disabled={onActive}
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={onActive} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
