import * as playersRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayersService = async () => {
    const data = await playersRepository.findAllPlayers();
    let response = null

    if (data) {
        response = await HttpResponse.OK(data);
    }else{
        response = HttpResponse.noContent()
    }
    
    
    return response
}

export const getPlayerByIdService = async (id: number) => {
    const data = await playersRepository.findPlayerById(id);
    let response = null
    if (data) {
        response = await HttpResponse.OK(data);
    }else{
        response = HttpResponse.noContent()
    }
    return response
}