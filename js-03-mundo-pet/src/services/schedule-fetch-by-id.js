import { apiConfig } from "../services/api-config.js"

export async function scheduleFetchById({id}) {
    console.log(id)
    const response = await fetch(`${apiConfig.baseUrl}/schedule`)
    const responseJson = await response.json()

    const responseId = await responseJson.filter((item) => {
    
        return Number(item.id) === Number(id)
    })

    return responseId
}