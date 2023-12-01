import { useState } from "react";
import "./style.css";

export const ToDo = () => {
  const [imcompleteToDos, setIncompleteTodos] = useState([
    "TODOです1",
    "TODOです2",
  ]);

  const [completeToDos, setCompleteToDos] = useState([
    "完了したTODOです1",
    "完了したTODOです2",
  ]);

  return (
    <>
      <div className="input-area">
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div className="imcompleate-area">
        <p className="area-title">未完了のToDo</p>
        <ul>
          {imcompleteToDos.map((todo) => (
            // 一意になる値を設定する
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="completed-area">
        <p className="area-title">完了したToDo</p>
        <ul>
          {completeToDos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
