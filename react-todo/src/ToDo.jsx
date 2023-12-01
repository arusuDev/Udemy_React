import "./style.css";

export const ToDo = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div className="imcompleate-area">
        <p className="area-title">未完了のToDo</p>
        <ul>
          <li>
            <div className="list-row">
              <p>TODOです</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="completed-area">
        <p className="area-title">完了したToDo</p>
        <ul>
          <li>
            <div className="list-row">
              <p className="todo-item">TODOでした</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
