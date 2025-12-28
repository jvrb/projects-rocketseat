const numeros = document.getElementById("numbers");
const startNum = document.getElementById("start");
const endNum = document.getElementById("end");
const tggBtn = document.getElementById("togglebtn");
const form = document.getElementById("sortNumbersForm");

let sorteados = [];

form.addEventListener("submit", (e) => {
	e.preventDefault();
	sorteador();
	montarResultSort(sorteados);
});

function sorteador() {
	sorteados = [];
	if (numeros.value != 0) {
		for (num = 0; num < numeros.value; num++) {
			let numSorteado = sortearNum(startNum.value, endNum.value);
			if (tggBtn.checked && num != 0) {
				while (sorteados.includes(numSorteado)) {
					numSorteado = sortearNum(startNum.value, endNum.value);
				}
				sorteados.push(numSorteado);
			} else {
				sorteados.push(numSorteado);
			}
		}
	}
}

function sortearNum(min, max) {
	const minCeiled = Math.ceil(min);
	const maxCeiled = Math.floor(max);
	return Math.floor(Math.random() * (maxCeiled - minCeiled) + minCeiled);
}

function montarResultSort(sorteadosAtr) {
	const formContent = document.getElementById("contentFormId");
	formContent.innerHTML = "";

	const divResult = document.createElement("div");
	divResult.className = "divResult";

	const headerResult = document.createElement("header");
	const headerh3 = document.createElement("h3");
	headerh3.textContent = "Resultado do Sorteio";
	const headerP = document.createElement("p");
	headerP.textContent = "1º Resultado";
	headerResult.append(headerh3, headerP);

	const divBodyResult = document.createElement("div");
	divBodyResult.className = "bodyResult";

	const buttonRepeatSort = document.createElement("button");
	const imgBtnSort = document.createElement("img")
	imgBtnSort.src = "./assets/sorteadorIcon.svg"
	buttonRepeatSort.id = "btnRepeatSort";
	buttonRepeatSort.textContent = "Sortear Novamente";
	buttonRepeatSort.append(imgBtnSort)

	buttonRepeatSort.disabled = true

	divResult.append(headerResult, divBodyResult, buttonRepeatSort);
	formContent.append(divResult);

	sorteadosAtr.forEach((item, index) => {
		const addBlock = () => {
			const blockDiv = document.createElement("div");
			blockDiv.className = "blockDiv";
			const spanNumber = document.createElement("p");
			spanNumber.textContent = item;
			blockDiv.appendChild(spanNumber);
			divBodyResult.appendChild(blockDiv);
      		if (index === sorteadosAtr.length-1) {
				setTimeout(() => {
				buttonRepeatSort.disabled = false
				}, 3100)
      		}
		}
  		if (index === 0) {
      		addBlock(); // primeiro entra na hora
    	} else {
      		setTimeout(addBlock, index * 3000); // demais com delay
    	}
	});


	buttonRepeatSort.addEventListener("click", () => {
		console.log("cliquei");
		sorteador();
		montarResultSort(sorteados);
	});

	
}
