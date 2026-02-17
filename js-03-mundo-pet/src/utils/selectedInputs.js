import dayjs from "dayjs";

export const btnViewForm = document.getElementById("btnNewSchedule");
export const btnAgendar = document.getElementById("agendar")
export const btnCancelNewForm = document.getElementById("cancelSubmit");

export const form = document.getElementById("formNewSchedule");
export const selectedDate = document.getElementById("selectedDate");
export const newScheduleDate = document.getElementById("newScheduleDate");

export const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

export const id = document.getElementById("nametutor");
export const sponser = document.getElementById("nametutor");
export const pet = document.getElementById("namepet");
export const phone = document.getElementById("phone");
export const descService = document.getElementById("descservice");
export const hour = document.getElementById("hourNewSchedule");