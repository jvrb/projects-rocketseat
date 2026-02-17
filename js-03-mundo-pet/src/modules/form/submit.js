import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import { scheduleShow} from "../../modules/schedules/show.js"
import { visilityOn, visilityOff } from "./visibilityForm.js";
import {btnAgendar, btnCancelNewForm, btnViewForm, descService, form, hour, inputToday, newScheduleDate, pet, phone, selectedDate, sponser} from "../../utils/selectedInputs.js"

selectedDate.value = inputToday;
selectedDate.min = inputToday;

newScheduleDate.value = inputToday;
newScheduleDate.min = inputToday;

btnViewForm.addEventListener("click", () => {
	btnAgendar.textContent = "Agendar"
	visilityOn();
	console.log(dayjs(selectedDate.value))
});

btnCancelNewForm.addEventListener("click", () => {
	form.reset();
	visilityOff();
});

selectedDate.onchange = async (event) => {
	const dateToday = selectedDate.value
	
	const response = await scheduleFetchByDay({date: dateToday})
	
	scheduleShow({ dailySchedules: response })
}

form.onsubmit = async (event) => {
	event.preventDefault();

	try {
		const nameSponser = sponser.value.trim();
		const namePet = pet.value.trim();
		const phoneNumber = phone.value.trim().replace(" ", "");
		console.log(phoneNumber)
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

		const date = new Date();
		const id = String(date.getTime());

		scheduleNew({
			id,
			nameSponser,
			namePet,
			phoneNumber,
			description,
			when
		});
        visilityOff()
	} catch (error) {
		console.log(error);
		alert("Não foi possivel agendar! Tente novamente mais tarde");
	}
};
