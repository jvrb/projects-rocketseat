import { schedulesLoad } from "../modules/schedules/load";
import { apiConfig } from "./api-config";

export async function scheduleNew({ id, nameSponser, namePet, phoneNumber, description, when }) {
	try {
		// Faz a requisição para a api na rota schedule com o metodo "POST"

		await fetch(`${apiConfig.baseUrl}/schedule`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id, nameSponser, namePet, phoneNumber, description, when }),
		});

		schedulesLoad();
	} catch (error) {
		console.log(error);
		alert("Não foi possivel agendar. Tente novamente mais tade!");
	}
}
