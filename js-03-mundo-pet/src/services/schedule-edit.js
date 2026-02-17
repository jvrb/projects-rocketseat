import { apiConfig } from "./api-config";
import { schedulesLoad } from "../modules/schedules/load";

export async function editSchedule({ id, nameSponser, namePet, phoneNumber, description, when }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedule/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, nameSponser, namePet, phoneNumber, description, when })
        })

        schedulesLoad();

	} catch (error) {
		console.log(error);
		alert("Não foi possivel atualizar o agendamento. Tente novamente mais tade!");
	}
}