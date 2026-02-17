const containerNewForm = document.getElementById("containerForm");
const btnAgendar = document.getElementById("agendar")

export function visilityOff(){
	containerNewForm.style.zIndex = -999;
	containerNewForm.style.opacity = 0;
	btnAgendar.style.display = 1
}

export function visilityOn(){
	containerNewForm.style.zIndex = 10;
	containerNewForm.style.opacity = 1;
}