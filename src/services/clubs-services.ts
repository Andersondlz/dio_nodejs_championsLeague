import * as HttpResponse from "../utils/http-helper"
import * as respository from "../repositories/clubs-repository"


export const getClubsService = async () => {
    const data = await respository.findAllClubs()
    const response = HttpResponse.OK(data)
    return response
}