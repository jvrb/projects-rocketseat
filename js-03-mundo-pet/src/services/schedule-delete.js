import { apiConfig } from "./api-config";
import {schedulesLoad} from "../modules/schedules/load.js"

export async function scheduleCancel({ id }) {
	try {
		await fetch(`${apiConfig.baseUrl}/schedule/${id}`, {
			method: "DELETE",
		});
		alert("Agendamento cancelado!");
		schedulesLoad();
	} catch (error) {
		alert("Não foi possivel cancelar o agendamento!");
		console.log(error);
	}
}
