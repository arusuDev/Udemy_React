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

    // 階層構造の作成 li -> div -> p
    div.appendChild(p);
    li.appendChild(div);
    
    // id=imcomplete-listの下に要素を追加
    document.getElementById("imcompleate-list").appendChild(li);

}

// add-button idを持つ要素を取得してclickされたときにonClickAddを呼び出す
document.getElementById("add-button").addEventListener("click",onClickAdd);