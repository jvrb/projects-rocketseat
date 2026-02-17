import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
	try {
        const response = await fetch(`${apiConfig.baseUrl}/schedule`)

        const responseJson = await response.json()

        const dailySchedules = responseJson.filter((schedule) => {
            return dayjs(date).isSame(schedule.when, "day")
        })

        // Organizando de forma crescente tendo como parametro o horario
        const organizedSchedules = dailySchedules.sort((a,b) => dayjs(a.when) - dayjs(b.when))

        return organizedSchedules
	} catch (error) {
		console.log("Não foi possivel buscar os agendamento do dia selecionado!");
	}
}
