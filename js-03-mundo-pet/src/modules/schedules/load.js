import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { scheduleShow } from "../schedules/show.js";

const selectedDate = document.getElementById("selectedDate");


export async function schedulesLoad(){
    const dateToday = selectedDate.value

    const response = await scheduleFetchByDay({date: dateToday})
    console.log({response})

    scheduleShow({ dailySchedules: response })
}


