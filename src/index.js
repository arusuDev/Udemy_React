const onClickAdd = () => {
    // 入力された文字を取得し、ボックスを初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompleteTodo(inputText);
}

// 渡された引数を元に未完了のTODOを作成する関数
const createIncompleteTodo = (todo) => {
    // li生成
    const li = document.createElement("li");
    // div生成 (class list-row)
    const div = document.createElement("div");
    div.className = "list-row";
    // p生成 (class todo-item)
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;
    // button(完了)作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click",() => {
        // 押された完了ボタンの親にあるliタグを取得する
        const moveTarget = completeButton.closest("li");
        // 自分自身の次の要素を削除する。(削除ボタン)
        completeButton.nextElementSibling.remove();
        // 自分自身を削除する。
        completeButton.remove();
        // 戻すボタンを生成してdivタグ配下に設定する
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        // 最初の子要素を取得(firstElementChild)
        moveTarget.firstElementChild.appendChild(backButton);

        // 完了リストに移動
        // moveTargetは参照で持っているため、appendChildで項目を移動できる
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    // button(削除)作成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click",()=> {
        // closest 最も近い要素を取得する
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("imcomplete-list").removeChild(deleteTarget);
    });

    // 階層構造の作成 li -> div -> p
    div.appendChild(p);
    div.append(completeButton);
    div.append(deleteButton);
    li.appendChild(div);
    
    // id=imcomplete-listの下に要素を追加
    document.getElementById("imcomplete-list").appendChild(li);
}

// add-button idを持つ要素を取得してclickされたときにonClickAddを呼び出す
document.getElementById("add-button").addEventListener("click",onClickAdd);