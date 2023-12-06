export const CompleteTodos = (props) => {
  const { todos, onClickReverse } = props;
  return (
    <div className="completed-area">
      <p className="area-title">完了したToDo</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickReverse(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
