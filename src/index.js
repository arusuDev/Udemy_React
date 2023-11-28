const onClickAdd = () => {
    // 入力された文字を取得し、ボックスを初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // li生成
    const li = document.createElement("li");
    // div生成 (class list-row)
    const div = document.createElement("div");
    div.className = "list-row";
    // p生成 (class todo-item)
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;
    // button(完了)作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click",() => alert("完了"));

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