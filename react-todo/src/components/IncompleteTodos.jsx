export const IncompleteTodos = (props) => {
  const { onClickComplete, onClickDelete, todos } = props;
  return (
    <div className="incompleate-area">
      <p className="area-title">未完了のToDo</p>
      <ul>
        {todos.map((todo, index) => (
          // 一意になる値を設定する
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
