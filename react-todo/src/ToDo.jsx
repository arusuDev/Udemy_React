import { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const ToDo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodDos, setIncompleteTodos] = useState([
    "TODOです1",
    "TODOです2",
  ]);

  const [completeToDos, setCompleteToDos] = useState([
    "完了したTODOです1",
    "完了したTODOです2",
  ]);

  // onChangeはeventを受け取る
  const onChangeToDoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    // スプレッド構文を利用して配列を複製する。
    const newTodos = [...incompleteTodDos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodDos];
    // 特定の配列から指定された配列番号($1)から指定個数($2)削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newInCompleteTodos = [...incompleteTodDos];
    newInCompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeToDos, incompleteTodDos[index]];

    // Stateの反映
    setIncompleteTodos(newInCompleteTodos);
    setCompleteToDos(newCompleteTodos);
  };

  const onClickReverse = (index) => {
    const newCompleteTodos = [...completeToDos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...incompleteTodDos, completeToDos[index]];

    // Stateの反映
    setIncompleteTodos(newInCompleteTodos);
    setCompleteToDos(newCompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeToDoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        todos={incompleteTodDos}
      />
      <CompleteTodos todos={completeToDos} onClickReverse={onClickReverse} />
    </>
  );
};
