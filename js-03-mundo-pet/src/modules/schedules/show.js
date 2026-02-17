import dayjs from "dayjs";
import { schedulesLoad } from "./load";

const morning = document.getElementById("period-morning");
const afternoon = document.getElementById("period-afternoon");
const night = document.getElementById("period-night");

export function scheduleShow({ dailySchedules }) {
	try {
		morning.innerHTML = "";
		afternoon.innerHTML = "";
		night.innerHTML = "";

		dailySchedules.forEach((schedule) => {
			const item = document.createElement("li");
			const id = document.createElement("span")
			const time = document.createElement("strong");
			const paragraph = document.createElement("p");
			const namePet = document.createElement("strong");
			const nameSponser = document.createElement("span");
			const descritionService = document.createElement("span");
			const buttons = document.createElement("span");
			const editButton = document.createElement("a");
			const cancelButton = document.createElement("a");

			const hourShow = dayjs(schedule.when).hour()
			const minuteShow = dayjs(schedule.when).minute()
			console.log(dayjs(schedule.when).minute().toFixed(2))
			const hour = minuteShow == 0 ? `${hourShow}h` : `${hourShow}h${minuteShow}`;

			id.textContent = schedule.id
			id.id = "idSchedule"
			id.value = schedule.id
			id.style.display = "none"
			
			time.textContent = hour;
			namePet.className = "namePet";
			namePet.textContent = schedule.namePet;
			nameSponser.textContent = schedule.nameSponser;
			editButton.textContent = "Editar";
			editButton.className = "edit";
			cancelButton.textContent = "Remover";
			cancelButton.className = "remover";

			item.setAttribute("data-id", schedule.id);
			paragraph.append(namePet, " / ", nameSponser);
			descritionService.textContent = schedule.description;
			buttons.className = "btnActions"
			buttons.append(editButton, cancelButton);

			item.append(time, paragraph, descritionService, buttons);

			if (hourShow < 12) {
				morning.appendChild(item);
			} else if (hourShow < 18) {
				afternoon.appendChild(item);
			} else {
				night.appendChild(item);
			}
		});

	} catch (error) {
		console.log(error);
	}
}
