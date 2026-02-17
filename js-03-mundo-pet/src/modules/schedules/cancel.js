import { scheduleCancel } from "../../services/schedule-delete.js"

document.addEventListener("click", async (event) =>  {
    if(event.target.classList.contains("remover")){
        const item = event.target.closest("li");
		const { id } = item.dataset;
        console.log(id)
        try{
            await scheduleCancel({id: id})
        }catch(error){
            console.log(error)
            alert("Não foi possivel deletar esse agendamento!")
        }
    }
})