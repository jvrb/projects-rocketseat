import { visilityOn, visilityOff } from "../form/visibilityForm.js";
import { scheduleFetchById } from "../../services/schedule-fetch-by-id.js";
import { editSchedule } from "../../services/schedule-edit.js";
import {
	btnAgendar,
	descService,
	form,
	hour,
	newScheduleDate,
	pet,
	phone,
	sponser,
} from "../../utils/selectedInputs.js";
import dayjs from "dayjs";

document.addEventListener("click", async (event) => {
	if (event.target.classList.contains("edit")) {
		const item = event.target.closest("li");
		const { id } = item.dataset;
		const idSelected = await scheduleFetchById({ id: id });

		const spanId = document.createElement("span");
		spanId.textContent = id;
		spanId.id = "idSchedule";
		spanId.style.opacity = 0;

		form.nametutor.value = idSelected[0].nameSponser;
		form.namepet.value = idSelected[0].namePet;
		form.phone.value = idSelected[0].phoneNumber;
		form.descservice.value = idSelected[0].description;
		form.hourNewSchedule.value = dayjs(idSelected[0].when).format("HH:mm")
		console.log(form.hourNewSchedule.value)

		const bottomForm = document.getElementById("bottomForm")
		bottomForm.innerHTML = ""
		bottomForm.append(spanId)

		btnAgendar.textContent = "Editar";

		if (btnAgendar.textContent === "Editar") {
			form.onsubmit = async (event) => {
				event.preventDefault();
				try {
					const idSelected = document.getElementById("idSchedule");
					const idValue = idSelected.textContent;
					const nameSponser = sponser.value.trim();
					const namePet = pet.value.trim();
					const phoneNumber = phone.value.trim().replace(" ", "");
					console.log(phoneNumber);
					const description = descService.value;
					const hourSelected = hour.value;
					
					const [hourSchedule, minuteShchedule] = hourSelected.split(":");
					const when = dayjs(newScheduleDate.value).add(hourSchedule, "hour").add(minuteShchedule, "minute");

					if (!nameSponser) {
						alert("Digite o nome do tutor!");
						sponser.focus();
					}
					if (!namePet) {
						alert("Digite o nome do pet!");
						pet.focus();
					}
					if (!phoneNumber) {
						alert("Digite o telefone de contato!");
						phone.focus();
					}
					if (!hourSchedule) {
						alert("Defina a hora do atendimento!");
						hour.focus();
					}

					editSchedule({
						id: idValue,
						nameSponser,
						namePet,
						phoneNumber,
						description,
						when,
					});
					visilityOff();
				} catch (error) {
					console.log(error);
					alert("Não foi possivel editar o agendamento! Tente novamente mais tarde");
				}
			};
		}

		form.hourNewSchedule.value = hour;
		visilityOn();
	}
});
