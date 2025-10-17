const form = document.getElementById("formList");
const itemList = form.inputItem;
const result = document.getElementById("result");
const msgDeleteItem = document.getElementById("msgerror")

let listTask = ["Pão de forma", "Café Preto", "Suco de Laranja", "Bolacha"];

function deleteTask(task,index) {
    msgDeleteItem.innerHTML = ""
	listTask = listTask.filter((_, i) => i !== index)
    console.log(index, listTask)
    loadTasks()
    const msgDelete = document.createElement("div")
    msgDelete.className = "mensagemDelete"
    msgDelete.innerHTML = `
        <img class="alertIcon" src="./assets/icons/warning-circle-filled.svg" alt="">
		<p>${task} removido da lista</p>
		<img id="closeMsgDelete" src="./assets/icons/close-msg.svg" alt="">
        `
    
    msgDeleteItem.appendChild(msgDelete)

    const closeBtn = document.getElementById("closeMsgDelete")

    closeBtn.addEventListener("click", () => msgDelete.remove())
    setTimeout(() => {
        msgDelete.remove()
    }, 3000)
}

function loadTasks() {
    result.innerHTML = ""
	listTask.forEach((item, index) => {
		const div = document.createElement("div");
		div.className = "itemList";

		div.innerHTML = `
            <label class="checkbox-wrapper">
				<input type="checkbox">
				<span class="checkbox-custom"></span>
				<p>${item}</p>
			</label>
        `;

        const button = document.createElement("button")
        const img = document.createElement("img")
        img.src = "./assets/icons/trash.svg"
        button.appendChild(img)
        div.appendChild(button)
        button.addEventListener("click", () => deleteTask(item, index))
		result.appendChild(div);
	});
}

function createTask(value) {
    listTask.push(value)
    loadTasks()
}

window.onload = () => {loadTasks()};

form.onsubmit = (event) => {
	event.preventDefault();

	if (itemList.value == null || itemList.value == undefined || itemList.value == false) {
		alert("Digite alguma tarefa");
		document.getElementById("inputItem").focus();
	}

    createTask(itemList.value)

	// Limpando o valor do input
	itemList.value = "";
};
